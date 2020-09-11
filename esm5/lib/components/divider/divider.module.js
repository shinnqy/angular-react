/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { registerElement } from '@angular-react/core';
import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { VerticalDivider } from 'office-ui-fabric-react/lib/Divider';
import { FabDividerComponent } from './divider.component';
/** @type {?} */
var components = [FabDividerComponent];
var FabDividerModule = /** @class */ (function () {
    function FabDividerModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('VerticalDivider', (/**
         * @return {?}
         */
        function () { return VerticalDivider; }));
    }
    FabDividerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: components,
                    exports: components,
                    schemas: [NO_ERRORS_SCHEMA],
                },] }
    ];
    /** @nocollapse */
    FabDividerModule.ctorParameters = function () { return []; };
    return FabDividerModule;
}());
export { FabDividerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGl2aWRlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvbGliL2NvbXBvbmVudHMvZGl2aWRlci8iLCJzb3VyY2VzIjpbImRpdmlkZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDckUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUJBQXFCLENBQUM7O0lBRXBELFVBQVUsR0FBRyxDQUFDLG1CQUFtQixDQUFDO0FBRXhDO0lBT0U7UUFDRSxpRUFBaUU7UUFDakUsZUFBZSxDQUFDLGlCQUFpQjs7O1FBQUUsY0FBTSxPQUFBLGVBQWUsRUFBZixDQUFlLEVBQUMsQ0FBQztJQUM1RCxDQUFDOztnQkFWRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixZQUFZLEVBQUUsVUFBVTtvQkFDeEIsT0FBTyxFQUFFLFVBQVU7b0JBQ25CLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO2lCQUM1Qjs7OztJQU1ELHVCQUFDO0NBQUEsQUFYRCxJQVdDO1NBTFksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBWZXJ0aWNhbERpdmlkZXIgfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9EaXZpZGVyJztcclxuaW1wb3J0IHsgRmFiRGl2aWRlckNvbXBvbmVudCB9IGZyb20gJy4vZGl2aWRlci5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgY29tcG9uZW50cyA9IFtGYWJEaXZpZGVyQ29tcG9uZW50XTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBjb21wb25lbnRzLFxyXG4gIGV4cG9ydHM6IGNvbXBvbmVudHMsXHJcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmFiRGl2aWRlck1vZHVsZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyBBZGQgYW55IFJlYWN0IGVsZW1lbnRzIHRvIHRoZSByZWdpc3RyeSAodXNlZCBieSB0aGUgcmVuZGVyZXIpLlxyXG4gICAgcmVnaXN0ZXJFbGVtZW50KCdWZXJ0aWNhbERpdmlkZXInLCAoKSA9PiBWZXJ0aWNhbERpdmlkZXIpO1xyXG4gIH1cclxufVxyXG4iXX0=