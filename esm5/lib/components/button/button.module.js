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
var components = [
    FabDefaultButtonComponent,
    FabActionButtonComponent,
    FabCommandBarButtonComponent,
    FabCompoundButtonComponent,
    FabIconButtonComponent,
    FabMessageBarButtonComponent,
    FabPrimaryButtonComponent,
    FabSplitButtonComponent,
];
var FabButtonModule = /** @class */ (function () {
    function FabButtonModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('DefaultButton', (/**
         * @return {?}
         */
        function () { return DefaultButton; }));
        registerElement('ActionButton', (/**
         * @return {?}
         */
        function () { return ActionButton; }));
        registerElement('CommandBarButton', (/**
         * @return {?}
         */
        function () { return CommandBarButton; }));
        registerElement('CompoundButton', (/**
         * @return {?}
         */
        function () { return CompoundButton; }));
        registerElement('IconButton', (/**
         * @return {?}
         */
        function () { return IconButton; }));
        registerElement('MessageBarButton', (/**
         * @return {?}
         */
        function () { return MessageBarButton; }));
        registerElement('PrimaryButton', (/**
         * @return {?}
         */
        function () { return PrimaryButton; }));
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
    FabButtonModule.ctorParameters = function () { return []; };
    return FabButtonModule;
}());
export { FabButtonModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy9saWIvY29tcG9uZW50cy9idXR0b24vIiwic291cmNlcyI6WyJidXR0b24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQ0wsWUFBWSxFQUNaLGdCQUFnQixFQUNoQixjQUFjLEVBQ2QsYUFBYSxFQUNiLFVBQVUsRUFDVixnQkFBZ0IsRUFDaEIsYUFBYSxHQUNkLE1BQU0sbUNBQW1DLENBQUM7QUFDM0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDckUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDekUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdkUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDakUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDN0UsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdkUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0lBRTdELFVBQVUsR0FBRztJQUNqQix5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1QiwwQkFBMEI7SUFDMUIsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1Qix5QkFBeUI7SUFDekIsdUJBQXVCO0NBQ3hCO0FBRUQ7SUFPRTtRQUNFLGlFQUFpRTtRQUNqRSxlQUFlLENBQUMsZUFBZTs7O1FBQUUsY0FBTSxPQUFBLGFBQWEsRUFBYixDQUFhLEVBQUMsQ0FBQztRQUN0RCxlQUFlLENBQUMsY0FBYzs7O1FBQUUsY0FBTSxPQUFBLFlBQVksRUFBWixDQUFZLEVBQUMsQ0FBQztRQUNwRCxlQUFlLENBQUMsa0JBQWtCOzs7UUFBRSxjQUFNLE9BQUEsZ0JBQWdCLEVBQWhCLENBQWdCLEVBQUMsQ0FBQztRQUM1RCxlQUFlLENBQUMsZ0JBQWdCOzs7UUFBRSxjQUFNLE9BQUEsY0FBYyxFQUFkLENBQWMsRUFBQyxDQUFDO1FBQ3hELGVBQWUsQ0FBQyxZQUFZOzs7UUFBRSxjQUFNLE9BQUEsVUFBVSxFQUFWLENBQVUsRUFBQyxDQUFDO1FBQ2hELGVBQWUsQ0FBQyxrQkFBa0I7OztRQUFFLGNBQU0sT0FBQSxnQkFBZ0IsRUFBaEIsQ0FBZ0IsRUFBQyxDQUFDO1FBQzVELGVBQWUsQ0FBQyxlQUFlOzs7UUFBRSxjQUFNLE9BQUEsYUFBYSxFQUFiLENBQWEsRUFBQyxDQUFDO0lBQ3hELENBQUM7O2dCQWhCRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixZQUFZLEVBQUUsVUFBVTtvQkFDeEIsT0FBTyxFQUFFLFVBQVU7b0JBQ25CLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO2lCQUM1Qjs7OztJQVlELHNCQUFDO0NBQUEsQUFqQkQsSUFpQkM7U0FYWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIEFjdGlvbkJ1dHRvbixcclxuICBDb21tYW5kQmFyQnV0dG9uLFxyXG4gIENvbXBvdW5kQnV0dG9uLFxyXG4gIERlZmF1bHRCdXR0b24sXHJcbiAgSWNvbkJ1dHRvbixcclxuICBNZXNzYWdlQmFyQnV0dG9uLFxyXG4gIFByaW1hcnlCdXR0b24sXHJcbn0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvQnV0dG9uJztcclxuaW1wb3J0IHsgRmFiQWN0aW9uQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9hY3Rpb24tYnV0dG9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZhYkNvbW1hbmRCYXJCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2NvbW1hbmQtYmFyLWJ1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGYWJDb21wb3VuZEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG91bmQtYnV0dG9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZhYkRlZmF1bHRCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2RlZmF1bHQtYnV0dG9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZhYkljb25CdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2ljb24tYnV0dG9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZhYk1lc3NhZ2VCYXJCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL21lc3NhZ2ViYXItYnV0dG9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZhYlByaW1hcnlCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL3ByaW1hcnktYnV0dG9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZhYlNwbGl0QnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9zcGxpdC1idXR0b24uY29tcG9uZW50JztcclxuXHJcbmNvbnN0IGNvbXBvbmVudHMgPSBbXHJcbiAgRmFiRGVmYXVsdEJ1dHRvbkNvbXBvbmVudCxcclxuICBGYWJBY3Rpb25CdXR0b25Db21wb25lbnQsXHJcbiAgRmFiQ29tbWFuZEJhckJ1dHRvbkNvbXBvbmVudCxcclxuICBGYWJDb21wb3VuZEJ1dHRvbkNvbXBvbmVudCxcclxuICBGYWJJY29uQnV0dG9uQ29tcG9uZW50LFxyXG4gIEZhYk1lc3NhZ2VCYXJCdXR0b25Db21wb25lbnQsXHJcbiAgRmFiUHJpbWFyeUJ1dHRvbkNvbXBvbmVudCxcclxuICBGYWJTcGxpdEJ1dHRvbkNvbXBvbmVudCxcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBjb21wb25lbnRzLFxyXG4gIGV4cG9ydHM6IGNvbXBvbmVudHMsXHJcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmFiQnV0dG9uTW9kdWxlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vIEFkZCBhbnkgUmVhY3QgZWxlbWVudHMgdG8gdGhlIHJlZ2lzdHJ5ICh1c2VkIGJ5IHRoZSByZW5kZXJlcikuXHJcbiAgICByZWdpc3RlckVsZW1lbnQoJ0RlZmF1bHRCdXR0b24nLCAoKSA9PiBEZWZhdWx0QnV0dG9uKTtcclxuICAgIHJlZ2lzdGVyRWxlbWVudCgnQWN0aW9uQnV0dG9uJywgKCkgPT4gQWN0aW9uQnV0dG9uKTtcclxuICAgIHJlZ2lzdGVyRWxlbWVudCgnQ29tbWFuZEJhckJ1dHRvbicsICgpID0+IENvbW1hbmRCYXJCdXR0b24pO1xyXG4gICAgcmVnaXN0ZXJFbGVtZW50KCdDb21wb3VuZEJ1dHRvbicsICgpID0+IENvbXBvdW5kQnV0dG9uKTtcclxuICAgIHJlZ2lzdGVyRWxlbWVudCgnSWNvbkJ1dHRvbicsICgpID0+IEljb25CdXR0b24pO1xyXG4gICAgcmVnaXN0ZXJFbGVtZW50KCdNZXNzYWdlQmFyQnV0dG9uJywgKCkgPT4gTWVzc2FnZUJhckJ1dHRvbik7XHJcbiAgICByZWdpc3RlckVsZW1lbnQoJ1ByaW1hcnlCdXR0b24nLCAoKSA9PiBQcmltYXJ5QnV0dG9uKTtcclxuICB9XHJcbn1cclxuIl19