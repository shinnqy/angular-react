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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVvcGxlLXBpY2tlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9waWNrZXJzL3Blb3BsZS1waWNrZXIvcGVvcGxlLXBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0EsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sS0FBSyxtQkFBbUIsTUFBTSwwR0FBMEcsQ0FBQztBQUNoSixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDeEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0FBR3JFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDOztJQUVwQixVQUFVLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQztBQUU3QztJQU9FO1FBQ0UsaUVBQWlFO1FBQ2pFLGVBQWUsQ0FBQyxjQUFjOzs7UUFBRSxxQkFBTSxtQkFBQSxzQkFBc0IsRUFBTyxHQUFBLEVBQUMsQ0FBQztJQUN2RSxDQUFDOztnQkFWRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLG1CQUFtQixDQUFDO29CQUM1QyxZQUFZLEVBQUUsVUFBVTtvQkFDeEIsT0FBTyxFQUFFLFVBQVU7b0JBQ25CLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO2lCQUM1Qjs7OztJQU1ELDRCQUFDO0NBQUEsQUFYRCxJQVdDO1NBTFkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBQZW9wbGVQaWNrZXJJdGVtQ3NzIGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliLWFtZC9jb21wb25lbnRzL3BpY2tlcnMvUGVvcGxlUGlja2VyL1Blb3BsZVBpY2tlckl0ZW1zL1BpY2tlckl0ZW1zRGVmYXVsdC5zY3NzJztcclxuaW1wb3J0IHsgTm9ybWFsUGVvcGxlUGlja2VyQmFzZSB9IGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliL1BpY2tlcnMnO1xyXG5pbXBvcnQgeyBub29wIH0gZnJvbSAnQGFuZ3VsYXItcmVhY3QvZmFicmljL2xpYi91dGlscyc7XHJcbmltcG9ydCB7IEZhYkJhc2VQaWNrZXJNb2R1bGUgfSBmcm9tICcuLi9iYXNlLXBpY2tlci9iYXNlLXBpY2tlci5tb2R1bGUnO1xyXG5pbXBvcnQgeyBGYWJQZW9wbGVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL3Blb3BsZS1waWNrZXIuY29tcG9uZW50JztcclxuXHJcbi8vIER1bW15IGFjdGlvbiB0byBmb3JjZSBQZW9wbGVQaWNrZXJJdGVtQ3NzIHRvIGxvYWQgYW5kIG5vdCBiZSB0cmVlLXNoYWtlbiBhd2F5LlxyXG5ub29wKFBlb3BsZVBpY2tlckl0ZW1Dc3MpO1xyXG5cclxuY29uc3QgY29tcG9uZW50cyA9IFtGYWJQZW9wbGVQaWNrZXJDb21wb25lbnRdO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGYWJCYXNlUGlja2VyTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IGNvbXBvbmVudHMsXHJcbiAgZXhwb3J0czogY29tcG9uZW50cyxcclxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYWJQZW9wbGVQaWNrZXJNb2R1bGUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy8gQWRkIGFueSBSZWFjdCBlbGVtZW50cyB0byB0aGUgcmVnaXN0cnkgKHVzZWQgYnkgdGhlIHJlbmRlcmVyKS5cclxuICAgIHJlZ2lzdGVyRWxlbWVudCgnUGVvcGxlUGlja2VyJywgKCkgPT4gTm9ybWFsUGVvcGxlUGlja2VyQmFzZSBhcyBhbnkpO1xyXG4gIH1cclxufVxyXG4iXX0=