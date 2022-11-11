import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    document
      .getElementById("topOfPageRef")
      .scrollIntoView();
  }, [pathname]);

  return null;
}
