/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild, } from '@angular/core';
export class FabDatePickerComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer);
        this.onSelectDate = new EventEmitter();
        this.onAfterMenuDismiss = new EventEmitter();
        this.onSelectDateHandler = this.onSelectDateHandler.bind(this);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    onSelectDateHandler(date) {
        this.onSelectDate.emit({
            date,
        });
    }
}
FabDatePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-date-picker',
                exportAs: 'fabDatePicker',
                template: `
    <DatePicker
      #reactNode
      [componentRef]="componentRef"
      [theme]="theme"
      [calendarProps]="calendarProps"
      [textField]="textField"
      [calloutProps]="calloutProps"
      [calendarAs]="calendarAs"
      [label]="label"
      [isRequired]="isRequired"
      [disabled]="disabled"
      [ariaLabel]="ariaLabel"
      [underlined]="underlined"
      [pickerAriaLabel]="pickerAriaLabel"
      [isMonthPickerVisible]="isMonthPickerVisible"
      [showMonthPickerAsOverlay]="showMonthPickerAsOverlay"
      [allowTextInput]="allowTextInput"
      [disableAutoFocus]="disableAutoFocus"
      [placeholder]="placeholder"
      [today]="today"
      [value]="value"
      [formatDate]="formatDate"
      [parseDateFromString]="parseDateFromString"
      [firstDayOfWeek]="firstDayOfWeek"
      [strings]="strings"
      [highlightCurrentMonth]="highlightCurrentMonth"
      [highlightSelectedMonth]="highlightSelectedMonth"
      [showWeekNumbers]="showWeekNumbers"
      [firstWeekOfYear]="firstWeekOfYear"
      [showGoToToday]="showGoToToday"
      [borderless]="borderless"
      [className]="className"
      [dateTimeFormatter]="dateTimeFormatter"
      [minDate]="minDate"
      [maxDate]="maxDate"
      [initialPickerDate]="initialPickerDate"
      [allFocusable]="allFocusable"
      [showCloseButton]="showCloseButton"
      [SelectDate]="onSelectDateHandler"
      (onAfterMenuDismiss)="onAfterMenuDismiss.emit()"
    >
    </DatePicker>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabDatePickerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
FabDatePickerComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    componentRef: [{ type: Input }],
    theme: [{ type: Input }],
    calloutProps: [{ type: Input }],
    calendarProps: [{ type: Input }],
    textField: [{ type: Input }],
    calendarAs: [{ type: Input }],
    label: [{ type: Input }],
    isRequired: [{ type: Input }],
    disabled: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    underlined: [{ type: Input }],
    pickerAriaLabel: [{ type: Input }],
    isMonthPickerVisible: [{ type: Input }],
    showMonthPickerAsOverlay: [{ type: Input }],
    allowTextInput: [{ type: Input }],
    disableAutoFocus: [{ type: Input }],
    placeholder: [{ type: Input }],
    today: [{ type: Input }],
    value: [{ type: Input }],
    formatDate: [{ type: Input }],
    parseDateFromString: [{ type: Input }],
    firstDayOfWeek: [{ type: Input }],
    strings: [{ type: Input }],
    highlightCurrentMonth: [{ type: Input }],
    highlightSelectedMonth: [{ type: Input }],
    showWeekNumbers: [{ type: Input }],
    firstWeekOfYear: [{ type: Input }],
    showGoToToday: [{ type: Input }],
    borderless: [{ type: Input }],
    className: [{ type: Input }],
    dateTimeFormatter: [{ type: Input }],
    minDate: [{ type: Input }],
    maxDate: [{ type: Input }],
    initialPickerDate: [{ type: Input }],
    allFocusable: [{ type: Input }],
    showCloseButton: [{ type: Input }],
    tabIndex: [{ type: Input }],
    onSelectDate: [{ type: Output }],
    onAfterMenuDismiss: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabDatePickerComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabDatePickerComponent.prototype.componentRef;
    /** @type {?} */
    FabDatePickerComponent.prototype.theme;
    /** @type {?} */
    FabDatePickerComponent.prototype.calloutProps;
    /** @type {?} */
    FabDatePickerComponent.prototype.calendarProps;
    /** @type {?} */
    FabDatePickerComponent.prototype.textField;
    /** @type {?} */
    FabDatePickerComponent.prototype.calendarAs;
    /** @type {?} */
    FabDatePickerComponent.prototype.label;
    /** @type {?} */
    FabDatePickerComponent.prototype.isRequired;
    /** @type {?} */
    FabDatePickerComponent.prototype.disabled;
    /** @type {?} */
    FabDatePickerComponent.prototype.ariaLabel;
    /** @type {?} */
    FabDatePickerComponent.prototype.underlined;
    /** @type {?} */
    FabDatePickerComponent.prototype.pickerAriaLabel;
    /** @type {?} */
    FabDatePickerComponent.prototype.isMonthPickerVisible;
    /** @type {?} */
    FabDatePickerComponent.prototype.showMonthPickerAsOverlay;
    /** @type {?} */
    FabDatePickerComponent.prototype.allowTextInput;
    /** @type {?} */
    FabDatePickerComponent.prototype.disableAutoFocus;
    /** @type {?} */
    FabDatePickerComponent.prototype.placeholder;
    /** @type {?} */
    FabDatePickerComponent.prototype.today;
    /** @type {?} */
    FabDatePickerComponent.prototype.value;
    /** @type {?} */
    FabDatePickerComponent.prototype.formatDate;
    /** @type {?} */
    FabDatePickerComponent.prototype.parseDateFromString;
    /** @type {?} */
    FabDatePickerComponent.prototype.firstDayOfWeek;
    /** @type {?} */
    FabDatePickerComponent.prototype.strings;
    /** @type {?} */
    FabDatePickerComponent.prototype.highlightCurrentMonth;
    /** @type {?} */
    FabDatePickerComponent.prototype.highlightSelectedMonth;
    /** @type {?} */
    FabDatePickerComponent.prototype.showWeekNumbers;
    /** @type {?} */
    FabDatePickerComponent.prototype.firstWeekOfYear;
    /** @type {?} */
    FabDatePickerComponent.prototype.showGoToToday;
    /** @type {?} */
    FabDatePickerComponent.prototype.borderless;
    /** @type {?} */
    FabDatePickerComponent.prototype.className;
    /** @type {?} */
    FabDatePickerComponent.prototype.dateTimeFormatter;
    /** @type {?} */
    FabDatePickerComponent.prototype.minDate;
    /** @type {?} */
    FabDatePickerComponent.prototype.maxDate;
    /** @type {?} */
    FabDatePickerComponent.prototype.initialPickerDate;
    /** @type {?} */
    FabDatePickerComponent.prototype.allFocusable;
    /** @type {?} */
    FabDatePickerComponent.prototype.showCloseButton;
    /** @type {?} */
    FabDatePickerComponent.prototype.tabIndex;
    /** @type {?} */
    FabDatePickerComponent.prototype.onSelectDate;
    /** @type {?} */
    FabDatePickerComponent.prototype.onAfterMenuDismiss;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljL2xpYi9jb21wb25lbnRzL2RhdGUtcGlja2VyLyIsInNvdXJjZXMiOlsiZGF0ZS1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzVELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQXFEdkIsTUFBTSxPQUFPLHNCQUF1QixTQUFRLHFCQUF1Qzs7Ozs7O0lBNENqRixZQUFZLFVBQXNCLEVBQUUsaUJBQW9DLEVBQUUsUUFBbUI7UUFDM0YsS0FBSyxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUo5QixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFxQyxDQUFDO1FBQ3JFLHVCQUFrQixHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFLL0QsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakUsQ0FBQzs7Ozs7SUFFRCxtQkFBbUIsQ0FBQyxJQUE2QjtRQUMvQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztZQUNyQixJQUFJO1NBQ0wsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBeEdGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMkNUO2dCQUVELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO3lCQUR0QyxnQkFBZ0I7YUFFMUI7Ozs7WUExREMsVUFBVTtZQUZWLGlCQUFpQjtZQU1qQixTQUFTOzs7MkJBd0RSLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzJCQUV2QyxLQUFLO29CQUNMLEtBQUs7MkJBQ0wsS0FBSzs0QkFDTCxLQUFLO3dCQUNMLEtBQUs7eUJBQ0wsS0FBSztvQkFDTCxLQUFLO3lCQUNMLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3lCQUNMLEtBQUs7OEJBQ0wsS0FBSzttQ0FDTCxLQUFLO3VDQUNMLEtBQUs7NkJBQ0wsS0FBSzsrQkFDTCxLQUFLOzBCQUNMLEtBQUs7b0JBQ0wsS0FBSztvQkFDTCxLQUFLO3lCQUNMLEtBQUs7a0NBQ0wsS0FBSzs2QkFDTCxLQUFLO3NCQUNMLEtBQUs7b0NBQ0wsS0FBSztxQ0FDTCxLQUFLOzhCQUNMLEtBQUs7OEJBQ0wsS0FBSzs0QkFDTCxLQUFLO3lCQUNMLEtBQUs7d0JBQ0wsS0FBSztnQ0FDTCxLQUFLO3NCQUNMLEtBQUs7c0JBQ0wsS0FBSztnQ0FDTCxLQUFLOzJCQUNMLEtBQUs7OEJBQ0wsS0FBSzt1QkFDTCxLQUFLOzJCQUVMLE1BQU07aUNBQ04sTUFBTTs7Ozs7OztJQXpDUCw4Q0FBNkU7O0lBRTdFLDhDQUF5RDs7SUFDekQsdUNBQTJDOztJQUMzQyw4Q0FBeUQ7O0lBQ3pELCtDQUEyRDs7SUFDM0QsMkNBQW1EOztJQUNuRCw0Q0FBcUQ7O0lBQ3JELHVDQUEyQzs7SUFDM0MsNENBQXFEOztJQUNyRCwwQ0FBaUQ7O0lBQ2pELDJDQUFtRDs7SUFDbkQsNENBQXFEOztJQUNyRCxpREFBK0Q7O0lBQy9ELHNEQUF5RTs7SUFDekUsMERBQWlGOztJQUNqRixnREFBNkQ7O0lBQzdELGtEQUFpRTs7SUFDakUsNkNBQXVEOztJQUN2RCx1Q0FBMkM7O0lBQzNDLHVDQUEyQzs7SUFDM0MsNENBQXFEOztJQUNyRCxxREFBdUU7O0lBQ3ZFLGdEQUE2RDs7SUFDN0QseUNBQStDOztJQUMvQyx1REFBMkU7O0lBQzNFLHdEQUE2RTs7SUFDN0UsaURBQStEOztJQUMvRCxpREFBK0Q7O0lBQy9ELCtDQUEyRDs7SUFDM0QsNENBQXFEOztJQUNyRCwyQ0FBbUQ7O0lBQ25ELG1EQUFtRTs7SUFDbkUseUNBQStDOztJQUMvQyx5Q0FBK0M7O0lBQy9DLG1EQUFtRTs7SUFDbkUsOENBQXlEOztJQUN6RCxpREFBK0Q7O0lBQy9ELDBDQUFpRDs7SUFFakQsOENBQXdGOztJQUN4RixvREFBaUUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgUmVhY3RXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXItcmVhY3QvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0NoaWxkLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJRGF0ZVBpY2tlclByb3BzIH0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvRGF0ZVBpY2tlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZhYi1kYXRlLXBpY2tlcicsXHJcbiAgZXhwb3J0QXM6ICdmYWJEYXRlUGlja2VyJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPERhdGVQaWNrZXJcclxuICAgICAgI3JlYWN0Tm9kZVxyXG4gICAgICBbY29tcG9uZW50UmVmXT1cImNvbXBvbmVudFJlZlwiXHJcbiAgICAgIFt0aGVtZV09XCJ0aGVtZVwiXHJcbiAgICAgIFtjYWxlbmRhclByb3BzXT1cImNhbGVuZGFyUHJvcHNcIlxyXG4gICAgICBbdGV4dEZpZWxkXT1cInRleHRGaWVsZFwiXHJcbiAgICAgIFtjYWxsb3V0UHJvcHNdPVwiY2FsbG91dFByb3BzXCJcclxuICAgICAgW2NhbGVuZGFyQXNdPVwiY2FsZW5kYXJBc1wiXHJcbiAgICAgIFtsYWJlbF09XCJsYWJlbFwiXHJcbiAgICAgIFtpc1JlcXVpcmVkXT1cImlzUmVxdWlyZWRcIlxyXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICBbYXJpYUxhYmVsXT1cImFyaWFMYWJlbFwiXHJcbiAgICAgIFt1bmRlcmxpbmVkXT1cInVuZGVybGluZWRcIlxyXG4gICAgICBbcGlja2VyQXJpYUxhYmVsXT1cInBpY2tlckFyaWFMYWJlbFwiXHJcbiAgICAgIFtpc01vbnRoUGlja2VyVmlzaWJsZV09XCJpc01vbnRoUGlja2VyVmlzaWJsZVwiXHJcbiAgICAgIFtzaG93TW9udGhQaWNrZXJBc092ZXJsYXldPVwic2hvd01vbnRoUGlja2VyQXNPdmVybGF5XCJcclxuICAgICAgW2FsbG93VGV4dElucHV0XT1cImFsbG93VGV4dElucHV0XCJcclxuICAgICAgW2Rpc2FibGVBdXRvRm9jdXNdPVwiZGlzYWJsZUF1dG9Gb2N1c1wiXHJcbiAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXHJcbiAgICAgIFt0b2RheV09XCJ0b2RheVwiXHJcbiAgICAgIFt2YWx1ZV09XCJ2YWx1ZVwiXHJcbiAgICAgIFtmb3JtYXREYXRlXT1cImZvcm1hdERhdGVcIlxyXG4gICAgICBbcGFyc2VEYXRlRnJvbVN0cmluZ109XCJwYXJzZURhdGVGcm9tU3RyaW5nXCJcclxuICAgICAgW2ZpcnN0RGF5T2ZXZWVrXT1cImZpcnN0RGF5T2ZXZWVrXCJcclxuICAgICAgW3N0cmluZ3NdPVwic3RyaW5nc1wiXHJcbiAgICAgIFtoaWdobGlnaHRDdXJyZW50TW9udGhdPVwiaGlnaGxpZ2h0Q3VycmVudE1vbnRoXCJcclxuICAgICAgW2hpZ2hsaWdodFNlbGVjdGVkTW9udGhdPVwiaGlnaGxpZ2h0U2VsZWN0ZWRNb250aFwiXHJcbiAgICAgIFtzaG93V2Vla051bWJlcnNdPVwic2hvd1dlZWtOdW1iZXJzXCJcclxuICAgICAgW2ZpcnN0V2Vla09mWWVhcl09XCJmaXJzdFdlZWtPZlllYXJcIlxyXG4gICAgICBbc2hvd0dvVG9Ub2RheV09XCJzaG93R29Ub1RvZGF5XCJcclxuICAgICAgW2JvcmRlcmxlc3NdPVwiYm9yZGVybGVzc1wiXHJcbiAgICAgIFtjbGFzc05hbWVdPVwiY2xhc3NOYW1lXCJcclxuICAgICAgW2RhdGVUaW1lRm9ybWF0dGVyXT1cImRhdGVUaW1lRm9ybWF0dGVyXCJcclxuICAgICAgW21pbkRhdGVdPVwibWluRGF0ZVwiXHJcbiAgICAgIFttYXhEYXRlXT1cIm1heERhdGVcIlxyXG4gICAgICBbaW5pdGlhbFBpY2tlckRhdGVdPVwiaW5pdGlhbFBpY2tlckRhdGVcIlxyXG4gICAgICBbYWxsRm9jdXNhYmxlXT1cImFsbEZvY3VzYWJsZVwiXHJcbiAgICAgIFtzaG93Q2xvc2VCdXR0b25dPVwic2hvd0Nsb3NlQnV0dG9uXCJcclxuICAgICAgW1NlbGVjdERhdGVdPVwib25TZWxlY3REYXRlSGFuZGxlclwiXHJcbiAgICAgIChvbkFmdGVyTWVudURpc21pc3MpPVwib25BZnRlck1lbnVEaXNtaXNzLmVtaXQoKVwiXHJcbiAgICA+XHJcbiAgICA8L0RhdGVQaWNrZXI+XHJcbiAgYCxcclxuICBzdHlsZXM6IFsncmVhY3QtcmVuZGVyZXInXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZhYkRhdGVQaWNrZXJDb21wb25lbnQgZXh0ZW5kcyBSZWFjdFdyYXBwZXJDb21wb25lbnQ8SURhdGVQaWNrZXJQcm9wcz4ge1xyXG4gIEBWaWV3Q2hpbGQoJ3JlYWN0Tm9kZScsIHsgc3RhdGljOiB0cnVlIH0pIHByb3RlY3RlZCByZWFjdE5vZGVSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBJbnB1dCgpIGNvbXBvbmVudFJlZj86IElEYXRlUGlja2VyUHJvcHNbJ2NvbXBvbmVudFJlZiddO1xyXG4gIEBJbnB1dCgpIHRoZW1lPzogSURhdGVQaWNrZXJQcm9wc1sndGhlbWUnXTtcclxuICBASW5wdXQoKSBjYWxsb3V0UHJvcHM/OiBJRGF0ZVBpY2tlclByb3BzWydjYWxsb3V0UHJvcHMnXTtcclxuICBASW5wdXQoKSBjYWxlbmRhclByb3BzPzogSURhdGVQaWNrZXJQcm9wc1snY2FsZW5kYXJQcm9wcyddO1xyXG4gIEBJbnB1dCgpIHRleHRGaWVsZD86IElEYXRlUGlja2VyUHJvcHNbJ3RleHRGaWVsZCddO1xyXG4gIEBJbnB1dCgpIGNhbGVuZGFyQXM/OiBJRGF0ZVBpY2tlclByb3BzWydjYWxlbmRhckFzJ107XHJcbiAgQElucHV0KCkgbGFiZWw/OiBJRGF0ZVBpY2tlclByb3BzWydsYWJlbCddO1xyXG4gIEBJbnB1dCgpIGlzUmVxdWlyZWQ/OiBJRGF0ZVBpY2tlclByb3BzWydpc1JlcXVpcmVkJ107XHJcbiAgQElucHV0KCkgZGlzYWJsZWQ/OiBJRGF0ZVBpY2tlclByb3BzWydkaXNhYmxlZCddO1xyXG4gIEBJbnB1dCgpIGFyaWFMYWJlbD86IElEYXRlUGlja2VyUHJvcHNbJ2FyaWFMYWJlbCddO1xyXG4gIEBJbnB1dCgpIHVuZGVybGluZWQ/OiBJRGF0ZVBpY2tlclByb3BzWyd1bmRlcmxpbmVkJ107XHJcbiAgQElucHV0KCkgcGlja2VyQXJpYUxhYmVsPzogSURhdGVQaWNrZXJQcm9wc1sncGlja2VyQXJpYUxhYmVsJ107XHJcbiAgQElucHV0KCkgaXNNb250aFBpY2tlclZpc2libGU/OiBJRGF0ZVBpY2tlclByb3BzWydpc01vbnRoUGlja2VyVmlzaWJsZSddO1xyXG4gIEBJbnB1dCgpIHNob3dNb250aFBpY2tlckFzT3ZlcmxheT86IElEYXRlUGlja2VyUHJvcHNbJ3Nob3dNb250aFBpY2tlckFzT3ZlcmxheSddO1xyXG4gIEBJbnB1dCgpIGFsbG93VGV4dElucHV0PzogSURhdGVQaWNrZXJQcm9wc1snYWxsb3dUZXh0SW5wdXQnXTtcclxuICBASW5wdXQoKSBkaXNhYmxlQXV0b0ZvY3VzPzogSURhdGVQaWNrZXJQcm9wc1snZGlzYWJsZUF1dG9Gb2N1cyddO1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyPzogSURhdGVQaWNrZXJQcm9wc1sncGxhY2Vob2xkZXInXTtcclxuICBASW5wdXQoKSB0b2RheT86IElEYXRlUGlja2VyUHJvcHNbJ3RvZGF5J107XHJcbiAgQElucHV0KCkgdmFsdWU/OiBJRGF0ZVBpY2tlclByb3BzWyd2YWx1ZSddO1xyXG4gIEBJbnB1dCgpIGZvcm1hdERhdGU/OiBJRGF0ZVBpY2tlclByb3BzWydmb3JtYXREYXRlJ107XHJcbiAgQElucHV0KCkgcGFyc2VEYXRlRnJvbVN0cmluZz86IElEYXRlUGlja2VyUHJvcHNbJ3BhcnNlRGF0ZUZyb21TdHJpbmcnXTtcclxuICBASW5wdXQoKSBmaXJzdERheU9mV2Vlaz86IElEYXRlUGlja2VyUHJvcHNbJ2ZpcnN0RGF5T2ZXZWVrJ107XHJcbiAgQElucHV0KCkgc3RyaW5ncz86IElEYXRlUGlja2VyUHJvcHNbJ3N0cmluZ3MnXTtcclxuICBASW5wdXQoKSBoaWdobGlnaHRDdXJyZW50TW9udGg/OiBJRGF0ZVBpY2tlclByb3BzWydoaWdobGlnaHRDdXJyZW50TW9udGgnXTtcclxuICBASW5wdXQoKSBoaWdobGlnaHRTZWxlY3RlZE1vbnRoPzogSURhdGVQaWNrZXJQcm9wc1snaGlnaGxpZ2h0U2VsZWN0ZWRNb250aCddO1xyXG4gIEBJbnB1dCgpIHNob3dXZWVrTnVtYmVycz86IElEYXRlUGlja2VyUHJvcHNbJ3Nob3dXZWVrTnVtYmVycyddO1xyXG4gIEBJbnB1dCgpIGZpcnN0V2Vla09mWWVhcj86IElEYXRlUGlja2VyUHJvcHNbJ2ZpcnN0V2Vla09mWWVhciddO1xyXG4gIEBJbnB1dCgpIHNob3dHb1RvVG9kYXk/OiBJRGF0ZVBpY2tlclByb3BzWydzaG93R29Ub1RvZGF5J107XHJcbiAgQElucHV0KCkgYm9yZGVybGVzcz86IElEYXRlUGlja2VyUHJvcHNbJ2JvcmRlcmxlc3MnXTtcclxuICBASW5wdXQoKSBjbGFzc05hbWU/OiBJRGF0ZVBpY2tlclByb3BzWydjbGFzc05hbWUnXTtcclxuICBASW5wdXQoKSBkYXRlVGltZUZvcm1hdHRlcj86IElEYXRlUGlja2VyUHJvcHNbJ2RhdGVUaW1lRm9ybWF0dGVyJ107XHJcbiAgQElucHV0KCkgbWluRGF0ZT86IElEYXRlUGlja2VyUHJvcHNbJ21pbkRhdGUnXTtcclxuICBASW5wdXQoKSBtYXhEYXRlPzogSURhdGVQaWNrZXJQcm9wc1snbWF4RGF0ZSddO1xyXG4gIEBJbnB1dCgpIGluaXRpYWxQaWNrZXJEYXRlPzogSURhdGVQaWNrZXJQcm9wc1snaW5pdGlhbFBpY2tlckRhdGUnXTtcclxuICBASW5wdXQoKSBhbGxGb2N1c2FibGU/OiBJRGF0ZVBpY2tlclByb3BzWydhbGxGb2N1c2FibGUnXTtcclxuICBASW5wdXQoKSBzaG93Q2xvc2VCdXR0b24/OiBJRGF0ZVBpY2tlclByb3BzWydzaG93Q2xvc2VCdXR0b24nXTtcclxuICBASW5wdXQoKSB0YWJJbmRleD86IElEYXRlUGlja2VyUHJvcHNbJ3RhYkluZGV4J107XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvblNlbGVjdERhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPHsgZGF0ZTogRGF0ZSB8IG51bGwgfCB1bmRlZmluZWQgfT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25BZnRlck1lbnVEaXNtaXNzID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcik7XHJcblxyXG4gICAgdGhpcy5vblNlbGVjdERhdGVIYW5kbGVyID0gdGhpcy5vblNlbGVjdERhdGVIYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBvblNlbGVjdERhdGVIYW5kbGVyKGRhdGU6IERhdGUgfCBudWxsIHwgdW5kZWZpbmVkKSB7XHJcbiAgICB0aGlzLm9uU2VsZWN0RGF0ZS5lbWl0KHtcclxuICAgICAgZGF0ZSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=