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
export function omit(obj) {
    var keys = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        keys[_i - 1] = arguments[_i];
    }
    return Object.keys(obj)
        .filter((/**
     * @param {?} key
     * @return {?}
     */
    function (key) { return !keys.includes((/** @type {?} */ (key))); }))
        .reduce((/**
     * @param {?} acc
     * @param {?} key
     * @return {?}
     */
    function (acc, key) {
        var _a;
        return Object.assign(acc, (_a = {}, _a[key] = obj[key], _a));
    }), (/** @type {?} */ ({})));
}
export default omit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib21pdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy9saWIvdXRpbHMvIiwic291cmNlcyI6WyJvbWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQWFBLE1BQU0sVUFBVSxJQUFJLENBQXNDLEdBQU07SUFBRSxjQUFZO1NBQVosVUFBWSxFQUFaLHFCQUFZLEVBQVosSUFBWTtRQUFaLDZCQUFZOztJQUM1RSxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1NBQ3BCLE1BQU07Ozs7SUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBQSxHQUFHLEVBQUssQ0FBQyxFQUF4QixDQUF3QixFQUFDO1NBQ3ZDLE1BQU07Ozs7O0lBQWEsVUFBQyxHQUFHLEVBQUUsR0FBRzs7UUFBSyxPQUFBLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxZQUFJLEdBQUMsR0FBRyxJQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBRztJQUF2QyxDQUF1QyxHQUFFLG1CQUFBLEVBQUUsRUFBTyxDQUFDLENBQUM7QUFDMUYsQ0FBQztBQUVELGVBQWUsSUFBSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IE9taXQgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBPbWl0IGEgYSBzZXQgb2YgcHJvcGVydGllcyBmcm9tIGFuIG9iamVjdC5cclxuICpcclxuICogRG9lcyAqKm5vdCoqIG1vZGlmeSB0aGUgb3JpZ2luYWwgb2JqZWN0LlxyXG4gKiBAcGFyYW0gb2JqIHRoZSBvYmplY3RcclxuICogQHBhcmFtIGtleXMgdGhlIGtleXNcclxuICogQHJldHVybnMgQSBuZXcgb2JqZWN0IHdpdGggYWxsIHByb3BlcnRpZXMgYXBhcnQgZnJvbSB0aGUgYGtleXNgIGZyb20gYG9iamBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBvbWl0PFQgZXh0ZW5kcyBvYmplY3QsIEsgZXh0ZW5kcyBrZXlvZiBUPihvYmo6IFQsIC4uLmtleXM6IEtbXSk6IE9taXQ8VCwgSz4ge1xyXG4gIHJldHVybiBPYmplY3Qua2V5cyhvYmopXHJcbiAgICAuZmlsdGVyKGtleSA9PiAha2V5cy5pbmNsdWRlcyhrZXkgYXMgSykpXHJcbiAgICAucmVkdWNlPE9taXQ8VCwgSz4+KChhY2MsIGtleSkgPT4gT2JqZWN0LmFzc2lnbihhY2MsIHsgW2tleV06IG9ialtrZXldIH0pLCB7fSBhcyBhbnkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBvbWl0O1xyXG4iXX0=