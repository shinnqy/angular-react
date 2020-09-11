/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild, ChangeDetectorRef, Renderer2, NgZone, } from '@angular/core';
export class FabExpandingCardComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, { ngZone });
        this.onEnter = new EventEmitter();
        this.onLeave = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onRenderCompactCard = this.createRenderPropHandler(this.renderCompactCard);
        this.onRenderExpandedCard = this.createRenderPropHandler(this.renderExpandedCard);
    }
}
FabExpandingCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-expanding-card',
                exportAs: 'fabExpandingCard',
                template: `
    <ExpandingCard
      [componentRef]="componentRef"
      [className]="className"
      [directionalHint]="directionalHint"
      [directionalHintFixed]="directionalHintFixed"
      [firstFocus]="firstFocus"
      [gapSpace]="gapSpace"
      [renderData]="renderData"
      [styles]="styles"
      [targetElement]="targetElement"
      [theme]="theme"
      [trapFocus]="trapFocus"
      [compactCardHeight]="compactCardHeight"
      [expandedCardHeight]="expandedCardHeight"
      [mode]="mode"
      [RenderCompactCard]="renderCompactCard && onRenderCompactCard"
      [RenderExpandedCard]="renderExpandedCard && onRenderExpandedCard"
      (onEnter)="onEnter.emit()"
      (onLeave)="onLeave.emit()"
    >
      <ReactContent><ng-content></ng-content></ReactContent>
    </ExpandingCard>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabExpandingCardComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabExpandingCardComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: false },] }],
    componentRef: [{ type: Input }],
    className: [{ type: Input }],
    directionalHint: [{ type: Input }],
    directionalHintFixed: [{ type: Input }],
    firstFocus: [{ type: Input }],
    gapSpace: [{ type: Input }],
    renderData: [{ type: Input }],
    styles: [{ type: Input }],
    targetElement: [{ type: Input }],
    theme: [{ type: Input }],
    trapFocus: [{ type: Input }],
    compactCardHeight: [{ type: Input }],
    expandedCardHeight: [{ type: Input }],
    mode: [{ type: Input }],
    renderCompactCard: [{ type: Input }],
    renderExpandedCard: [{ type: Input }],
    onEnter: [{ type: Output }],
    onLeave: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabExpandingCardComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabExpandingCardComponent.prototype.componentRef;
    /** @type {?} */
    FabExpandingCardComponent.prototype.className;
    /** @type {?} */
    FabExpandingCardComponent.prototype.directionalHint;
    /** @type {?} */
    FabExpandingCardComponent.prototype.directionalHintFixed;
    /** @type {?} */
    FabExpandingCardComponent.prototype.firstFocus;
    /** @type {?} */
    FabExpandingCardComponent.prototype.gapSpace;
    /** @type {?} */
    FabExpandingCardComponent.prototype.renderData;
    /** @type {?} */
    FabExpandingCardComponent.prototype.styles;
    /** @type {?} */
    FabExpandingCardComponent.prototype.targetElement;
    /** @type {?} */
    FabExpandingCardComponent.prototype.theme;
    /** @type {?} */
    FabExpandingCardComponent.prototype.trapFocus;
    /** @type {?} */
    FabExpandingCardComponent.prototype.compactCardHeight;
    /** @type {?} */
    FabExpandingCardComponent.prototype.expandedCardHeight;
    /** @type {?} */
    FabExpandingCardComponent.prototype.mode;
    /** @type {?} */
    FabExpandingCardComponent.prototype.renderCompactCard;
    /** @type {?} */
    FabExpandingCardComponent.prototype.renderExpandedCard;
    /** @type {?} */
    FabExpandingCardComponent.prototype.onEnter;
    /** @type {?} */
    FabExpandingCardComponent.prototype.onLeave;
    /** @type {?} */
    FabExpandingCardComponent.prototype.onRenderCompactCard;
    /** @type {?} */
    FabExpandingCardComponent.prototype.onRenderExpandedCard;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5kaW5nLWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljL2xpYi9jb21wb25lbnRzL2hvdmVyLWNhcmQvIiwic291cmNlcyI6WyJleHBhbmRpbmctY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0EsT0FBTyxFQUF3QixxQkFBcUIsRUFBaUIsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxFQUVULGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBaUN2QixNQUFNLE9BQU8seUJBQTBCLFNBQVEscUJBQTBDOzs7Ozs7O0lBdUJ2RixZQUFZLFVBQXNCLEVBQUUsaUJBQW9DLEVBQUUsUUFBbUIsRUFBRSxNQUFjO1FBQzNHLEtBQUssQ0FBQyxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUoxQyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUNuQyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQUl0RCxDQUFDOzs7O0lBUUQsUUFBUTtRQUNOLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNwRixDQUFDOzs7WUFsRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F1QlQ7Z0JBRUQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07eUJBRHRDLGdCQUFnQjthQUUxQjs7OztZQXpDQyxVQUFVO1lBTVYsaUJBQWlCO1lBQ2pCLFNBQVM7WUFDVCxNQUFNOzs7MkJBbUNMLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzJCQUV4QyxLQUFLO3dCQUNMLEtBQUs7OEJBQ0wsS0FBSzttQ0FDTCxLQUFLO3lCQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3FCQUNMLEtBQUs7NEJBQ0wsS0FBSztvQkFDTCxLQUFLO3dCQUNMLEtBQUs7Z0NBQ0wsS0FBSztpQ0FDTCxLQUFLO21CQUNMLEtBQUs7Z0NBQ0wsS0FBSztpQ0FDTCxLQUFLO3NCQUVMLE1BQU07c0JBQ04sTUFBTTs7Ozs7OztJQXBCUCxpREFBOEU7O0lBRTlFLGlEQUE0RDs7SUFDNUQsOENBQXNEOztJQUN0RCxvREFBa0U7O0lBQ2xFLHlEQUE0RTs7SUFDNUUsK0NBQXdEOztJQUN4RCw2Q0FBb0Q7O0lBQ3BELCtDQUF3RDs7SUFDeEQsMkNBQWdEOztJQUNoRCxrREFBOEQ7O0lBQzlELDBDQUE4Qzs7SUFDOUMsOENBQXNEOztJQUN0RCxzREFBc0U7O0lBQ3RFLHVEQUF3RTs7SUFDeEUseUNBQTRDOztJQUM1QyxzREFBdUU7O0lBQ3ZFLHVEQUF3RTs7SUFFeEUsNENBQXNEOztJQUN0RCw0Q0FBc0Q7O0lBTXRELHdEQUFzSDs7SUFDdEgseURBR2lCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IElucHV0UmVuZGVyZXJPcHRpb25zLCBSZWFjdFdyYXBwZXJDb21wb25lbnQsIEpzeFJlbmRlckZ1bmMgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9jb3JlJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIFZpZXdDaGlsZCxcclxuICBPbkluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIE5nWm9uZSxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSUV4cGFuZGluZ0NhcmRQcm9wcyB9IGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliL0hvdmVyQ2FyZCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZhYi1leHBhbmRpbmctY2FyZCcsXHJcbiAgZXhwb3J0QXM6ICdmYWJFeHBhbmRpbmdDYXJkJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPEV4cGFuZGluZ0NhcmRcclxuICAgICAgW2NvbXBvbmVudFJlZl09XCJjb21wb25lbnRSZWZcIlxyXG4gICAgICBbY2xhc3NOYW1lXT1cImNsYXNzTmFtZVwiXHJcbiAgICAgIFtkaXJlY3Rpb25hbEhpbnRdPVwiZGlyZWN0aW9uYWxIaW50XCJcclxuICAgICAgW2RpcmVjdGlvbmFsSGludEZpeGVkXT1cImRpcmVjdGlvbmFsSGludEZpeGVkXCJcclxuICAgICAgW2ZpcnN0Rm9jdXNdPVwiZmlyc3RGb2N1c1wiXHJcbiAgICAgIFtnYXBTcGFjZV09XCJnYXBTcGFjZVwiXHJcbiAgICAgIFtyZW5kZXJEYXRhXT1cInJlbmRlckRhdGFcIlxyXG4gICAgICBbc3R5bGVzXT1cInN0eWxlc1wiXHJcbiAgICAgIFt0YXJnZXRFbGVtZW50XT1cInRhcmdldEVsZW1lbnRcIlxyXG4gICAgICBbdGhlbWVdPVwidGhlbWVcIlxyXG4gICAgICBbdHJhcEZvY3VzXT1cInRyYXBGb2N1c1wiXHJcbiAgICAgIFtjb21wYWN0Q2FyZEhlaWdodF09XCJjb21wYWN0Q2FyZEhlaWdodFwiXHJcbiAgICAgIFtleHBhbmRlZENhcmRIZWlnaHRdPVwiZXhwYW5kZWRDYXJkSGVpZ2h0XCJcclxuICAgICAgW21vZGVdPVwibW9kZVwiXHJcbiAgICAgIFtSZW5kZXJDb21wYWN0Q2FyZF09XCJyZW5kZXJDb21wYWN0Q2FyZCAmJiBvblJlbmRlckNvbXBhY3RDYXJkXCJcclxuICAgICAgW1JlbmRlckV4cGFuZGVkQ2FyZF09XCJyZW5kZXJFeHBhbmRlZENhcmQgJiYgb25SZW5kZXJFeHBhbmRlZENhcmRcIlxyXG4gICAgICAob25FbnRlcik9XCJvbkVudGVyLmVtaXQoKVwiXHJcbiAgICAgIChvbkxlYXZlKT1cIm9uTGVhdmUuZW1pdCgpXCJcclxuICAgID5cclxuICAgICAgPFJlYWN0Q29udGVudD48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9SZWFjdENvbnRlbnQ+XHJcbiAgICA8L0V4cGFuZGluZ0NhcmQ+XHJcbiAgYCxcclxuICBzdHlsZXM6IFsncmVhY3QtcmVuZGVyZXInXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZhYkV4cGFuZGluZ0NhcmRDb21wb25lbnQgZXh0ZW5kcyBSZWFjdFdyYXBwZXJDb21wb25lbnQ8SUV4cGFuZGluZ0NhcmRQcm9wcz4gaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBWaWV3Q2hpbGQoJ3JlYWN0Tm9kZScsIHsgc3RhdGljOiBmYWxzZSB9KSBwcm90ZWN0ZWQgcmVhY3ROb2RlUmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICBASW5wdXQoKSBjb21wb25lbnRSZWY/OiBJRXhwYW5kaW5nQ2FyZFByb3BzWydjb21wb25lbnRSZWYnXTtcclxuICBASW5wdXQoKSBjbGFzc05hbWU/OiBJRXhwYW5kaW5nQ2FyZFByb3BzWydjbGFzc05hbWUnXTtcclxuICBASW5wdXQoKSBkaXJlY3Rpb25hbEhpbnQ/OiBJRXhwYW5kaW5nQ2FyZFByb3BzWydkaXJlY3Rpb25hbEhpbnQnXTtcclxuICBASW5wdXQoKSBkaXJlY3Rpb25hbEhpbnRGaXhlZD86IElFeHBhbmRpbmdDYXJkUHJvcHNbJ2RpcmVjdGlvbmFsSGludEZpeGVkJ107XHJcbiAgQElucHV0KCkgZmlyc3RGb2N1cz86IElFeHBhbmRpbmdDYXJkUHJvcHNbJ2ZpcnN0Rm9jdXMnXTtcclxuICBASW5wdXQoKSBnYXBTcGFjZT86IElFeHBhbmRpbmdDYXJkUHJvcHNbJ2dhcFNwYWNlJ107XHJcbiAgQElucHV0KCkgcmVuZGVyRGF0YT86IElFeHBhbmRpbmdDYXJkUHJvcHNbJ3JlbmRlckRhdGEnXTtcclxuICBASW5wdXQoKSBzdHlsZXM/OiBJRXhwYW5kaW5nQ2FyZFByb3BzWydzdHlsZXMnXTtcclxuICBASW5wdXQoKSB0YXJnZXRFbGVtZW50PzogSUV4cGFuZGluZ0NhcmRQcm9wc1sndGFyZ2V0RWxlbWVudCddO1xyXG4gIEBJbnB1dCgpIHRoZW1lPzogSUV4cGFuZGluZ0NhcmRQcm9wc1sndGhlbWUnXTtcclxuICBASW5wdXQoKSB0cmFwRm9jdXM/OiBJRXhwYW5kaW5nQ2FyZFByb3BzWyd0cmFwRm9jdXMnXTtcclxuICBASW5wdXQoKSBjb21wYWN0Q2FyZEhlaWdodD86IElFeHBhbmRpbmdDYXJkUHJvcHNbJ2NvbXBhY3RDYXJkSGVpZ2h0J107XHJcbiAgQElucHV0KCkgZXhwYW5kZWRDYXJkSGVpZ2h0PzogSUV4cGFuZGluZ0NhcmRQcm9wc1snZXhwYW5kZWRDYXJkSGVpZ2h0J107XHJcbiAgQElucHV0KCkgbW9kZT86IElFeHBhbmRpbmdDYXJkUHJvcHNbJ21vZGUnXTtcclxuICBASW5wdXQoKSByZW5kZXJDb21wYWN0Q2FyZD86IElucHV0UmVuZGVyZXJPcHRpb25zPElFeHBhbmRpbmdDYXJkUHJvcHM+O1xyXG4gIEBJbnB1dCgpIHJlbmRlckV4cGFuZGVkQ2FyZD86IElucHV0UmVuZGVyZXJPcHRpb25zPElFeHBhbmRpbmdDYXJkUHJvcHM+O1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25FbnRlciA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25MZWF2ZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCBuZ1pvbmU6IE5nWm9uZSkge1xyXG4gICAgc3VwZXIoZWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyLCB7IG5nWm9uZSB9KTtcclxuICB9XHJcblxyXG4gIG9uUmVuZGVyQ29tcGFjdENhcmQ6IChwcm9wcz86IElFeHBhbmRpbmdDYXJkUHJvcHMsIGRlZmF1bHRSZW5kZXI/OiBKc3hSZW5kZXJGdW5jPElFeHBhbmRpbmdDYXJkUHJvcHM+KSA9PiBKU1guRWxlbWVudDtcclxuICBvblJlbmRlckV4cGFuZGVkQ2FyZDogKFxyXG4gICAgcHJvcHM/OiBJRXhwYW5kaW5nQ2FyZFByb3BzLFxyXG4gICAgZGVmYXVsdFJlbmRlcj86IEpzeFJlbmRlckZ1bmM8SUV4cGFuZGluZ0NhcmRQcm9wcz5cclxuICApID0+IEpTWC5FbGVtZW50O1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMub25SZW5kZXJDb21wYWN0Q2FyZCA9IHRoaXMuY3JlYXRlUmVuZGVyUHJvcEhhbmRsZXIodGhpcy5yZW5kZXJDb21wYWN0Q2FyZCk7XHJcbiAgICB0aGlzLm9uUmVuZGVyRXhwYW5kZWRDYXJkID0gdGhpcy5jcmVhdGVSZW5kZXJQcm9wSGFuZGxlcih0aGlzLnJlbmRlckV4cGFuZGVkQ2FyZCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==