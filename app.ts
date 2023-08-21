// function logMiddleware<T>(data: T): T {
//   console.log(data);
//   return data;
// }

// const res = logMiddleware<number>(10);
// const res2 = logMiddleware<string>("q");

// function getSplitedHaldf<T>(data: Array<T>): Array<T> {
//   const l = data.length / 2;
//   return data.splice(0, l);
// }

// getSplitedHaldf([32,323,1233])

function toString<T>(value: T): string | undefined {
  if (Array.isArray(value)) {
    return value.toString();
  }

  switch (typeof value) {
    case "string":
      return value;
    case "number":
    case "symbol":
    case "bigint":
    case "boolean":
    case "function":
      return value.toString();
    case "object":
      return JSON.stringify(value);
    default:
      return undefined;
  }
}
