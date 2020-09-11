/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { registerElement } from '@angular-react/core';
import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ChoiceGroup } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { FabChoiceGroupComponent } from './choice-group.component';
/** @type {?} */
var components = [FabChoiceGroupComponent];
var FabChoiceGroupModule = /** @class */ (function () {
    function FabChoiceGroupModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('ChoiceGroup', (/**
         * @return {?}
         */
        function () { return ChoiceGroup; }));
    }
    FabChoiceGroupModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: components,
                    exports: components,
                    schemas: [NO_ERRORS_SCHEMA],
                },] }
    ];
    /** @nocollapse */
    FabChoiceGroupModule.ctorParameters = function () { return []; };
    return FabChoiceGroupModule;
}());
export { FabChoiceGroupModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hvaWNlLWdyb3VwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy9saWIvY29tcG9uZW50cy9jaG9pY2UtZ3JvdXAvIiwic291cmNlcyI6WyJjaG9pY2UtZ3JvdXAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDckUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0lBRTdELFVBQVUsR0FBRyxDQUFDLHVCQUF1QixDQUFDO0FBRTVDO0lBT0U7UUFDRSxpRUFBaUU7UUFDakUsZUFBZSxDQUFDLGFBQWE7OztRQUFFLGNBQU0sT0FBQSxXQUFXLEVBQVgsQ0FBVyxFQUFDLENBQUM7SUFDcEQsQ0FBQzs7Z0JBVkYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsWUFBWSxFQUFFLFVBQVU7b0JBQ3hCLE9BQU8sRUFBRSxVQUFVO29CQUNuQixPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztpQkFDNUI7Ozs7SUFNRCwyQkFBQztDQUFBLEFBWEQsSUFXQztTQUxZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2hvaWNlR3JvdXAgfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9DaG9pY2VHcm91cCc7XHJcbmltcG9ydCB7IEZhYkNob2ljZUdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9jaG9pY2UtZ3JvdXAuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IGNvbXBvbmVudHMgPSBbRmFiQ2hvaWNlR3JvdXBDb21wb25lbnRdO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IGNvbXBvbmVudHMsXHJcbiAgZXhwb3J0czogY29tcG9uZW50cyxcclxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYWJDaG9pY2VHcm91cE1vZHVsZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyBBZGQgYW55IFJlYWN0IGVsZW1lbnRzIHRvIHRoZSByZWdpc3RyeSAodXNlZCBieSB0aGUgcmVuZGVyZXIpLlxyXG4gICAgcmVnaXN0ZXJFbGVtZW50KCdDaG9pY2VHcm91cCcsICgpID0+IENob2ljZUdyb3VwKTtcclxuICB9XHJcbn1cclxuIl19