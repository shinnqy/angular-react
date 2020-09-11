import { __extends } from 'tslib';
import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { EventEmitter, Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, NgZone, ViewChild, Input, Output, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageBar } from 'office-ui-fabric-react/lib/MessageBar';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabMessageBarComponent = /** @class */ (function (_super) {
    __extends(FabMessageBarComponent, _super);
    function FabMessageBarComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone }) || this;
        // Non-React prop, used together with onDismiss to allow it to be an Output EventEmitter.
        _this.dismissable = null;
        _this.onDismiss = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    FabMessageBarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var onRenderActions = this.createRenderPropHandler(this.renderActions);
        this.actions = onRenderActions();
    };
    Object.defineProperty(FabMessageBarComponent.prototype, "onDismissInternal", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (!this.dismissable) {
                return null;
            }
            return (/**
             * @param {?} ev
             * @return {?}
             */
            function (ev) {
                _this.onDismiss.emit(ev && ev.nativeEvent);
            });
        },
        enumerable: true,
        configurable: true
    });
    FabMessageBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-message-bar',
                    exportAs: 'fabMessageBar',
                    template: "\n    <MessageBar\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [messageBarType]=\"messageBarType\"\n      [isMultiline]=\"isMultiline\"\n      [dismissButtonAriaLabel]=\"dismissButtonAriaLabel\"\n      [truncated]=\"truncated\"\n      [overflowButtonAriaLabel]=\"overflowButtonAriaLabel\"\n      [className]=\"className\"\n      [theme]=\"theme\"\n      [styles]=\"styles\"\n      [Dismiss]=\"onDismissInternal\"\n      [actions]=\"renderActions && actions\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </MessageBar>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabMessageBarComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    FabMessageBarComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
        componentRef: [{ type: Input }],
        messageBarType: [{ type: Input }],
        isMultiline: [{ type: Input }],
        dismissButtonAriaLabel: [{ type: Input }],
        truncated: [{ type: Input }],
        overflowButtonAriaLabel: [{ type: Input }],
        className: [{ type: Input }],
        theme: [{ type: Input }],
        styles: [{ type: Input }],
        renderActions: [{ type: Input }],
        dismissable: [{ type: Input }],
        onDismiss: [{ type: Output }]
    };
    return FabMessageBarComponent;
}(ReactWrapperComponent));
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabMessageBarComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabMessageBarComponent.prototype.componentRef;
    /** @type {?} */
    FabMessageBarComponent.prototype.messageBarType;
    /** @type {?} */
    FabMessageBarComponent.prototype.isMultiline;
    /** @type {?} */
    FabMessageBarComponent.prototype.dismissButtonAriaLabel;
    /** @type {?} */
    FabMessageBarComponent.prototype.truncated;
    /** @type {?} */
    FabMessageBarComponent.prototype.overflowButtonAriaLabel;
    /** @type {?} */
    FabMessageBarComponent.prototype.className;
    /** @type {?} */
    FabMessageBarComponent.prototype.theme;
    /** @type {?} */
    FabMessageBarComponent.prototype.styles;
    /** @type {?} */
    FabMessageBarComponent.prototype.renderActions;
    /** @type {?} */
    FabMessageBarComponent.prototype.dismissable;
    /** @type {?} */
    FabMessageBarComponent.prototype.onDismiss;
    /** @type {?} */
    FabMessageBarComponent.prototype.actions;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var components = [FabMessageBarComponent];
var FabMessageBarModule = /** @class */ (function () {
    function FabMessageBarModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('MessageBar', (/**
         * @return {?}
         */
        function () { return MessageBar; }));
    }
    FabMessageBarModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: components,
                    exports: components,
                    schemas: [NO_ERRORS_SCHEMA],
                },] }
    ];
    /** @nocollapse */
    FabMessageBarModule.ctorParameters = function () { return []; };
    return FabMessageBarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FabMessageBarComponent, FabMessageBarModule };
//# sourceMappingURL=angular-react-fabric-lib-components-message-bar.js.map
