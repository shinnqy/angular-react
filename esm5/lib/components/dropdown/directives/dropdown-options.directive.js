/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ContentChildren, Directive, QueryList } from '@angular/core';
import { DropdownOptionDirective } from './dropdown-option.directive';
/**
 * Wrapper directive for creating multiple DropdownOptions
 * Note that if you use this, it will override the imperative [options] binding.
 */
var DropdownOptionsDirective = /** @class */ (function () {
    function DropdownOptionsDirective() {
    }
    Object.defineProperty(DropdownOptionsDirective.prototype, "items", {
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
    DropdownOptionsDirective.decorators = [
        { type: Directive, args: [{ selector: 'fab-dropdown > options' },] }
    ];
    DropdownOptionsDirective.propDecorators = {
        directiveItems: [{ type: ContentChildren, args: [DropdownOptionDirective,] }]
    };
    return DropdownOptionsDirective;
}());
export { DropdownOptionsDirective };
if (false) {
    /** @type {?} */
    DropdownOptionsDirective.prototype.directiveItems;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tb3B0aW9ucy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kcm9wZG93bi9kaXJlY3RpdmVzL2Ryb3Bkb3duLW9wdGlvbnMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7O0FBT3RFO0lBQUE7SUFVQSxDQUFDO0lBTkMsc0JBQUksMkNBQUs7Ozs7UUFBVDtZQUNFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHOzs7O1lBQWtCLFVBQUMsRUFBcUM7Z0JBQW5DLElBQUEsd0JBQVMsRUFBRSx1REFBc0I7Z0JBQU8sT0FBQSxvQkFDekYsR0FBRyxFQUFFLFNBQVMsSUFDWCxtQkFBbUIsRUFDdEIsQ0FBQTthQUFBLEVBQUMsQ0FBQztRQUNOLENBQUM7OztPQUFBOztnQkFURixTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsd0JBQXdCLEVBQUU7OztpQ0FFOUMsZUFBZSxTQUFDLHVCQUF1Qjs7SUFRMUMsK0JBQUM7Q0FBQSxBQVZELElBVUM7U0FUWSx3QkFBd0I7OztJQUNuQyxrREFBc0ciLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgQ29udGVudENoaWxkcmVuLCBEaXJlY3RpdmUsIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRHJvcGRvd25PcHRpb25EaXJlY3RpdmUgfSBmcm9tICcuL2Ryb3Bkb3duLW9wdGlvbi5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBJRHJvcGRvd25PcHRpb24gfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9Ecm9wZG93bic7XHJcblxyXG4vKipcclxuICogV3JhcHBlciBkaXJlY3RpdmUgZm9yIGNyZWF0aW5nIG11bHRpcGxlIERyb3Bkb3duT3B0aW9uc1xyXG4gKiBOb3RlIHRoYXQgaWYgeW91IHVzZSB0aGlzLCBpdCB3aWxsIG92ZXJyaWRlIHRoZSBpbXBlcmF0aXZlIFtvcHRpb25zXSBiaW5kaW5nLlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnZmFiLWRyb3Bkb3duID4gb3B0aW9ucycgfSlcclxuZXhwb3J0IGNsYXNzIERyb3Bkb3duT3B0aW9uc0RpcmVjdGl2ZSB7XHJcbiAgQENvbnRlbnRDaGlsZHJlbihEcm9wZG93bk9wdGlvbkRpcmVjdGl2ZSkgcmVhZG9ubHkgZGlyZWN0aXZlSXRlbXM6IFF1ZXJ5TGlzdDxEcm9wZG93bk9wdGlvbkRpcmVjdGl2ZT47XHJcblxyXG4gIGdldCBpdGVtcygpIHtcclxuICAgIHJldHVybiB0aGlzLmRpcmVjdGl2ZUl0ZW1zLm1hcDxJRHJvcGRvd25PcHRpb24+KCh7IG9wdGlvbktleSwgLi4ub3RoZXJEaXJlY3RpdmVQcm9wcyB9KSA9PiAoe1xyXG4gICAgICBrZXk6IG9wdGlvbktleSxcclxuICAgICAgLi4ub3RoZXJEaXJlY3RpdmVQcm9wc1xyXG4gICAgfSkpO1xyXG4gIH1cclxufVxyXG4iXX0=