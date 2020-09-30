/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { registerElement } from '@angular-react/core';
import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import { FabPivotComponent, FabPivotItemComponent } from './pivot.component';
/** @type {?} */
var components = [FabPivotComponent, FabPivotItemComponent];
var FabPivotModule = /** @class */ (function () {
    function FabPivotModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Pivot', (/**
         * @return {?}
         */
        function () { return Pivot; }));
        registerElement('PivotItem', (/**
         * @return {?}
         */
        function () { return PivotItem; }));
    }
    FabPivotModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: components,
                    exports: components,
                    schemas: [NO_ERRORS_SCHEMA],
                },] }
    ];
    /** @nocollapse */
    FabPivotModule.ctorParameters = function () { return []; };
    return FabPivotModule;
}());
export { FabPivotModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGl2b3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcGl2b3QvcGl2b3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztJQUV2RSxVQUFVLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxxQkFBcUIsQ0FBQztBQUU3RDtJQU9FO1FBQ0UsaUVBQWlFO1FBQ2pFLGVBQWUsQ0FBQyxPQUFPOzs7UUFBRSxjQUFNLE9BQUEsS0FBSyxFQUFMLENBQUssRUFBQyxDQUFDO1FBQ3RDLGVBQWUsQ0FBQyxXQUFXOzs7UUFBRSxjQUFNLE9BQUEsU0FBUyxFQUFULENBQVMsRUFBQyxDQUFDO0lBQ2hELENBQUM7O2dCQVhGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLFlBQVksRUFBRSxVQUFVO29CQUN4QixPQUFPLEVBQUUsVUFBVTtvQkFDbkIsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7aUJBQzVCOzs7O0lBT0QscUJBQUM7Q0FBQSxBQVpELElBWUM7U0FOWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXZvdCwgUGl2b3RJdGVtIH0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvUGl2b3QnO1xyXG5pbXBvcnQgeyBGYWJQaXZvdENvbXBvbmVudCwgRmFiUGl2b3RJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9waXZvdC5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgY29tcG9uZW50cyA9IFtGYWJQaXZvdENvbXBvbmVudCwgRmFiUGl2b3RJdGVtQ29tcG9uZW50XTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBjb21wb25lbnRzLFxyXG4gIGV4cG9ydHM6IGNvbXBvbmVudHMsXHJcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmFiUGl2b3RNb2R1bGUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy8gQWRkIGFueSBSZWFjdCBlbGVtZW50cyB0byB0aGUgcmVnaXN0cnkgKHVzZWQgYnkgdGhlIHJlbmRlcmVyKS5cclxuICAgIHJlZ2lzdGVyRWxlbWVudCgnUGl2b3QnLCAoKSA9PiBQaXZvdCk7XHJcbiAgICByZWdpc3RlckVsZW1lbnQoJ1Bpdm90SXRlbScsICgpID0+IFBpdm90SXRlbSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==