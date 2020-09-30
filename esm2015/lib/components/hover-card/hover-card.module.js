/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { registerElement } from '@angular-react/core';
import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ExpandingCard, HoverCard, PlainCard } from 'office-ui-fabric-react/lib/HoverCard';
import { FabHoverCardComponent } from './hover-card.component';
import { FabExpandingCardComponent } from './expanding-card.component';
import { FabPlainCardComponent } from './plain-card.component';
/** @type {?} */
const components = [FabHoverCardComponent, FabExpandingCardComponent, FabPlainCardComponent];
export class FabHoverCardModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('ExpandingCard', (/**
         * @return {?}
         */
        () => ExpandingCard));
        registerElement('HoverCard', (/**
         * @return {?}
         */
        () => HoverCard));
        registerElement('PlainCard', (/**
         * @return {?}
         */
        () => PlainCard));
    }
}
FabHoverCardModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components,
                exports: components,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabHoverCardModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG92ZXItY2FyZC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9ob3Zlci1jYXJkL2hvdmVyLWNhcmQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMzRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7TUFFekQsVUFBVSxHQUFHLENBQUMscUJBQXFCLEVBQUUseUJBQXlCLEVBQUUscUJBQXFCLENBQUM7QUFRNUYsTUFBTSxPQUFPLGtCQUFrQjtJQUM3QjtRQUNFLGlFQUFpRTtRQUNqRSxlQUFlLENBQUMsZUFBZTs7O1FBQUUsR0FBRyxFQUFFLENBQUMsYUFBYSxFQUFDLENBQUM7UUFDdEQsZUFBZSxDQUFDLFdBQVc7OztRQUFFLEdBQUcsRUFBRSxDQUFDLFNBQVMsRUFBQyxDQUFDO1FBQzlDLGVBQWUsQ0FBQyxXQUFXOzs7UUFBRSxHQUFHLEVBQUUsQ0FBQyxTQUFTLEVBQUMsQ0FBQztJQUNoRCxDQUFDOzs7WUFaRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN2QixZQUFZLEVBQUUsVUFBVTtnQkFDeEIsT0FBTyxFQUFFLFVBQVU7Z0JBQ25CLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO2FBQzVCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFeHBhbmRpbmdDYXJkLCBIb3ZlckNhcmQsIFBsYWluQ2FyZCB9IGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliL0hvdmVyQ2FyZCc7XHJcbmltcG9ydCB7IEZhYkhvdmVyQ2FyZENvbXBvbmVudCB9IGZyb20gJy4vaG92ZXItY2FyZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGYWJFeHBhbmRpbmdDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9leHBhbmRpbmctY2FyZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGYWJQbGFpbkNhcmRDb21wb25lbnQgfSBmcm9tICcuL3BsYWluLWNhcmQuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IGNvbXBvbmVudHMgPSBbRmFiSG92ZXJDYXJkQ29tcG9uZW50LCBGYWJFeHBhbmRpbmdDYXJkQ29tcG9uZW50LCBGYWJQbGFpbkNhcmRDb21wb25lbnRdO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IGNvbXBvbmVudHMsXHJcbiAgZXhwb3J0czogY29tcG9uZW50cyxcclxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYWJIb3ZlckNhcmRNb2R1bGUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy8gQWRkIGFueSBSZWFjdCBlbGVtZW50cyB0byB0aGUgcmVnaXN0cnkgKHVzZWQgYnkgdGhlIHJlbmRlcmVyKS5cclxuICAgIHJlZ2lzdGVyRWxlbWVudCgnRXhwYW5kaW5nQ2FyZCcsICgpID0+IEV4cGFuZGluZ0NhcmQpO1xyXG4gICAgcmVnaXN0ZXJFbGVtZW50KCdIb3ZlckNhcmQnLCAoKSA9PiBIb3ZlckNhcmQpO1xyXG4gICAgcmVnaXN0ZXJFbGVtZW50KCdQbGFpbkNhcmQnLCAoKSA9PiBQbGFpbkNhcmQpO1xyXG4gIH1cclxufVxyXG4iXX0=