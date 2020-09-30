/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild, ContentChild, } from '@angular/core';
import { CalendarStringsDirective } from './directives/calendar-strings-directive.component';
export class FabCalendarComponent extends ReactWrapperComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzVELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsRUFDVCxZQUFZLEdBRWIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUE0QzdGLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxxQkFBcUM7Ozs7OztJQW9DN0UsWUFBWSxVQUFzQixFQUFFLGlCQUFvQyxFQUFFLFFBQW1CO1FBQzNGLEtBQUssQ0FBQyxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFOOUIsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBbUQsQ0FBQztRQUNuRixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQU10RCx3R0FBd0c7UUFDeEcsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7OztJQUVELGtCQUFrQjtRQUNoQixJQUFJLElBQUksQ0FBQyx3QkFBd0IsRUFBRTtZQUNqQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQ25ELEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsbUJBQW1CLENBQUMsSUFBVSxFQUFFLHNCQUErQjtRQUM3RCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztZQUNyQixJQUFJO1lBQ0osc0JBQXNCO1NBQ3ZCLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxnQkFBZ0I7UUFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7OztJQUVPLGNBQWMsQ0FBQyx3QkFBa0Q7UUFDdkUsSUFBSSxDQUFDLE9BQU8sR0FBRyx3QkFBd0IsQ0FBQyxPQUFPLENBQUM7SUFDbEQsQ0FBQzs7O1lBekdGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQ1Q7Z0JBRUQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07eUJBRHRDLGdCQUFnQjthQUUxQjs7OztZQXJEQyxVQUFVO1lBRlYsaUJBQWlCO1lBTWpCLFNBQVM7OzsyQkFtRFIsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7MkJBRXZDLEtBQUs7d0JBQ0wsS0FBSzttQ0FDTCxLQUFLO2lDQUNMLEtBQUs7dUNBQ0wsS0FBSztvQkFDTCxLQUFLO29CQUNMLEtBQUs7NkJBQ0wsS0FBSzs0QkFDTCxLQUFLO3NDQUNMLEtBQUs7NEJBQ0wsS0FBSztzQkFDTCxLQUFLO29DQUNMLEtBQUs7cUNBQ0wsS0FBSzs4QkFDTCxLQUFLOzhCQUNMLEtBQUs7OEJBQ0wsS0FBSztnQ0FDTCxLQUFLO3NCQUNMLEtBQUs7c0JBQ0wsS0FBSzs4QkFDTCxLQUFLO29DQUNMLEtBQUs7MkJBQ0wsS0FBSztnQ0FDTCxLQUFLOzhCQUNMLEtBQUs7MkJBQ0wsS0FBSzsrQkFDTCxLQUFLOzJCQUVMLE1BQU07d0JBQ04sTUFBTTt1Q0FFTixZQUFZLFNBQUMsd0JBQXdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzs7Ozs7O0lBakN4RCw0Q0FBNkU7O0lBRTdFLDRDQUF1RDs7SUFDdkQseUNBQWlEOztJQUNqRCxvREFBdUU7O0lBQ3ZFLGtEQUFtRTs7SUFDbkUsd0RBQStFOztJQUMvRSxxQ0FBeUM7O0lBQ3pDLHFDQUF5Qzs7SUFDekMsOENBQTJEOztJQUMzRCw2Q0FBeUQ7O0lBQ3pELHVEQUE2RTs7SUFDN0UsNkNBQXlEOztJQUN6RCx1Q0FBNEM7O0lBQzVDLHFEQUF5RTs7SUFDekUsc0RBQTJFOztJQUMzRSwrQ0FBNkQ7O0lBQzdELCtDQUE2RDs7SUFDN0QsK0NBQTZEOztJQUM3RCxpREFBaUU7O0lBQ2pFLHVDQUE2Qzs7SUFDN0MsdUNBQTZDOztJQUM3QywrQ0FBNkQ7O0lBQzdELHFEQUF5RTs7SUFDekUsNENBQXVEOztJQUN2RCxpREFBaUU7O0lBQ2pFLCtDQUE2RDs7SUFDN0QsNENBQXVEOztJQUN2RCxnREFBK0Q7O0lBRS9ELDRDQUFzRzs7SUFDdEcseUNBQXdEOztJQUV4RCx3REFBdUgiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgUmVhY3RXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXItcmVhY3QvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0NoaWxkLFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJQ2FsZW5kYXJQcm9wcyB9IGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliL0NhbGVuZGFyJztcclxuaW1wb3J0IHsgQ2FsZW5kYXJTdHJpbmdzRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2NhbGVuZGFyLXN0cmluZ3MtZGlyZWN0aXZlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZhYi1jYWxlbmRhcicsXHJcbiAgZXhwb3J0QXM6ICdmYWJDYWxlbmRhcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxDYWxlbmRhclxyXG4gICAgICAjcmVhY3ROb2RlXHJcbiAgICAgIFtjb21wb25lbnRSZWZdPVwiY29tcG9uZW50UmVmXCJcclxuICAgICAgW2NsYXNzTmFtZV09XCJjbGFzc05hbWVcIlxyXG4gICAgICBbaXNNb250aFBpY2tlclZpc2libGVdPVwiaXNNb250aFBpY2tlclZpc2libGVcIlxyXG4gICAgICBbaXNEYXlQaWNrZXJWaXNpYmxlXT1cImlzRGF5UGlja2VyVmlzaWJsZVwiXHJcbiAgICAgIFtzaG93TW9udGhQaWNrZXJBc092ZXJsYXldPVwic2hvd01vbnRoUGlja2VyQXNPdmVybGF5XCJcclxuICAgICAgW3RvZGF5XT1cInRvZGF5XCJcclxuICAgICAgW3ZhbHVlXT1cInZhbHVlXCJcclxuICAgICAgW2ZpcnN0RGF5T2ZXZWVrXT1cImZpcnN0RGF5T2ZXZWVrXCJcclxuICAgICAgW2RhdGVSYW5nZVR5cGVdPVwiZGF0ZVJhbmdlVHlwZVwiXHJcbiAgICAgIFthdXRvTmF2aWdhdGVPblNlbGVjdGlvbl09XCJhdXRvTmF2aWdhdGVPblNlbGVjdGlvblwiXHJcbiAgICAgIFtzaG93R29Ub1RvZGF5XT1cInNob3dHb1RvVG9kYXlcIlxyXG4gICAgICBbc3RyaW5nc109XCJzdHJpbmdzXCJcclxuICAgICAgW2hpZ2hsaWdodEN1cnJlbnRNb250aF09XCJoaWdobGlnaHRDdXJyZW50TW9udGhcIlxyXG4gICAgICBbaGlnaGxpZ2h0U2VsZWN0ZWRNb250aF09XCJoaWdobGlnaHRTZWxlY3RlZE1vbnRoXCJcclxuICAgICAgW25hdmlnYXRpb25JY29uc109XCJuYXZpZ2F0aW9uSWNvbnNcIlxyXG4gICAgICBbc2hvd1dlZWtOdW1iZXJzXT1cInNob3dXZWVrTnVtYmVyc1wiXHJcbiAgICAgIFtmaXJzdFdlZWtPZlllYXJdPVwiZmlyc3RXZWVrT2ZZZWFyXCJcclxuICAgICAgW2RhdGVUaW1lRm9ybWF0dGVyXT1cImRhdGVUaW1lRm9ybWF0dGVyXCJcclxuICAgICAgW21pbkRhdGVdPVwibWluRGF0ZVwiXHJcbiAgICAgIFttYXhEYXRlXT1cIm1heERhdGVcIlxyXG4gICAgICBbbWF4RGF0ZV09XCJyZXN0cmljdGVkRGF0ZXNcIlxyXG4gICAgICBbcmVzdHJpY3RlZERhdGVzXT1cInJlc3RyaWN0ZWREYXRlc1wiXHJcbiAgICAgIFtzaG93U2l4V2Vla3NCeURlZmF1bHRdPVwic2hvd1NpeFdlZWtzQnlEZWZhdWx0XCJcclxuICAgICAgW3dvcmtXZWVrRGF5c109XCJ3b3JrV2Vla0RheXNcIlxyXG4gICAgICBbc2VsZWN0RGF0ZU9uQ2xpY2tdPVwic2VsZWN0RGF0ZU9uQ2xpY2tcIlxyXG4gICAgICBbc2hvd0Nsb3NlQnV0dG9uXT1cInNob3dDbG9zZUJ1dHRvblwiXHJcbiAgICAgIFthbGxGb2N1c2FibGVdPVwiYWxsRm9jdXNhYmxlXCJcclxuICAgICAgW3llYXJQaWNrZXJIaWRkZW5dPVwieWVhclBpY2tlckhpZGRlblwiXHJcbiAgICAgIFtTZWxlY3REYXRlXT1cIm9uU2VsZWN0RGF0ZUhhbmRsZXJcIlxyXG4gICAgICBbRGlzbWlzc109XCJvbkRpc21pc3NIYW5kbGVyXCJcclxuICAgID5cclxuICAgIDwvQ2FsZW5kYXI+XHJcbiAgYCxcclxuICBzdHlsZXM6IFsncmVhY3QtcmVuZGVyZXInXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZhYkNhbGVuZGFyQ29tcG9uZW50IGV4dGVuZHMgUmVhY3RXcmFwcGVyQ29tcG9uZW50PElDYWxlbmRhclByb3BzPiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xyXG4gIEBWaWV3Q2hpbGQoJ3JlYWN0Tm9kZScsIHsgc3RhdGljOiB0cnVlIH0pIHByb3RlY3RlZCByZWFjdE5vZGVSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBJbnB1dCgpIGNvbXBvbmVudFJlZj86IElDYWxlbmRhclByb3BzWydjb21wb25lbnRSZWYnXTtcclxuICBASW5wdXQoKSBjbGFzc05hbWU/OiBJQ2FsZW5kYXJQcm9wc1snY2xhc3NOYW1lJ107XHJcbiAgQElucHV0KCkgaXNNb250aFBpY2tlclZpc2libGU/OiBJQ2FsZW5kYXJQcm9wc1snaXNNb250aFBpY2tlclZpc2libGUnXTtcclxuICBASW5wdXQoKSBpc0RheVBpY2tlclZpc2libGU/OiBJQ2FsZW5kYXJQcm9wc1snaXNEYXlQaWNrZXJWaXNpYmxlJ107XHJcbiAgQElucHV0KCkgc2hvd01vbnRoUGlja2VyQXNPdmVybGF5PzogSUNhbGVuZGFyUHJvcHNbJ3Nob3dNb250aFBpY2tlckFzT3ZlcmxheSddO1xyXG4gIEBJbnB1dCgpIHRvZGF5PzogSUNhbGVuZGFyUHJvcHNbJ3RvZGF5J107XHJcbiAgQElucHV0KCkgdmFsdWU/OiBJQ2FsZW5kYXJQcm9wc1sndmFsdWUnXTtcclxuICBASW5wdXQoKSBmaXJzdERheU9mV2Vlaz86IElDYWxlbmRhclByb3BzWydmaXJzdERheU9mV2VlayddO1xyXG4gIEBJbnB1dCgpIGRhdGVSYW5nZVR5cGU/OiBJQ2FsZW5kYXJQcm9wc1snZGF0ZVJhbmdlVHlwZSddO1xyXG4gIEBJbnB1dCgpIGF1dG9OYXZpZ2F0ZU9uU2VsZWN0aW9uPzogSUNhbGVuZGFyUHJvcHNbJ2F1dG9OYXZpZ2F0ZU9uU2VsZWN0aW9uJ107XHJcbiAgQElucHV0KCkgc2hvd0dvVG9Ub2RheT86IElDYWxlbmRhclByb3BzWydzaG93R29Ub1RvZGF5J107XHJcbiAgQElucHV0KCkgc3RyaW5nczogSUNhbGVuZGFyUHJvcHNbJ3N0cmluZ3MnXTtcclxuICBASW5wdXQoKSBoaWdobGlnaHRDdXJyZW50TW9udGg/OiBJQ2FsZW5kYXJQcm9wc1snaGlnaGxpZ2h0Q3VycmVudE1vbnRoJ107XHJcbiAgQElucHV0KCkgaGlnaGxpZ2h0U2VsZWN0ZWRNb250aD86IElDYWxlbmRhclByb3BzWydoaWdobGlnaHRTZWxlY3RlZE1vbnRoJ107XHJcbiAgQElucHV0KCkgbmF2aWdhdGlvbkljb25zPzogSUNhbGVuZGFyUHJvcHNbJ25hdmlnYXRpb25JY29ucyddO1xyXG4gIEBJbnB1dCgpIHNob3dXZWVrTnVtYmVycz86IElDYWxlbmRhclByb3BzWydzaG93V2Vla051bWJlcnMnXTtcclxuICBASW5wdXQoKSBmaXJzdFdlZWtPZlllYXI/OiBJQ2FsZW5kYXJQcm9wc1snZmlyc3RXZWVrT2ZZZWFyJ107XHJcbiAgQElucHV0KCkgZGF0ZVRpbWVGb3JtYXR0ZXI/OiBJQ2FsZW5kYXJQcm9wc1snZGF0ZVRpbWVGb3JtYXR0ZXInXTtcclxuICBASW5wdXQoKSBtaW5EYXRlPzogSUNhbGVuZGFyUHJvcHNbJ21pbkRhdGUnXTtcclxuICBASW5wdXQoKSBtYXhEYXRlPzogSUNhbGVuZGFyUHJvcHNbJ21heERhdGUnXTtcclxuICBASW5wdXQoKSByZXN0cmljdGVkRGF0ZXM/OiBJQ2FsZW5kYXJQcm9wc1sncmVzdHJpY3RlZERhdGVzJ107XHJcbiAgQElucHV0KCkgc2hvd1NpeFdlZWtzQnlEZWZhdWx0PzogSUNhbGVuZGFyUHJvcHNbJ3Nob3dTaXhXZWVrc0J5RGVmYXVsdCddO1xyXG4gIEBJbnB1dCgpIHdvcmtXZWVrRGF5cz86IElDYWxlbmRhclByb3BzWyd3b3JrV2Vla0RheXMnXTtcclxuICBASW5wdXQoKSBzZWxlY3REYXRlT25DbGljaz86IElDYWxlbmRhclByb3BzWydzZWxlY3REYXRlT25DbGljayddO1xyXG4gIEBJbnB1dCgpIHNob3dDbG9zZUJ1dHRvbj86IElDYWxlbmRhclByb3BzWydzaG93Q2xvc2VCdXR0b24nXTtcclxuICBASW5wdXQoKSBhbGxGb2N1c2FibGU/OiBJQ2FsZW5kYXJQcm9wc1snYWxsRm9jdXNhYmxlJ107XHJcbiAgQElucHV0KCkgeWVhclBpY2tlckhpZGRlbj86IElDYWxlbmRhclByb3BzWyd5ZWFyUGlja2VySGlkZGVuJ107XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvblNlbGVjdERhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPHsgZGF0ZTogRGF0ZTsgc2VsZWN0ZWREYXRlUmFuZ2VBcnJheT86IERhdGVbXSB9PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvbkRpc21pc3MgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoQ2FsZW5kYXJTdHJpbmdzRGlyZWN0aXZlLCB7IHN0YXRpYzogdHJ1ZSB9KSByZWFkb25seSBjYWxlbmRhclN0cmluZ3NEaXJlY3RpdmU/OiBDYWxlbmRhclN0cmluZ3NEaXJlY3RpdmU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xyXG4gICAgc3VwZXIoZWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyKTtcclxuICAgIC8vIGNvbWluZyBmcm9tIFJlYWN0IGNvbnRleHQgLSB3ZSBuZWVkIHRvIGJpbmQgdG8gdGhpcyBzbyB3ZSBjYW4gYWNjZXNzIHRoZSBBbmd1bGFyIENvbXBvbmVudCBwcm9wZXJ0aWVzXHJcbiAgICB0aGlzLm9uU2VsZWN0RGF0ZUhhbmRsZXIgPSB0aGlzLm9uU2VsZWN0RGF0ZUhhbmRsZXIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25EaXNtaXNzSGFuZGxlciA9IHRoaXMub25EaXNtaXNzSGFuZGxlci5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgaWYgKHRoaXMuY2FsZW5kYXJTdHJpbmdzRGlyZWN0aXZlKSB7XHJcbiAgICAgIHRoaXMuX2luaXREaXJlY3RpdmUodGhpcy5jYWxlbmRhclN0cmluZ3NEaXJlY3RpdmUpO1xyXG4gICAgICBzdXBlci5uZ0FmdGVyQ29udGVudEluaXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uU2VsZWN0RGF0ZUhhbmRsZXIoZGF0ZTogRGF0ZSwgc2VsZWN0ZWREYXRlUmFuZ2VBcnJheT86IERhdGVbXSkge1xyXG4gICAgdGhpcy5vblNlbGVjdERhdGUuZW1pdCh7XHJcbiAgICAgIGRhdGUsXHJcbiAgICAgIHNlbGVjdGVkRGF0ZVJhbmdlQXJyYXksXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uRGlzbWlzc0hhbmRsZXIoKSB7XHJcbiAgICB0aGlzLm9uRGlzbWlzcy5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9pbml0RGlyZWN0aXZlKGNhbGVuZGFyU3RyaW5nc0RpcmVjdGl2ZTogQ2FsZW5kYXJTdHJpbmdzRGlyZWN0aXZlKSB7XHJcbiAgICB0aGlzLnN0cmluZ3MgPSBjYWxlbmRhclN0cmluZ3NEaXJlY3RpdmUuc3RyaW5ncztcclxuICB9XHJcbn1cclxuIl19