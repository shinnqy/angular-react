/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { Directive, Input } from '@angular/core';
/**
 * Wrapper directive for calendar strings
 */
export class CalendarStringsDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItc3RyaW5ncy1kaXJlY3RpdmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljL2xpYi9jb21wb25lbnRzL2NhbGVuZGFyLyIsInNvdXJjZXMiOlsiZGlyZWN0aXZlcy9jYWxlbmRhci1zdHJpbmdzLWRpcmVjdGl2ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFPakQsTUFBTSxPQUFPLHdCQUF3Qjs7OztJQWlCbkMsSUFBSSxPQUFPO1FBQ1QsT0FBTztZQUNMLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixrQkFBa0IsRUFBRSxJQUFJLENBQUMsa0JBQWtCO1lBQzNDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxrQkFBa0I7WUFDM0MsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjtZQUN6QyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsaUJBQWlCO1lBQ3pDLHNCQUFzQixFQUFFLElBQUksQ0FBQyxzQkFBc0I7WUFDbkQsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLHNCQUFzQjtZQUNuRCxvQkFBb0IsRUFBRSxJQUFJLENBQUMsb0JBQW9CO1lBQy9DLHNCQUFzQixFQUFFLElBQUksQ0FBQyxzQkFBc0I7U0FDcEQsQ0FBQTtJQUNILENBQUM7OztZQWxDRixTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUscUNBQXFDLEVBQUU7OztxQkFHM0QsS0FBSzswQkFDTCxLQUFLO21CQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO2lDQUNMLEtBQUs7aUNBQ0wsS0FBSztnQ0FDTCxLQUFLO2dDQUNMLEtBQUs7cUNBQ0wsS0FBSztxQ0FDTCxLQUFLO21DQUNMLEtBQUs7cUNBQ0wsS0FBSzs7OztJQVpOLDBDQUE0Qzs7SUFDNUMsK0NBQXNEOztJQUN0RCx3Q0FBd0M7O0lBQ3hDLDZDQUFrRDs7SUFDbEQsNkNBQWtEOztJQUNsRCxzREFBcUU7O0lBQ3JFLHNEQUFxRTs7SUFDckUscURBQW1FOztJQUNuRSxxREFBbUU7O0lBQ25FLDBEQUE2RTs7SUFDN0UsMERBQTZFOztJQUM3RSx3REFBeUU7O0lBQ3pFLDBEQUE2RSIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElDYWxlbmRhclN0cmluZ3MgfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9DYWxlbmRhcic7XHJcblxyXG4vKipcclxuICogV3JhcHBlciBkaXJlY3RpdmUgZm9yIGNhbGVuZGFyIHN0cmluZ3NcclxuICovXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ2ZhYi1jYWxlbmRhciA+IGZhYi1jYWxlbmRhci1zdHJpbmdzJyB9KVxyXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJTdHJpbmdzRGlyZWN0aXZlIHtcclxuXHJcbiAgQElucHV0KCkgbW9udGhzOiBJQ2FsZW5kYXJTdHJpbmdzWydtb250aHMnXTtcclxuICBASW5wdXQoKSBzaG9ydE1vbnRoczogSUNhbGVuZGFyU3RyaW5nc1snc2hvcnRNb250aHMnXTtcclxuICBASW5wdXQoKSBkYXlzOiBJQ2FsZW5kYXJTdHJpbmdzWydkYXlzJ107XHJcbiAgQElucHV0KCkgc2hvcnREYXlzOiBJQ2FsZW5kYXJTdHJpbmdzWydzaG9ydERheXMnXTtcclxuICBASW5wdXQoKSBnb1RvVG9kYXk6IElDYWxlbmRhclN0cmluZ3NbJ2dvVG9Ub2RheSddO1xyXG4gIEBJbnB1dCgpIHByZXZNb250aEFyaWFMYWJlbD86IElDYWxlbmRhclN0cmluZ3NbJ3ByZXZNb250aEFyaWFMYWJlbCddO1xyXG4gIEBJbnB1dCgpIG5leHRNb250aEFyaWFMYWJlbD86IElDYWxlbmRhclN0cmluZ3NbJ25leHRNb250aEFyaWFMYWJlbCddO1xyXG4gIEBJbnB1dCgpIHByZXZZZWFyQXJpYUxhYmVsPzogSUNhbGVuZGFyU3RyaW5nc1sncHJldlllYXJBcmlhTGFiZWwnXTtcclxuICBASW5wdXQoKSBuZXh0WWVhckFyaWFMYWJlbD86IElDYWxlbmRhclN0cmluZ3NbJ25leHRZZWFyQXJpYUxhYmVsJ107XHJcbiAgQElucHV0KCkgcHJldlllYXJSYW5nZUFyaWFMYWJlbD86IElDYWxlbmRhclN0cmluZ3NbJ3ByZXZZZWFyUmFuZ2VBcmlhTGFiZWwnXTtcclxuICBASW5wdXQoKSBuZXh0WWVhclJhbmdlQXJpYUxhYmVsPzogSUNhbGVuZGFyU3RyaW5nc1snbmV4dFllYXJSYW5nZUFyaWFMYWJlbCddO1xyXG4gIEBJbnB1dCgpIGNsb3NlQnV0dG9uQXJpYUxhYmVsPzogSUNhbGVuZGFyU3RyaW5nc1snY2xvc2VCdXR0b25BcmlhTGFiZWwnXTtcclxuICBASW5wdXQoKSB3ZWVrTnVtYmVyRm9ybWF0U3RyaW5nPzogSUNhbGVuZGFyU3RyaW5nc1snd2Vla051bWJlckZvcm1hdFN0cmluZyddO1xyXG5cclxuXHJcbiAgZ2V0IHN0cmluZ3MoKTogSUNhbGVuZGFyU3RyaW5ncyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBtb250aHM6IHRoaXMubW9udGhzLFxyXG4gICAgICBzaG9ydE1vbnRoczogdGhpcy5zaG9ydE1vbnRocyxcclxuICAgICAgZGF5czogdGhpcy5kYXlzLFxyXG4gICAgICBzaG9ydERheXM6IHRoaXMuc2hvcnREYXlzLFxyXG4gICAgICBnb1RvVG9kYXk6IHRoaXMuZ29Ub1RvZGF5LFxyXG4gICAgICBwcmV2TW9udGhBcmlhTGFiZWw6IHRoaXMucHJldk1vbnRoQXJpYUxhYmVsLFxyXG4gICAgICBuZXh0TW9udGhBcmlhTGFiZWw6IHRoaXMubmV4dE1vbnRoQXJpYUxhYmVsLFxyXG4gICAgICBwcmV2WWVhckFyaWFMYWJlbDogdGhpcy5wcmV2WWVhckFyaWFMYWJlbCxcclxuICAgICAgbmV4dFllYXJBcmlhTGFiZWw6IHRoaXMubmV4dFllYXJBcmlhTGFiZWwsXHJcbiAgICAgIHByZXZZZWFyUmFuZ2VBcmlhTGFiZWw6IHRoaXMucHJldlllYXJSYW5nZUFyaWFMYWJlbCxcclxuICAgICAgbmV4dFllYXJSYW5nZUFyaWFMYWJlbDogdGhpcy5uZXh0WWVhclJhbmdlQXJpYUxhYmVsLFxyXG4gICAgICBjbG9zZUJ1dHRvbkFyaWFMYWJlbDogdGhpcy5jbG9zZUJ1dHRvbkFyaWFMYWJlbCxcclxuICAgICAgd2Vla051bWJlckZvcm1hdFN0cmluZzogdGhpcy53ZWVrTnVtYmVyRm9ybWF0U3RyaW5nXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==