/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** Implementation borrowed from https://github.com/joakimbeng/kebab-case */
/** @type {?} */
var KEBAB_REGEX = /[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g;
/**
 * @param {?} str
 * @return {?}
 */
export function kebabCase(str) {
    return str.replace(KEBAB_REGEX, (/**
     * @param {?} match
     * @return {?}
     */
    function (match) { return '-' + match.toLowerCase(); }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2ViYWItY2FzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy9saWIvdXRpbHMvIiwic291cmNlcyI6WyJrZWJhYi1jYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUVNLFdBQVcsR0FBRyxrQ0FBa0M7Ozs7O0FBRXRELE1BQU0sVUFBVSxTQUFTLENBQUMsR0FBVztJQUNuQyxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVzs7OztJQUFFLFVBQUEsS0FBSyxJQUFJLE9BQUEsR0FBRyxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBekIsQ0FBeUIsRUFBQyxDQUFDO0FBQ3RFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogSW1wbGVtZW50YXRpb24gYm9ycm93ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vam9ha2ltYmVuZy9rZWJhYi1jYXNlICovXHJcblxyXG5jb25zdCBLRUJBQl9SRUdFWCA9IC9bQS1aXFx1MDBDMC1cXHUwMEQ2XFx1MDBEOC1cXHUwMERFXS9nO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGtlYmFiQ2FzZShzdHI6IHN0cmluZykge1xyXG4gIHJldHVybiBzdHIucmVwbGFjZShLRUJBQl9SRUdFWCwgbWF0Y2ggPT4gJy0nICsgbWF0Y2gudG9Mb3dlckNhc2UoKSk7XHJcbn1cclxuIl19