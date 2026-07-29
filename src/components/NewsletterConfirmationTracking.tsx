"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export function NewsletterConfirmationTracking() {
  useEffect(() => {
    trackEvent("sign_up", { method: "newsletter_double_opt_in" });
  }, []);

  return null;
}
