/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, NgZone, Output, Renderer2, ViewChild, } from '@angular/core';
import { omit } from 'angular-react-toolkit/utils/omit';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1ob3N0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy9saWIvY29tcG9uZW50cy90b29sdGlwLyIsInNvdXJjZXMiOlsidG9vbHRpcC1ob3N0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQSxPQUFPLEVBQThCLHFCQUFxQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEYsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUE0QnhELE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxxQkFBd0M7Ozs7Ozs7SUFnQ25GLFlBQVksVUFBc0IsRUFBRSxpQkFBb0MsRUFBRSxRQUFtQixFQUFFLE1BQWM7UUFDM0csS0FBSyxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFOaEUsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBaUMsQ0FBQztRQVFyRixJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2RSxDQUFDOzs7OztJQXJCRCxJQUNJLGNBQWMsQ0FBQyxLQUFzQjtRQUN2QyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsK0JBQStCLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDNUU7SUFDSCxDQUFDOzs7O0lBRUQsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDOzs7OztJQWFELHNCQUFzQixDQUFDLGdCQUF5QjtRQUM5QyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLGdCQUFnQixFQUFFLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7Ozs7SUFFTywrQkFBK0IsQ0FBQyxPQUF3Qjs7Y0FDeEQsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUM7O2NBRWpELGVBQWUsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUUxRSxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQ2xCLEVBQUUsRUFDRixnQkFBZ0IsRUFDaEIsZUFBZSxJQUFJLENBQUMsbUJBQUEsRUFBRSxlQUFlOzs7O1lBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUEsRUFBRSxFQUEwQyxDQUFDLENBQ2xILENBQUM7SUFDSixDQUFDOzs7WUE5RUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CVDtnQkFFRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTt5QkFEdEMsZ0JBQWdCO2FBRTFCOzs7O1lBcENDLFVBQVU7WUFGVixpQkFBaUI7WUFPakIsU0FBUztZQUZULE1BQU07OzsyQkFtQ0wsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7MkJBRXZDLEtBQUs7eUJBQ0wsS0FBSzsyQkFDTCxLQUFLO3NCQUNMLEtBQUs7b0JBQ0wsS0FBSzs4QkFDTCxLQUFLO29DQUNMLEtBQUs7NEJBQ0wsS0FBSzsyQkFDTCxLQUFLO2lDQUNMLEtBQUs7b0JBQ0wsS0FBSzs2QkFFTCxLQUFLOzhCQVlMLE1BQU07Ozs7Ozs7SUExQlAsK0NBQTZFOztJQUU3RSwrQ0FBMEQ7O0lBQzFELDZDQUFzRDs7SUFDdEQsK0NBQTBEOztJQUMxRCwwQ0FBZ0Q7O0lBQ2hELHdDQUE0Qzs7SUFDNUMsa0RBQWdFOztJQUNoRSx3REFBNEU7O0lBQzVFLGdEQUE0RDs7SUFDNUQsK0NBQTBEOztJQUMxRCxxREFBc0U7O0lBQ3RFLHdDQUE0Qzs7SUFjNUMsa0RBQXVGOztJQUV2RiwwREFBMkQ7Ozs7O0lBQzNELGtEQUF5Qzs7Ozs7O0FBNEIzQyxxQ0FFQzs7O0lBREMsd0NBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IElucHV0UmVuZGVyZXJPcHRpb25zLCBPbWl0LCBSZWFjdFdyYXBwZXJDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9jb3JlJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0NoaWxkLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJVG9vbHRpcEhvc3RQcm9wcywgSVRvb2x0aXBQcm9wcyB9IGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliL1Rvb2x0aXAnO1xyXG5pbXBvcnQgeyBvbWl0IH0gZnJvbSAnYW5ndWxhci1yZWFjdC10b29sa2l0L3V0aWxzL29taXQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmYWItdG9vbHRpcC1ob3N0JyxcclxuICBleHBvcnRBczogJ2ZhYlRvb2x0aXBIb3N0JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPFRvb2x0aXBIb3N0XHJcbiAgICAgICNyZWFjdE5vZGVcclxuICAgICAgW3RoZW1lXT1cInRoZW1lXCJcclxuICAgICAgW2NvbXBvbmVudFJlZl09XCJjb21wb25lbnRSZWZcIlxyXG4gICAgICBbY2FsbG91dFByb3BzXT1cImNhbGxvdXRQcm9wc1wiXHJcbiAgICAgIFtjbG9zZURlbGF5XT1cImNsb3NlRGVsYXlcIlxyXG4gICAgICBbc2V0QXJpYURlc2NyaWJlZEJ5XT1cInNldEFyaWFEZXNjcmliZWRCeVwiXHJcbiAgICAgIFtkZWxheV09XCJkZWxheVwiXHJcbiAgICAgIFtjb250ZW50XT1cImNvbnRlbnRcIlxyXG4gICAgICBbZGlyZWN0aW9uYWxIaW50XT1cImRpcmVjdGlvbmFsSGludFwiXHJcbiAgICAgIFtkaXJlY3Rpb25hbEhpbnRGb3JSVExdPVwiZGlyZWN0aW9uYWxIaW50Rm9yUlRMXCJcclxuICAgICAgW292ZXJmbG93TW9kZV09XCJvdmVyZmxvd01vZGVcIlxyXG4gICAgICBbaG9zdENsYXNzTmFtZV09XCJob3N0Q2xhc3NOYW1lXCJcclxuICAgICAgW3Rvb2x0aXBQcm9wc109XCJ0cmFuc2Zvcm1lZFRvb2x0aXBQcm9wc1wiXHJcbiAgICAgIFtUb29sdGlwVG9nZ2xlXT1cIm9uVG9vbHRpcFRvZ2dsZUhhbmRsZXJcIlxyXG4gICAgPlxyXG4gICAgICA8UmVhY3RDb250ZW50PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L1JlYWN0Q29udGVudD5cclxuICAgIDwvVG9vbHRpcEhvc3Q+XHJcbiAgYCxcclxuICBzdHlsZXM6IFsncmVhY3QtcmVuZGVyZXInXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZhYlRvb2x0aXBIb3N0Q29tcG9uZW50IGV4dGVuZHMgUmVhY3RXcmFwcGVyQ29tcG9uZW50PElUb29sdGlwSG9zdFByb3BzPiB7XHJcbiAgQFZpZXdDaGlsZCgncmVhY3ROb2RlJywgeyBzdGF0aWM6IHRydWUgfSkgcHJvdGVjdGVkIHJlYWN0Tm9kZVJlZjogRWxlbWVudFJlZjtcclxuXHJcbiAgQElucHV0KCkgY29tcG9uZW50UmVmPzogSVRvb2x0aXBIb3N0UHJvcHNbJ2NvbXBvbmVudFJlZiddO1xyXG4gIEBJbnB1dCgpIGNsb3NlRGVsYXk/OiBJVG9vbHRpcEhvc3RQcm9wc1snY2xvc2VEZWxheSddO1xyXG4gIEBJbnB1dCgpIGNhbGxvdXRQcm9wcz86IElUb29sdGlwSG9zdFByb3BzWydjYWxsb3V0UHJvcHMnXTtcclxuICBASW5wdXQoKSBjb250ZW50PzogSVRvb2x0aXBIb3N0UHJvcHNbJ2NvbnRlbnQnXTtcclxuICBASW5wdXQoKSBkZWxheT86IElUb29sdGlwSG9zdFByb3BzWydkZWxheSddO1xyXG4gIEBJbnB1dCgpIGRpcmVjdGlvbmFsSGludD86IElUb29sdGlwSG9zdFByb3BzWydkaXJlY3Rpb25hbEhpbnQnXTtcclxuICBASW5wdXQoKSBkaXJlY3Rpb25hbEhpbnRGb3JSVEw/OiBJVG9vbHRpcEhvc3RQcm9wc1snZGlyZWN0aW9uYWxIaW50Rm9yUlRMJ107XHJcbiAgQElucHV0KCkgaG9zdENsYXNzTmFtZT86IElUb29sdGlwSG9zdFByb3BzWydob3N0Q2xhc3NOYW1lJ107XHJcbiAgQElucHV0KCkgb3ZlcmZsb3dNb2RlPzogSVRvb2x0aXBIb3N0UHJvcHNbJ292ZXJmbG93TW9kZSddO1xyXG4gIEBJbnB1dCgpIHNldEFyaWFEZXNjcmliZWRCeT86IElUb29sdGlwSG9zdFByb3BzWydzZXRBcmlhRGVzY3JpYmVkQnknXTtcclxuICBASW5wdXQoKSB0aGVtZT86IElUb29sdGlwSG9zdFByb3BzWyd0aGVtZSddO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCB0b29sdGlwT3B0aW9ucyh2YWx1ZTogSVRvb2x0aXBPcHRpb25zKSB7XHJcbiAgICB0aGlzLl90b29sdGlwT3B0aW9ucyA9IHZhbHVlO1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtZWRUb29sdGlwUHJvcHMgPSB0aGlzLl90cmFuc2Zvcm1Ub29sdGlwT3B0aW9uc1RvUHJvcHModmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHRvb2x0aXBPcHRpb25zKCk6IElUb29sdGlwT3B0aW9ucyB7XHJcbiAgICByZXR1cm4gdGhpcy5fdG9vbHRpcE9wdGlvbnM7XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25Ub29sdGlwVG9nZ2xlID0gbmV3IEV2ZW50RW1pdHRlcjx7IGlzVG9vbHRpcFZpc2libGU6IGJvb2xlYW4gfT4oKTtcclxuXHJcbiAgdHJhbnNmb3JtZWRUb29sdGlwUHJvcHM6IElUb29sdGlwSG9zdFByb3BzWyd0b29sdGlwUHJvcHMnXTtcclxuICBwcml2YXRlIF90b29sdGlwT3B0aW9uczogSVRvb2x0aXBPcHRpb25zO1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG5nWm9uZTogTmdab25lKSB7XHJcbiAgICBzdXBlcihlbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXIsIHsgbmdab25lLCBzZXRIb3N0RGlzcGxheTogdHJ1ZSB9KTtcclxuXHJcbiAgICB0aGlzLm9uVG9vbHRpcFRvZ2dsZUhhbmRsZXIgPSB0aGlzLm9uVG9vbHRpcFRvZ2dsZUhhbmRsZXIuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIG9uVG9vbHRpcFRvZ2dsZUhhbmRsZXIoaXNUb29sdGlwVmlzaWJsZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5vblRvb2x0aXBUb2dnbGUuZW1pdCh7IGlzVG9vbHRpcFZpc2libGUgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF90cmFuc2Zvcm1Ub29sdGlwT3B0aW9uc1RvUHJvcHMob3B0aW9uczogSVRvb2x0aXBPcHRpb25zKTogSVRvb2x0aXBQcm9wcyB7XHJcbiAgICBjb25zdCBzaGFyZWRQcm9wZXJ0aWVzID0gb21pdChvcHRpb25zLCAncmVuZGVyQ29udGVudCcpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRlbnRSZW5kZXJlciA9IHRoaXMuY3JlYXRlSW5wdXRKc3hSZW5kZXJlcihvcHRpb25zLnJlbmRlckNvbnRlbnQpO1xyXG5cclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKFxyXG4gICAgICB7fSxcclxuICAgICAgc2hhcmVkUHJvcGVydGllcyxcclxuICAgICAgY29udGVudFJlbmRlcmVyICYmICh7IG9uUmVuZGVyQ29udGVudDogZGF0YSA9PiBjb250ZW50UmVuZGVyZXIoZGF0YSkgfSBhcyBQaWNrPElUb29sdGlwUHJvcHMsICdvblJlbmRlckNvbnRlbnQnPilcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ291bnRlcnBhcnQgb2YgYElUb29sdGlwUHJvcHNgLCB3aXRoIEFuZ3VsYXIgYWRqdXN0bWVudHMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElUb29sdGlwT3B0aW9ucyBleHRlbmRzIE9taXQ8SVRvb2x0aXBQcm9wcywgJ29uUmVuZGVyQ29udGVudCc+IHtcclxuICByZWFkb25seSByZW5kZXJDb250ZW50PzogSW5wdXRSZW5kZXJlck9wdGlvbnM8SVRvb2x0aXBQcm9wcz47XHJcbn1cclxuIl19