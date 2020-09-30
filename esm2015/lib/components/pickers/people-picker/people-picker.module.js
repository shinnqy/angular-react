/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { registerElement } from '@angular-react/core';
import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import * as PeoplePickerItemCss from 'office-ui-fabric-react/lib-amd/components/pickers/PeoplePicker/PeoplePickerItems/PickerItemsDefault.scss';
import { NormalPeoplePickerBase } from 'office-ui-fabric-react/lib/Pickers';
import { noop } from '@angular-react/fabric/lib/utils';
import { FabBasePickerModule } from '../base-picker/base-picker.module';
import { FabPeoplePickerComponent } from './people-picker.component';
// Dummy action to force PeoplePickerItemCss to load and not be tree-shaken away.
noop(PeoplePickerItemCss);
/** @type {?} */
const components = [FabPeoplePickerComponent];
export class FabPeoplePickerModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('PeoplePicker', (/**
         * @return {?}
         */
        () => (/** @type {?} */ (NormalPeoplePickerBase))));
    }
}
FabPeoplePickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FabBasePickerModule],
                declarations: components,
                exports: components,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabPeoplePickerModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVvcGxlLXBpY2tlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9waWNrZXJzL3Blb3BsZS1waWNrZXIvcGVvcGxlLXBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0EsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sS0FBSyxtQkFBbUIsTUFBTSwwR0FBMEcsQ0FBQztBQUNoSixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDeEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0FBR3JFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDOztNQUVwQixVQUFVLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQztBQVE3QyxNQUFNLE9BQU8scUJBQXFCO0lBQ2hDO1FBQ0UsaUVBQWlFO1FBQ2pFLGVBQWUsQ0FBQyxjQUFjOzs7UUFBRSxHQUFHLEVBQUUsQ0FBQyxtQkFBQSxzQkFBc0IsRUFBTyxFQUFDLENBQUM7SUFDdkUsQ0FBQzs7O1lBVkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxtQkFBbUIsQ0FBQztnQkFDNUMsWUFBWSxFQUFFLFVBQVU7Z0JBQ3hCLE9BQU8sRUFBRSxVQUFVO2dCQUNuQixPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQzthQUM1QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgUGVvcGxlUGlja2VySXRlbUNzcyBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi1hbWQvY29tcG9uZW50cy9waWNrZXJzL1Blb3BsZVBpY2tlci9QZW9wbGVQaWNrZXJJdGVtcy9QaWNrZXJJdGVtc0RlZmF1bHQuc2Nzcyc7XHJcbmltcG9ydCB7IE5vcm1hbFBlb3BsZVBpY2tlckJhc2UgfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9QaWNrZXJzJztcclxuaW1wb3J0IHsgbm9vcCB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy9saWIvdXRpbHMnO1xyXG5pbXBvcnQgeyBGYWJCYXNlUGlja2VyTW9kdWxlIH0gZnJvbSAnLi4vYmFzZS1waWNrZXIvYmFzZS1waWNrZXIubW9kdWxlJztcclxuaW1wb3J0IHsgRmFiUGVvcGxlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9wZW9wbGUtcGlja2VyLmNvbXBvbmVudCc7XHJcblxyXG4vLyBEdW1teSBhY3Rpb24gdG8gZm9yY2UgUGVvcGxlUGlja2VySXRlbUNzcyB0byBsb2FkIGFuZCBub3QgYmUgdHJlZS1zaGFrZW4gYXdheS5cclxubm9vcChQZW9wbGVQaWNrZXJJdGVtQ3NzKTtcclxuXHJcbmNvbnN0IGNvbXBvbmVudHMgPSBbRmFiUGVvcGxlUGlja2VyQ29tcG9uZW50XTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRmFiQmFzZVBpY2tlck1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBjb21wb25lbnRzLFxyXG4gIGV4cG9ydHM6IGNvbXBvbmVudHMsXHJcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmFiUGVvcGxlUGlja2VyTW9kdWxlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vIEFkZCBhbnkgUmVhY3QgZWxlbWVudHMgdG8gdGhlIHJlZ2lzdHJ5ICh1c2VkIGJ5IHRoZSByZW5kZXJlcikuXHJcbiAgICByZWdpc3RlckVsZW1lbnQoJ1Blb3BsZVBpY2tlcicsICgpID0+IE5vcm1hbFBlb3BsZVBpY2tlckJhc2UgYXMgYW55KTtcclxuICB9XHJcbn1cclxuIl19