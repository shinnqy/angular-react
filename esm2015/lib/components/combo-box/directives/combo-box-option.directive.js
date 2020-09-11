/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { Directive, Input } from '@angular/core';
/**
 * Wrapper directive for creating a ComboBoxOption
 * \@paramName optionKey Binds to React 'key' property.
 *                      Name change necessary because key is a reserved attribute in the wrapper component.
 */
export class ComboBoxOptionDirective {
}
ComboBoxOptionDirective.decorators = [
    { type: Directive, args: [{ selector: 'fab-combo-box-option' },] }
];
ComboBoxOptionDirective.propDecorators = {
    optionKey: [{ type: Input }],
    text: [{ type: Input }],
    title: [{ type: Input }],
    itemType: [{ type: Input }],
    index: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    selected: [{ type: Input }],
    disabled: [{ type: Input }],
    data: [{ type: Input }],
    styles: [{ type: Input }],
    useAriaLabelAsText: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ComboBoxOptionDirective.prototype.optionKey;
    /** @type {?} */
    ComboBoxOptionDirective.prototype.text;
    /** @type {?} */
    ComboBoxOptionDirective.prototype.title;
    /** @type {?} */
    ComboBoxOptionDirective.prototype.itemType;
    /** @type {?} */
    ComboBoxOptionDirective.prototype.index;
    /** @type {?} */
    ComboBoxOptionDirective.prototype.ariaLabel;
    /** @type {?} */
    ComboBoxOptionDirective.prototype.selected;
    /** @type {?} */
    ComboBoxOptionDirective.prototype.disabled;
    /** @type {?} */
    ComboBoxOptionDirective.prototype.data;
    /** @type {?} */
    ComboBoxOptionDirective.prototype.styles;
    /** @type {?} */
    ComboBoxOptionDirective.prototype.useAriaLabelAsText;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYm8tYm94LW9wdGlvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvbGliL2NvbXBvbmVudHMvY29tYm8tYm94LyIsInNvdXJjZXMiOlsiZGlyZWN0aXZlcy9jb21iby1ib3gtb3B0aW9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBU2pELE1BQU0sT0FBTyx1QkFBdUI7OztZQURuQyxTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsc0JBQXNCLEVBQUU7Ozt3QkFFNUMsS0FBSzttQkFDTCxLQUFLO29CQUNMLEtBQUs7dUJBQ0wsS0FBSztvQkFDTCxLQUFLO3dCQUNMLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLO21CQUNMLEtBQUs7cUJBQ0wsS0FBSztpQ0FDTCxLQUFLOzs7O0lBVk4sNENBQTJDOztJQUMzQyx1Q0FBdUM7O0lBQ3ZDLHdDQUEwQzs7SUFDMUMsMkNBQWdEOztJQUNoRCx3Q0FBMEM7O0lBQzFDLDRDQUFrRDs7SUFDbEQsMkNBQWdEOztJQUNoRCwyQ0FBZ0Q7O0lBQ2hELHVDQUF3Qzs7SUFDeEMseUNBQTRDOztJQUM1QyxxREFBb0UiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJQ29tYm9Cb3hPcHRpb24gfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9Db21ib0JveCc7XHJcblxyXG4vKipcclxuICogV3JhcHBlciBkaXJlY3RpdmUgZm9yIGNyZWF0aW5nIGEgQ29tYm9Cb3hPcHRpb25cclxuICogQHBhcmFtTmFtZSBvcHRpb25LZXkgQmluZHMgdG8gUmVhY3QgJ2tleScgcHJvcGVydHkuXHJcbiAqICAgICAgICAgICAgICAgICAgICAgIE5hbWUgY2hhbmdlIG5lY2Vzc2FyeSBiZWNhdXNlIGtleSBpcyBhIHJlc2VydmVkIGF0dHJpYnV0ZSBpbiB0aGUgd3JhcHBlciBjb21wb25lbnQuXHJcbiAqL1xyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdmYWItY29tYm8tYm94LW9wdGlvbicgfSlcclxuZXhwb3J0IGNsYXNzIENvbWJvQm94T3B0aW9uRGlyZWN0aXZlIHtcclxuICBASW5wdXQoKSBvcHRpb25LZXk6IElDb21ib0JveE9wdGlvblsna2V5J107XHJcbiAgQElucHV0KCkgdGV4dDogSUNvbWJvQm94T3B0aW9uWyd0ZXh0J107XHJcbiAgQElucHV0KCkgdGl0bGU/OiBJQ29tYm9Cb3hPcHRpb25bJ3RpdGxlJ107XHJcbiAgQElucHV0KCkgaXRlbVR5cGU/OiBJQ29tYm9Cb3hPcHRpb25bJ2l0ZW1UeXBlJ107XHJcbiAgQElucHV0KCkgaW5kZXg/OiBJQ29tYm9Cb3hPcHRpb25bJ2luZGV4J107XHJcbiAgQElucHV0KCkgYXJpYUxhYmVsPzogSUNvbWJvQm94T3B0aW9uWydhcmlhTGFiZWwnXTtcclxuICBASW5wdXQoKSBzZWxlY3RlZD86IElDb21ib0JveE9wdGlvblsnc2VsZWN0ZWQnXTtcclxuICBASW5wdXQoKSBkaXNhYmxlZD86IElDb21ib0JveE9wdGlvblsnZGlzYWJsZWQnXTtcclxuICBASW5wdXQoKSBkYXRhPzogSUNvbWJvQm94T3B0aW9uWydkYXRhJ107XHJcbiAgQElucHV0KCkgc3R5bGVzPzogSUNvbWJvQm94T3B0aW9uWydzdHlsZXMnXTtcclxuICBASW5wdXQoKSB1c2VBcmlhTGFiZWxBc1RleHQ/OiBJQ29tYm9Cb3hPcHRpb25bJ3VzZUFyaWFMYWJlbEFzVGV4dCddO1xyXG59XHJcbiJdfQ==