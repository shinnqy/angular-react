/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild, } from '@angular/core';
export class FabModalComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer);
        this.onLayerDidMount = new EventEmitter();
        this.onDismiss = new EventEmitter();
        this.onDismissed = new EventEmitter();
        this.onDismissHandler = this.onDismissHandler.bind(this);
    }
    /**
     * @param {?=} ev
     * @return {?}
     */
    onDismissHandler(ev) {
        this.onDismiss.emit(ev && ev.nativeEvent);
    }
}
FabModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-modal',
                exportAs: 'fabModal',
                template: `
    <Modal
      #reactNode
      [responsiveMode]="responsiveMode"
      [elementToFocusOnDismiss]="elementToFocusOnDismiss"
      [ignoreExternalFocusing]="ignoreExternalFocusing"
      [forceFocusInsideTrap]="forceFocusInsideTrap"
      [firstFocusableSelector]="firstFocusableSelector"
      [closeButtonAriaLabel]="closeButtonAriaLabel"
      [isClickableOutsideFocusTrap]="isClickableOutsideFocusTrap"
      [componentRef]="componentRef"
      [isOpen]="isOpen"
      [isDarkOverlay]="isDarkOverlay"
      [layerProps]="layerProps"
      [isBlocking]="isBlocking"
      [isModeless]="isModeless"
      [className]="className"
      [containerClassName]="containerClassName"
      [scrollableContentClassName]="scrollableContentClassName"
      [titleAriaId]="titleAriaId"
      [subtitleAriaId]="subtitleAriaId"
      [topOffsetFixed]="topOffsetFixed"
      [dragOptions]="dragOptions"
      [Dismiss]="onDismissHandler"
      (onLayerDidMount)="onLayerDidMount.emit()"
      (onDismissed)="onDismissed.emit()"
    >
      <ReactContent><ng-content></ng-content></ReactContent>
    </Modal>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabModalComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
FabModalComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    responsiveMode: [{ type: Input }],
    elementToFocusOnDismiss: [{ type: Input }],
    ignoreExternalFocusing: [{ type: Input }],
    forceFocusInsideTrap: [{ type: Input }],
    firstFocusableSelector: [{ type: Input }],
    closeButtonAriaLabel: [{ type: Input }],
    isClickableOutsideFocusTrap: [{ type: Input }],
    componentRef: [{ type: Input }],
    isOpen: [{ type: Input }],
    isDarkOverlay: [{ type: Input }],
    layerProps: [{ type: Input }],
    isBlocking: [{ type: Input }],
    isModeless: [{ type: Input }],
    className: [{ type: Input }],
    containerClassName: [{ type: Input }],
    scrollableContentClassName: [{ type: Input }],
    titleAriaId: [{ type: Input }],
    subtitleAriaId: [{ type: Input }],
    topOffsetFixed: [{ type: Input }],
    dragOptions: [{ type: Input }],
    onLayerDidMount: [{ type: Output }],
    onDismiss: [{ type: Output }],
    onDismissed: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabModalComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabModalComponent.prototype.responsiveMode;
    /** @type {?} */
    FabModalComponent.prototype.elementToFocusOnDismiss;
    /** @type {?} */
    FabModalComponent.prototype.ignoreExternalFocusing;
    /** @type {?} */
    FabModalComponent.prototype.forceFocusInsideTrap;
    /** @type {?} */
    FabModalComponent.prototype.firstFocusableSelector;
    /** @type {?} */
    FabModalComponent.prototype.closeButtonAriaLabel;
    /** @type {?} */
    FabModalComponent.prototype.isClickableOutsideFocusTrap;
    /** @type {?} */
    FabModalComponent.prototype.componentRef;
    /** @type {?} */
    FabModalComponent.prototype.isOpen;
    /** @type {?} */
    FabModalComponent.prototype.isDarkOverlay;
    /** @type {?} */
    FabModalComponent.prototype.layerProps;
    /** @type {?} */
    FabModalComponent.prototype.isBlocking;
    /** @type {?} */
    FabModalComponent.prototype.isModeless;
    /** @type {?} */
    FabModalComponent.prototype.className;
    /** @type {?} */
    FabModalComponent.prototype.containerClassName;
    /** @type {?} */
    FabModalComponent.prototype.scrollableContentClassName;
    /** @type {?} */
    FabModalComponent.prototype.titleAriaId;
    /** @type {?} */
    FabModalComponent.prototype.subtitleAriaId;
    /** @type {?} */
    FabModalComponent.prototype.topOffsetFixed;
    /** @type {?} */
    FabModalComponent.prototype.dragOptions;
    /** @type {?} */
    FabModalComponent.prototype.onLayerDidMount;
    /** @type {?} */
    FabModalComponent.prototype.onDismiss;
    /** @type {?} */
    FabModalComponent.prototype.onDismissed;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzVELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQXlDdkIsTUFBTSxPQUFPLGlCQUFrQixTQUFRLHFCQUFrQzs7Ozs7O0lBK0J2RSxZQUFZLFVBQXNCLEVBQUUsaUJBQW9DLEVBQUUsUUFBbUI7UUFDM0YsS0FBSyxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUw5QixvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDM0MsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDM0MsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBS3hELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsRUFBd0M7UUFDdkQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7WUEzRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUUsVUFBVTtnQkFDcEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTZCVDtnQkFFRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTt5QkFEdEMsZ0JBQWdCO2FBRTFCOzs7O1lBOUNDLFVBQVU7WUFGVixpQkFBaUI7WUFNakIsU0FBUzs7OzJCQTZDUixTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs2QkFFdkMsS0FBSztzQ0FFTCxLQUFLO3FDQUNMLEtBQUs7bUNBQ0wsS0FBSztxQ0FDTCxLQUFLO21DQUNMLEtBQUs7MENBQ0wsS0FBSzsyQkFFTCxLQUFLO3FCQUNMLEtBQUs7NEJBQ0wsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsS0FBSzt3QkFDTCxLQUFLO2lDQUNMLEtBQUs7eUNBQ0wsS0FBSzswQkFDTCxLQUFLOzZCQUNMLEtBQUs7NkJBQ0wsS0FBSzswQkFDTCxLQUFLOzhCQUVMLE1BQU07d0JBQ04sTUFBTTswQkFDTixNQUFNOzs7Ozs7O0lBM0JQLHlDQUE2RTs7SUFFN0UsMkNBQXdEOztJQUV4RCxvREFBMEU7O0lBQzFFLG1EQUF3RTs7SUFDeEUsaURBQW9FOztJQUNwRSxtREFBd0U7O0lBQ3hFLGlEQUFvRTs7SUFDcEUsd0RBQWtGOztJQUVsRix5Q0FBb0Q7O0lBQ3BELG1DQUF3Qzs7SUFDeEMsMENBQXNEOztJQUN0RCx1Q0FBZ0Q7O0lBQ2hELHVDQUFnRDs7SUFDaEQsdUNBQWdEOztJQUNoRCxzQ0FBOEM7O0lBQzlDLCtDQUFnRTs7SUFDaEUsdURBQWdGOztJQUNoRix3Q0FBa0Q7O0lBQ2xELDJDQUF3RDs7SUFDeEQsMkNBQXdEOztJQUN4RCx3Q0FBa0Q7O0lBRWxELDRDQUE4RDs7SUFDOUQsc0NBQThEOztJQUM5RCx3Q0FBMEQiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgUmVhY3RXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXItcmVhY3QvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0NoaWxkLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJQWNjZXNzaWJsZVBvcHVwUHJvcHMgfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9jb21tb24vSUFjY2Vzc2libGVQb3B1cFByb3BzJztcclxuaW1wb3J0IHsgSU1vZGFsUHJvcHMgfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9Nb2RhbCc7XHJcbmltcG9ydCB7IElXaXRoUmVzcG9uc2l2ZU1vZGVTdGF0ZSB9IGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliL3V0aWxpdGllcy9kZWNvcmF0b3JzL3dpdGhSZXNwb25zaXZlTW9kZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZhYi1tb2RhbCcsXHJcbiAgZXhwb3J0QXM6ICdmYWJNb2RhbCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxNb2RhbFxyXG4gICAgICAjcmVhY3ROb2RlXHJcbiAgICAgIFtyZXNwb25zaXZlTW9kZV09XCJyZXNwb25zaXZlTW9kZVwiXHJcbiAgICAgIFtlbGVtZW50VG9Gb2N1c09uRGlzbWlzc109XCJlbGVtZW50VG9Gb2N1c09uRGlzbWlzc1wiXHJcbiAgICAgIFtpZ25vcmVFeHRlcm5hbEZvY3VzaW5nXT1cImlnbm9yZUV4dGVybmFsRm9jdXNpbmdcIlxyXG4gICAgICBbZm9yY2VGb2N1c0luc2lkZVRyYXBdPVwiZm9yY2VGb2N1c0luc2lkZVRyYXBcIlxyXG4gICAgICBbZmlyc3RGb2N1c2FibGVTZWxlY3Rvcl09XCJmaXJzdEZvY3VzYWJsZVNlbGVjdG9yXCJcclxuICAgICAgW2Nsb3NlQnV0dG9uQXJpYUxhYmVsXT1cImNsb3NlQnV0dG9uQXJpYUxhYmVsXCJcclxuICAgICAgW2lzQ2xpY2thYmxlT3V0c2lkZUZvY3VzVHJhcF09XCJpc0NsaWNrYWJsZU91dHNpZGVGb2N1c1RyYXBcIlxyXG4gICAgICBbY29tcG9uZW50UmVmXT1cImNvbXBvbmVudFJlZlwiXHJcbiAgICAgIFtpc09wZW5dPVwiaXNPcGVuXCJcclxuICAgICAgW2lzRGFya092ZXJsYXldPVwiaXNEYXJrT3ZlcmxheVwiXHJcbiAgICAgIFtsYXllclByb3BzXT1cImxheWVyUHJvcHNcIlxyXG4gICAgICBbaXNCbG9ja2luZ109XCJpc0Jsb2NraW5nXCJcclxuICAgICAgW2lzTW9kZWxlc3NdPVwiaXNNb2RlbGVzc1wiXHJcbiAgICAgIFtjbGFzc05hbWVdPVwiY2xhc3NOYW1lXCJcclxuICAgICAgW2NvbnRhaW5lckNsYXNzTmFtZV09XCJjb250YWluZXJDbGFzc05hbWVcIlxyXG4gICAgICBbc2Nyb2xsYWJsZUNvbnRlbnRDbGFzc05hbWVdPVwic2Nyb2xsYWJsZUNvbnRlbnRDbGFzc05hbWVcIlxyXG4gICAgICBbdGl0bGVBcmlhSWRdPVwidGl0bGVBcmlhSWRcIlxyXG4gICAgICBbc3VidGl0bGVBcmlhSWRdPVwic3VidGl0bGVBcmlhSWRcIlxyXG4gICAgICBbdG9wT2Zmc2V0Rml4ZWRdPVwidG9wT2Zmc2V0Rml4ZWRcIlxyXG4gICAgICBbZHJhZ09wdGlvbnNdPVwiZHJhZ09wdGlvbnNcIlxyXG4gICAgICBbRGlzbWlzc109XCJvbkRpc21pc3NIYW5kbGVyXCJcclxuICAgICAgKG9uTGF5ZXJEaWRNb3VudCk9XCJvbkxheWVyRGlkTW91bnQuZW1pdCgpXCJcclxuICAgICAgKG9uRGlzbWlzc2VkKT1cIm9uRGlzbWlzc2VkLmVtaXQoKVwiXHJcbiAgICA+XHJcbiAgICAgIDxSZWFjdENvbnRlbnQ+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvUmVhY3RDb250ZW50PlxyXG4gICAgPC9Nb2RhbD5cclxuICBgLFxyXG4gIHN0eWxlczogWydyZWFjdC1yZW5kZXJlciddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmFiTW9kYWxDb21wb25lbnQgZXh0ZW5kcyBSZWFjdFdyYXBwZXJDb21wb25lbnQ8SU1vZGFsUHJvcHM+XHJcbiAgaW1wbGVtZW50cyBJV2l0aFJlc3BvbnNpdmVNb2RlU3RhdGUsIElBY2Nlc3NpYmxlUG9wdXBQcm9wcyB7XHJcbiAgQFZpZXdDaGlsZCgncmVhY3ROb2RlJywgeyBzdGF0aWM6IHRydWUgfSkgcHJvdGVjdGVkIHJlYWN0Tm9kZVJlZjogRWxlbWVudFJlZjtcclxuXHJcbiAgQElucHV0KCkgcmVzcG9uc2l2ZU1vZGU/OiBJTW9kYWxQcm9wc1sncmVzcG9uc2l2ZU1vZGUnXTtcclxuXHJcbiAgQElucHV0KCkgZWxlbWVudFRvRm9jdXNPbkRpc21pc3M/OiBJTW9kYWxQcm9wc1snZWxlbWVudFRvRm9jdXNPbkRpc21pc3MnXTtcclxuICBASW5wdXQoKSBpZ25vcmVFeHRlcm5hbEZvY3VzaW5nPzogSU1vZGFsUHJvcHNbJ2lnbm9yZUV4dGVybmFsRm9jdXNpbmcnXTtcclxuICBASW5wdXQoKSBmb3JjZUZvY3VzSW5zaWRlVHJhcD86IElNb2RhbFByb3BzWydmb3JjZUZvY3VzSW5zaWRlVHJhcCddO1xyXG4gIEBJbnB1dCgpIGZpcnN0Rm9jdXNhYmxlU2VsZWN0b3I/OiBJTW9kYWxQcm9wc1snZmlyc3RGb2N1c2FibGVTZWxlY3RvciddO1xyXG4gIEBJbnB1dCgpIGNsb3NlQnV0dG9uQXJpYUxhYmVsPzogSU1vZGFsUHJvcHNbJ2Nsb3NlQnV0dG9uQXJpYUxhYmVsJ107XHJcbiAgQElucHV0KCkgaXNDbGlja2FibGVPdXRzaWRlRm9jdXNUcmFwPzogSU1vZGFsUHJvcHNbJ2lzQ2xpY2thYmxlT3V0c2lkZUZvY3VzVHJhcCddO1xyXG5cclxuICBASW5wdXQoKSBjb21wb25lbnRSZWY/OiBJTW9kYWxQcm9wc1snY29tcG9uZW50UmVmJ107XHJcbiAgQElucHV0KCkgaXNPcGVuPzogSU1vZGFsUHJvcHNbJ2lzT3BlbiddO1xyXG4gIEBJbnB1dCgpIGlzRGFya092ZXJsYXk/OiBJTW9kYWxQcm9wc1snaXNEYXJrT3ZlcmxheSddO1xyXG4gIEBJbnB1dCgpIGxheWVyUHJvcHM/OiBJTW9kYWxQcm9wc1snbGF5ZXJQcm9wcyddO1xyXG4gIEBJbnB1dCgpIGlzQmxvY2tpbmc/OiBJTW9kYWxQcm9wc1snaXNCbG9ja2luZyddO1xyXG4gIEBJbnB1dCgpIGlzTW9kZWxlc3M/OiBJTW9kYWxQcm9wc1snaXNNb2RlbGVzcyddO1xyXG4gIEBJbnB1dCgpIGNsYXNzTmFtZT86IElNb2RhbFByb3BzWydjbGFzc05hbWUnXTtcclxuICBASW5wdXQoKSBjb250YWluZXJDbGFzc05hbWU/OiBJTW9kYWxQcm9wc1snY29udGFpbmVyQ2xhc3NOYW1lJ107XHJcbiAgQElucHV0KCkgc2Nyb2xsYWJsZUNvbnRlbnRDbGFzc05hbWU/OiBJTW9kYWxQcm9wc1snc2Nyb2xsYWJsZUNvbnRlbnRDbGFzc05hbWUnXTtcclxuICBASW5wdXQoKSB0aXRsZUFyaWFJZD86IElNb2RhbFByb3BzWyd0aXRsZUFyaWFJZCddO1xyXG4gIEBJbnB1dCgpIHN1YnRpdGxlQXJpYUlkPzogSU1vZGFsUHJvcHNbJ3N1YnRpdGxlQXJpYUlkJ107XHJcbiAgQElucHV0KCkgdG9wT2Zmc2V0Rml4ZWQ/OiBJTW9kYWxQcm9wc1sndG9wT2Zmc2V0Rml4ZWQnXTtcclxuICBASW5wdXQoKSBkcmFnT3B0aW9ucz86IElNb2RhbFByb3BzWydkcmFnT3B0aW9ucyddO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25MYXllckRpZE1vdW50ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvbkRpc21pc3MgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uRGlzbWlzc2VkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcik7XHJcblxyXG4gICAgdGhpcy5vbkRpc21pc3NIYW5kbGVyID0gdGhpcy5vbkRpc21pc3NIYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBvbkRpc21pc3NIYW5kbGVyKGV2PzogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pIHtcclxuICAgIHRoaXMub25EaXNtaXNzLmVtaXQoZXYgJiYgZXYubmF0aXZlRXZlbnQpO1xyXG4gIH1cclxufVxyXG4iXX0=