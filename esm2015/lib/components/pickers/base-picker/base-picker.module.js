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
import { noop } from '@angular-react/fabric/lib/utils';
// Dummy action to force BasePickerCss to load and not be tree-shaken away.
noop(BasePickerCss);
export class FabBasePickerModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('BasePicker', (/**
         * @return {?}
         */
        () => BasePicker));
    }
}
FabBasePickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabBasePickerModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1waWNrZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcGlja2Vycy9iYXNlLXBpY2tlci9iYXNlLXBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0EsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sS0FBSyxhQUFhLE1BQU0sbUVBQW1FLENBQUM7QUFDbkcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7QUFHdkQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBTXBCLE1BQU0sT0FBTyxtQkFBbUI7SUFDOUI7UUFDRSxpRUFBaUU7UUFDakUsZUFBZSxDQUFDLFlBQVk7OztRQUFFLEdBQUcsRUFBRSxDQUFDLFVBQVUsRUFBQyxDQUFDO0lBQ2xELENBQUM7OztZQVJGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZCLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO2FBQzVCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBCYXNlUGlja2VyQ3NzIGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliLWFtZC9jb21wb25lbnRzL3BpY2tlcnMvQmFzZVBpY2tlci5zY3NzJztcclxuaW1wb3J0IHsgQmFzZVBpY2tlciB9IGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliL1BpY2tlcnMnO1xyXG5pbXBvcnQgeyBub29wIH0gZnJvbSAnQGFuZ3VsYXItcmVhY3QvZmFicmljL2xpYi91dGlscyc7XHJcblxyXG4vLyBEdW1teSBhY3Rpb24gdG8gZm9yY2UgQmFzZVBpY2tlckNzcyB0byBsb2FkIGFuZCBub3QgYmUgdHJlZS1zaGFrZW4gYXdheS5cclxubm9vcChCYXNlUGlja2VyQ3NzKTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmFiQmFzZVBpY2tlck1vZHVsZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyBBZGQgYW55IFJlYWN0IGVsZW1lbnRzIHRvIHRoZSByZWdpc3RyeSAodXNlZCBieSB0aGUgcmVuZGVyZXIpLlxyXG4gICAgcmVnaXN0ZXJFbGVtZW50KCdCYXNlUGlja2VyJywgKCkgPT4gQmFzZVBpY2tlcik7XHJcbiAgfVxyXG59XHJcbiJdfQ==