/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild, ContentChild, } from '@angular/core';
import { CalendarStringsDirective } from './directives/calendar-strings-directive.component';
var FabCalendarComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabCalendarComponent, _super);
    function FabCalendarComponent(elementRef, changeDetectorRef, renderer) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer) || this;
        _this.onSelectDate = new EventEmitter();
        _this.onDismiss = new EventEmitter();
        // coming from React context - we need to bind to this so we can access the Angular Component properties
        _this.onSelectDateHandler = _this.onSelectDateHandler.bind(_this);
        _this.onDismissHandler = _this.onDismissHandler.bind(_this);
        return _this;
    }
    /**
     * @return {?}
     */
    FabCalendarComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        if (this.calendarStringsDirective) {
            this._initDirective(this.calendarStringsDirective);
            _super.prototype.ngAfterContentInit.call(this);
        }
    };
    /**
     * @param {?} date
     * @param {?=} selectedDateRangeArray
     * @return {?}
     */
    FabCalendarComponent.prototype.onSelectDateHandler = /**
     * @param {?} date
     * @param {?=} selectedDateRangeArray
     * @return {?}
     */
    function (date, selectedDateRangeArray) {
        this.onSelectDate.emit({
            date: date,
            selectedDateRangeArray: selectedDateRangeArray,
        });
    };
    /**
     * @return {?}
     */
    FabCalendarComponent.prototype.onDismissHandler = /**
     * @return {?}
     */
    function () {
        this.onDismiss.emit();
    };
    /**
     * @private
     * @param {?} calendarStringsDirective
     * @return {?}
     */
    FabCalendarComponent.prototype._initDirective = /**
     * @private
     * @param {?} calendarStringsDirective
     * @return {?}
     */
    function (calendarStringsDirective) {
        this.strings = calendarStringsDirective.strings;
    };
    FabCalendarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-calendar',
                    exportAs: 'fabCalendar',
                    template: "\n    <Calendar\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [className]=\"className\"\n      [isMonthPickerVisible]=\"isMonthPickerVisible\"\n      [isDayPickerVisible]=\"isDayPickerVisible\"\n      [showMonthPickerAsOverlay]=\"showMonthPickerAsOverlay\"\n      [today]=\"today\"\n      [value]=\"value\"\n      [firstDayOfWeek]=\"firstDayOfWeek\"\n      [dateRangeType]=\"dateRangeType\"\n      [autoNavigateOnSelection]=\"autoNavigateOnSelection\"\n      [showGoToToday]=\"showGoToToday\"\n      [strings]=\"strings\"\n      [highlightCurrentMonth]=\"highlightCurrentMonth\"\n      [highlightSelectedMonth]=\"highlightSelectedMonth\"\n      [navigationIcons]=\"navigationIcons\"\n      [showWeekNumbers]=\"showWeekNumbers\"\n      [firstWeekOfYear]=\"firstWeekOfYear\"\n      [dateTimeFormatter]=\"dateTimeFormatter\"\n      [minDate]=\"minDate\"\n      [maxDate]=\"maxDate\"\n      [maxDate]=\"restrictedDates\"\n      [restrictedDates]=\"restrictedDates\"\n      [showSixWeeksByDefault]=\"showSixWeeksByDefault\"\n      [workWeekDays]=\"workWeekDays\"\n      [selectDateOnClick]=\"selectDateOnClick\"\n      [showCloseButton]=\"showCloseButton\"\n      [allFocusable]=\"allFocusable\"\n      [yearPickerHidden]=\"yearPickerHidden\"\n      [SelectDate]=\"onSelectDateHandler\"\n      [Dismiss]=\"onDismissHandler\"\n    >\n    </Calendar>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabCalendarComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
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
    return FabCalendarComponent;
}(ReactWrapperComponent));
export { FabCalendarComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljL2xpYi9jb21wb25lbnRzL2NhbGVuZGFyLyIsInNvdXJjZXMiOlsiY2FsZW5kYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM1RCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsWUFBWSxHQUViLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBRTdGO0lBMEMwQyxnREFBcUM7SUFvQzdFLDhCQUFZLFVBQXNCLEVBQUUsaUJBQW9DLEVBQUUsUUFBbUI7UUFBN0YsWUFDRSxrQkFBTSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxDQUFDLFNBSS9DO1FBVmtCLGtCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQW1ELENBQUM7UUFDbkYsZUFBUyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFNdEQsd0dBQXdHO1FBQ3hHLEtBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQy9ELEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDOztJQUMzRCxDQUFDOzs7O0lBRUQsaURBQWtCOzs7SUFBbEI7UUFDRSxJQUFJLElBQUksQ0FBQyx3QkFBd0IsRUFBRTtZQUNqQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQ25ELGlCQUFNLGtCQUFrQixXQUFFLENBQUM7U0FDNUI7SUFDSCxDQUFDOzs7Ozs7SUFFRCxrREFBbUI7Ozs7O0lBQW5CLFVBQW9CLElBQVUsRUFBRSxzQkFBK0I7UUFDN0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFDckIsSUFBSSxNQUFBO1lBQ0osc0JBQXNCLHdCQUFBO1NBQ3ZCLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCwrQ0FBZ0I7OztJQUFoQjtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7Ozs7O0lBRU8sNkNBQWM7Ozs7O0lBQXRCLFVBQXVCLHdCQUFrRDtRQUN2RSxJQUFJLENBQUMsT0FBTyxHQUFHLHdCQUF3QixDQUFDLE9BQU8sQ0FBQztJQUNsRCxDQUFDOztnQkF6R0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFLHUxQ0FtQ1Q7b0JBRUQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07NkJBRHRDLGdCQUFnQjtpQkFFMUI7Ozs7Z0JBckRDLFVBQVU7Z0JBRlYsaUJBQWlCO2dCQU1qQixTQUFTOzs7K0JBbURSLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOytCQUV2QyxLQUFLOzRCQUNMLEtBQUs7dUNBQ0wsS0FBSztxQ0FDTCxLQUFLOzJDQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO2lDQUNMLEtBQUs7Z0NBQ0wsS0FBSzswQ0FDTCxLQUFLO2dDQUNMLEtBQUs7MEJBQ0wsS0FBSzt3Q0FDTCxLQUFLO3lDQUNMLEtBQUs7a0NBQ0wsS0FBSztrQ0FDTCxLQUFLO2tDQUNMLEtBQUs7b0NBQ0wsS0FBSzswQkFDTCxLQUFLOzBCQUNMLEtBQUs7a0NBQ0wsS0FBSzt3Q0FDTCxLQUFLOytCQUNMLEtBQUs7b0NBQ0wsS0FBSztrQ0FDTCxLQUFLOytCQUNMLEtBQUs7bUNBQ0wsS0FBSzsrQkFFTCxNQUFNOzRCQUNOLE1BQU07MkNBRU4sWUFBWSxTQUFDLHdCQUF3QixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7SUE4QjFELDJCQUFDO0NBQUEsQUExR0QsQ0EwQzBDLHFCQUFxQixHQWdFOUQ7U0FoRVksb0JBQW9COzs7Ozs7SUFDL0IsNENBQTZFOztJQUU3RSw0Q0FBdUQ7O0lBQ3ZELHlDQUFpRDs7SUFDakQsb0RBQXVFOztJQUN2RSxrREFBbUU7O0lBQ25FLHdEQUErRTs7SUFDL0UscUNBQXlDOztJQUN6QyxxQ0FBeUM7O0lBQ3pDLDhDQUEyRDs7SUFDM0QsNkNBQXlEOztJQUN6RCx1REFBNkU7O0lBQzdFLDZDQUF5RDs7SUFDekQsdUNBQTRDOztJQUM1QyxxREFBeUU7O0lBQ3pFLHNEQUEyRTs7SUFDM0UsK0NBQTZEOztJQUM3RCwrQ0FBNkQ7O0lBQzdELCtDQUE2RDs7SUFDN0QsaURBQWlFOztJQUNqRSx1Q0FBNkM7O0lBQzdDLHVDQUE2Qzs7SUFDN0MsK0NBQTZEOztJQUM3RCxxREFBeUU7O0lBQ3pFLDRDQUF1RDs7SUFDdkQsaURBQWlFOztJQUNqRSwrQ0FBNkQ7O0lBQzdELDRDQUF1RDs7SUFDdkQsZ0RBQStEOztJQUUvRCw0Q0FBc0c7O0lBQ3RHLHlDQUF3RDs7SUFFeEQsd0RBQXVIIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IFJlYWN0V3JhcHBlckNvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFZpZXdDaGlsZCxcclxuICBDb250ZW50Q2hpbGQsXHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSUNhbGVuZGFyUHJvcHMgfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9DYWxlbmRhcic7XHJcbmltcG9ydCB7IENhbGVuZGFyU3RyaW5nc0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9jYWxlbmRhci1zdHJpbmdzLWRpcmVjdGl2ZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmYWItY2FsZW5kYXInLFxyXG4gIGV4cG9ydEFzOiAnZmFiQ2FsZW5kYXInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8Q2FsZW5kYXJcclxuICAgICAgI3JlYWN0Tm9kZVxyXG4gICAgICBbY29tcG9uZW50UmVmXT1cImNvbXBvbmVudFJlZlwiXHJcbiAgICAgIFtjbGFzc05hbWVdPVwiY2xhc3NOYW1lXCJcclxuICAgICAgW2lzTW9udGhQaWNrZXJWaXNpYmxlXT1cImlzTW9udGhQaWNrZXJWaXNpYmxlXCJcclxuICAgICAgW2lzRGF5UGlja2VyVmlzaWJsZV09XCJpc0RheVBpY2tlclZpc2libGVcIlxyXG4gICAgICBbc2hvd01vbnRoUGlja2VyQXNPdmVybGF5XT1cInNob3dNb250aFBpY2tlckFzT3ZlcmxheVwiXHJcbiAgICAgIFt0b2RheV09XCJ0b2RheVwiXHJcbiAgICAgIFt2YWx1ZV09XCJ2YWx1ZVwiXHJcbiAgICAgIFtmaXJzdERheU9mV2Vla109XCJmaXJzdERheU9mV2Vla1wiXHJcbiAgICAgIFtkYXRlUmFuZ2VUeXBlXT1cImRhdGVSYW5nZVR5cGVcIlxyXG4gICAgICBbYXV0b05hdmlnYXRlT25TZWxlY3Rpb25dPVwiYXV0b05hdmlnYXRlT25TZWxlY3Rpb25cIlxyXG4gICAgICBbc2hvd0dvVG9Ub2RheV09XCJzaG93R29Ub1RvZGF5XCJcclxuICAgICAgW3N0cmluZ3NdPVwic3RyaW5nc1wiXHJcbiAgICAgIFtoaWdobGlnaHRDdXJyZW50TW9udGhdPVwiaGlnaGxpZ2h0Q3VycmVudE1vbnRoXCJcclxuICAgICAgW2hpZ2hsaWdodFNlbGVjdGVkTW9udGhdPVwiaGlnaGxpZ2h0U2VsZWN0ZWRNb250aFwiXHJcbiAgICAgIFtuYXZpZ2F0aW9uSWNvbnNdPVwibmF2aWdhdGlvbkljb25zXCJcclxuICAgICAgW3Nob3dXZWVrTnVtYmVyc109XCJzaG93V2Vla051bWJlcnNcIlxyXG4gICAgICBbZmlyc3RXZWVrT2ZZZWFyXT1cImZpcnN0V2Vla09mWWVhclwiXHJcbiAgICAgIFtkYXRlVGltZUZvcm1hdHRlcl09XCJkYXRlVGltZUZvcm1hdHRlclwiXHJcbiAgICAgIFttaW5EYXRlXT1cIm1pbkRhdGVcIlxyXG4gICAgICBbbWF4RGF0ZV09XCJtYXhEYXRlXCJcclxuICAgICAgW21heERhdGVdPVwicmVzdHJpY3RlZERhdGVzXCJcclxuICAgICAgW3Jlc3RyaWN0ZWREYXRlc109XCJyZXN0cmljdGVkRGF0ZXNcIlxyXG4gICAgICBbc2hvd1NpeFdlZWtzQnlEZWZhdWx0XT1cInNob3dTaXhXZWVrc0J5RGVmYXVsdFwiXHJcbiAgICAgIFt3b3JrV2Vla0RheXNdPVwid29ya1dlZWtEYXlzXCJcclxuICAgICAgW3NlbGVjdERhdGVPbkNsaWNrXT1cInNlbGVjdERhdGVPbkNsaWNrXCJcclxuICAgICAgW3Nob3dDbG9zZUJ1dHRvbl09XCJzaG93Q2xvc2VCdXR0b25cIlxyXG4gICAgICBbYWxsRm9jdXNhYmxlXT1cImFsbEZvY3VzYWJsZVwiXHJcbiAgICAgIFt5ZWFyUGlja2VySGlkZGVuXT1cInllYXJQaWNrZXJIaWRkZW5cIlxyXG4gICAgICBbU2VsZWN0RGF0ZV09XCJvblNlbGVjdERhdGVIYW5kbGVyXCJcclxuICAgICAgW0Rpc21pc3NdPVwib25EaXNtaXNzSGFuZGxlclwiXHJcbiAgICA+XHJcbiAgICA8L0NhbGVuZGFyPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbJ3JlYWN0LXJlbmRlcmVyJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYWJDYWxlbmRhckNvbXBvbmVudCBleHRlbmRzIFJlYWN0V3JhcHBlckNvbXBvbmVudDxJQ2FsZW5kYXJQcm9wcz4gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcclxuICBAVmlld0NoaWxkKCdyZWFjdE5vZGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcm90ZWN0ZWQgcmVhY3ROb2RlUmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICBASW5wdXQoKSBjb21wb25lbnRSZWY/OiBJQ2FsZW5kYXJQcm9wc1snY29tcG9uZW50UmVmJ107XHJcbiAgQElucHV0KCkgY2xhc3NOYW1lPzogSUNhbGVuZGFyUHJvcHNbJ2NsYXNzTmFtZSddO1xyXG4gIEBJbnB1dCgpIGlzTW9udGhQaWNrZXJWaXNpYmxlPzogSUNhbGVuZGFyUHJvcHNbJ2lzTW9udGhQaWNrZXJWaXNpYmxlJ107XHJcbiAgQElucHV0KCkgaXNEYXlQaWNrZXJWaXNpYmxlPzogSUNhbGVuZGFyUHJvcHNbJ2lzRGF5UGlja2VyVmlzaWJsZSddO1xyXG4gIEBJbnB1dCgpIHNob3dNb250aFBpY2tlckFzT3ZlcmxheT86IElDYWxlbmRhclByb3BzWydzaG93TW9udGhQaWNrZXJBc092ZXJsYXknXTtcclxuICBASW5wdXQoKSB0b2RheT86IElDYWxlbmRhclByb3BzWyd0b2RheSddO1xyXG4gIEBJbnB1dCgpIHZhbHVlPzogSUNhbGVuZGFyUHJvcHNbJ3ZhbHVlJ107XHJcbiAgQElucHV0KCkgZmlyc3REYXlPZldlZWs/OiBJQ2FsZW5kYXJQcm9wc1snZmlyc3REYXlPZldlZWsnXTtcclxuICBASW5wdXQoKSBkYXRlUmFuZ2VUeXBlPzogSUNhbGVuZGFyUHJvcHNbJ2RhdGVSYW5nZVR5cGUnXTtcclxuICBASW5wdXQoKSBhdXRvTmF2aWdhdGVPblNlbGVjdGlvbj86IElDYWxlbmRhclByb3BzWydhdXRvTmF2aWdhdGVPblNlbGVjdGlvbiddO1xyXG4gIEBJbnB1dCgpIHNob3dHb1RvVG9kYXk/OiBJQ2FsZW5kYXJQcm9wc1snc2hvd0dvVG9Ub2RheSddO1xyXG4gIEBJbnB1dCgpIHN0cmluZ3M6IElDYWxlbmRhclByb3BzWydzdHJpbmdzJ107XHJcbiAgQElucHV0KCkgaGlnaGxpZ2h0Q3VycmVudE1vbnRoPzogSUNhbGVuZGFyUHJvcHNbJ2hpZ2hsaWdodEN1cnJlbnRNb250aCddO1xyXG4gIEBJbnB1dCgpIGhpZ2hsaWdodFNlbGVjdGVkTW9udGg/OiBJQ2FsZW5kYXJQcm9wc1snaGlnaGxpZ2h0U2VsZWN0ZWRNb250aCddO1xyXG4gIEBJbnB1dCgpIG5hdmlnYXRpb25JY29ucz86IElDYWxlbmRhclByb3BzWyduYXZpZ2F0aW9uSWNvbnMnXTtcclxuICBASW5wdXQoKSBzaG93V2Vla051bWJlcnM/OiBJQ2FsZW5kYXJQcm9wc1snc2hvd1dlZWtOdW1iZXJzJ107XHJcbiAgQElucHV0KCkgZmlyc3RXZWVrT2ZZZWFyPzogSUNhbGVuZGFyUHJvcHNbJ2ZpcnN0V2Vla09mWWVhciddO1xyXG4gIEBJbnB1dCgpIGRhdGVUaW1lRm9ybWF0dGVyPzogSUNhbGVuZGFyUHJvcHNbJ2RhdGVUaW1lRm9ybWF0dGVyJ107XHJcbiAgQElucHV0KCkgbWluRGF0ZT86IElDYWxlbmRhclByb3BzWydtaW5EYXRlJ107XHJcbiAgQElucHV0KCkgbWF4RGF0ZT86IElDYWxlbmRhclByb3BzWydtYXhEYXRlJ107XHJcbiAgQElucHV0KCkgcmVzdHJpY3RlZERhdGVzPzogSUNhbGVuZGFyUHJvcHNbJ3Jlc3RyaWN0ZWREYXRlcyddO1xyXG4gIEBJbnB1dCgpIHNob3dTaXhXZWVrc0J5RGVmYXVsdD86IElDYWxlbmRhclByb3BzWydzaG93U2l4V2Vla3NCeURlZmF1bHQnXTtcclxuICBASW5wdXQoKSB3b3JrV2Vla0RheXM/OiBJQ2FsZW5kYXJQcm9wc1snd29ya1dlZWtEYXlzJ107XHJcbiAgQElucHV0KCkgc2VsZWN0RGF0ZU9uQ2xpY2s/OiBJQ2FsZW5kYXJQcm9wc1snc2VsZWN0RGF0ZU9uQ2xpY2snXTtcclxuICBASW5wdXQoKSBzaG93Q2xvc2VCdXR0b24/OiBJQ2FsZW5kYXJQcm9wc1snc2hvd0Nsb3NlQnV0dG9uJ107XHJcbiAgQElucHV0KCkgYWxsRm9jdXNhYmxlPzogSUNhbGVuZGFyUHJvcHNbJ2FsbEZvY3VzYWJsZSddO1xyXG4gIEBJbnB1dCgpIHllYXJQaWNrZXJIaWRkZW4/OiBJQ2FsZW5kYXJQcm9wc1sneWVhclBpY2tlckhpZGRlbiddO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25TZWxlY3REYXRlID0gbmV3IEV2ZW50RW1pdHRlcjx7IGRhdGU6IERhdGU7IHNlbGVjdGVkRGF0ZVJhbmdlQXJyYXk/OiBEYXRlW10gfT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25EaXNtaXNzID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBAQ29udGVudENoaWxkKENhbGVuZGFyU3RyaW5nc0RpcmVjdGl2ZSwgeyBzdGF0aWM6IHRydWUgfSkgcmVhZG9ubHkgY2FsZW5kYXJTdHJpbmdzRGlyZWN0aXZlPzogQ2FsZW5kYXJTdHJpbmdzRGlyZWN0aXZlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcik7XHJcbiAgICAvLyBjb21pbmcgZnJvbSBSZWFjdCBjb250ZXh0IC0gd2UgbmVlZCB0byBiaW5kIHRvIHRoaXMgc28gd2UgY2FuIGFjY2VzcyB0aGUgQW5ndWxhciBDb21wb25lbnQgcHJvcGVydGllc1xyXG4gICAgdGhpcy5vblNlbGVjdERhdGVIYW5kbGVyID0gdGhpcy5vblNlbGVjdERhdGVIYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uRGlzbWlzc0hhbmRsZXIgPSB0aGlzLm9uRGlzbWlzc0hhbmRsZXIuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmNhbGVuZGFyU3RyaW5nc0RpcmVjdGl2ZSkge1xyXG4gICAgICB0aGlzLl9pbml0RGlyZWN0aXZlKHRoaXMuY2FsZW5kYXJTdHJpbmdzRGlyZWN0aXZlKTtcclxuICAgICAgc3VwZXIubmdBZnRlckNvbnRlbnRJbml0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblNlbGVjdERhdGVIYW5kbGVyKGRhdGU6IERhdGUsIHNlbGVjdGVkRGF0ZVJhbmdlQXJyYXk/OiBEYXRlW10pIHtcclxuICAgIHRoaXMub25TZWxlY3REYXRlLmVtaXQoe1xyXG4gICAgICBkYXRlLFxyXG4gICAgICBzZWxlY3RlZERhdGVSYW5nZUFycmF5LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbkRpc21pc3NIYW5kbGVyKCkge1xyXG4gICAgdGhpcy5vbkRpc21pc3MuZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfaW5pdERpcmVjdGl2ZShjYWxlbmRhclN0cmluZ3NEaXJlY3RpdmU6IENhbGVuZGFyU3RyaW5nc0RpcmVjdGl2ZSkge1xyXG4gICAgdGhpcy5zdHJpbmdzID0gY2FsZW5kYXJTdHJpbmdzRGlyZWN0aXZlLnN0cmluZ3M7XHJcbiAgfVxyXG59XHJcbiJdfQ==