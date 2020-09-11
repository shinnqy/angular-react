/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { registerElement } from '@angular-react/core';
import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import * as BasePickerCss from 'office-ui-fabric-react/lib-amd/components/pickers/BasePicker.scss';
import { BasePicker } from 'office-ui-fabric-react/lib/Pickers';
import { noop } from 'angular-react-toolkit/utils/noop';
// Dummy action to force BasePickerCss to load and not be tree-shaken away.
noop(BasePickerCss);
var FabBasePickerModule = /** @class */ (function () {
    function FabBasePickerModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('BasePicker', (/**
         * @return {?}
         */
        function () { return BasePicker; }));
    }
    FabBasePickerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    schemas: [NO_ERRORS_SCHEMA],
                },] }
    ];
    /** @nocollapse */
    FabBasePickerModule.ctorParameters = function () { return []; };
    return FabBasePickerModule;
}());
export { FabBasePickerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1waWNrZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljL2xpYi9jb21wb25lbnRzL3BpY2tlcnMvIiwic291cmNlcyI6WyJiYXNlLXBpY2tlci9iYXNlLXBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0EsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sS0FBSyxhQUFhLE1BQU0sbUVBQW1FLENBQUM7QUFDbkcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7QUFHeEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBRXBCO0lBS0U7UUFDRSxpRUFBaUU7UUFDakUsZUFBZSxDQUFDLFlBQVk7OztRQUFFLGNBQU0sT0FBQSxVQUFVLEVBQVYsQ0FBVSxFQUFDLENBQUM7SUFDbEQsQ0FBQzs7Z0JBUkYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7aUJBQzVCOzs7O0lBTUQsMEJBQUM7Q0FBQSxBQVRELElBU0M7U0FMWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSAnQGFuZ3VsYXItcmVhY3QvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIEJhc2VQaWNrZXJDc3MgZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWItYW1kL2NvbXBvbmVudHMvcGlja2Vycy9CYXNlUGlja2VyLnNjc3MnO1xyXG5pbXBvcnQgeyBCYXNlUGlja2VyIH0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvUGlja2Vycyc7XHJcbmltcG9ydCB7IG5vb3AgfSBmcm9tICdhbmd1bGFyLXJlYWN0LXRvb2xraXQvdXRpbHMvbm9vcCc7XHJcblxyXG4vLyBEdW1teSBhY3Rpb24gdG8gZm9yY2UgQmFzZVBpY2tlckNzcyB0byBsb2FkIGFuZCBub3QgYmUgdHJlZS1zaGFrZW4gYXdheS5cclxubm9vcChCYXNlUGlja2VyQ3NzKTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmFiQmFzZVBpY2tlck1vZHVsZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyBBZGQgYW55IFJlYWN0IGVsZW1lbnRzIHRvIHRoZSByZWdpc3RyeSAodXNlZCBieSB0aGUgcmVuZGVyZXIpLlxyXG4gICAgcmVnaXN0ZXJFbGVtZW50KCdCYXNlUGlja2VyJywgKCkgPT4gQmFzZVBpY2tlcik7XHJcbiAgfVxyXG59XHJcbiJdfQ==