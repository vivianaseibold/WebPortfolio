import { useEffect } from "react";

export default function Meta({ title, description }) {
  useEffect(() => {
    if (title) document.title = title;

    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      const prev = tag?.getAttribute("content");
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", "description");
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", description);

      return () => prev !== undefined && tag.setAttribute("content", prev);
    }
  }, [title, description]);

  return null;
}
