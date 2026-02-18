import { useEffect } from "react";

interface SEOProps {
  title: string;
  description?: string;
}

export const useDocumentTitle = ({ title, description }: SEOProps) => {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, content: string, attr: string, attrValue: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, attrValue);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    if (description) {
      setMeta('meta[name="description"]', description, "name", "description");
      setMeta('meta[property="og:title"]', title, "property", "og:title");
      setMeta('meta[property="og:description"]', description, "property", "og:description");
      setMeta('meta[name="twitter:title"]', title, "name", "twitter:title");
      setMeta('meta[name="twitter:description"]', description, "name", "twitter:description");
    }
  }, [title, description]);
};
