// hooks/useVersionCheck.js
import { useEffect } from "react";

export function useVersionCheck(intervalMs = 60000) {
  useEffect(() => {
    const checkVersion = async () => {
      try {
        const res = await fetch("/meta.json", { cache: "no-store" });
        const data = await res.json();

        const currentVersion = localStorage.getItem("app_version");
        if (currentVersion && currentVersion !== data.version) {
          console.log("New version detected. Reloading...");
          localStorage.setItem("app_version", data.version);
          window.location.reload(true);
        } else {
          localStorage.setItem("app_version", data.version);
        }
      } catch (err) {
        console.error("Version check failed:", err);
      }
    };

    checkVersion();
    const interval = setInterval(checkVersion, intervalMs);
    return () => clearInterval(interval);
  }, [intervalMs]);
}
