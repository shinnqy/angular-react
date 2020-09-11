/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { Directive, Input } from '@angular/core';
/**
 * Wrapper directive for creating a DropdownOption
 * \@paramName optionKey Binds to React 'key' property.
 *                      Name change necessary because key is a reserved attribute in the wrapper component.
 */
export class DropdownOptionDirective {
}
DropdownOptionDirective.decorators = [
    { type: Directive, args: [{ selector: 'fab-dropdown-option' },] }
];
DropdownOptionDirective.propDecorators = {
    optionKey: [{ type: Input }],
    text: [{ type: Input }],
    title: [{ type: Input }],
    itemType: [{ type: Input }],
    index: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    selected: [{ type: Input }],
    disabled: [{ type: Input }],
    hidden: [{ type: Input }],
    data: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DropdownOptionDirective.prototype.optionKey;
    /** @type {?} */
    DropdownOptionDirective.prototype.text;
    /** @type {?} */
    DropdownOptionDirective.prototype.title;
    /** @type {?} */
    DropdownOptionDirective.prototype.itemType;
    /** @type {?} */
    DropdownOptionDirective.prototype.index;
    /** @type {?} */
    DropdownOptionDirective.prototype.ariaLabel;
    /** @type {?} */
    DropdownOptionDirective.prototype.selected;
    /** @type {?} */
    DropdownOptionDirective.prototype.disabled;
    /** @type {?} */
    DropdownOptionDirective.prototype.hidden;
    /** @type {?} */
    DropdownOptionDirective.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tb3B0aW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy9saWIvY29tcG9uZW50cy9kcm9wZG93bi8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvZHJvcGRvd24tb3B0aW9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBU2pELE1BQU0sT0FBTyx1QkFBdUI7OztZQURuQyxTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUscUJBQXFCLEVBQUU7Ozt3QkFFM0MsS0FBSzttQkFDTCxLQUFLO29CQUNMLEtBQUs7dUJBQ0wsS0FBSztvQkFDTCxLQUFLO3dCQUNMLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3FCQUNMLEtBQUs7bUJBQ0wsS0FBSzs7OztJQVROLDRDQUEyQzs7SUFDM0MsdUNBQXVDOztJQUN2Qyx3Q0FBMEM7O0lBQzFDLDJDQUFnRDs7SUFDaEQsd0NBQTBDOztJQUMxQyw0Q0FBa0Q7O0lBQ2xELDJDQUFnRDs7SUFDaEQsMkNBQWdEOztJQUNoRCx5Q0FBNEM7O0lBQzVDLHVDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElEcm9wZG93bk9wdGlvbiB9IGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliL0Ryb3Bkb3duJztcclxuXHJcbi8qKlxyXG4gKiBXcmFwcGVyIGRpcmVjdGl2ZSBmb3IgY3JlYXRpbmcgYSBEcm9wZG93bk9wdGlvblxyXG4gKiBAcGFyYW1OYW1lIG9wdGlvbktleSBCaW5kcyB0byBSZWFjdCAna2V5JyBwcm9wZXJ0eS5cclxuICogICAgICAgICAgICAgICAgICAgICAgTmFtZSBjaGFuZ2UgbmVjZXNzYXJ5IGJlY2F1c2Uga2V5IGlzIGEgcmVzZXJ2ZWQgYXR0cmlidXRlIGluIHRoZSB3cmFwcGVyIGNvbXBvbmVudC5cclxuICovXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ2ZhYi1kcm9wZG93bi1vcHRpb24nIH0pXHJcbmV4cG9ydCBjbGFzcyBEcm9wZG93bk9wdGlvbkRpcmVjdGl2ZSB7XHJcbiAgQElucHV0KCkgb3B0aW9uS2V5OiBJRHJvcGRvd25PcHRpb25bJ2tleSddO1xyXG4gIEBJbnB1dCgpIHRleHQ6IElEcm9wZG93bk9wdGlvblsndGV4dCddO1xyXG4gIEBJbnB1dCgpIHRpdGxlPzogSURyb3Bkb3duT3B0aW9uWyd0aXRsZSddO1xyXG4gIEBJbnB1dCgpIGl0ZW1UeXBlPzogSURyb3Bkb3duT3B0aW9uWydpdGVtVHlwZSddO1xyXG4gIEBJbnB1dCgpIGluZGV4PzogSURyb3Bkb3duT3B0aW9uWydpbmRleCddO1xyXG4gIEBJbnB1dCgpIGFyaWFMYWJlbD86IElEcm9wZG93bk9wdGlvblsnYXJpYUxhYmVsJ107XHJcbiAgQElucHV0KCkgc2VsZWN0ZWQ/OiBJRHJvcGRvd25PcHRpb25bJ3NlbGVjdGVkJ107XHJcbiAgQElucHV0KCkgZGlzYWJsZWQ/OiBJRHJvcGRvd25PcHRpb25bJ2Rpc2FibGVkJ107XHJcbiAgQElucHV0KCkgaGlkZGVuPzogSURyb3Bkb3duT3B0aW9uWydoaWRkZW4nXTtcclxuICBASW5wdXQoKSBkYXRhPzogSURyb3Bkb3duT3B0aW9uWydkYXRhJ107XHJcbn1cclxuIl19