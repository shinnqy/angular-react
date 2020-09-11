/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { registerElement } from '@angular-react/core';
import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { GroupedList } from 'office-ui-fabric-react/lib/GroupedList';
import { FabGroupedListComponent } from './grouped-list.component';
/** @type {?} */
const components = [FabGroupedListComponent];
export class FabGroupedListModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('GroupedList', (/**
         * @return {?}
         */
        () => GroupedList));
    }
}
FabGroupedListModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components,
                exports: components,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabGroupedListModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXBlZC1saXN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy9saWIvY29tcG9uZW50cy9ncm91cGVkLWxpc3QvIiwic291cmNlcyI6WyJncm91cGVkLWxpc3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDckUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7O01BRTdELFVBQVUsR0FBRyxDQUFDLHVCQUF1QixDQUFDO0FBUTVDLE1BQU0sT0FBTyxvQkFBb0I7SUFDL0I7UUFDRSxpRUFBaUU7UUFDakUsZUFBZSxDQUFDLGFBQWE7OztRQUFFLEdBQUcsRUFBRSxDQUFDLFdBQVcsRUFBQyxDQUFDO0lBQ3BELENBQUM7OztZQVZGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZCLFlBQVksRUFBRSxVQUFVO2dCQUN4QixPQUFPLEVBQUUsVUFBVTtnQkFDbkIsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7YUFDNUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSAnQGFuZ3VsYXItcmVhY3QvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEdyb3VwZWRMaXN0IH0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvR3JvdXBlZExpc3QnO1xyXG5pbXBvcnQgeyBGYWJHcm91cGVkTGlzdENvbXBvbmVudCB9IGZyb20gJy4vZ3JvdXBlZC1saXN0LmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBjb21wb25lbnRzID0gW0ZhYkdyb3VwZWRMaXN0Q29tcG9uZW50XTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBjb21wb25lbnRzLFxyXG4gIGV4cG9ydHM6IGNvbXBvbmVudHMsXHJcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmFiR3JvdXBlZExpc3RNb2R1bGUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy8gQWRkIGFueSBSZWFjdCBlbGVtZW50cyB0byB0aGUgcmVnaXN0cnkgKHVzZWQgYnkgdGhlIHJlbmRlcmVyKS5cclxuICAgIHJlZ2lzdGVyRWxlbWVudCgnR3JvdXBlZExpc3QnLCAoKSA9PiBHcm91cGVkTGlzdCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==