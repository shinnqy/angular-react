/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { registerElement } from '@angular-react/core';
import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Panel } from 'office-ui-fabric-react/lib/Panel';
import { FabPanelComponent } from './panel.component';
/** @type {?} */
const components = [FabPanelComponent];
export class FabPanelModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Panel', (/**
         * @return {?}
         */
        () => Panel));
    }
}
FabPanelModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components,
                exports: components,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabPanelModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljL2xpYi9jb21wb25lbnRzL3BhbmVsLyIsInNvdXJjZXMiOlsicGFuZWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDekQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7O01BRWhELFVBQVUsR0FBRyxDQUFDLGlCQUFpQixDQUFDO0FBUXRDLE1BQU0sT0FBTyxjQUFjO0lBQ3pCO1FBQ0UsaUVBQWlFO1FBQ2pFLGVBQWUsQ0FBQyxPQUFPOzs7UUFBRSxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUMsQ0FBQztJQUN4QyxDQUFDOzs7WUFWRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN2QixZQUFZLEVBQUUsVUFBVTtnQkFDeEIsT0FBTyxFQUFFLFVBQVU7Z0JBQ25CLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO2FBQzVCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQYW5lbCB9IGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliL1BhbmVsJztcclxuaW1wb3J0IHsgRmFiUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL3BhbmVsLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBjb21wb25lbnRzID0gW0ZhYlBhbmVsQ29tcG9uZW50XTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBjb21wb25lbnRzLFxyXG4gIGV4cG9ydHM6IGNvbXBvbmVudHMsXHJcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmFiUGFuZWxNb2R1bGUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy8gQWRkIGFueSBSZWFjdCBlbGVtZW50cyB0byB0aGUgcmVnaXN0cnkgKHVzZWQgYnkgdGhlIHJlbmRlcmVyKS5cclxuICAgIHJlZ2lzdGVyRWxlbWVudCgnUGFuZWwnLCAoKSA9PiBQYW5lbCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==