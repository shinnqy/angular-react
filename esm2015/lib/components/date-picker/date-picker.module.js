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
const components = [FabDatePickerComponent];
export class FabDatePickerModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljL2xpYi9jb21wb25lbnRzL2RhdGUtcGlja2VyLyIsInNvdXJjZXMiOlsiZGF0ZS1waWNrZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDbkUsT0FBTyxLQUFLLFdBQVcsTUFBTSxrRUFBa0UsQ0FBQztBQUNoRyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDeEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0seUJBQXlCLENBQUM7O0FBR2pFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzs7TUFFWixVQUFVLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQztBQVEzQyxNQUFNLE9BQU8sbUJBQW1CO0lBQzlCO1FBQ0UsaUVBQWlFO1FBQ2pFLGVBQWUsQ0FBQyxZQUFZOzs7UUFBRSxHQUFHLEVBQUUsQ0FBQyxVQUFVLEVBQUMsQ0FBQztJQUNsRCxDQUFDOzs7WUFWRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN2QixZQUFZLEVBQUUsVUFBVTtnQkFDeEIsT0FBTyxFQUFFLFVBQVU7Z0JBQ25CLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO2FBQzVCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvRGF0ZVBpY2tlcic7XHJcbmltcG9ydCAqIGFzIENhbGVuZGFyQ3NzIGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliLWFtZC9jb21wb25lbnRzL0NhbGVuZGFyL0NhbGVuZGFyLnNjc3MnO1xyXG5pbXBvcnQgeyBub29wIH0gZnJvbSAnYW5ndWxhci1yZWFjdC10b29sa2l0L3V0aWxzL25vb3AnO1xyXG5pbXBvcnQgeyBGYWJEYXRlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlLXBpY2tlci5jb21wb25lbnQnO1xyXG5cclxuLy8gRHVtbXkgYWN0aW9uIHRvIGZvcmNlIENhbGVuZGFyQ3NzIHRvIGxvYWQgYW5kIG5vdCBiZSB0cmVlLXNoYWtlbiBhd2F5LlxyXG5ub29wKENhbGVuZGFyQ3NzKTtcclxuXHJcbmNvbnN0IGNvbXBvbmVudHMgPSBbRmFiRGF0ZVBpY2tlckNvbXBvbmVudF07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogY29tcG9uZW50cyxcclxuICBleHBvcnRzOiBjb21wb25lbnRzLFxyXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZhYkRhdGVQaWNrZXJNb2R1bGUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy8gQWRkIGFueSBSZWFjdCBlbGVtZW50cyB0byB0aGUgcmVnaXN0cnkgKHVzZWQgYnkgdGhlIHJlbmRlcmVyKS5cclxuICAgIHJlZ2lzdGVyRWxlbWVudCgnRGF0ZVBpY2tlcicsICgpID0+IERhdGVQaWNrZXIpO1xyXG4gIH1cclxufVxyXG4iXX0=