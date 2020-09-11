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
import { noop } from 'angular-react-toolkit/utils/noop';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVvcGxlLXBpY2tlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvbGliL2NvbXBvbmVudHMvcGlja2Vycy8iLCJzb3VyY2VzIjpbInBlb3BsZS1waWNrZXIvcGVvcGxlLXBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0EsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sS0FBSyxtQkFBbUIsTUFBTSwwR0FBMEcsQ0FBQztBQUNoSixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDeEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDeEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0FBR3JFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDOztNQUVwQixVQUFVLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQztBQVE3QyxNQUFNLE9BQU8scUJBQXFCO0lBQ2hDO1FBQ0UsaUVBQWlFO1FBQ2pFLGVBQWUsQ0FBQyxjQUFjOzs7UUFBRSxHQUFHLEVBQUUsQ0FBQyxtQkFBQSxzQkFBc0IsRUFBTyxFQUFDLENBQUM7SUFDdkUsQ0FBQzs7O1lBVkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxtQkFBbUIsQ0FBQztnQkFDNUMsWUFBWSxFQUFFLFVBQVU7Z0JBQ3hCLE9BQU8sRUFBRSxVQUFVO2dCQUNuQixPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQzthQUM1QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgUGVvcGxlUGlja2VySXRlbUNzcyBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi1hbWQvY29tcG9uZW50cy9waWNrZXJzL1Blb3BsZVBpY2tlci9QZW9wbGVQaWNrZXJJdGVtcy9QaWNrZXJJdGVtc0RlZmF1bHQuc2Nzcyc7XHJcbmltcG9ydCB7IE5vcm1hbFBlb3BsZVBpY2tlckJhc2UgfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9QaWNrZXJzJztcclxuaW1wb3J0IHsgbm9vcCB9IGZyb20gJ2FuZ3VsYXItcmVhY3QtdG9vbGtpdC91dGlscy9ub29wJztcclxuaW1wb3J0IHsgRmFiQmFzZVBpY2tlck1vZHVsZSB9IGZyb20gJy4uL2Jhc2UtcGlja2VyL2Jhc2UtcGlja2VyLm1vZHVsZSc7XHJcbmltcG9ydCB7IEZhYlBlb3BsZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vcGVvcGxlLXBpY2tlci5jb21wb25lbnQnO1xyXG5cclxuLy8gRHVtbXkgYWN0aW9uIHRvIGZvcmNlIFBlb3BsZVBpY2tlckl0ZW1Dc3MgdG8gbG9hZCBhbmQgbm90IGJlIHRyZWUtc2hha2VuIGF3YXkuXHJcbm5vb3AoUGVvcGxlUGlja2VySXRlbUNzcyk7XHJcblxyXG5jb25zdCBjb21wb25lbnRzID0gW0ZhYlBlb3BsZVBpY2tlckNvbXBvbmVudF07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZhYkJhc2VQaWNrZXJNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogY29tcG9uZW50cyxcclxuICBleHBvcnRzOiBjb21wb25lbnRzLFxyXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZhYlBlb3BsZVBpY2tlck1vZHVsZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyBBZGQgYW55IFJlYWN0IGVsZW1lbnRzIHRvIHRoZSByZWdpc3RyeSAodXNlZCBieSB0aGUgcmVuZGVyZXIpLlxyXG4gICAgcmVnaXN0ZXJFbGVtZW50KCdQZW9wbGVQaWNrZXInLCAoKSA9PiBOb3JtYWxQZW9wbGVQaWNrZXJCYXNlIGFzIGFueSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==