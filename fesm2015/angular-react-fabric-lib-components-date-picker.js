import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { EventEmitter, Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, ViewChild, Input, Output, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePicker } from 'office-ui-fabric-react/lib/DatePicker';
import * as CalendarCss from 'office-ui-fabric-react/lib-amd/components/Calendar/Calendar.scss';
import { noop } from 'angular-react-toolkit/utils/noop';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabDatePickerComponent extends ReactWrapperComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Dummy action to force CalendarCss to load and not be tree-shaken away.
noop(CalendarCss);
/** @type {?} */
const components = [FabDatePickerComponent];
class FabDatePickerModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('DatePicker', (/**
         * @return {?}
         */
        () => DatePicker));
    }
}
FabDatePickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components,
                exports: components,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabDatePickerModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FabDatePickerComponent, FabDatePickerModule };
//# sourceMappingURL=angular-react-fabric-lib-components-date-picker.js.map
