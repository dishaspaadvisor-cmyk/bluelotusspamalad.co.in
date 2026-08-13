// lib/gtag.ts

// Extend the Window interface to include gtag and dataLayer
declare global {
  interface Window {
    gtag: (command: string, action: string, config?: Record<string, any>) => void;
    dataLayer: any[];
  }
}

// Track converted URLs to prevent duplicate events from a single click
const convertedUrls = new Set<string>();
const CONVERSION_TIMEOUT = 1000; // 1 second deduplication window

/**
 * Report a Google Ads conversion event
 * @param url - The destination URL (tel:, https:, etc.)
 * @param callback - Optional callback after conversion fires
 */
export const reportGoogleAdsConversion = (
  url?: string,
  callback?: () => void
) => {
  // Check if running in browser
  if (typeof window === "undefined") {
    return;
  }

  // If gtag is not available, just navigate normally
  if (typeof window.gtag !== "function") {
    navigateToUrl(url);
    callback?.();
    return;
  }

  // Deduplicate conversions: if this URL was already converted recently, skip
  if (url && convertedUrls.has(url)) {
    navigateToUrl(url);
    callback?.();
    return;
  }

  // Mark this URL as converted
  if (url) {
    convertedUrls.add(url);
    setTimeout(() => {
      convertedUrls.delete(url);
    }, CONVERSION_TIMEOUT);
  }

  // Set up navigation callback
  const navigationCallback = () => {
    navigateToUrl(url);
    callback?.();
  };

  // Fire the conversion event
  try {
    window.gtag("event", "conversion", {
      send_to: "AW-18387528606/j4e2COHcguEcEJ7X7b9E",
      value: 1.0,
      currency: "INR",
      transaction_id: "",
      event_callback: navigationCallback,
    });

    // Fallback: navigate after a timeout in case event_callback doesn't fire
    setTimeout(() => {
      navigationCallback();
    }, 1000);
  } catch (error) {
    // If gtag fails, still navigate
    console.error("Google Ads conversion tracking failed:", error);
    navigationCallback();
  }
};

/**
 * Navigate to URL, handling tel: and https: links appropriately
 */
const navigateToUrl = (url?: string) => {
  if (!url) {
    return;
  }

  if (url.startsWith("tel:")) {
    // For tel: links, use a different approach
    window.location.href = url;
  } else if (url.startsWith("https://") || url.startsWith("http://")) {
    // For web URLs, use navigation
    if (url.startsWith("https://wa.me")) {
      // WhatsApp links should open in new tab
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = url;
    }
  } else {
    // Default to location.href for any other protocol
    window.location.href = url;
  }
};