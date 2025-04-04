import { useState, useEffect, useRef } from "react";

export function useThrottle<T>(value: T, limit: number): T {
  const [throttledValue, setThrottledValue] = useState<T>(value);
  const lastRan = useRef(Date.now());

  useEffect(() => {
    const handler = setTimeout(() => {
      if (Date.now() - lastRan.current >= limit) {
        setThrottledValue(value);
        lastRan.current = Date.now();
      }
    }, Math.max(limit - (Date.now() - lastRan.current), 0));

    return () => clearTimeout(handler);
  }, [value, limit]);

  return throttledValue;
}
