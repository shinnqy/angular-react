/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild, } from '@angular/core';
export class FabImageComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer);
        this.onLoadingStateChange = new EventEmitter();
    }
}
FabImageComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-image',
                exportAs: 'fabImage',
                template: `
    <!-- prettier-ignore -->
    <Image
      #reactNode
      [alt]="alt"
      [crossOrigin]="crossOrigin"
      [height]="height"
      [sizes]="sizes"
      [src]="src"
      [srcSet]="srcSet"
      [useMap]="useMap"
      [width]="width"
      [styles]="styles"
      [theme]="theme"
      [className]="className"
      [shouldFadeIn]="shouldFadeIn"
      [shouldStartVisible]="shouldStartVisible"
      [imageFit]="imageFit"
      [errorSrc]="errorSrc"
      [maximizeFrame]="maximizeFrame"
      (onLoadingStateChange)="onLoadingStateChange.emit($event)"
      [coverStyle]="coverStyle"
    >
    </Image>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabImageComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
FabImageComponent.propDecorators = {
    alt: [{ type: Input }],
    crossOrigin: [{ type: Input }],
    height: [{ type: Input }],
    sizes: [{ type: Input }],
    src: [{ type: Input }],
    srcSet: [{ type: Input }],
    useMap: [{ type: Input }],
    width: [{ type: Input }],
    styles: [{ type: Input }],
    theme: [{ type: Input }],
    className: [{ type: Input }],
    shouldFadeIn: [{ type: Input }],
    shouldStartVisible: [{ type: Input }],
    imageFit: [{ type: Input }],
    errorSrc: [{ type: Input }],
    maximizeFrame: [{ type: Input }],
    coverStyle: [{ type: Input }],
    onLoadingStateChange: [{ type: Output }],
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
};
if (false) {
    /** @type {?} */
    FabImageComponent.prototype.alt;
    /** @type {?} */
    FabImageComponent.prototype.crossOrigin;
    /** @type {?} */
    FabImageComponent.prototype.height;
    /** @type {?} */
    FabImageComponent.prototype.sizes;
    /** @type {?} */
    FabImageComponent.prototype.src;
    /** @type {?} */
    FabImageComponent.prototype.srcSet;
    /** @type {?} */
    FabImageComponent.prototype.useMap;
    /** @type {?} */
    FabImageComponent.prototype.width;
    /** @type {?} */
    FabImageComponent.prototype.styles;
    /** @type {?} */
    FabImageComponent.prototype.theme;
    /** @type {?} */
    FabImageComponent.prototype.className;
    /** @type {?} */
    FabImageComponent.prototype.shouldFadeIn;
    /** @type {?} */
    FabImageComponent.prototype.shouldStartVisible;
    /** @type {?} */
    FabImageComponent.prototype.imageFit;
    /** @type {?} */
    FabImageComponent.prototype.errorSrc;
    /** @type {?} */
    FabImageComponent.prototype.maximizeFrame;
    /** @type {?} */
    FabImageComponent.prototype.coverStyle;
    /** @type {?} */
    FabImageComponent.prototype.onLoadingStateChange;
    /**
     * @type {?}
     * @protected
     */
    FabImageComponent.prototype.reactNodeRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaW1hZ2UvaW1hZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzVELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQWtDdkIsTUFBTSxPQUFPLGlCQUFrQixTQUFRLHFCQUFrQzs7Ozs7O0lBd0J2RSxZQUFZLFVBQXNCLEVBQUUsaUJBQW9DLEVBQUUsUUFBbUI7UUFDM0YsS0FBSyxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUw5Qix5QkFBb0IsR0FBRyxJQUFJLFlBQVksRUFBa0IsQ0FBQztJQU03RSxDQUFDOzs7WUF6REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUUsVUFBVTtnQkFDcEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3QlQ7Z0JBRUQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07eUJBRHRDLGdCQUFnQjthQUUxQjs7OztZQXZDQyxVQUFVO1lBRlYsaUJBQWlCO1lBTWpCLFNBQVM7OztrQkFxQ1IsS0FBSzswQkFDTCxLQUFLO3FCQUNMLEtBQUs7b0JBQ0wsS0FBSztrQkFDTCxLQUFLO3FCQUNMLEtBQUs7cUJBQ0wsS0FBSztvQkFDTCxLQUFLO3FCQUVMLEtBQUs7b0JBQ0wsS0FBSzt3QkFDTCxLQUFLOzJCQUNMLEtBQUs7aUNBQ0wsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7NEJBQ0wsS0FBSzt5QkFDTCxLQUFLO21DQUVMLE1BQU07MkJBRU4sU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Ozs7SUFyQnhDLGdDQUFrQzs7SUFDbEMsd0NBQWtEOztJQUNsRCxtQ0FBd0M7O0lBQ3hDLGtDQUFzQzs7SUFDdEMsZ0NBQWtDOztJQUNsQyxtQ0FBd0M7O0lBQ3hDLG1DQUF3Qzs7SUFDeEMsa0NBQXNDOztJQUV0QyxtQ0FBd0M7O0lBQ3hDLGtDQUFzQzs7SUFDdEMsc0NBQThDOztJQUM5Qyx5Q0FBb0Q7O0lBQ3BELCtDQUFnRTs7SUFDaEUscUNBQTRDOztJQUM1QyxxQ0FBNEM7O0lBQzVDLDBDQUFzRDs7SUFDdEQsdUNBQWdEOztJQUVoRCxpREFBNkU7Ozs7O0lBRTdFLHlDQUE2RSIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyBSZWFjdFdyYXBwZXJDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9jb3JlJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3Q2hpbGQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElJbWFnZVByb3BzLCBJbWFnZUxvYWRTdGF0ZSB9IGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliL0ltYWdlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZmFiLWltYWdlJyxcclxuICBleHBvcnRBczogJ2ZhYkltYWdlJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPCEtLSBwcmV0dGllci1pZ25vcmUgLS0+XHJcbiAgICA8SW1hZ2VcclxuICAgICAgI3JlYWN0Tm9kZVxyXG4gICAgICBbYWx0XT1cImFsdFwiXHJcbiAgICAgIFtjcm9zc09yaWdpbl09XCJjcm9zc09yaWdpblwiXHJcbiAgICAgIFtoZWlnaHRdPVwiaGVpZ2h0XCJcclxuICAgICAgW3NpemVzXT1cInNpemVzXCJcclxuICAgICAgW3NyY109XCJzcmNcIlxyXG4gICAgICBbc3JjU2V0XT1cInNyY1NldFwiXHJcbiAgICAgIFt1c2VNYXBdPVwidXNlTWFwXCJcclxuICAgICAgW3dpZHRoXT1cIndpZHRoXCJcclxuICAgICAgW3N0eWxlc109XCJzdHlsZXNcIlxyXG4gICAgICBbdGhlbWVdPVwidGhlbWVcIlxyXG4gICAgICBbY2xhc3NOYW1lXT1cImNsYXNzTmFtZVwiXHJcbiAgICAgIFtzaG91bGRGYWRlSW5dPVwic2hvdWxkRmFkZUluXCJcclxuICAgICAgW3Nob3VsZFN0YXJ0VmlzaWJsZV09XCJzaG91bGRTdGFydFZpc2libGVcIlxyXG4gICAgICBbaW1hZ2VGaXRdPVwiaW1hZ2VGaXRcIlxyXG4gICAgICBbZXJyb3JTcmNdPVwiZXJyb3JTcmNcIlxyXG4gICAgICBbbWF4aW1pemVGcmFtZV09XCJtYXhpbWl6ZUZyYW1lXCJcclxuICAgICAgKG9uTG9hZGluZ1N0YXRlQ2hhbmdlKT1cIm9uTG9hZGluZ1N0YXRlQ2hhbmdlLmVtaXQoJGV2ZW50KVwiXHJcbiAgICAgIFtjb3ZlclN0eWxlXT1cImNvdmVyU3R5bGVcIlxyXG4gICAgPlxyXG4gICAgPC9JbWFnZT5cclxuICBgLFxyXG4gIHN0eWxlczogWydyZWFjdC1yZW5kZXJlciddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmFiSW1hZ2VDb21wb25lbnQgZXh0ZW5kcyBSZWFjdFdyYXBwZXJDb21wb25lbnQ8SUltYWdlUHJvcHM+IHtcclxuICBASW5wdXQoKSBhbHQ/OiBJSW1hZ2VQcm9wc1snYWx0J107XHJcbiAgQElucHV0KCkgY3Jvc3NPcmlnaW4/OiBJSW1hZ2VQcm9wc1snY3Jvc3NPcmlnaW4nXTtcclxuICBASW5wdXQoKSBoZWlnaHQ/OiBJSW1hZ2VQcm9wc1snaGVpZ2h0J107XHJcbiAgQElucHV0KCkgc2l6ZXM/OiBJSW1hZ2VQcm9wc1snc2l6ZXMnXTtcclxuICBASW5wdXQoKSBzcmM/OiBJSW1hZ2VQcm9wc1snc3JjJ107XHJcbiAgQElucHV0KCkgc3JjU2V0PzogSUltYWdlUHJvcHNbJ3NyY1NldCddO1xyXG4gIEBJbnB1dCgpIHVzZU1hcD86IElJbWFnZVByb3BzWyd1c2VNYXAnXTtcclxuICBASW5wdXQoKSB3aWR0aD86IElJbWFnZVByb3BzWyd3aWR0aCddO1xyXG5cclxuICBASW5wdXQoKSBzdHlsZXM/OiBJSW1hZ2VQcm9wc1snc3R5bGVzJ107XHJcbiAgQElucHV0KCkgdGhlbWU/OiBJSW1hZ2VQcm9wc1sndGhlbWUnXTtcclxuICBASW5wdXQoKSBjbGFzc05hbWU/OiBJSW1hZ2VQcm9wc1snY2xhc3NOYW1lJ107XHJcbiAgQElucHV0KCkgc2hvdWxkRmFkZUluPzogSUltYWdlUHJvcHNbJ3Nob3VsZEZhZGVJbiddO1xyXG4gIEBJbnB1dCgpIHNob3VsZFN0YXJ0VmlzaWJsZT86IElJbWFnZVByb3BzWydzaG91bGRTdGFydFZpc2libGUnXTtcclxuICBASW5wdXQoKSBpbWFnZUZpdD86IElJbWFnZVByb3BzWydpbWFnZUZpdCddO1xyXG4gIEBJbnB1dCgpIGVycm9yU3JjPzogSUltYWdlUHJvcHNbJ2Vycm9yU3JjJ107XHJcbiAgQElucHV0KCkgbWF4aW1pemVGcmFtZT86IElJbWFnZVByb3BzWydtYXhpbWl6ZUZyYW1lJ107XHJcbiAgQElucHV0KCkgY292ZXJTdHlsZT86IElJbWFnZVByb3BzWydjb3ZlclN0eWxlJ107XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvbkxvYWRpbmdTdGF0ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8SW1hZ2VMb2FkU3RhdGU+KCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3JlYWN0Tm9kZScsIHsgc3RhdGljOiB0cnVlIH0pIHByb3RlY3RlZCByZWFjdE5vZGVSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xyXG4gICAgc3VwZXIoZWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyKTtcclxuICB9XHJcbn1cclxuIl19