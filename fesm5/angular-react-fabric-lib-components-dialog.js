import { __extends } from 'tslib';
import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { EventEmitter, Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, ViewChild, Input, Output, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dialog, DialogContent, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabDialogComponent = /** @class */ (function (_super) {
    __extends(FabDialogComponent, _super);
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
    __extends(FabDialogFooterComponent, _super);
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
    __extends(FabDialogContentComponent, _super);
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var components = [FabDialogComponent, FabDialogContentComponent, FabDialogFooterComponent];
var FabDialogModule = /** @class */ (function () {
    function FabDialogModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Dialog', (/**
         * @return {?}
         */
        function () { return Dialog; }));
        registerElement('DialogContent', (/**
         * @return {?}
         */
        function () { return DialogContent; }));
        registerElement('DialogFooter', (/**
         * @return {?}
         */
        function () { return DialogFooter; }));
    }
    FabDialogModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: components,
                    exports: components,
                    schemas: [NO_ERRORS_SCHEMA],
                },] }
    ];
    /** @nocollapse */
    FabDialogModule.ctorParameters = function () { return []; };
    return FabDialogModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FabDialogComponent, FabDialogContentComponent, FabDialogFooterComponent, FabDialogModule };
//# sourceMappingURL=angular-react-fabric-lib-components-dialog.js.map
