/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { registerElement } from '@angular-react/core';
import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';
import { FabDropdownComponent } from './dropdown.component';
import { DropdownOptionDirective } from './directives/dropdown-option.directive';
import { DropdownOptionsDirective } from './directives/dropdown-options.directive';
/** @type {?} */
var declarations = [
    FabDropdownComponent,
    DropdownOptionDirective,
    DropdownOptionsDirective
];
var FabDropdownModule = /** @class */ (function () {
    function FabDropdownModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Dropdown', (/**
         * @return {?}
         */
        function () { return Dropdown; }));
    }
    FabDropdownModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: declarations,
                    exports: declarations,
                    schemas: [NO_ERRORS_SCHEMA],
                },] }
    ];
    /** @nocollapse */
    FabDropdownModule.ctorParameters = function () { return []; };
    return FabDropdownModule;
}());
export { FabDropdownModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljL2xpYi9jb21wb25lbnRzL2Ryb3Bkb3duLyIsInNvdXJjZXMiOlsiZHJvcGRvd24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDL0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDakYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0seUNBQXlDLENBQUM7O0lBRTdFLFlBQVksR0FBRztJQUNuQixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtDQUN6QjtBQUVEO0lBT0U7UUFDRSxpRUFBaUU7UUFDakUsZUFBZSxDQUFDLFVBQVU7OztRQUFFLGNBQU0sT0FBQSxRQUFRLEVBQVIsQ0FBUSxFQUFDLENBQUM7SUFDOUMsQ0FBQzs7Z0JBVkYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsWUFBWSxFQUFFLFlBQVk7b0JBQzFCLE9BQU8sRUFBRSxZQUFZO29CQUNyQixPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztpQkFDNUI7Ozs7SUFNRCx3QkFBQztDQUFBLEFBWEQsSUFXQztTQUxZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRHJvcGRvd24gfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9Ecm9wZG93bic7XHJcbmltcG9ydCB7IEZhYkRyb3Bkb3duQ29tcG9uZW50IH0gZnJvbSAnLi9kcm9wZG93bi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEcm9wZG93bk9wdGlvbkRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9kcm9wZG93bi1vcHRpb24uZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRHJvcGRvd25PcHRpb25zRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2Ryb3Bkb3duLW9wdGlvbnMuZGlyZWN0aXZlJztcclxuXHJcbmNvbnN0IGRlY2xhcmF0aW9ucyA9IFtcclxuICBGYWJEcm9wZG93bkNvbXBvbmVudCxcclxuICBEcm9wZG93bk9wdGlvbkRpcmVjdGl2ZSxcclxuICBEcm9wZG93bk9wdGlvbnNEaXJlY3RpdmVcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBkZWNsYXJhdGlvbnMsXHJcbiAgZXhwb3J0czogZGVjbGFyYXRpb25zLFxyXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZhYkRyb3Bkb3duTW9kdWxlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vIEFkZCBhbnkgUmVhY3QgZWxlbWVudHMgdG8gdGhlIHJlZ2lzdHJ5ICh1c2VkIGJ5IHRoZSByZW5kZXJlcikuXHJcbiAgICByZWdpc3RlckVsZW1lbnQoJ0Ryb3Bkb3duJywgKCkgPT4gRHJvcGRvd24pO1xyXG4gIH1cclxufVxyXG4iXX0=