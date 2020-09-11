/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewChild, EventEmitter, Output, } from '@angular/core';
export class FabSpinButtonComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer);
        this.onFocus = new EventEmitter();
        this.onBlur = new EventEmitter();
    }
}
FabSpinButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-spin-button',
                exportAs: 'fabSpinButton',
                template: `
    <SpinButton
      #reactNode
      [componentRef]="componentRef"
      [defaultValue]="defaultValue"
      [value]="value"
      [min]="min"
      [max]="max"
      [step]="step"
      [ariaLabel]="ariaLabel"
      [ariaDescribedBy]="ariaDescribedBy"
      [title]="title"
      [disabled]="disabled"
      [className]="className"
      [label]="label"
      [labelPosition]="labelPosition"
      [iconProps]="iconProps"
      [incrementButtonIcon]="incrementButtonIcon"
      [decrementButtonIcon]="decrementButtonIcon"
      [styles]="styles"
      [getClassNames]="getClassNames"
      [upArrowButtonStyles]="upArrowButtonStyles"
      [downArrowButtonStyles]="downArrowButtonStyles"
      [theme]="theme"
      [incrementButtonAriaLabel]="incrementButtonAriaLabel"
      [decrementButtonAriaLabel]="decrementButtonAriaLabel"
      [precision]="precision"
      [ariaPositionInSet]="ariaPositionInSet"
      [ariaSetSize]="ariaSetSize"
      [ariaValueNow]="ariaValueNow"
      [ariaValueText]="ariaValueText"
      [keytipProps]="keytipProps"
      [Validate]="validate"
      [Increment]="increment"
      [Decrement]="decrement"
      (onFocus)="onFocus.emit($event)"
      (onBlur)="onBlur.emit($event)"
    >
    </SpinButton>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabSpinButtonComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbi1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljL2xpYi9jb21wb25lbnRzL3NwaW4tYnV0dG9uLyIsInNvdXJjZXMiOlsic3Bpbi1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzVELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsWUFBWSxFQUNaLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQWlEdkIsTUFBTSxPQUFPLHNCQUF1QixTQUFRLHFCQUF1Qzs7Ozs7O0lBd0NqRixZQUFZLFVBQXNCLEVBQUUsaUJBQW9DLEVBQUUsUUFBbUI7UUFDM0YsS0FBSyxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUo5QixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVMsQ0FBQztRQUNwQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVMsQ0FBQztJQUl0RCxDQUFDOzs7WUF4RkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXVDVDtnQkFFRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTt5QkFEdEMsZ0JBQWdCO2FBRTFCOzs7O1lBdERDLFVBQVU7WUFGVixpQkFBaUI7WUFJakIsU0FBUzs7OzJCQXNEUixTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsyQkFFdkMsS0FBSzsyQkFDTCxLQUFLO29CQUNMLEtBQUs7a0JBQ0wsS0FBSztrQkFDTCxLQUFLO21CQUNMLEtBQUs7d0JBQ0wsS0FBSzs4QkFDTCxLQUFLO29CQUNMLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLO29CQUNMLEtBQUs7NEJBQ0wsS0FBSzt3QkFDTCxLQUFLO2tDQUNMLEtBQUs7a0NBQ0wsS0FBSztxQkFDTCxLQUFLOzRCQUNMLEtBQUs7a0NBQ0wsS0FBSztvQ0FDTCxLQUFLO29CQUNMLEtBQUs7dUNBQ0wsS0FBSzt1Q0FDTCxLQUFLO3dCQUNMLEtBQUs7Z0NBQ0wsS0FBSzswQkFDTCxLQUFLOzJCQUNMLEtBQUs7NEJBQ0wsS0FBSzswQkFDTCxLQUFLO3VCQUVMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3NCQUVMLE1BQU07cUJBQ04sTUFBTTs7Ozs7OztJQXJDUCw4Q0FBNkU7O0lBRTdFLDhDQUF5RDs7SUFDekQsOENBQXlEOztJQUN6RCx1Q0FBMkM7O0lBQzNDLHFDQUF1Qzs7SUFDdkMscUNBQXVDOztJQUN2QyxzQ0FBeUM7O0lBQ3pDLDJDQUFtRDs7SUFDbkQsaURBQStEOztJQUMvRCx1Q0FBMkM7O0lBQzNDLDBDQUFpRDs7SUFDakQsMkNBQW1EOztJQUNuRCx1Q0FBMkM7O0lBQzNDLCtDQUEyRDs7SUFDM0QsMkNBQW1EOztJQUNuRCxxREFBdUU7O0lBQ3ZFLHFEQUF1RTs7SUFDdkUsd0NBQTZDOztJQUM3QywrQ0FBMkQ7O0lBQzNELHFEQUF1RTs7SUFDdkUsdURBQTJFOztJQUMzRSx1Q0FBMkM7O0lBQzNDLDBEQUFpRjs7SUFDakYsMERBQWlGOztJQUNqRiwyQ0FBbUQ7O0lBQ25ELG1EQUFtRTs7SUFDbkUsNkNBQXVEOztJQUN2RCw4Q0FBeUQ7O0lBQ3pELCtDQUEyRDs7SUFDM0QsNkNBQXVEOztJQUV2RCwwQ0FBbUQ7O0lBQ25ELDJDQUFxRDs7SUFDckQsMkNBQXFEOztJQUVyRCx5Q0FBdUQ7O0lBQ3ZELHdDQUFzRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyBSZWFjdFdyYXBwZXJDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9jb3JlJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0NoaWxkLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBPdXRwdXQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElTcGluQnV0dG9uUHJvcHMgfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9TcGluQnV0dG9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZmFiLXNwaW4tYnV0dG9uJyxcclxuICBleHBvcnRBczogJ2ZhYlNwaW5CdXR0b24nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8U3BpbkJ1dHRvblxyXG4gICAgICAjcmVhY3ROb2RlXHJcbiAgICAgIFtjb21wb25lbnRSZWZdPVwiY29tcG9uZW50UmVmXCJcclxuICAgICAgW2RlZmF1bHRWYWx1ZV09XCJkZWZhdWx0VmFsdWVcIlxyXG4gICAgICBbdmFsdWVdPVwidmFsdWVcIlxyXG4gICAgICBbbWluXT1cIm1pblwiXHJcbiAgICAgIFttYXhdPVwibWF4XCJcclxuICAgICAgW3N0ZXBdPVwic3RlcFwiXHJcbiAgICAgIFthcmlhTGFiZWxdPVwiYXJpYUxhYmVsXCJcclxuICAgICAgW2FyaWFEZXNjcmliZWRCeV09XCJhcmlhRGVzY3JpYmVkQnlcIlxyXG4gICAgICBbdGl0bGVdPVwidGl0bGVcIlxyXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICBbY2xhc3NOYW1lXT1cImNsYXNzTmFtZVwiXHJcbiAgICAgIFtsYWJlbF09XCJsYWJlbFwiXHJcbiAgICAgIFtsYWJlbFBvc2l0aW9uXT1cImxhYmVsUG9zaXRpb25cIlxyXG4gICAgICBbaWNvblByb3BzXT1cImljb25Qcm9wc1wiXHJcbiAgICAgIFtpbmNyZW1lbnRCdXR0b25JY29uXT1cImluY3JlbWVudEJ1dHRvbkljb25cIlxyXG4gICAgICBbZGVjcmVtZW50QnV0dG9uSWNvbl09XCJkZWNyZW1lbnRCdXR0b25JY29uXCJcclxuICAgICAgW3N0eWxlc109XCJzdHlsZXNcIlxyXG4gICAgICBbZ2V0Q2xhc3NOYW1lc109XCJnZXRDbGFzc05hbWVzXCJcclxuICAgICAgW3VwQXJyb3dCdXR0b25TdHlsZXNdPVwidXBBcnJvd0J1dHRvblN0eWxlc1wiXHJcbiAgICAgIFtkb3duQXJyb3dCdXR0b25TdHlsZXNdPVwiZG93bkFycm93QnV0dG9uU3R5bGVzXCJcclxuICAgICAgW3RoZW1lXT1cInRoZW1lXCJcclxuICAgICAgW2luY3JlbWVudEJ1dHRvbkFyaWFMYWJlbF09XCJpbmNyZW1lbnRCdXR0b25BcmlhTGFiZWxcIlxyXG4gICAgICBbZGVjcmVtZW50QnV0dG9uQXJpYUxhYmVsXT1cImRlY3JlbWVudEJ1dHRvbkFyaWFMYWJlbFwiXHJcbiAgICAgIFtwcmVjaXNpb25dPVwicHJlY2lzaW9uXCJcclxuICAgICAgW2FyaWFQb3NpdGlvbkluU2V0XT1cImFyaWFQb3NpdGlvbkluU2V0XCJcclxuICAgICAgW2FyaWFTZXRTaXplXT1cImFyaWFTZXRTaXplXCJcclxuICAgICAgW2FyaWFWYWx1ZU5vd109XCJhcmlhVmFsdWVOb3dcIlxyXG4gICAgICBbYXJpYVZhbHVlVGV4dF09XCJhcmlhVmFsdWVUZXh0XCJcclxuICAgICAgW2tleXRpcFByb3BzXT1cImtleXRpcFByb3BzXCJcclxuICAgICAgW1ZhbGlkYXRlXT1cInZhbGlkYXRlXCJcclxuICAgICAgW0luY3JlbWVudF09XCJpbmNyZW1lbnRcIlxyXG4gICAgICBbRGVjcmVtZW50XT1cImRlY3JlbWVudFwiXHJcbiAgICAgIChvbkZvY3VzKT1cIm9uRm9jdXMuZW1pdCgkZXZlbnQpXCJcclxuICAgICAgKG9uQmx1cik9XCJvbkJsdXIuZW1pdCgkZXZlbnQpXCJcclxuICAgID5cclxuICAgIDwvU3BpbkJ1dHRvbj5cclxuICBgLFxyXG4gIHN0eWxlczogWydyZWFjdC1yZW5kZXJlciddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmFiU3BpbkJ1dHRvbkNvbXBvbmVudCBleHRlbmRzIFJlYWN0V3JhcHBlckNvbXBvbmVudDxJU3BpbkJ1dHRvblByb3BzPiB7XHJcbiAgQFZpZXdDaGlsZCgncmVhY3ROb2RlJywgeyBzdGF0aWM6IHRydWUgfSkgcHJvdGVjdGVkIHJlYWN0Tm9kZVJlZjogRWxlbWVudFJlZjtcclxuXHJcbiAgQElucHV0KCkgY29tcG9uZW50UmVmPzogSVNwaW5CdXR0b25Qcm9wc1snY29tcG9uZW50UmVmJ107XHJcbiAgQElucHV0KCkgZGVmYXVsdFZhbHVlPzogSVNwaW5CdXR0b25Qcm9wc1snZGVmYXVsdFZhbHVlJ107XHJcbiAgQElucHV0KCkgdmFsdWU/OiBJU3BpbkJ1dHRvblByb3BzWyd2YWx1ZSddO1xyXG4gIEBJbnB1dCgpIG1pbj86IElTcGluQnV0dG9uUHJvcHNbJ21pbiddO1xyXG4gIEBJbnB1dCgpIG1heD86IElTcGluQnV0dG9uUHJvcHNbJ21heCddO1xyXG4gIEBJbnB1dCgpIHN0ZXA/OiBJU3BpbkJ1dHRvblByb3BzWydzdGVwJ107XHJcbiAgQElucHV0KCkgYXJpYUxhYmVsPzogSVNwaW5CdXR0b25Qcm9wc1snYXJpYUxhYmVsJ107XHJcbiAgQElucHV0KCkgYXJpYURlc2NyaWJlZEJ5PzogSVNwaW5CdXR0b25Qcm9wc1snYXJpYURlc2NyaWJlZEJ5J107XHJcbiAgQElucHV0KCkgdGl0bGU/OiBJU3BpbkJ1dHRvblByb3BzWyd0aXRsZSddO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkPzogSVNwaW5CdXR0b25Qcm9wc1snZGlzYWJsZWQnXTtcclxuICBASW5wdXQoKSBjbGFzc05hbWU/OiBJU3BpbkJ1dHRvblByb3BzWydjbGFzc05hbWUnXTtcclxuICBASW5wdXQoKSBsYWJlbD86IElTcGluQnV0dG9uUHJvcHNbJ2xhYmVsJ107XHJcbiAgQElucHV0KCkgbGFiZWxQb3NpdGlvbj86IElTcGluQnV0dG9uUHJvcHNbJ2xhYmVsUG9zaXRpb24nXTtcclxuICBASW5wdXQoKSBpY29uUHJvcHM/OiBJU3BpbkJ1dHRvblByb3BzWydpY29uUHJvcHMnXTtcclxuICBASW5wdXQoKSBpbmNyZW1lbnRCdXR0b25JY29uPzogSVNwaW5CdXR0b25Qcm9wc1snaW5jcmVtZW50QnV0dG9uSWNvbiddO1xyXG4gIEBJbnB1dCgpIGRlY3JlbWVudEJ1dHRvbkljb24/OiBJU3BpbkJ1dHRvblByb3BzWydkZWNyZW1lbnRCdXR0b25JY29uJ107XHJcbiAgQElucHV0KCkgc3R5bGVzPzogSVNwaW5CdXR0b25Qcm9wc1snc3R5bGVzJ107XHJcbiAgQElucHV0KCkgZ2V0Q2xhc3NOYW1lcz86IElTcGluQnV0dG9uUHJvcHNbJ2dldENsYXNzTmFtZXMnXTtcclxuICBASW5wdXQoKSB1cEFycm93QnV0dG9uU3R5bGVzPzogSVNwaW5CdXR0b25Qcm9wc1sndXBBcnJvd0J1dHRvblN0eWxlcyddO1xyXG4gIEBJbnB1dCgpIGRvd25BcnJvd0J1dHRvblN0eWxlcz86IElTcGluQnV0dG9uUHJvcHNbJ2Rvd25BcnJvd0J1dHRvblN0eWxlcyddO1xyXG4gIEBJbnB1dCgpIHRoZW1lPzogSVNwaW5CdXR0b25Qcm9wc1sndGhlbWUnXTtcclxuICBASW5wdXQoKSBpbmNyZW1lbnRCdXR0b25BcmlhTGFiZWw/OiBJU3BpbkJ1dHRvblByb3BzWydpbmNyZW1lbnRCdXR0b25BcmlhTGFiZWwnXTtcclxuICBASW5wdXQoKSBkZWNyZW1lbnRCdXR0b25BcmlhTGFiZWw/OiBJU3BpbkJ1dHRvblByb3BzWydkZWNyZW1lbnRCdXR0b25BcmlhTGFiZWwnXTtcclxuICBASW5wdXQoKSBwcmVjaXNpb24/OiBJU3BpbkJ1dHRvblByb3BzWydwcmVjaXNpb24nXTtcclxuICBASW5wdXQoKSBhcmlhUG9zaXRpb25JblNldD86IElTcGluQnV0dG9uUHJvcHNbJ2FyaWFQb3NpdGlvbkluU2V0J107XHJcbiAgQElucHV0KCkgYXJpYVNldFNpemU/OiBJU3BpbkJ1dHRvblByb3BzWydhcmlhU2V0U2l6ZSddO1xyXG4gIEBJbnB1dCgpIGFyaWFWYWx1ZU5vdz86IElTcGluQnV0dG9uUHJvcHNbJ2FyaWFWYWx1ZU5vdyddO1xyXG4gIEBJbnB1dCgpIGFyaWFWYWx1ZVRleHQ/OiBJU3BpbkJ1dHRvblByb3BzWydhcmlhVmFsdWVUZXh0J107XHJcbiAgQElucHV0KCkga2V5dGlwUHJvcHM/OiBJU3BpbkJ1dHRvblByb3BzWydrZXl0aXBQcm9wcyddO1xyXG5cclxuICBASW5wdXQoKSB2YWxpZGF0ZT86IElTcGluQnV0dG9uUHJvcHNbJ29uVmFsaWRhdGUnXTtcclxuICBASW5wdXQoKSBpbmNyZW1lbnQ/OiBJU3BpbkJ1dHRvblByb3BzWydvbkluY3JlbWVudCddO1xyXG4gIEBJbnB1dCgpIGRlY3JlbWVudD86IElTcGluQnV0dG9uUHJvcHNbJ29uRGVjcmVtZW50J107XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvbkZvY3VzID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25CbHVyID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcbiAgICBzdXBlcihlbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXIpO1xyXG4gIH1cclxufVxyXG4iXX0=