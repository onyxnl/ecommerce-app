"use client";

import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import DownloadIcon from "@mui/icons-material/Download";
import Typography from "@mui/material/Typography";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(true);
  const [isInstalled, setIsInstalled] = useState(() => {
    if (typeof window === "undefined") return false;
    return (
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as Navigator & { standalone?: boolean }).standalone === true
    );
  });
  const [isIOS] = useState(() => {
    if (typeof window === "undefined") return false;
    return /iphone|ipad|ipod/i.test(window.navigator.userAgent);
  });

  useEffect(() => {
    if (isInstalled) {
      return;
    }

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowPrompt(true);
    };

    const onInstalled = () => {
      setIsInstalled(true);
      setShowPrompt(false);
      setDeferredPrompt(null);
    };

    window.addEventListener("beforeinstallprompt", handler);
    window.addEventListener("appinstalled", onInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, [isInstalled]);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setDeferredPrompt(null);
      setShowPrompt(false);
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
  };

  if (!showPrompt || isInstalled) return null;

  const canUseNativePrompt = Boolean(deferredPrompt);

  const helperText = canUseNativePrompt
    ? "Add NL Store to your home screen for instant access."
    : isIOS
      ? "On iPhone/iPad, tap Share in Safari, then tap Add to Home Screen."
      : "Use your browser menu and select Install app to add NL Store.";

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 20,
        right: 20,
        background: "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)",
        color: "#fff",
        borderRadius: 2,
        padding: 2,
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
        maxWidth: 280,
        zIndex: 999,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 1 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <DownloadIcon sx={{ fontSize: 20 }} />
          <Typography component="span" sx={{ fontWeight: 600 }}>
            Install NL Store
          </Typography>
        </Box>
        <IconButton
          size="small"
          onClick={handleDismiss}
          sx={{ color: "#fff", padding: 0 }}
        >
          <CloseIcon sx={{ fontSize: 18 }} />
        </IconButton>
      </Box>
      <Typography sx={{ margin: "8px 0 12px", fontSize: 14, opacity: 0.95 }}>
        {helperText}
      </Typography>
      <Button
        onClick={handleInstall}
        disabled={!canUseNativePrompt}
        sx={{
          backgroundColor: "#fff",
          color: "#1976d2",
          fontWeight: 700,
          width: "100%",
          "&:hover": {
            backgroundColor: "#f0f0f0",
          },
          "&.Mui-disabled": {
            backgroundColor: "rgba(255, 255, 255, 0.45)",
            color: "rgba(25, 118, 210, 0.9)",
          },
        }}
        size="small"
      >
        {canUseNativePrompt ? "Install" : "Open Browser Menu"}
      </Button>
    </Box>
  );
}
