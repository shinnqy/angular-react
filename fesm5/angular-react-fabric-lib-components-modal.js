import { __extends } from 'tslib';
import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { EventEmitter, Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, ViewChild, Input, Output, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Modal } from 'office-ui-fabric-react/lib/Modal';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabModalComponent = /** @class */ (function (_super) {
    __extends(FabModalComponent, _super);
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var components = [FabModalComponent];
var FabModalModule = /** @class */ (function () {
    function FabModalModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Modal', (/**
         * @return {?}
         */
        function () { return Modal; }));
    }
    FabModalModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: components,
                    exports: components,
                    schemas: [NO_ERRORS_SCHEMA],
                },] }
    ];
    /** @nocollapse */
    FabModalModule.ctorParameters = function () { return []; };
    return FabModalModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FabModalComponent, FabModalModule };
//# sourceMappingURL=angular-react-fabric-lib-components-modal.js.map
