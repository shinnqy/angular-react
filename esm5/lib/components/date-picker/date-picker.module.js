/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { registerElement } from '@angular-react/core';
import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { DatePicker } from 'office-ui-fabric-react/lib/DatePicker';
import * as CalendarCss from 'office-ui-fabric-react/lib-amd/components/Calendar/Calendar.scss';
import { noop } from 'angular-react-toolkit/utils/noop';
import { FabDatePickerComponent } from './date-picker.component';
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
export { FabDatePickerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljL2xpYi9jb21wb25lbnRzL2RhdGUtcGlja2VyLyIsInNvdXJjZXMiOlsiZGF0ZS1waWNrZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDbkUsT0FBTyxLQUFLLFdBQVcsTUFBTSxrRUFBa0UsQ0FBQztBQUNoRyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDeEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0seUJBQXlCLENBQUM7O0FBR2pFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzs7SUFFWixVQUFVLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQztBQUUzQztJQU9FO1FBQ0UsaUVBQWlFO1FBQ2pFLGVBQWUsQ0FBQyxZQUFZOzs7UUFBRSxjQUFNLE9BQUEsVUFBVSxFQUFWLENBQVUsRUFBQyxDQUFDO0lBQ2xELENBQUM7O2dCQVZGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLFlBQVksRUFBRSxVQUFVO29CQUN4QixPQUFPLEVBQUUsVUFBVTtvQkFDbkIsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7aUJBQzVCOzs7O0lBTUQsMEJBQUM7Q0FBQSxBQVhELElBV0M7U0FMWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSAnQGFuZ3VsYXItcmVhY3QvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9EYXRlUGlja2VyJztcclxuaW1wb3J0ICogYXMgQ2FsZW5kYXJDc3MgZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWItYW1kL2NvbXBvbmVudHMvQ2FsZW5kYXIvQ2FsZW5kYXIuc2Nzcyc7XHJcbmltcG9ydCB7IG5vb3AgfSBmcm9tICdhbmd1bGFyLXJlYWN0LXRvb2xraXQvdXRpbHMvbm9vcCc7XHJcbmltcG9ydCB7IEZhYkRhdGVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGUtcGlja2VyLmNvbXBvbmVudCc7XHJcblxyXG4vLyBEdW1teSBhY3Rpb24gdG8gZm9yY2UgQ2FsZW5kYXJDc3MgdG8gbG9hZCBhbmQgbm90IGJlIHRyZWUtc2hha2VuIGF3YXkuXHJcbm5vb3AoQ2FsZW5kYXJDc3MpO1xyXG5cclxuY29uc3QgY29tcG9uZW50cyA9IFtGYWJEYXRlUGlja2VyQ29tcG9uZW50XTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBjb21wb25lbnRzLFxyXG4gIGV4cG9ydHM6IGNvbXBvbmVudHMsXHJcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmFiRGF0ZVBpY2tlck1vZHVsZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyBBZGQgYW55IFJlYWN0IGVsZW1lbnRzIHRvIHRoZSByZWdpc3RyeSAodXNlZCBieSB0aGUgcmVuZGVyZXIpLlxyXG4gICAgcmVnaXN0ZXJFbGVtZW50KCdEYXRlUGlja2VyJywgKCkgPT4gRGF0ZVBpY2tlcik7XHJcbiAgfVxyXG59XHJcbiJdfQ==