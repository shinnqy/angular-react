/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    const itemChangesOverrides = ((/** @type {?} */ (Object.entries(changes)))).reduce((/**
     * @param {?} acc
     * @param {?} __1
     * @return {?}
     */
    (acc, [propertyKey, change]) => Object.assign(acc, { [propertyKey]: change.currentValue })), {});
    return Object.assign({}, target, itemChangesOverrides);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1jaGFuZ2VkLmhlbHBlcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvbGliL2NvbXBvbmVudHMvY29yZS8iLCJzb3VyY2VzIjpbImRlY2xhcmF0aXZlL2l0ZW0tY2hhbmdlZC5oZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUtBLE1BQU0sVUFBVSxnQkFBZ0IsQ0FBbUIsTUFBUyxFQUFFLE9BQXVCOztVQUM3RSxvQkFBb0IsR0FBZSxDQUFDLG1CQUFBLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBRWhFLENBQUMsQ0FBQyxNQUFNOzs7OztJQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDLEdBQUUsRUFBRSxDQUFDO0lBRXpHLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLG9CQUFvQixDQUFDLENBQUM7QUFDekQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyBJdGVtQ2hhbmdlcywgUHJvcGVydHlDaGFuZ2UgfSBmcm9tICcuL2l0ZW0tY2hhbmdlZC5wYXlsb2FkJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUl0ZW1DaGFuZ2VzPFQgZXh0ZW5kcyBvYmplY3Q+KHRhcmdldDogVCwgY2hhbmdlczogSXRlbUNoYW5nZXM8VD4pOiBUIHtcclxuICBjb25zdCBpdGVtQ2hhbmdlc092ZXJyaWRlczogUGFydGlhbDxUPiA9IChPYmplY3QuZW50cmllcyhjaGFuZ2VzKSBhcyBBcnJheTxcclxuICAgIFtrZXlvZiBULCBQcm9wZXJ0eUNoYW5nZTxUW2tleW9mIFRdPl1cclxuICA+KS5yZWR1Y2UoKGFjYywgW3Byb3BlcnR5S2V5LCBjaGFuZ2VdKSA9PiBPYmplY3QuYXNzaWduKGFjYywgeyBbcHJvcGVydHlLZXldOiBjaGFuZ2UuY3VycmVudFZhbHVlIH0pLCB7fSk7XHJcblxyXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB0YXJnZXQsIGl0ZW1DaGFuZ2VzT3ZlcnJpZGVzKTtcclxufVxyXG4iXX0=