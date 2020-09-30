/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, NgZone, Output, Renderer2, ViewChild, } from '@angular/core';
var FabMessageBarComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabMessageBarComponent, _super);
    function FabMessageBarComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone }) || this;
        // Non-React prop, used together with onDismiss to allow it to be an Output EventEmitter.
        _this.dismissable = null;
        _this.onDismiss = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    FabMessageBarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var onRenderActions = this.createRenderPropHandler(this.renderActions);
        this.actions = onRenderActions();
    };
    Object.defineProperty(FabMessageBarComponent.prototype, "onDismissInternal", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (!this.dismissable) {
                return null;
            }
            return (/**
             * @param {?} ev
             * @return {?}
             */
            function (ev) {
                _this.onDismiss.emit(ev && ev.nativeEvent);
            });
        },
        enumerable: true,
        configurable: true
    });
    FabMessageBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-message-bar',
                    exportAs: 'fabMessageBar',
                    template: "\n    <MessageBar\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [messageBarType]=\"messageBarType\"\n      [isMultiline]=\"isMultiline\"\n      [dismissButtonAriaLabel]=\"dismissButtonAriaLabel\"\n      [truncated]=\"truncated\"\n      [overflowButtonAriaLabel]=\"overflowButtonAriaLabel\"\n      [className]=\"className\"\n      [theme]=\"theme\"\n      [styles]=\"styles\"\n      [Dismiss]=\"onDismissInternal\"\n      [actions]=\"renderActions && actions\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </MessageBar>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabMessageBarComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    FabMessageBarComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
        componentRef: [{ type: Input }],
        messageBarType: [{ type: Input }],
        isMultiline: [{ type: Input }],
        dismissButtonAriaLabel: [{ type: Input }],
        truncated: [{ type: Input }],
        overflowButtonAriaLabel: [{ type: Input }],
        className: [{ type: Input }],
        theme: [{ type: Input }],
        styles: [{ type: Input }],
        renderActions: [{ type: Input }],
        dismissable: [{ type: Input }],
        onDismiss: [{ type: Output }]
    };
    return FabMessageBarComponent;
}(ReactWrapperComponent));
export { FabMessageBarComponent };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabMessageBarComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabMessageBarComponent.prototype.componentRef;
    /** @type {?} */
    FabMessageBarComponent.prototype.messageBarType;
    /** @type {?} */
    FabMessageBarComponent.prototype.isMultiline;
    /** @type {?} */
    FabMessageBarComponent.prototype.dismissButtonAriaLabel;
    /** @type {?} */
    FabMessageBarComponent.prototype.truncated;
    /** @type {?} */
    FabMessageBarComponent.prototype.overflowButtonAriaLabel;
    /** @type {?} */
    FabMessageBarComponent.prototype.className;
    /** @type {?} */
    FabMessageBarComponent.prototype.theme;
    /** @type {?} */
    FabMessageBarComponent.prototype.styles;
    /** @type {?} */
    FabMessageBarComponent.prototype.renderActions;
    /** @type {?} */
    FabMessageBarComponent.prototype.dismissable;
    /** @type {?} */
    FabMessageBarComponent.prototype.onDismiss;
    /** @type {?} */
    FabMessageBarComponent.prototype.actions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvbWVzc2FnZS1iYXIvbWVzc2FnZS1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQXdCLHFCQUFxQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbEYsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFFTixNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUd2QjtJQXdCNEMsa0RBQXVDO0lBc0JqRixnQ0FBWSxVQUFzQixFQUFFLGlCQUFvQyxFQUFFLFFBQW1CLEVBQUUsTUFBYztRQUE3RyxZQUNFLGtCQUFNLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDLFNBQzNEOztRQVJRLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRW5CLGVBQVMsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDOztJQU05RCxDQUFDOzs7O0lBRUQseUNBQVE7OztJQUFSOztZQUNRLGVBQWUsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN4RSxJQUFJLENBQUMsT0FBTyxHQUFHLGVBQWUsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFRCxzQkFBSSxxREFBaUI7Ozs7UUFBckI7WUFBQSxpQkFRQztZQVBDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNyQixPQUFPLElBQUksQ0FBQzthQUNiO1lBRUQ7Ozs7WUFBTyxVQUFBLEVBQUU7Z0JBQ1AsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM1QyxDQUFDLEVBQUM7UUFDSixDQUFDOzs7T0FBQTs7Z0JBL0RGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsZUFBZTtvQkFDekIsUUFBUSxFQUFFLDJqQkFpQlQ7b0JBRUQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07NkJBRHRDLGdCQUFnQjtpQkFFMUI7Ozs7Z0JBbENDLFVBQVU7Z0JBRlYsaUJBQWlCO2dCQVFqQixTQUFTO2dCQUhULE1BQU07OzsrQkFpQ0wsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7K0JBRXZDLEtBQUs7aUNBQ0wsS0FBSzs4QkFDTCxLQUFLO3lDQUNMLEtBQUs7NEJBQ0wsS0FBSzswQ0FDTCxLQUFLOzRCQUNMLEtBQUs7d0JBQ0wsS0FBSzt5QkFDTCxLQUFLO2dDQUVMLEtBQUs7OEJBR0wsS0FBSzs0QkFFTCxNQUFNOztJQXNCVCw2QkFBQztDQUFBLEFBaEVELENBd0I0QyxxQkFBcUIsR0F3Q2hFO1NBeENZLHNCQUFzQjs7Ozs7O0lBQ2pDLDhDQUE2RTs7SUFFN0UsOENBQXlEOztJQUN6RCxnREFBNkQ7O0lBQzdELDZDQUF1RDs7SUFDdkQsd0RBQTZFOztJQUM3RSwyQ0FBbUQ7O0lBQ25ELHlEQUErRTs7SUFDL0UsMkNBQW1EOztJQUNuRCx1Q0FBMkM7O0lBQzNDLHdDQUE2Qzs7SUFFN0MsK0NBQWtEOztJQUdsRCw2Q0FBc0M7O0lBRXRDLDJDQUE4RDs7SUFFOUQseUNBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IElucHV0UmVuZGVyZXJPcHRpb25zLCBSZWFjdFdyYXBwZXJDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9jb3JlJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFZpZXdDaGlsZCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSU1lc3NhZ2VCYXJQcm9wcyB9IGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliL01lc3NhZ2VCYXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmYWItbWVzc2FnZS1iYXInLFxyXG4gIGV4cG9ydEFzOiAnZmFiTWVzc2FnZUJhcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxNZXNzYWdlQmFyXHJcbiAgICAgICNyZWFjdE5vZGVcclxuICAgICAgW2NvbXBvbmVudFJlZl09XCJjb21wb25lbnRSZWZcIlxyXG4gICAgICBbbWVzc2FnZUJhclR5cGVdPVwibWVzc2FnZUJhclR5cGVcIlxyXG4gICAgICBbaXNNdWx0aWxpbmVdPVwiaXNNdWx0aWxpbmVcIlxyXG4gICAgICBbZGlzbWlzc0J1dHRvbkFyaWFMYWJlbF09XCJkaXNtaXNzQnV0dG9uQXJpYUxhYmVsXCJcclxuICAgICAgW3RydW5jYXRlZF09XCJ0cnVuY2F0ZWRcIlxyXG4gICAgICBbb3ZlcmZsb3dCdXR0b25BcmlhTGFiZWxdPVwib3ZlcmZsb3dCdXR0b25BcmlhTGFiZWxcIlxyXG4gICAgICBbY2xhc3NOYW1lXT1cImNsYXNzTmFtZVwiXHJcbiAgICAgIFt0aGVtZV09XCJ0aGVtZVwiXHJcbiAgICAgIFtzdHlsZXNdPVwic3R5bGVzXCJcclxuICAgICAgW0Rpc21pc3NdPVwib25EaXNtaXNzSW50ZXJuYWxcIlxyXG4gICAgICBbYWN0aW9uc109XCJyZW5kZXJBY3Rpb25zICYmIGFjdGlvbnNcIlxyXG4gICAgPlxyXG4gICAgICA8UmVhY3RDb250ZW50PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L1JlYWN0Q29udGVudD5cclxuICAgIDwvTWVzc2FnZUJhcj5cclxuICBgLFxyXG4gIHN0eWxlczogWydyZWFjdC1yZW5kZXJlciddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmFiTWVzc2FnZUJhckNvbXBvbmVudCBleHRlbmRzIFJlYWN0V3JhcHBlckNvbXBvbmVudDxJTWVzc2FnZUJhclByb3BzPiBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQFZpZXdDaGlsZCgncmVhY3ROb2RlJywgeyBzdGF0aWM6IHRydWUgfSkgcHJvdGVjdGVkIHJlYWN0Tm9kZVJlZjogRWxlbWVudFJlZjtcclxuXHJcbiAgQElucHV0KCkgY29tcG9uZW50UmVmPzogSU1lc3NhZ2VCYXJQcm9wc1snY29tcG9uZW50UmVmJ107XHJcbiAgQElucHV0KCkgbWVzc2FnZUJhclR5cGU/OiBJTWVzc2FnZUJhclByb3BzWydtZXNzYWdlQmFyVHlwZSddO1xyXG4gIEBJbnB1dCgpIGlzTXVsdGlsaW5lPzogSU1lc3NhZ2VCYXJQcm9wc1snaXNNdWx0aWxpbmUnXTtcclxuICBASW5wdXQoKSBkaXNtaXNzQnV0dG9uQXJpYUxhYmVsPzogSU1lc3NhZ2VCYXJQcm9wc1snZGlzbWlzc0J1dHRvbkFyaWFMYWJlbCddO1xyXG4gIEBJbnB1dCgpIHRydW5jYXRlZD86IElNZXNzYWdlQmFyUHJvcHNbJ3RydW5jYXRlZCddO1xyXG4gIEBJbnB1dCgpIG92ZXJmbG93QnV0dG9uQXJpYUxhYmVsPzogSU1lc3NhZ2VCYXJQcm9wc1snb3ZlcmZsb3dCdXR0b25BcmlhTGFiZWwnXTtcclxuICBASW5wdXQoKSBjbGFzc05hbWU/OiBJTWVzc2FnZUJhclByb3BzWydjbGFzc05hbWUnXTtcclxuICBASW5wdXQoKSB0aGVtZT86IElNZXNzYWdlQmFyUHJvcHNbJ3RoZW1lJ107XHJcbiAgQElucHV0KCkgc3R5bGVzPzogSU1lc3NhZ2VCYXJQcm9wc1snc3R5bGVzJ107XHJcblxyXG4gIEBJbnB1dCgpIHJlbmRlckFjdGlvbnM/OiBJbnB1dFJlbmRlcmVyT3B0aW9uczx7fT47XHJcblxyXG4gIC8vIE5vbi1SZWFjdCBwcm9wLCB1c2VkIHRvZ2V0aGVyIHdpdGggb25EaXNtaXNzIHRvIGFsbG93IGl0IHRvIGJlIGFuIE91dHB1dCBFdmVudEVtaXR0ZXIuXHJcbiAgQElucHV0KCkgZGlzbWlzc2FibGU/OiBib29sZWFuID0gbnVsbDtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uRGlzbWlzcyA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcclxuXHJcbiAgYWN0aW9uczogSlNYLkVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmdab25lOiBOZ1pvbmUpIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlciwgeyBuZ1pvbmUgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGNvbnN0IG9uUmVuZGVyQWN0aW9ucyA9IHRoaXMuY3JlYXRlUmVuZGVyUHJvcEhhbmRsZXIodGhpcy5yZW5kZXJBY3Rpb25zKTtcclxuICAgIHRoaXMuYWN0aW9ucyA9IG9uUmVuZGVyQWN0aW9ucygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG9uRGlzbWlzc0ludGVybmFsKCk6IG51bGwgfCBJTWVzc2FnZUJhclByb3BzWydvbkRpc21pc3MnXSB7XHJcbiAgICBpZiAoIXRoaXMuZGlzbWlzc2FibGUpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGV2ID0+IHtcclxuICAgICAgdGhpcy5vbkRpc21pc3MuZW1pdChldiAmJiBldi5uYXRpdmVFdmVudCk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=