"use client";

import ReactDOM from "react-dom";

export default function PreloadResources() {
  ReactDOM.preconnect("https://www.googletagmanager.com");
  ReactDOM.prefetchDNS("https://www.google-analytics.com");
  return null;
}
