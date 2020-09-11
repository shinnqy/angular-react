/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ContentChild, Directive, Input, TemplateRef, ElementRef } from '@angular/core';
// TODO:
import { ContextualMenuItemDirective } from '../../contextual-menu/directives/contextual-menu-item.directive';
/**
 * Wrapper directive to allow rendering a custom item to a CommandBarItem.
 */
var CommandBarItemRenderDirective = /** @class */ (function () {
    function CommandBarItemRenderDirective() {
    }
    CommandBarItemRenderDirective.decorators = [
        { type: Directive, args: [{ selector: 'fab-command-bar-item > render' },] }
    ];
    CommandBarItemRenderDirective.propDecorators = {
        templateRef: [{ type: ContentChild, args: [TemplateRef, { static: false },] }]
    };
    return CommandBarItemRenderDirective;
}());
export { CommandBarItemRenderDirective };
if (false) {
    /** @type {?} */
    CommandBarItemRenderDirective.prototype.templateRef;
}
/**
 * Wrapper directive to allow rendering a custom icon to a CommandBarItem.
 */
var CommandBarItemRenderIconDirective = /** @class */ (function () {
    function CommandBarItemRenderIconDirective() {
    }
    CommandBarItemRenderIconDirective.decorators = [
        { type: Directive, args: [{ selector: 'fab-command-bar-item > render-icon' },] }
    ];
    CommandBarItemRenderIconDirective.propDecorators = {
        templateRef: [{ type: ContentChild, args: [TemplateRef, { static: false },] }]
    };
    return CommandBarItemRenderIconDirective;
}());
export { CommandBarItemRenderIconDirective };
if (false) {
    /** @type {?} */
    CommandBarItemRenderIconDirective.prototype.templateRef;
}
var CommandBarItemDirective = /** @class */ (function (_super) {
    tslib_1.__extends(CommandBarItemDirective, _super);
    function CommandBarItemDirective(elementRef) {
        return _super.call(this, elementRef) || this;
    }
    CommandBarItemDirective.decorators = [
        { type: Directive, args: [{ selector: 'fab-command-bar-item' },] }
    ];
    /** @nocollapse */
    CommandBarItemDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    CommandBarItemDirective.propDecorators = {
        iconOnly: [{ type: Input }],
        tooltipHostProps: [{ type: Input }],
        buttonStyles: [{ type: Input }],
        cacheKey: [{ type: Input }],
        renderedInOverflow: [{ type: Input }],
        commandBarButtonAs: [{ type: Input }]
    };
    return CommandBarItemDirective;
}(ContextualMenuItemDirective));
export { CommandBarItemDirective };
if (false) {
    /** @type {?} */
    CommandBarItemDirective.prototype.iconOnly;
    /** @type {?} */
    CommandBarItemDirective.prototype.tooltipHostProps;
    /** @type {?} */
    CommandBarItemDirective.prototype.buttonStyles;
    /** @type {?} */
    CommandBarItemDirective.prototype.cacheKey;
    /** @type {?} */
    CommandBarItemDirective.prototype.renderedInOverflow;
    /** @type {?} */
    CommandBarItemDirective.prototype.commandBarButtonAs;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC1iYXItaXRlbS5kaXJlY3RpdmVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY29tbWFuZC1iYXIvZGlyZWN0aXZlcy9jb21tYW5kLWJhci1pdGVtLmRpcmVjdGl2ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUl4RixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQzs7OztBQVk5RztJQUFBO0lBR0EsQ0FBQzs7Z0JBSEEsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLCtCQUErQixFQUFFOzs7OEJBRXJELFlBQVksU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztJQUM5QyxvQ0FBQztDQUFBLEFBSEQsSUFHQztTQUZZLDZCQUE2Qjs7O0lBQ3hDLG9EQUFxSDs7Ozs7QUFNdkg7SUFBQTtJQUdBLENBQUM7O2dCQUhBLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxvQ0FBb0MsRUFBRTs7OzhCQUUxRCxZQUFZLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7SUFDOUMsd0NBQUM7Q0FBQSxBQUhELElBR0M7U0FGWSxpQ0FBaUM7OztJQUM1Qyx3REFBeUg7O0FBRzNIO0lBQzZDLG1EQUEyQjtJQVN0RSxpQ0FBWSxVQUFtQztlQUM3QyxrQkFBTSxVQUFVLENBQUM7SUFDbkIsQ0FBQzs7Z0JBWkYsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFFOzs7O2dCQTdCTyxVQUFVOzs7MkJBZ0M3RCxLQUFLO21DQUNMLEtBQUs7K0JBQ0wsS0FBSzsyQkFDTCxLQUFLO3FDQUNMLEtBQUs7cUNBQ0wsS0FBSzs7SUFLUiw4QkFBQztDQUFBLEFBYkQsQ0FDNkMsMkJBQTJCLEdBWXZFO1NBWlksdUJBQXVCOzs7SUFFbEMsMkNBQXVEOztJQUN2RCxtREFBdUU7O0lBQ3ZFLCtDQUErRDs7SUFDL0QsMkNBQXVEOztJQUN2RCxxREFBMkU7O0lBQzNFLHFEQUEyRSIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyBDb250ZW50Q2hpbGQsIERpcmVjdGl2ZSwgSW5wdXQsIFRlbXBsYXRlUmVmLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEl0ZW1DaGFuZ2VkUGF5bG9hZCB9IGZyb20gJ2FuZ3VsYXItcmVhY3QtdG9vbGtpdC9jb3JlL2RlY2xhcmF0aXZlL2l0ZW0tY2hhbmdlZC5wYXlsb2FkJztcclxuXHJcbi8vIFRPRE86XHJcbmltcG9ydCB7IENvbnRleHR1YWxNZW51SXRlbURpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2NvbnRleHR1YWwtbWVudS9kaXJlY3RpdmVzL2NvbnRleHR1YWwtbWVudS1pdGVtLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7XHJcbiAgSUNvbW1hbmRCYXJJdGVtT3B0aW9ucyxcclxuICBJQ29tbWFuZEJhckl0ZW1PcHRpb25zUmVuZGVyQ29udGV4dCxcclxuICBJQ29tbWFuZEJhckl0ZW1PcHRpb25zUmVuZGVySWNvbkNvbnRleHQsXHJcbn0gZnJvbSAnLi4vY29tbWFuZC1iYXIuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCB0eXBlIENvbW1hbmRCYXJJdGVtQ2hhbmdlZFBheWxvYWQgPSBJdGVtQ2hhbmdlZFBheWxvYWQ8SUNvbW1hbmRCYXJJdGVtT3B0aW9uc1sna2V5J10sIElDb21tYW5kQmFySXRlbU9wdGlvbnM+O1xyXG5cclxuLyoqXHJcbiAqIFdyYXBwZXIgZGlyZWN0aXZlIHRvIGFsbG93IHJlbmRlcmluZyBhIGN1c3RvbSBpdGVtIHRvIGEgQ29tbWFuZEJhckl0ZW0uXHJcbiAqL1xyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdmYWItY29tbWFuZC1iYXItaXRlbSA+IHJlbmRlcicgfSlcclxuZXhwb3J0IGNsYXNzIENvbW1hbmRCYXJJdGVtUmVuZGVyRGlyZWN0aXZlIHtcclxuICBAQ29udGVudENoaWxkKFRlbXBsYXRlUmVmLCB7IHN0YXRpYzogZmFsc2UgfSkgcmVhZG9ubHkgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPElDb21tYW5kQmFySXRlbU9wdGlvbnNSZW5kZXJDb250ZXh0PjtcclxufVxyXG5cclxuLyoqXHJcbiAqIFdyYXBwZXIgZGlyZWN0aXZlIHRvIGFsbG93IHJlbmRlcmluZyBhIGN1c3RvbSBpY29uIHRvIGEgQ29tbWFuZEJhckl0ZW0uXHJcbiAqL1xyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdmYWItY29tbWFuZC1iYXItaXRlbSA+IHJlbmRlci1pY29uJyB9KVxyXG5leHBvcnQgY2xhc3MgQ29tbWFuZEJhckl0ZW1SZW5kZXJJY29uRGlyZWN0aXZlIHtcclxuICBAQ29udGVudENoaWxkKFRlbXBsYXRlUmVmLCB7IHN0YXRpYzogZmFsc2UgfSkgcmVhZG9ubHkgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPElDb21tYW5kQmFySXRlbU9wdGlvbnNSZW5kZXJJY29uQ29udGV4dD47XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ2ZhYi1jb21tYW5kLWJhci1pdGVtJyB9KVxyXG5leHBvcnQgY2xhc3MgQ29tbWFuZEJhckl0ZW1EaXJlY3RpdmUgZXh0ZW5kcyBDb250ZXh0dWFsTWVudUl0ZW1EaXJlY3RpdmUgaW1wbGVtZW50cyBJQ29tbWFuZEJhckl0ZW1PcHRpb25zIHtcclxuICAvLyBJQ29tbWFuZEJhckl0ZW1PcHRpb25zIGltcGxlbWVudGF0aW9uXHJcbiAgQElucHV0KCkgaWNvbk9ubHk/OiBJQ29tbWFuZEJhckl0ZW1PcHRpb25zWydpY29uT25seSddO1xyXG4gIEBJbnB1dCgpIHRvb2x0aXBIb3N0UHJvcHM/OiBJQ29tbWFuZEJhckl0ZW1PcHRpb25zWyd0b29sdGlwSG9zdFByb3BzJ107XHJcbiAgQElucHV0KCkgYnV0dG9uU3R5bGVzPzogSUNvbW1hbmRCYXJJdGVtT3B0aW9uc1snYnV0dG9uU3R5bGVzJ107XHJcbiAgQElucHV0KCkgY2FjaGVLZXk/OiBJQ29tbWFuZEJhckl0ZW1PcHRpb25zWydjYWNoZUtleSddO1xyXG4gIEBJbnB1dCgpIHJlbmRlcmVkSW5PdmVyZmxvdz86IElDb21tYW5kQmFySXRlbU9wdGlvbnNbJ3JlbmRlcmVkSW5PdmVyZmxvdyddO1xyXG4gIEBJbnB1dCgpIGNvbW1hbmRCYXJCdXR0b25Bcz86IElDb21tYW5kQmFySXRlbU9wdGlvbnNbJ2NvbW1hbmRCYXJCdXR0b25BcyddO1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pikge1xyXG4gICAgc3VwZXIoZWxlbWVudFJlZik7XHJcbiAgfVxyXG59XHJcbiJdfQ==