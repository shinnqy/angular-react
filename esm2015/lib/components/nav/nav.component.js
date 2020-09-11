/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { Component, ChangeDetectionStrategy, Input, ViewChild, ElementRef, ChangeDetectorRef, Renderer2, Output, EventEmitter, } from '@angular/core';
export class FabNavComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer);
        this.onLinkClick = new EventEmitter();
        this.onLinkExpandClick = new EventEmitter();
        this.onLinkClickHandler = this.onLinkClickHandler.bind(this);
        this.onLinkExpandClickHandler = this.onLinkExpandClickHandler.bind(this);
    }
    /**
     * @param {?} event
     * @param {?=} link
     * @return {?}
     */
    onLinkClickHandler(event, link) {
        this.onLinkClick.emit({
            event: event.nativeEvent,
            link: link
        });
    }
    /**
     * @param {?} event
     * @param {?=} link
     * @return {?}
     */
    onLinkExpandClickHandler(event, link) {
        this.onLinkExpandClick.emit({
            event: event.nativeEvent,
            link: link
        });
    }
}
FabNavComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-nav',
                exportAs: 'fabNav',
                template: `
    <Nav
      #reactNode
      [groups]="groups"
      [LinkClick]="onLinkClickHandler"
      [selectedKey]="selectedKey"
      [expandButtonAriaLabel]="expandButtonAriaLabel"
      [LinkExpandClick]="onLinkExpandClickHandler"
      [isOnTop]="isOnTop"
      [initialSelectedKey]="initialSelectedKey"
      [ariaLabel]="ariaLabel"
      [selectedAriaLabel]="selectedAriaLabel"
    >
    </Nav>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabNavComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
FabNavComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    componentRef: [{ type: Input }],
    groups: [{ type: Input }],
    selectedKey: [{ type: Input }],
    isOnTop: [{ type: Input }],
    initialSelectedKey: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    expandButtonAriaLabel: [{ type: Input }],
    selectedAriaLabel: [{ type: Input }],
    onLinkClick: [{ type: Output }],
    onLinkExpandClick: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabNavComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabNavComponent.prototype.componentRef;
    /** @type {?} */
    FabNavComponent.prototype.groups;
    /** @type {?} */
    FabNavComponent.prototype.selectedKey;
    /** @type {?} */
    FabNavComponent.prototype.isOnTop;
    /** @type {?} */
    FabNavComponent.prototype.initialSelectedKey;
    /** @type {?} */
    FabNavComponent.prototype.ariaLabel;
    /** @type {?} */
    FabNavComponent.prototype.expandButtonAriaLabel;
    /** @type {?} */
    FabNavComponent.prototype.selectedAriaLabel;
    /** @type {?} */
    FabNavComponent.prototype.onLinkClick;
    /** @type {?} */
    FabNavComponent.prototype.onLinkExpandClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy9saWIvY29tcG9uZW50cy9uYXYvIiwic291cmNlcyI6WyJuYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRTVELE9BQU8sRUFDTCxTQUFTLEVBQ1QsdUJBQXVCLEVBQ3ZCLEtBQUssRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsTUFBTSxFQUNOLFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQztBQXVCdkIsTUFBTSxPQUFPLGVBQWdCLFNBQVEscUJBQWdDOzs7Ozs7SUFzQm5FLFlBQVksVUFBc0IsRUFBRSxpQkFBb0MsRUFBRSxRQUFtQjtRQUMzRixLQUFLLENBQUMsVUFBVSxFQUFFLGlCQUFpQixFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBVjlCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBRzdDLENBQUM7UUFDYyxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFHbkQsQ0FBQztRQUlILElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNFLENBQUM7Ozs7OztJQUVELGtCQUFrQixDQUFDLEtBQW9DLEVBQUUsSUFBZTtRQUN0RSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztZQUNwQixLQUFLLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDeEIsSUFBSSxFQUFFLElBQUk7U0FDWCxDQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFRCx3QkFBd0IsQ0FBQyxLQUFvQyxFQUFFLElBQWU7UUFDNUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQztZQUMxQixLQUFLLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDeEIsSUFBSSxFQUFFLElBQUk7U0FDWCxDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUE3REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7OztHQWNUO2dCQUVELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO3lCQUR0QyxnQkFBZ0I7YUFFMUI7Ozs7WUEzQkMsVUFBVTtZQUNWLGlCQUFpQjtZQUNqQixTQUFTOzs7MkJBMkJSLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzJCQUd2QyxLQUFLO3FCQUNMLEtBQUs7MEJBQ0wsS0FBSztzQkFDTCxLQUFLO2lDQUNMLEtBQUs7d0JBQ0wsS0FBSztvQ0FDTCxLQUFLO2dDQUNMLEtBQUs7MEJBRUwsTUFBTTtnQ0FJTixNQUFNOzs7Ozs7O0lBaEJQLHVDQUNtQzs7SUFFbkMsdUNBQWtEOztJQUNsRCxpQ0FBcUM7O0lBQ3JDLHNDQUFnRDs7SUFDaEQsa0NBQXdDOztJQUN4Qyw2Q0FBOEQ7O0lBQzlELG9DQUE0Qzs7SUFDNUMsZ0RBQW9FOztJQUNwRSw0Q0FBNEQ7O0lBRTVELHNDQUdLOztJQUNMLDRDQUdLIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IFJlYWN0V3JhcHBlckNvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2NvcmUnO1xyXG5pbXBvcnQgeyBJTmF2UHJvcHMsIElOYXZMaW5rLCBJTmF2IH0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvTmF2JztcclxuaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgSW5wdXQsXHJcbiAgVmlld0NoaWxkLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZhYi1uYXYnLFxyXG4gIGV4cG9ydEFzOiAnZmFiTmF2JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPE5hdlxyXG4gICAgICAjcmVhY3ROb2RlXHJcbiAgICAgIFtncm91cHNdPVwiZ3JvdXBzXCJcclxuICAgICAgW0xpbmtDbGlja109XCJvbkxpbmtDbGlja0hhbmRsZXJcIlxyXG4gICAgICBbc2VsZWN0ZWRLZXldPVwic2VsZWN0ZWRLZXlcIlxyXG4gICAgICBbZXhwYW5kQnV0dG9uQXJpYUxhYmVsXT1cImV4cGFuZEJ1dHRvbkFyaWFMYWJlbFwiXHJcbiAgICAgIFtMaW5rRXhwYW5kQ2xpY2tdPVwib25MaW5rRXhwYW5kQ2xpY2tIYW5kbGVyXCJcclxuICAgICAgW2lzT25Ub3BdPVwiaXNPblRvcFwiXHJcbiAgICAgIFtpbml0aWFsU2VsZWN0ZWRLZXldPVwiaW5pdGlhbFNlbGVjdGVkS2V5XCJcclxuICAgICAgW2FyaWFMYWJlbF09XCJhcmlhTGFiZWxcIlxyXG4gICAgICBbc2VsZWN0ZWRBcmlhTGFiZWxdPVwic2VsZWN0ZWRBcmlhTGFiZWxcIlxyXG4gICAgPlxyXG4gICAgPC9OYXY+XHJcbiAgYCxcclxuICBzdHlsZXM6IFsncmVhY3QtcmVuZGVyZXInXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZhYk5hdkNvbXBvbmVudCBleHRlbmRzIFJlYWN0V3JhcHBlckNvbXBvbmVudDxJTmF2UHJvcHM+IHtcclxuICBAVmlld0NoaWxkKCdyZWFjdE5vZGUnLCB7IHN0YXRpYzogdHJ1ZSB9KVxyXG4gIHByb3RlY3RlZCByZWFjdE5vZGVSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBJbnB1dCgpIGNvbXBvbmVudFJlZj86IElOYXZQcm9wc1snY29tcG9uZW50UmVmJ107XHJcbiAgQElucHV0KCkgZ3JvdXBzOiBJTmF2UHJvcHNbXCJncm91cHNcIl07XHJcbiAgQElucHV0KCkgc2VsZWN0ZWRLZXk/OiBJTmF2UHJvcHNbXCJzZWxlY3RlZEtleVwiXTtcclxuICBASW5wdXQoKSBpc09uVG9wPzogSU5hdlByb3BzW1wiaXNPblRvcFwiXTtcclxuICBASW5wdXQoKSBpbml0aWFsU2VsZWN0ZWRLZXk/OiBJTmF2UHJvcHNbXCJpbml0aWFsU2VsZWN0ZWRLZXlcIl07XHJcbiAgQElucHV0KCkgYXJpYUxhYmVsPzogSU5hdlByb3BzW1wiYXJpYUxhYmVsXCJdO1xyXG4gIEBJbnB1dCgpIGV4cGFuZEJ1dHRvbkFyaWFMYWJlbD86IElOYXZQcm9wc1tcImV4cGFuZEJ1dHRvbkFyaWFMYWJlbFwiXTtcclxuICBASW5wdXQoKSBzZWxlY3RlZEFyaWFMYWJlbD86IElOYXZQcm9wc1tcInNlbGVjdGVkQXJpYUxhYmVsXCJdO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25MaW5rQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHtcclxuICAgIGV2ZW50OiBFdmVudCxcclxuICAgIGxpbms6IElOYXZMaW5rXHJcbiAgfT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25MaW5rRXhwYW5kQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHtcclxuICAgIGV2ZW50OiBFdmVudCxcclxuICAgIGxpbms6IElOYXZMaW5rXHJcbiAgfT4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcbiAgICBzdXBlcihlbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXIpO1xyXG4gICAgdGhpcy5vbkxpbmtDbGlja0hhbmRsZXIgPSB0aGlzLm9uTGlua0NsaWNrSGFuZGxlci5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbkxpbmtFeHBhbmRDbGlja0hhbmRsZXIgPSB0aGlzLm9uTGlua0V4cGFuZENsaWNrSGFuZGxlci5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgb25MaW5rQ2xpY2tIYW5kbGVyKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50PiwgbGluaz86IElOYXZMaW5rKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uTGlua0NsaWNrLmVtaXQoe1xyXG4gICAgICBldmVudDogZXZlbnQubmF0aXZlRXZlbnQsXHJcbiAgICAgIGxpbms6IGxpbmtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25MaW5rRXhwYW5kQ2xpY2tIYW5kbGVyKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50PiwgbGluaz86IElOYXZMaW5rKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uTGlua0V4cGFuZENsaWNrLmVtaXQoe1xyXG4gICAgICBldmVudDogZXZlbnQubmF0aXZlRXZlbnQsXHJcbiAgICAgIGxpbms6IGxpbmtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=