import { GoogleAnalytics } from '@next/third-parties/google';
import { GA_MEASUREMENT_ID } from '@/lib/site';

/** Loads GA4 in production when NEXT_PUBLIC_GA_MEASUREMENT_ID is set. */
export function Analytics() {
  if (process.env.NODE_ENV !== 'production' || !GA_MEASUREMENT_ID) {
    return null;
  }

  return <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />;
}
