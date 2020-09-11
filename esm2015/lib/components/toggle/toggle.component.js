/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild, } from '@angular/core';
export class FabToggleComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer);
        this.onChange = new EventEmitter();
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }
    /**
     * @param {?} event
     * @param {?=} checked
     * @return {?}
     */
    onChangeHandler(event, checked) {
        this.onChange.emit({
            event: event && event.nativeEvent,
            checked,
        });
    }
}
FabToggleComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-toggle',
                exportAs: 'fabToggle',
                template: `
    <Toggle
      #reactNode
      [componentRef]="componentRef"
      [label]="label"
      [Text]="onText"
      [offText]="offText"
      [ariaLabel]="ariaLabel"
      [checked]="checked"
      [defaultChecked]="defaultChecked"
      [disabled]="disabled"
      [inlineLabel]="inlineLabel"
      [theme]="theme"
      [styles]="styles"
      [keytipProps]="keytipProps"
      [Change]="onChangeHandler"
    >
    </Toggle>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabToggleComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
FabToggleComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    as: [{ type: Input }],
    componentRef: [{ type: Input }],
    label: [{ type: Input }],
    onText: [{ type: Input, args: ['onnText',] }],
    offText: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    checked: [{ type: Input }],
    defaultChecked: [{ type: Input }],
    disabled: [{ type: Input }],
    inlineLabel: [{ type: Input }],
    theme: [{ type: Input }],
    styles: [{ type: Input }],
    keytipProps: [{ type: Input }],
    onChange: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabToggleComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabToggleComponent.prototype.as;
    /** @type {?} */
    FabToggleComponent.prototype.componentRef;
    /** @type {?} */
    FabToggleComponent.prototype.label;
    /**
     * Counterpart of `IToggleProps['onText']`.
     * Angular doesn't allow Inputs to be prefixed with "on", so this is misspelled as "onn".
     * @type {?}
     */
    FabToggleComponent.prototype.onText;
    /** @type {?} */
    FabToggleComponent.prototype.offText;
    /** @type {?} */
    FabToggleComponent.prototype.ariaLabel;
    /** @type {?} */
    FabToggleComponent.prototype.checked;
    /** @type {?} */
    FabToggleComponent.prototype.defaultChecked;
    /** @type {?} */
    FabToggleComponent.prototype.disabled;
    /** @type {?} */
    FabToggleComponent.prototype.inlineLabel;
    /** @type {?} */
    FabToggleComponent.prototype.theme;
    /** @type {?} */
    FabToggleComponent.prototype.styles;
    /** @type {?} */
    FabToggleComponent.prototype.keytipProps;
    /** @type {?} */
    FabToggleComponent.prototype.onChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy9saWIvY29tcG9uZW50cy90b2dnbGUvIiwic291cmNlcyI6WyJ0b2dnbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzVELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQTRCdkIsTUFBTSxPQUFPLGtCQUFtQixTQUFRLHFCQUFtQzs7Ozs7O0lBeUJ6RSxZQUFZLFVBQXNCLEVBQUUsaUJBQW9DLEVBQUUsUUFBbUI7UUFDM0YsS0FBSyxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUg5QixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQTRDLENBQUM7UUFLekYsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7Ozs7SUFFRCxlQUFlLENBQUMsS0FBb0MsRUFBRSxPQUFpQjtRQUNyRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNqQixLQUFLLEVBQUUsS0FBSyxJQUFJLEtBQUssQ0FBQyxXQUFXO1lBQ2pDLE9BQU87U0FDUixDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUE3REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQlQ7Z0JBRUQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07eUJBRHRDLGdCQUFnQjthQUUxQjs7OztZQWpDQyxVQUFVO1lBRlYsaUJBQWlCO1lBTWpCLFNBQVM7OzsyQkErQlIsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7aUJBRXZDLEtBQUs7MkJBQ0wsS0FBSztvQkFDTCxLQUFLO3FCQU1MLEtBQUssU0FBQyxTQUFTO3NCQUNmLEtBQUs7d0JBQ0wsS0FBSztzQkFFTCxLQUFLOzZCQUNMLEtBQUs7dUJBQ0wsS0FBSzswQkFDTCxLQUFLO29CQUNMLEtBQUs7cUJBQ0wsS0FBSzswQkFDTCxLQUFLO3VCQUVMLE1BQU07Ozs7Ozs7SUF0QlAsMENBQTZFOztJQUU3RSxnQ0FBaUM7O0lBQ2pDLDBDQUFxRDs7SUFDckQsbUNBQXVDOzs7Ozs7SUFNdkMsb0NBQWtEOztJQUNsRCxxQ0FBMkM7O0lBQzNDLHVDQUErQzs7SUFFL0MscUNBQTJDOztJQUMzQyw0Q0FBeUQ7O0lBQ3pELHNDQUE2Qzs7SUFDN0MseUNBQW1EOztJQUNuRCxtQ0FBdUM7O0lBQ3ZDLG9DQUF5Qzs7SUFDekMseUNBQW1EOztJQUVuRCxzQ0FBMkYiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgUmVhY3RXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXItcmVhY3QvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0NoaWxkLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJVG9nZ2xlUHJvcHMgfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9Ub2dnbGUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmYWItdG9nZ2xlJyxcclxuICBleHBvcnRBczogJ2ZhYlRvZ2dsZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxUb2dnbGVcclxuICAgICAgI3JlYWN0Tm9kZVxyXG4gICAgICBbY29tcG9uZW50UmVmXT1cImNvbXBvbmVudFJlZlwiXHJcbiAgICAgIFtsYWJlbF09XCJsYWJlbFwiXHJcbiAgICAgIFtUZXh0XT1cIm9uVGV4dFwiXHJcbiAgICAgIFtvZmZUZXh0XT1cIm9mZlRleHRcIlxyXG4gICAgICBbYXJpYUxhYmVsXT1cImFyaWFMYWJlbFwiXHJcbiAgICAgIFtjaGVja2VkXT1cImNoZWNrZWRcIlxyXG4gICAgICBbZGVmYXVsdENoZWNrZWRdPVwiZGVmYXVsdENoZWNrZWRcIlxyXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICBbaW5saW5lTGFiZWxdPVwiaW5saW5lTGFiZWxcIlxyXG4gICAgICBbdGhlbWVdPVwidGhlbWVcIlxyXG4gICAgICBbc3R5bGVzXT1cInN0eWxlc1wiXHJcbiAgICAgIFtrZXl0aXBQcm9wc109XCJrZXl0aXBQcm9wc1wiXHJcbiAgICAgIFtDaGFuZ2VdPVwib25DaGFuZ2VIYW5kbGVyXCJcclxuICAgID5cclxuICAgIDwvVG9nZ2xlPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbJ3JlYWN0LXJlbmRlcmVyJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYWJUb2dnbGVDb21wb25lbnQgZXh0ZW5kcyBSZWFjdFdyYXBwZXJDb21wb25lbnQ8SVRvZ2dsZVByb3BzPiB7XHJcbiAgQFZpZXdDaGlsZCgncmVhY3ROb2RlJywgeyBzdGF0aWM6IHRydWUgfSkgcHJvdGVjdGVkIHJlYWN0Tm9kZVJlZjogRWxlbWVudFJlZjtcclxuXHJcbiAgQElucHV0KCkgYXM/OiBJVG9nZ2xlUHJvcHNbJ2FzJ107XHJcbiAgQElucHV0KCkgY29tcG9uZW50UmVmPzogSVRvZ2dsZVByb3BzWydjb21wb25lbnRSZWYnXTtcclxuICBASW5wdXQoKSBsYWJlbD86IElUb2dnbGVQcm9wc1snbGFiZWwnXTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ291bnRlcnBhcnQgb2YgYElUb2dnbGVQcm9wc1snb25UZXh0J11gLlxyXG4gICAqIEFuZ3VsYXIgZG9lc24ndCBhbGxvdyBJbnB1dHMgdG8gYmUgcHJlZml4ZWQgd2l0aCBcIm9uXCIsIHNvIHRoaXMgaXMgbWlzc3BlbGxlZCBhcyBcIm9ublwiLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgnb25uVGV4dCcpIG9uVGV4dD86IElUb2dnbGVQcm9wc1snb25UZXh0J107XHJcbiAgQElucHV0KCkgb2ZmVGV4dD86IElUb2dnbGVQcm9wc1snb2ZmVGV4dCddO1xyXG4gIEBJbnB1dCgpIGFyaWFMYWJlbD86IElUb2dnbGVQcm9wc1snYXJpYUxhYmVsJ107XHJcblxyXG4gIEBJbnB1dCgpIGNoZWNrZWQ/OiBJVG9nZ2xlUHJvcHNbJ2NoZWNrZWQnXTtcclxuICBASW5wdXQoKSBkZWZhdWx0Q2hlY2tlZD86IElUb2dnbGVQcm9wc1snZGVmYXVsdENoZWNrZWQnXTtcclxuICBASW5wdXQoKSBkaXNhYmxlZD86IElUb2dnbGVQcm9wc1snZGlzYWJsZWQnXTtcclxuICBASW5wdXQoKSBpbmxpbmVMYWJlbD86IElUb2dnbGVQcm9wc1snaW5saW5lTGFiZWwnXTtcclxuICBASW5wdXQoKSB0aGVtZT86IElUb2dnbGVQcm9wc1sndGhlbWUnXTtcclxuICBASW5wdXQoKSBzdHlsZXM/OiBJVG9nZ2xlUHJvcHNbJ3N0eWxlcyddO1xyXG4gIEBJbnB1dCgpIGtleXRpcFByb3BzPzogSVRvZ2dsZVByb3BzWydrZXl0aXBQcm9wcyddO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHsgZXZlbnQ6IE1vdXNlRXZlbnQ7IGNoZWNrZWQ/OiBib29sZWFuIH0+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xyXG4gICAgc3VwZXIoZWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyKTtcclxuXHJcbiAgICB0aGlzLm9uQ2hhbmdlSGFuZGxlciA9IHRoaXMub25DaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZUhhbmRsZXIoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEVsZW1lbnQ+LCBjaGVja2VkPzogYm9vbGVhbikge1xyXG4gICAgdGhpcy5vbkNoYW5nZS5lbWl0KHtcclxuICAgICAgZXZlbnQ6IGV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LFxyXG4gICAgICBjaGVja2VkLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==