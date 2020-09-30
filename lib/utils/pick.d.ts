/**
 * Pick a a set of properties from an object.
 *
 * Does **not** modify the original object.
 * @param obj the object
 * @param keys the keys
 * @returns A new object with all properties from the `keys` from `obj`
 */
export declare function pick<T extends object, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K>;
export default pick;
