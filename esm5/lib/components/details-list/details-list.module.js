/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { registerElement } from '@angular-react/core';
import { DetailsList } from 'office-ui-fabric-react/lib/DetailsList';
// TODO:
import { FabGroupModule } from '../group/group.module';
import { FabDetailsListComponent } from './details-list.component';
import { DetailsListColumnDirective, DetailsListColumnRenderDirective, } from './directives/details-list-column.directive';
import { DetailsListColumnsDirective } from './directives/details-list-columns.directive';
import { DetailsListGroupsDirective } from './directives/details-list-groups.directive';
/** @type {?} */
var components = [
    DetailsListColumnDirective,
    DetailsListColumnRenderDirective,
    DetailsListColumnsDirective,
    DetailsListGroupsDirective,
    FabDetailsListComponent,
];
var FabDetailsListModule = /** @class */ (function () {
    function FabDetailsListModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('DetailsList', (/**
         * @return {?}
         */
        function () { return DetailsList; }));
    }
    FabDetailsListModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FabGroupModule],
                    declarations: components,
                    exports: tslib_1.__spread(components, [FabGroupModule]),
                    schemas: [NO_ERRORS_SCHEMA],
                },] }
    ];
    /** @nocollapse */
    FabDetailsListModule.ctorParameters = function () { return []; };
    return FabDetailsListModule;
}());
export { FabDetailsListModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy1saXN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RldGFpbHMtbGlzdC9kZXRhaWxzLWxpc3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdDQUF3QyxDQUFDOztBQUdyRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbkUsT0FBTyxFQUNMLDBCQUEwQixFQUMxQixnQ0FBZ0MsR0FDakMsTUFBTSw0Q0FBNEMsQ0FBQztBQUNwRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUMxRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQzs7SUFFbEYsVUFBVSxHQUFHO0lBQ2pCLDBCQUEwQjtJQUMxQixnQ0FBZ0M7SUFDaEMsMkJBQTJCO0lBQzNCLDBCQUEwQjtJQUMxQix1QkFBdUI7Q0FDeEI7QUFFRDtJQU9FO1FBQ0UsaUVBQWlFO1FBQ2pFLGVBQWUsQ0FBQyxhQUFhOzs7UUFBRSxjQUFNLE9BQUEsV0FBVyxFQUFYLENBQVcsRUFBQyxDQUFDO0lBQ3BELENBQUM7O2dCQVZGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsY0FBYyxDQUFDO29CQUN2QyxZQUFZLEVBQUUsVUFBVTtvQkFDeEIsT0FBTyxtQkFBTSxVQUFVLEdBQUUsY0FBYyxFQUFDO29CQUN4QyxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztpQkFDNUI7Ozs7SUFNRCwyQkFBQztDQUFBLEFBWEQsSUFXQztTQUxZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9jb3JlJztcclxuaW1wb3J0IHsgRGV0YWlsc0xpc3QgfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9EZXRhaWxzTGlzdCc7XHJcblxyXG4vLyBUT0RPOlxyXG5pbXBvcnQgeyBGYWJHcm91cE1vZHVsZSB9IGZyb20gJy4uL2dyb3VwL2dyb3VwLm1vZHVsZSc7XHJcbmltcG9ydCB7IEZhYkRldGFpbHNMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9kZXRhaWxzLWxpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHtcclxuICBEZXRhaWxzTGlzdENvbHVtbkRpcmVjdGl2ZSxcclxuICBEZXRhaWxzTGlzdENvbHVtblJlbmRlckRpcmVjdGl2ZSxcclxufSBmcm9tICcuL2RpcmVjdGl2ZXMvZGV0YWlscy1saXN0LWNvbHVtbi5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBEZXRhaWxzTGlzdENvbHVtbnNEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZGV0YWlscy1saXN0LWNvbHVtbnMuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRGV0YWlsc0xpc3RHcm91cHNEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZGV0YWlscy1saXN0LWdyb3Vwcy5kaXJlY3RpdmUnO1xyXG5cclxuY29uc3QgY29tcG9uZW50cyA9IFtcclxuICBEZXRhaWxzTGlzdENvbHVtbkRpcmVjdGl2ZSxcclxuICBEZXRhaWxzTGlzdENvbHVtblJlbmRlckRpcmVjdGl2ZSxcclxuICBEZXRhaWxzTGlzdENvbHVtbnNEaXJlY3RpdmUsXHJcbiAgRGV0YWlsc0xpc3RHcm91cHNEaXJlY3RpdmUsXHJcbiAgRmFiRGV0YWlsc0xpc3RDb21wb25lbnQsXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZhYkdyb3VwTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IGNvbXBvbmVudHMsXHJcbiAgZXhwb3J0czogWy4uLmNvbXBvbmVudHMsIEZhYkdyb3VwTW9kdWxlXSxcclxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYWJEZXRhaWxzTGlzdE1vZHVsZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyBBZGQgYW55IFJlYWN0IGVsZW1lbnRzIHRvIHRoZSByZWdpc3RyeSAodXNlZCBieSB0aGUgcmVuZGVyZXIpLlxyXG4gICAgcmVnaXN0ZXJFbGVtZW50KCdEZXRhaWxzTGlzdCcsICgpID0+IERldGFpbHNMaXN0KTtcclxuICB9XHJcbn1cclxuIl19