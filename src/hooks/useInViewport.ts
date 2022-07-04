import  { useState,useEffect, RefObject } from "react";

export const useInViewport= (element:RefObject<HTMLElement>, rootMargin:string) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
              setState(entry.isIntersecting);
          }, { rootMargin }
      );

    element.current && observer.observe(element.current);
    const obj=element.current

    return () => {obj&&observer.unobserve(obj)};
    
  }, [element, rootMargin]);

  return isVisible;
};