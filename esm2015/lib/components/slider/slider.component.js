/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild, } from '@angular/core';
export class FabSliderComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer);
        this.onChange = new EventEmitter();
        this.onChanged = new EventEmitter();
        this.onChangedHandler = this.onChangedHandler.bind(this);
    }
    /**
     * @param {?} event
     * @param {?} value
     * @return {?}
     */
    onChangedHandler(event, value) {
        this.onChanged.emit({
            event,
            value,
        });
    }
}
FabSliderComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-slider',
                exportAs: 'fabSlider',
                template: `
    <Slider
      #reactNode
      [componentRef]="componentRef"
      [styles]="styles"
      [theme]="theme"
      [label]="label"
      [defaultValue]="defaultValue"
      [value]="value"
      [min]="min"
      [max]="max"
      [step]="step"
      [showValue]="showValue"
      [ariaLabel]="ariaLabel"
      [ariaValueText]="ariaValueText"
      [vertical]="vertical"
      [disabled]="disabled"
      [className]="className"
      [buttonProps]="buttonProps"
      [valueFormat]="valueFormat"
      [originFromZero]="originFromZero"
      [Changed]="onChangedHandler"
      (onChange)="onChange.emit($event)"
    >
    </Slider>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabSliderComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
FabSliderComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    componentRef: [{ type: Input }],
    styles: [{ type: Input }],
    theme: [{ type: Input }],
    label: [{ type: Input }],
    defaultValue: [{ type: Input }],
    value: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    step: [{ type: Input }],
    showValue: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    ariaValueText: [{ type: Input }],
    vertical: [{ type: Input }],
    disabled: [{ type: Input }],
    className: [{ type: Input }],
    buttonProps: [{ type: Input }],
    valueFormat: [{ type: Input }],
    originFromZero: [{ type: Input }],
    onChange: [{ type: Output }],
    onChanged: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabSliderComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabSliderComponent.prototype.componentRef;
    /** @type {?} */
    FabSliderComponent.prototype.styles;
    /** @type {?} */
    FabSliderComponent.prototype.theme;
    /** @type {?} */
    FabSliderComponent.prototype.label;
    /** @type {?} */
    FabSliderComponent.prototype.defaultValue;
    /** @type {?} */
    FabSliderComponent.prototype.value;
    /** @type {?} */
    FabSliderComponent.prototype.min;
    /** @type {?} */
    FabSliderComponent.prototype.max;
    /** @type {?} */
    FabSliderComponent.prototype.step;
    /** @type {?} */
    FabSliderComponent.prototype.showValue;
    /** @type {?} */
    FabSliderComponent.prototype.ariaLabel;
    /** @type {?} */
    FabSliderComponent.prototype.ariaValueText;
    /** @type {?} */
    FabSliderComponent.prototype.vertical;
    /** @type {?} */
    FabSliderComponent.prototype.disabled;
    /** @type {?} */
    FabSliderComponent.prototype.className;
    /** @type {?} */
    FabSliderComponent.prototype.buttonProps;
    /** @type {?} */
    FabSliderComponent.prototype.valueFormat;
    /** @type {?} */
    FabSliderComponent.prototype.originFromZero;
    /** @type {?} */
    FabSliderComponent.prototype.onChange;
    /** @type {?} */
    FabSliderComponent.prototype.onChanged;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy9saWIvY29tcG9uZW50cy9zbGlkZXIvIiwic291cmNlcyI6WyJzbGlkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzVELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQW1DdkIsTUFBTSxPQUFPLGtCQUFtQixTQUFRLHFCQUFtQzs7Ozs7O0lBeUJ6RSxZQUFZLFVBQXNCLEVBQUUsaUJBQW9DLEVBQUUsUUFBbUI7UUFDM0YsS0FBSyxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUo5QixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUN0QyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQXFELENBQUM7UUFLbkcsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsS0FBOEIsRUFBRSxLQUFhO1FBQzVELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEtBQUs7WUFDTCxLQUFLO1NBQ04sQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBcEVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXlCVDtnQkFFRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTt5QkFEdEMsZ0JBQWdCO2FBRTFCOzs7O1lBeENDLFVBQVU7WUFGVixpQkFBaUI7WUFNakIsU0FBUzs7OzJCQXNDUixTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsyQkFFdkMsS0FBSztxQkFDTCxLQUFLO29CQUNMLEtBQUs7b0JBQ0wsS0FBSzsyQkFDTCxLQUFLO29CQUNMLEtBQUs7a0JBQ0wsS0FBSztrQkFDTCxLQUFLO21CQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLOzRCQUNMLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLOzZCQUNMLEtBQUs7dUJBRUwsTUFBTTt3QkFDTixNQUFNOzs7Ozs7O0lBdEJQLDBDQUE2RTs7SUFFN0UsMENBQXFEOztJQUNyRCxvQ0FBeUM7O0lBQ3pDLG1DQUF1Qzs7SUFDdkMsbUNBQXVDOztJQUN2QywwQ0FBcUQ7O0lBQ3JELG1DQUF1Qzs7SUFDdkMsaUNBQW1DOztJQUNuQyxpQ0FBbUM7O0lBQ25DLGtDQUFxQzs7SUFDckMsdUNBQStDOztJQUMvQyx1Q0FBK0M7O0lBQy9DLDJDQUF1RDs7SUFDdkQsc0NBQTZDOztJQUM3QyxzQ0FBNkM7O0lBQzdDLHVDQUErQzs7SUFDL0MseUNBQW1EOztJQUNuRCx5Q0FBbUQ7O0lBQ25ELDRDQUF5RDs7SUFFekQsc0NBQXlEOztJQUN6RCx1Q0FBcUciLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgUmVhY3RXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXItcmVhY3QvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0NoaWxkLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJU2xpZGVyUHJvcHMgfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9TbGlkZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmYWItc2xpZGVyJyxcclxuICBleHBvcnRBczogJ2ZhYlNsaWRlcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxTbGlkZXJcclxuICAgICAgI3JlYWN0Tm9kZVxyXG4gICAgICBbY29tcG9uZW50UmVmXT1cImNvbXBvbmVudFJlZlwiXHJcbiAgICAgIFtzdHlsZXNdPVwic3R5bGVzXCJcclxuICAgICAgW3RoZW1lXT1cInRoZW1lXCJcclxuICAgICAgW2xhYmVsXT1cImxhYmVsXCJcclxuICAgICAgW2RlZmF1bHRWYWx1ZV09XCJkZWZhdWx0VmFsdWVcIlxyXG4gICAgICBbdmFsdWVdPVwidmFsdWVcIlxyXG4gICAgICBbbWluXT1cIm1pblwiXHJcbiAgICAgIFttYXhdPVwibWF4XCJcclxuICAgICAgW3N0ZXBdPVwic3RlcFwiXHJcbiAgICAgIFtzaG93VmFsdWVdPVwic2hvd1ZhbHVlXCJcclxuICAgICAgW2FyaWFMYWJlbF09XCJhcmlhTGFiZWxcIlxyXG4gICAgICBbYXJpYVZhbHVlVGV4dF09XCJhcmlhVmFsdWVUZXh0XCJcclxuICAgICAgW3ZlcnRpY2FsXT1cInZlcnRpY2FsXCJcclxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgW2NsYXNzTmFtZV09XCJjbGFzc05hbWVcIlxyXG4gICAgICBbYnV0dG9uUHJvcHNdPVwiYnV0dG9uUHJvcHNcIlxyXG4gICAgICBbdmFsdWVGb3JtYXRdPVwidmFsdWVGb3JtYXRcIlxyXG4gICAgICBbb3JpZ2luRnJvbVplcm9dPVwib3JpZ2luRnJvbVplcm9cIlxyXG4gICAgICBbQ2hhbmdlZF09XCJvbkNoYW5nZWRIYW5kbGVyXCJcclxuICAgICAgKG9uQ2hhbmdlKT1cIm9uQ2hhbmdlLmVtaXQoJGV2ZW50KVwiXHJcbiAgICA+XHJcbiAgICA8L1NsaWRlcj5cclxuICBgLFxyXG4gIHN0eWxlczogWydyZWFjdC1yZW5kZXJlciddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmFiU2xpZGVyQ29tcG9uZW50IGV4dGVuZHMgUmVhY3RXcmFwcGVyQ29tcG9uZW50PElTbGlkZXJQcm9wcz4ge1xyXG4gIEBWaWV3Q2hpbGQoJ3JlYWN0Tm9kZScsIHsgc3RhdGljOiB0cnVlIH0pIHByb3RlY3RlZCByZWFjdE5vZGVSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBJbnB1dCgpIGNvbXBvbmVudFJlZj86IElTbGlkZXJQcm9wc1snY29tcG9uZW50UmVmJ107XHJcbiAgQElucHV0KCkgc3R5bGVzPzogSVNsaWRlclByb3BzWydzdHlsZXMnXTtcclxuICBASW5wdXQoKSB0aGVtZT86IElTbGlkZXJQcm9wc1sndGhlbWUnXTtcclxuICBASW5wdXQoKSBsYWJlbD86IElTbGlkZXJQcm9wc1snbGFiZWwnXTtcclxuICBASW5wdXQoKSBkZWZhdWx0VmFsdWU/OiBJU2xpZGVyUHJvcHNbJ2RlZmF1bHRWYWx1ZSddO1xyXG4gIEBJbnB1dCgpIHZhbHVlPzogSVNsaWRlclByb3BzWyd2YWx1ZSddO1xyXG4gIEBJbnB1dCgpIG1pbj86IElTbGlkZXJQcm9wc1snbWluJ107XHJcbiAgQElucHV0KCkgbWF4PzogSVNsaWRlclByb3BzWydtYXgnXTtcclxuICBASW5wdXQoKSBzdGVwPzogSVNsaWRlclByb3BzWydzdGVwJ107XHJcbiAgQElucHV0KCkgc2hvd1ZhbHVlPzogSVNsaWRlclByb3BzWydzaG93VmFsdWUnXTtcclxuICBASW5wdXQoKSBhcmlhTGFiZWw/OiBJU2xpZGVyUHJvcHNbJ2FyaWFMYWJlbCddO1xyXG4gIEBJbnB1dCgpIGFyaWFWYWx1ZVRleHQ/OiBJU2xpZGVyUHJvcHNbJ2FyaWFWYWx1ZVRleHQnXTtcclxuICBASW5wdXQoKSB2ZXJ0aWNhbD86IElTbGlkZXJQcm9wc1sndmVydGljYWwnXTtcclxuICBASW5wdXQoKSBkaXNhYmxlZD86IElTbGlkZXJQcm9wc1snZGlzYWJsZWQnXTtcclxuICBASW5wdXQoKSBjbGFzc05hbWU/OiBJU2xpZGVyUHJvcHNbJ2NsYXNzTmFtZSddO1xyXG4gIEBJbnB1dCgpIGJ1dHRvblByb3BzPzogSVNsaWRlclByb3BzWydidXR0b25Qcm9wcyddO1xyXG4gIEBJbnB1dCgpIHZhbHVlRm9ybWF0PzogSVNsaWRlclByb3BzWyd2YWx1ZUZvcm1hdCddO1xyXG4gIEBJbnB1dCgpIG9yaWdpbkZyb21aZXJvPzogSVNsaWRlclByb3BzWydvcmlnaW5Gcm9tWmVybyddO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25DaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjx7IGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudDsgdmFsdWU6IG51bWJlciB9PigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcik7XHJcblxyXG4gICAgdGhpcy5vbkNoYW5nZWRIYW5kbGVyID0gdGhpcy5vbkNoYW5nZWRIYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZWRIYW5kbGVyKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCwgdmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5vbkNoYW5nZWQuZW1pdCh7XHJcbiAgICAgIGV2ZW50LFxyXG4gICAgICB2YWx1ZSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=