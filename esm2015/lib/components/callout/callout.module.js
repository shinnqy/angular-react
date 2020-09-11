/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { registerElement } from '@angular-react/core';
import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Callout, FocusTrapCallout } from 'office-ui-fabric-react/lib/Callout';
import { FabCalloutComponent } from './callout.component';
/** @type {?} */
const components = [FabCalloutComponent];
export class FabCalloutModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Callout', (/**
         * @return {?}
         */
        () => Callout));
        registerElement('FocusTrapCallout', (/**
         * @return {?}
         */
        () => FocusTrapCallout));
    }
}
FabCalloutModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components,
                exports: components,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabCalloutModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbG91dC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvbGliL2NvbXBvbmVudHMvY2FsbG91dC8iLCJzb3VyY2VzIjpbImNhbGxvdXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDL0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUJBQXFCLENBQUM7O01BRXBELFVBQVUsR0FBRyxDQUFDLG1CQUFtQixDQUFDO0FBUXhDLE1BQU0sT0FBTyxnQkFBZ0I7SUFDM0I7UUFDRSxpRUFBaUU7UUFDakUsZUFBZSxDQUFDLFNBQVM7OztRQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sRUFBQyxDQUFDO1FBQzFDLGVBQWUsQ0FBQyxrQkFBa0I7OztRQUFFLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixFQUFDLENBQUM7SUFDOUQsQ0FBQzs7O1lBWEYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsWUFBWSxFQUFFLFVBQVU7Z0JBQ3hCLE9BQU8sRUFBRSxVQUFVO2dCQUNuQixPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQzthQUM1QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2FsbG91dCwgRm9jdXNUcmFwQ2FsbG91dCB9IGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliL0NhbGxvdXQnO1xyXG5pbXBvcnQgeyBGYWJDYWxsb3V0Q29tcG9uZW50IH0gZnJvbSAnLi9jYWxsb3V0LmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBjb21wb25lbnRzID0gW0ZhYkNhbGxvdXRDb21wb25lbnRdO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IGNvbXBvbmVudHMsXHJcbiAgZXhwb3J0czogY29tcG9uZW50cyxcclxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYWJDYWxsb3V0TW9kdWxlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vIEFkZCBhbnkgUmVhY3QgZWxlbWVudHMgdG8gdGhlIHJlZ2lzdHJ5ICh1c2VkIGJ5IHRoZSByZW5kZXJlcikuXHJcbiAgICByZWdpc3RlckVsZW1lbnQoJ0NhbGxvdXQnLCAoKSA9PiBDYWxsb3V0KTtcclxuICAgIHJlZ2lzdGVyRWxlbWVudCgnRm9jdXNUcmFwQ2FsbG91dCcsICgpID0+IEZvY3VzVHJhcENhbGxvdXQpO1xyXG4gIH1cclxufVxyXG4iXX0=