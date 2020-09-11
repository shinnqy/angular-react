/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild, } from '@angular/core';
var FabSliderComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabSliderComponent, _super);
    function FabSliderComponent(elementRef, changeDetectorRef, renderer) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer) || this;
        _this.onChange = new EventEmitter();
        _this.onChanged = new EventEmitter();
        _this.onChangedHandler = _this.onChangedHandler.bind(_this);
        return _this;
    }
    /**
     * @param {?} event
     * @param {?} value
     * @return {?}
     */
    FabSliderComponent.prototype.onChangedHandler = /**
     * @param {?} event
     * @param {?} value
     * @return {?}
     */
    function (event, value) {
        this.onChanged.emit({
            event: event,
            value: value,
        });
    };
    FabSliderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-slider',
                    exportAs: 'fabSlider',
                    template: "\n    <Slider\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [label]=\"label\"\n      [defaultValue]=\"defaultValue\"\n      [value]=\"value\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [step]=\"step\"\n      [showValue]=\"showValue\"\n      [ariaLabel]=\"ariaLabel\"\n      [ariaValueText]=\"ariaValueText\"\n      [vertical]=\"vertical\"\n      [disabled]=\"disabled\"\n      [className]=\"className\"\n      [buttonProps]=\"buttonProps\"\n      [valueFormat]=\"valueFormat\"\n      [originFromZero]=\"originFromZero\"\n      [Changed]=\"onChangedHandler\"\n      (onChange)=\"onChange.emit($event)\"\n    >\n    </Slider>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabSliderComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
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
    return FabSliderComponent;
}(ReactWrapperComponent));
export { FabSliderComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy9saWIvY29tcG9uZW50cy9zbGlkZXIvIiwic291cmNlcyI6WyJzbGlkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM1RCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFHdkI7SUFnQ3dDLDhDQUFtQztJQXlCekUsNEJBQVksVUFBc0IsRUFBRSxpQkFBb0MsRUFBRSxRQUFtQjtRQUE3RixZQUNFLGtCQUFNLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLENBQUMsU0FHL0M7UUFQa0IsY0FBUSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDdEMsZUFBUyxHQUFHLElBQUksWUFBWSxFQUFxRCxDQUFDO1FBS25HLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDOztJQUMzRCxDQUFDOzs7Ozs7SUFFRCw2Q0FBZ0I7Ozs7O0lBQWhCLFVBQWlCLEtBQThCLEVBQUUsS0FBYTtRQUM1RCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztZQUNsQixLQUFLLE9BQUE7WUFDTCxLQUFLLE9BQUE7U0FDTixDQUFDLENBQUM7SUFDTCxDQUFDOztnQkFwRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsV0FBVztvQkFDckIsUUFBUSxFQUFFLGlzQkF5QlQ7b0JBRUQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07NkJBRHRDLGdCQUFnQjtpQkFFMUI7Ozs7Z0JBeENDLFVBQVU7Z0JBRlYsaUJBQWlCO2dCQU1qQixTQUFTOzs7K0JBc0NSLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOytCQUV2QyxLQUFLO3lCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLOytCQUNMLEtBQUs7d0JBQ0wsS0FBSztzQkFDTCxLQUFLO3NCQUNMLEtBQUs7dUJBQ0wsS0FBSzs0QkFDTCxLQUFLOzRCQUNMLEtBQUs7Z0NBQ0wsS0FBSzsyQkFDTCxLQUFLOzJCQUNMLEtBQUs7NEJBQ0wsS0FBSzs4QkFDTCxLQUFLOzhCQUNMLEtBQUs7aUNBQ0wsS0FBSzsyQkFFTCxNQUFNOzRCQUNOLE1BQU07O0lBY1QseUJBQUM7Q0FBQSxBQXJFRCxDQWdDd0MscUJBQXFCLEdBcUM1RDtTQXJDWSxrQkFBa0I7Ozs7OztJQUM3QiwwQ0FBNkU7O0lBRTdFLDBDQUFxRDs7SUFDckQsb0NBQXlDOztJQUN6QyxtQ0FBdUM7O0lBQ3ZDLG1DQUF1Qzs7SUFDdkMsMENBQXFEOztJQUNyRCxtQ0FBdUM7O0lBQ3ZDLGlDQUFtQzs7SUFDbkMsaUNBQW1DOztJQUNuQyxrQ0FBcUM7O0lBQ3JDLHVDQUErQzs7SUFDL0MsdUNBQStDOztJQUMvQywyQ0FBdUQ7O0lBQ3ZELHNDQUE2Qzs7SUFDN0Msc0NBQTZDOztJQUM3Qyx1Q0FBK0M7O0lBQy9DLHlDQUFtRDs7SUFDbkQseUNBQW1EOztJQUNuRCw0Q0FBeUQ7O0lBRXpELHNDQUF5RDs7SUFDekQsdUNBQXFHIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IFJlYWN0V3JhcHBlckNvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFZpZXdDaGlsZCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSVNsaWRlclByb3BzIH0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvU2xpZGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZmFiLXNsaWRlcicsXHJcbiAgZXhwb3J0QXM6ICdmYWJTbGlkZXInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8U2xpZGVyXHJcbiAgICAgICNyZWFjdE5vZGVcclxuICAgICAgW2NvbXBvbmVudFJlZl09XCJjb21wb25lbnRSZWZcIlxyXG4gICAgICBbc3R5bGVzXT1cInN0eWxlc1wiXHJcbiAgICAgIFt0aGVtZV09XCJ0aGVtZVwiXHJcbiAgICAgIFtsYWJlbF09XCJsYWJlbFwiXHJcbiAgICAgIFtkZWZhdWx0VmFsdWVdPVwiZGVmYXVsdFZhbHVlXCJcclxuICAgICAgW3ZhbHVlXT1cInZhbHVlXCJcclxuICAgICAgW21pbl09XCJtaW5cIlxyXG4gICAgICBbbWF4XT1cIm1heFwiXHJcbiAgICAgIFtzdGVwXT1cInN0ZXBcIlxyXG4gICAgICBbc2hvd1ZhbHVlXT1cInNob3dWYWx1ZVwiXHJcbiAgICAgIFthcmlhTGFiZWxdPVwiYXJpYUxhYmVsXCJcclxuICAgICAgW2FyaWFWYWx1ZVRleHRdPVwiYXJpYVZhbHVlVGV4dFwiXHJcbiAgICAgIFt2ZXJ0aWNhbF09XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgIFtjbGFzc05hbWVdPVwiY2xhc3NOYW1lXCJcclxuICAgICAgW2J1dHRvblByb3BzXT1cImJ1dHRvblByb3BzXCJcclxuICAgICAgW3ZhbHVlRm9ybWF0XT1cInZhbHVlRm9ybWF0XCJcclxuICAgICAgW29yaWdpbkZyb21aZXJvXT1cIm9yaWdpbkZyb21aZXJvXCJcclxuICAgICAgW0NoYW5nZWRdPVwib25DaGFuZ2VkSGFuZGxlclwiXHJcbiAgICAgIChvbkNoYW5nZSk9XCJvbkNoYW5nZS5lbWl0KCRldmVudClcIlxyXG4gICAgPlxyXG4gICAgPC9TbGlkZXI+XHJcbiAgYCxcclxuICBzdHlsZXM6IFsncmVhY3QtcmVuZGVyZXInXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZhYlNsaWRlckNvbXBvbmVudCBleHRlbmRzIFJlYWN0V3JhcHBlckNvbXBvbmVudDxJU2xpZGVyUHJvcHM+IHtcclxuICBAVmlld0NoaWxkKCdyZWFjdE5vZGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcm90ZWN0ZWQgcmVhY3ROb2RlUmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICBASW5wdXQoKSBjb21wb25lbnRSZWY/OiBJU2xpZGVyUHJvcHNbJ2NvbXBvbmVudFJlZiddO1xyXG4gIEBJbnB1dCgpIHN0eWxlcz86IElTbGlkZXJQcm9wc1snc3R5bGVzJ107XHJcbiAgQElucHV0KCkgdGhlbWU/OiBJU2xpZGVyUHJvcHNbJ3RoZW1lJ107XHJcbiAgQElucHV0KCkgbGFiZWw/OiBJU2xpZGVyUHJvcHNbJ2xhYmVsJ107XHJcbiAgQElucHV0KCkgZGVmYXVsdFZhbHVlPzogSVNsaWRlclByb3BzWydkZWZhdWx0VmFsdWUnXTtcclxuICBASW5wdXQoKSB2YWx1ZT86IElTbGlkZXJQcm9wc1sndmFsdWUnXTtcclxuICBASW5wdXQoKSBtaW4/OiBJU2xpZGVyUHJvcHNbJ21pbiddO1xyXG4gIEBJbnB1dCgpIG1heD86IElTbGlkZXJQcm9wc1snbWF4J107XHJcbiAgQElucHV0KCkgc3RlcD86IElTbGlkZXJQcm9wc1snc3RlcCddO1xyXG4gIEBJbnB1dCgpIHNob3dWYWx1ZT86IElTbGlkZXJQcm9wc1snc2hvd1ZhbHVlJ107XHJcbiAgQElucHV0KCkgYXJpYUxhYmVsPzogSVNsaWRlclByb3BzWydhcmlhTGFiZWwnXTtcclxuICBASW5wdXQoKSBhcmlhVmFsdWVUZXh0PzogSVNsaWRlclByb3BzWydhcmlhVmFsdWVUZXh0J107XHJcbiAgQElucHV0KCkgdmVydGljYWw/OiBJU2xpZGVyUHJvcHNbJ3ZlcnRpY2FsJ107XHJcbiAgQElucHV0KCkgZGlzYWJsZWQ/OiBJU2xpZGVyUHJvcHNbJ2Rpc2FibGVkJ107XHJcbiAgQElucHV0KCkgY2xhc3NOYW1lPzogSVNsaWRlclByb3BzWydjbGFzc05hbWUnXTtcclxuICBASW5wdXQoKSBidXR0b25Qcm9wcz86IElTbGlkZXJQcm9wc1snYnV0dG9uUHJvcHMnXTtcclxuICBASW5wdXQoKSB2YWx1ZUZvcm1hdD86IElTbGlkZXJQcm9wc1sndmFsdWVGb3JtYXQnXTtcclxuICBASW5wdXQoKSBvcmlnaW5Gcm9tWmVybz86IElTbGlkZXJQcm9wc1snb3JpZ2luRnJvbVplcm8nXTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8eyBldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQ7IHZhbHVlOiBudW1iZXIgfT4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcbiAgICBzdXBlcihlbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXIpO1xyXG5cclxuICAgIHRoaXMub25DaGFuZ2VkSGFuZGxlciA9IHRoaXMub25DaGFuZ2VkSGFuZGxlci5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2VkSGFuZGxlcihldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQsIHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMub25DaGFuZ2VkLmVtaXQoe1xyXG4gICAgICBldmVudCxcclxuICAgICAgdmFsdWUsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19