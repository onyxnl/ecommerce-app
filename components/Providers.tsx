"use client";

import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools/production';
import { useServerInsertedHTML } from 'next/navigation';
import React, { useState } from 'react'
import PWAInstallPrompt from './PWAInstallPrompt';

export default function Providers({children} :{children:React.ReactNode}) {
    const [queryClient] = useState(() => new QueryClient());
    const [{ cache, flush }] = useState(() => {
      const emotionCache = createCache({ key: 'mui' });
      emotionCache.compat = true;

      const prevInsert = emotionCache.insert;
      let inserted: string[] = [];

      emotionCache.insert = (...args) => {
        const serialized = args[1];

        if (emotionCache.inserted[serialized.name] === undefined) {
          inserted.push(serialized.name);
        }

        return prevInsert(...args);
      };

      const flush = () => {
        const prevInserted = inserted;
        inserted = [];
        return prevInserted;
      };

      return { cache: emotionCache, flush };
    });

    useServerInsertedHTML(() => {
      const names = flush();

      if (names.length === 0) {
        return null;
      }

      let styles = '';

      for (const name of names) {
        styles += cache.inserted[name];
      }

      return (
        <style
          data-emotion={`${cache.key} ${names.join(' ')}`}
          dangerouslySetInnerHTML={{ __html: styles }}
        />
      );
    });

    return (
      <CacheProvider value={cache}>
        <QueryClientProvider client={queryClient}>
          {children}
          <PWAInstallPrompt />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </CacheProvider>
    )
}
