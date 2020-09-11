/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { registerElement } from '@angular-react/core';
import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { SpinButton } from 'office-ui-fabric-react/lib/SpinButton';
import { FabSpinButtonComponent } from './spin-button.component';
/** @type {?} */
var components = [FabSpinButtonComponent];
var FabSpinButtonModule = /** @class */ (function () {
    function FabSpinButtonModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('SpinButton', (/**
         * @return {?}
         */
        function () { return SpinButton; }));
    }
    FabSpinButtonModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: components,
                    exports: components,
                    schemas: [NO_ERRORS_SCHEMA],
                },] }
    ];
    /** @nocollapse */
    FabSpinButtonModule.ctorParameters = function () { return []; };
    return FabSpinButtonModule;
}());
export { FabSpinButtonModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbi1idXR0b24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljL2xpYi9jb21wb25lbnRzL3NwaW4tYnV0dG9uLyIsInNvdXJjZXMiOlsic3Bpbi1idXR0b24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDbkUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0seUJBQXlCLENBQUM7O0lBRTNELFVBQVUsR0FBRyxDQUFDLHNCQUFzQixDQUFDO0FBRTNDO0lBT0U7UUFDRSxpRUFBaUU7UUFDakUsZUFBZSxDQUFDLFlBQVk7OztRQUFFLGNBQU0sT0FBQSxVQUFVLEVBQVYsQ0FBVSxFQUFDLENBQUM7SUFDbEQsQ0FBQzs7Z0JBVkYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsWUFBWSxFQUFFLFVBQVU7b0JBQ3hCLE9BQU8sRUFBRSxVQUFVO29CQUNuQixPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztpQkFDNUI7Ozs7SUFNRCwwQkFBQztDQUFBLEFBWEQsSUFXQztTQUxZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3BpbkJ1dHRvbiB9IGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliL1NwaW5CdXR0b24nO1xyXG5pbXBvcnQgeyBGYWJTcGluQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9zcGluLWJ1dHRvbi5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgY29tcG9uZW50cyA9IFtGYWJTcGluQnV0dG9uQ29tcG9uZW50XTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBjb21wb25lbnRzLFxyXG4gIGV4cG9ydHM6IGNvbXBvbmVudHMsXHJcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmFiU3BpbkJ1dHRvbk1vZHVsZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyBBZGQgYW55IFJlYWN0IGVsZW1lbnRzIHRvIHRoZSByZWdpc3RyeSAodXNlZCBieSB0aGUgcmVuZGVyZXIpLlxyXG4gICAgcmVnaXN0ZXJFbGVtZW50KCdTcGluQnV0dG9uJywgKCkgPT4gU3BpbkJ1dHRvbik7XHJcbiAgfVxyXG59XHJcbiJdfQ==