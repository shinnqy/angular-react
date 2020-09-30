/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ContentChild, Directive, Input, TemplateRef, ElementRef } from '@angular/core';
import { ContextualMenuItemDirective } from '@angular-react/fabric/lib/components/contextual-menu';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC1iYXItaXRlbS5kaXJlY3RpdmVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY29tbWFuZC1iYXIvZGlyZWN0aXZlcy9jb21tYW5kLWJhci1pdGVtLmRpcmVjdGl2ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHNEQUFzRCxDQUFBOzs7O0FBWWxHO0lBQUE7SUFHQSxDQUFDOztnQkFIQSxTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsK0JBQStCLEVBQUU7Ozs4QkFFckQsWUFBWSxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O0lBQzlDLG9DQUFDO0NBQUEsQUFIRCxJQUdDO1NBRlksNkJBQTZCOzs7SUFDeEMsb0RBQXFIOzs7OztBQU12SDtJQUFBO0lBR0EsQ0FBQzs7Z0JBSEEsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLG9DQUFvQyxFQUFFOzs7OEJBRTFELFlBQVksU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztJQUM5Qyx3Q0FBQztDQUFBLEFBSEQsSUFHQztTQUZZLGlDQUFpQzs7O0lBQzVDLHdEQUF5SDs7QUFHM0g7SUFDNkMsbURBQTJCO0lBU3RFLGlDQUFZLFVBQW1DO2VBQzdDLGtCQUFNLFVBQVUsQ0FBQztJQUNuQixDQUFDOztnQkFaRixTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsc0JBQXNCLEVBQUU7Ozs7Z0JBM0JPLFVBQVU7OzsyQkE4QjdELEtBQUs7bUNBQ0wsS0FBSzsrQkFDTCxLQUFLOzJCQUNMLEtBQUs7cUNBQ0wsS0FBSztxQ0FDTCxLQUFLOztJQUtSLDhCQUFDO0NBQUEsQUFiRCxDQUM2QywyQkFBMkIsR0FZdkU7U0FaWSx1QkFBdUI7OztJQUVsQywyQ0FBdUQ7O0lBQ3ZELG1EQUF1RTs7SUFDdkUsK0NBQStEOztJQUMvRCwyQ0FBdUQ7O0lBQ3ZELHFEQUEyRTs7SUFDM0UscURBQTJFIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IENvbnRlbnRDaGlsZCwgRGlyZWN0aXZlLCBJbnB1dCwgVGVtcGxhdGVSZWYsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSXRlbUNoYW5nZWRQYXlsb2FkIH0gZnJvbSAnQGFuZ3VsYXItcmVhY3QvZmFicmljL2xpYi9jb21wb25lbnRzL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250ZXh0dWFsTWVudUl0ZW1EaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9mYWJyaWMvbGliL2NvbXBvbmVudHMvY29udGV4dHVhbC1tZW51J1xyXG5pbXBvcnQge1xyXG4gIElDb21tYW5kQmFySXRlbU9wdGlvbnMsXHJcbiAgSUNvbW1hbmRCYXJJdGVtT3B0aW9uc1JlbmRlckNvbnRleHQsXHJcbiAgSUNvbW1hbmRCYXJJdGVtT3B0aW9uc1JlbmRlckljb25Db250ZXh0LFxyXG59IGZyb20gJy4uL2NvbW1hbmQtYmFyLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgdHlwZSBDb21tYW5kQmFySXRlbUNoYW5nZWRQYXlsb2FkID0gSXRlbUNoYW5nZWRQYXlsb2FkPElDb21tYW5kQmFySXRlbU9wdGlvbnNbJ2tleSddLCBJQ29tbWFuZEJhckl0ZW1PcHRpb25zPjtcclxuXHJcbi8qKlxyXG4gKiBXcmFwcGVyIGRpcmVjdGl2ZSB0byBhbGxvdyByZW5kZXJpbmcgYSBjdXN0b20gaXRlbSB0byBhIENvbW1hbmRCYXJJdGVtLlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnZmFiLWNvbW1hbmQtYmFyLWl0ZW0gPiByZW5kZXInIH0pXHJcbmV4cG9ydCBjbGFzcyBDb21tYW5kQmFySXRlbVJlbmRlckRpcmVjdGl2ZSB7XHJcbiAgQENvbnRlbnRDaGlsZChUZW1wbGF0ZVJlZiwgeyBzdGF0aWM6IGZhbHNlIH0pIHJlYWRvbmx5IHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxJQ29tbWFuZEJhckl0ZW1PcHRpb25zUmVuZGVyQ29udGV4dD47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBXcmFwcGVyIGRpcmVjdGl2ZSB0byBhbGxvdyByZW5kZXJpbmcgYSBjdXN0b20gaWNvbiB0byBhIENvbW1hbmRCYXJJdGVtLlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnZmFiLWNvbW1hbmQtYmFyLWl0ZW0gPiByZW5kZXItaWNvbicgfSlcclxuZXhwb3J0IGNsYXNzIENvbW1hbmRCYXJJdGVtUmVuZGVySWNvbkRpcmVjdGl2ZSB7XHJcbiAgQENvbnRlbnRDaGlsZChUZW1wbGF0ZVJlZiwgeyBzdGF0aWM6IGZhbHNlIH0pIHJlYWRvbmx5IHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxJQ29tbWFuZEJhckl0ZW1PcHRpb25zUmVuZGVySWNvbkNvbnRleHQ+O1xyXG59XHJcblxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdmYWItY29tbWFuZC1iYXItaXRlbScgfSlcclxuZXhwb3J0IGNsYXNzIENvbW1hbmRCYXJJdGVtRGlyZWN0aXZlIGV4dGVuZHMgQ29udGV4dHVhbE1lbnVJdGVtRGlyZWN0aXZlIGltcGxlbWVudHMgSUNvbW1hbmRCYXJJdGVtT3B0aW9ucyB7XHJcbiAgLy8gSUNvbW1hbmRCYXJJdGVtT3B0aW9ucyBpbXBsZW1lbnRhdGlvblxyXG4gIEBJbnB1dCgpIGljb25Pbmx5PzogSUNvbW1hbmRCYXJJdGVtT3B0aW9uc1snaWNvbk9ubHknXTtcclxuICBASW5wdXQoKSB0b29sdGlwSG9zdFByb3BzPzogSUNvbW1hbmRCYXJJdGVtT3B0aW9uc1sndG9vbHRpcEhvc3RQcm9wcyddO1xyXG4gIEBJbnB1dCgpIGJ1dHRvblN0eWxlcz86IElDb21tYW5kQmFySXRlbU9wdGlvbnNbJ2J1dHRvblN0eWxlcyddO1xyXG4gIEBJbnB1dCgpIGNhY2hlS2V5PzogSUNvbW1hbmRCYXJJdGVtT3B0aW9uc1snY2FjaGVLZXknXTtcclxuICBASW5wdXQoKSByZW5kZXJlZEluT3ZlcmZsb3c/OiBJQ29tbWFuZEJhckl0ZW1PcHRpb25zWydyZW5kZXJlZEluT3ZlcmZsb3cnXTtcclxuICBASW5wdXQoKSBjb21tYW5kQmFyQnV0dG9uQXM/OiBJQ29tbWFuZEJhckl0ZW1PcHRpb25zWydjb21tYW5kQmFyQnV0dG9uQXMnXTtcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4pIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWYpO1xyXG4gIH1cclxufVxyXG4iXX0=