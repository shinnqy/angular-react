/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, NgZone, Output, Renderer2, ViewChild, } from '@angular/core';
import { omit } from '@angular-react/fabric/lib/utils';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1ob3N0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3Rvb2x0aXAvdG9vbHRpcC1ob3N0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0EsT0FBTyxFQUE4QixxQkFBcUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hGLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRXZEO0lBMEI2QyxtREFBd0M7SUFnQ25GLGlDQUFZLFVBQXNCLEVBQUUsaUJBQW9DLEVBQUUsUUFBbUIsRUFBRSxNQUFjO1FBQTdHLFlBQ0Usa0JBQU0sVUFBVSxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxFQUFFLE1BQU0sUUFBQSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxTQUdqRjtRQVRrQixxQkFBZSxHQUFHLElBQUksWUFBWSxFQUFpQyxDQUFDO1FBUXJGLEtBQUksQ0FBQyxzQkFBc0IsR0FBRyxLQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDOztJQUN2RSxDQUFDO0lBckJELHNCQUNJLG1EQUFjOzs7O1FBT2xCO1lBQ0UsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQzlCLENBQUM7Ozs7O1FBVkQsVUFDbUIsS0FBc0I7WUFDdkMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDN0IsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsSUFBSSxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM1RTtRQUNILENBQUM7OztPQUFBOzs7OztJQWlCRCx3REFBc0I7Ozs7SUFBdEIsVUFBdUIsZ0JBQXlCO1FBQzlDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsZ0JBQWdCLGtCQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7OztJQUVPLGlFQUErQjs7Ozs7SUFBdkMsVUFBd0MsT0FBd0I7O1lBQ3hELGdCQUFnQixHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDOztZQUVqRCxlQUFlLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFFMUUsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUNsQixFQUFFLEVBQ0YsZ0JBQWdCLEVBQ2hCLGVBQWUsSUFBSSxDQUFDLG1CQUFBLEVBQUUsZUFBZTs7OztZQUFFLFVBQUEsSUFBSSxJQUFJLE9BQUEsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFyQixDQUFxQixDQUFBLEVBQUUsRUFBMEMsQ0FBQyxDQUNsSCxDQUFDO0lBQ0osQ0FBQzs7Z0JBOUVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsZ3BCQW1CVDtvQkFFRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs2QkFEdEMsZ0JBQWdCO2lCQUUxQjs7OztnQkFwQ0MsVUFBVTtnQkFGVixpQkFBaUI7Z0JBT2pCLFNBQVM7Z0JBRlQsTUFBTTs7OytCQW1DTCxTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsrQkFFdkMsS0FBSzs2QkFDTCxLQUFLOytCQUNMLEtBQUs7MEJBQ0wsS0FBSzt3QkFDTCxLQUFLO2tDQUNMLEtBQUs7d0NBQ0wsS0FBSztnQ0FDTCxLQUFLOytCQUNMLEtBQUs7cUNBQ0wsS0FBSzt3QkFDTCxLQUFLO2lDQUVMLEtBQUs7a0NBWUwsTUFBTTs7SUEwQlQsOEJBQUM7Q0FBQSxBQS9FRCxDQTBCNkMscUJBQXFCLEdBcURqRTtTQXJEWSx1QkFBdUI7Ozs7OztJQUNsQywrQ0FBNkU7O0lBRTdFLCtDQUEwRDs7SUFDMUQsNkNBQXNEOztJQUN0RCwrQ0FBMEQ7O0lBQzFELDBDQUFnRDs7SUFDaEQsd0NBQTRDOztJQUM1QyxrREFBZ0U7O0lBQ2hFLHdEQUE0RTs7SUFDNUUsZ0RBQTREOztJQUM1RCwrQ0FBMEQ7O0lBQzFELHFEQUFzRTs7SUFDdEUsd0NBQTRDOztJQWM1QyxrREFBdUY7O0lBRXZGLDBEQUEyRDs7Ozs7SUFDM0Qsa0RBQXlDOzs7Ozs7QUE0QjNDLHFDQUVDOzs7SUFEQyx3Q0FBNkQiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgSW5wdXRSZW5kZXJlck9wdGlvbnMsIE9taXQsIFJlYWN0V3JhcHBlckNvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3Q2hpbGQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElUb29sdGlwSG9zdFByb3BzLCBJVG9vbHRpcFByb3BzIH0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvVG9vbHRpcCc7XHJcbmltcG9ydCB7IG9taXQgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9mYWJyaWMvbGliL3V0aWxzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZmFiLXRvb2x0aXAtaG9zdCcsXHJcbiAgZXhwb3J0QXM6ICdmYWJUb29sdGlwSG9zdCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxUb29sdGlwSG9zdFxyXG4gICAgICAjcmVhY3ROb2RlXHJcbiAgICAgIFt0aGVtZV09XCJ0aGVtZVwiXHJcbiAgICAgIFtjb21wb25lbnRSZWZdPVwiY29tcG9uZW50UmVmXCJcclxuICAgICAgW2NhbGxvdXRQcm9wc109XCJjYWxsb3V0UHJvcHNcIlxyXG4gICAgICBbY2xvc2VEZWxheV09XCJjbG9zZURlbGF5XCJcclxuICAgICAgW3NldEFyaWFEZXNjcmliZWRCeV09XCJzZXRBcmlhRGVzY3JpYmVkQnlcIlxyXG4gICAgICBbZGVsYXldPVwiZGVsYXlcIlxyXG4gICAgICBbY29udGVudF09XCJjb250ZW50XCJcclxuICAgICAgW2RpcmVjdGlvbmFsSGludF09XCJkaXJlY3Rpb25hbEhpbnRcIlxyXG4gICAgICBbZGlyZWN0aW9uYWxIaW50Rm9yUlRMXT1cImRpcmVjdGlvbmFsSGludEZvclJUTFwiXHJcbiAgICAgIFtvdmVyZmxvd01vZGVdPVwib3ZlcmZsb3dNb2RlXCJcclxuICAgICAgW2hvc3RDbGFzc05hbWVdPVwiaG9zdENsYXNzTmFtZVwiXHJcbiAgICAgIFt0b29sdGlwUHJvcHNdPVwidHJhbnNmb3JtZWRUb29sdGlwUHJvcHNcIlxyXG4gICAgICBbVG9vbHRpcFRvZ2dsZV09XCJvblRvb2x0aXBUb2dnbGVIYW5kbGVyXCJcclxuICAgID5cclxuICAgICAgPFJlYWN0Q29udGVudD48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9SZWFjdENvbnRlbnQ+XHJcbiAgICA8L1Rvb2x0aXBIb3N0PlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbJ3JlYWN0LXJlbmRlcmVyJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYWJUb29sdGlwSG9zdENvbXBvbmVudCBleHRlbmRzIFJlYWN0V3JhcHBlckNvbXBvbmVudDxJVG9vbHRpcEhvc3RQcm9wcz4ge1xyXG4gIEBWaWV3Q2hpbGQoJ3JlYWN0Tm9kZScsIHsgc3RhdGljOiB0cnVlIH0pIHByb3RlY3RlZCByZWFjdE5vZGVSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBJbnB1dCgpIGNvbXBvbmVudFJlZj86IElUb29sdGlwSG9zdFByb3BzWydjb21wb25lbnRSZWYnXTtcclxuICBASW5wdXQoKSBjbG9zZURlbGF5PzogSVRvb2x0aXBIb3N0UHJvcHNbJ2Nsb3NlRGVsYXknXTtcclxuICBASW5wdXQoKSBjYWxsb3V0UHJvcHM/OiBJVG9vbHRpcEhvc3RQcm9wc1snY2FsbG91dFByb3BzJ107XHJcbiAgQElucHV0KCkgY29udGVudD86IElUb29sdGlwSG9zdFByb3BzWydjb250ZW50J107XHJcbiAgQElucHV0KCkgZGVsYXk/OiBJVG9vbHRpcEhvc3RQcm9wc1snZGVsYXknXTtcclxuICBASW5wdXQoKSBkaXJlY3Rpb25hbEhpbnQ/OiBJVG9vbHRpcEhvc3RQcm9wc1snZGlyZWN0aW9uYWxIaW50J107XHJcbiAgQElucHV0KCkgZGlyZWN0aW9uYWxIaW50Rm9yUlRMPzogSVRvb2x0aXBIb3N0UHJvcHNbJ2RpcmVjdGlvbmFsSGludEZvclJUTCddO1xyXG4gIEBJbnB1dCgpIGhvc3RDbGFzc05hbWU/OiBJVG9vbHRpcEhvc3RQcm9wc1snaG9zdENsYXNzTmFtZSddO1xyXG4gIEBJbnB1dCgpIG92ZXJmbG93TW9kZT86IElUb29sdGlwSG9zdFByb3BzWydvdmVyZmxvd01vZGUnXTtcclxuICBASW5wdXQoKSBzZXRBcmlhRGVzY3JpYmVkQnk/OiBJVG9vbHRpcEhvc3RQcm9wc1snc2V0QXJpYURlc2NyaWJlZEJ5J107XHJcbiAgQElucHV0KCkgdGhlbWU/OiBJVG9vbHRpcEhvc3RQcm9wc1sndGhlbWUnXTtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgdG9vbHRpcE9wdGlvbnModmFsdWU6IElUb29sdGlwT3B0aW9ucykge1xyXG4gICAgdGhpcy5fdG9vbHRpcE9wdGlvbnMgPSB2YWx1ZTtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybWVkVG9vbHRpcFByb3BzID0gdGhpcy5fdHJhbnNmb3JtVG9vbHRpcE9wdGlvbnNUb1Byb3BzKHZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCB0b29sdGlwT3B0aW9ucygpOiBJVG9vbHRpcE9wdGlvbnMge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Rvb2x0aXBPcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uVG9vbHRpcFRvZ2dsZSA9IG5ldyBFdmVudEVtaXR0ZXI8eyBpc1Rvb2x0aXBWaXNpYmxlOiBib29sZWFuIH0+KCk7XHJcblxyXG4gIHRyYW5zZm9ybWVkVG9vbHRpcFByb3BzOiBJVG9vbHRpcEhvc3RQcm9wc1sndG9vbHRpcFByb3BzJ107XHJcbiAgcHJpdmF0ZSBfdG9vbHRpcE9wdGlvbnM6IElUb29sdGlwT3B0aW9ucztcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCBuZ1pvbmU6IE5nWm9uZSkge1xyXG4gICAgc3VwZXIoZWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyLCB7IG5nWm9uZSwgc2V0SG9zdERpc3BsYXk6IHRydWUgfSk7XHJcblxyXG4gICAgdGhpcy5vblRvb2x0aXBUb2dnbGVIYW5kbGVyID0gdGhpcy5vblRvb2x0aXBUb2dnbGVIYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBvblRvb2x0aXBUb2dnbGVIYW5kbGVyKGlzVG9vbHRpcFZpc2libGU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMub25Ub29sdGlwVG9nZ2xlLmVtaXQoeyBpc1Rvb2x0aXBWaXNpYmxlIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfdHJhbnNmb3JtVG9vbHRpcE9wdGlvbnNUb1Byb3BzKG9wdGlvbnM6IElUb29sdGlwT3B0aW9ucyk6IElUb29sdGlwUHJvcHMge1xyXG4gICAgY29uc3Qgc2hhcmVkUHJvcGVydGllcyA9IG9taXQob3B0aW9ucywgJ3JlbmRlckNvbnRlbnQnKTtcclxuXHJcbiAgICBjb25zdCBjb250ZW50UmVuZGVyZXIgPSB0aGlzLmNyZWF0ZUlucHV0SnN4UmVuZGVyZXIob3B0aW9ucy5yZW5kZXJDb250ZW50KTtcclxuXHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihcclxuICAgICAge30sXHJcbiAgICAgIHNoYXJlZFByb3BlcnRpZXMsXHJcbiAgICAgIGNvbnRlbnRSZW5kZXJlciAmJiAoeyBvblJlbmRlckNvbnRlbnQ6IGRhdGEgPT4gY29udGVudFJlbmRlcmVyKGRhdGEpIH0gYXMgUGljazxJVG9vbHRpcFByb3BzLCAnb25SZW5kZXJDb250ZW50Jz4pXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENvdW50ZXJwYXJ0IG9mIGBJVG9vbHRpcFByb3BzYCwgd2l0aCBBbmd1bGFyIGFkanVzdG1lbnRzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVG9vbHRpcE9wdGlvbnMgZXh0ZW5kcyBPbWl0PElUb29sdGlwUHJvcHMsICdvblJlbmRlckNvbnRlbnQnPiB7XHJcbiAgcmVhZG9ubHkgcmVuZGVyQ29udGVudD86IElucHV0UmVuZGVyZXJPcHRpb25zPElUb29sdGlwUHJvcHM+O1xyXG59XHJcbiJdfQ==