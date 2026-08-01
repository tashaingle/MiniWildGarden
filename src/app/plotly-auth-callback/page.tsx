import type { Metadata } from "next";
import { PlotlyAuthCallback } from "@/components/PlotlyAuthCallback";

export const metadata: Metadata = {
  title: "Plotly account confirmation",
  description: "Finish confirming your Plotly garden account and open the app.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/plotly-auth-callback" },
};

export default function PlotlyAuthCallbackPage() {
  return <PlotlyAuthCallback />;
}
