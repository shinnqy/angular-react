/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { registerElement } from '@angular-react/core';
import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComboBox, VirtualizedComboBox } from 'office-ui-fabric-react/lib/ComboBox';
import { FabComboBoxComponent } from './combo-box.component';
import { FabVirtualizedComboBoxComponent } from './virtualized-combo-box.component';
import { ComboBoxOptionDirective } from './directives/combo-box-option.directive';
import { ComboBoxOptionsDirective } from './directives/combo-box-options.directive';
/** @type {?} */
const declarations = [
    FabComboBoxComponent,
    FabVirtualizedComboBoxComponent,
    ComboBoxOptionDirective,
    ComboBoxOptionsDirective
];
export class FabComboBoxModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('ComboBox', (/**
         * @return {?}
         */
        () => ComboBox));
        registerElement('VirtualizedComboBox', (/**
         * @return {?}
         */
        () => VirtualizedComboBox));
    }
}
FabComboBoxModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: declarations,
                exports: declarations,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabComboBoxModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYm8tYm94Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NvbWJvLWJveC9jb21iby1ib3gubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDcEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDN0QsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDcEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDbEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMENBQTBDLENBQUM7O01BRTlFLFlBQVksR0FBRztJQUNuQixvQkFBb0I7SUFDcEIsK0JBQStCO0lBQy9CLHVCQUF1QjtJQUN2Qix3QkFBd0I7Q0FDekI7QUFRRCxNQUFNLE9BQU8saUJBQWlCO0lBQzVCO1FBQ0UsaUVBQWlFO1FBQ2pFLGVBQWUsQ0FBQyxVQUFVOzs7UUFBRSxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUMsQ0FBQztRQUM1QyxlQUFlLENBQUMscUJBQXFCOzs7UUFBRSxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsRUFBQyxDQUFDO0lBQ3BFLENBQUM7OztZQVhGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZCLFlBQVksRUFBRSxZQUFZO2dCQUMxQixPQUFPLEVBQUUsWUFBWTtnQkFDckIsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7YUFDNUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSAnQGFuZ3VsYXItcmVhY3QvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbWJvQm94LCBWaXJ0dWFsaXplZENvbWJvQm94IH0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvQ29tYm9Cb3gnO1xyXG5pbXBvcnQgeyBGYWJDb21ib0JveENvbXBvbmVudCB9IGZyb20gJy4vY29tYm8tYm94LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZhYlZpcnR1YWxpemVkQ29tYm9Cb3hDb21wb25lbnQgfSBmcm9tICcuL3ZpcnR1YWxpemVkLWNvbWJvLWJveC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21ib0JveE9wdGlvbkRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9jb21iby1ib3gtb3B0aW9uLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IENvbWJvQm94T3B0aW9uc0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9jb21iby1ib3gtb3B0aW9ucy5kaXJlY3RpdmUnO1xyXG5cclxuY29uc3QgZGVjbGFyYXRpb25zID0gW1xyXG4gIEZhYkNvbWJvQm94Q29tcG9uZW50LFxyXG4gIEZhYlZpcnR1YWxpemVkQ29tYm9Cb3hDb21wb25lbnQsXHJcbiAgQ29tYm9Cb3hPcHRpb25EaXJlY3RpdmUsXHJcbiAgQ29tYm9Cb3hPcHRpb25zRGlyZWN0aXZlXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogZGVjbGFyYXRpb25zLFxyXG4gIGV4cG9ydHM6IGRlY2xhcmF0aW9ucyxcclxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYWJDb21ib0JveE1vZHVsZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyBBZGQgYW55IFJlYWN0IGVsZW1lbnRzIHRvIHRoZSByZWdpc3RyeSAodXNlZCBieSB0aGUgcmVuZGVyZXIpLlxyXG4gICAgcmVnaXN0ZXJFbGVtZW50KCdDb21ib0JveCcsICgpID0+IENvbWJvQm94KTtcclxuICAgIHJlZ2lzdGVyRWxlbWVudCgnVmlydHVhbGl6ZWRDb21ib0JveCcsICgpID0+IFZpcnR1YWxpemVkQ29tYm9Cb3gpO1xyXG4gIH1cclxufVxyXG4iXX0=