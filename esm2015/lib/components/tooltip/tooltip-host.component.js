/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, NgZone, Output, Renderer2, ViewChild, } from '@angular/core';
import { omit } from '@angular-react/fabric/lib/utils';
export class FabTooltipHostComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, { ngZone, setHostDisplay: true });
        this.onTooltipToggle = new EventEmitter();
        this.onTooltipToggleHandler = this.onTooltipToggleHandler.bind(this);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set tooltipOptions(value) {
        this._tooltipOptions = value;
        if (value) {
            this.transformedTooltipProps = this._transformTooltipOptionsToProps(value);
        }
    }
    /**
     * @return {?}
     */
    get tooltipOptions() {
        return this._tooltipOptions;
    }
    /**
     * @param {?} isTooltipVisible
     * @return {?}
     */
    onTooltipToggleHandler(isTooltipVisible) {
        this.onTooltipToggle.emit({ isTooltipVisible });
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    _transformTooltipOptionsToProps(options) {
        /** @type {?} */
        const sharedProperties = omit(options, 'renderContent');
        /** @type {?} */
        const contentRenderer = this.createInputJsxRenderer(options.renderContent);
        return Object.assign({}, sharedProperties, contentRenderer && ((/** @type {?} */ ({ onRenderContent: (/**
             * @param {?} data
             * @return {?}
             */
            data => contentRenderer(data)) }))));
    }
}
FabTooltipHostComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-tooltip-host',
                exportAs: 'fabTooltipHost',
                template: `
    <TooltipHost
      #reactNode
      [theme]="theme"
      [componentRef]="componentRef"
      [calloutProps]="calloutProps"
      [closeDelay]="closeDelay"
      [setAriaDescribedBy]="setAriaDescribedBy"
      [delay]="delay"
      [content]="content"
      [directionalHint]="directionalHint"
      [directionalHintForRTL]="directionalHintForRTL"
      [overflowMode]="overflowMode"
      [hostClassName]="hostClassName"
      [tooltipProps]="transformedTooltipProps"
      [TooltipToggle]="onTooltipToggleHandler"
    >
      <ReactContent><ng-content></ng-content></ReactContent>
    </TooltipHost>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabTooltipHostComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabTooltipHostComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    componentRef: [{ type: Input }],
    closeDelay: [{ type: Input }],
    calloutProps: [{ type: Input }],
    content: [{ type: Input }],
    delay: [{ type: Input }],
    directionalHint: [{ type: Input }],
    directionalHintForRTL: [{ type: Input }],
    hostClassName: [{ type: Input }],
    overflowMode: [{ type: Input }],
    setAriaDescribedBy: [{ type: Input }],
    theme: [{ type: Input }],
    tooltipOptions: [{ type: Input }],
    onTooltipToggle: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabTooltipHostComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabTooltipHostComponent.prototype.componentRef;
    /** @type {?} */
    FabTooltipHostComponent.prototype.closeDelay;
    /** @type {?} */
    FabTooltipHostComponent.prototype.calloutProps;
    /** @type {?} */
    FabTooltipHostComponent.prototype.content;
    /** @type {?} */
    FabTooltipHostComponent.prototype.delay;
    /** @type {?} */
    FabTooltipHostComponent.prototype.directionalHint;
    /** @type {?} */
    FabTooltipHostComponent.prototype.directionalHintForRTL;
    /** @type {?} */
    FabTooltipHostComponent.prototype.hostClassName;
    /** @type {?} */
    FabTooltipHostComponent.prototype.overflowMode;
    /** @type {?} */
    FabTooltipHostComponent.prototype.setAriaDescribedBy;
    /** @type {?} */
    FabTooltipHostComponent.prototype.theme;
    /** @type {?} */
    FabTooltipHostComponent.prototype.onTooltipToggle;
    /** @type {?} */
    FabTooltipHostComponent.prototype.transformedTooltipProps;
    /**
     * @type {?}
     * @private
     */
    FabTooltipHostComponent.prototype._tooltipOptions;
}
/**
 * Counterpart of `ITooltipProps`, with Angular adjustments.
 * @record
 */
export function ITooltipOptions() { }
if (false) {
    /** @type {?|undefined} */
    ITooltipOptions.prototype.renderContent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1ob3N0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3Rvb2x0aXAvdG9vbHRpcC1ob3N0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQSxPQUFPLEVBQThCLHFCQUFxQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEYsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUE0QnZELE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxxQkFBd0M7Ozs7Ozs7SUFnQ25GLFlBQVksVUFBc0IsRUFBRSxpQkFBb0MsRUFBRSxRQUFtQixFQUFFLE1BQWM7UUFDM0csS0FBSyxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFOaEUsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBaUMsQ0FBQztRQVFyRixJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2RSxDQUFDOzs7OztJQXJCRCxJQUNJLGNBQWMsQ0FBQyxLQUFzQjtRQUN2QyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsK0JBQStCLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDNUU7SUFDSCxDQUFDOzs7O0lBRUQsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDOzs7OztJQWFELHNCQUFzQixDQUFDLGdCQUF5QjtRQUM5QyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLGdCQUFnQixFQUFFLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7Ozs7SUFFTywrQkFBK0IsQ0FBQyxPQUF3Qjs7Y0FDeEQsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUM7O2NBRWpELGVBQWUsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUUxRSxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQ2xCLEVBQUUsRUFDRixnQkFBZ0IsRUFDaEIsZUFBZSxJQUFJLENBQUMsbUJBQUEsRUFBRSxlQUFlOzs7O1lBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUEsRUFBRSxFQUEwQyxDQUFDLENBQ2xILENBQUM7SUFDSixDQUFDOzs7WUE5RUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CVDtnQkFFRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTt5QkFEdEMsZ0JBQWdCO2FBRTFCOzs7O1lBcENDLFVBQVU7WUFGVixpQkFBaUI7WUFPakIsU0FBUztZQUZULE1BQU07OzsyQkFtQ0wsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7MkJBRXZDLEtBQUs7eUJBQ0wsS0FBSzsyQkFDTCxLQUFLO3NCQUNMLEtBQUs7b0JBQ0wsS0FBSzs4QkFDTCxLQUFLO29DQUNMLEtBQUs7NEJBQ0wsS0FBSzsyQkFDTCxLQUFLO2lDQUNMLEtBQUs7b0JBQ0wsS0FBSzs2QkFFTCxLQUFLOzhCQVlMLE1BQU07Ozs7Ozs7SUExQlAsK0NBQTZFOztJQUU3RSwrQ0FBMEQ7O0lBQzFELDZDQUFzRDs7SUFDdEQsK0NBQTBEOztJQUMxRCwwQ0FBZ0Q7O0lBQ2hELHdDQUE0Qzs7SUFDNUMsa0RBQWdFOztJQUNoRSx3REFBNEU7O0lBQzVFLGdEQUE0RDs7SUFDNUQsK0NBQTBEOztJQUMxRCxxREFBc0U7O0lBQ3RFLHdDQUE0Qzs7SUFjNUMsa0RBQXVGOztJQUV2RiwwREFBMkQ7Ozs7O0lBQzNELGtEQUF5Qzs7Ozs7O0FBNEIzQyxxQ0FFQzs7O0lBREMsd0NBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IElucHV0UmVuZGVyZXJPcHRpb25zLCBPbWl0LCBSZWFjdFdyYXBwZXJDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9jb3JlJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0NoaWxkLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJVG9vbHRpcEhvc3RQcm9wcywgSVRvb2x0aXBQcm9wcyB9IGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliL1Rvb2x0aXAnO1xyXG5pbXBvcnQgeyBvbWl0IH0gZnJvbSAnQGFuZ3VsYXItcmVhY3QvZmFicmljL2xpYi91dGlscyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZhYi10b29sdGlwLWhvc3QnLFxyXG4gIGV4cG9ydEFzOiAnZmFiVG9vbHRpcEhvc3QnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8VG9vbHRpcEhvc3RcclxuICAgICAgI3JlYWN0Tm9kZVxyXG4gICAgICBbdGhlbWVdPVwidGhlbWVcIlxyXG4gICAgICBbY29tcG9uZW50UmVmXT1cImNvbXBvbmVudFJlZlwiXHJcbiAgICAgIFtjYWxsb3V0UHJvcHNdPVwiY2FsbG91dFByb3BzXCJcclxuICAgICAgW2Nsb3NlRGVsYXldPVwiY2xvc2VEZWxheVwiXHJcbiAgICAgIFtzZXRBcmlhRGVzY3JpYmVkQnldPVwic2V0QXJpYURlc2NyaWJlZEJ5XCJcclxuICAgICAgW2RlbGF5XT1cImRlbGF5XCJcclxuICAgICAgW2NvbnRlbnRdPVwiY29udGVudFwiXHJcbiAgICAgIFtkaXJlY3Rpb25hbEhpbnRdPVwiZGlyZWN0aW9uYWxIaW50XCJcclxuICAgICAgW2RpcmVjdGlvbmFsSGludEZvclJUTF09XCJkaXJlY3Rpb25hbEhpbnRGb3JSVExcIlxyXG4gICAgICBbb3ZlcmZsb3dNb2RlXT1cIm92ZXJmbG93TW9kZVwiXHJcbiAgICAgIFtob3N0Q2xhc3NOYW1lXT1cImhvc3RDbGFzc05hbWVcIlxyXG4gICAgICBbdG9vbHRpcFByb3BzXT1cInRyYW5zZm9ybWVkVG9vbHRpcFByb3BzXCJcclxuICAgICAgW1Rvb2x0aXBUb2dnbGVdPVwib25Ub29sdGlwVG9nZ2xlSGFuZGxlclwiXHJcbiAgICA+XHJcbiAgICAgIDxSZWFjdENvbnRlbnQ+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvUmVhY3RDb250ZW50PlxyXG4gICAgPC9Ub29sdGlwSG9zdD5cclxuICBgLFxyXG4gIHN0eWxlczogWydyZWFjdC1yZW5kZXJlciddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmFiVG9vbHRpcEhvc3RDb21wb25lbnQgZXh0ZW5kcyBSZWFjdFdyYXBwZXJDb21wb25lbnQ8SVRvb2x0aXBIb3N0UHJvcHM+IHtcclxuICBAVmlld0NoaWxkKCdyZWFjdE5vZGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcm90ZWN0ZWQgcmVhY3ROb2RlUmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICBASW5wdXQoKSBjb21wb25lbnRSZWY/OiBJVG9vbHRpcEhvc3RQcm9wc1snY29tcG9uZW50UmVmJ107XHJcbiAgQElucHV0KCkgY2xvc2VEZWxheT86IElUb29sdGlwSG9zdFByb3BzWydjbG9zZURlbGF5J107XHJcbiAgQElucHV0KCkgY2FsbG91dFByb3BzPzogSVRvb2x0aXBIb3N0UHJvcHNbJ2NhbGxvdXRQcm9wcyddO1xyXG4gIEBJbnB1dCgpIGNvbnRlbnQ/OiBJVG9vbHRpcEhvc3RQcm9wc1snY29udGVudCddO1xyXG4gIEBJbnB1dCgpIGRlbGF5PzogSVRvb2x0aXBIb3N0UHJvcHNbJ2RlbGF5J107XHJcbiAgQElucHV0KCkgZGlyZWN0aW9uYWxIaW50PzogSVRvb2x0aXBIb3N0UHJvcHNbJ2RpcmVjdGlvbmFsSGludCddO1xyXG4gIEBJbnB1dCgpIGRpcmVjdGlvbmFsSGludEZvclJUTD86IElUb29sdGlwSG9zdFByb3BzWydkaXJlY3Rpb25hbEhpbnRGb3JSVEwnXTtcclxuICBASW5wdXQoKSBob3N0Q2xhc3NOYW1lPzogSVRvb2x0aXBIb3N0UHJvcHNbJ2hvc3RDbGFzc05hbWUnXTtcclxuICBASW5wdXQoKSBvdmVyZmxvd01vZGU/OiBJVG9vbHRpcEhvc3RQcm9wc1snb3ZlcmZsb3dNb2RlJ107XHJcbiAgQElucHV0KCkgc2V0QXJpYURlc2NyaWJlZEJ5PzogSVRvb2x0aXBIb3N0UHJvcHNbJ3NldEFyaWFEZXNjcmliZWRCeSddO1xyXG4gIEBJbnB1dCgpIHRoZW1lPzogSVRvb2x0aXBIb3N0UHJvcHNbJ3RoZW1lJ107XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHRvb2x0aXBPcHRpb25zKHZhbHVlOiBJVG9vbHRpcE9wdGlvbnMpIHtcclxuICAgIHRoaXMuX3Rvb2x0aXBPcHRpb25zID0gdmFsdWU7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgdGhpcy50cmFuc2Zvcm1lZFRvb2x0aXBQcm9wcyA9IHRoaXMuX3RyYW5zZm9ybVRvb2x0aXBPcHRpb25zVG9Qcm9wcyh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgdG9vbHRpcE9wdGlvbnMoKTogSVRvb2x0aXBPcHRpb25zIHtcclxuICAgIHJldHVybiB0aGlzLl90b29sdGlwT3B0aW9ucztcclxuICB9XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvblRvb2x0aXBUb2dnbGUgPSBuZXcgRXZlbnRFbWl0dGVyPHsgaXNUb29sdGlwVmlzaWJsZTogYm9vbGVhbiB9PigpO1xyXG5cclxuICB0cmFuc2Zvcm1lZFRvb2x0aXBQcm9wczogSVRvb2x0aXBIb3N0UHJvcHNbJ3Rvb2x0aXBQcm9wcyddO1xyXG4gIHByaXZhdGUgX3Rvb2x0aXBPcHRpb25zOiBJVG9vbHRpcE9wdGlvbnM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmdab25lOiBOZ1pvbmUpIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlciwgeyBuZ1pvbmUsIHNldEhvc3REaXNwbGF5OiB0cnVlIH0pO1xyXG5cclxuICAgIHRoaXMub25Ub29sdGlwVG9nZ2xlSGFuZGxlciA9IHRoaXMub25Ub29sdGlwVG9nZ2xlSGFuZGxlci5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgb25Ub29sdGlwVG9nZ2xlSGFuZGxlcihpc1Rvb2x0aXBWaXNpYmxlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLm9uVG9vbHRpcFRvZ2dsZS5lbWl0KHsgaXNUb29sdGlwVmlzaWJsZSB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3RyYW5zZm9ybVRvb2x0aXBPcHRpb25zVG9Qcm9wcyhvcHRpb25zOiBJVG9vbHRpcE9wdGlvbnMpOiBJVG9vbHRpcFByb3BzIHtcclxuICAgIGNvbnN0IHNoYXJlZFByb3BlcnRpZXMgPSBvbWl0KG9wdGlvbnMsICdyZW5kZXJDb250ZW50Jyk7XHJcblxyXG4gICAgY29uc3QgY29udGVudFJlbmRlcmVyID0gdGhpcy5jcmVhdGVJbnB1dEpzeFJlbmRlcmVyKG9wdGlvbnMucmVuZGVyQ29udGVudCk7XHJcblxyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXHJcbiAgICAgIHt9LFxyXG4gICAgICBzaGFyZWRQcm9wZXJ0aWVzLFxyXG4gICAgICBjb250ZW50UmVuZGVyZXIgJiYgKHsgb25SZW5kZXJDb250ZW50OiBkYXRhID0+IGNvbnRlbnRSZW5kZXJlcihkYXRhKSB9IGFzIFBpY2s8SVRvb2x0aXBQcm9wcywgJ29uUmVuZGVyQ29udGVudCc+KVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb3VudGVycGFydCBvZiBgSVRvb2x0aXBQcm9wc2AsIHdpdGggQW5ndWxhciBhZGp1c3RtZW50cy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRvb2x0aXBPcHRpb25zIGV4dGVuZHMgT21pdDxJVG9vbHRpcFByb3BzLCAnb25SZW5kZXJDb250ZW50Jz4ge1xyXG4gIHJlYWRvbmx5IHJlbmRlckNvbnRlbnQ/OiBJbnB1dFJlbmRlcmVyT3B0aW9uczxJVG9vbHRpcFByb3BzPjtcclxufVxyXG4iXX0=