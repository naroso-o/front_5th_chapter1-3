export function deepEquals<T>(objA: T, objB: T): boolean {
  if (!objA || !objB) {
    return objA === objB ? true : false;
  }

  if (Array.isArray(objA) && Array.isArray(objB)) {
    if (objA.length !== objB.length) return false;

    for (let i = 0; i < objA.length; i++) {
      if (typeof objA[i] == "object" || typeof objB[i] == "object") {
        return deepEquals(objA[i], objB[i]);
      }
      if (objA[i] !== objB[i]) return false;
    }

    return true;
  }

  if (typeof objA === "object" && typeof objB === "object") {
    for (const key in objA) {
      if (typeof objA[key] == "object" || typeof objB[key] == "object") {
        return deepEquals(objA[key], objB[key]);
      }
      if (objA[key] !== objB[key]) return false;
    }

    return true;
  }
  return objA === objB;
}
