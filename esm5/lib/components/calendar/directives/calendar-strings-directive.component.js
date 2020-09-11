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
var CalendarStringsDirective = /** @class */ (function () {
    function CalendarStringsDirective() {
    }
    Object.defineProperty(CalendarStringsDirective.prototype, "strings", {
        get: /**
         * @return {?}
         */
        function () {
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
        },
        enumerable: true,
        configurable: true
    });
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
    return CalendarStringsDirective;
}());
export { CalendarStringsDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItc3RyaW5ncy1kaXJlY3RpdmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljL2xpYi9jb21wb25lbnRzL2NhbGVuZGFyLyIsInNvdXJjZXMiOlsiZGlyZWN0aXZlcy9jYWxlbmRhci1zdHJpbmdzLWRpcmVjdGl2ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFNakQ7SUFBQTtJQW1DQSxDQUFDO0lBakJDLHNCQUFJLDZDQUFPOzs7O1FBQVg7WUFDRSxPQUFPO2dCQUNMLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDbkIsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO2dCQUM3QixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0JBQ2YsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO2dCQUN6QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7Z0JBQ3pCLGtCQUFrQixFQUFFLElBQUksQ0FBQyxrQkFBa0I7Z0JBQzNDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxrQkFBa0I7Z0JBQzNDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxpQkFBaUI7Z0JBQ3pDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxpQkFBaUI7Z0JBQ3pDLHNCQUFzQixFQUFFLElBQUksQ0FBQyxzQkFBc0I7Z0JBQ25ELHNCQUFzQixFQUFFLElBQUksQ0FBQyxzQkFBc0I7Z0JBQ25ELG9CQUFvQixFQUFFLElBQUksQ0FBQyxvQkFBb0I7Z0JBQy9DLHNCQUFzQixFQUFFLElBQUksQ0FBQyxzQkFBc0I7YUFDcEQsQ0FBQTtRQUNILENBQUM7OztPQUFBOztnQkFsQ0YsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLHFDQUFxQyxFQUFFOzs7eUJBRzNELEtBQUs7OEJBQ0wsS0FBSzt1QkFDTCxLQUFLOzRCQUNMLEtBQUs7NEJBQ0wsS0FBSztxQ0FDTCxLQUFLO3FDQUNMLEtBQUs7b0NBQ0wsS0FBSztvQ0FDTCxLQUFLO3lDQUNMLEtBQUs7eUNBQ0wsS0FBSzt1Q0FDTCxLQUFLO3lDQUNMLEtBQUs7O0lBb0JSLCtCQUFDO0NBQUEsQUFuQ0QsSUFtQ0M7U0FsQ1ksd0JBQXdCOzs7SUFFbkMsMENBQTRDOztJQUM1QywrQ0FBc0Q7O0lBQ3RELHdDQUF3Qzs7SUFDeEMsNkNBQWtEOztJQUNsRCw2Q0FBa0Q7O0lBQ2xELHNEQUFxRTs7SUFDckUsc0RBQXFFOztJQUNyRSxxREFBbUU7O0lBQ25FLHFEQUFtRTs7SUFDbkUsMERBQTZFOztJQUM3RSwwREFBNkU7O0lBQzdFLHdEQUF5RTs7SUFDekUsMERBQTZFIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSUNhbGVuZGFyU3RyaW5ncyB9IGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliL0NhbGVuZGFyJztcclxuXHJcbi8qKlxyXG4gKiBXcmFwcGVyIGRpcmVjdGl2ZSBmb3IgY2FsZW5kYXIgc3RyaW5nc1xyXG4gKi9cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnZmFiLWNhbGVuZGFyID4gZmFiLWNhbGVuZGFyLXN0cmluZ3MnIH0pXHJcbmV4cG9ydCBjbGFzcyBDYWxlbmRhclN0cmluZ3NEaXJlY3RpdmUge1xyXG5cclxuICBASW5wdXQoKSBtb250aHM6IElDYWxlbmRhclN0cmluZ3NbJ21vbnRocyddO1xyXG4gIEBJbnB1dCgpIHNob3J0TW9udGhzOiBJQ2FsZW5kYXJTdHJpbmdzWydzaG9ydE1vbnRocyddO1xyXG4gIEBJbnB1dCgpIGRheXM6IElDYWxlbmRhclN0cmluZ3NbJ2RheXMnXTtcclxuICBASW5wdXQoKSBzaG9ydERheXM6IElDYWxlbmRhclN0cmluZ3NbJ3Nob3J0RGF5cyddO1xyXG4gIEBJbnB1dCgpIGdvVG9Ub2RheTogSUNhbGVuZGFyU3RyaW5nc1snZ29Ub1RvZGF5J107XHJcbiAgQElucHV0KCkgcHJldk1vbnRoQXJpYUxhYmVsPzogSUNhbGVuZGFyU3RyaW5nc1sncHJldk1vbnRoQXJpYUxhYmVsJ107XHJcbiAgQElucHV0KCkgbmV4dE1vbnRoQXJpYUxhYmVsPzogSUNhbGVuZGFyU3RyaW5nc1snbmV4dE1vbnRoQXJpYUxhYmVsJ107XHJcbiAgQElucHV0KCkgcHJldlllYXJBcmlhTGFiZWw/OiBJQ2FsZW5kYXJTdHJpbmdzWydwcmV2WWVhckFyaWFMYWJlbCddO1xyXG4gIEBJbnB1dCgpIG5leHRZZWFyQXJpYUxhYmVsPzogSUNhbGVuZGFyU3RyaW5nc1snbmV4dFllYXJBcmlhTGFiZWwnXTtcclxuICBASW5wdXQoKSBwcmV2WWVhclJhbmdlQXJpYUxhYmVsPzogSUNhbGVuZGFyU3RyaW5nc1sncHJldlllYXJSYW5nZUFyaWFMYWJlbCddO1xyXG4gIEBJbnB1dCgpIG5leHRZZWFyUmFuZ2VBcmlhTGFiZWw/OiBJQ2FsZW5kYXJTdHJpbmdzWyduZXh0WWVhclJhbmdlQXJpYUxhYmVsJ107XHJcbiAgQElucHV0KCkgY2xvc2VCdXR0b25BcmlhTGFiZWw/OiBJQ2FsZW5kYXJTdHJpbmdzWydjbG9zZUJ1dHRvbkFyaWFMYWJlbCddO1xyXG4gIEBJbnB1dCgpIHdlZWtOdW1iZXJGb3JtYXRTdHJpbmc/OiBJQ2FsZW5kYXJTdHJpbmdzWyd3ZWVrTnVtYmVyRm9ybWF0U3RyaW5nJ107XHJcblxyXG5cclxuICBnZXQgc3RyaW5ncygpOiBJQ2FsZW5kYXJTdHJpbmdzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG1vbnRoczogdGhpcy5tb250aHMsXHJcbiAgICAgIHNob3J0TW9udGhzOiB0aGlzLnNob3J0TW9udGhzLFxyXG4gICAgICBkYXlzOiB0aGlzLmRheXMsXHJcbiAgICAgIHNob3J0RGF5czogdGhpcy5zaG9ydERheXMsXHJcbiAgICAgIGdvVG9Ub2RheTogdGhpcy5nb1RvVG9kYXksXHJcbiAgICAgIHByZXZNb250aEFyaWFMYWJlbDogdGhpcy5wcmV2TW9udGhBcmlhTGFiZWwsXHJcbiAgICAgIG5leHRNb250aEFyaWFMYWJlbDogdGhpcy5uZXh0TW9udGhBcmlhTGFiZWwsXHJcbiAgICAgIHByZXZZZWFyQXJpYUxhYmVsOiB0aGlzLnByZXZZZWFyQXJpYUxhYmVsLFxyXG4gICAgICBuZXh0WWVhckFyaWFMYWJlbDogdGhpcy5uZXh0WWVhckFyaWFMYWJlbCxcclxuICAgICAgcHJldlllYXJSYW5nZUFyaWFMYWJlbDogdGhpcy5wcmV2WWVhclJhbmdlQXJpYUxhYmVsLFxyXG4gICAgICBuZXh0WWVhclJhbmdlQXJpYUxhYmVsOiB0aGlzLm5leHRZZWFyUmFuZ2VBcmlhTGFiZWwsXHJcbiAgICAgIGNsb3NlQnV0dG9uQXJpYUxhYmVsOiB0aGlzLmNsb3NlQnV0dG9uQXJpYUxhYmVsLFxyXG4gICAgICB3ZWVrTnVtYmVyRm9ybWF0U3RyaW5nOiB0aGlzLndlZWtOdW1iZXJGb3JtYXRTdHJpbmdcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19