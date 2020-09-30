/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { registerElement } from '@angular-react/core';
import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import * as OverflowSetCss from 'office-ui-fabric-react/lib-amd/components/OverflowSet/OverflowSet.scss';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
import { noop } from '@angular-react/fabric/lib/utils';
import { FabContextualMenuModule } from '@angular-react/fabric/lib/components/contextual-menu';
import { FabCommandBarComponent } from './command-bar.component';
import { CommandBarItemDirective, CommandBarItemRenderDirective, CommandBarItemRenderIconDirective, } from './directives/command-bar-item.directives';
import { CommandBarFarItemsDirective, CommandBarItemsDirective, CommandBarOverflowItemsDirective, } from './directives/command-bar-items.directives';
// Dummy action to force OverflowSetCss to load and not be tree-shaken away.
noop(OverflowSetCss);
/** @type {?} */
var components = [
    FabCommandBarComponent,
    CommandBarItemsDirective,
    CommandBarFarItemsDirective,
    CommandBarOverflowItemsDirective,
    CommandBarItemDirective,
    CommandBarItemRenderDirective,
    CommandBarItemRenderIconDirective,
];
var FabCommandBarModule = /** @class */ (function () {
    function FabCommandBarModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('CommandBar', (/**
         * @return {?}
         */
        function () { return CommandBar; }));
    }
    FabCommandBarModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FabContextualMenuModule],
                    declarations: components,
                    exports: tslib_1.__spread(components, [FabContextualMenuModule]),
                    schemas: [NO_ERRORS_SCHEMA],
                },] }
    ];
    /** @nocollapse */
    FabCommandBarModule.ctorParameters = function () { return []; };
    return FabCommandBarModule;
}());
export { FabCommandBarModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC1iYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY29tbWFuZC1iYXIvY29tbWFuZC1iYXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxLQUFLLGNBQWMsTUFBTSx3RUFBd0UsQ0FBQztBQUN6RyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDbkUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRXZELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2pFLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsNkJBQTZCLEVBQzdCLGlDQUFpQyxHQUNsQyxNQUFNLDBDQUEwQyxDQUFDO0FBQ2xELE9BQU8sRUFDTCwyQkFBMkIsRUFDM0Isd0JBQXdCLEVBQ3hCLGdDQUFnQyxHQUNqQyxNQUFNLDJDQUEyQyxDQUFDOztBQUduRCxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7O0lBRWYsVUFBVSxHQUFHO0lBQ2pCLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsMkJBQTJCO0lBQzNCLGdDQUFnQztJQUNoQyx1QkFBdUI7SUFDdkIsNkJBQTZCO0lBQzdCLGlDQUFpQztDQUNsQztBQUVEO0lBT0U7UUFDRSxpRUFBaUU7UUFDakUsZUFBZSxDQUFDLFlBQVk7OztRQUFFLGNBQU0sT0FBQSxVQUFVLEVBQVYsQ0FBVSxFQUFDLENBQUM7SUFDbEQsQ0FBQzs7Z0JBVkYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSx1QkFBdUIsQ0FBQztvQkFDaEQsWUFBWSxFQUFFLFVBQVU7b0JBQ3hCLE9BQU8sbUJBQU0sVUFBVSxHQUFFLHVCQUF1QixFQUFDO29CQUNqRCxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztpQkFDNUI7Ozs7SUFNRCwwQkFBQztDQUFBLEFBWEQsSUFXQztTQUxZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgT3ZlcmZsb3dTZXRDc3MgZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWItYW1kL2NvbXBvbmVudHMvT3ZlcmZsb3dTZXQvT3ZlcmZsb3dTZXQuc2Nzcyc7XHJcbmltcG9ydCB7IENvbW1hbmRCYXIgfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9Db21tYW5kQmFyJztcclxuaW1wb3J0IHsgbm9vcCB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy9saWIvdXRpbHMnO1xyXG5cclxuaW1wb3J0IHsgRmFiQ29udGV4dHVhbE1lbnVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9mYWJyaWMvbGliL2NvbXBvbmVudHMvY29udGV4dHVhbC1tZW51JztcclxuaW1wb3J0IHsgRmFiQ29tbWFuZEJhckNvbXBvbmVudCB9IGZyb20gJy4vY29tbWFuZC1iYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtcclxuICBDb21tYW5kQmFySXRlbURpcmVjdGl2ZSxcclxuICBDb21tYW5kQmFySXRlbVJlbmRlckRpcmVjdGl2ZSxcclxuICBDb21tYW5kQmFySXRlbVJlbmRlckljb25EaXJlY3RpdmUsXHJcbn0gZnJvbSAnLi9kaXJlY3RpdmVzL2NvbW1hbmQtYmFyLWl0ZW0uZGlyZWN0aXZlcyc7XHJcbmltcG9ydCB7XHJcbiAgQ29tbWFuZEJhckZhckl0ZW1zRGlyZWN0aXZlLFxyXG4gIENvbW1hbmRCYXJJdGVtc0RpcmVjdGl2ZSxcclxuICBDb21tYW5kQmFyT3ZlcmZsb3dJdGVtc0RpcmVjdGl2ZSxcclxufSBmcm9tICcuL2RpcmVjdGl2ZXMvY29tbWFuZC1iYXItaXRlbXMuZGlyZWN0aXZlcyc7XHJcblxyXG4vLyBEdW1teSBhY3Rpb24gdG8gZm9yY2UgT3ZlcmZsb3dTZXRDc3MgdG8gbG9hZCBhbmQgbm90IGJlIHRyZWUtc2hha2VuIGF3YXkuXHJcbm5vb3AoT3ZlcmZsb3dTZXRDc3MpO1xyXG5cclxuY29uc3QgY29tcG9uZW50cyA9IFtcclxuICBGYWJDb21tYW5kQmFyQ29tcG9uZW50LFxyXG4gIENvbW1hbmRCYXJJdGVtc0RpcmVjdGl2ZSxcclxuICBDb21tYW5kQmFyRmFySXRlbXNEaXJlY3RpdmUsXHJcbiAgQ29tbWFuZEJhck92ZXJmbG93SXRlbXNEaXJlY3RpdmUsXHJcbiAgQ29tbWFuZEJhckl0ZW1EaXJlY3RpdmUsXHJcbiAgQ29tbWFuZEJhckl0ZW1SZW5kZXJEaXJlY3RpdmUsXHJcbiAgQ29tbWFuZEJhckl0ZW1SZW5kZXJJY29uRGlyZWN0aXZlLFxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGYWJDb250ZXh0dWFsTWVudU1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBjb21wb25lbnRzLFxyXG4gIGV4cG9ydHM6IFsuLi5jb21wb25lbnRzLCBGYWJDb250ZXh0dWFsTWVudU1vZHVsZV0sXHJcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmFiQ29tbWFuZEJhck1vZHVsZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyBBZGQgYW55IFJlYWN0IGVsZW1lbnRzIHRvIHRoZSByZWdpc3RyeSAodXNlZCBieSB0aGUgcmVuZGVyZXIpLlxyXG4gICAgcmVnaXN0ZXJFbGVtZW50KCdDb21tYW5kQmFyJywgKCkgPT4gQ29tbWFuZEJhcik7XHJcbiAgfVxyXG59XHJcbiJdfQ==