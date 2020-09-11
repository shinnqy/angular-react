/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { registerElement } from '@angular-react/core';
import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import * as CalendarCss from 'office-ui-fabric-react/lib-amd/components/Calendar/Calendar.scss';
import { Calendar } from 'office-ui-fabric-react/lib/Calendar';
import { noop } from 'angular-react-toolkit/utils/noop';
import { FabCalendarComponent } from './calendar.component';
import { CalendarStringsDirective } from './directives/calendar-strings-directive.component';
// Dummy action to force CalendarCss to load and not be tree-shaken away.
noop(CalendarCss);
/** @type {?} */
var declarations = [FabCalendarComponent, CalendarStringsDirective];
var FabCalendarModule = /** @class */ (function () {
    function FabCalendarModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Calendar', (/**
         * @return {?}
         */
        function () { return Calendar; }));
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
    FabCalendarModule.ctorParameters = function () { return []; };
    return FabCalendarModule;
}());
export { FabCalendarModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljL2xpYi9jb21wb25lbnRzL2NhbGVuZGFyLyIsInNvdXJjZXMiOlsiY2FsZW5kYXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEtBQUssV0FBVyxNQUFNLGtFQUFrRSxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMvRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDeEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sbURBQW1ELENBQUM7O0FBRzdGLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzs7SUFFWixZQUFZLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSx3QkFBd0IsQ0FBQztBQUVyRTtJQU9FO1FBQ0UsaUVBQWlFO1FBQ2pFLGVBQWUsQ0FBQyxVQUFVOzs7UUFBRSxjQUFNLE9BQUEsUUFBUSxFQUFSLENBQVEsRUFBQyxDQUFDO0lBQzlDLENBQUM7O2dCQVZGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLFlBQVksRUFBRSxZQUFZO29CQUMxQixPQUFPLEVBQUUsWUFBWTtvQkFDckIsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7aUJBQzVCOzs7O0lBTUQsd0JBQUM7Q0FBQSxBQVhELElBV0M7U0FMWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSAnQGFuZ3VsYXItcmVhY3QvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIENhbGVuZGFyQ3NzIGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliLWFtZC9jb21wb25lbnRzL0NhbGVuZGFyL0NhbGVuZGFyLnNjc3MnO1xyXG5pbXBvcnQgeyBDYWxlbmRhciB9IGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliL0NhbGVuZGFyJztcclxuaW1wb3J0IHsgbm9vcCB9IGZyb20gJ2FuZ3VsYXItcmVhY3QtdG9vbGtpdC91dGlscy9ub29wJztcclxuaW1wb3J0IHsgRmFiQ2FsZW5kYXJDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENhbGVuZGFyU3RyaW5nc0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9jYWxlbmRhci1zdHJpbmdzLWRpcmVjdGl2ZS5jb21wb25lbnQnO1xyXG5cclxuLy8gRHVtbXkgYWN0aW9uIHRvIGZvcmNlIENhbGVuZGFyQ3NzIHRvIGxvYWQgYW5kIG5vdCBiZSB0cmVlLXNoYWtlbiBhd2F5LlxyXG5ub29wKENhbGVuZGFyQ3NzKTtcclxuXHJcbmNvbnN0IGRlY2xhcmF0aW9ucyA9IFtGYWJDYWxlbmRhckNvbXBvbmVudCwgQ2FsZW5kYXJTdHJpbmdzRGlyZWN0aXZlXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBkZWNsYXJhdGlvbnMsXHJcbiAgZXhwb3J0czogZGVjbGFyYXRpb25zLFxyXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZhYkNhbGVuZGFyTW9kdWxlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vIEFkZCBhbnkgUmVhY3QgZWxlbWVudHMgdG8gdGhlIHJlZ2lzdHJ5ICh1c2VkIGJ5IHRoZSByZW5kZXJlcikuXHJcbiAgICByZWdpc3RlckVsZW1lbnQoJ0NhbGVuZGFyJywgKCkgPT4gQ2FsZW5kYXIpO1xyXG4gIH1cclxufVxyXG4iXX0=