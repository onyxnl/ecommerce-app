"use client";

import { useEffect, useState } from "react";

interface PWAInstallState {
  canInstall: boolean;
  isInstalled: boolean;
}

export function usePWAInstall() {
  const [state, setState] = useState<PWAInstallState>(() => {
    if (typeof window === "undefined") {
      return {
        canInstall: false,
        isInstalled: false,
      };
    }

    return {
      canInstall: false,
      isInstalled:
        window.matchMedia("(display-mode: standalone)").matches ||
        (window.navigator as Navigator & { standalone?: boolean }).standalone === true,
    };
  });

  useEffect(() => {
    // Check for beforeinstallprompt event
    const handler = () => {
      setState((prev) => ({ ...prev, canInstall: true }));
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  return state;
}
