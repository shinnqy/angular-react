/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
/**
 * Pick a a set of properties from an object.
 *
 * Does **not** modify the original object.
 * @template T, K
 * @param {?} obj the object
 * @param {...?} keys the keys
 * @return {?} A new object with all properties from the `keys` from `obj`
 */
export function pick(obj) {
    var keys = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        keys[_i - 1] = arguments[_i];
    }
    return keys.reduce((/**
     * @param {?} acc
     * @param {?} key
     * @return {?}
     */
    function (acc, key) {
        var _a;
        return Object.assign(acc, (_a = {}, _a[key] = obj[key], _a));
    }), (/** @type {?} */ ({})));
}
export default pick;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGljay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy9saWIvdXRpbHMvIiwic291cmNlcyI6WyJwaWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQVdBLE1BQU0sVUFBVSxJQUFJLENBQXNDLEdBQU07SUFBRSxjQUFZO1NBQVosVUFBWSxFQUFaLHFCQUFZLEVBQVosSUFBWTtRQUFaLDZCQUFZOztJQUM1RSxPQUFPLElBQUksQ0FBQyxNQUFNOzs7OztJQUFhLFVBQUMsR0FBRyxFQUFFLEdBQUc7O1FBQUssT0FBQSxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsWUFBSSxHQUFDLEdBQUcsSUFBRyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQUc7SUFBdkMsQ0FBdUMsR0FBRSxtQkFBQSxFQUFFLEVBQU8sQ0FBQyxDQUFDO0FBQ25HLENBQUM7QUFFRCxlQUFlLElBQUksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG4vKipcclxuICogUGljayBhIGEgc2V0IG9mIHByb3BlcnRpZXMgZnJvbSBhbiBvYmplY3QuXHJcbiAqXHJcbiAqIERvZXMgKipub3QqKiBtb2RpZnkgdGhlIG9yaWdpbmFsIG9iamVjdC5cclxuICogQHBhcmFtIG9iaiB0aGUgb2JqZWN0XHJcbiAqIEBwYXJhbSBrZXlzIHRoZSBrZXlzXHJcbiAqIEByZXR1cm5zIEEgbmV3IG9iamVjdCB3aXRoIGFsbCBwcm9wZXJ0aWVzIGZyb20gdGhlIGBrZXlzYCBmcm9tIGBvYmpgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcGljazxUIGV4dGVuZHMgb2JqZWN0LCBLIGV4dGVuZHMga2V5b2YgVD4ob2JqOiBULCAuLi5rZXlzOiBLW10pOiBQaWNrPFQsIEs+IHtcclxuICByZXR1cm4ga2V5cy5yZWR1Y2U8UGljazxULCBLPj4oKGFjYywga2V5KSA9PiBPYmplY3QuYXNzaWduKGFjYywgeyBba2V5XTogb2JqW2tleV0gfSksIHt9IGFzIGFueSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBpY2s7XHJcbiJdfQ==