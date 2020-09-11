import { __extends } from 'tslib';
import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { EventEmitter, Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, ViewChild, Input, Output, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Callout, FocusTrapCallout } from 'office-ui-fabric-react/lib/Callout';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabCalloutComponent = /** @class */ (function (_super) {
    __extends(FabCalloutComponent, _super);
    function FabCalloutComponent(elementRef, changeDetectorRef, renderer) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer) || this;
        _this.onLayerMounted = new EventEmitter();
        _this.onPositioned = new EventEmitter();
        _this.onDismiss = new EventEmitter();
        _this.onScroll = new EventEmitter();
        return _this;
    }
    FabCalloutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-callout',
                    exportAs: 'fabCallout',
                    template: "\n    <Callout\n      #reactNode\n      [target]=\"target\"\n      [directionalHint]=\"directionalHint\"\n      [directionalHintForRTL]=\"directionalHintForRTL\"\n      [gapSpace]=\"gapSpace\"\n      [beakWidth]=\"beakWidth\"\n      [calloutWidth]=\"calloutWidth\"\n      [backgroundColor]=\"backgroundColor\"\n      [bounds]=\"bounds\"\n      [minPagePadding]=\"minPagePadding\"\n      [isBeakVisible]=\"isBeakVisible\"\n      [preventDismissOnScroll]=\"preventDismissOnScroll\"\n      [preventDismissOnResize]=\"preventDismissOnResize\"\n      [preventDismissOnLostFocus]=\"preventDismissOnLostFocus\"\n      [coverTarget]=\"coverTarget\"\n      [alignTargetEdge]=\"alignTargetEdge\"\n      [role]=\"role\"\n      [ariaLabel]=\"ariaLabel\"\n      [ariaLabelledBy]=\"ariaLabelledBy\"\n      [ariaDescribedBy]=\"ariaDescribedBy\"\n      [className]=\"className\"\n      [layerProps]=\"layerProps\"\n      [doNotLayer]=\"doNotLayer\"\n      [directionalHintFixed]=\"directionalHintFixed\"\n      [finalHeight]=\"finalHeight\"\n      [hideOverflow]=\"hideOverflow\"\n      [setInitialFocus]=\"setInitialFocus\"\n      [calloutMaxHeight]=\"calloutMaxHeight\"\n      [theme]=\"theme\"\n      [styles]=\"styles\"\n      [hidden]=\"hidden\"\n      [shouldRestoreFocus]=\"shouldRestoreFocus\"\n      (onLayerMounted)=\"onLayerMounted.emit()\"\n      (onPositioned)=\"onPositioned.emit($event)\"\n      (onDismiss)=\"onDismiss.emit($event)\"\n      (onScroll)=\"onScroll.emit()\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </Callout>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabCalloutComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    FabCalloutComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
        target: [{ type: Input }],
        directionalHint: [{ type: Input }],
        directionalHintForRTL: [{ type: Input }],
        gapSpace: [{ type: Input }],
        beakWidth: [{ type: Input }],
        calloutWidth: [{ type: Input }],
        backgroundColor: [{ type: Input }],
        bounds: [{ type: Input }],
        minPagePadding: [{ type: Input }],
        isBeakVisible: [{ type: Input }],
        preventDismissOnScroll: [{ type: Input }],
        preventDismissOnResize: [{ type: Input }],
        preventDismissOnLostFocus: [{ type: Input }],
        coverTarget: [{ type: Input }],
        alignTargetEdge: [{ type: Input }],
        role: [{ type: Input }],
        ariaLabel: [{ type: Input }],
        ariaLabelledBy: [{ type: Input }],
        ariaDescribedBy: [{ type: Input }],
        className: [{ type: Input }],
        layerProps: [{ type: Input }],
        doNotLayer: [{ type: Input }],
        directionalHintFixed: [{ type: Input }],
        finalHeight: [{ type: Input }],
        hideOverflow: [{ type: Input }],
        setInitialFocus: [{ type: Input }],
        calloutMaxHeight: [{ type: Input }],
        theme: [{ type: Input }],
        styles: [{ type: Input }],
        hidden: [{ type: Input }],
        shouldRestoreFocus: [{ type: Input }],
        onLayerMounted: [{ type: Output }],
        onPositioned: [{ type: Output }],
        onDismiss: [{ type: Output }],
        onScroll: [{ type: Output }]
    };
    return FabCalloutComponent;
}(ReactWrapperComponent));
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabCalloutComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabCalloutComponent.prototype.target;
    /** @type {?} */
    FabCalloutComponent.prototype.directionalHint;
    /** @type {?} */
    FabCalloutComponent.prototype.directionalHintForRTL;
    /** @type {?} */
    FabCalloutComponent.prototype.gapSpace;
    /** @type {?} */
    FabCalloutComponent.prototype.beakWidth;
    /** @type {?} */
    FabCalloutComponent.prototype.calloutWidth;
    /** @type {?} */
    FabCalloutComponent.prototype.backgroundColor;
    /** @type {?} */
    FabCalloutComponent.prototype.bounds;
    /** @type {?} */
    FabCalloutComponent.prototype.minPagePadding;
    /** @type {?} */
    FabCalloutComponent.prototype.isBeakVisible;
    /** @type {?} */
    FabCalloutComponent.prototype.preventDismissOnScroll;
    /** @type {?} */
    FabCalloutComponent.prototype.preventDismissOnResize;
    /** @type {?} */
    FabCalloutComponent.prototype.preventDismissOnLostFocus;
    /** @type {?} */
    FabCalloutComponent.prototype.coverTarget;
    /** @type {?} */
    FabCalloutComponent.prototype.alignTargetEdge;
    /** @type {?} */
    FabCalloutComponent.prototype.role;
    /** @type {?} */
    FabCalloutComponent.prototype.ariaLabel;
    /** @type {?} */
    FabCalloutComponent.prototype.ariaLabelledBy;
    /** @type {?} */
    FabCalloutComponent.prototype.ariaDescribedBy;
    /** @type {?} */
    FabCalloutComponent.prototype.className;
    /** @type {?} */
    FabCalloutComponent.prototype.layerProps;
    /** @type {?} */
    FabCalloutComponent.prototype.doNotLayer;
    /** @type {?} */
    FabCalloutComponent.prototype.directionalHintFixed;
    /** @type {?} */
    FabCalloutComponent.prototype.finalHeight;
    /** @type {?} */
    FabCalloutComponent.prototype.hideOverflow;
    /** @type {?} */
    FabCalloutComponent.prototype.setInitialFocus;
    /** @type {?} */
    FabCalloutComponent.prototype.calloutMaxHeight;
    /** @type {?} */
    FabCalloutComponent.prototype.theme;
    /** @type {?} */
    FabCalloutComponent.prototype.styles;
    /** @type {?} */
    FabCalloutComponent.prototype.hidden;
    /** @type {?} */
    FabCalloutComponent.prototype.shouldRestoreFocus;
    /** @type {?} */
    FabCalloutComponent.prototype.onLayerMounted;
    /** @type {?} */
    FabCalloutComponent.prototype.onPositioned;
    /** @type {?} */
    FabCalloutComponent.prototype.onDismiss;
    /** @type {?} */
    FabCalloutComponent.prototype.onScroll;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var components = [FabCalloutComponent];
var FabCalloutModule = /** @class */ (function () {
    function FabCalloutModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Callout', (/**
         * @return {?}
         */
        function () { return Callout; }));
        registerElement('FocusTrapCallout', (/**
         * @return {?}
         */
        function () { return FocusTrapCallout; }));
    }
    FabCalloutModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: components,
                    exports: components,
                    schemas: [NO_ERRORS_SCHEMA],
                },] }
    ];
    /** @nocollapse */
    FabCalloutModule.ctorParameters = function () { return []; };
    return FabCalloutModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FabCalloutComponent, FabCalloutModule };
//# sourceMappingURL=angular-react-fabric-lib-components-callout.js.map
