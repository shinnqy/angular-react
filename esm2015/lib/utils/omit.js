/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
/**
 * Omit a a set of properties from an object.
 *
 * Does **not** modify the original object.
 * @template T, K
 * @param {?} obj the object
 * @param {...?} keys the keys
 * @return {?} A new object with all properties apart from the `keys` from `obj`
 */
export function omit(obj, ...keys) {
    return Object.keys(obj)
        .filter((/**
     * @param {?} key
     * @return {?}
     */
    key => !keys.includes((/** @type {?} */ (key)))))
        .reduce((/**
     * @param {?} acc
     * @param {?} key
     * @return {?}
     */
    (acc, key) => Object.assign(acc, { [key]: obj[key] })), (/** @type {?} */ ({})));
}
export default omit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib21pdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy9saWIvdXRpbHMvIiwic291cmNlcyI6WyJvbWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQWFBLE1BQU0sVUFBVSxJQUFJLENBQXNDLEdBQU0sRUFBRSxHQUFHLElBQVM7SUFDNUUsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztTQUNwQixNQUFNOzs7O0lBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQUEsR0FBRyxFQUFLLENBQUMsRUFBQztTQUN2QyxNQUFNOzs7OztJQUFhLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUUsbUJBQUEsRUFBRSxFQUFPLENBQUMsQ0FBQztBQUMxRixDQUFDO0FBRUQsZUFBZSxJQUFJLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgT21pdCB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIE9taXQgYSBhIHNldCBvZiBwcm9wZXJ0aWVzIGZyb20gYW4gb2JqZWN0LlxyXG4gKlxyXG4gKiBEb2VzICoqbm90KiogbW9kaWZ5IHRoZSBvcmlnaW5hbCBvYmplY3QuXHJcbiAqIEBwYXJhbSBvYmogdGhlIG9iamVjdFxyXG4gKiBAcGFyYW0ga2V5cyB0aGUga2V5c1xyXG4gKiBAcmV0dXJucyBBIG5ldyBvYmplY3Qgd2l0aCBhbGwgcHJvcGVydGllcyBhcGFydCBmcm9tIHRoZSBga2V5c2AgZnJvbSBgb2JqYFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG9taXQ8VCBleHRlbmRzIG9iamVjdCwgSyBleHRlbmRzIGtleW9mIFQ+KG9iajogVCwgLi4ua2V5czogS1tdKTogT21pdDxULCBLPiB7XHJcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iailcclxuICAgIC5maWx0ZXIoa2V5ID0+ICFrZXlzLmluY2x1ZGVzKGtleSBhcyBLKSlcclxuICAgIC5yZWR1Y2U8T21pdDxULCBLPj4oKGFjYywga2V5KSA9PiBPYmplY3QuYXNzaWduKGFjYywgeyBba2V5XTogb2JqW2tleV0gfSksIHt9IGFzIGFueSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG9taXQ7XHJcbiJdfQ==