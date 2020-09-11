/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ContentChild, Directive, Input, TemplateRef, ElementRef } from '@angular/core';
// TODO:
import { ContextualMenuItemDirective } from '../../contextual-menu/directives/contextual-menu-item.directive';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC1iYXItaXRlbS5kaXJlY3RpdmVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY29tbWFuZC1iYXIvZGlyZWN0aXZlcy9jb21tYW5kLWJhci1pdGVtLmRpcmVjdGl2ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0EsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSXhGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDOzs7O0FBYTlHLE1BQU0sT0FBTyw2QkFBNkI7OztZQUR6QyxTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsK0JBQStCLEVBQUU7OzswQkFFckQsWUFBWSxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Ozs7SUFBNUMsb0RBQXFIOzs7OztBQU92SCxNQUFNLE9BQU8saUNBQWlDOzs7WUFEN0MsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLG9DQUFvQyxFQUFFOzs7MEJBRTFELFlBQVksU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzs7O0lBQTVDLHdEQUF5SDs7QUFJM0gsTUFBTSxPQUFPLHVCQUF3QixTQUFRLDJCQUEyQjs7OztJQVN0RSxZQUFZLFVBQW1DO1FBQzdDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNwQixDQUFDOzs7WUFaRixTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsc0JBQXNCLEVBQUU7Ozs7WUE3Qk8sVUFBVTs7O3VCQWdDN0QsS0FBSzsrQkFDTCxLQUFLOzJCQUNMLEtBQUs7dUJBQ0wsS0FBSztpQ0FDTCxLQUFLO2lDQUNMLEtBQUs7Ozs7SUFMTiwyQ0FBdUQ7O0lBQ3ZELG1EQUF1RTs7SUFDdkUsK0NBQStEOztJQUMvRCwyQ0FBdUQ7O0lBQ3ZELHFEQUEyRTs7SUFDM0UscURBQTJFIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IENvbnRlbnRDaGlsZCwgRGlyZWN0aXZlLCBJbnB1dCwgVGVtcGxhdGVSZWYsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSXRlbUNoYW5nZWRQYXlsb2FkIH0gZnJvbSAnYW5ndWxhci1yZWFjdC10b29sa2l0L2NvcmUvZGVjbGFyYXRpdmUvaXRlbS1jaGFuZ2VkLnBheWxvYWQnO1xyXG5cclxuLy8gVE9ETzpcclxuaW1wb3J0IHsgQ29udGV4dHVhbE1lbnVJdGVtRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vY29udGV4dHVhbC1tZW51L2RpcmVjdGl2ZXMvY29udGV4dHVhbC1tZW51LWl0ZW0uZGlyZWN0aXZlJztcclxuaW1wb3J0IHtcclxuICBJQ29tbWFuZEJhckl0ZW1PcHRpb25zLFxyXG4gIElDb21tYW5kQmFySXRlbU9wdGlvbnNSZW5kZXJDb250ZXh0LFxyXG4gIElDb21tYW5kQmFySXRlbU9wdGlvbnNSZW5kZXJJY29uQ29udGV4dCxcclxufSBmcm9tICcuLi9jb21tYW5kLWJhci5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IHR5cGUgQ29tbWFuZEJhckl0ZW1DaGFuZ2VkUGF5bG9hZCA9IEl0ZW1DaGFuZ2VkUGF5bG9hZDxJQ29tbWFuZEJhckl0ZW1PcHRpb25zWydrZXknXSwgSUNvbW1hbmRCYXJJdGVtT3B0aW9ucz47XHJcblxyXG4vKipcclxuICogV3JhcHBlciBkaXJlY3RpdmUgdG8gYWxsb3cgcmVuZGVyaW5nIGEgY3VzdG9tIGl0ZW0gdG8gYSBDb21tYW5kQmFySXRlbS5cclxuICovXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ2ZhYi1jb21tYW5kLWJhci1pdGVtID4gcmVuZGVyJyB9KVxyXG5leHBvcnQgY2xhc3MgQ29tbWFuZEJhckl0ZW1SZW5kZXJEaXJlY3RpdmUge1xyXG4gIEBDb250ZW50Q2hpbGQoVGVtcGxhdGVSZWYsIHsgc3RhdGljOiBmYWxzZSB9KSByZWFkb25seSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8SUNvbW1hbmRCYXJJdGVtT3B0aW9uc1JlbmRlckNvbnRleHQ+O1xyXG59XHJcblxyXG4vKipcclxuICogV3JhcHBlciBkaXJlY3RpdmUgdG8gYWxsb3cgcmVuZGVyaW5nIGEgY3VzdG9tIGljb24gdG8gYSBDb21tYW5kQmFySXRlbS5cclxuICovXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ2ZhYi1jb21tYW5kLWJhci1pdGVtID4gcmVuZGVyLWljb24nIH0pXHJcbmV4cG9ydCBjbGFzcyBDb21tYW5kQmFySXRlbVJlbmRlckljb25EaXJlY3RpdmUge1xyXG4gIEBDb250ZW50Q2hpbGQoVGVtcGxhdGVSZWYsIHsgc3RhdGljOiBmYWxzZSB9KSByZWFkb25seSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8SUNvbW1hbmRCYXJJdGVtT3B0aW9uc1JlbmRlckljb25Db250ZXh0PjtcclxufVxyXG5cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnZmFiLWNvbW1hbmQtYmFyLWl0ZW0nIH0pXHJcbmV4cG9ydCBjbGFzcyBDb21tYW5kQmFySXRlbURpcmVjdGl2ZSBleHRlbmRzIENvbnRleHR1YWxNZW51SXRlbURpcmVjdGl2ZSBpbXBsZW1lbnRzIElDb21tYW5kQmFySXRlbU9wdGlvbnMge1xyXG4gIC8vIElDb21tYW5kQmFySXRlbU9wdGlvbnMgaW1wbGVtZW50YXRpb25cclxuICBASW5wdXQoKSBpY29uT25seT86IElDb21tYW5kQmFySXRlbU9wdGlvbnNbJ2ljb25Pbmx5J107XHJcbiAgQElucHV0KCkgdG9vbHRpcEhvc3RQcm9wcz86IElDb21tYW5kQmFySXRlbU9wdGlvbnNbJ3Rvb2x0aXBIb3N0UHJvcHMnXTtcclxuICBASW5wdXQoKSBidXR0b25TdHlsZXM/OiBJQ29tbWFuZEJhckl0ZW1PcHRpb25zWydidXR0b25TdHlsZXMnXTtcclxuICBASW5wdXQoKSBjYWNoZUtleT86IElDb21tYW5kQmFySXRlbU9wdGlvbnNbJ2NhY2hlS2V5J107XHJcbiAgQElucHV0KCkgcmVuZGVyZWRJbk92ZXJmbG93PzogSUNvbW1hbmRCYXJJdGVtT3B0aW9uc1sncmVuZGVyZWRJbk92ZXJmbG93J107XHJcbiAgQElucHV0KCkgY29tbWFuZEJhckJ1dHRvbkFzPzogSUNvbW1hbmRCYXJJdGVtT3B0aW9uc1snY29tbWFuZEJhckJ1dHRvbkFzJ107XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+KSB7XHJcbiAgICBzdXBlcihlbGVtZW50UmVmKTtcclxuICB9XHJcbn1cclxuIl19