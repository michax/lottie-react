import { RefCallback, RefObject, useCallback, useState } from "react";

type UseCallbackRefResult<T = unknown> = {
  ref: RefObject<T>;
  setRef: RefCallback<T>;
};

/**
 * Ref that rerender on change
 * TODO: check if it's the MOST efficient way to do it
 * @param initialValue
 */
const useCallbackRef = <T = unknown>(initialValue?: T): UseCallbackRefResult<T> => {
  const [current, setCurrent] = useState<T | null>(initialValue ?? null);

  const setRef = useCallback<(node: T) => void>((node) => {
    setCurrent(node);
  }, []);

  return { ref: { current }, setRef };
};

export default useCallbackRef;