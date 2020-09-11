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
const components = [FabTextFieldComponent, FabMaskedTextFieldComponent];
export class FabTextFieldModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('TextField', (/**
         * @return {?}
         */
        () => TextField));
        registerElement('MaskedTextField', (/**
         * @return {?}
         */
        () => MaskedTextField));
    }
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
FabTextFieldModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1maWVsZC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvbGliL2NvbXBvbmVudHMvdGV4dC1maWVsZC8iLCJzb3VyY2VzIjpbInRleHQtZmllbGQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQy9ELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLCtCQUErQixDQUFDOztNQUV0RSxVQUFVLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSwyQkFBMkIsQ0FBQztBQVF2RSxNQUFNLE9BQU8sa0JBQWtCO0lBQzdCO1FBQ0UsaUVBQWlFO1FBQ2pFLGVBQWUsQ0FBQyxXQUFXOzs7UUFBRSxHQUFHLEVBQUUsQ0FBQyxTQUFTLEVBQUMsQ0FBQztRQUM5QyxlQUFlLENBQUMsaUJBQWlCOzs7UUFBRSxHQUFHLEVBQUUsQ0FBQyxlQUFlLEVBQUMsQ0FBQztJQUM1RCxDQUFDOzs7WUFYRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN2QixZQUFZLEVBQUUsVUFBVTtnQkFDeEIsT0FBTyxFQUFFLFVBQVU7Z0JBQ25CLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO2FBQzVCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQsIE1hc2tlZFRleHRGaWVsZCB9IGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliL1RleHRGaWVsZCc7XHJcbmltcG9ydCB7IEZhYlRleHRGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vdGV4dC1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGYWJNYXNrZWRUZXh0RmllbGRDb21wb25lbnQgfSBmcm9tICcuL21hc2tlZC10ZXh0LWZpZWxkLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBjb21wb25lbnRzID0gW0ZhYlRleHRGaWVsZENvbXBvbmVudCwgRmFiTWFza2VkVGV4dEZpZWxkQ29tcG9uZW50XTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBjb21wb25lbnRzLFxyXG4gIGV4cG9ydHM6IGNvbXBvbmVudHMsXHJcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmFiVGV4dEZpZWxkTW9kdWxlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vIEFkZCBhbnkgUmVhY3QgZWxlbWVudHMgdG8gdGhlIHJlZ2lzdHJ5ICh1c2VkIGJ5IHRoZSByZW5kZXJlcikuXHJcbiAgICByZWdpc3RlckVsZW1lbnQoJ1RleHRGaWVsZCcsICgpID0+IFRleHRGaWVsZCk7XHJcbiAgICByZWdpc3RlckVsZW1lbnQoJ01hc2tlZFRleHRGaWVsZCcsICgpID0+IE1hc2tlZFRleHRGaWVsZCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==