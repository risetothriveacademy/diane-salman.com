"use client";

import { useEffect } from "react";

interface HubSpotFormProps {
  portalId: string;
  formId: string;
  region?: string;
}

export function HubSpotForm({ portalId, formId, region = "na1" }: HubSpotFormProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.async = true;

    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: region,
          portalId: portalId,
          formId: formId,
          target: `#hubspotForm-${formId}`,
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [portalId, formId, region]);

  return <div id={`hubspotForm-${formId}`} />;
}

// TypeScript declaration for HubSpot
declare global {
  interface Window {
    hbspt: {
      forms: {
        create: (options: {
          region: string;
          portalId: string;
          formId: string;
          target: string;
        }) => void;
      };
    };
  }
}
