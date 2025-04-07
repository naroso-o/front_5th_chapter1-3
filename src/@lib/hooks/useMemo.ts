import { DependencyList } from "react";
import { shallowEquals } from "../equalities";
import { useRef } from "./useRef";

export function useMemo<T>(
  /** 캐싱할 값을 계산하는 함수 */
  factory: () => T,
  /** factory 함수에서 참조되는 모든 변수 */
  _deps: DependencyList,
  _equals = shallowEquals,
): T {
  const valueRef = useRef<T | undefined>(undefined);
  const depsRef = useRef<DependencyList | undefined>(undefined);

  if (!_equals(depsRef.current, _deps)) {
    depsRef.current = _deps;
    valueRef.current = factory();
  }

  return valueRef.current as T;
}
