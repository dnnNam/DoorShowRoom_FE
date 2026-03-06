import { useEffect, useRef } from "react";

export default function ChatWidget() {
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;

    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v3.6/inject.js";
    script1.async = true;
    document.body.appendChild(script1);

    // Chờ inject.js load xong rồi mới load config
    script1.onload = () => {
      const script2 = document.createElement("script");
      script2.src =
        "https://files.bpcontent.cloud/2026/03/04/04/20260304044852-Q4FVBB78.js";
      script2.async = true;
      document.body.appendChild(script2);
    };
  }, []);

  return null;
}
