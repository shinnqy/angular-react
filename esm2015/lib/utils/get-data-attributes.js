/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export function getDataAttributes(element, keepDataPrefix = false) {
    return Object.entries(element.dataset).reduce((/**
     * @param {?} acc
     * @param {?} __1
     * @return {?}
     */
    (acc, [key, value]) => (Object.assign({}, acc, { [calculateKey(key, keepDataPrefix)]: value }))), {});
}
/**
 * @param {?} key
 * @param {?} keepDataPrefix
 * @return {?}
 */
function calculateKey(key, keepDataPrefix) {
    return `${keepDataPrefix && 'data-'}${kebabCase(key)}`;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWRhdGEtYXR0cmlidXRlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy9saWIvdXRpbHMvIiwic291cmNlcyI6WyJnZXQtZGF0YS1hdHRyaWJ1dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQnpDLE1BQU0sVUFBVSxpQkFBaUIsQ0FDL0IsT0FBVSxFQUNWLGlCQUEwQixLQUFLO0lBRS9CLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTTs7Ozs7SUFDM0MsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLG1CQUNsQixHQUFHLElBQ04sQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLGNBQWMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxJQUMxQyxHQUNGLEVBQUUsQ0FDSCxDQUFDO0FBQ0osQ0FBQzs7Ozs7O0FBRUQsU0FBUyxZQUFZLENBQUMsR0FBVyxFQUFFLGNBQXVCO0lBQ3hELE9BQU8sR0FBRyxjQUFjLElBQUksT0FBTyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO0FBQ3pELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBrZWJhYkNhc2UgfSBmcm9tICcuL2tlYmFiLWNhc2UnO1xyXG5cclxuLyoqXHJcbiAqIEdldHMgdGhlIGRhdGEgYXR0cmlidXRlcyBvbiBhbiBgSFRNTEVsZW1lbnRgLlxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG5gYGBrZWVwRGF0YVByZWZpeCA9PT0gZmFsc2VgYGA6XHJcbmBgYGh0bWxcclxuPGRpdiBkYXRhLXNlcnZpY2U9XCJGb29cIiBkYXRhLXNlcnZpY2UtdHlwZT1cImJhclwiPjwvZGl2PiAtPiB7ICdzZXJ2aWNlJzogJ0ZvbycsICdzZXJ2aWNlLXR5cGUnOiAnQmFyJyB9XHJcbmBgYFxyXG5cclxuYGBga2VlcERhdGFQcmVmaXggPT09IHRydWVgYGA6XHJcbmBgYGh0bWxcclxuPGRpdiBkYXRhLXNlcnZpY2U9XCJGb29cIiBkYXRhLXNlcnZpY2UtdHlwZT1cImJhclwiPjwvZGl2PiAtPiB7ICdkYXRhLXNlcnZpY2UnOiAnRm9vJywgJ2RhdGEtc2VydmljZS10eXBlJzogJ0JhcicgfVxyXG5gYGBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhQXR0cmlidXRlczxUIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KFxyXG4gIGVsZW1lbnQ6IFQsXHJcbiAga2VlcERhdGFQcmVmaXg6IGJvb2xlYW4gPSBmYWxzZVxyXG4pOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHtcclxuICByZXR1cm4gT2JqZWN0LmVudHJpZXMoZWxlbWVudC5kYXRhc2V0KS5yZWR1Y2UoXHJcbiAgICAoYWNjLCBba2V5LCB2YWx1ZV0pID0+ICh7XHJcbiAgICAgIC4uLmFjYyxcclxuICAgICAgW2NhbGN1bGF0ZUtleShrZXksIGtlZXBEYXRhUHJlZml4KV06IHZhbHVlLFxyXG4gICAgfSksXHJcbiAgICB7fVxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbGN1bGF0ZUtleShrZXk6IHN0cmluZywga2VlcERhdGFQcmVmaXg6IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gIHJldHVybiBgJHtrZWVwRGF0YVByZWZpeCAmJiAnZGF0YS0nfSR7a2ViYWJDYXNlKGtleSl9YDtcclxufVxyXG4iXX0=