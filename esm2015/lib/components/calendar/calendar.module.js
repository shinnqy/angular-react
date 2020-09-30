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
import { noop } from '@angular-react/fabric/lib/utils';
import { FabCalendarComponent } from './calendar.component';
import { CalendarStringsDirective } from './directives/calendar-strings-directive.component';
// Dummy action to force CalendarCss to load and not be tree-shaken away.
noop(CalendarCss);
/** @type {?} */
const declarations = [FabCalendarComponent, CalendarStringsDirective];
export class FabCalendarModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2FsZW5kYXIvY2FsZW5kYXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEtBQUssV0FBVyxNQUFNLGtFQUFrRSxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMvRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sbURBQW1ELENBQUM7O0FBRzdGLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzs7TUFFWixZQUFZLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSx3QkFBd0IsQ0FBQztBQVFyRSxNQUFNLE9BQU8saUJBQWlCO0lBQzVCO1FBQ0UsaUVBQWlFO1FBQ2pFLGVBQWUsQ0FBQyxVQUFVOzs7UUFBRSxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUMsQ0FBQztJQUM5QyxDQUFDOzs7WUFWRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN2QixZQUFZLEVBQUUsWUFBWTtnQkFDMUIsT0FBTyxFQUFFLFlBQVk7Z0JBQ3JCLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO2FBQzVCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBDYWxlbmRhckNzcyBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi1hbWQvY29tcG9uZW50cy9DYWxlbmRhci9DYWxlbmRhci5zY3NzJztcclxuaW1wb3J0IHsgQ2FsZW5kYXIgfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9DYWxlbmRhcic7XHJcbmltcG9ydCB7IG5vb3AgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9mYWJyaWMvbGliL3V0aWxzJztcclxuaW1wb3J0IHsgRmFiQ2FsZW5kYXJDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENhbGVuZGFyU3RyaW5nc0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9jYWxlbmRhci1zdHJpbmdzLWRpcmVjdGl2ZS5jb21wb25lbnQnO1xyXG5cclxuLy8gRHVtbXkgYWN0aW9uIHRvIGZvcmNlIENhbGVuZGFyQ3NzIHRvIGxvYWQgYW5kIG5vdCBiZSB0cmVlLXNoYWtlbiBhd2F5LlxyXG5ub29wKENhbGVuZGFyQ3NzKTtcclxuXHJcbmNvbnN0IGRlY2xhcmF0aW9ucyA9IFtGYWJDYWxlbmRhckNvbXBvbmVudCwgQ2FsZW5kYXJTdHJpbmdzRGlyZWN0aXZlXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBkZWNsYXJhdGlvbnMsXHJcbiAgZXhwb3J0czogZGVjbGFyYXRpb25zLFxyXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZhYkNhbGVuZGFyTW9kdWxlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vIEFkZCBhbnkgUmVhY3QgZWxlbWVudHMgdG8gdGhlIHJlZ2lzdHJ5ICh1c2VkIGJ5IHRoZSByZW5kZXJlcikuXHJcbiAgICByZWdpc3RlckVsZW1lbnQoJ0NhbGVuZGFyJywgKCkgPT4gQ2FsZW5kYXIpO1xyXG4gIH1cclxufVxyXG4iXX0=