/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, NgZone, Output, Renderer2, ViewChild, } from '@angular/core';
import { omit } from 'angular-react-toolkit/utils/omit';
var FabTooltipHostComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabTooltipHostComponent, _super);
    function FabTooltipHostComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone, setHostDisplay: true }) || this;
        _this.onTooltipToggle = new EventEmitter();
        _this.onTooltipToggleHandler = _this.onTooltipToggleHandler.bind(_this);
        return _this;
    }
    Object.defineProperty(FabTooltipHostComponent.prototype, "tooltipOptions", {
        get: /**
         * @return {?}
         */
        function () {
            return this._tooltipOptions;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._tooltipOptions = value;
            if (value) {
                this.transformedTooltipProps = this._transformTooltipOptionsToProps(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} isTooltipVisible
     * @return {?}
     */
    FabTooltipHostComponent.prototype.onTooltipToggleHandler = /**
     * @param {?} isTooltipVisible
     * @return {?}
     */
    function (isTooltipVisible) {
        this.onTooltipToggle.emit({ isTooltipVisible: isTooltipVisible });
    };
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    FabTooltipHostComponent.prototype._transformTooltipOptionsToProps = /**
     * @private
     * @param {?} options
     * @return {?}
     */
    function (options) {
        /** @type {?} */
        var sharedProperties = omit(options, 'renderContent');
        /** @type {?} */
        var contentRenderer = this.createInputJsxRenderer(options.renderContent);
        return Object.assign({}, sharedProperties, contentRenderer && ((/** @type {?} */ ({ onRenderContent: (/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return contentRenderer(data); }) }))));
    };
    FabTooltipHostComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-tooltip-host',
                    exportAs: 'fabTooltipHost',
                    template: "\n    <TooltipHost\n      #reactNode\n      [theme]=\"theme\"\n      [componentRef]=\"componentRef\"\n      [calloutProps]=\"calloutProps\"\n      [closeDelay]=\"closeDelay\"\n      [setAriaDescribedBy]=\"setAriaDescribedBy\"\n      [delay]=\"delay\"\n      [content]=\"content\"\n      [directionalHint]=\"directionalHint\"\n      [directionalHintForRTL]=\"directionalHintForRTL\"\n      [overflowMode]=\"overflowMode\"\n      [hostClassName]=\"hostClassName\"\n      [tooltipProps]=\"transformedTooltipProps\"\n      [TooltipToggle]=\"onTooltipToggleHandler\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </TooltipHost>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabTooltipHostComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
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
    return FabTooltipHostComponent;
}(ReactWrapperComponent));
export { FabTooltipHostComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1ob3N0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy9saWIvY29tcG9uZW50cy90b29sdGlwLyIsInNvdXJjZXMiOlsidG9vbHRpcC1ob3N0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0EsT0FBTyxFQUE4QixxQkFBcUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hGLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRXhEO0lBMEI2QyxtREFBd0M7SUFnQ25GLGlDQUFZLFVBQXNCLEVBQUUsaUJBQW9DLEVBQUUsUUFBbUIsRUFBRSxNQUFjO1FBQTdHLFlBQ0Usa0JBQU0sVUFBVSxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxFQUFFLE1BQU0sUUFBQSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxTQUdqRjtRQVRrQixxQkFBZSxHQUFHLElBQUksWUFBWSxFQUFpQyxDQUFDO1FBUXJGLEtBQUksQ0FBQyxzQkFBc0IsR0FBRyxLQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDOztJQUN2RSxDQUFDO0lBckJELHNCQUNJLG1EQUFjOzs7O1FBT2xCO1lBQ0UsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQzlCLENBQUM7Ozs7O1FBVkQsVUFDbUIsS0FBc0I7WUFDdkMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDN0IsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsSUFBSSxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM1RTtRQUNILENBQUM7OztPQUFBOzs7OztJQWlCRCx3REFBc0I7Ozs7SUFBdEIsVUFBdUIsZ0JBQXlCO1FBQzlDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsZ0JBQWdCLGtCQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7OztJQUVPLGlFQUErQjs7Ozs7SUFBdkMsVUFBd0MsT0FBd0I7O1lBQ3hELGdCQUFnQixHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDOztZQUVqRCxlQUFlLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFFMUUsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUNsQixFQUFFLEVBQ0YsZ0JBQWdCLEVBQ2hCLGVBQWUsSUFBSSxDQUFDLG1CQUFBLEVBQUUsZUFBZTs7OztZQUFFLFVBQUEsSUFBSSxJQUFJLE9BQUEsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFyQixDQUFxQixDQUFBLEVBQUUsRUFBMEMsQ0FBQyxDQUNsSCxDQUFDO0lBQ0osQ0FBQzs7Z0JBOUVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsZ3BCQW1CVDtvQkFFRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs2QkFEdEMsZ0JBQWdCO2lCQUUxQjs7OztnQkFwQ0MsVUFBVTtnQkFGVixpQkFBaUI7Z0JBT2pCLFNBQVM7Z0JBRlQsTUFBTTs7OytCQW1DTCxTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsrQkFFdkMsS0FBSzs2QkFDTCxLQUFLOytCQUNMLEtBQUs7MEJBQ0wsS0FBSzt3QkFDTCxLQUFLO2tDQUNMLEtBQUs7d0NBQ0wsS0FBSztnQ0FDTCxLQUFLOytCQUNMLEtBQUs7cUNBQ0wsS0FBSzt3QkFDTCxLQUFLO2lDQUVMLEtBQUs7a0NBWUwsTUFBTTs7SUEwQlQsOEJBQUM7Q0FBQSxBQS9FRCxDQTBCNkMscUJBQXFCLEdBcURqRTtTQXJEWSx1QkFBdUI7Ozs7OztJQUNsQywrQ0FBNkU7O0lBRTdFLCtDQUEwRDs7SUFDMUQsNkNBQXNEOztJQUN0RCwrQ0FBMEQ7O0lBQzFELDBDQUFnRDs7SUFDaEQsd0NBQTRDOztJQUM1QyxrREFBZ0U7O0lBQ2hFLHdEQUE0RTs7SUFDNUUsZ0RBQTREOztJQUM1RCwrQ0FBMEQ7O0lBQzFELHFEQUFzRTs7SUFDdEUsd0NBQTRDOztJQWM1QyxrREFBdUY7O0lBRXZGLDBEQUEyRDs7Ozs7SUFDM0Qsa0RBQXlDOzs7Ozs7QUE0QjNDLHFDQUVDOzs7SUFEQyx3Q0FBNkQiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgSW5wdXRSZW5kZXJlck9wdGlvbnMsIE9taXQsIFJlYWN0V3JhcHBlckNvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3Q2hpbGQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElUb29sdGlwSG9zdFByb3BzLCBJVG9vbHRpcFByb3BzIH0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvVG9vbHRpcCc7XHJcbmltcG9ydCB7IG9taXQgfSBmcm9tICdhbmd1bGFyLXJlYWN0LXRvb2xraXQvdXRpbHMvb21pdCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZhYi10b29sdGlwLWhvc3QnLFxyXG4gIGV4cG9ydEFzOiAnZmFiVG9vbHRpcEhvc3QnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8VG9vbHRpcEhvc3RcclxuICAgICAgI3JlYWN0Tm9kZVxyXG4gICAgICBbdGhlbWVdPVwidGhlbWVcIlxyXG4gICAgICBbY29tcG9uZW50UmVmXT1cImNvbXBvbmVudFJlZlwiXHJcbiAgICAgIFtjYWxsb3V0UHJvcHNdPVwiY2FsbG91dFByb3BzXCJcclxuICAgICAgW2Nsb3NlRGVsYXldPVwiY2xvc2VEZWxheVwiXHJcbiAgICAgIFtzZXRBcmlhRGVzY3JpYmVkQnldPVwic2V0QXJpYURlc2NyaWJlZEJ5XCJcclxuICAgICAgW2RlbGF5XT1cImRlbGF5XCJcclxuICAgICAgW2NvbnRlbnRdPVwiY29udGVudFwiXHJcbiAgICAgIFtkaXJlY3Rpb25hbEhpbnRdPVwiZGlyZWN0aW9uYWxIaW50XCJcclxuICAgICAgW2RpcmVjdGlvbmFsSGludEZvclJUTF09XCJkaXJlY3Rpb25hbEhpbnRGb3JSVExcIlxyXG4gICAgICBbb3ZlcmZsb3dNb2RlXT1cIm92ZXJmbG93TW9kZVwiXHJcbiAgICAgIFtob3N0Q2xhc3NOYW1lXT1cImhvc3RDbGFzc05hbWVcIlxyXG4gICAgICBbdG9vbHRpcFByb3BzXT1cInRyYW5zZm9ybWVkVG9vbHRpcFByb3BzXCJcclxuICAgICAgW1Rvb2x0aXBUb2dnbGVdPVwib25Ub29sdGlwVG9nZ2xlSGFuZGxlclwiXHJcbiAgICA+XHJcbiAgICAgIDxSZWFjdENvbnRlbnQ+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvUmVhY3RDb250ZW50PlxyXG4gICAgPC9Ub29sdGlwSG9zdD5cclxuICBgLFxyXG4gIHN0eWxlczogWydyZWFjdC1yZW5kZXJlciddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmFiVG9vbHRpcEhvc3RDb21wb25lbnQgZXh0ZW5kcyBSZWFjdFdyYXBwZXJDb21wb25lbnQ8SVRvb2x0aXBIb3N0UHJvcHM+IHtcclxuICBAVmlld0NoaWxkKCdyZWFjdE5vZGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcm90ZWN0ZWQgcmVhY3ROb2RlUmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICBASW5wdXQoKSBjb21wb25lbnRSZWY/OiBJVG9vbHRpcEhvc3RQcm9wc1snY29tcG9uZW50UmVmJ107XHJcbiAgQElucHV0KCkgY2xvc2VEZWxheT86IElUb29sdGlwSG9zdFByb3BzWydjbG9zZURlbGF5J107XHJcbiAgQElucHV0KCkgY2FsbG91dFByb3BzPzogSVRvb2x0aXBIb3N0UHJvcHNbJ2NhbGxvdXRQcm9wcyddO1xyXG4gIEBJbnB1dCgpIGNvbnRlbnQ/OiBJVG9vbHRpcEhvc3RQcm9wc1snY29udGVudCddO1xyXG4gIEBJbnB1dCgpIGRlbGF5PzogSVRvb2x0aXBIb3N0UHJvcHNbJ2RlbGF5J107XHJcbiAgQElucHV0KCkgZGlyZWN0aW9uYWxIaW50PzogSVRvb2x0aXBIb3N0UHJvcHNbJ2RpcmVjdGlvbmFsSGludCddO1xyXG4gIEBJbnB1dCgpIGRpcmVjdGlvbmFsSGludEZvclJUTD86IElUb29sdGlwSG9zdFByb3BzWydkaXJlY3Rpb25hbEhpbnRGb3JSVEwnXTtcclxuICBASW5wdXQoKSBob3N0Q2xhc3NOYW1lPzogSVRvb2x0aXBIb3N0UHJvcHNbJ2hvc3RDbGFzc05hbWUnXTtcclxuICBASW5wdXQoKSBvdmVyZmxvd01vZGU/OiBJVG9vbHRpcEhvc3RQcm9wc1snb3ZlcmZsb3dNb2RlJ107XHJcbiAgQElucHV0KCkgc2V0QXJpYURlc2NyaWJlZEJ5PzogSVRvb2x0aXBIb3N0UHJvcHNbJ3NldEFyaWFEZXNjcmliZWRCeSddO1xyXG4gIEBJbnB1dCgpIHRoZW1lPzogSVRvb2x0aXBIb3N0UHJvcHNbJ3RoZW1lJ107XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHRvb2x0aXBPcHRpb25zKHZhbHVlOiBJVG9vbHRpcE9wdGlvbnMpIHtcclxuICAgIHRoaXMuX3Rvb2x0aXBPcHRpb25zID0gdmFsdWU7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgdGhpcy50cmFuc2Zvcm1lZFRvb2x0aXBQcm9wcyA9IHRoaXMuX3RyYW5zZm9ybVRvb2x0aXBPcHRpb25zVG9Qcm9wcyh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgdG9vbHRpcE9wdGlvbnMoKTogSVRvb2x0aXBPcHRpb25zIHtcclxuICAgIHJldHVybiB0aGlzLl90b29sdGlwT3B0aW9ucztcclxuICB9XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvblRvb2x0aXBUb2dnbGUgPSBuZXcgRXZlbnRFbWl0dGVyPHsgaXNUb29sdGlwVmlzaWJsZTogYm9vbGVhbiB9PigpO1xyXG5cclxuICB0cmFuc2Zvcm1lZFRvb2x0aXBQcm9wczogSVRvb2x0aXBIb3N0UHJvcHNbJ3Rvb2x0aXBQcm9wcyddO1xyXG4gIHByaXZhdGUgX3Rvb2x0aXBPcHRpb25zOiBJVG9vbHRpcE9wdGlvbnM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmdab25lOiBOZ1pvbmUpIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlciwgeyBuZ1pvbmUsIHNldEhvc3REaXNwbGF5OiB0cnVlIH0pO1xyXG5cclxuICAgIHRoaXMub25Ub29sdGlwVG9nZ2xlSGFuZGxlciA9IHRoaXMub25Ub29sdGlwVG9nZ2xlSGFuZGxlci5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgb25Ub29sdGlwVG9nZ2xlSGFuZGxlcihpc1Rvb2x0aXBWaXNpYmxlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLm9uVG9vbHRpcFRvZ2dsZS5lbWl0KHsgaXNUb29sdGlwVmlzaWJsZSB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3RyYW5zZm9ybVRvb2x0aXBPcHRpb25zVG9Qcm9wcyhvcHRpb25zOiBJVG9vbHRpcE9wdGlvbnMpOiBJVG9vbHRpcFByb3BzIHtcclxuICAgIGNvbnN0IHNoYXJlZFByb3BlcnRpZXMgPSBvbWl0KG9wdGlvbnMsICdyZW5kZXJDb250ZW50Jyk7XHJcblxyXG4gICAgY29uc3QgY29udGVudFJlbmRlcmVyID0gdGhpcy5jcmVhdGVJbnB1dEpzeFJlbmRlcmVyKG9wdGlvbnMucmVuZGVyQ29udGVudCk7XHJcblxyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXHJcbiAgICAgIHt9LFxyXG4gICAgICBzaGFyZWRQcm9wZXJ0aWVzLFxyXG4gICAgICBjb250ZW50UmVuZGVyZXIgJiYgKHsgb25SZW5kZXJDb250ZW50OiBkYXRhID0+IGNvbnRlbnRSZW5kZXJlcihkYXRhKSB9IGFzIFBpY2s8SVRvb2x0aXBQcm9wcywgJ29uUmVuZGVyQ29udGVudCc+KVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb3VudGVycGFydCBvZiBgSVRvb2x0aXBQcm9wc2AsIHdpdGggQW5ndWxhciBhZGp1c3RtZW50cy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRvb2x0aXBPcHRpb25zIGV4dGVuZHMgT21pdDxJVG9vbHRpcFByb3BzLCAnb25SZW5kZXJDb250ZW50Jz4ge1xyXG4gIHJlYWRvbmx5IHJlbmRlckNvbnRlbnQ/OiBJbnB1dFJlbmRlcmVyT3B0aW9uczxJVG9vbHRpcFByb3BzPjtcclxufVxyXG4iXX0=