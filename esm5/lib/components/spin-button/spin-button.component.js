/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewChild, EventEmitter, Output, } from '@angular/core';
var FabSpinButtonComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabSpinButtonComponent, _super);
    function FabSpinButtonComponent(elementRef, changeDetectorRef, renderer) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer) || this;
        _this.onFocus = new EventEmitter();
        _this.onBlur = new EventEmitter();
        return _this;
    }
    FabSpinButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-spin-button',
                    exportAs: 'fabSpinButton',
                    template: "\n    <SpinButton\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [defaultValue]=\"defaultValue\"\n      [value]=\"value\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [step]=\"step\"\n      [ariaLabel]=\"ariaLabel\"\n      [ariaDescribedBy]=\"ariaDescribedBy\"\n      [title]=\"title\"\n      [disabled]=\"disabled\"\n      [className]=\"className\"\n      [label]=\"label\"\n      [labelPosition]=\"labelPosition\"\n      [iconProps]=\"iconProps\"\n      [incrementButtonIcon]=\"incrementButtonIcon\"\n      [decrementButtonIcon]=\"decrementButtonIcon\"\n      [styles]=\"styles\"\n      [getClassNames]=\"getClassNames\"\n      [upArrowButtonStyles]=\"upArrowButtonStyles\"\n      [downArrowButtonStyles]=\"downArrowButtonStyles\"\n      [theme]=\"theme\"\n      [incrementButtonAriaLabel]=\"incrementButtonAriaLabel\"\n      [decrementButtonAriaLabel]=\"decrementButtonAriaLabel\"\n      [precision]=\"precision\"\n      [ariaPositionInSet]=\"ariaPositionInSet\"\n      [ariaSetSize]=\"ariaSetSize\"\n      [ariaValueNow]=\"ariaValueNow\"\n      [ariaValueText]=\"ariaValueText\"\n      [keytipProps]=\"keytipProps\"\n      [Validate]=\"validate\"\n      [Increment]=\"increment\"\n      [Decrement]=\"decrement\"\n      (onFocus)=\"onFocus.emit($event)\"\n      (onBlur)=\"onBlur.emit($event)\"\n    >\n    </SpinButton>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabSpinButtonComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    FabSpinButtonComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
        componentRef: [{ type: Input }],
        defaultValue: [{ type: Input }],
        value: [{ type: Input }],
        min: [{ type: Input }],
        max: [{ type: Input }],
        step: [{ type: Input }],
        ariaLabel: [{ type: Input }],
        ariaDescribedBy: [{ type: Input }],
        title: [{ type: Input }],
        disabled: [{ type: Input }],
        className: [{ type: Input }],
        label: [{ type: Input }],
        labelPosition: [{ type: Input }],
        iconProps: [{ type: Input }],
        incrementButtonIcon: [{ type: Input }],
        decrementButtonIcon: [{ type: Input }],
        styles: [{ type: Input }],
        getClassNames: [{ type: Input }],
        upArrowButtonStyles: [{ type: Input }],
        downArrowButtonStyles: [{ type: Input }],
        theme: [{ type: Input }],
        incrementButtonAriaLabel: [{ type: Input }],
        decrementButtonAriaLabel: [{ type: Input }],
        precision: [{ type: Input }],
        ariaPositionInSet: [{ type: Input }],
        ariaSetSize: [{ type: Input }],
        ariaValueNow: [{ type: Input }],
        ariaValueText: [{ type: Input }],
        keytipProps: [{ type: Input }],
        validate: [{ type: Input }],
        increment: [{ type: Input }],
        decrement: [{ type: Input }],
        onFocus: [{ type: Output }],
        onBlur: [{ type: Output }]
    };
    return FabSpinButtonComponent;
}(ReactWrapperComponent));
export { FabSpinButtonComponent };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabSpinButtonComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabSpinButtonComponent.prototype.componentRef;
    /** @type {?} */
    FabSpinButtonComponent.prototype.defaultValue;
    /** @type {?} */
    FabSpinButtonComponent.prototype.value;
    /** @type {?} */
    FabSpinButtonComponent.prototype.min;
    /** @type {?} */
    FabSpinButtonComponent.prototype.max;
    /** @type {?} */
    FabSpinButtonComponent.prototype.step;
    /** @type {?} */
    FabSpinButtonComponent.prototype.ariaLabel;
    /** @type {?} */
    FabSpinButtonComponent.prototype.ariaDescribedBy;
    /** @type {?} */
    FabSpinButtonComponent.prototype.title;
    /** @type {?} */
    FabSpinButtonComponent.prototype.disabled;
    /** @type {?} */
    FabSpinButtonComponent.prototype.className;
    /** @type {?} */
    FabSpinButtonComponent.prototype.label;
    /** @type {?} */
    FabSpinButtonComponent.prototype.labelPosition;
    /** @type {?} */
    FabSpinButtonComponent.prototype.iconProps;
    /** @type {?} */
    FabSpinButtonComponent.prototype.incrementButtonIcon;
    /** @type {?} */
    FabSpinButtonComponent.prototype.decrementButtonIcon;
    /** @type {?} */
    FabSpinButtonComponent.prototype.styles;
    /** @type {?} */
    FabSpinButtonComponent.prototype.getClassNames;
    /** @type {?} */
    FabSpinButtonComponent.prototype.upArrowButtonStyles;
    /** @type {?} */
    FabSpinButtonComponent.prototype.downArrowButtonStyles;
    /** @type {?} */
    FabSpinButtonComponent.prototype.theme;
    /** @type {?} */
    FabSpinButtonComponent.prototype.incrementButtonAriaLabel;
    /** @type {?} */
    FabSpinButtonComponent.prototype.decrementButtonAriaLabel;
    /** @type {?} */
    FabSpinButtonComponent.prototype.precision;
    /** @type {?} */
    FabSpinButtonComponent.prototype.ariaPositionInSet;
    /** @type {?} */
    FabSpinButtonComponent.prototype.ariaSetSize;
    /** @type {?} */
    FabSpinButtonComponent.prototype.ariaValueNow;
    /** @type {?} */
    FabSpinButtonComponent.prototype.ariaValueText;
    /** @type {?} */
    FabSpinButtonComponent.prototype.keytipProps;
    /** @type {?} */
    FabSpinButtonComponent.prototype.validate;
    /** @type {?} */
    FabSpinButtonComponent.prototype.increment;
    /** @type {?} */
    FabSpinButtonComponent.prototype.decrement;
    /** @type {?} */
    FabSpinButtonComponent.prototype.onFocus;
    /** @type {?} */
    FabSpinButtonComponent.prototype.onBlur;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbi1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc3Bpbi1idXR0b24vc3Bpbi1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM1RCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxTQUFTLEVBQ1QsU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFHdkI7SUE4QzRDLGtEQUF1QztJQXdDakYsZ0NBQVksVUFBc0IsRUFBRSxpQkFBb0MsRUFBRSxRQUFtQjtRQUE3RixZQUNFLGtCQUFNLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLENBQUMsU0FDL0M7UUFMa0IsYUFBTyxHQUFHLElBQUksWUFBWSxFQUFTLENBQUM7UUFDcEMsWUFBTSxHQUFHLElBQUksWUFBWSxFQUFTLENBQUM7O0lBSXRELENBQUM7O2dCQXhGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSx1MENBdUNUO29CQUVELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzZCQUR0QyxnQkFBZ0I7aUJBRTFCOzs7O2dCQXREQyxVQUFVO2dCQUZWLGlCQUFpQjtnQkFJakIsU0FBUzs7OytCQXNEUixTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsrQkFFdkMsS0FBSzsrQkFDTCxLQUFLO3dCQUNMLEtBQUs7c0JBQ0wsS0FBSztzQkFDTCxLQUFLO3VCQUNMLEtBQUs7NEJBQ0wsS0FBSztrQ0FDTCxLQUFLO3dCQUNMLEtBQUs7MkJBQ0wsS0FBSzs0QkFDTCxLQUFLO3dCQUNMLEtBQUs7Z0NBQ0wsS0FBSzs0QkFDTCxLQUFLO3NDQUNMLEtBQUs7c0NBQ0wsS0FBSzt5QkFDTCxLQUFLO2dDQUNMLEtBQUs7c0NBQ0wsS0FBSzt3Q0FDTCxLQUFLO3dCQUNMLEtBQUs7MkNBQ0wsS0FBSzsyQ0FDTCxLQUFLOzRCQUNMLEtBQUs7b0NBQ0wsS0FBSzs4QkFDTCxLQUFLOytCQUNMLEtBQUs7Z0NBQ0wsS0FBSzs4QkFDTCxLQUFLOzJCQUVMLEtBQUs7NEJBQ0wsS0FBSzs0QkFDTCxLQUFLOzBCQUVMLE1BQU07eUJBQ04sTUFBTTs7SUFLVCw2QkFBQztDQUFBLEFBekZELENBOEM0QyxxQkFBcUIsR0EyQ2hFO1NBM0NZLHNCQUFzQjs7Ozs7O0lBQ2pDLDhDQUE2RTs7SUFFN0UsOENBQXlEOztJQUN6RCw4Q0FBeUQ7O0lBQ3pELHVDQUEyQzs7SUFDM0MscUNBQXVDOztJQUN2QyxxQ0FBdUM7O0lBQ3ZDLHNDQUF5Qzs7SUFDekMsMkNBQW1EOztJQUNuRCxpREFBK0Q7O0lBQy9ELHVDQUEyQzs7SUFDM0MsMENBQWlEOztJQUNqRCwyQ0FBbUQ7O0lBQ25ELHVDQUEyQzs7SUFDM0MsK0NBQTJEOztJQUMzRCwyQ0FBbUQ7O0lBQ25ELHFEQUF1RTs7SUFDdkUscURBQXVFOztJQUN2RSx3Q0FBNkM7O0lBQzdDLCtDQUEyRDs7SUFDM0QscURBQXVFOztJQUN2RSx1REFBMkU7O0lBQzNFLHVDQUEyQzs7SUFDM0MsMERBQWlGOztJQUNqRiwwREFBaUY7O0lBQ2pGLDJDQUFtRDs7SUFDbkQsbURBQW1FOztJQUNuRSw2Q0FBdUQ7O0lBQ3ZELDhDQUF5RDs7SUFDekQsK0NBQTJEOztJQUMzRCw2Q0FBdUQ7O0lBRXZELDBDQUFtRDs7SUFDbkQsMkNBQXFEOztJQUNyRCwyQ0FBcUQ7O0lBRXJELHlDQUF1RDs7SUFDdkQsd0NBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IFJlYWN0V3JhcHBlckNvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3Q2hpbGQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIE91dHB1dCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSVNwaW5CdXR0b25Qcm9wcyB9IGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliL1NwaW5CdXR0b24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmYWItc3Bpbi1idXR0b24nLFxyXG4gIGV4cG9ydEFzOiAnZmFiU3BpbkJ1dHRvbicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxTcGluQnV0dG9uXHJcbiAgICAgICNyZWFjdE5vZGVcclxuICAgICAgW2NvbXBvbmVudFJlZl09XCJjb21wb25lbnRSZWZcIlxyXG4gICAgICBbZGVmYXVsdFZhbHVlXT1cImRlZmF1bHRWYWx1ZVwiXHJcbiAgICAgIFt2YWx1ZV09XCJ2YWx1ZVwiXHJcbiAgICAgIFttaW5dPVwibWluXCJcclxuICAgICAgW21heF09XCJtYXhcIlxyXG4gICAgICBbc3RlcF09XCJzdGVwXCJcclxuICAgICAgW2FyaWFMYWJlbF09XCJhcmlhTGFiZWxcIlxyXG4gICAgICBbYXJpYURlc2NyaWJlZEJ5XT1cImFyaWFEZXNjcmliZWRCeVwiXHJcbiAgICAgIFt0aXRsZV09XCJ0aXRsZVwiXHJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgIFtjbGFzc05hbWVdPVwiY2xhc3NOYW1lXCJcclxuICAgICAgW2xhYmVsXT1cImxhYmVsXCJcclxuICAgICAgW2xhYmVsUG9zaXRpb25dPVwibGFiZWxQb3NpdGlvblwiXHJcbiAgICAgIFtpY29uUHJvcHNdPVwiaWNvblByb3BzXCJcclxuICAgICAgW2luY3JlbWVudEJ1dHRvbkljb25dPVwiaW5jcmVtZW50QnV0dG9uSWNvblwiXHJcbiAgICAgIFtkZWNyZW1lbnRCdXR0b25JY29uXT1cImRlY3JlbWVudEJ1dHRvbkljb25cIlxyXG4gICAgICBbc3R5bGVzXT1cInN0eWxlc1wiXHJcbiAgICAgIFtnZXRDbGFzc05hbWVzXT1cImdldENsYXNzTmFtZXNcIlxyXG4gICAgICBbdXBBcnJvd0J1dHRvblN0eWxlc109XCJ1cEFycm93QnV0dG9uU3R5bGVzXCJcclxuICAgICAgW2Rvd25BcnJvd0J1dHRvblN0eWxlc109XCJkb3duQXJyb3dCdXR0b25TdHlsZXNcIlxyXG4gICAgICBbdGhlbWVdPVwidGhlbWVcIlxyXG4gICAgICBbaW5jcmVtZW50QnV0dG9uQXJpYUxhYmVsXT1cImluY3JlbWVudEJ1dHRvbkFyaWFMYWJlbFwiXHJcbiAgICAgIFtkZWNyZW1lbnRCdXR0b25BcmlhTGFiZWxdPVwiZGVjcmVtZW50QnV0dG9uQXJpYUxhYmVsXCJcclxuICAgICAgW3ByZWNpc2lvbl09XCJwcmVjaXNpb25cIlxyXG4gICAgICBbYXJpYVBvc2l0aW9uSW5TZXRdPVwiYXJpYVBvc2l0aW9uSW5TZXRcIlxyXG4gICAgICBbYXJpYVNldFNpemVdPVwiYXJpYVNldFNpemVcIlxyXG4gICAgICBbYXJpYVZhbHVlTm93XT1cImFyaWFWYWx1ZU5vd1wiXHJcbiAgICAgIFthcmlhVmFsdWVUZXh0XT1cImFyaWFWYWx1ZVRleHRcIlxyXG4gICAgICBba2V5dGlwUHJvcHNdPVwia2V5dGlwUHJvcHNcIlxyXG4gICAgICBbVmFsaWRhdGVdPVwidmFsaWRhdGVcIlxyXG4gICAgICBbSW5jcmVtZW50XT1cImluY3JlbWVudFwiXHJcbiAgICAgIFtEZWNyZW1lbnRdPVwiZGVjcmVtZW50XCJcclxuICAgICAgKG9uRm9jdXMpPVwib25Gb2N1cy5lbWl0KCRldmVudClcIlxyXG4gICAgICAob25CbHVyKT1cIm9uQmx1ci5lbWl0KCRldmVudClcIlxyXG4gICAgPlxyXG4gICAgPC9TcGluQnV0dG9uPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbJ3JlYWN0LXJlbmRlcmVyJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYWJTcGluQnV0dG9uQ29tcG9uZW50IGV4dGVuZHMgUmVhY3RXcmFwcGVyQ29tcG9uZW50PElTcGluQnV0dG9uUHJvcHM+IHtcclxuICBAVmlld0NoaWxkKCdyZWFjdE5vZGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcm90ZWN0ZWQgcmVhY3ROb2RlUmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICBASW5wdXQoKSBjb21wb25lbnRSZWY/OiBJU3BpbkJ1dHRvblByb3BzWydjb21wb25lbnRSZWYnXTtcclxuICBASW5wdXQoKSBkZWZhdWx0VmFsdWU/OiBJU3BpbkJ1dHRvblByb3BzWydkZWZhdWx0VmFsdWUnXTtcclxuICBASW5wdXQoKSB2YWx1ZT86IElTcGluQnV0dG9uUHJvcHNbJ3ZhbHVlJ107XHJcbiAgQElucHV0KCkgbWluPzogSVNwaW5CdXR0b25Qcm9wc1snbWluJ107XHJcbiAgQElucHV0KCkgbWF4PzogSVNwaW5CdXR0b25Qcm9wc1snbWF4J107XHJcbiAgQElucHV0KCkgc3RlcD86IElTcGluQnV0dG9uUHJvcHNbJ3N0ZXAnXTtcclxuICBASW5wdXQoKSBhcmlhTGFiZWw/OiBJU3BpbkJ1dHRvblByb3BzWydhcmlhTGFiZWwnXTtcclxuICBASW5wdXQoKSBhcmlhRGVzY3JpYmVkQnk/OiBJU3BpbkJ1dHRvblByb3BzWydhcmlhRGVzY3JpYmVkQnknXTtcclxuICBASW5wdXQoKSB0aXRsZT86IElTcGluQnV0dG9uUHJvcHNbJ3RpdGxlJ107XHJcbiAgQElucHV0KCkgZGlzYWJsZWQ/OiBJU3BpbkJ1dHRvblByb3BzWydkaXNhYmxlZCddO1xyXG4gIEBJbnB1dCgpIGNsYXNzTmFtZT86IElTcGluQnV0dG9uUHJvcHNbJ2NsYXNzTmFtZSddO1xyXG4gIEBJbnB1dCgpIGxhYmVsPzogSVNwaW5CdXR0b25Qcm9wc1snbGFiZWwnXTtcclxuICBASW5wdXQoKSBsYWJlbFBvc2l0aW9uPzogSVNwaW5CdXR0b25Qcm9wc1snbGFiZWxQb3NpdGlvbiddO1xyXG4gIEBJbnB1dCgpIGljb25Qcm9wcz86IElTcGluQnV0dG9uUHJvcHNbJ2ljb25Qcm9wcyddO1xyXG4gIEBJbnB1dCgpIGluY3JlbWVudEJ1dHRvbkljb24/OiBJU3BpbkJ1dHRvblByb3BzWydpbmNyZW1lbnRCdXR0b25JY29uJ107XHJcbiAgQElucHV0KCkgZGVjcmVtZW50QnV0dG9uSWNvbj86IElTcGluQnV0dG9uUHJvcHNbJ2RlY3JlbWVudEJ1dHRvbkljb24nXTtcclxuICBASW5wdXQoKSBzdHlsZXM/OiBJU3BpbkJ1dHRvblByb3BzWydzdHlsZXMnXTtcclxuICBASW5wdXQoKSBnZXRDbGFzc05hbWVzPzogSVNwaW5CdXR0b25Qcm9wc1snZ2V0Q2xhc3NOYW1lcyddO1xyXG4gIEBJbnB1dCgpIHVwQXJyb3dCdXR0b25TdHlsZXM/OiBJU3BpbkJ1dHRvblByb3BzWyd1cEFycm93QnV0dG9uU3R5bGVzJ107XHJcbiAgQElucHV0KCkgZG93bkFycm93QnV0dG9uU3R5bGVzPzogSVNwaW5CdXR0b25Qcm9wc1snZG93bkFycm93QnV0dG9uU3R5bGVzJ107XHJcbiAgQElucHV0KCkgdGhlbWU/OiBJU3BpbkJ1dHRvblByb3BzWyd0aGVtZSddO1xyXG4gIEBJbnB1dCgpIGluY3JlbWVudEJ1dHRvbkFyaWFMYWJlbD86IElTcGluQnV0dG9uUHJvcHNbJ2luY3JlbWVudEJ1dHRvbkFyaWFMYWJlbCddO1xyXG4gIEBJbnB1dCgpIGRlY3JlbWVudEJ1dHRvbkFyaWFMYWJlbD86IElTcGluQnV0dG9uUHJvcHNbJ2RlY3JlbWVudEJ1dHRvbkFyaWFMYWJlbCddO1xyXG4gIEBJbnB1dCgpIHByZWNpc2lvbj86IElTcGluQnV0dG9uUHJvcHNbJ3ByZWNpc2lvbiddO1xyXG4gIEBJbnB1dCgpIGFyaWFQb3NpdGlvbkluU2V0PzogSVNwaW5CdXR0b25Qcm9wc1snYXJpYVBvc2l0aW9uSW5TZXQnXTtcclxuICBASW5wdXQoKSBhcmlhU2V0U2l6ZT86IElTcGluQnV0dG9uUHJvcHNbJ2FyaWFTZXRTaXplJ107XHJcbiAgQElucHV0KCkgYXJpYVZhbHVlTm93PzogSVNwaW5CdXR0b25Qcm9wc1snYXJpYVZhbHVlTm93J107XHJcbiAgQElucHV0KCkgYXJpYVZhbHVlVGV4dD86IElTcGluQnV0dG9uUHJvcHNbJ2FyaWFWYWx1ZVRleHQnXTtcclxuICBASW5wdXQoKSBrZXl0aXBQcm9wcz86IElTcGluQnV0dG9uUHJvcHNbJ2tleXRpcFByb3BzJ107XHJcblxyXG4gIEBJbnB1dCgpIHZhbGlkYXRlPzogSVNwaW5CdXR0b25Qcm9wc1snb25WYWxpZGF0ZSddO1xyXG4gIEBJbnB1dCgpIGluY3JlbWVudD86IElTcGluQnV0dG9uUHJvcHNbJ29uSW5jcmVtZW50J107XHJcbiAgQElucHV0KCkgZGVjcmVtZW50PzogSVNwaW5CdXR0b25Qcm9wc1snb25EZWNyZW1lbnQnXTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uRm9jdXMgPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvbkJsdXIgPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50PigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcik7XHJcbiAgfVxyXG59XHJcbiJdfQ==