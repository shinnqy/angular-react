import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { Directive, Input, EventEmitter, Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, ViewChild, Output, ContentChild, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as CalendarCss from 'office-ui-fabric-react/lib-amd/components/Calendar/Calendar.scss';
import { Calendar } from 'office-ui-fabric-react/lib/Calendar';
import { noop } from 'angular-react-toolkit/utils/noop';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Wrapper directive for calendar strings
 */
class CalendarStringsDirective {
    /**
     * @return {?}
     */
    get strings() {
        return {
            months: this.months,
            shortMonths: this.shortMonths,
            days: this.days,
            shortDays: this.shortDays,
            goToToday: this.goToToday,
            prevMonthAriaLabel: this.prevMonthAriaLabel,
            nextMonthAriaLabel: this.nextMonthAriaLabel,
            prevYearAriaLabel: this.prevYearAriaLabel,
            nextYearAriaLabel: this.nextYearAriaLabel,
            prevYearRangeAriaLabel: this.prevYearRangeAriaLabel,
            nextYearRangeAriaLabel: this.nextYearRangeAriaLabel,
            closeButtonAriaLabel: this.closeButtonAriaLabel,
            weekNumberFormatString: this.weekNumberFormatString
        };
    }
}
CalendarStringsDirective.decorators = [
    { type: Directive, args: [{ selector: 'fab-calendar > fab-calendar-strings' },] }
];
CalendarStringsDirective.propDecorators = {
    months: [{ type: Input }],
    shortMonths: [{ type: Input }],
    days: [{ type: Input }],
    shortDays: [{ type: Input }],
    goToToday: [{ type: Input }],
    prevMonthAriaLabel: [{ type: Input }],
    nextMonthAriaLabel: [{ type: Input }],
    prevYearAriaLabel: [{ type: Input }],
    nextYearAriaLabel: [{ type: Input }],
    prevYearRangeAriaLabel: [{ type: Input }],
    nextYearRangeAriaLabel: [{ type: Input }],
    closeButtonAriaLabel: [{ type: Input }],
    weekNumberFormatString: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CalendarStringsDirective.prototype.months;
    /** @type {?} */
    CalendarStringsDirective.prototype.shortMonths;
    /** @type {?} */
    CalendarStringsDirective.prototype.days;
    /** @type {?} */
    CalendarStringsDirective.prototype.shortDays;
    /** @type {?} */
    CalendarStringsDirective.prototype.goToToday;
    /** @type {?} */
    CalendarStringsDirective.prototype.prevMonthAriaLabel;
    /** @type {?} */
    CalendarStringsDirective.prototype.nextMonthAriaLabel;
    /** @type {?} */
    CalendarStringsDirective.prototype.prevYearAriaLabel;
    /** @type {?} */
    CalendarStringsDirective.prototype.nextYearAriaLabel;
    /** @type {?} */
    CalendarStringsDirective.prototype.prevYearRangeAriaLabel;
    /** @type {?} */
    CalendarStringsDirective.prototype.nextYearRangeAriaLabel;
    /** @type {?} */
    CalendarStringsDirective.prototype.closeButtonAriaLabel;
    /** @type {?} */
    CalendarStringsDirective.prototype.weekNumberFormatString;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabCalendarComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer);
        this.onSelectDate = new EventEmitter();
        this.onDismiss = new EventEmitter();
        // coming from React context - we need to bind to this so we can access the Angular Component properties
        this.onSelectDateHandler = this.onSelectDateHandler.bind(this);
        this.onDismissHandler = this.onDismissHandler.bind(this);
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.calendarStringsDirective) {
            this._initDirective(this.calendarStringsDirective);
            super.ngAfterContentInit();
        }
    }
    /**
     * @param {?} date
     * @param {?=} selectedDateRangeArray
     * @return {?}
     */
    onSelectDateHandler(date, selectedDateRangeArray) {
        this.onSelectDate.emit({
            date,
            selectedDateRangeArray,
        });
    }
    /**
     * @return {?}
     */
    onDismissHandler() {
        this.onDismiss.emit();
    }
    /**
     * @private
     * @param {?} calendarStringsDirective
     * @return {?}
     */
    _initDirective(calendarStringsDirective) {
        this.strings = calendarStringsDirective.strings;
    }
}
FabCalendarComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-calendar',
                exportAs: 'fabCalendar',
                template: `
    <Calendar
      #reactNode
      [componentRef]="componentRef"
      [className]="className"
      [isMonthPickerVisible]="isMonthPickerVisible"
      [isDayPickerVisible]="isDayPickerVisible"
      [showMonthPickerAsOverlay]="showMonthPickerAsOverlay"
      [today]="today"
      [value]="value"
      [firstDayOfWeek]="firstDayOfWeek"
      [dateRangeType]="dateRangeType"
      [autoNavigateOnSelection]="autoNavigateOnSelection"
      [showGoToToday]="showGoToToday"
      [strings]="strings"
      [highlightCurrentMonth]="highlightCurrentMonth"
      [highlightSelectedMonth]="highlightSelectedMonth"
      [navigationIcons]="navigationIcons"
      [showWeekNumbers]="showWeekNumbers"
      [firstWeekOfYear]="firstWeekOfYear"
      [dateTimeFormatter]="dateTimeFormatter"
      [minDate]="minDate"
      [maxDate]="maxDate"
      [maxDate]="restrictedDates"
      [restrictedDates]="restrictedDates"
      [showSixWeeksByDefault]="showSixWeeksByDefault"
      [workWeekDays]="workWeekDays"
      [selectDateOnClick]="selectDateOnClick"
      [showCloseButton]="showCloseButton"
      [allFocusable]="allFocusable"
      [yearPickerHidden]="yearPickerHidden"
      [SelectDate]="onSelectDateHandler"
      [Dismiss]="onDismissHandler"
    >
    </Calendar>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabCalendarComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
FabCalendarComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    componentRef: [{ type: Input }],
    className: [{ type: Input }],
    isMonthPickerVisible: [{ type: Input }],
    isDayPickerVisible: [{ type: Input }],
    showMonthPickerAsOverlay: [{ type: Input }],
    today: [{ type: Input }],
    value: [{ type: Input }],
    firstDayOfWeek: [{ type: Input }],
    dateRangeType: [{ type: Input }],
    autoNavigateOnSelection: [{ type: Input }],
    showGoToToday: [{ type: Input }],
    strings: [{ type: Input }],
    highlightCurrentMonth: [{ type: Input }],
    highlightSelectedMonth: [{ type: Input }],
    navigationIcons: [{ type: Input }],
    showWeekNumbers: [{ type: Input }],
    firstWeekOfYear: [{ type: Input }],
    dateTimeFormatter: [{ type: Input }],
    minDate: [{ type: Input }],
    maxDate: [{ type: Input }],
    restrictedDates: [{ type: Input }],
    showSixWeeksByDefault: [{ type: Input }],
    workWeekDays: [{ type: Input }],
    selectDateOnClick: [{ type: Input }],
    showCloseButton: [{ type: Input }],
    allFocusable: [{ type: Input }],
    yearPickerHidden: [{ type: Input }],
    onSelectDate: [{ type: Output }],
    onDismiss: [{ type: Output }],
    calendarStringsDirective: [{ type: ContentChild, args: [CalendarStringsDirective, { static: true },] }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabCalendarComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabCalendarComponent.prototype.componentRef;
    /** @type {?} */
    FabCalendarComponent.prototype.className;
    /** @type {?} */
    FabCalendarComponent.prototype.isMonthPickerVisible;
    /** @type {?} */
    FabCalendarComponent.prototype.isDayPickerVisible;
    /** @type {?} */
    FabCalendarComponent.prototype.showMonthPickerAsOverlay;
    /** @type {?} */
    FabCalendarComponent.prototype.today;
    /** @type {?} */
    FabCalendarComponent.prototype.value;
    /** @type {?} */
    FabCalendarComponent.prototype.firstDayOfWeek;
    /** @type {?} */
    FabCalendarComponent.prototype.dateRangeType;
    /** @type {?} */
    FabCalendarComponent.prototype.autoNavigateOnSelection;
    /** @type {?} */
    FabCalendarComponent.prototype.showGoToToday;
    /** @type {?} */
    FabCalendarComponent.prototype.strings;
    /** @type {?} */
    FabCalendarComponent.prototype.highlightCurrentMonth;
    /** @type {?} */
    FabCalendarComponent.prototype.highlightSelectedMonth;
    /** @type {?} */
    FabCalendarComponent.prototype.navigationIcons;
    /** @type {?} */
    FabCalendarComponent.prototype.showWeekNumbers;
    /** @type {?} */
    FabCalendarComponent.prototype.firstWeekOfYear;
    /** @type {?} */
    FabCalendarComponent.prototype.dateTimeFormatter;
    /** @type {?} */
    FabCalendarComponent.prototype.minDate;
    /** @type {?} */
    FabCalendarComponent.prototype.maxDate;
    /** @type {?} */
    FabCalendarComponent.prototype.restrictedDates;
    /** @type {?} */
    FabCalendarComponent.prototype.showSixWeeksByDefault;
    /** @type {?} */
    FabCalendarComponent.prototype.workWeekDays;
    /** @type {?} */
    FabCalendarComponent.prototype.selectDateOnClick;
    /** @type {?} */
    FabCalendarComponent.prototype.showCloseButton;
    /** @type {?} */
    FabCalendarComponent.prototype.allFocusable;
    /** @type {?} */
    FabCalendarComponent.prototype.yearPickerHidden;
    /** @type {?} */
    FabCalendarComponent.prototype.onSelectDate;
    /** @type {?} */
    FabCalendarComponent.prototype.onDismiss;
    /** @type {?} */
    FabCalendarComponent.prototype.calendarStringsDirective;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Dummy action to force CalendarCss to load and not be tree-shaken away.
noop(CalendarCss);
/** @type {?} */
const declarations = [FabCalendarComponent, CalendarStringsDirective];
class FabCalendarModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Calendar', (/**
         * @return {?}
         */
        () => Calendar));
    }
}
FabCalendarModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: declarations,
                exports: declarations,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabCalendarModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FabCalendarComponent, FabCalendarModule, CalendarStringsDirective as ɵa };
//# sourceMappingURL=angular-react-fabric-lib-components-calendar.js.map
