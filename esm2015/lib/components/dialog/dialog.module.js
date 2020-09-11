/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { registerElement } from '@angular-react/core';
import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Dialog, DialogContent, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { FabDialogComponent, FabDialogContentComponent, FabDialogFooterComponent } from './dialog.component';
/** @type {?} */
const components = [FabDialogComponent, FabDialogContentComponent, FabDialogFooterComponent];
export class FabDialogModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Dialog', (/**
         * @return {?}
         */
        () => Dialog));
        registerElement('DialogContent', (/**
         * @return {?}
         */
        () => DialogContent));
        registerElement('DialogFooter', (/**
         * @return {?}
         */
        () => DialogFooter));
    }
}
FabDialogModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components,
                exports: components,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabDialogModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy9saWIvY29tcG9uZW50cy9kaWFsb2cvIiwic291cmNlcyI6WyJkaWFsb2cubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN4RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUseUJBQXlCLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7TUFFdkcsVUFBVSxHQUFHLENBQUMsa0JBQWtCLEVBQUUseUJBQXlCLEVBQUUsd0JBQXdCLENBQUM7QUFRNUYsTUFBTSxPQUFPLGVBQWU7SUFDMUI7UUFDRSxpRUFBaUU7UUFDakUsZUFBZSxDQUFDLFFBQVE7OztRQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU0sRUFBQyxDQUFDO1FBQ3hDLGVBQWUsQ0FBQyxlQUFlOzs7UUFBRSxHQUFHLEVBQUUsQ0FBQyxhQUFhLEVBQUMsQ0FBQztRQUN0RCxlQUFlLENBQUMsY0FBYzs7O1FBQUUsR0FBRyxFQUFFLENBQUMsWUFBWSxFQUFDLENBQUM7SUFDdEQsQ0FBQzs7O1lBWkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsWUFBWSxFQUFFLFVBQVU7Z0JBQ3hCLE9BQU8sRUFBRSxVQUFVO2dCQUNuQixPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQzthQUM1QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGlhbG9nLCBEaWFsb2dDb250ZW50LCBEaWFsb2dGb290ZXIgfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9EaWFsb2cnO1xyXG5pbXBvcnQgeyBGYWJEaWFsb2dDb21wb25lbnQsIEZhYkRpYWxvZ0NvbnRlbnRDb21wb25lbnQsIEZhYkRpYWxvZ0Zvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vZGlhbG9nLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBjb21wb25lbnRzID0gW0ZhYkRpYWxvZ0NvbXBvbmVudCwgRmFiRGlhbG9nQ29udGVudENvbXBvbmVudCwgRmFiRGlhbG9nRm9vdGVyQ29tcG9uZW50XTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBjb21wb25lbnRzLFxyXG4gIGV4cG9ydHM6IGNvbXBvbmVudHMsXHJcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmFiRGlhbG9nTW9kdWxlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vIEFkZCBhbnkgUmVhY3QgZWxlbWVudHMgdG8gdGhlIHJlZ2lzdHJ5ICh1c2VkIGJ5IHRoZSByZW5kZXJlcikuXHJcbiAgICByZWdpc3RlckVsZW1lbnQoJ0RpYWxvZycsICgpID0+IERpYWxvZyk7XHJcbiAgICByZWdpc3RlckVsZW1lbnQoJ0RpYWxvZ0NvbnRlbnQnLCAoKSA9PiBEaWFsb2dDb250ZW50KTtcclxuICAgIHJlZ2lzdGVyRWxlbWVudCgnRGlhbG9nRm9vdGVyJywgKCkgPT4gRGlhbG9nRm9vdGVyKTtcclxuICB9XHJcbn1cclxuIl19