/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { registerElement } from '@angular-react/core';
import { DetailsList } from 'office-ui-fabric-react/lib/DetailsList';
import { FabGroupModule } from '@angular-react/fabric/lib/components/group';
import { FabDetailsListComponent } from './details-list.component';
import { DetailsListColumnDirective, DetailsListColumnRenderDirective, } from './directives/details-list-column.directive';
import { DetailsListColumnsDirective } from './directives/details-list-columns.directive';
import { DetailsListGroupsDirective } from './directives/details-list-groups.directive';
/** @type {?} */
const components = [
    DetailsListColumnDirective,
    DetailsListColumnRenderDirective,
    DetailsListColumnsDirective,
    DetailsListGroupsDirective,
    FabDetailsListComponent,
];
export class FabDetailsListModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('DetailsList', (/**
         * @return {?}
         */
        () => DetailsList));
    }
}
FabDetailsListModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FabGroupModule],
                declarations: components,
                exports: [...components, FabGroupModule],
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabDetailsListModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy1saXN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RldGFpbHMtbGlzdC9kZXRhaWxzLWxpc3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFckUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ25FLE9BQU8sRUFDTCwwQkFBMEIsRUFDMUIsZ0NBQWdDLEdBQ2pDLE1BQU0sNENBQTRDLENBQUM7QUFDcEQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDMUYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNENBQTRDLENBQUM7O01BRWxGLFVBQVUsR0FBRztJQUNqQiwwQkFBMEI7SUFDMUIsZ0NBQWdDO0lBQ2hDLDJCQUEyQjtJQUMzQiwwQkFBMEI7SUFDMUIsdUJBQXVCO0NBQ3hCO0FBUUQsTUFBTSxPQUFPLG9CQUFvQjtJQUMvQjtRQUNFLGlFQUFpRTtRQUNqRSxlQUFlLENBQUMsYUFBYTs7O1FBQUUsR0FBRyxFQUFFLENBQUMsV0FBVyxFQUFDLENBQUM7SUFDcEQsQ0FBQzs7O1lBVkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxjQUFjLENBQUM7Z0JBQ3ZDLFlBQVksRUFBRSxVQUFVO2dCQUN4QixPQUFPLEVBQUUsQ0FBQyxHQUFHLFVBQVUsRUFBRSxjQUFjLENBQUM7Z0JBQ3hDLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO2FBQzVCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2NvcmUnO1xyXG5pbXBvcnQgeyBEZXRhaWxzTGlzdCB9IGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliL0RldGFpbHNMaXN0JztcclxuXHJcbmltcG9ydCB7IEZhYkdyb3VwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXItcmVhY3QvZmFicmljL2xpYi9jb21wb25lbnRzL2dyb3VwJztcclxuaW1wb3J0IHsgRmFiRGV0YWlsc0xpc3RDb21wb25lbnQgfSBmcm9tICcuL2RldGFpbHMtbGlzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1xyXG4gIERldGFpbHNMaXN0Q29sdW1uRGlyZWN0aXZlLFxyXG4gIERldGFpbHNMaXN0Q29sdW1uUmVuZGVyRGlyZWN0aXZlLFxyXG59IGZyb20gJy4vZGlyZWN0aXZlcy9kZXRhaWxzLWxpc3QtY29sdW1uLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IERldGFpbHNMaXN0Q29sdW1uc0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9kZXRhaWxzLWxpc3QtY29sdW1ucy5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBEZXRhaWxzTGlzdEdyb3Vwc0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9kZXRhaWxzLWxpc3QtZ3JvdXBzLmRpcmVjdGl2ZSc7XHJcblxyXG5jb25zdCBjb21wb25lbnRzID0gW1xyXG4gIERldGFpbHNMaXN0Q29sdW1uRGlyZWN0aXZlLFxyXG4gIERldGFpbHNMaXN0Q29sdW1uUmVuZGVyRGlyZWN0aXZlLFxyXG4gIERldGFpbHNMaXN0Q29sdW1uc0RpcmVjdGl2ZSxcclxuICBEZXRhaWxzTGlzdEdyb3Vwc0RpcmVjdGl2ZSxcclxuICBGYWJEZXRhaWxzTGlzdENvbXBvbmVudCxcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRmFiR3JvdXBNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogY29tcG9uZW50cyxcclxuICBleHBvcnRzOiBbLi4uY29tcG9uZW50cywgRmFiR3JvdXBNb2R1bGVdLFxyXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZhYkRldGFpbHNMaXN0TW9kdWxlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vIEFkZCBhbnkgUmVhY3QgZWxlbWVudHMgdG8gdGhlIHJlZ2lzdHJ5ICh1c2VkIGJ5IHRoZSByZW5kZXJlcikuXHJcbiAgICByZWdpc3RlckVsZW1lbnQoJ0RldGFpbHNMaXN0JywgKCkgPT4gRGV0YWlsc0xpc3QpO1xyXG4gIH1cclxufVxyXG4iXX0=