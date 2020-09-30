/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild, ChangeDetectorRef, Renderer2, NgZone, } from '@angular/core';
export class FabPlainCardComponent extends ReactWrapperComponent {
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
        this.onRenderPlainCard = this.createRenderPropHandler(this.renderPlainCard);
    }
}
FabPlainCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-plain-card',
                exportAs: 'fabPlainCard',
                template: `
    <PlainCard
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
      [RenderPlainCard]="renderPlainCard && onRenderPlainCard"
      (onEnter)="onEnter.emit()"
      (onLeave)="onLeave.emit()"
    >
      <ReactContent><ng-content></ng-content></ReactContent>
    </PlainCard>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabPlainCardComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabPlainCardComponent.propDecorators = {
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
    renderPlainCard: [{ type: Input }],
    onEnter: [{ type: Output }],
    onLeave: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabPlainCardComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabPlainCardComponent.prototype.componentRef;
    /** @type {?} */
    FabPlainCardComponent.prototype.className;
    /** @type {?} */
    FabPlainCardComponent.prototype.directionalHint;
    /** @type {?} */
    FabPlainCardComponent.prototype.directionalHintFixed;
    /** @type {?} */
    FabPlainCardComponent.prototype.firstFocus;
    /** @type {?} */
    FabPlainCardComponent.prototype.gapSpace;
    /** @type {?} */
    FabPlainCardComponent.prototype.renderData;
    /** @type {?} */
    FabPlainCardComponent.prototype.styles;
    /** @type {?} */
    FabPlainCardComponent.prototype.targetElement;
    /** @type {?} */
    FabPlainCardComponent.prototype.theme;
    /** @type {?} */
    FabPlainCardComponent.prototype.trapFocus;
    /** @type {?} */
    FabPlainCardComponent.prototype.renderPlainCard;
    /** @type {?} */
    FabPlainCardComponent.prototype.onEnter;
    /** @type {?} */
    FabPlainCardComponent.prototype.onLeave;
    /** @type {?} */
    FabPlainCardComponent.prototype.onRenderPlainCard;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhaW4tY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9ob3Zlci1jYXJkL3BsYWluLWNhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBd0IscUJBQXFCLEVBQWlCLE1BQU0scUJBQXFCLENBQUM7QUFDakcsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFFVCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQTZCdkIsTUFBTSxPQUFPLHFCQUFzQixTQUFRLHFCQUFzQzs7Ozs7OztJQXFCL0UsWUFBWSxVQUFzQixFQUFFLGlCQUFvQyxFQUFFLFFBQW1CLEVBQUUsTUFBYztRQUMzRyxLQUFLLENBQUMsVUFBVSxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFOMUMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDbkMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7SUFNdEQsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUM5RSxDQUFDOzs7WUFyREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQlQ7Z0JBRUQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07eUJBRHRDLGdCQUFnQjthQUUxQjs7OztZQXJDQyxVQUFVO1lBTVYsaUJBQWlCO1lBQ2pCLFNBQVM7WUFDVCxNQUFNOzs7MkJBK0JMLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzJCQUV4QyxLQUFLO3dCQUNMLEtBQUs7OEJBQ0wsS0FBSzttQ0FDTCxLQUFLO3lCQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3FCQUNMLEtBQUs7NEJBQ0wsS0FBSztvQkFDTCxLQUFLO3dCQUNMLEtBQUs7OEJBQ0wsS0FBSztzQkFFTCxNQUFNO3NCQUNOLE1BQU07Ozs7Ozs7SUFoQlAsNkNBQThFOztJQUU5RSw2Q0FBdUQ7O0lBQ3ZELDBDQUFpRDs7SUFDakQsZ0RBQTZEOztJQUM3RCxxREFBdUU7O0lBQ3ZFLDJDQUFtRDs7SUFDbkQseUNBQStDOztJQUMvQywyQ0FBbUQ7O0lBQ25ELHVDQUEyQzs7SUFDM0MsOENBQXlEOztJQUN6RCxzQ0FBeUM7O0lBQ3pDLDBDQUFpRDs7SUFDakQsZ0RBQWlFOztJQUVqRSx3Q0FBc0Q7O0lBQ3RELHdDQUFzRDs7SUFFdEQsa0RBQTRHIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IElucHV0UmVuZGVyZXJPcHRpb25zLCBSZWFjdFdyYXBwZXJDb21wb25lbnQsIEpzeFJlbmRlckZ1bmMgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9jb3JlJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIFZpZXdDaGlsZCxcclxuICBPbkluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIE5nWm9uZSxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSVBsYWluQ2FyZFByb3BzIH0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvSG92ZXJDYXJkJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZmFiLXBsYWluLWNhcmQnLFxyXG4gIGV4cG9ydEFzOiAnZmFiUGxhaW5DYXJkJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPFBsYWluQ2FyZFxyXG4gICAgICBbY29tcG9uZW50UmVmXT1cImNvbXBvbmVudFJlZlwiXHJcbiAgICAgIFtjbGFzc05hbWVdPVwiY2xhc3NOYW1lXCJcclxuICAgICAgW2RpcmVjdGlvbmFsSGludF09XCJkaXJlY3Rpb25hbEhpbnRcIlxyXG4gICAgICBbZGlyZWN0aW9uYWxIaW50Rml4ZWRdPVwiZGlyZWN0aW9uYWxIaW50Rml4ZWRcIlxyXG4gICAgICBbZmlyc3RGb2N1c109XCJmaXJzdEZvY3VzXCJcclxuICAgICAgW2dhcFNwYWNlXT1cImdhcFNwYWNlXCJcclxuICAgICAgW3JlbmRlckRhdGFdPVwicmVuZGVyRGF0YVwiXHJcbiAgICAgIFtzdHlsZXNdPVwic3R5bGVzXCJcclxuICAgICAgW3RhcmdldEVsZW1lbnRdPVwidGFyZ2V0RWxlbWVudFwiXHJcbiAgICAgIFt0aGVtZV09XCJ0aGVtZVwiXHJcbiAgICAgIFt0cmFwRm9jdXNdPVwidHJhcEZvY3VzXCJcclxuICAgICAgW1JlbmRlclBsYWluQ2FyZF09XCJyZW5kZXJQbGFpbkNhcmQgJiYgb25SZW5kZXJQbGFpbkNhcmRcIlxyXG4gICAgICAob25FbnRlcik9XCJvbkVudGVyLmVtaXQoKVwiXHJcbiAgICAgIChvbkxlYXZlKT1cIm9uTGVhdmUuZW1pdCgpXCJcclxuICAgID5cclxuICAgICAgPFJlYWN0Q29udGVudD48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9SZWFjdENvbnRlbnQ+XHJcbiAgICA8L1BsYWluQ2FyZD5cclxuICBgLFxyXG4gIHN0eWxlczogWydyZWFjdC1yZW5kZXJlciddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmFiUGxhaW5DYXJkQ29tcG9uZW50IGV4dGVuZHMgUmVhY3RXcmFwcGVyQ29tcG9uZW50PElQbGFpbkNhcmRQcm9wcz4gaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBWaWV3Q2hpbGQoJ3JlYWN0Tm9kZScsIHsgc3RhdGljOiBmYWxzZSB9KSBwcm90ZWN0ZWQgcmVhY3ROb2RlUmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICBASW5wdXQoKSBjb21wb25lbnRSZWY6IElQbGFpbkNhcmRQcm9wc1snY29tcG9uZW50UmVmJ107XHJcbiAgQElucHV0KCkgY2xhc3NOYW1lOiBJUGxhaW5DYXJkUHJvcHNbJ2NsYXNzTmFtZSddO1xyXG4gIEBJbnB1dCgpIGRpcmVjdGlvbmFsSGludDogSVBsYWluQ2FyZFByb3BzWydkaXJlY3Rpb25hbEhpbnQnXTtcclxuICBASW5wdXQoKSBkaXJlY3Rpb25hbEhpbnRGaXhlZDogSVBsYWluQ2FyZFByb3BzWydkaXJlY3Rpb25hbEhpbnRGaXhlZCddO1xyXG4gIEBJbnB1dCgpIGZpcnN0Rm9jdXM6IElQbGFpbkNhcmRQcm9wc1snZmlyc3RGb2N1cyddO1xyXG4gIEBJbnB1dCgpIGdhcFNwYWNlOiBJUGxhaW5DYXJkUHJvcHNbJ2dhcFNwYWNlJ107XHJcbiAgQElucHV0KCkgcmVuZGVyRGF0YTogSVBsYWluQ2FyZFByb3BzWydyZW5kZXJEYXRhJ107XHJcbiAgQElucHV0KCkgc3R5bGVzOiBJUGxhaW5DYXJkUHJvcHNbJ3N0eWxlcyddO1xyXG4gIEBJbnB1dCgpIHRhcmdldEVsZW1lbnQ6IElQbGFpbkNhcmRQcm9wc1sndGFyZ2V0RWxlbWVudCddO1xyXG4gIEBJbnB1dCgpIHRoZW1lOiBJUGxhaW5DYXJkUHJvcHNbJ3RoZW1lJ107XHJcbiAgQElucHV0KCkgdHJhcEZvY3VzOiBJUGxhaW5DYXJkUHJvcHNbJ3RyYXBGb2N1cyddO1xyXG4gIEBJbnB1dCgpIHJlbmRlclBsYWluQ2FyZD86IElucHV0UmVuZGVyZXJPcHRpb25zPElQbGFpbkNhcmRQcm9wcz47XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvbkVudGVyID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvbkxlYXZlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBvblJlbmRlclBsYWluQ2FyZDogKHByb3BzPzogSVBsYWluQ2FyZFByb3BzLCBkZWZhdWx0UmVuZGVyPzogSnN4UmVuZGVyRnVuYzxJUGxhaW5DYXJkUHJvcHM+KSA9PiBKU1guRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCBuZ1pvbmU6IE5nWm9uZSkge1xyXG4gICAgc3VwZXIoZWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyLCB7IG5nWm9uZSB9KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5vblJlbmRlclBsYWluQ2FyZCA9IHRoaXMuY3JlYXRlUmVuZGVyUHJvcEhhbmRsZXIodGhpcy5yZW5kZXJQbGFpbkNhcmQpO1xyXG4gIH1cclxufVxyXG4iXX0=