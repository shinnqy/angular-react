/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild, } from '@angular/core';
var FabDialogComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabDialogComponent, _super);
    function FabDialogComponent(elementRef, changeDetectorRef, renderer) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer) || this;
        _this.onDismiss = new EventEmitter();
        _this.onDismissHandler = _this.onDismissHandler.bind(_this);
        return _this;
    }
    /**
     * @param {?} ev
     * @return {?}
     */
    FabDialogComponent.prototype.onDismissHandler = /**
     * @param {?} ev
     * @return {?}
     */
    function (ev) {
        this.onDismiss.emit(ev && ev.nativeEvent);
    };
    FabDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-dialog',
                    exportAs: 'fabDialog',
                    template: "\n    <!-- prettier-ignore -->\n    <Dialog\n      #reactNode\n      [responsiveMode]=\"responsiveMode\"\n      [elementToFocusOnDismiss]=\"elementToFocusOnDismiss\"\n      [ignoreExternalFocusing]=\"ignoreExternalFocusing\"\n      [forceFocusInsideTrap]=\"forceFocusInsideTrap\"\n      [firstFocusableSelector]=\"firstFocusableSelector\"\n      [closeButtonAriaLabel]=\"closeButtonAriaLabel\"\n      [isClickableOutsideFocusTrap]=\"isClickableOutsideFocusTrap\"\n      [componentRef]=\"componentRef\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [dialogContentProps]=\"dialogContentProps\"\n      [hidden]=\"hidden\"\n      [modalProps]=\"modalProps\"\n      [minWidth]=\"minWidth\"\n      [maxWidth]=\"maxWidth\"\n      (onDismiss)=\"onDismissHandler($event)\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </Dialog>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabDialogComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    FabDialogComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
        responsiveMode: [{ type: Input }],
        elementToFocusOnDismiss: [{ type: Input }],
        ignoreExternalFocusing: [{ type: Input }],
        forceFocusInsideTrap: [{ type: Input }],
        firstFocusableSelector: [{ type: Input }],
        closeButtonAriaLabel: [{ type: Input }],
        isClickableOutsideFocusTrap: [{ type: Input }],
        componentRef: [{ type: Input }],
        styles: [{ type: Input }],
        theme: [{ type: Input }],
        dialogContentProps: [{ type: Input }],
        hidden: [{ type: Input }],
        modalProps: [{ type: Input }],
        minWidth: [{ type: Input }],
        maxWidth: [{ type: Input }],
        onDismiss: [{ type: Output }]
    };
    return FabDialogComponent;
}(ReactWrapperComponent));
export { FabDialogComponent };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabDialogComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabDialogComponent.prototype.responsiveMode;
    /** @type {?} */
    FabDialogComponent.prototype.elementToFocusOnDismiss;
    /** @type {?} */
    FabDialogComponent.prototype.ignoreExternalFocusing;
    /** @type {?} */
    FabDialogComponent.prototype.forceFocusInsideTrap;
    /** @type {?} */
    FabDialogComponent.prototype.firstFocusableSelector;
    /** @type {?} */
    FabDialogComponent.prototype.closeButtonAriaLabel;
    /** @type {?} */
    FabDialogComponent.prototype.isClickableOutsideFocusTrap;
    /** @type {?} */
    FabDialogComponent.prototype.componentRef;
    /** @type {?} */
    FabDialogComponent.prototype.styles;
    /** @type {?} */
    FabDialogComponent.prototype.theme;
    /** @type {?} */
    FabDialogComponent.prototype.dialogContentProps;
    /** @type {?} */
    FabDialogComponent.prototype.hidden;
    /** @type {?} */
    FabDialogComponent.prototype.modalProps;
    /** @type {?} */
    FabDialogComponent.prototype.minWidth;
    /** @type {?} */
    FabDialogComponent.prototype.maxWidth;
    /** @type {?} */
    FabDialogComponent.prototype.onDismiss;
}
var FabDialogFooterComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabDialogFooterComponent, _super);
    function FabDialogFooterComponent(elementRef, changeDetectorRef, renderer) {
        return _super.call(this, elementRef, changeDetectorRef, renderer) || this;
    }
    FabDialogFooterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-dialog-footer',
                    exportAs: 'fabDialogFooter',
                    template: "\n    <DialogFooter #reactNode [componentRef]=\"componentRef\" [styles]=\"styles\" [theme]=\"theme\" [className]=\"className\">\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </DialogFooter>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabDialogFooterComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    FabDialogFooterComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
        componentRef: [{ type: Input }],
        styles: [{ type: Input }],
        theme: [{ type: Input }],
        className: [{ type: Input }]
    };
    return FabDialogFooterComponent;
}(ReactWrapperComponent));
export { FabDialogFooterComponent };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabDialogFooterComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabDialogFooterComponent.prototype.componentRef;
    /** @type {?} */
    FabDialogFooterComponent.prototype.styles;
    /** @type {?} */
    FabDialogFooterComponent.prototype.theme;
    /** @type {?} */
    FabDialogFooterComponent.prototype.className;
}
var FabDialogContentComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabDialogContentComponent, _super);
    function FabDialogContentComponent(elementRef, changeDetectorRef, renderer) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer) || this;
        _this.onDismiss = new EventEmitter();
        return _this;
    }
    FabDialogContentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-dialog-content',
                    exportAs: 'fabDialogContent',
                    template: "\n    <DialogContent\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [isMultiline]=\"isMultiline\"\n      [showCloseButton]=\"showCloseButton\"\n      [topButtonsProps]=\"topButtonsProps\"\n      [className]=\"className\"\n      [subTextId]=\"subTextId\"\n      [subText]=\"subText\"\n      [titleId]=\"titleId\"\n      [title]=\"title\"\n      [responsiveMode]=\"responsiveMode\"\n      [closeButtonAriaLabel]=\"closeButtonAriaLabel\"\n      [type]=\"type\"\n      [draggableHeaderClassName]=\"draggableHeaderClassName\"\n      (onDismiss)=\"onDismiss.emit($event && $event.nativeEvent)\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </DialogContent>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabDialogContentComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    FabDialogContentComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
        componentRef: [{ type: Input }],
        styles: [{ type: Input }],
        theme: [{ type: Input }],
        isMultiline: [{ type: Input }],
        showCloseButton: [{ type: Input }],
        topButtonsProps: [{ type: Input }],
        className: [{ type: Input }],
        subTextId: [{ type: Input }],
        subText: [{ type: Input }],
        titleId: [{ type: Input }],
        title: [{ type: Input }],
        responsiveMode: [{ type: Input }],
        closeButtonAriaLabel: [{ type: Input }],
        type: [{ type: Input }],
        draggableHeaderClassName: [{ type: Input }],
        onDismiss: [{ type: Output }]
    };
    return FabDialogContentComponent;
}(ReactWrapperComponent));
export { FabDialogContentComponent };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabDialogContentComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabDialogContentComponent.prototype.componentRef;
    /** @type {?} */
    FabDialogContentComponent.prototype.styles;
    /** @type {?} */
    FabDialogContentComponent.prototype.theme;
    /** @type {?} */
    FabDialogContentComponent.prototype.isMultiline;
    /** @type {?} */
    FabDialogContentComponent.prototype.showCloseButton;
    /** @type {?} */
    FabDialogContentComponent.prototype.topButtonsProps;
    /** @type {?} */
    FabDialogContentComponent.prototype.className;
    /** @type {?} */
    FabDialogContentComponent.prototype.subTextId;
    /** @type {?} */
    FabDialogContentComponent.prototype.subText;
    /** @type {?} */
    FabDialogContentComponent.prototype.titleId;
    /** @type {?} */
    FabDialogContentComponent.prototype.title;
    /** @type {?} */
    FabDialogContentComponent.prototype.responsiveMode;
    /** @type {?} */
    FabDialogContentComponent.prototype.closeButtonAriaLabel;
    /** @type {?} */
    FabDialogContentComponent.prototype.type;
    /** @type {?} */
    FabDialogContentComponent.prototype.draggableHeaderClassName;
    /** @type {?} */
    FabDialogContentComponent.prototype.onDismiss;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM1RCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFHdkI7SUE4QndDLDhDQUFtQztJQXFCekUsNEJBQVksVUFBc0IsRUFBRSxpQkFBb0MsRUFBRSxRQUFtQjtRQUE3RixZQUNFLGtCQUFNLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLENBQUMsU0FHL0M7UUFOa0IsZUFBUyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFLNUQsS0FBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUM7O0lBQzNELENBQUM7Ozs7O0lBRUQsNkNBQWdCOzs7O0lBQWhCLFVBQWlCLEVBQXVDO1FBQ3RELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7Z0JBM0RGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFFBQVEsRUFBRSxrMkJBdUJUO29CQUVELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzZCQUR0QyxnQkFBZ0I7aUJBRTFCOzs7O2dCQXRDQyxVQUFVO2dCQUZWLGlCQUFpQjtnQkFNakIsU0FBUzs7OytCQW9DUixTQUFTLFNBQUMs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QXNEOztJQUN0RCw0Q0FBa0Q7O0lBQ2xELDRDQUFrRDs7SUFDbEQsMENBQThDOztJQUM5QyxtREFBZ0U7O0lBQ2hFLHlEQUE0RTs7SUFDNUUseUNBQTRDOztJQUM1Qyw2REFBb0Y7O0lBRXBGLDhDQUE4RCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyBSZWFjdFdyYXBwZXJDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9jb3JlJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3Q2hpbGQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElEaWFsb2dDb250ZW50UHJvcHMsIElEaWFsb2dGb290ZXJQcm9wcywgSURpYWxvZ1Byb3BzIH0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvRGlhbG9nJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZmFiLWRpYWxvZycsXHJcbiAgZXhwb3J0QXM6ICdmYWJEaWFsb2cnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8IS0tIHByZXR0aWVyLWlnbm9yZSAtLT5cclxuICAgIDxEaWFsb2dcclxuICAgICAgI3JlYWN0Tm9kZVxyXG4gICAgICBbcmVzcG9uc2l2ZU1vZGVdPVwicmVzcG9uc2l2ZU1vZGVcIlxyXG4gICAgICBbZWxlbWVudFRvRm9jdXNPbkRpc21pc3NdPVwiZWxlbWVudFRvRm9jdXNPbkRpc21pc3NcIlxyXG4gICAgICBbaWdub3JlRXh0ZXJuYWxGb2N1c2luZ109XCJpZ25vcmVFeHRlcm5hbEZvY3VzaW5nXCJcclxuICAgICAgW2ZvcmNlRm9jdXNJbnNpZGVUcmFwXT1cImZvcmNlRm9jdXNJbnNpZGVUcmFwXCJcclxuICAgICAgW2ZpcnN0Rm9jdXNhYmxlU2VsZWN0b3JdPVwiZmlyc3RGb2N1c2FibGVTZWxlY3RvclwiXHJcbiAgICAgIFtjbG9zZUJ1dHRvbkFyaWFMYWJlbF09XCJjbG9zZUJ1dHRvbkFyaWFMYWJlbFwiXHJcbiAgICAgIFtpc0NsaWNrYWJsZU91dHNpZGVGb2N1c1RyYXBdPVwiaXNDbGlja2FibGVPdXRzaWRlRm9jdXNUcmFwXCJcclxuICAgICAgW2NvbXBvbmVudFJlZl09XCJjb21wb25lbnRSZWZcIlxyXG4gICAgICBbc3R5bGVzXT1cInN0eWxlc1wiXHJcbiAgICAgIFt0aGVtZV09XCJ0aGVtZVwiXHJcbiAgICAgIFtkaWFsb2dDb250ZW50UHJvcHNdPVwiZGlhbG9nQ29udGVudFByb3BzXCJcclxuICAgICAgW2hpZGRlbl09XCJoaWRkZW5cIlxyXG4gICAgICBbbW9kYWxQcm9wc109XCJtb2RhbFByb3BzXCJcclxuICAgICAgW21pbldpZHRoXT1cIm1pbldpZHRoXCJcclxuICAgICAgW21heFdpZHRoXT1cIm1heFdpZHRoXCJcclxuICAgICAgKG9uRGlzbWlzcyk9XCJvbkRpc21pc3NIYW5kbGVyKCRldmVudClcIlxyXG4gICAgPlxyXG4gICAgICA8UmVhY3RDb250ZW50PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L1JlYWN0Q29udGVudD5cclxuICAgIDwvRGlhbG9nPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbJ3JlYWN0LXJlbmRlcmVyJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYWJEaWFsb2dDb21wb25lbnQgZXh0ZW5kcyBSZWFjdFdyYXBwZXJDb21wb25lbnQ8SURpYWxvZ1Byb3BzPiB7XHJcbiAgQFZpZXdDaGlsZCgncmVhY3ROb2RlJywgeyBzdGF0aWM6IHRydWUgfSkgcHJvdGVjdGVkIHJlYWN0Tm9kZVJlZjogRWxlbWVudFJlZjtcclxuXHJcbiAgQElucHV0KCkgcmVzcG9uc2l2ZU1vZGU/OiBJRGlhbG9nUHJvcHNbJ3Jlc3BvbnNpdmVNb2RlJ107XHJcbiAgQElucHV0KCkgZWxlbWVudFRvRm9jdXNPbkRpc21pc3M/OiBJRGlhbG9nUHJvcHNbJ2VsZW1lbnRUb0ZvY3VzT25EaXNtaXNzJ107XHJcbiAgQElucHV0KCkgaWdub3JlRXh0ZXJuYWxGb2N1c2luZz86IElEaWFsb2dQcm9wc1snaWdub3JlRXh0ZXJuYWxGb2N1c2luZyddO1xyXG4gIEBJbnB1dCgpIGZvcmNlRm9jdXNJbnNpZGVUcmFwPzogSURpYWxvZ1Byb3BzWydmb3JjZUZvY3VzSW5zaWRlVHJhcCddO1xyXG4gIEBJbnB1dCgpIGZpcnN0Rm9jdXNhYmxlU2VsZWN0b3I/OiBJRGlhbG9nUHJvcHNbJ2ZpcnN0Rm9jdXNhYmxlU2VsZWN0b3InXTtcclxuICBASW5wdXQoKSBjbG9zZUJ1dHRvbkFyaWFMYWJlbD86IElEaWFsb2dQcm9wc1snY2xvc2VCdXR0b25BcmlhTGFiZWwnXTtcclxuICBASW5wdXQoKSBpc0NsaWNrYWJsZU91dHNpZGVGb2N1c1RyYXA/OiBJRGlhbG9nUHJvcHNbJ2lzQ2xpY2thYmxlT3V0c2lkZUZvY3VzVHJhcCddO1xyXG4gIEBJbnB1dCgpIGNvbXBvbmVudFJlZj86IElEaWFsb2dQcm9wc1snY29tcG9uZW50UmVmJ107XHJcbiAgQElucHV0KCkgc3R5bGVzPzogSURpYWxvZ1Byb3BzWydzdHlsZXMnXTtcclxuICBASW5wdXQoKSB0aGVtZT86IElEaWFsb2dQcm9wc1sndGhlbWUnXTtcclxuICBASW5wdXQoKSBkaWFsb2dDb250ZW50UHJvcHM/OiBJRGlhbG9nUHJvcHNbJ2RpYWxvZ0NvbnRlbnRQcm9wcyddO1xyXG4gIEBJbnB1dCgpIGhpZGRlbj86IElEaWFsb2dQcm9wc1snaGlkZGVuJ107XHJcbiAgQElucHV0KCkgbW9kYWxQcm9wcz86IElEaWFsb2dQcm9wc1snbW9kYWxQcm9wcyddO1xyXG4gIEBJbnB1dCgpIG1pbldpZHRoPzogSURpYWxvZ1Byb3BzWydtaW5XaWR0aCddO1xyXG4gIEBJbnB1dCgpIG1heFdpZHRoPzogSURpYWxvZ1Byb3BzWydtYXhXaWR0aCddO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25EaXNtaXNzID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcik7XHJcblxyXG4gICAgdGhpcy5vbkRpc21pc3NIYW5kbGVyID0gdGhpcy5vbkRpc21pc3NIYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBvbkRpc21pc3NIYW5kbGVyKGV2OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50Pikge1xyXG4gICAgdGhpcy5vbkRpc21pc3MuZW1pdChldiAmJiBldi5uYXRpdmVFdmVudCk7XHJcbiAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZhYi1kaWFsb2ctZm9vdGVyJyxcclxuICBleHBvcnRBczogJ2ZhYkRpYWxvZ0Zvb3RlcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxEaWFsb2dGb290ZXIgI3JlYWN0Tm9kZSBbY29tcG9uZW50UmVmXT1cImNvbXBvbmVudFJlZlwiIFtzdHlsZXNdPVwic3R5bGVzXCIgW3RoZW1lXT1cInRoZW1lXCIgW2NsYXNzTmFtZV09XCJjbGFzc05hbWVcIj5cclxuICAgICAgPFJlYWN0Q29udGVudD48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9SZWFjdENvbnRlbnQ+XHJcbiAgICA8L0RpYWxvZ0Zvb3Rlcj5cclxuICBgLFxyXG4gIHN0eWxlczogWydyZWFjdC1yZW5kZXJlciddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmFiRGlhbG9nRm9vdGVyQ29tcG9uZW50IGV4dGVuZHMgUmVhY3RXcmFwcGVyQ29tcG9uZW50PElEaWFsb2dGb290ZXJQcm9wcz4ge1xyXG4gIEBWaWV3Q2hpbGQoJ3JlYWN0Tm9kZScsIHsgc3RhdGljOiB0cnVlIH0pIHByb3RlY3RlZCByZWFjdE5vZGVSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBJbnB1dCgpIGNvbXBvbmVudFJlZj86IElEaWFsb2dGb290ZXJQcm9wc1snY29tcG9uZW50UmVmJ107XHJcbiAgQElucHV0KCkgc3R5bGVzPzogSURpYWxvZ0Zvb3RlclByb3BzWydzdHlsZXMnXTtcclxuICBASW5wdXQoKSB0aGVtZT86IElEaWFsb2dGb290ZXJQcm9wc1sndGhlbWUnXTtcclxuICBASW5wdXQoKSBjbGFzc05hbWU/OiBJRGlhbG9nRm9vdGVyUHJvcHNbJ2NsYXNzTmFtZSddO1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcik7XHJcbiAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZhYi1kaWFsb2ctY29udGVudCcsXHJcbiAgZXhwb3J0QXM6ICdmYWJEaWFsb2dDb250ZW50JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPERpYWxvZ0NvbnRlbnRcclxuICAgICAgI3JlYWN0Tm9kZVxyXG4gICAgICBbY29tcG9uZW50UmVmXT1cImNvbXBvbmVudFJlZlwiXHJcbiAgICAgIFtzdHlsZXNdPVwic3R5bGVzXCJcclxuICAgICAgW3RoZW1lXT1cInRoZW1lXCJcclxuICAgICAgW2lzTXVsdGlsaW5lXT1cImlzTXVsdGlsaW5lXCJcclxuICAgICAgW3Nob3dDbG9zZUJ1dHRvbl09XCJzaG93Q2xvc2VCdXR0b25cIlxyXG4gICAgICBbdG9wQnV0dG9uc1Byb3BzXT1cInRvcEJ1dHRvbnNQcm9wc1wiXHJcbiAgICAgIFtjbGFzc05hbWVdPVwiY2xhc3NOYW1lXCJcclxuICAgICAgW3N1YlRleHRJZF09XCJzdWJUZXh0SWRcIlxyXG4gICAgICBbc3ViVGV4dF09XCJzdWJUZXh0XCJcclxuICAgICAgW3RpdGxlSWRdPVwidGl0bGVJZFwiXHJcbiAgICAgIFt0aXRsZV09XCJ0aXRsZVwiXHJcbiAgICAgIFtyZXNwb25zaXZlTW9kZV09XCJyZXNwb25zaXZlTW9kZVwiXHJcbiAgICAgIFtjbG9zZUJ1dHRvbkFyaWFMYWJlbF09XCJjbG9zZUJ1dHRvbkFyaWFMYWJlbFwiXHJcbiAgICAgIFt0eXBlXT1cInR5cGVcIlxyXG4gICAgICBbZHJhZ2dhYmxlSGVhZGVyQ2xhc3NOYW1lXT1cImRyYWdnYWJsZUhlYWRlckNsYXNzTmFtZVwiXHJcbiAgICAgIChvbkRpc21pc3MpPVwib25EaXNtaXNzLmVtaXQoJGV2ZW50ICYmICRldmVudC5uYXRpdmVFdmVudClcIlxyXG4gICAgPlxyXG4gICAgICA8UmVhY3RDb250ZW50PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L1JlYWN0Q29udGVudD5cclxuICAgIDwvRGlhbG9nQ29udGVudD5cclxuICBgLFxyXG4gIHN0eWxlczogWydyZWFjdC1yZW5kZXJlciddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmFiRGlhbG9nQ29udGVudENvbXBvbmVudCBleHRlbmRzIFJlYWN0V3JhcHBlckNvbXBvbmVudDxJRGlhbG9nQ29udGVudFByb3BzPiB7XHJcbiAgQFZpZXdDaGlsZCgncmVhY3ROb2RlJywgeyBzdGF0aWM6IHRydWUgfSkgcHJvdGVjdGVkIHJlYWN0Tm9kZVJlZjogRWxlbWVudFJlZjtcclxuXHJcbiAgQElucHV0KCkgY29tcG9uZW50UmVmPzogSURpYWxvZ0NvbnRlbnRQcm9wc1snY29tcG9uZW50UmVmJ107XHJcbiAgQElucHV0KCkgc3R5bGVzPzogSURpYWxvZ0NvbnRlbnRQcm9wc1snc3R5bGVzJ107XHJcbiAgQElucHV0KCkgdGhlbWU/OiBJRGlhbG9nQ29udGVudFByb3BzWyd0aGVtZSddO1xyXG4gIEBJbnB1dCgpIGlzTXVsdGlsaW5lPzogSURpYWxvZ0NvbnRlbnRQcm9wc1snaXNNdWx0aWxpbmUnXTtcclxuICBASW5wdXQoKSBzaG93Q2xvc2VCdXR0b24/OiBJRGlhbG9nQ29udGVudFByb3BzWydzaG93Q2xvc2VCdXR0b24nXTtcclxuICBASW5wdXQoKSB0b3BCdXR0b25zUHJvcHM/OiBJRGlhbG9nQ29udGVudFByb3BzWyd0b3BCdXR0b25zUHJvcHMnXTtcclxuICBASW5wdXQoKSBjbGFzc05hbWU/OiBJRGlhbG9nQ29udGVudFByb3BzWydjbGFzc05hbWUnXTtcclxuICBASW5wdXQoKSBzdWJUZXh0SWQ/OiBJRGlhbG9nQ29udGVudFByb3BzWydzdWJUZXh0SWQnXTtcclxuICBASW5wdXQoKSBzdWJUZXh0PzogSURpYWxvZ0NvbnRlbnRQcm9wc1snc3ViVGV4dCddO1xyXG4gIEBJbnB1dCgpIHRpdGxlSWQ/OiBJRGlhbG9nQ29udGVudFByb3BzWyd0aXRsZUlkJ107XHJcbiAgQElucHV0KCkgdGl0bGU/OiBJRGlhbG9nQ29udGVudFByb3BzWyd0aXRsZSddO1xyXG4gIEBJbnB1dCgpIHJlc3BvbnNpdmVNb2RlPzogSURpYWxvZ0NvbnRlbnRQcm9wc1sncmVzcG9uc2l2ZU1vZGUnXTtcclxuICBASW5wdXQoKSBjbG9zZUJ1dHRvbkFyaWFMYWJlbD86IElEaWFsb2dDb250ZW50UHJvcHNbJ2Nsb3NlQnV0dG9uQXJpYUxhYmVsJ107XHJcbiAgQElucHV0KCkgdHlwZT86IElEaWFsb2dDb250ZW50UHJvcHNbJ3R5cGUnXTtcclxuICBASW5wdXQoKSBkcmFnZ2FibGVIZWFkZXJDbGFzc05hbWU/OiBJRGlhbG9nQ29udGVudFByb3BzWydkcmFnZ2FibGVIZWFkZXJDbGFzc05hbWUnXTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uRGlzbWlzcyA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcbiAgICBzdXBlcihlbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXIpO1xyXG4gIH1cclxufVxyXG4iXX0=