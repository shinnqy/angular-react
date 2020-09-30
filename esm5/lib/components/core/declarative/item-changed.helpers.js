/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
/**
 * @template T
 * @param {?} target
 * @param {?} changes
 * @return {?}
 */
export function mergeItemChanges(target, changes) {
    /** @type {?} */
    var itemChangesOverrides = ((/** @type {?} */ (Object.entries(changes)))).reduce((/**
     * @param {?} acc
     * @param {?} __1
     * @return {?}
     */
    function (acc, _a) {
        var _b;
        var _c = tslib_1.__read(_a, 2), propertyKey = _c[0], change = _c[1];
        return Object.assign(acc, (_b = {}, _b[propertyKey] = change.currentValue, _b));
    }), {});
    return Object.assign({}, target, itemChangesOverrides);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1jaGFuZ2VkLmhlbHBlcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvbGliL2NvbXBvbmVudHMvY29yZS8iLCJzb3VyY2VzIjpbImRlY2xhcmF0aXZlL2l0ZW0tY2hhbmdlZC5oZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFLQSxNQUFNLFVBQVUsZ0JBQWdCLENBQW1CLE1BQVMsRUFBRSxPQUF1Qjs7UUFDN0Usb0JBQW9CLEdBQWUsQ0FBQyxtQkFBQSxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUVoRSxDQUFDLENBQUMsTUFBTTs7Ozs7SUFBQyxVQUFDLEdBQUcsRUFBRSxFQUFxQjs7WUFBckIsMEJBQXFCLEVBQXBCLG1CQUFXLEVBQUUsY0FBTTtRQUFNLE9BQUEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLFlBQUksR0FBQyxXQUFXLElBQUcsTUFBTSxDQUFDLFlBQVksTUFBRztJQUExRCxDQUEwRCxHQUFFLEVBQUUsQ0FBQztJQUV6RyxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0FBQ3pELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgSXRlbUNoYW5nZXMsIFByb3BlcnR5Q2hhbmdlIH0gZnJvbSAnLi9pdGVtLWNoYW5nZWQucGF5bG9hZCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VJdGVtQ2hhbmdlczxUIGV4dGVuZHMgb2JqZWN0Pih0YXJnZXQ6IFQsIGNoYW5nZXM6IEl0ZW1DaGFuZ2VzPFQ+KTogVCB7XHJcbiAgY29uc3QgaXRlbUNoYW5nZXNPdmVycmlkZXM6IFBhcnRpYWw8VD4gPSAoT2JqZWN0LmVudHJpZXMoY2hhbmdlcykgYXMgQXJyYXk8XHJcbiAgICBba2V5b2YgVCwgUHJvcGVydHlDaGFuZ2U8VFtrZXlvZiBUXT5dXHJcbiAgPikucmVkdWNlKChhY2MsIFtwcm9wZXJ0eUtleSwgY2hhbmdlXSkgPT4gT2JqZWN0LmFzc2lnbihhY2MsIHsgW3Byb3BlcnR5S2V5XTogY2hhbmdlLmN1cnJlbnRWYWx1ZSB9KSwge30pO1xyXG5cclxuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgdGFyZ2V0LCBpdGVtQ2hhbmdlc092ZXJyaWRlcyk7XHJcbn1cclxuIl19