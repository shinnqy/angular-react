/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { registerElement } from '@angular-react/core';
import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { TextField, MaskedTextField } from 'office-ui-fabric-react/lib/TextField';
import { FabTextFieldComponent } from './text-field.component';
import { FabMaskedTextFieldComponent } from './masked-text-field.component';
/** @type {?} */
var components = [FabTextFieldComponent, FabMaskedTextFieldComponent];
var FabTextFieldModule = /** @class */ (function () {
    function FabTextFieldModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('TextField', (/**
         * @return {?}
         */
        function () { return TextField; }));
        registerElement('MaskedTextField', (/**
         * @return {?}
         */
        function () { return MaskedTextField; }));
    }
    FabTextFieldModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: components,
                    exports: components,
                    schemas: [NO_ERRORS_SCHEMA],
                },] }
    ];
    /** @nocollapse */
    FabTextFieldModule.ctorParameters = function () { return []; };
    return FabTextFieldModule;
}());
export { FabTextFieldModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1maWVsZC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvbGliL2NvbXBvbmVudHMvdGV4dC1maWVsZC8iLCJzb3VyY2VzIjpbInRleHQtZmllbGQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQy9ELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLCtCQUErQixDQUFDOztJQUV0RSxVQUFVLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSwyQkFBMkIsQ0FBQztBQUV2RTtJQU9FO1FBQ0UsaUVBQWlFO1FBQ2pFLGVBQWUsQ0FBQyxXQUFXOzs7UUFBRSxjQUFNLE9BQUEsU0FBUyxFQUFULENBQVMsRUFBQyxDQUFDO1FBQzlDLGVBQWUsQ0FBQyxpQkFBaUI7OztRQUFFLGNBQU0sT0FBQSxlQUFlLEVBQWYsQ0FBZSxFQUFDLENBQUM7SUFDNUQsQ0FBQzs7Z0JBWEYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsWUFBWSxFQUFFLFVBQVU7b0JBQ3hCLE9BQU8sRUFBRSxVQUFVO29CQUNuQixPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztpQkFDNUI7Ozs7SUFPRCx5QkFBQztDQUFBLEFBWkQsSUFZQztTQU5ZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGV4dEZpZWxkLCBNYXNrZWRUZXh0RmllbGQgfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9UZXh0RmllbGQnO1xyXG5pbXBvcnQgeyBGYWJUZXh0RmllbGRDb21wb25lbnQgfSBmcm9tICcuL3RleHQtZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRmFiTWFza2VkVGV4dEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9tYXNrZWQtdGV4dC1maWVsZC5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgY29tcG9uZW50cyA9IFtGYWJUZXh0RmllbGRDb21wb25lbnQsIEZhYk1hc2tlZFRleHRGaWVsZENvbXBvbmVudF07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogY29tcG9uZW50cyxcclxuICBleHBvcnRzOiBjb21wb25lbnRzLFxyXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZhYlRleHRGaWVsZE1vZHVsZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyBBZGQgYW55IFJlYWN0IGVsZW1lbnRzIHRvIHRoZSByZWdpc3RyeSAodXNlZCBieSB0aGUgcmVuZGVyZXIpLlxyXG4gICAgcmVnaXN0ZXJFbGVtZW50KCdUZXh0RmllbGQnLCAoKSA9PiBUZXh0RmllbGQpO1xyXG4gICAgcmVnaXN0ZXJFbGVtZW50KCdNYXNrZWRUZXh0RmllbGQnLCAoKSA9PiBNYXNrZWRUZXh0RmllbGQpO1xyXG4gIH1cclxufVxyXG4iXX0=