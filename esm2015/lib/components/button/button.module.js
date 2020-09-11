/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { registerElement } from '@angular-react/core';
import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ActionButton, CommandBarButton, CompoundButton, DefaultButton, IconButton, MessageBarButton, PrimaryButton, } from 'office-ui-fabric-react/lib/Button';
import { FabActionButtonComponent } from './action-button.component';
import { FabCommandBarButtonComponent } from './command-bar-button.component';
import { FabCompoundButtonComponent } from './compound-button.component';
import { FabDefaultButtonComponent } from './default-button.component';
import { FabIconButtonComponent } from './icon-button.component';
import { FabMessageBarButtonComponent } from './messagebar-button.component';
import { FabPrimaryButtonComponent } from './primary-button.component';
import { FabSplitButtonComponent } from './split-button.component';
/** @type {?} */
const components = [
    FabDefaultButtonComponent,
    FabActionButtonComponent,
    FabCommandBarButtonComponent,
    FabCompoundButtonComponent,
    FabIconButtonComponent,
    FabMessageBarButtonComponent,
    FabPrimaryButtonComponent,
    FabSplitButtonComponent,
];
export class FabButtonModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('DefaultButton', (/**
         * @return {?}
         */
        () => DefaultButton));
        registerElement('ActionButton', (/**
         * @return {?}
         */
        () => ActionButton));
        registerElement('CommandBarButton', (/**
         * @return {?}
         */
        () => CommandBarButton));
        registerElement('CompoundButton', (/**
         * @return {?}
         */
        () => CompoundButton));
        registerElement('IconButton', (/**
         * @return {?}
         */
        () => IconButton));
        registerElement('MessageBarButton', (/**
         * @return {?}
         */
        () => MessageBarButton));
        registerElement('PrimaryButton', (/**
         * @return {?}
         */
        () => PrimaryButton));
    }
}
FabButtonModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components,
                exports: components,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabButtonModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQ0wsWUFBWSxFQUNaLGdCQUFnQixFQUNoQixjQUFjLEVBQ2QsYUFBYSxFQUNiLFVBQVUsRUFDVixnQkFBZ0IsRUFDaEIsYUFBYSxHQUNkLE1BQU0sbUNBQW1DLENBQUM7QUFDM0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDckUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDekUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdkUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDakUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDN0UsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdkUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7O01BRTdELFVBQVUsR0FBRztJQUNqQix5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1QiwwQkFBMEI7SUFDMUIsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1Qix5QkFBeUI7SUFDekIsdUJBQXVCO0NBQ3hCO0FBUUQsTUFBTSxPQUFPLGVBQWU7SUFDMUI7UUFDRSxpRUFBaUU7UUFDakUsZUFBZSxDQUFDLGVBQWU7OztRQUFFLEdBQUcsRUFBRSxDQUFDLGFBQWEsRUFBQyxDQUFDO1FBQ3RELGVBQWUsQ0FBQyxjQUFjOzs7UUFBRSxHQUFHLEVBQUUsQ0FBQyxZQUFZLEVBQUMsQ0FBQztRQUNwRCxlQUFlLENBQUMsa0JBQWtCOzs7UUFBRSxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBQyxDQUFDO1FBQzVELGVBQWUsQ0FBQyxnQkFBZ0I7OztRQUFFLEdBQUcsRUFBRSxDQUFDLGNBQWMsRUFBQyxDQUFDO1FBQ3hELGVBQWUsQ0FBQyxZQUFZOzs7UUFBRSxHQUFHLEVBQUUsQ0FBQyxVQUFVLEVBQUMsQ0FBQztRQUNoRCxlQUFlLENBQUMsa0JBQWtCOzs7UUFBRSxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBQyxDQUFDO1FBQzVELGVBQWUsQ0FBQyxlQUFlOzs7UUFBRSxHQUFHLEVBQUUsQ0FBQyxhQUFhLEVBQUMsQ0FBQztJQUN4RCxDQUFDOzs7WUFoQkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsWUFBWSxFQUFFLFVBQVU7Z0JBQ3hCLE9BQU8sRUFBRSxVQUFVO2dCQUNuQixPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQzthQUM1QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBBY3Rpb25CdXR0b24sXHJcbiAgQ29tbWFuZEJhckJ1dHRvbixcclxuICBDb21wb3VuZEJ1dHRvbixcclxuICBEZWZhdWx0QnV0dG9uLFxyXG4gIEljb25CdXR0b24sXHJcbiAgTWVzc2FnZUJhckJ1dHRvbixcclxuICBQcmltYXJ5QnV0dG9uLFxyXG59IGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliL0J1dHRvbic7XHJcbmltcG9ydCB7IEZhYkFjdGlvbkJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vYWN0aW9uLWJ1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGYWJDb21tYW5kQmFyQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21tYW5kLWJhci1idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgRmFiQ29tcG91bmRCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvdW5kLWJ1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGYWJEZWZhdWx0QnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9kZWZhdWx0LWJ1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGYWJJY29uQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9pY29uLWJ1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGYWJNZXNzYWdlQmFyQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9tZXNzYWdlYmFyLWJ1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGYWJQcmltYXJ5QnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9wcmltYXJ5LWJ1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGYWJTcGxpdEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vc3BsaXQtYnV0dG9uLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBjb21wb25lbnRzID0gW1xyXG4gIEZhYkRlZmF1bHRCdXR0b25Db21wb25lbnQsXHJcbiAgRmFiQWN0aW9uQnV0dG9uQ29tcG9uZW50LFxyXG4gIEZhYkNvbW1hbmRCYXJCdXR0b25Db21wb25lbnQsXHJcbiAgRmFiQ29tcG91bmRCdXR0b25Db21wb25lbnQsXHJcbiAgRmFiSWNvbkJ1dHRvbkNvbXBvbmVudCxcclxuICBGYWJNZXNzYWdlQmFyQnV0dG9uQ29tcG9uZW50LFxyXG4gIEZhYlByaW1hcnlCdXR0b25Db21wb25lbnQsXHJcbiAgRmFiU3BsaXRCdXR0b25Db21wb25lbnQsXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogY29tcG9uZW50cyxcclxuICBleHBvcnRzOiBjb21wb25lbnRzLFxyXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZhYkJ1dHRvbk1vZHVsZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyBBZGQgYW55IFJlYWN0IGVsZW1lbnRzIHRvIHRoZSByZWdpc3RyeSAodXNlZCBieSB0aGUgcmVuZGVyZXIpLlxyXG4gICAgcmVnaXN0ZXJFbGVtZW50KCdEZWZhdWx0QnV0dG9uJywgKCkgPT4gRGVmYXVsdEJ1dHRvbik7XHJcbiAgICByZWdpc3RlckVsZW1lbnQoJ0FjdGlvbkJ1dHRvbicsICgpID0+IEFjdGlvbkJ1dHRvbik7XHJcbiAgICByZWdpc3RlckVsZW1lbnQoJ0NvbW1hbmRCYXJCdXR0b24nLCAoKSA9PiBDb21tYW5kQmFyQnV0dG9uKTtcclxuICAgIHJlZ2lzdGVyRWxlbWVudCgnQ29tcG91bmRCdXR0b24nLCAoKSA9PiBDb21wb3VuZEJ1dHRvbik7XHJcbiAgICByZWdpc3RlckVsZW1lbnQoJ0ljb25CdXR0b24nLCAoKSA9PiBJY29uQnV0dG9uKTtcclxuICAgIHJlZ2lzdGVyRWxlbWVudCgnTWVzc2FnZUJhckJ1dHRvbicsICgpID0+IE1lc3NhZ2VCYXJCdXR0b24pO1xyXG4gICAgcmVnaXN0ZXJFbGVtZW50KCdQcmltYXJ5QnV0dG9uJywgKCkgPT4gUHJpbWFyeUJ1dHRvbik7XHJcbiAgfVxyXG59XHJcbiJdfQ==