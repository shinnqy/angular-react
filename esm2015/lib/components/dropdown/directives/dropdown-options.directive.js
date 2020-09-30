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
export class DropdownOptionsDirective {
    /**
     * @return {?}
     */
    get items() {
        return this.directiveItems.map((/**
         * @param {?} __0
         * @return {?}
         */
        (_a) => {
            var { optionKey } = _a, otherDirectiveProps = tslib_1.__rest(_a, ["optionKey"]);
            return (Object.assign({ key: optionKey }, otherDirectiveProps));
        }));
    }
}
DropdownOptionsDirective.decorators = [
    { type: Directive, args: [{ selector: 'fab-dropdown > options' },] }
];
DropdownOptionsDirective.propDecorators = {
    directiveItems: [{ type: ContentChildren, args: [DropdownOptionDirective,] }]
};
if (false) {
    /** @type {?} */
    DropdownOptionsDirective.prototype.directiveItems;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tb3B0aW9ucy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kcm9wZG93bi9kaXJlY3RpdmVzL2Ryb3Bkb3duLW9wdGlvbnMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7O0FBUXRFLE1BQU0sT0FBTyx3QkFBd0I7Ozs7SUFHbkMsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUc7Ozs7UUFBa0IsQ0FBQyxFQUFxQyxFQUFFLEVBQUU7Z0JBQXpDLEVBQUUsU0FBUyxPQUEwQixFQUF4Qix1REFBc0I7WUFBTyxPQUFBLGlCQUN6RixHQUFHLEVBQUUsU0FBUyxJQUNYLG1CQUFtQixFQUN0QixDQUFBO1NBQUEsRUFBQyxDQUFDO0lBQ04sQ0FBQzs7O1lBVEYsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLHdCQUF3QixFQUFFOzs7NkJBRTlDLGVBQWUsU0FBQyx1QkFBdUI7Ozs7SUFBeEMsa0RBQXNHIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IENvbnRlbnRDaGlsZHJlbiwgRGlyZWN0aXZlLCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IERyb3Bkb3duT3B0aW9uRGlyZWN0aXZlIH0gZnJvbSAnLi9kcm9wZG93bi1vcHRpb24uZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgSURyb3Bkb3duT3B0aW9uIH0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvRHJvcGRvd24nO1xyXG5cclxuLyoqXHJcbiAqIFdyYXBwZXIgZGlyZWN0aXZlIGZvciBjcmVhdGluZyBtdWx0aXBsZSBEcm9wZG93bk9wdGlvbnNcclxuICogTm90ZSB0aGF0IGlmIHlvdSB1c2UgdGhpcywgaXQgd2lsbCBvdmVycmlkZSB0aGUgaW1wZXJhdGl2ZSBbb3B0aW9uc10gYmluZGluZy5cclxuICovXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ2ZhYi1kcm9wZG93biA+IG9wdGlvbnMnIH0pXHJcbmV4cG9ydCBjbGFzcyBEcm9wZG93bk9wdGlvbnNEaXJlY3RpdmUge1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oRHJvcGRvd25PcHRpb25EaXJlY3RpdmUpIHJlYWRvbmx5IGRpcmVjdGl2ZUl0ZW1zOiBRdWVyeUxpc3Q8RHJvcGRvd25PcHRpb25EaXJlY3RpdmU+O1xyXG5cclxuICBnZXQgaXRlbXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kaXJlY3RpdmVJdGVtcy5tYXA8SURyb3Bkb3duT3B0aW9uPigoeyBvcHRpb25LZXksIC4uLm90aGVyRGlyZWN0aXZlUHJvcHMgfSkgPT4gKHtcclxuICAgICAga2V5OiBvcHRpb25LZXksXHJcbiAgICAgIC4uLm90aGVyRGlyZWN0aXZlUHJvcHNcclxuICAgIH0pKTtcclxuICB9XHJcbn1cclxuIl19