import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { Nav } from 'office-ui-fabric-react/lib/Nav';
import { EventEmitter, Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, ViewChild, Input, Output, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { __extends } from 'tslib';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabNavComponent = /** @class */ (function (_super) {
    __extends(FabNavComponent, _super);
    function FabNavComponent(elementRef, changeDetectorRef, renderer) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer) || this;
        _this.onLinkClick = new EventEmitter();
        _this.onLinkExpandClick = new EventEmitter();
        _this.onLinkClickHandler = _this.onLinkClickHandler.bind(_this);
        _this.onLinkExpandClickHandler = _this.onLinkExpandClickHandler.bind(_this);
        return _this;
    }
    /**
     * @param {?} event
     * @param {?=} link
     * @return {?}
     */
    FabNavComponent.prototype.onLinkClickHandler = /**
     * @param {?} event
     * @param {?=} link
     * @return {?}
     */
    function (event, link) {
        this.onLinkClick.emit({
            event: event.nativeEvent,
            link: link
        });
    };
    /**
     * @param {?} event
     * @param {?=} link
     * @return {?}
     */
    FabNavComponent.prototype.onLinkExpandClickHandler = /**
     * @param {?} event
     * @param {?=} link
     * @return {?}
     */
    function (event, link) {
        this.onLinkExpandClick.emit({
            event: event.nativeEvent,
            link: link
        });
    };
    FabNavComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-nav',
                    exportAs: 'fabNav',
                    template: "\n    <Nav\n      #reactNode\n      [groups]=\"groups\"\n      [LinkClick]=\"onLinkClickHandler\"\n      [selectedKey]=\"selectedKey\"\n      [expandButtonAriaLabel]=\"expandButtonAriaLabel\"\n      [LinkExpandClick]=\"onLinkExpandClickHandler\"\n      [isOnTop]=\"isOnTop\"\n      [initialSelectedKey]=\"initialSelectedKey\"\n      [ariaLabel]=\"ariaLabel\"\n      [selectedAriaLabel]=\"selectedAriaLabel\"\n    >\n    </Nav>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabNavComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    FabNavComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
        componentRef: [{ type: Input }],
        groups: [{ type: Input }],
        selectedKey: [{ type: Input }],
        isOnTop: [{ type: Input }],
        initialSelectedKey: [{ type: Input }],
        ariaLabel: [{ type: Input }],
        expandButtonAriaLabel: [{ type: Input }],
        selectedAriaLabel: [{ type: Input }],
        onLinkClick: [{ type: Output }],
        onLinkExpandClick: [{ type: Output }]
    };
    return FabNavComponent;
}(ReactWrapperComponent));
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabNavComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabNavComponent.prototype.componentRef;
    /** @type {?} */
    FabNavComponent.prototype.groups;
    /** @type {?} */
    FabNavComponent.prototype.selectedKey;
    /** @type {?} */
    FabNavComponent.prototype.isOnTop;
    /** @type {?} */
    FabNavComponent.prototype.initialSelectedKey;
    /** @type {?} */
    FabNavComponent.prototype.ariaLabel;
    /** @type {?} */
    FabNavComponent.prototype.expandButtonAriaLabel;
    /** @type {?} */
    FabNavComponent.prototype.selectedAriaLabel;
    /** @type {?} */
    FabNavComponent.prototype.onLinkClick;
    /** @type {?} */
    FabNavComponent.prototype.onLinkExpandClick;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabNavModule = /** @class */ (function () {
    function FabNavModule() {
        registerElement('Nav', (/**
         * @return {?}
         */
        function () { return Nav; }));
    }
    FabNavModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [FabNavComponent],
                    exports: [FabNavComponent],
                    schemas: [NO_ERRORS_SCHEMA]
                },] }
    ];
    /** @nocollapse */
    FabNavModule.ctorParameters = function () { return []; };
    return FabNavModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FabNavComponent, FabNavModule };
//# sourceMappingURL=angular-react-fabric-lib-components-nav.js.map
