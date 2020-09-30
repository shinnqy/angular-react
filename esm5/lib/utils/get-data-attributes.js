/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { kebabCase } from './kebab-case';
/**
 * Gets the data attributes on an `HTMLElement`.
 *
 * \@example
 * ```keepDataPrefix === false```:
 * ```html
 * <div data-service="Foo" data-service-type="bar"></div> -> { 'service': 'Foo', 'service-type': 'Bar' }
 * ```
 * ```keepDataPrefix === true```:
 * ```html
 * <div data-service="Foo" data-service-type="bar"></div> -> { 'data-service': 'Foo', 'data-service-type': 'Bar' }
 * ```
 * @template T
 * @param {?} element
 * @param {?=} keepDataPrefix
 * @return {?}
 */
export function getDataAttributes(element, keepDataPrefix) {
    if (keepDataPrefix === void 0) { keepDataPrefix = false; }
    return Object.entries(element.dataset).reduce((/**
     * @param {?} acc
     * @param {?} __1
     * @return {?}
     */
    function (acc, _a) {
        var _b;
        var _c = tslib_1.__read(_a, 2), key = _c[0], value = _c[1];
        return (tslib_1.__assign({}, acc, (_b = {}, _b[calculateKey(key, keepDataPrefix)] = value, _b)));
    }), {});
}
/**
 * @param {?} key
 * @param {?} keepDataPrefix
 * @return {?}
 */
function calculateKey(key, keepDataPrefix) {
    return "" + (keepDataPrefix && 'data-') + kebabCase(key);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWRhdGEtYXR0cmlidXRlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy9saWIvdXRpbHMvIiwic291cmNlcyI6WyJnZXQtZGF0YS1hdHRyaWJ1dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0J6QyxNQUFNLFVBQVUsaUJBQWlCLENBQy9CLE9BQVUsRUFDVixjQUErQjtJQUEvQiwrQkFBQSxFQUFBLHNCQUErQjtJQUUvQixPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU07Ozs7O0lBQzNDLFVBQUMsR0FBRyxFQUFFLEVBQVk7O1lBQVosMEJBQVksRUFBWCxXQUFHLEVBQUUsYUFBSztRQUFNLE9BQUEsc0JBQ2xCLEdBQUcsZUFDTCxZQUFZLENBQUMsR0FBRyxFQUFFLGNBQWMsQ0FBQyxJQUFHLEtBQUssT0FDMUM7SUFIcUIsQ0FHckIsR0FDRixFQUFFLENBQ0gsQ0FBQztBQUNKLENBQUM7Ozs7OztBQUVELFNBQVMsWUFBWSxDQUFDLEdBQVcsRUFBRSxjQUF1QjtJQUN4RCxPQUFPLE1BQUcsY0FBYyxJQUFJLE9BQU8sSUFBRyxTQUFTLENBQUMsR0FBRyxDQUFHLENBQUM7QUFDekQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGtlYmFiQ2FzZSB9IGZyb20gJy4va2ViYWItY2FzZSc7XHJcblxyXG4vKipcclxuICogR2V0cyB0aGUgZGF0YSBhdHRyaWJ1dGVzIG9uIGFuIGBIVE1MRWxlbWVudGAuXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbmBgYGtlZXBEYXRhUHJlZml4ID09PSBmYWxzZWBgYDpcclxuYGBgaHRtbFxyXG48ZGl2IGRhdGEtc2VydmljZT1cIkZvb1wiIGRhdGEtc2VydmljZS10eXBlPVwiYmFyXCI+PC9kaXY+IC0+IHsgJ3NlcnZpY2UnOiAnRm9vJywgJ3NlcnZpY2UtdHlwZSc6ICdCYXInIH1cclxuYGBgXHJcblxyXG5gYGBrZWVwRGF0YVByZWZpeCA9PT0gdHJ1ZWBgYDpcclxuYGBgaHRtbFxyXG48ZGl2IGRhdGEtc2VydmljZT1cIkZvb1wiIGRhdGEtc2VydmljZS10eXBlPVwiYmFyXCI+PC9kaXY+IC0+IHsgJ2RhdGEtc2VydmljZSc6ICdGb28nLCAnZGF0YS1zZXJ2aWNlLXR5cGUnOiAnQmFyJyB9XHJcbmBgYFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGFBdHRyaWJ1dGVzPFQgZXh0ZW5kcyBIVE1MRWxlbWVudD4oXHJcbiAgZWxlbWVudDogVCxcclxuICBrZWVwRGF0YVByZWZpeDogYm9vbGVhbiA9IGZhbHNlXHJcbik6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xyXG4gIHJldHVybiBPYmplY3QuZW50cmllcyhlbGVtZW50LmRhdGFzZXQpLnJlZHVjZShcclxuICAgIChhY2MsIFtrZXksIHZhbHVlXSkgPT4gKHtcclxuICAgICAgLi4uYWNjLFxyXG4gICAgICBbY2FsY3VsYXRlS2V5KGtleSwga2VlcERhdGFQcmVmaXgpXTogdmFsdWUsXHJcbiAgICB9KSxcclxuICAgIHt9XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2FsY3VsYXRlS2V5KGtleTogc3RyaW5nLCBrZWVwRGF0YVByZWZpeDogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgcmV0dXJuIGAke2tlZXBEYXRhUHJlZml4ICYmICdkYXRhLSd9JHtrZWJhYkNhc2Uoa2V5KX1gO1xyXG59XHJcbiJdfQ==