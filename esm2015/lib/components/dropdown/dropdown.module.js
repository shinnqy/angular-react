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
const declarations = [
    FabDropdownComponent,
    DropdownOptionDirective,
    DropdownOptionsDirective
];
export class FabDropdownModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Dropdown', (/**
         * @return {?}
         */
        () => Dropdown));
    }
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
FabDropdownModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDL0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDakYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0seUNBQXlDLENBQUM7O01BRTdFLFlBQVksR0FBRztJQUNuQixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtDQUN6QjtBQVFELE1BQU0sT0FBTyxpQkFBaUI7SUFDNUI7UUFDRSxpRUFBaUU7UUFDakUsZUFBZSxDQUFDLFVBQVU7OztRQUFFLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBQyxDQUFDO0lBQzlDLENBQUM7OztZQVZGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZCLFlBQVksRUFBRSxZQUFZO2dCQUMxQixPQUFPLEVBQUUsWUFBWTtnQkFDckIsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7YUFDNUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSAnQGFuZ3VsYXItcmVhY3QvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERyb3Bkb3duIH0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvRHJvcGRvd24nO1xyXG5pbXBvcnQgeyBGYWJEcm9wZG93bkNvbXBvbmVudCB9IGZyb20gJy4vZHJvcGRvd24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgRHJvcGRvd25PcHRpb25EaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZHJvcGRvd24tb3B0aW9uLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IERyb3Bkb3duT3B0aW9uc0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9kcm9wZG93bi1vcHRpb25zLmRpcmVjdGl2ZSc7XHJcblxyXG5jb25zdCBkZWNsYXJhdGlvbnMgPSBbXHJcbiAgRmFiRHJvcGRvd25Db21wb25lbnQsXHJcbiAgRHJvcGRvd25PcHRpb25EaXJlY3RpdmUsXHJcbiAgRHJvcGRvd25PcHRpb25zRGlyZWN0aXZlXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogZGVjbGFyYXRpb25zLFxyXG4gIGV4cG9ydHM6IGRlY2xhcmF0aW9ucyxcclxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYWJEcm9wZG93bk1vZHVsZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyBBZGQgYW55IFJlYWN0IGVsZW1lbnRzIHRvIHRoZSByZWdpc3RyeSAodXNlZCBieSB0aGUgcmVuZGVyZXIpLlxyXG4gICAgcmVnaXN0ZXJFbGVtZW50KCdEcm9wZG93bicsICgpID0+IERyb3Bkb3duKTtcclxuICB9XHJcbn1cclxuIl19