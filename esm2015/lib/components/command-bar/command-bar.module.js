/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { registerElement } from '@angular-react/core';
import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import * as OverflowSetCss from 'office-ui-fabric-react/lib-amd/components/OverflowSet/OverflowSet.scss';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
import { noop } from 'angular-react-toolkit/utils/noop';
// TODO:
import { FabContextualMenuModule } from '../contextual-menu/contextual-menu.module';
import { FabCommandBarComponent } from './command-bar.component';
import { CommandBarItemDirective, CommandBarItemRenderDirective, CommandBarItemRenderIconDirective, } from './directives/command-bar-item.directives';
import { CommandBarFarItemsDirective, CommandBarItemsDirective, CommandBarOverflowItemsDirective, } from './directives/command-bar-items.directives';
// Dummy action to force OverflowSetCss to load and not be tree-shaken away.
noop(OverflowSetCss);
/** @type {?} */
const components = [
    FabCommandBarComponent,
    CommandBarItemsDirective,
    CommandBarFarItemsDirective,
    CommandBarOverflowItemsDirective,
    CommandBarItemDirective,
    CommandBarItemRenderDirective,
    CommandBarItemRenderIconDirective,
];
export class FabCommandBarModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('CommandBar', (/**
         * @return {?}
         */
        () => CommandBar));
    }
}
FabCommandBarModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FabContextualMenuModule],
                declarations: components,
                exports: [...components, FabContextualMenuModule],
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabCommandBarModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC1iYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY29tbWFuZC1iYXIvY29tbWFuZC1iYXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEtBQUssY0FBYyxNQUFNLHdFQUF3RSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7O0FBR3hELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2pFLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsNkJBQTZCLEVBQzdCLGlDQUFpQyxHQUNsQyxNQUFNLDBDQUEwQyxDQUFDO0FBQ2xELE9BQU8sRUFDTCwyQkFBMkIsRUFDM0Isd0JBQXdCLEVBQ3hCLGdDQUFnQyxHQUNqQyxNQUFNLDJDQUEyQyxDQUFDOztBQUduRCxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7O01BRWYsVUFBVSxHQUFHO0lBQ2pCLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsMkJBQTJCO0lBQzNCLGdDQUFnQztJQUNoQyx1QkFBdUI7SUFDdkIsNkJBQTZCO0lBQzdCLGlDQUFpQztDQUNsQztBQVFELE1BQU0sT0FBTyxtQkFBbUI7SUFDOUI7UUFDRSxpRUFBaUU7UUFDakUsZUFBZSxDQUFDLFlBQVk7OztRQUFFLEdBQUcsRUFBRSxDQUFDLFVBQVUsRUFBQyxDQUFDO0lBQ2xELENBQUM7OztZQVZGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsdUJBQXVCLENBQUM7Z0JBQ2hELFlBQVksRUFBRSxVQUFVO2dCQUN4QixPQUFPLEVBQUUsQ0FBQyxHQUFHLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQztnQkFDakQsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7YUFDNUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSAnQGFuZ3VsYXItcmVhY3QvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIE92ZXJmbG93U2V0Q3NzIGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliLWFtZC9jb21wb25lbnRzL092ZXJmbG93U2V0L092ZXJmbG93U2V0LnNjc3MnO1xyXG5pbXBvcnQgeyBDb21tYW5kQmFyIH0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvQ29tbWFuZEJhcic7XHJcbmltcG9ydCB7IG5vb3AgfSBmcm9tICdhbmd1bGFyLXJlYWN0LXRvb2xraXQvdXRpbHMvbm9vcCc7XHJcblxyXG4vLyBUT0RPOlxyXG5pbXBvcnQgeyBGYWJDb250ZXh0dWFsTWVudU1vZHVsZSB9IGZyb20gJy4uL2NvbnRleHR1YWwtbWVudS9jb250ZXh0dWFsLW1lbnUubW9kdWxlJztcclxuaW1wb3J0IHsgRmFiQ29tbWFuZEJhckNvbXBvbmVudCB9IGZyb20gJy4vY29tbWFuZC1iYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtcclxuICBDb21tYW5kQmFySXRlbURpcmVjdGl2ZSxcclxuICBDb21tYW5kQmFySXRlbVJlbmRlckRpcmVjdGl2ZSxcclxuICBDb21tYW5kQmFySXRlbVJlbmRlckljb25EaXJlY3RpdmUsXHJcbn0gZnJvbSAnLi9kaXJlY3RpdmVzL2NvbW1hbmQtYmFyLWl0ZW0uZGlyZWN0aXZlcyc7XHJcbmltcG9ydCB7XHJcbiAgQ29tbWFuZEJhckZhckl0ZW1zRGlyZWN0aXZlLFxyXG4gIENvbW1hbmRCYXJJdGVtc0RpcmVjdGl2ZSxcclxuICBDb21tYW5kQmFyT3ZlcmZsb3dJdGVtc0RpcmVjdGl2ZSxcclxufSBmcm9tICcuL2RpcmVjdGl2ZXMvY29tbWFuZC1iYXItaXRlbXMuZGlyZWN0aXZlcyc7XHJcblxyXG4vLyBEdW1teSBhY3Rpb24gdG8gZm9yY2UgT3ZlcmZsb3dTZXRDc3MgdG8gbG9hZCBhbmQgbm90IGJlIHRyZWUtc2hha2VuIGF3YXkuXHJcbm5vb3AoT3ZlcmZsb3dTZXRDc3MpO1xyXG5cclxuY29uc3QgY29tcG9uZW50cyA9IFtcclxuICBGYWJDb21tYW5kQmFyQ29tcG9uZW50LFxyXG4gIENvbW1hbmRCYXJJdGVtc0RpcmVjdGl2ZSxcclxuICBDb21tYW5kQmFyRmFySXRlbXNEaXJlY3RpdmUsXHJcbiAgQ29tbWFuZEJhck92ZXJmbG93SXRlbXNEaXJlY3RpdmUsXHJcbiAgQ29tbWFuZEJhckl0ZW1EaXJlY3RpdmUsXHJcbiAgQ29tbWFuZEJhckl0ZW1SZW5kZXJEaXJlY3RpdmUsXHJcbiAgQ29tbWFuZEJhckl0ZW1SZW5kZXJJY29uRGlyZWN0aXZlLFxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGYWJDb250ZXh0dWFsTWVudU1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBjb21wb25lbnRzLFxyXG4gIGV4cG9ydHM6IFsuLi5jb21wb25lbnRzLCBGYWJDb250ZXh0dWFsTWVudU1vZHVsZV0sXHJcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmFiQ29tbWFuZEJhck1vZHVsZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyBBZGQgYW55IFJlYWN0IGVsZW1lbnRzIHRvIHRoZSByZWdpc3RyeSAodXNlZCBieSB0aGUgcmVuZGVyZXIpLlxyXG4gICAgcmVnaXN0ZXJFbGVtZW50KCdDb21tYW5kQmFyJywgKCkgPT4gQ29tbWFuZEJhcik7XHJcbiAgfVxyXG59XHJcbiJdfQ==