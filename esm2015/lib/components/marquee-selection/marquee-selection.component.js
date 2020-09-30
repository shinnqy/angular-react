/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, NgZone, Renderer2, ViewChild, } from '@angular/core';
import { ReactWrapperComponent } from '@angular-react/core';
export class FabMarqueeSelectionComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, { ngZone, setHostDisplay: true });
    }
}
FabMarqueeSelectionComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-marquee-selection',
                exportAs: 'fabMarqueeSelection',
                template: `
    <MarqueeSelection
      #reactNode
      [selection]="selection"
      [className]="className"
      [componentRef]="componentRef"
      [isDraggingConstrainedToRoot]="isDraggingConstrainedToRoot"
      [isEnabled]="isEnabled"
      [rootProps]="rootProps"
      [styles]="styles"
      [theme]="theme"
      [ShouldStartSelection]="onShouldStartSelection"
    >
      <ReactContent><ng-content></ng-content></ReactContent>
    </MarqueeSelection>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabMarqueeSelectionComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabMarqueeSelectionComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    componentRef: [{ type: Input }],
    selection: [{ type: Input }],
    rootProps: [{ type: Input }],
    onShouldStartSelection: [{ type: Input }],
    isEnabled: [{ type: Input }],
    isDraggingConstrainedToRoot: [{ type: Input }],
    className: [{ type: Input }],
    theme: [{ type: Input }],
    styles: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabMarqueeSelectionComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabMarqueeSelectionComponent.prototype.componentRef;
    /** @type {?} */
    FabMarqueeSelectionComponent.prototype.selection;
    /** @type {?} */
    FabMarqueeSelectionComponent.prototype.rootProps;
    /** @type {?} */
    FabMarqueeSelectionComponent.prototype.onShouldStartSelection;
    /** @type {?} */
    FabMarqueeSelectionComponent.prototype.isEnabled;
    /** @type {?} */
    FabMarqueeSelectionComponent.prototype.isDraggingConstrainedToRoot;
    /** @type {?} */
    FabMarqueeSelectionComponent.prototype.className;
    /** @type {?} */
    FabMarqueeSelectionComponent.prototype.theme;
    /** @type {?} */
    FabMarqueeSelectionComponent.prototype.styles;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFycXVlZS1zZWxlY3Rpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvbWFycXVlZS1zZWxlY3Rpb24vbWFycXVlZS1zZWxlY3Rpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBeUI1RCxNQUFNLE9BQU8sNEJBQTZCLFNBQVEscUJBQTZDOzs7Ozs7O0lBYTdGLFlBQVksVUFBc0IsRUFBRSxpQkFBb0MsRUFBRSxRQUFtQixFQUFFLE1BQWM7UUFDM0csS0FBSyxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDbkYsQ0FBQzs7O1lBckNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7OztHQWVUO2dCQUVELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO3lCQUR0QyxnQkFBZ0I7YUFFMUI7Ozs7WUE5QkMsVUFBVTtZQUZWLGlCQUFpQjtZQUtqQixTQUFTO1lBRFQsTUFBTTs7OzJCQThCTCxTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsyQkFFdkMsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7cUNBQ0wsS0FBSzt3QkFDTCxLQUFLOzBDQUNMLEtBQUs7d0JBQ0wsS0FBSztvQkFDTCxLQUFLO3FCQUNMLEtBQUs7Ozs7Ozs7SUFWTixvREFBNkU7O0lBRTdFLG9EQUErRDs7SUFDL0QsaURBQXdEOztJQUN4RCxpREFBeUQ7O0lBQ3pELDhEQUE4RDs7SUFDOUQsaURBQXlEOztJQUN6RCxtRUFBNkY7O0lBQzdGLGlEQUF5RDs7SUFDekQsNkNBQWlEOztJQUNqRCw4Q0FBbUQiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFZpZXdDaGlsZCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmVhY3RXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXItcmVhY3QvY29yZSc7XHJcbmltcG9ydCB7IElNYXJxdWVlU2VsZWN0aW9uUHJvcHMgfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9NYXJxdWVlU2VsZWN0aW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZmFiLW1hcnF1ZWUtc2VsZWN0aW9uJyxcclxuICBleHBvcnRBczogJ2ZhYk1hcnF1ZWVTZWxlY3Rpb24nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8TWFycXVlZVNlbGVjdGlvblxyXG4gICAgICAjcmVhY3ROb2RlXHJcbiAgICAgIFtzZWxlY3Rpb25dPVwic2VsZWN0aW9uXCJcclxuICAgICAgW2NsYXNzTmFtZV09XCJjbGFzc05hbWVcIlxyXG4gICAgICBbY29tcG9uZW50UmVmXT1cImNvbXBvbmVudFJlZlwiXHJcbiAgICAgIFtpc0RyYWdnaW5nQ29uc3RyYWluZWRUb1Jvb3RdPVwiaXNEcmFnZ2luZ0NvbnN0cmFpbmVkVG9Sb290XCJcclxuICAgICAgW2lzRW5hYmxlZF09XCJpc0VuYWJsZWRcIlxyXG4gICAgICBbcm9vdFByb3BzXT1cInJvb3RQcm9wc1wiXHJcbiAgICAgIFtzdHlsZXNdPVwic3R5bGVzXCJcclxuICAgICAgW3RoZW1lXT1cInRoZW1lXCJcclxuICAgICAgW1Nob3VsZFN0YXJ0U2VsZWN0aW9uXT1cIm9uU2hvdWxkU3RhcnRTZWxlY3Rpb25cIlxyXG4gICAgPlxyXG4gICAgICA8UmVhY3RDb250ZW50PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L1JlYWN0Q29udGVudD5cclxuICAgIDwvTWFycXVlZVNlbGVjdGlvbj5cclxuICBgLFxyXG4gIHN0eWxlczogWydyZWFjdC1yZW5kZXJlciddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmFiTWFycXVlZVNlbGVjdGlvbkNvbXBvbmVudCBleHRlbmRzIFJlYWN0V3JhcHBlckNvbXBvbmVudDxJTWFycXVlZVNlbGVjdGlvblByb3BzPiB7XHJcbiAgQFZpZXdDaGlsZCgncmVhY3ROb2RlJywgeyBzdGF0aWM6IHRydWUgfSkgcHJvdGVjdGVkIHJlYWN0Tm9kZVJlZjogRWxlbWVudFJlZjtcclxuXHJcbiAgQElucHV0KCkgY29tcG9uZW50UmVmPzogSU1hcnF1ZWVTZWxlY3Rpb25Qcm9wc1snY29tcG9uZW50UmVmJ107XHJcbiAgQElucHV0KCkgc2VsZWN0aW9uOiBJTWFycXVlZVNlbGVjdGlvblByb3BzWydzZWxlY3Rpb24nXTtcclxuICBASW5wdXQoKSByb290UHJvcHM/OiBJTWFycXVlZVNlbGVjdGlvblByb3BzWydyb290UHJvcHMnXTtcclxuICBASW5wdXQoKSBvblNob3VsZFN0YXJ0U2VsZWN0aW9uPzogKGV2OiBNb3VzZUV2ZW50KSA9PiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGlzRW5hYmxlZD86IElNYXJxdWVlU2VsZWN0aW9uUHJvcHNbJ2lzRW5hYmxlZCddO1xyXG4gIEBJbnB1dCgpIGlzRHJhZ2dpbmdDb25zdHJhaW5lZFRvUm9vdD86IElNYXJxdWVlU2VsZWN0aW9uUHJvcHNbJ2lzRHJhZ2dpbmdDb25zdHJhaW5lZFRvUm9vdCddO1xyXG4gIEBJbnB1dCgpIGNsYXNzTmFtZT86IElNYXJxdWVlU2VsZWN0aW9uUHJvcHNbJ2NsYXNzTmFtZSddO1xyXG4gIEBJbnB1dCgpIHRoZW1lPzogSU1hcnF1ZWVTZWxlY3Rpb25Qcm9wc1sndGhlbWUnXTtcclxuICBASW5wdXQoKSBzdHlsZXM/OiBJTWFycXVlZVNlbGVjdGlvblByb3BzWydzdHlsZXMnXTtcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCBuZ1pvbmU6IE5nWm9uZSkge1xyXG4gICAgc3VwZXIoZWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyLCB7IG5nWm9uZSwgc2V0SG9zdERpc3BsYXk6IHRydWUgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==