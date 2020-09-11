import { __extends } from 'tslib';
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
var FabDatePickerComponent = /** @class */ (function (_super) {
    __extends(FabDatePickerComponent, _super);
    function FabDatePickerComponent(elementRef, changeDetectorRef, renderer) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer) || this;
        _this.onSelectDate = new EventEmitter();
        _this.onAfterMenuDismiss = new EventEmitter();
        _this.onSelectDateHandler = _this.onSelectDateHandler.bind(_this);
        return _this;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    FabDatePickerComponent.prototype.onSelectDateHandler = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        this.onSelectDate.emit({
            date: date,
        });
    };
    FabDatePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-date-picker',
                    exportAs: 'fabDatePicker',
                    template: "\n    <DatePicker\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [theme]=\"theme\"\n      [calendarProps]=\"calendarProps\"\n      [textField]=\"textField\"\n      [calloutProps]=\"calloutProps\"\n      [calendarAs]=\"calendarAs\"\n      [label]=\"label\"\n      [isRequired]=\"isRequired\"\n      [disabled]=\"disabled\"\n      [ariaLabel]=\"ariaLabel\"\n      [underlined]=\"underlined\"\n      [pickerAriaLabel]=\"pickerAriaLabel\"\n      [isMonthPickerVisible]=\"isMonthPickerVisible\"\n      [showMonthPickerAsOverlay]=\"showMonthPickerAsOverlay\"\n      [allowTextInput]=\"allowTextInput\"\n      [disableAutoFocus]=\"disableAutoFocus\"\n      [placeholder]=\"placeholder\"\n      [today]=\"today\"\n      [value]=\"value\"\n      [formatDate]=\"formatDate\"\n      [parseDateFromString]=\"parseDateFromString\"\n      [firstDayOfWeek]=\"firstDayOfWeek\"\n      [strings]=\"strings\"\n      [highlightCurrentMonth]=\"highlightCurrentMonth\"\n      [highlightSelectedMonth]=\"highlightSelectedMonth\"\n      [showWeekNumbers]=\"showWeekNumbers\"\n      [firstWeekOfYear]=\"firstWeekOfYear\"\n      [showGoToToday]=\"showGoToToday\"\n      [borderless]=\"borderless\"\n      [className]=\"className\"\n      [dateTimeFormatter]=\"dateTimeFormatter\"\n      [minDate]=\"minDate\"\n      [maxDate]=\"maxDate\"\n      [initialPickerDate]=\"initialPickerDate\"\n      [allFocusable]=\"allFocusable\"\n      [showCloseButton]=\"showCloseButton\"\n      [SelectDate]=\"onSelectDateHandler\"\n      (onAfterMenuDismiss)=\"onAfterMenuDismiss.emit()\"\n    >\n    </DatePicker>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabDatePickerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
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
    return FabDatePickerComponent;
}(ReactWrapperComponent));
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
var components = [FabDatePickerComponent];
var FabDatePickerModule = /** @class */ (function () {
    function FabDatePickerModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('DatePicker', (/**
         * @return {?}
         */
        function () { return DatePicker; }));
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
    FabDatePickerModule.ctorParameters = function () { return []; };
    return FabDatePickerModule;
}());

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
