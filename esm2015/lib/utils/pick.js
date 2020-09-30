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
export function pick(obj, ...keys) {
    return keys.reduce((/**
     * @param {?} acc
     * @param {?} key
     * @return {?}
     */
    (acc, key) => Object.assign(acc, { [key]: obj[key] })), (/** @type {?} */ ({})));
}
export default pick;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGljay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy9saWIvdXRpbHMvIiwic291cmNlcyI6WyJwaWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQVdBLE1BQU0sVUFBVSxJQUFJLENBQXNDLEdBQU0sRUFBRSxHQUFHLElBQVM7SUFDNUUsT0FBTyxJQUFJLENBQUMsTUFBTTs7Ozs7SUFBYSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFFLG1CQUFBLEVBQUUsRUFBTyxDQUFDLENBQUM7QUFDbkcsQ0FBQztBQUVELGVBQWUsSUFBSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbi8qKlxyXG4gKiBQaWNrIGEgYSBzZXQgb2YgcHJvcGVydGllcyBmcm9tIGFuIG9iamVjdC5cclxuICpcclxuICogRG9lcyAqKm5vdCoqIG1vZGlmeSB0aGUgb3JpZ2luYWwgb2JqZWN0LlxyXG4gKiBAcGFyYW0gb2JqIHRoZSBvYmplY3RcclxuICogQHBhcmFtIGtleXMgdGhlIGtleXNcclxuICogQHJldHVybnMgQSBuZXcgb2JqZWN0IHdpdGggYWxsIHByb3BlcnRpZXMgZnJvbSB0aGUgYGtleXNgIGZyb20gYG9iamBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwaWNrPFQgZXh0ZW5kcyBvYmplY3QsIEsgZXh0ZW5kcyBrZXlvZiBUPihvYmo6IFQsIC4uLmtleXM6IEtbXSk6IFBpY2s8VCwgSz4ge1xyXG4gIHJldHVybiBrZXlzLnJlZHVjZTxQaWNrPFQsIEs+PigoYWNjLCBrZXkpID0+IE9iamVjdC5hc3NpZ24oYWNjLCB7IFtrZXldOiBvYmpba2V5XSB9KSwge30gYXMgYW55KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGljaztcclxuIl19