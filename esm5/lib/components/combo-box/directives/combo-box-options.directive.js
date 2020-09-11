/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ContentChildren, Directive, QueryList } from '@angular/core';
import { ComboBoxOptionDirective } from "./combo-box-option.directive";
/**
 * Wrapper directive for creating multiple ComboBoxOptions
 * Note that if you use this, it will override the imperative [options] binding.
 */
var ComboBoxOptionsDirective = /** @class */ (function () {
    function ComboBoxOptionsDirective() {
    }
    Object.defineProperty(ComboBoxOptionsDirective.prototype, "items", {
        get: /**
         * @return {?}
         */
        function () {
            return this.directiveItems.map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var optionKey = _a.optionKey, otherDirectiveProps = tslib_1.__rest(_a, ["optionKey"]);
                return (tslib_1.__assign({ key: optionKey }, otherDirectiveProps));
            }));
        },
        enumerable: true,
        configurable: true
    });
    ComboBoxOptionsDirective.decorators = [
        { type: Directive, args: [{ selector: 'fab-combo-box > options' },] }
    ];
    ComboBoxOptionsDirective.propDecorators = {
        directiveItems: [{ type: ContentChildren, args: [ComboBoxOptionDirective,] }]
    };
    return ComboBoxOptionsDirective;
}());
export { ComboBoxOptionsDirective };
if (false) {
    /** @type {?} */
    ComboBoxOptionsDirective.prototype.directiveItems;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYm8tYm94LW9wdGlvbnMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljL2xpYi9jb21wb25lbnRzL2NvbWJvLWJveC8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvY29tYm8tYm94LW9wdGlvbnMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHdEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7O0FBTXZFO0lBQUE7SUFVQSxDQUFDO0lBTkMsc0JBQUksMkNBQUs7Ozs7UUFBVDtZQUNFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHOzs7O1lBQWtCLFVBQUMsRUFBcUM7Z0JBQW5DLElBQUEsd0JBQVMsRUFBRSx1REFBc0I7Z0JBQU8sT0FBQSxvQkFDekYsR0FBRyxFQUFFLFNBQVMsSUFDWCxtQkFBbUIsRUFDdEIsQ0FBQTthQUFBLEVBQUMsQ0FBQztRQUNOLENBQUM7OztPQUFBOztnQkFURixTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUseUJBQXlCLEVBQUU7OztpQ0FFL0MsZUFBZSxTQUFDLHVCQUF1Qjs7SUFRMUMsK0JBQUM7Q0FBQSxBQVZELElBVUM7U0FUWSx3QkFBd0I7OztJQUNuQyxrREFBc0ciLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgQ29udGVudENoaWxkcmVuLCBEaXJlY3RpdmUsIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJQ29tYm9Cb3hPcHRpb24gfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9Db21ib0JveCc7XHJcblxyXG5pbXBvcnQgeyBDb21ib0JveE9wdGlvbkRpcmVjdGl2ZSB9IGZyb20gXCIuL2NvbWJvLWJveC1vcHRpb24uZGlyZWN0aXZlXCI7XHJcblxyXG4vKipcclxuICogV3JhcHBlciBkaXJlY3RpdmUgZm9yIGNyZWF0aW5nIG11bHRpcGxlIENvbWJvQm94T3B0aW9uc1xyXG4gKiBOb3RlIHRoYXQgaWYgeW91IHVzZSB0aGlzLCBpdCB3aWxsIG92ZXJyaWRlIHRoZSBpbXBlcmF0aXZlIFtvcHRpb25zXSBiaW5kaW5nLlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnZmFiLWNvbWJvLWJveCA+IG9wdGlvbnMnIH0pXHJcbmV4cG9ydCBjbGFzcyBDb21ib0JveE9wdGlvbnNEaXJlY3RpdmUge1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oQ29tYm9Cb3hPcHRpb25EaXJlY3RpdmUpIHJlYWRvbmx5IGRpcmVjdGl2ZUl0ZW1zOiBRdWVyeUxpc3Q8Q29tYm9Cb3hPcHRpb25EaXJlY3RpdmU+O1xyXG5cclxuICBnZXQgaXRlbXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kaXJlY3RpdmVJdGVtcy5tYXA8SUNvbWJvQm94T3B0aW9uPigoeyBvcHRpb25LZXksIC4uLm90aGVyRGlyZWN0aXZlUHJvcHMgfSkgPT4gKHtcclxuICAgICAga2V5OiBvcHRpb25LZXksXHJcbiAgICAgIC4uLm90aGVyRGlyZWN0aXZlUHJvcHNcclxuICAgIH0pKTtcclxuICB9XHJcbn1cclxuIl19