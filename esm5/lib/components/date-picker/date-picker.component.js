/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild, } from '@angular/core';
var FabDatePickerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabDatePickerComponent, _super);
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
export { FabDatePickerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljL2xpYi9jb21wb25lbnRzL2RhdGUtcGlja2VyLyIsInNvdXJjZXMiOlsiZGF0ZS1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM1RCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFHdkI7SUFrRDRDLGtEQUF1QztJQTRDakYsZ0NBQVksVUFBc0IsRUFBRSxpQkFBb0MsRUFBRSxRQUFtQjtRQUE3RixZQUNFLGtCQUFNLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLENBQUMsU0FHL0M7UUFQa0Isa0JBQVksR0FBRyxJQUFJLFlBQVksRUFBcUMsQ0FBQztRQUNyRSx3QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBSy9ELEtBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDOztJQUNqRSxDQUFDOzs7OztJQUVELG9EQUFtQjs7OztJQUFuQixVQUFvQixJQUE2QjtRQUMvQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztZQUNyQixJQUFJLE1BQUE7U0FDTCxDQUFDLENBQUM7SUFDTCxDQUFDOztnQkF4R0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUUsMmpEQTJDVDtvQkFFRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs2QkFEdEMsZ0JBQWdCO2lCQUUxQjs7OztnQkExREMsVUFBVTtnQkFGVixpQkFBaUI7Z0JBTWpCLFNBQVM7OzsrQkF3RFIsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7K0JBRXZDLEtBQUs7d0JBQ0wsS0FBSzsrQkFDTCxLQUFLO2dDQUNMLEtBQUs7NEJBQ0wsS0FBSzs2QkFDTCxLQUFLO3dCQUNMLEtBQUs7NkJBQ0wsS0FBSzsyQkFDTCxLQUFLOzRCQUNMLEtBQUs7NkJBQ0wsS0FBSztrQ0FDTCxLQUFLO3VDQUNMLEtBQUs7MkNBQ0wsS0FBSztpQ0FDTCxLQUFLO21DQUNMLEtBQUs7OEJBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7NkJBQ0wsS0FBSztzQ0FDTCxLQUFLO2lDQUNMLEtBQUs7MEJBQ0wsS0FBSzt3Q0FDTCxLQUFLO3lDQUNMLEtBQUs7a0NBQ0wsS0FBSztrQ0FDTCxLQUFLO2dDQUNMLEtBQUs7NkJBQ0wsS0FBSzs0QkFDTCxLQUFLO29DQUNMLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLO29DQUNMLEtBQUs7K0JBQ0wsS0FBSztrQ0FDTCxLQUFLOzJCQUNMLEtBQUs7K0JBRUwsTUFBTTtxQ0FDTixNQUFNOztJQWFULDZCQUFDO0NBQUEsQUF6R0QsQ0FrRDRDLHFCQUFxQixHQXVEaEU7U0F2RFksc0JBQXNCOzs7Ozs7SUFDakMsOENBQTZFOztJQUU3RSw4Q0FBeUQ7O0lBQ3pELHVDQUEyQzs7SUFDM0MsOENBQXlEOztJQUN6RCwrQ0FBMkQ7O0lBQzNELDJDQUFtRDs7SUFDbkQsNENBQXFEOztJQUNyRCx1Q0FBMkM7O0lBQzNDLDRDQUFxRDs7SUFDckQsMENBQWlEOztJQUNqRCwyQ0FBbUQ7O0lBQ25ELDRDQUFxRDs7SUFDckQsaURBQStEOztJQUMvRCxzREFBeUU7O0lBQ3pFLDBEQUFpRjs7SUFDakYsZ0RBQTZEOztJQUM3RCxrREFBaUU7O0lBQ2pFLDZDQUF1RDs7SUFDdkQsdUNBQTJDOztJQUMzQyx1Q0FBMkM7O0lBQzNDLDRDQUFxRDs7SUFDckQscURBQXVFOztJQUN2RSxnREFBNkQ7O0lBQzdELHlDQUErQzs7SUFDL0MsdURBQTJFOztJQUMzRSx3REFBNkU7O0lBQzdFLGlEQUErRDs7SUFDL0QsaURBQStEOztJQUMvRCwrQ0FBMkQ7O0lBQzNELDRDQUFxRDs7SUFDckQsMkNBQW1EOztJQUNuRCxtREFBbUU7O0lBQ25FLHlDQUErQzs7SUFDL0MseUNBQStDOztJQUMvQyxtREFBbUU7O0lBQ25FLDhDQUF5RDs7SUFDekQsaURBQStEOztJQUMvRCwwQ0FBaUQ7O0lBRWpELDhDQUF3Rjs7SUFDeEYsb0RBQWlFIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IFJlYWN0V3JhcHBlckNvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFZpZXdDaGlsZCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSURhdGVQaWNrZXJQcm9wcyB9IGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliL0RhdGVQaWNrZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmYWItZGF0ZS1waWNrZXInLFxyXG4gIGV4cG9ydEFzOiAnZmFiRGF0ZVBpY2tlcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICNyZWFjdE5vZGVcclxuICAgICAgW2NvbXBvbmVudFJlZl09XCJjb21wb25lbnRSZWZcIlxyXG4gICAgICBbdGhlbWVdPVwidGhlbWVcIlxyXG4gICAgICBbY2FsZW5kYXJQcm9wc109XCJjYWxlbmRhclByb3BzXCJcclxuICAgICAgW3RleHRGaWVsZF09XCJ0ZXh0RmllbGRcIlxyXG4gICAgICBbY2FsbG91dFByb3BzXT1cImNhbGxvdXRQcm9wc1wiXHJcbiAgICAgIFtjYWxlbmRhckFzXT1cImNhbGVuZGFyQXNcIlxyXG4gICAgICBbbGFiZWxdPVwibGFiZWxcIlxyXG4gICAgICBbaXNSZXF1aXJlZF09XCJpc1JlcXVpcmVkXCJcclxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgW2FyaWFMYWJlbF09XCJhcmlhTGFiZWxcIlxyXG4gICAgICBbdW5kZXJsaW5lZF09XCJ1bmRlcmxpbmVkXCJcclxuICAgICAgW3BpY2tlckFyaWFMYWJlbF09XCJwaWNrZXJBcmlhTGFiZWxcIlxyXG4gICAgICBbaXNNb250aFBpY2tlclZpc2libGVdPVwiaXNNb250aFBpY2tlclZpc2libGVcIlxyXG4gICAgICBbc2hvd01vbnRoUGlja2VyQXNPdmVybGF5XT1cInNob3dNb250aFBpY2tlckFzT3ZlcmxheVwiXHJcbiAgICAgIFthbGxvd1RleHRJbnB1dF09XCJhbGxvd1RleHRJbnB1dFwiXHJcbiAgICAgIFtkaXNhYmxlQXV0b0ZvY3VzXT1cImRpc2FibGVBdXRvRm9jdXNcIlxyXG4gICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxyXG4gICAgICBbdG9kYXldPVwidG9kYXlcIlxyXG4gICAgICBbdmFsdWVdPVwidmFsdWVcIlxyXG4gICAgICBbZm9ybWF0RGF0ZV09XCJmb3JtYXREYXRlXCJcclxuICAgICAgW3BhcnNlRGF0ZUZyb21TdHJpbmddPVwicGFyc2VEYXRlRnJvbVN0cmluZ1wiXHJcbiAgICAgIFtmaXJzdERheU9mV2Vla109XCJmaXJzdERheU9mV2Vla1wiXHJcbiAgICAgIFtzdHJpbmdzXT1cInN0cmluZ3NcIlxyXG4gICAgICBbaGlnaGxpZ2h0Q3VycmVudE1vbnRoXT1cImhpZ2hsaWdodEN1cnJlbnRNb250aFwiXHJcbiAgICAgIFtoaWdobGlnaHRTZWxlY3RlZE1vbnRoXT1cImhpZ2hsaWdodFNlbGVjdGVkTW9udGhcIlxyXG4gICAgICBbc2hvd1dlZWtOdW1iZXJzXT1cInNob3dXZWVrTnVtYmVyc1wiXHJcbiAgICAgIFtmaXJzdFdlZWtPZlllYXJdPVwiZmlyc3RXZWVrT2ZZZWFyXCJcclxuICAgICAgW3Nob3dHb1RvVG9kYXldPVwic2hvd0dvVG9Ub2RheVwiXHJcbiAgICAgIFtib3JkZXJsZXNzXT1cImJvcmRlcmxlc3NcIlxyXG4gICAgICBbY2xhc3NOYW1lXT1cImNsYXNzTmFtZVwiXHJcbiAgICAgIFtkYXRlVGltZUZvcm1hdHRlcl09XCJkYXRlVGltZUZvcm1hdHRlclwiXHJcbiAgICAgIFttaW5EYXRlXT1cIm1pbkRhdGVcIlxyXG4gICAgICBbbWF4RGF0ZV09XCJtYXhEYXRlXCJcclxuICAgICAgW2luaXRpYWxQaWNrZXJEYXRlXT1cImluaXRpYWxQaWNrZXJEYXRlXCJcclxuICAgICAgW2FsbEZvY3VzYWJsZV09XCJhbGxGb2N1c2FibGVcIlxyXG4gICAgICBbc2hvd0Nsb3NlQnV0dG9uXT1cInNob3dDbG9zZUJ1dHRvblwiXHJcbiAgICAgIFtTZWxlY3REYXRlXT1cIm9uU2VsZWN0RGF0ZUhhbmRsZXJcIlxyXG4gICAgICAob25BZnRlck1lbnVEaXNtaXNzKT1cIm9uQWZ0ZXJNZW51RGlzbWlzcy5lbWl0KClcIlxyXG4gICAgPlxyXG4gICAgPC9EYXRlUGlja2VyPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbJ3JlYWN0LXJlbmRlcmVyJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYWJEYXRlUGlja2VyQ29tcG9uZW50IGV4dGVuZHMgUmVhY3RXcmFwcGVyQ29tcG9uZW50PElEYXRlUGlja2VyUHJvcHM+IHtcclxuICBAVmlld0NoaWxkKCdyZWFjdE5vZGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcm90ZWN0ZWQgcmVhY3ROb2RlUmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICBASW5wdXQoKSBjb21wb25lbnRSZWY/OiBJRGF0ZVBpY2tlclByb3BzWydjb21wb25lbnRSZWYnXTtcclxuICBASW5wdXQoKSB0aGVtZT86IElEYXRlUGlja2VyUHJvcHNbJ3RoZW1lJ107XHJcbiAgQElucHV0KCkgY2FsbG91dFByb3BzPzogSURhdGVQaWNrZXJQcm9wc1snY2FsbG91dFByb3BzJ107XHJcbiAgQElucHV0KCkgY2FsZW5kYXJQcm9wcz86IElEYXRlUGlja2VyUHJvcHNbJ2NhbGVuZGFyUHJvcHMnXTtcclxuICBASW5wdXQoKSB0ZXh0RmllbGQ/OiBJRGF0ZVBpY2tlclByb3BzWyd0ZXh0RmllbGQnXTtcclxuICBASW5wdXQoKSBjYWxlbmRhckFzPzogSURhdGVQaWNrZXJQcm9wc1snY2FsZW5kYXJBcyddO1xyXG4gIEBJbnB1dCgpIGxhYmVsPzogSURhdGVQaWNrZXJQcm9wc1snbGFiZWwnXTtcclxuICBASW5wdXQoKSBpc1JlcXVpcmVkPzogSURhdGVQaWNrZXJQcm9wc1snaXNSZXF1aXJlZCddO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkPzogSURhdGVQaWNrZXJQcm9wc1snZGlzYWJsZWQnXTtcclxuICBASW5wdXQoKSBhcmlhTGFiZWw/OiBJRGF0ZVBpY2tlclByb3BzWydhcmlhTGFiZWwnXTtcclxuICBASW5wdXQoKSB1bmRlcmxpbmVkPzogSURhdGVQaWNrZXJQcm9wc1sndW5kZXJsaW5lZCddO1xyXG4gIEBJbnB1dCgpIHBpY2tlckFyaWFMYWJlbD86IElEYXRlUGlja2VyUHJvcHNbJ3BpY2tlckFyaWFMYWJlbCddO1xyXG4gIEBJbnB1dCgpIGlzTW9udGhQaWNrZXJWaXNpYmxlPzogSURhdGVQaWNrZXJQcm9wc1snaXNNb250aFBpY2tlclZpc2libGUnXTtcclxuICBASW5wdXQoKSBzaG93TW9udGhQaWNrZXJBc092ZXJsYXk/OiBJRGF0ZVBpY2tlclByb3BzWydzaG93TW9udGhQaWNrZXJBc092ZXJsYXknXTtcclxuICBASW5wdXQoKSBhbGxvd1RleHRJbnB1dD86IElEYXRlUGlja2VyUHJvcHNbJ2FsbG93VGV4dElucHV0J107XHJcbiAgQElucHV0KCkgZGlzYWJsZUF1dG9Gb2N1cz86IElEYXRlUGlja2VyUHJvcHNbJ2Rpc2FibGVBdXRvRm9jdXMnXTtcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcj86IElEYXRlUGlja2VyUHJvcHNbJ3BsYWNlaG9sZGVyJ107XHJcbiAgQElucHV0KCkgdG9kYXk/OiBJRGF0ZVBpY2tlclByb3BzWyd0b2RheSddO1xyXG4gIEBJbnB1dCgpIHZhbHVlPzogSURhdGVQaWNrZXJQcm9wc1sndmFsdWUnXTtcclxuICBASW5wdXQoKSBmb3JtYXREYXRlPzogSURhdGVQaWNrZXJQcm9wc1snZm9ybWF0RGF0ZSddO1xyXG4gIEBJbnB1dCgpIHBhcnNlRGF0ZUZyb21TdHJpbmc/OiBJRGF0ZVBpY2tlclByb3BzWydwYXJzZURhdGVGcm9tU3RyaW5nJ107XHJcbiAgQElucHV0KCkgZmlyc3REYXlPZldlZWs/OiBJRGF0ZVBpY2tlclByb3BzWydmaXJzdERheU9mV2VlayddO1xyXG4gIEBJbnB1dCgpIHN0cmluZ3M/OiBJRGF0ZVBpY2tlclByb3BzWydzdHJpbmdzJ107XHJcbiAgQElucHV0KCkgaGlnaGxpZ2h0Q3VycmVudE1vbnRoPzogSURhdGVQaWNrZXJQcm9wc1snaGlnaGxpZ2h0Q3VycmVudE1vbnRoJ107XHJcbiAgQElucHV0KCkgaGlnaGxpZ2h0U2VsZWN0ZWRNb250aD86IElEYXRlUGlja2VyUHJvcHNbJ2hpZ2hsaWdodFNlbGVjdGVkTW9udGgnXTtcclxuICBASW5wdXQoKSBzaG93V2Vla051bWJlcnM/OiBJRGF0ZVBpY2tlclByb3BzWydzaG93V2Vla051bWJlcnMnXTtcclxuICBASW5wdXQoKSBmaXJzdFdlZWtPZlllYXI/OiBJRGF0ZVBpY2tlclByb3BzWydmaXJzdFdlZWtPZlllYXInXTtcclxuICBASW5wdXQoKSBzaG93R29Ub1RvZGF5PzogSURhdGVQaWNrZXJQcm9wc1snc2hvd0dvVG9Ub2RheSddO1xyXG4gIEBJbnB1dCgpIGJvcmRlcmxlc3M/OiBJRGF0ZVBpY2tlclByb3BzWydib3JkZXJsZXNzJ107XHJcbiAgQElucHV0KCkgY2xhc3NOYW1lPzogSURhdGVQaWNrZXJQcm9wc1snY2xhc3NOYW1lJ107XHJcbiAgQElucHV0KCkgZGF0ZVRpbWVGb3JtYXR0ZXI/OiBJRGF0ZVBpY2tlclByb3BzWydkYXRlVGltZUZvcm1hdHRlciddO1xyXG4gIEBJbnB1dCgpIG1pbkRhdGU/OiBJRGF0ZVBpY2tlclByb3BzWydtaW5EYXRlJ107XHJcbiAgQElucHV0KCkgbWF4RGF0ZT86IElEYXRlUGlja2VyUHJvcHNbJ21heERhdGUnXTtcclxuICBASW5wdXQoKSBpbml0aWFsUGlja2VyRGF0ZT86IElEYXRlUGlja2VyUHJvcHNbJ2luaXRpYWxQaWNrZXJEYXRlJ107XHJcbiAgQElucHV0KCkgYWxsRm9jdXNhYmxlPzogSURhdGVQaWNrZXJQcm9wc1snYWxsRm9jdXNhYmxlJ107XHJcbiAgQElucHV0KCkgc2hvd0Nsb3NlQnV0dG9uPzogSURhdGVQaWNrZXJQcm9wc1snc2hvd0Nsb3NlQnV0dG9uJ107XHJcbiAgQElucHV0KCkgdGFiSW5kZXg/OiBJRGF0ZVBpY2tlclByb3BzWyd0YWJJbmRleCddO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25TZWxlY3REYXRlID0gbmV3IEV2ZW50RW1pdHRlcjx7IGRhdGU6IERhdGUgfCBudWxsIHwgdW5kZWZpbmVkIH0+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uQWZ0ZXJNZW51RGlzbWlzcyA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcbiAgICBzdXBlcihlbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXIpO1xyXG5cclxuICAgIHRoaXMub25TZWxlY3REYXRlSGFuZGxlciA9IHRoaXMub25TZWxlY3REYXRlSGFuZGxlci5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgb25TZWxlY3REYXRlSGFuZGxlcihkYXRlOiBEYXRlIHwgbnVsbCB8IHVuZGVmaW5lZCkge1xyXG4gICAgdGhpcy5vblNlbGVjdERhdGUuZW1pdCh7XHJcbiAgICAgIGRhdGUsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19