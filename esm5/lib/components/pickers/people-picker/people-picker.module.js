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
var components = [FabPeoplePickerComponent];
var FabPeoplePickerModule = /** @class */ (function () {
    function FabPeoplePickerModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('PeoplePicker', (/**
         * @return {?}
         */
        function () { return (/** @type {?} */ (NormalPeoplePickerBase)); }));
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
    FabPeoplePickerModule.ctorParameters = function () { return []; };
    return FabPeoplePickerModule;
}());
export { FabPeoplePickerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVvcGxlLXBpY2tlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvbGliL2NvbXBvbmVudHMvcGlja2Vycy8iLCJzb3VyY2VzIjpbInBlb3BsZS1waWNrZXIvcGVvcGxlLXBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0EsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sS0FBSyxtQkFBbUIsTUFBTSwwR0FBMEcsQ0FBQztBQUNoSixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDeEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDeEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0FBR3JFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDOztJQUVwQixVQUFVLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQztBQUU3QztJQU9FO1FBQ0UsaUVBQWlFO1FBQ2pFLGVBQWUsQ0FBQyxjQUFjOzs7UUFBRSxxQkFBTSxtQkFBQSxzQkFBc0IsRUFBTyxHQUFBLEVBQUMsQ0FBQztJQUN2RSxDQUFDOztnQkFWRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLG1CQUFtQixDQUFDO29CQUM1QyxZQUFZLEVBQUUsVUFBVTtvQkFDeEIsT0FBTyxFQUFFLFVBQVU7b0JBQ25CLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO2lCQUM1Qjs7OztJQU1ELDRCQUFDO0NBQUEsQUFYRCxJQVdDO1NBTFkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBQZW9wbGVQaWNrZXJJdGVtQ3NzIGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliLWFtZC9jb21wb25lbnRzL3BpY2tlcnMvUGVvcGxlUGlja2VyL1Blb3BsZVBpY2tlckl0ZW1zL1BpY2tlckl0ZW1zRGVmYXVsdC5zY3NzJztcclxuaW1wb3J0IHsgTm9ybWFsUGVvcGxlUGlja2VyQmFzZSB9IGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliL1BpY2tlcnMnO1xyXG5pbXBvcnQgeyBub29wIH0gZnJvbSAnYW5ndWxhci1yZWFjdC10b29sa2l0L3V0aWxzL25vb3AnO1xyXG5pbXBvcnQgeyBGYWJCYXNlUGlja2VyTW9kdWxlIH0gZnJvbSAnLi4vYmFzZS1waWNrZXIvYmFzZS1waWNrZXIubW9kdWxlJztcclxuaW1wb3J0IHsgRmFiUGVvcGxlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9wZW9wbGUtcGlja2VyLmNvbXBvbmVudCc7XHJcblxyXG4vLyBEdW1teSBhY3Rpb24gdG8gZm9yY2UgUGVvcGxlUGlja2VySXRlbUNzcyB0byBsb2FkIGFuZCBub3QgYmUgdHJlZS1zaGFrZW4gYXdheS5cclxubm9vcChQZW9wbGVQaWNrZXJJdGVtQ3NzKTtcclxuXHJcbmNvbnN0IGNvbXBvbmVudHMgPSBbRmFiUGVvcGxlUGlja2VyQ29tcG9uZW50XTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRmFiQmFzZVBpY2tlck1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBjb21wb25lbnRzLFxyXG4gIGV4cG9ydHM6IGNvbXBvbmVudHMsXHJcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmFiUGVvcGxlUGlja2VyTW9kdWxlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vIEFkZCBhbnkgUmVhY3QgZWxlbWVudHMgdG8gdGhlIHJlZ2lzdHJ5ICh1c2VkIGJ5IHRoZSByZW5kZXJlcikuXHJcbiAgICByZWdpc3RlckVsZW1lbnQoJ1Blb3BsZVBpY2tlcicsICgpID0+IE5vcm1hbFBlb3BsZVBpY2tlckJhc2UgYXMgYW55KTtcclxuICB9XHJcbn1cclxuIl19