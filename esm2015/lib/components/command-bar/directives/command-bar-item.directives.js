/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ContentChild, Directive, Input, TemplateRef, ElementRef } from '@angular/core';
import { ContextualMenuItemDirective } from '@angular-react/fabric/lib/components/contextual-menu';
/**
 * Wrapper directive to allow rendering a custom item to a CommandBarItem.
 */
export class CommandBarItemRenderDirective {
}
CommandBarItemRenderDirective.decorators = [
    { type: Directive, args: [{ selector: 'fab-command-bar-item > render' },] }
];
CommandBarItemRenderDirective.propDecorators = {
    templateRef: [{ type: ContentChild, args: [TemplateRef, { static: false },] }]
};
if (false) {
    /** @type {?} */
    CommandBarItemRenderDirective.prototype.templateRef;
}
/**
 * Wrapper directive to allow rendering a custom icon to a CommandBarItem.
 */
export class CommandBarItemRenderIconDirective {
}
CommandBarItemRenderIconDirective.decorators = [
    { type: Directive, args: [{ selector: 'fab-command-bar-item > render-icon' },] }
];
CommandBarItemRenderIconDirective.propDecorators = {
    templateRef: [{ type: ContentChild, args: [TemplateRef, { static: false },] }]
};
if (false) {
    /** @type {?} */
    CommandBarItemRenderIconDirective.prototype.templateRef;
}
export class CommandBarItemDirective extends ContextualMenuItemDirective {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        super(elementRef);
    }
}
CommandBarItemDirective.decorators = [
    { type: Directive, args: [{ selector: 'fab-command-bar-item' },] }
];
/** @nocollapse */
CommandBarItemDirective.ctorParameters = () => [
    { type: ElementRef }
];
CommandBarItemDirective.propDecorators = {
    iconOnly: [{ type: Input }],
    tooltipHostProps: [{ type: Input }],
    buttonStyles: [{ type: Input }],
    cacheKey: [{ type: Input }],
    renderedInOverflow: [{ type: Input }],
    commandBarButtonAs: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC1iYXItaXRlbS5kaXJlY3RpdmVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY29tbWFuZC1iYXIvZGlyZWN0aXZlcy9jb21tYW5kLWJhci1pdGVtLmRpcmVjdGl2ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0EsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sc0RBQXNELENBQUE7Ozs7QUFhbEcsTUFBTSxPQUFPLDZCQUE2Qjs7O1lBRHpDLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSwrQkFBK0IsRUFBRTs7OzBCQUVyRCxZQUFZLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7OztJQUE1QyxvREFBcUg7Ozs7O0FBT3ZILE1BQU0sT0FBTyxpQ0FBaUM7OztZQUQ3QyxTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsb0NBQW9DLEVBQUU7OzswQkFFMUQsWUFBWSxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Ozs7SUFBNUMsd0RBQXlIOztBQUkzSCxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsMkJBQTJCOzs7O0lBU3RFLFlBQVksVUFBbUM7UUFDN0MsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7OztZQVpGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxzQkFBc0IsRUFBRTs7OztZQTNCTyxVQUFVOzs7dUJBOEI3RCxLQUFLOytCQUNMLEtBQUs7MkJBQ0wsS0FBSzt1QkFDTCxLQUFLO2lDQUNMLEtBQUs7aUNBQ0wsS0FBSzs7OztJQUxOLDJDQUF1RDs7SUFDdkQsbURBQXVFOztJQUN2RSwrQ0FBK0Q7O0lBQy9ELDJDQUF1RDs7SUFDdkQscURBQTJFOztJQUMzRSxxREFBMkUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgQ29udGVudENoaWxkLCBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJdGVtQ2hhbmdlZFBheWxvYWQgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9mYWJyaWMvbGliL2NvbXBvbmVudHMvY29yZSc7XHJcbmltcG9ydCB7IENvbnRleHR1YWxNZW51SXRlbURpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy9saWIvY29tcG9uZW50cy9jb250ZXh0dWFsLW1lbnUnXHJcbmltcG9ydCB7XHJcbiAgSUNvbW1hbmRCYXJJdGVtT3B0aW9ucyxcclxuICBJQ29tbWFuZEJhckl0ZW1PcHRpb25zUmVuZGVyQ29udGV4dCxcclxuICBJQ29tbWFuZEJhckl0ZW1PcHRpb25zUmVuZGVySWNvbkNvbnRleHQsXHJcbn0gZnJvbSAnLi4vY29tbWFuZC1iYXIuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCB0eXBlIENvbW1hbmRCYXJJdGVtQ2hhbmdlZFBheWxvYWQgPSBJdGVtQ2hhbmdlZFBheWxvYWQ8SUNvbW1hbmRCYXJJdGVtT3B0aW9uc1sna2V5J10sIElDb21tYW5kQmFySXRlbU9wdGlvbnM+O1xyXG5cclxuLyoqXHJcbiAqIFdyYXBwZXIgZGlyZWN0aXZlIHRvIGFsbG93IHJlbmRlcmluZyBhIGN1c3RvbSBpdGVtIHRvIGEgQ29tbWFuZEJhckl0ZW0uXHJcbiAqL1xyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdmYWItY29tbWFuZC1iYXItaXRlbSA+IHJlbmRlcicgfSlcclxuZXhwb3J0IGNsYXNzIENvbW1hbmRCYXJJdGVtUmVuZGVyRGlyZWN0aXZlIHtcclxuICBAQ29udGVudENoaWxkKFRlbXBsYXRlUmVmLCB7IHN0YXRpYzogZmFsc2UgfSkgcmVhZG9ubHkgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPElDb21tYW5kQmFySXRlbU9wdGlvbnNSZW5kZXJDb250ZXh0PjtcclxufVxyXG5cclxuLyoqXHJcbiAqIFdyYXBwZXIgZGlyZWN0aXZlIHRvIGFsbG93IHJlbmRlcmluZyBhIGN1c3RvbSBpY29uIHRvIGEgQ29tbWFuZEJhckl0ZW0uXHJcbiAqL1xyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdmYWItY29tbWFuZC1iYXItaXRlbSA+IHJlbmRlci1pY29uJyB9KVxyXG5leHBvcnQgY2xhc3MgQ29tbWFuZEJhckl0ZW1SZW5kZXJJY29uRGlyZWN0aXZlIHtcclxuICBAQ29udGVudENoaWxkKFRlbXBsYXRlUmVmLCB7IHN0YXRpYzogZmFsc2UgfSkgcmVhZG9ubHkgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPElDb21tYW5kQmFySXRlbU9wdGlvbnNSZW5kZXJJY29uQ29udGV4dD47XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ2ZhYi1jb21tYW5kLWJhci1pdGVtJyB9KVxyXG5leHBvcnQgY2xhc3MgQ29tbWFuZEJhckl0ZW1EaXJlY3RpdmUgZXh0ZW5kcyBDb250ZXh0dWFsTWVudUl0ZW1EaXJlY3RpdmUgaW1wbGVtZW50cyBJQ29tbWFuZEJhckl0ZW1PcHRpb25zIHtcclxuICAvLyBJQ29tbWFuZEJhckl0ZW1PcHRpb25zIGltcGxlbWVudGF0aW9uXHJcbiAgQElucHV0KCkgaWNvbk9ubHk/OiBJQ29tbWFuZEJhckl0ZW1PcHRpb25zWydpY29uT25seSddO1xyXG4gIEBJbnB1dCgpIHRvb2x0aXBIb3N0UHJvcHM/OiBJQ29tbWFuZEJhckl0ZW1PcHRpb25zWyd0b29sdGlwSG9zdFByb3BzJ107XHJcbiAgQElucHV0KCkgYnV0dG9uU3R5bGVzPzogSUNvbW1hbmRCYXJJdGVtT3B0aW9uc1snYnV0dG9uU3R5bGVzJ107XHJcbiAgQElucHV0KCkgY2FjaGVLZXk/OiBJQ29tbWFuZEJhckl0ZW1PcHRpb25zWydjYWNoZUtleSddO1xyXG4gIEBJbnB1dCgpIHJlbmRlcmVkSW5PdmVyZmxvdz86IElDb21tYW5kQmFySXRlbU9wdGlvbnNbJ3JlbmRlcmVkSW5PdmVyZmxvdyddO1xyXG4gIEBJbnB1dCgpIGNvbW1hbmRCYXJCdXR0b25Bcz86IElDb21tYW5kQmFySXRlbU9wdGlvbnNbJ2NvbW1hbmRCYXJCdXR0b25BcyddO1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pikge1xyXG4gICAgc3VwZXIoZWxlbWVudFJlZik7XHJcbiAgfVxyXG59XHJcbiJdfQ==