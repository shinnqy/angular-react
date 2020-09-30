/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { registerElement } from '@angular-react/core';
import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { TagPicker } from 'office-ui-fabric-react';
import { FabBasePickerModule } from '../base-picker/base-picker.module';
import { FabTagPickerComponent } from './tag-picker.component';
/** @type {?} */
var components = [FabTagPickerComponent];
var FabTagPickerModule = /** @class */ (function () {
    function FabTagPickerModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('TagPicker', (/**
         * @return {?}
         */
        function () { return (/** @type {?} */ (TagPicker)); }));
    }
    FabTagPickerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FabBasePickerModule],
                    declarations: components,
                    exports: components,
                    schemas: [NO_ERRORS_SCHEMA],
                },] }
    ];
    /** @nocollapse */
    FabTagPickerModule.ctorParameters = function () { return []; };
    return FabTagPickerModule;
}());
export { FabTagPickerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLXBpY2tlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9waWNrZXJzL3RhZy1waWNrZXIvdGFnLXBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0EsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7SUFFekQsVUFBVSxHQUFHLENBQUMscUJBQXFCLENBQUM7QUFFMUM7SUFPRTtRQUNFLGlFQUFpRTtRQUNqRSxlQUFlLENBQUMsV0FBVzs7O1FBQUUscUJBQU0sbUJBQUEsU0FBUyxFQUFPLEdBQUEsRUFBQyxDQUFDO0lBQ3ZELENBQUM7O2dCQVZGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsbUJBQW1CLENBQUM7b0JBQzVDLFlBQVksRUFBRSxVQUFVO29CQUN4QixPQUFPLEVBQUUsVUFBVTtvQkFDbkIsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7aUJBQzVCOzs7O0lBTUQseUJBQUM7Q0FBQSxBQVhELElBV0M7U0FMWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSAnQGFuZ3VsYXItcmVhY3QvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRhZ1BpY2tlciB9IGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QnO1xyXG5pbXBvcnQgeyBGYWJCYXNlUGlja2VyTW9kdWxlIH0gZnJvbSAnLi4vYmFzZS1waWNrZXIvYmFzZS1waWNrZXIubW9kdWxlJztcclxuaW1wb3J0IHsgRmFiVGFnUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi90YWctcGlja2VyLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBjb21wb25lbnRzID0gW0ZhYlRhZ1BpY2tlckNvbXBvbmVudF07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZhYkJhc2VQaWNrZXJNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogY29tcG9uZW50cyxcclxuICBleHBvcnRzOiBjb21wb25lbnRzLFxyXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZhYlRhZ1BpY2tlck1vZHVsZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyBBZGQgYW55IFJlYWN0IGVsZW1lbnRzIHRvIHRoZSByZWdpc3RyeSAodXNlZCBieSB0aGUgcmVuZGVyZXIpLlxyXG4gICAgcmVnaXN0ZXJFbGVtZW50KCdUYWdQaWNrZXInLCAoKSA9PiBUYWdQaWNrZXIgYXMgYW55KTtcclxuICB9XHJcbn1cclxuIl19