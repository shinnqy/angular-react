/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { registerElement } from '@angular-react/core';
import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Persona, PersonaCoin } from 'office-ui-fabric-react/lib/Persona';
import { FabPersonaCoinComponent, FabPersonaComponent } from './persona.component';
/** @type {?} */
const components = [FabPersonaComponent, FabPersonaCoinComponent];
export class FabPersonaModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Persona', (/**
         * @return {?}
         */
        () => Persona));
        registerElement('PersonaCoin', (/**
         * @return {?}
         */
        () => PersonaCoin));
    }
}
FabPersonaModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components,
                exports: components,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabPersonaModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uYS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvbGliL2NvbXBvbmVudHMvcGVyc29uYS8iLCJzb3VyY2VzIjpbInBlcnNvbmEubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztNQUU3RSxVQUFVLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSx1QkFBdUIsQ0FBQztBQVFqRSxNQUFNLE9BQU8sZ0JBQWdCO0lBQzNCO1FBQ0UsaUVBQWlFO1FBQ2pFLGVBQWUsQ0FBQyxTQUFTOzs7UUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLEVBQUMsQ0FBQztRQUMxQyxlQUFlLENBQUMsYUFBYTs7O1FBQUUsR0FBRyxFQUFFLENBQUMsV0FBVyxFQUFDLENBQUM7SUFDcEQsQ0FBQzs7O1lBWEYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsWUFBWSxFQUFFLFVBQVU7Z0JBQ3hCLE9BQU8sRUFBRSxVQUFVO2dCQUNuQixPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQzthQUM1QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGVyc29uYSwgUGVyc29uYUNvaW4gfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9QZXJzb25hJztcclxuaW1wb3J0IHsgRmFiUGVyc29uYUNvaW5Db21wb25lbnQsIEZhYlBlcnNvbmFDb21wb25lbnQgfSBmcm9tICcuL3BlcnNvbmEuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IGNvbXBvbmVudHMgPSBbRmFiUGVyc29uYUNvbXBvbmVudCwgRmFiUGVyc29uYUNvaW5Db21wb25lbnRdO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IGNvbXBvbmVudHMsXHJcbiAgZXhwb3J0czogY29tcG9uZW50cyxcclxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYWJQZXJzb25hTW9kdWxlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vIEFkZCBhbnkgUmVhY3QgZWxlbWVudHMgdG8gdGhlIHJlZ2lzdHJ5ICh1c2VkIGJ5IHRoZSByZW5kZXJlcikuXHJcbiAgICByZWdpc3RlckVsZW1lbnQoJ1BlcnNvbmEnLCAoKSA9PiBQZXJzb25hKTtcclxuICAgIHJlZ2lzdGVyRWxlbWVudCgnUGVyc29uYUNvaW4nLCAoKSA9PiBQZXJzb25hQ29pbik7XHJcbiAgfVxyXG59XHJcbiJdfQ==