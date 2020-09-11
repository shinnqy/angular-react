/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { FabBaseTextFieldComponent } from './base-text-field.component';
export class FabMaskedTextFieldComponent extends FabBaseTextFieldComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer);
    }
}
FabMaskedTextFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-masked-text-field',
                exportAs: 'fabMaskedTextField',
                template: `
    <MaskedTextField
      #reactNode
      [required]="required"
      [placeholder]="placeholder"
      [type]="type"
      [cols]="cols"
      [colSpan]="colSpan"
      [rows]="rows"
      [rowSpan]="rowSpan"
      [min]="min"
      [max]="max"
      [pattern]="pattern"
      [htmlFor]="htmlFor"
      [componentRef]="componentRef"
      [multiline]="multiline"
      [resizable]="resizable"
      [autoAdjustHeight]="autoAdjustHeight"
      [underlined]="underlined"
      [borderless]="borderless"
      [label]="label"
      [description]="description"
      [prefix]="prefix"
      [suffix]="suffix"
      [iconProps]="iconProps"
      [defaultValue]="defaultValue"
      [value]="value"
      [disabled]="disabled"
      [readOnly]="readOnly"
      [errorMessage]="errorMessage"
      [deferredValidationTime]="deferredValidationTime"
      [className]="className"
      [inputClassName]="inputClassName"
      [ariaLabel]="ariaLabel"
      [validateOnFocusIn]="validateOnFocusIn"
      [validateOnFocusOut]="validateOnFocusOut"
      [validateOnLoad]="validateOnLoad"
      [theme]="theme"
      [styles]="styles"
      [autoComplete]="autoComplete"
      [mask]="mask"
      [maskChar]="maskChar"
      [maskFormat]="maskFormat"
      [GetErrorMessage]="getErrorMessage"
      [RenderLabel]="renderLabel"
      [RenderDescription]="renderDescription"
      [RenderPrefix]="renderPrefix"
      [RenderSuffix]="renderSuffix"
      [Change]="onChangeHandler"
      [BeforeChange]="onBeforeChangeHandler"
      [NotifyValidationResult]="onNotifyValidationResultHandler"
      (onClick)="onClickHandler($event)"
      (onFocus)="onFocusHandler($event)"
      (onBlur)="onBlurHandler($event)"
    >
    </MaskedTextField>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabMaskedTextFieldComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
FabMaskedTextFieldComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabMaskedTextFieldComponent.prototype.reactNodeRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFza2VkLXRleHQtZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljL2xpYi9jb21wb25lbnRzL3RleHQtZmllbGQvIiwic291cmNlcyI6WyJtYXNrZWQtdGV4dC1maWVsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0EsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4SCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQWlFeEUsTUFBTSxPQUFPLDJCQUE0QixTQUFRLHlCQUF5Qjs7Ozs7O0lBR3hFLFlBQVksVUFBc0IsRUFBRSxpQkFBb0MsRUFBRSxRQUFtQjtRQUMzRixLQUFLLENBQUMsVUFBVSxFQUFFLGlCQUFpQixFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2pELENBQUM7OztZQXBFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdEVDtnQkFFRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTt5QkFEdEMsZ0JBQWdCO2FBRTFCOzs7O1lBakUrRCxVQUFVO1lBQXhDLGlCQUFpQjtZQUF5QixTQUFTOzs7MkJBbUVsRixTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7Ozs7OztJQUF4QyxtREFBNkUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZhYkJhc2VUZXh0RmllbGRDb21wb25lbnQgfSBmcm9tICcuL2Jhc2UtdGV4dC1maWVsZC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmYWItbWFza2VkLXRleHQtZmllbGQnLFxyXG4gIGV4cG9ydEFzOiAnZmFiTWFza2VkVGV4dEZpZWxkJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPE1hc2tlZFRleHRGaWVsZFxyXG4gICAgICAjcmVhY3ROb2RlXHJcbiAgICAgIFtyZXF1aXJlZF09XCJyZXF1aXJlZFwiXHJcbiAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXHJcbiAgICAgIFt0eXBlXT1cInR5cGVcIlxyXG4gICAgICBbY29sc109XCJjb2xzXCJcclxuICAgICAgW2NvbFNwYW5dPVwiY29sU3BhblwiXHJcbiAgICAgIFtyb3dzXT1cInJvd3NcIlxyXG4gICAgICBbcm93U3Bhbl09XCJyb3dTcGFuXCJcclxuICAgICAgW21pbl09XCJtaW5cIlxyXG4gICAgICBbbWF4XT1cIm1heFwiXHJcbiAgICAgIFtwYXR0ZXJuXT1cInBhdHRlcm5cIlxyXG4gICAgICBbaHRtbEZvcl09XCJodG1sRm9yXCJcclxuICAgICAgW2NvbXBvbmVudFJlZl09XCJjb21wb25lbnRSZWZcIlxyXG4gICAgICBbbXVsdGlsaW5lXT1cIm11bHRpbGluZVwiXHJcbiAgICAgIFtyZXNpemFibGVdPVwicmVzaXphYmxlXCJcclxuICAgICAgW2F1dG9BZGp1c3RIZWlnaHRdPVwiYXV0b0FkanVzdEhlaWdodFwiXHJcbiAgICAgIFt1bmRlcmxpbmVkXT1cInVuZGVybGluZWRcIlxyXG4gICAgICBbYm9yZGVybGVzc109XCJib3JkZXJsZXNzXCJcclxuICAgICAgW2xhYmVsXT1cImxhYmVsXCJcclxuICAgICAgW2Rlc2NyaXB0aW9uXT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgW3ByZWZpeF09XCJwcmVmaXhcIlxyXG4gICAgICBbc3VmZml4XT1cInN1ZmZpeFwiXHJcbiAgICAgIFtpY29uUHJvcHNdPVwiaWNvblByb3BzXCJcclxuICAgICAgW2RlZmF1bHRWYWx1ZV09XCJkZWZhdWx0VmFsdWVcIlxyXG4gICAgICBbdmFsdWVdPVwidmFsdWVcIlxyXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICBbcmVhZE9ubHldPVwicmVhZE9ubHlcIlxyXG4gICAgICBbZXJyb3JNZXNzYWdlXT1cImVycm9yTWVzc2FnZVwiXHJcbiAgICAgIFtkZWZlcnJlZFZhbGlkYXRpb25UaW1lXT1cImRlZmVycmVkVmFsaWRhdGlvblRpbWVcIlxyXG4gICAgICBbY2xhc3NOYW1lXT1cImNsYXNzTmFtZVwiXHJcbiAgICAgIFtpbnB1dENsYXNzTmFtZV09XCJpbnB1dENsYXNzTmFtZVwiXHJcbiAgICAgIFthcmlhTGFiZWxdPVwiYXJpYUxhYmVsXCJcclxuICAgICAgW3ZhbGlkYXRlT25Gb2N1c0luXT1cInZhbGlkYXRlT25Gb2N1c0luXCJcclxuICAgICAgW3ZhbGlkYXRlT25Gb2N1c091dF09XCJ2YWxpZGF0ZU9uRm9jdXNPdXRcIlxyXG4gICAgICBbdmFsaWRhdGVPbkxvYWRdPVwidmFsaWRhdGVPbkxvYWRcIlxyXG4gICAgICBbdGhlbWVdPVwidGhlbWVcIlxyXG4gICAgICBbc3R5bGVzXT1cInN0eWxlc1wiXHJcbiAgICAgIFthdXRvQ29tcGxldGVdPVwiYXV0b0NvbXBsZXRlXCJcclxuICAgICAgW21hc2tdPVwibWFza1wiXHJcbiAgICAgIFttYXNrQ2hhcl09XCJtYXNrQ2hhclwiXHJcbiAgICAgIFttYXNrRm9ybWF0XT1cIm1hc2tGb3JtYXRcIlxyXG4gICAgICBbR2V0RXJyb3JNZXNzYWdlXT1cImdldEVycm9yTWVzc2FnZVwiXHJcbiAgICAgIFtSZW5kZXJMYWJlbF09XCJyZW5kZXJMYWJlbFwiXHJcbiAgICAgIFtSZW5kZXJEZXNjcmlwdGlvbl09XCJyZW5kZXJEZXNjcmlwdGlvblwiXHJcbiAgICAgIFtSZW5kZXJQcmVmaXhdPVwicmVuZGVyUHJlZml4XCJcclxuICAgICAgW1JlbmRlclN1ZmZpeF09XCJyZW5kZXJTdWZmaXhcIlxyXG4gICAgICBbQ2hhbmdlXT1cIm9uQ2hhbmdlSGFuZGxlclwiXHJcbiAgICAgIFtCZWZvcmVDaGFuZ2VdPVwib25CZWZvcmVDaGFuZ2VIYW5kbGVyXCJcclxuICAgICAgW05vdGlmeVZhbGlkYXRpb25SZXN1bHRdPVwib25Ob3RpZnlWYWxpZGF0aW9uUmVzdWx0SGFuZGxlclwiXHJcbiAgICAgIChvbkNsaWNrKT1cIm9uQ2xpY2tIYW5kbGVyKCRldmVudClcIlxyXG4gICAgICAob25Gb2N1cyk9XCJvbkZvY3VzSGFuZGxlcigkZXZlbnQpXCJcclxuICAgICAgKG9uQmx1cik9XCJvbkJsdXJIYW5kbGVyKCRldmVudClcIlxyXG4gICAgPlxyXG4gICAgPC9NYXNrZWRUZXh0RmllbGQ+XHJcbiAgYCxcclxuICBzdHlsZXM6IFsncmVhY3QtcmVuZGVyZXInXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZhYk1hc2tlZFRleHRGaWVsZENvbXBvbmVudCBleHRlbmRzIEZhYkJhc2VUZXh0RmllbGRDb21wb25lbnQge1xyXG4gIEBWaWV3Q2hpbGQoJ3JlYWN0Tm9kZScsIHsgc3RhdGljOiB0cnVlIH0pIHByb3RlY3RlZCByZWFjdE5vZGVSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xyXG4gICAgc3VwZXIoZWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyKTtcclxuICB9XHJcbn1cclxuIl19