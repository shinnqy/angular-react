/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { FabBaseTextFieldComponent } from './base-text-field.component';
export class FabTextFieldComponent extends FabBaseTextFieldComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer);
    }
}
FabTextFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-text-field',
                exportAs: 'fabTextField',
                template: `
    <TextField
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
      [maxLength]="maxLength"
      [NotifyValidationResult]="onNotifyValidationResultHandler"
      (onClick)="onClickHandler($event)"
      (onFocus)="onFocusHandler($event)"
      (onBlur)="onBlurHandler($event)"
    >
    </TextField>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabTextFieldComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
FabTextFieldComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabTextFieldComponent.prototype.reactNodeRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvbGliL2NvbXBvbmVudHMvdGV4dC1maWVsZC8iLCJzb3VyY2VzIjpbInRleHQtZmllbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEgsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFrRXhFLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSx5QkFBeUI7Ozs7OztJQUdsRSxZQUFZLFVBQXNCLEVBQUUsaUJBQW9DLEVBQUUsUUFBbUI7UUFDM0YsS0FBSyxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7WUFyRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXlEVDtnQkFFRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTt5QkFEdEMsZ0JBQWdCO2FBRTFCOzs7O1lBbEUrRCxVQUFVO1lBQXhDLGlCQUFpQjtZQUF5QixTQUFTOzs7MkJBb0VsRixTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7Ozs7OztJQUF4Qyw2Q0FBNkUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZhYkJhc2VUZXh0RmllbGRDb21wb25lbnQgfSBmcm9tICcuL2Jhc2UtdGV4dC1maWVsZC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmYWItdGV4dC1maWVsZCcsXHJcbiAgZXhwb3J0QXM6ICdmYWJUZXh0RmllbGQnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8VGV4dEZpZWxkXHJcbiAgICAgICNyZWFjdE5vZGVcclxuICAgICAgW3JlcXVpcmVkXT1cInJlcXVpcmVkXCJcclxuICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcclxuICAgICAgW3R5cGVdPVwidHlwZVwiXHJcbiAgICAgIFtjb2xzXT1cImNvbHNcIlxyXG4gICAgICBbY29sU3Bhbl09XCJjb2xTcGFuXCJcclxuICAgICAgW3Jvd3NdPVwicm93c1wiXHJcbiAgICAgIFtyb3dTcGFuXT1cInJvd1NwYW5cIlxyXG4gICAgICBbbWluXT1cIm1pblwiXHJcbiAgICAgIFttYXhdPVwibWF4XCJcclxuICAgICAgW3BhdHRlcm5dPVwicGF0dGVyblwiXHJcbiAgICAgIFtodG1sRm9yXT1cImh0bWxGb3JcIlxyXG4gICAgICBbY29tcG9uZW50UmVmXT1cImNvbXBvbmVudFJlZlwiXHJcbiAgICAgIFttdWx0aWxpbmVdPVwibXVsdGlsaW5lXCJcclxuICAgICAgW3Jlc2l6YWJsZV09XCJyZXNpemFibGVcIlxyXG4gICAgICBbYXV0b0FkanVzdEhlaWdodF09XCJhdXRvQWRqdXN0SGVpZ2h0XCJcclxuICAgICAgW3VuZGVybGluZWRdPVwidW5kZXJsaW5lZFwiXHJcbiAgICAgIFtib3JkZXJsZXNzXT1cImJvcmRlcmxlc3NcIlxyXG4gICAgICBbbGFiZWxdPVwibGFiZWxcIlxyXG4gICAgICBbZGVzY3JpcHRpb25dPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICBbcHJlZml4XT1cInByZWZpeFwiXHJcbiAgICAgIFtzdWZmaXhdPVwic3VmZml4XCJcclxuICAgICAgW2ljb25Qcm9wc109XCJpY29uUHJvcHNcIlxyXG4gICAgICBbZGVmYXVsdFZhbHVlXT1cImRlZmF1bHRWYWx1ZVwiXHJcbiAgICAgIFt2YWx1ZV09XCJ2YWx1ZVwiXHJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgIFtyZWFkT25seV09XCJyZWFkT25seVwiXHJcbiAgICAgIFtlcnJvck1lc3NhZ2VdPVwiZXJyb3JNZXNzYWdlXCJcclxuICAgICAgW2RlZmVycmVkVmFsaWRhdGlvblRpbWVdPVwiZGVmZXJyZWRWYWxpZGF0aW9uVGltZVwiXHJcbiAgICAgIFtjbGFzc05hbWVdPVwiY2xhc3NOYW1lXCJcclxuICAgICAgW2lucHV0Q2xhc3NOYW1lXT1cImlucHV0Q2xhc3NOYW1lXCJcclxuICAgICAgW2FyaWFMYWJlbF09XCJhcmlhTGFiZWxcIlxyXG4gICAgICBbdmFsaWRhdGVPbkZvY3VzSW5dPVwidmFsaWRhdGVPbkZvY3VzSW5cIlxyXG4gICAgICBbdmFsaWRhdGVPbkZvY3VzT3V0XT1cInZhbGlkYXRlT25Gb2N1c091dFwiXHJcbiAgICAgIFt2YWxpZGF0ZU9uTG9hZF09XCJ2YWxpZGF0ZU9uTG9hZFwiXHJcbiAgICAgIFt0aGVtZV09XCJ0aGVtZVwiXHJcbiAgICAgIFtzdHlsZXNdPVwic3R5bGVzXCJcclxuICAgICAgW2F1dG9Db21wbGV0ZV09XCJhdXRvQ29tcGxldGVcIlxyXG4gICAgICBbbWFza109XCJtYXNrXCJcclxuICAgICAgW21hc2tDaGFyXT1cIm1hc2tDaGFyXCJcclxuICAgICAgW21hc2tGb3JtYXRdPVwibWFza0Zvcm1hdFwiXHJcbiAgICAgIFtHZXRFcnJvck1lc3NhZ2VdPVwiZ2V0RXJyb3JNZXNzYWdlXCJcclxuICAgICAgW1JlbmRlckxhYmVsXT1cInJlbmRlckxhYmVsXCJcclxuICAgICAgW1JlbmRlckRlc2NyaXB0aW9uXT1cInJlbmRlckRlc2NyaXB0aW9uXCJcclxuICAgICAgW1JlbmRlclByZWZpeF09XCJyZW5kZXJQcmVmaXhcIlxyXG4gICAgICBbUmVuZGVyU3VmZml4XT1cInJlbmRlclN1ZmZpeFwiXHJcbiAgICAgIFtDaGFuZ2VdPVwib25DaGFuZ2VIYW5kbGVyXCJcclxuICAgICAgW0JlZm9yZUNoYW5nZV09XCJvbkJlZm9yZUNoYW5nZUhhbmRsZXJcIlxyXG4gICAgICBbbWF4TGVuZ3RoXT1cIm1heExlbmd0aFwiXHJcbiAgICAgIFtOb3RpZnlWYWxpZGF0aW9uUmVzdWx0XT1cIm9uTm90aWZ5VmFsaWRhdGlvblJlc3VsdEhhbmRsZXJcIlxyXG4gICAgICAob25DbGljayk9XCJvbkNsaWNrSGFuZGxlcigkZXZlbnQpXCJcclxuICAgICAgKG9uRm9jdXMpPVwib25Gb2N1c0hhbmRsZXIoJGV2ZW50KVwiXHJcbiAgICAgIChvbkJsdXIpPVwib25CbHVySGFuZGxlcigkZXZlbnQpXCJcclxuICAgID5cclxuICAgIDwvVGV4dEZpZWxkPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbJ3JlYWN0LXJlbmRlcmVyJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYWJUZXh0RmllbGRDb21wb25lbnQgZXh0ZW5kcyBGYWJCYXNlVGV4dEZpZWxkQ29tcG9uZW50IHtcclxuICBAVmlld0NoaWxkKCdyZWFjdE5vZGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcm90ZWN0ZWQgcmVhY3ROb2RlUmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcik7XHJcbiAgfVxyXG59XHJcbiJdfQ==