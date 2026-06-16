import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Prevent immediate execution to allow the DOM to fully render/settle
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 0);
    } else {
      // No hash? Just scroll to the top of the new page
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]); // Trigger whenever path or hash changes

  return null;
}