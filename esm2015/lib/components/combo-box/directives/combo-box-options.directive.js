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
export class ComboBoxOptionsDirective {
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
ComboBoxOptionsDirective.decorators = [
    { type: Directive, args: [{ selector: 'fab-combo-box > options' },] }
];
ComboBoxOptionsDirective.propDecorators = {
    directiveItems: [{ type: ContentChildren, args: [ComboBoxOptionDirective,] }]
};
if (false) {
    /** @type {?} */
    ComboBoxOptionsDirective.prototype.directiveItems;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYm8tYm94LW9wdGlvbnMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljL2xpYi9jb21wb25lbnRzL2NvbWJvLWJveC8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvY29tYm8tYm94LW9wdGlvbnMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHdEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7O0FBT3ZFLE1BQU0sT0FBTyx3QkFBd0I7Ozs7SUFHbkMsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUc7Ozs7UUFBa0IsQ0FBQyxFQUFxQyxFQUFFLEVBQUU7Z0JBQXpDLEVBQUUsU0FBUyxPQUEwQixFQUF4Qix1REFBc0I7WUFBTyxPQUFBLGlCQUN6RixHQUFHLEVBQUUsU0FBUyxJQUNYLG1CQUFtQixFQUN0QixDQUFBO1NBQUEsRUFBQyxDQUFDO0lBQ04sQ0FBQzs7O1lBVEYsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLHlCQUF5QixFQUFFOzs7NkJBRS9DLGVBQWUsU0FBQyx1QkFBdUI7Ozs7SUFBeEMsa0RBQXNHIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IENvbnRlbnRDaGlsZHJlbiwgRGlyZWN0aXZlLCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSUNvbWJvQm94T3B0aW9uIH0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvQ29tYm9Cb3gnO1xyXG5cclxuaW1wb3J0IHsgQ29tYm9Cb3hPcHRpb25EaXJlY3RpdmUgfSBmcm9tIFwiLi9jb21iby1ib3gtb3B0aW9uLmRpcmVjdGl2ZVwiO1xyXG5cclxuLyoqXHJcbiAqIFdyYXBwZXIgZGlyZWN0aXZlIGZvciBjcmVhdGluZyBtdWx0aXBsZSBDb21ib0JveE9wdGlvbnNcclxuICogTm90ZSB0aGF0IGlmIHlvdSB1c2UgdGhpcywgaXQgd2lsbCBvdmVycmlkZSB0aGUgaW1wZXJhdGl2ZSBbb3B0aW9uc10gYmluZGluZy5cclxuICovXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ2ZhYi1jb21iby1ib3ggPiBvcHRpb25zJyB9KVxyXG5leHBvcnQgY2xhc3MgQ29tYm9Cb3hPcHRpb25zRGlyZWN0aXZlIHtcclxuICBAQ29udGVudENoaWxkcmVuKENvbWJvQm94T3B0aW9uRGlyZWN0aXZlKSByZWFkb25seSBkaXJlY3RpdmVJdGVtczogUXVlcnlMaXN0PENvbWJvQm94T3B0aW9uRGlyZWN0aXZlPjtcclxuXHJcbiAgZ2V0IGl0ZW1zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZGlyZWN0aXZlSXRlbXMubWFwPElDb21ib0JveE9wdGlvbj4oKHsgb3B0aW9uS2V5LCAuLi5vdGhlckRpcmVjdGl2ZVByb3BzIH0pID0+ICh7XHJcbiAgICAgIGtleTogb3B0aW9uS2V5LFxyXG4gICAgICAuLi5vdGhlckRpcmVjdGl2ZVByb3BzXHJcbiAgICB9KSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==