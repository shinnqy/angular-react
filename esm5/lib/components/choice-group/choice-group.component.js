/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild, } from '@angular/core';
var FabChoiceGroupComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabChoiceGroupComponent, _super);
    function FabChoiceGroupComponent(elementRef, changeDetectorRef, renderer) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer) || this;
        _this.onChanged = new EventEmitter();
        _this.onChange = new EventEmitter();
        _this.onChangedHandler = _this.onChangedHandler.bind(_this);
        _this.onChangeHandler = _this.onChangeHandler.bind(_this);
        return _this;
    }
    /**
     * @param {?} option
     * @param {?=} evt
     * @return {?}
     */
    FabChoiceGroupComponent.prototype.onChangedHandler = /**
     * @param {?} option
     * @param {?=} evt
     * @return {?}
     */
    function (option, evt) {
        this.onChanged.emit({
            option: option,
            evt: evt && evt.nativeEvent,
        });
    };
    /**
     * @param {?=} ev
     * @param {?=} option
     * @return {?}
     */
    FabChoiceGroupComponent.prototype.onChangeHandler = /**
     * @param {?=} ev
     * @param {?=} option
     * @return {?}
     */
    function (ev, option) {
        this.onChange.emit({
            ev: ev && ev.nativeEvent,
            option: option,
        });
    };
    FabChoiceGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-choice-group',
                    exportAs: 'fabChoiceGroup',
                    template: "\n    <ChoiceGroup\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [options]=\"options\"\n      [defaultSelectedKey]=\"defaultSelectedKey\"\n      [selectedKey]=\"selectedKey\"\n      [label]=\"label\"\n      [required]=\"required\"\n      [theme]=\"theme\"\n      [styles]=\"styles\"\n      [ariaLabelledBy]=\"ariaLabelledBy\"\n      [Changed]=\"onChangedHandler\"\n      [Change]=\"onChangeHandler\"\n    >\n    </ChoiceGroup>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabChoiceGroupComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    FabChoiceGroupComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
        componentRef: [{ type: Input }],
        options: [{ type: Input }],
        defaultSelectedKey: [{ type: Input }],
        selectedKey: [{ type: Input }],
        label: [{ type: Input }],
        theme: [{ type: Input }],
        styles: [{ type: Input }],
        ariaLabelledBy: [{ type: Input }],
        required: [{ type: Input }],
        onChanged: [{ type: Output }],
        onChange: [{ type: Output }]
    };
    return FabChoiceGroupComponent;
}(ReactWrapperComponent));
export { FabChoiceGroupComponent };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabChoiceGroupComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabChoiceGroupComponent.prototype.componentRef;
    /** @type {?} */
    FabChoiceGroupComponent.prototype.options;
    /** @type {?} */
    FabChoiceGroupComponent.prototype.defaultSelectedKey;
    /** @type {?} */
    FabChoiceGroupComponent.prototype.selectedKey;
    /** @type {?} */
    FabChoiceGroupComponent.prototype.label;
    /** @type {?} */
    FabChoiceGroupComponent.prototype.theme;
    /** @type {?} */
    FabChoiceGroupComponent.prototype.styles;
    /** @type {?} */
    FabChoiceGroupComponent.prototype.ariaLabelledBy;
    /**
     * HTML Input props
     * @type {?}
     */
    FabChoiceGroupComponent.prototype.required;
    /** @type {?} */
    FabChoiceGroupComponent.prototype.onChanged;
    /** @type {?} */
    FabChoiceGroupComponent.prototype.onChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hvaWNlLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Nob2ljZS1ncm91cC9jaG9pY2UtZ3JvdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM1RCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFHdkI7SUF1QjZDLG1EQUF3QztJQWtCbkYsaUNBQVksVUFBc0IsRUFBRSxpQkFBb0MsRUFBRSxRQUFtQjtRQUE3RixZQUNFLGtCQUFNLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLENBQUMsU0FJL0M7UUFSa0IsZUFBUyxHQUFHLElBQUksWUFBWSxFQUErQyxDQUFDO1FBQzVFLGNBQVEsR0FBRyxJQUFJLFlBQVksRUFBK0MsQ0FBQztRQUs1RixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUN6RCxLQUFJLENBQUMsZUFBZSxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDOztJQUN6RCxDQUFDOzs7Ozs7SUFFRCxrREFBZ0I7Ozs7O0lBQWhCLFVBQWlCLE1BQTBCLEVBQUUsR0FBcUQ7UUFDaEcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7WUFDbEIsTUFBTSxRQUFBO1lBQ04sR0FBRyxFQUFFLEdBQUcsSUFBSSxHQUFHLENBQUMsV0FBVztTQUM1QixDQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFRCxpREFBZTs7Ozs7SUFBZixVQUFnQixFQUFvRCxFQUFFLE1BQTJCO1FBQy9GLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2pCLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLFdBQVc7WUFDeEIsTUFBTSxRQUFBO1NBQ1AsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBNURGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsa2NBZ0JUO29CQUVELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzZCQUR0QyxnQkFBZ0I7aUJBRTFCOzs7O2dCQS9CQyxVQUFVO2dCQUZWLGlCQUFpQjtnQkFNakIsU0FBUzs7OytCQTZCUixTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsrQkFFdkMsS0FBSzswQkFDTCxLQUFLO3FDQUNMLEtBQUs7OEJBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7eUJBQ0wsS0FBSztpQ0FDTCxLQUFLOzJCQUdMLEtBQUs7NEJBRUwsTUFBTTsyQkFDTixNQUFNOztJQXNCVCw4QkFBQztDQUFBLEFBN0RELENBdUI2QyxxQkFBcUIsR0FzQ2pFO1NBdENZLHVCQUF1Qjs7Ozs7O0lBQ2xDLCtDQUE2RTs7SUFFN0UsK0NBQTBEOztJQUMxRCwwQ0FBZ0Q7O0lBQ2hELHFEQUFzRTs7SUFDdEUsOENBQXdEOztJQUN4RCx3Q0FBNEM7O0lBQzVDLHdDQUE0Qzs7SUFDNUMseUNBQThDOztJQUM5QyxpREFBOEQ7Ozs7O0lBRzlELDJDQUFrRDs7SUFFbEQsNENBQStGOztJQUMvRiwyQ0FBOEYiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgUmVhY3RXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXItcmVhY3QvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0NoaWxkLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJQ2hvaWNlR3JvdXBPcHRpb24sIElDaG9pY2VHcm91cFByb3BzIH0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvQ2hvaWNlR3JvdXAnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmYWItY2hvaWNlLWdyb3VwJyxcclxuICBleHBvcnRBczogJ2ZhYkNob2ljZUdyb3VwJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPENob2ljZUdyb3VwXHJcbiAgICAgICNyZWFjdE5vZGVcclxuICAgICAgW2NvbXBvbmVudFJlZl09XCJjb21wb25lbnRSZWZcIlxyXG4gICAgICBbb3B0aW9uc109XCJvcHRpb25zXCJcclxuICAgICAgW2RlZmF1bHRTZWxlY3RlZEtleV09XCJkZWZhdWx0U2VsZWN0ZWRLZXlcIlxyXG4gICAgICBbc2VsZWN0ZWRLZXldPVwic2VsZWN0ZWRLZXlcIlxyXG4gICAgICBbbGFiZWxdPVwibGFiZWxcIlxyXG4gICAgICBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIlxyXG4gICAgICBbdGhlbWVdPVwidGhlbWVcIlxyXG4gICAgICBbc3R5bGVzXT1cInN0eWxlc1wiXHJcbiAgICAgIFthcmlhTGFiZWxsZWRCeV09XCJhcmlhTGFiZWxsZWRCeVwiXHJcbiAgICAgIFtDaGFuZ2VkXT1cIm9uQ2hhbmdlZEhhbmRsZXJcIlxyXG4gICAgICBbQ2hhbmdlXT1cIm9uQ2hhbmdlSGFuZGxlclwiXHJcbiAgICA+XHJcbiAgICA8L0Nob2ljZUdyb3VwPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbJ3JlYWN0LXJlbmRlcmVyJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYWJDaG9pY2VHcm91cENvbXBvbmVudCBleHRlbmRzIFJlYWN0V3JhcHBlckNvbXBvbmVudDxJQ2hvaWNlR3JvdXBQcm9wcz4ge1xyXG4gIEBWaWV3Q2hpbGQoJ3JlYWN0Tm9kZScsIHsgc3RhdGljOiB0cnVlIH0pIHByb3RlY3RlZCByZWFjdE5vZGVSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBJbnB1dCgpIGNvbXBvbmVudFJlZj86IElDaG9pY2VHcm91cFByb3BzWydjb21wb25lbnRSZWYnXTtcclxuICBASW5wdXQoKSBvcHRpb25zPzogSUNob2ljZUdyb3VwUHJvcHNbJ29wdGlvbnMnXTtcclxuICBASW5wdXQoKSBkZWZhdWx0U2VsZWN0ZWRLZXk/OiBJQ2hvaWNlR3JvdXBQcm9wc1snZGVmYXVsdFNlbGVjdGVkS2V5J107XHJcbiAgQElucHV0KCkgc2VsZWN0ZWRLZXk/OiBJQ2hvaWNlR3JvdXBQcm9wc1snc2VsZWN0ZWRLZXknXTtcclxuICBASW5wdXQoKSBsYWJlbD86IElDaG9pY2VHcm91cFByb3BzWydsYWJlbCddO1xyXG4gIEBJbnB1dCgpIHRoZW1lPzogSUNob2ljZUdyb3VwUHJvcHNbJ3RoZW1lJ107XHJcbiAgQElucHV0KCkgc3R5bGVzPzogSUNob2ljZUdyb3VwUHJvcHNbJ3N0eWxlcyddO1xyXG4gIEBJbnB1dCgpIGFyaWFMYWJlbGxlZEJ5PzogSUNob2ljZUdyb3VwUHJvcHNbJ2FyaWFMYWJlbGxlZEJ5J107XHJcblxyXG4gIC8qKiBIVE1MIElucHV0IHByb3BzICovXHJcbiAgQElucHV0KCkgcmVxdWlyZWQ/OiBJQ2hvaWNlR3JvdXBQcm9wc1sncmVxdWlyZWQnXTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8eyBvcHRpb246IElDaG9pY2VHcm91cE9wdGlvbjsgZXZ0PzogRXZlbnQgfT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHsgZXY/OiBFdmVudDsgb3B0aW9uPzogSUNob2ljZUdyb3VwT3B0aW9uIH0+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xyXG4gICAgc3VwZXIoZWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyKTtcclxuXHJcbiAgICB0aGlzLm9uQ2hhbmdlZEhhbmRsZXIgPSB0aGlzLm9uQ2hhbmdlZEhhbmRsZXIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25DaGFuZ2VIYW5kbGVyID0gdGhpcy5vbkNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlZEhhbmRsZXIob3B0aW9uOiBJQ2hvaWNlR3JvdXBPcHRpb24sIGV2dD86IFJlYWN0LkZvcm1FdmVudDxIVE1MRWxlbWVudCB8IEhUTUxJbnB1dEVsZW1lbnQ+KSB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlZC5lbWl0KHtcclxuICAgICAgb3B0aW9uLFxyXG4gICAgICBldnQ6IGV2dCAmJiBldnQubmF0aXZlRXZlbnQsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlSGFuZGxlcihldj86IFJlYWN0LkZvcm1FdmVudDxIVE1MRWxlbWVudCB8IEhUTUxJbnB1dEVsZW1lbnQ+LCBvcHRpb24/OiBJQ2hvaWNlR3JvdXBPcHRpb24pIHtcclxuICAgIHRoaXMub25DaGFuZ2UuZW1pdCh7XHJcbiAgICAgIGV2OiBldiAmJiBldi5uYXRpdmVFdmVudCxcclxuICAgICAgb3B0aW9uLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==