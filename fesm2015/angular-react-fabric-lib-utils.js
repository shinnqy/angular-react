/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** Implementation borrowed from https://github.com/joakimbeng/kebab-case */
/** @type {?} */
const KEBAB_REGEX = /[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g;
/**
 * @param {?} str
 * @return {?}
 */
function kebabCase(str) {
    return str.replace(KEBAB_REGEX, (/**
     * @param {?} match
     * @return {?}
     */
    match => '-' + match.toLowerCase()));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
function getDataAttributes(element, keepDataPrefix = false) {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Noop function - doesn't do anything
 * @type {?}
 */
const noop = (/**
 * @param {...?} args
 * @return {?}
 */
(...args) => {
    args.forEach(Object.keys);
});

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
function omit(obj, ...keys) {
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
function pick(obj, ...keys) {
    return keys.reduce((/**
     * @param {?} acc
     * @param {?} key
     * @return {?}
     */
    (acc, key) => Object.assign(acc, { [key]: obj[key] })), (/** @type {?} */ ({})));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { getDataAttributes, kebabCase, noop, omit, pick };
//# sourceMappingURL=angular-react-fabric-lib-utils.js.map
