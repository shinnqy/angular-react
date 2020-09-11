/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { registerElement } from '@angular-react/core';
import { MarqueeSelection } from 'office-ui-fabric-react/lib/MarqueeSelection';
import { FabMarqueeSelectionComponent } from './marquee-selection.component';
/** @type {?} */
var components = [FabMarqueeSelectionComponent];
var FabMarqueeSelectionModule = /** @class */ (function () {
    function FabMarqueeSelectionModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('MarqueeSelection', (/**
         * @return {?}
         */
        function () { return MarqueeSelection; }));
    }
    FabMarqueeSelectionModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: components,
                    exports: tslib_1.__spread(components),
                    schemas: [NO_ERRORS_SCHEMA],
                },] }
    ];
    /** @nocollapse */
    FabMarqueeSelectionModule.ctorParameters = function () { return []; };
    return FabMarqueeSelectionModule;
}());
export { FabMarqueeSelectionModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFycXVlZS1zZWxlY3Rpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljL2xpYi9jb21wb25lbnRzL21hcnF1ZWUtc2VsZWN0aW9uLyIsInNvdXJjZXMiOlsibWFycXVlZS1zZWxlY3Rpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFFL0UsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sK0JBQStCLENBQUM7O0lBRXZFLFVBQVUsR0FBRyxDQUFDLDRCQUE0QixDQUFDO0FBRWpEO0lBT0U7UUFDRSxpRUFBaUU7UUFDakUsZUFBZSxDQUFDLGtCQUFrQjs7O1FBQUUsY0FBTSxPQUFBLGdCQUFnQixFQUFoQixDQUFnQixFQUFDLENBQUM7SUFDOUQsQ0FBQzs7Z0JBVkYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsWUFBWSxFQUFFLFVBQVU7b0JBQ3hCLE9BQU8sbUJBQU0sVUFBVSxDQUFDO29CQUN4QixPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztpQkFDNUI7Ozs7SUFNRCxnQ0FBQztDQUFBLEFBWEQsSUFXQztTQUxZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9jb3JlJztcclxuaW1wb3J0IHsgTWFycXVlZVNlbGVjdGlvbiB9IGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliL01hcnF1ZWVTZWxlY3Rpb24nO1xyXG5cclxuaW1wb3J0IHsgRmFiTWFycXVlZVNlbGVjdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbWFycXVlZS1zZWxlY3Rpb24uY29tcG9uZW50JztcclxuXHJcbmNvbnN0IGNvbXBvbmVudHMgPSBbRmFiTWFycXVlZVNlbGVjdGlvbkNvbXBvbmVudF07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogY29tcG9uZW50cyxcclxuICBleHBvcnRzOiBbLi4uY29tcG9uZW50c10sXHJcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmFiTWFycXVlZVNlbGVjdGlvbk1vZHVsZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyBBZGQgYW55IFJlYWN0IGVsZW1lbnRzIHRvIHRoZSByZWdpc3RyeSAodXNlZCBieSB0aGUgcmVuZGVyZXIpLlxyXG4gICAgcmVnaXN0ZXJFbGVtZW50KCdNYXJxdWVlU2VsZWN0aW9uJywgKCkgPT4gTWFycXVlZVNlbGVjdGlvbik7XHJcbiAgfVxyXG59XHJcbiJdfQ==