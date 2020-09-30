/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild, } from '@angular/core';
var FabModalComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabModalComponent, _super);
    function FabModalComponent(elementRef, changeDetectorRef, renderer) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer) || this;
        _this.onLayerDidMount = new EventEmitter();
        _this.onDismiss = new EventEmitter();
        _this.onDismissed = new EventEmitter();
        _this.onDismissHandler = _this.onDismissHandler.bind(_this);
        return _this;
    }
    /**
     * @param {?=} ev
     * @return {?}
     */
    FabModalComponent.prototype.onDismissHandler = /**
     * @param {?=} ev
     * @return {?}
     */
    function (ev) {
        this.onDismiss.emit(ev && ev.nativeEvent);
    };
    FabModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-modal',
                    exportAs: 'fabModal',
                    template: "\n    <Modal\n      #reactNode\n      [responsiveMode]=\"responsiveMode\"\n      [elementToFocusOnDismiss]=\"elementToFocusOnDismiss\"\n      [ignoreExternalFocusing]=\"ignoreExternalFocusing\"\n      [forceFocusInsideTrap]=\"forceFocusInsideTrap\"\n      [firstFocusableSelector]=\"firstFocusableSelector\"\n      [closeButtonAriaLabel]=\"closeButtonAriaLabel\"\n      [isClickableOutsideFocusTrap]=\"isClickableOutsideFocusTrap\"\n      [componentRef]=\"componentRef\"\n      [isOpen]=\"isOpen\"\n      [isDarkOverlay]=\"isDarkOverlay\"\n      [layerProps]=\"layerProps\"\n      [isBlocking]=\"isBlocking\"\n      [isModeless]=\"isModeless\"\n      [className]=\"className\"\n      [containerClassName]=\"containerClassName\"\n      [scrollableContentClassName]=\"scrollableContentClassName\"\n      [titleAriaId]=\"titleAriaId\"\n      [subtitleAriaId]=\"subtitleAriaId\"\n      [topOffsetFixed]=\"topOffsetFixed\"\n      [dragOptions]=\"dragOptions\"\n      [Dismiss]=\"onDismissHandler\"\n      (onLayerDidMount)=\"onLayerDidMount.emit()\"\n      (onDismissed)=\"onDismissed.emit()\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </Modal>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabModalComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
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
    return FabModalComponent;
}(ReactWrapperComponent));
export { FabModalComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM1RCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFLdkI7SUFvQ3VDLDZDQUFrQztJQStCdkUsMkJBQVksVUFBc0IsRUFBRSxpQkFBb0MsRUFBRSxRQUFtQjtRQUE3RixZQUNFLGtCQUFNLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLENBQUMsU0FHL0M7UUFSa0IscUJBQWUsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQzNDLGVBQVMsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQzNDLGlCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUt4RCxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQzs7SUFDM0QsQ0FBQzs7Ozs7SUFFRCw0Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsRUFBd0M7UUFDdkQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1QyxDQUFDOztnQkEzRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixRQUFRLEVBQUUsVUFBVTtvQkFDcEIsUUFBUSxFQUFFLHlwQ0E2QlQ7b0JBRUQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07NkJBRHRDLGdCQUFnQjtpQkFFMUI7Ozs7Z0JBOUNDLFVBQVU7Z0JBRlYsaUJBQWlCO2dCQU1qQixTQUFTOzs7K0JBNkNSLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2lDQUV2QyxLQUFLOzBDQUVMLEtBQUs7eUNBQ0wsS0FBSzt1Q0FDTCxLQUFLO3lDQUNMLEtBQUs7dUNBQ0wsS0FBSzs4Q0FDTCxLQUFLOytCQUVMLEtBQUs7eUJBQ0wsS0FBSztnQ0FDTCxLQUFLOzZCQUNMLEtBQUs7NkJBQ0wsS0FBSzs2QkFDTCxLQUFLOzRCQUNMLEtBQUs7cUNBQ0wsS0FBSzs2Q0FDTCxLQUFLOzhCQUNMLEtBQUs7aUNBQ0wsS0FBSztpQ0FDTCxLQUFLOzhCQUNMLEtBQUs7a0NBRUwsTUFBTTs0QkFDTixNQUFNOzhCQUNOLE1BQU07O0lBV1Qsd0JBQUM7Q0FBQSxBQTVFRCxDQW9DdUMscUJBQXFCLEdBd0MzRDtTQXhDWSxpQkFBaUI7Ozs7OztJQUU1Qix5Q0FBNkU7O0lBRTdFLDJDQUF3RDs7SUFFeEQsb0RBQTBFOztJQUMxRSxtREFBd0U7O0lBQ3hFLGlEQUFvRTs7SUFDcEUsbURBQXdFOztJQUN4RSxpREFBb0U7O0lBQ3BFLHdEQUFrRjs7SUFFbEYseUNBQW9EOztJQUNwRCxtQ0FBd0M7O0lBQ3hDLDBDQUFzRDs7SUFDdEQsdUNBQWdEOztJQUNoRCx1Q0FBZ0Q7O0lBQ2hELHVDQUFnRDs7SUFDaEQsc0NBQThDOztJQUM5QywrQ0FBZ0U7O0lBQ2hFLHVEQUFnRjs7SUFDaEYsd0NBQWtEOztJQUNsRCwyQ0FBd0Q7O0lBQ3hELDJDQUF3RDs7SUFDeEQsd0NBQWtEOztJQUVsRCw0Q0FBOEQ7O0lBQzlELHNDQUE4RDs7SUFDOUQsd0NBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IFJlYWN0V3JhcHBlckNvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFZpZXdDaGlsZCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSUFjY2Vzc2libGVQb3B1cFByb3BzIH0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvY29tbW9uL0lBY2Nlc3NpYmxlUG9wdXBQcm9wcyc7XHJcbmltcG9ydCB7IElNb2RhbFByb3BzIH0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvTW9kYWwnO1xyXG5pbXBvcnQgeyBJV2l0aFJlc3BvbnNpdmVNb2RlU3RhdGUgfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi91dGlsaXRpZXMvZGVjb3JhdG9ycy93aXRoUmVzcG9uc2l2ZU1vZGUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmYWItbW9kYWwnLFxyXG4gIGV4cG9ydEFzOiAnZmFiTW9kYWwnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8TW9kYWxcclxuICAgICAgI3JlYWN0Tm9kZVxyXG4gICAgICBbcmVzcG9uc2l2ZU1vZGVdPVwicmVzcG9uc2l2ZU1vZGVcIlxyXG4gICAgICBbZWxlbWVudFRvRm9jdXNPbkRpc21pc3NdPVwiZWxlbWVudFRvRm9jdXNPbkRpc21pc3NcIlxyXG4gICAgICBbaWdub3JlRXh0ZXJuYWxGb2N1c2luZ109XCJpZ25vcmVFeHRlcm5hbEZvY3VzaW5nXCJcclxuICAgICAgW2ZvcmNlRm9jdXNJbnNpZGVUcmFwXT1cImZvcmNlRm9jdXNJbnNpZGVUcmFwXCJcclxuICAgICAgW2ZpcnN0Rm9jdXNhYmxlU2VsZWN0b3JdPVwiZmlyc3RGb2N1c2FibGVTZWxlY3RvclwiXHJcbiAgICAgIFtjbG9zZUJ1dHRvbkFyaWFMYWJlbF09XCJjbG9zZUJ1dHRvbkFyaWFMYWJlbFwiXHJcbiAgICAgIFtpc0NsaWNrYWJsZU91dHNpZGVGb2N1c1RyYXBdPVwiaXNDbGlja2FibGVPdXRzaWRlRm9jdXNUcmFwXCJcclxuICAgICAgW2NvbXBvbmVudFJlZl09XCJjb21wb25lbnRSZWZcIlxyXG4gICAgICBbaXNPcGVuXT1cImlzT3BlblwiXHJcbiAgICAgIFtpc0RhcmtPdmVybGF5XT1cImlzRGFya092ZXJsYXlcIlxyXG4gICAgICBbbGF5ZXJQcm9wc109XCJsYXllclByb3BzXCJcclxuICAgICAgW2lzQmxvY2tpbmddPVwiaXNCbG9ja2luZ1wiXHJcbiAgICAgIFtpc01vZGVsZXNzXT1cImlzTW9kZWxlc3NcIlxyXG4gICAgICBbY2xhc3NOYW1lXT1cImNsYXNzTmFtZVwiXHJcbiAgICAgIFtjb250YWluZXJDbGFzc05hbWVdPVwiY29udGFpbmVyQ2xhc3NOYW1lXCJcclxuICAgICAgW3Njcm9sbGFibGVDb250ZW50Q2xhc3NOYW1lXT1cInNjcm9sbGFibGVDb250ZW50Q2xhc3NOYW1lXCJcclxuICAgICAgW3RpdGxlQXJpYUlkXT1cInRpdGxlQXJpYUlkXCJcclxuICAgICAgW3N1YnRpdGxlQXJpYUlkXT1cInN1YnRpdGxlQXJpYUlkXCJcclxuICAgICAgW3RvcE9mZnNldEZpeGVkXT1cInRvcE9mZnNldEZpeGVkXCJcclxuICAgICAgW2RyYWdPcHRpb25zXT1cImRyYWdPcHRpb25zXCJcclxuICAgICAgW0Rpc21pc3NdPVwib25EaXNtaXNzSGFuZGxlclwiXHJcbiAgICAgIChvbkxheWVyRGlkTW91bnQpPVwib25MYXllckRpZE1vdW50LmVtaXQoKVwiXHJcbiAgICAgIChvbkRpc21pc3NlZCk9XCJvbkRpc21pc3NlZC5lbWl0KClcIlxyXG4gICAgPlxyXG4gICAgICA8UmVhY3RDb250ZW50PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L1JlYWN0Q29udGVudD5cclxuICAgIDwvTW9kYWw+XHJcbiAgYCxcclxuICBzdHlsZXM6IFsncmVhY3QtcmVuZGVyZXInXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZhYk1vZGFsQ29tcG9uZW50IGV4dGVuZHMgUmVhY3RXcmFwcGVyQ29tcG9uZW50PElNb2RhbFByb3BzPlxyXG4gIGltcGxlbWVudHMgSVdpdGhSZXNwb25zaXZlTW9kZVN0YXRlLCBJQWNjZXNzaWJsZVBvcHVwUHJvcHMge1xyXG4gIEBWaWV3Q2hpbGQoJ3JlYWN0Tm9kZScsIHsgc3RhdGljOiB0cnVlIH0pIHByb3RlY3RlZCByZWFjdE5vZGVSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBJbnB1dCgpIHJlc3BvbnNpdmVNb2RlPzogSU1vZGFsUHJvcHNbJ3Jlc3BvbnNpdmVNb2RlJ107XHJcblxyXG4gIEBJbnB1dCgpIGVsZW1lbnRUb0ZvY3VzT25EaXNtaXNzPzogSU1vZGFsUHJvcHNbJ2VsZW1lbnRUb0ZvY3VzT25EaXNtaXNzJ107XHJcbiAgQElucHV0KCkgaWdub3JlRXh0ZXJuYWxGb2N1c2luZz86IElNb2RhbFByb3BzWydpZ25vcmVFeHRlcm5hbEZvY3VzaW5nJ107XHJcbiAgQElucHV0KCkgZm9yY2VGb2N1c0luc2lkZVRyYXA/OiBJTW9kYWxQcm9wc1snZm9yY2VGb2N1c0luc2lkZVRyYXAnXTtcclxuICBASW5wdXQoKSBmaXJzdEZvY3VzYWJsZVNlbGVjdG9yPzogSU1vZGFsUHJvcHNbJ2ZpcnN0Rm9jdXNhYmxlU2VsZWN0b3InXTtcclxuICBASW5wdXQoKSBjbG9zZUJ1dHRvbkFyaWFMYWJlbD86IElNb2RhbFByb3BzWydjbG9zZUJ1dHRvbkFyaWFMYWJlbCddO1xyXG4gIEBJbnB1dCgpIGlzQ2xpY2thYmxlT3V0c2lkZUZvY3VzVHJhcD86IElNb2RhbFByb3BzWydpc0NsaWNrYWJsZU91dHNpZGVGb2N1c1RyYXAnXTtcclxuXHJcbiAgQElucHV0KCkgY29tcG9uZW50UmVmPzogSU1vZGFsUHJvcHNbJ2NvbXBvbmVudFJlZiddO1xyXG4gIEBJbnB1dCgpIGlzT3Blbj86IElNb2RhbFByb3BzWydpc09wZW4nXTtcclxuICBASW5wdXQoKSBpc0RhcmtPdmVybGF5PzogSU1vZGFsUHJvcHNbJ2lzRGFya092ZXJsYXknXTtcclxuICBASW5wdXQoKSBsYXllclByb3BzPzogSU1vZGFsUHJvcHNbJ2xheWVyUHJvcHMnXTtcclxuICBASW5wdXQoKSBpc0Jsb2NraW5nPzogSU1vZGFsUHJvcHNbJ2lzQmxvY2tpbmcnXTtcclxuICBASW5wdXQoKSBpc01vZGVsZXNzPzogSU1vZGFsUHJvcHNbJ2lzTW9kZWxlc3MnXTtcclxuICBASW5wdXQoKSBjbGFzc05hbWU/OiBJTW9kYWxQcm9wc1snY2xhc3NOYW1lJ107XHJcbiAgQElucHV0KCkgY29udGFpbmVyQ2xhc3NOYW1lPzogSU1vZGFsUHJvcHNbJ2NvbnRhaW5lckNsYXNzTmFtZSddO1xyXG4gIEBJbnB1dCgpIHNjcm9sbGFibGVDb250ZW50Q2xhc3NOYW1lPzogSU1vZGFsUHJvcHNbJ3Njcm9sbGFibGVDb250ZW50Q2xhc3NOYW1lJ107XHJcbiAgQElucHV0KCkgdGl0bGVBcmlhSWQ/OiBJTW9kYWxQcm9wc1sndGl0bGVBcmlhSWQnXTtcclxuICBASW5wdXQoKSBzdWJ0aXRsZUFyaWFJZD86IElNb2RhbFByb3BzWydzdWJ0aXRsZUFyaWFJZCddO1xyXG4gIEBJbnB1dCgpIHRvcE9mZnNldEZpeGVkPzogSU1vZGFsUHJvcHNbJ3RvcE9mZnNldEZpeGVkJ107XHJcbiAgQElucHV0KCkgZHJhZ09wdGlvbnM/OiBJTW9kYWxQcm9wc1snZHJhZ09wdGlvbnMnXTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uTGF5ZXJEaWRNb3VudCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25EaXNtaXNzID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvbkRpc21pc3NlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcbiAgICBzdXBlcihlbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXIpO1xyXG5cclxuICAgIHRoaXMub25EaXNtaXNzSGFuZGxlciA9IHRoaXMub25EaXNtaXNzSGFuZGxlci5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgb25EaXNtaXNzSGFuZGxlcihldj86IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSB7XHJcbiAgICB0aGlzLm9uRGlzbWlzcy5lbWl0KGV2ICYmIGV2Lm5hdGl2ZUV2ZW50KTtcclxuICB9XHJcbn1cclxuIl19