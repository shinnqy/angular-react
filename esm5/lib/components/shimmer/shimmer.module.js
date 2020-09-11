/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { registerElement } from '@angular-react/core';
import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Shimmer, ShimmerElementsGroup } from 'office-ui-fabric-react/lib/Shimmer';
import { FabShimmerComponent, FabShimmerElementsGroupComponent } from './shimmer.component';
/** @type {?} */
var components = [FabShimmerComponent, FabShimmerElementsGroupComponent];
var FabShimmerModule = /** @class */ (function () {
    function FabShimmerModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Shimmer', (/**
         * @return {?}
         */
        function () { return Shimmer; }));
        registerElement('ShimmerElementsGroup', (/**
         * @return {?}
         */
        function () { return ShimmerElementsGroup; }));
    }
    FabShimmerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: components,
                    exports: components,
                    schemas: [NO_ERRORS_SCHEMA],
                },] }
    ];
    /** @nocollapse */
    FabShimmerModule.ctorParameters = function () { return []; };
    return FabShimmerModule;
}());
export { FabShimmerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpbW1lci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvbGliL2NvbXBvbmVudHMvc2hpbW1lci8iLCJzb3VyY2VzIjpbInNoaW1tZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbkYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGdDQUFnQyxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0lBRXRGLFVBQVUsR0FBRyxDQUFDLG1CQUFtQixFQUFFLGdDQUFnQyxDQUFDO0FBRTFFO0lBT0U7UUFDRSxpRUFBaUU7UUFDakUsZUFBZSxDQUFDLFNBQVM7OztRQUFFLGNBQU0sT0FBQSxPQUFPLEVBQVAsQ0FBTyxFQUFDLENBQUM7UUFDMUMsZUFBZSxDQUFDLHNCQUFzQjs7O1FBQUUsY0FBTSxPQUFBLG9CQUFvQixFQUFwQixDQUFvQixFQUFDLENBQUM7SUFDdEUsQ0FBQzs7Z0JBWEYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsWUFBWSxFQUFFLFVBQVU7b0JBQ3hCLE9BQU8sRUFBRSxVQUFVO29CQUNuQixPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztpQkFDNUI7Ozs7SUFPRCx1QkFBQztDQUFBLEFBWkQsSUFZQztTQU5ZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU2hpbW1lciwgU2hpbW1lckVsZW1lbnRzR3JvdXAgfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9TaGltbWVyJztcclxuaW1wb3J0IHsgRmFiU2hpbW1lckNvbXBvbmVudCwgRmFiU2hpbW1lckVsZW1lbnRzR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL3NoaW1tZXIuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IGNvbXBvbmVudHMgPSBbRmFiU2hpbW1lckNvbXBvbmVudCwgRmFiU2hpbW1lckVsZW1lbnRzR3JvdXBDb21wb25lbnRdO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IGNvbXBvbmVudHMsXHJcbiAgZXhwb3J0czogY29tcG9uZW50cyxcclxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYWJTaGltbWVyTW9kdWxlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vIEFkZCBhbnkgUmVhY3QgZWxlbWVudHMgdG8gdGhlIHJlZ2lzdHJ5ICh1c2VkIGJ5IHRoZSByZW5kZXJlcikuXHJcbiAgICByZWdpc3RlckVsZW1lbnQoJ1NoaW1tZXInLCAoKSA9PiBTaGltbWVyKTtcclxuICAgIHJlZ2lzdGVyRWxlbWVudCgnU2hpbW1lckVsZW1lbnRzR3JvdXAnLCAoKSA9PiBTaGltbWVyRWxlbWVudHNHcm91cCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==