import { __extends } from 'tslib';
import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { EventEmitter, Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, NgZone, ViewChild, Input, Output, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { omit } from 'angular-react-toolkit/utils/omit';
import { CommonModule } from '@angular/common';
import { ExpandingCard, HoverCard, PlainCard } from 'office-ui-fabric-react/lib/HoverCard';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabExpandingCardComponent = /** @class */ (function (_super) {
    __extends(FabExpandingCardComponent, _super);
    function FabExpandingCardComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone }) || this;
        _this.onEnter = new EventEmitter();
        _this.onLeave = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    FabExpandingCardComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onRenderCompactCard = this.createRenderPropHandler(this.renderCompactCard);
        this.onRenderExpandedCard = this.createRenderPropHandler(this.renderExpandedCard);
    };
    FabExpandingCardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-expanding-card',
                    exportAs: 'fabExpandingCard',
                    template: "\n    <ExpandingCard\n      [componentRef]=\"componentRef\"\n      [className]=\"className\"\n      [directionalHint]=\"directionalHint\"\n      [directionalHintFixed]=\"directionalHintFixed\"\n      [firstFocus]=\"firstFocus\"\n      [gapSpace]=\"gapSpace\"\n      [renderData]=\"renderData\"\n      [styles]=\"styles\"\n      [targetElement]=\"targetElement\"\n      [theme]=\"theme\"\n      [trapFocus]=\"trapFocus\"\n      [compactCardHeight]=\"compactCardHeight\"\n      [expandedCardHeight]=\"expandedCardHeight\"\n      [mode]=\"mode\"\n      [RenderCompactCard]=\"renderCompactCard && onRenderCompactCard\"\n      [RenderExpandedCard]=\"renderExpandedCard && onRenderExpandedCard\"\n      (onEnter)=\"onEnter.emit()\"\n      (onLeave)=\"onLeave.emit()\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </ExpandingCard>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabExpandingCardComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    FabExpandingCardComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: false },] }],
        componentRef: [{ type: Input }],
        className: [{ type: Input }],
        directionalHint: [{ type: Input }],
        directionalHintFixed: [{ type: Input }],
        firstFocus: [{ type: Input }],
        gapSpace: [{ type: Input }],
        renderData: [{ type: Input }],
        styles: [{ type: Input }],
        targetElement: [{ type: Input }],
        theme: [{ type: Input }],
        trapFocus: [{ type: Input }],
        compactCardHeight: [{ type: Input }],
        expandedCardHeight: [{ type: Input }],
        mode: [{ type: Input }],
        renderCompactCard: [{ type: Input }],
        renderExpandedCard: [{ type: Input }],
        onEnter: [{ type: Output }],
        onLeave: [{ type: Output }]
    };
    return FabExpandingCardComponent;
}(ReactWrapperComponent));
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabExpandingCardComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabExpandingCardComponent.prototype.componentRef;
    /** @type {?} */
    FabExpandingCardComponent.prototype.className;
    /** @type {?} */
    FabExpandingCardComponent.prototype.directionalHint;
    /** @type {?} */
    FabExpandingCardComponent.prototype.directionalHintFixed;
    /** @type {?} */
    FabExpandingCardComponent.prototype.firstFocus;
    /** @type {?} */
    FabExpandingCardComponent.prototype.gapSpace;
    /** @type {?} */
    FabExpandingCardComponent.prototype.renderData;
    /** @type {?} */
    FabExpandingCardComponent.prototype.styles;
    /** @type {?} */
    FabExpandingCardComponent.prototype.targetElement;
    /** @type {?} */
    FabExpandingCardComponent.prototype.theme;
    /** @type {?} */
    FabExpandingCardComponent.prototype.trapFocus;
    /** @type {?} */
    FabExpandingCardComponent.prototype.compactCardHeight;
    /** @type {?} */
    FabExpandingCardComponent.prototype.expandedCardHeight;
    /** @type {?} */
    FabExpandingCardComponent.prototype.mode;
    /** @type {?} */
    FabExpandingCardComponent.prototype.renderCompactCard;
    /** @type {?} */
    FabExpandingCardComponent.prototype.renderExpandedCard;
    /** @type {?} */
    FabExpandingCardComponent.prototype.onEnter;
    /** @type {?} */
    FabExpandingCardComponent.prototype.onLeave;
    /** @type {?} */
    FabExpandingCardComponent.prototype.onRenderCompactCard;
    /** @type {?} */
    FabExpandingCardComponent.prototype.onRenderExpandedCard;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabHoverCardComponent = /** @class */ (function (_super) {
    __extends(FabHoverCardComponent, _super);
    function FabHoverCardComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone }) || this;
        _this.onCardVisible = new EventEmitter();
        _this.onCardHide = new EventEmitter();
        _this.onCardExpand = new EventEmitter();
        return _this;
    }
    Object.defineProperty(FabHoverCardComponent.prototype, "expandingCardOptions", {
        get: /**
         * @return {?}
         */
        function () {
            return this._expandingCardOptions;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._expandingCardOptions = value;
            if (value) {
                this.transformedExpandingCardProps = this._transformExpandingCardOptionsToProps(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FabHoverCardComponent.prototype, "plainCardOptions", {
        get: /**
         * @return {?}
         */
        function () {
            return this._plainCardOptions;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._plainCardOptions = value;
            if (value) {
                this.transformedPlainCardProps = this._transformPlainCardOptionsToProps(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    FabHoverCardComponent.prototype._transformExpandingCardOptionsToProps = /**
     * @private
     * @param {?} options
     * @return {?}
     */
    function (options) {
        /** @type {?} */
        var sharedProperties = omit(options, 'renderCompactCard', 'renderExpandedCard');
        /** @type {?} */
        var compactCardRenderer = this.createInputJsxRenderer(options.renderCompactCard);
        /** @type {?} */
        var expandedCardRenderer = this.createInputJsxRenderer(options.renderExpandedCard);
        return Object.assign({}, sharedProperties, compactCardRenderer &&
            ((/** @type {?} */ ({ onRenderCompactCard: (/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) { return compactCardRenderer({ data: data }); }) }))), expandedCardRenderer &&
            ((/** @type {?} */ ({ onRenderExpandedCard: (/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) { return expandedCardRenderer({ data: data }); }) }))));
    };
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    FabHoverCardComponent.prototype._transformPlainCardOptionsToProps = /**
     * @private
     * @param {?} options
     * @return {?}
     */
    function (options) {
        /** @type {?} */
        var sharedProperties = omit(options, 'renderPlainCard');
        /** @type {?} */
        var plainCardRenderer = this.createInputJsxRenderer(options.renderPlainCard);
        return Object.assign({}, sharedProperties, plainCardRenderer &&
            ((/** @type {?} */ ({ onRenderPlainCard: (/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) { return plainCardRenderer({ data: data }); }) }))));
    };
    FabHoverCardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-hover-card',
                    exportAs: 'fabHoverCard',
                    template: "\n    <HoverCard\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [className]=\"className\"\n      [theme]=\"theme\"\n      [type]=\"type\"\n      [expandingCardProps]=\"transformedExpandingCardProps\"\n      [plainCardProps]=\"transformedPlainCardProps\"\n      [setAriaDescribedBy]=\"setAriaDescribedBy\"\n      [cardOpenDelay]=\"cardOpenDelay\"\n      [cardDismissDelay]=\"cardDismissDelay\"\n      [expandedCardOpenDelay]=\"expandedCardOpenDelay\"\n      [sticky]=\"sticky\"\n      [instantOpenOnClick]=\"instantOpenOnClick\"\n      [styles]=\"styles\"\n      [target]=\"target\"\n      [eventListenerTarget]=\"eventListenerTarget\"\n      [trapFocus]=\"trapFocus\"\n      [shouldBlockHoverCard]=\"shouldBlockHoverCard\"\n      [setInitialFocus]=\"setInitialFocus\"\n      [openHotKey]=\"openHotKey\"\n      (onCardVisible)=\"onCardVisible.emit()\"\n      (onCardHide)=\"onCardHide.emit()\"\n      (onCardExpand)=\"onCardExpand.emit()\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </HoverCard>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabHoverCardComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    FabHoverCardComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
        componentRef: [{ type: Input }],
        className: [{ type: Input }],
        theme: [{ type: Input }],
        type: [{ type: Input }],
        setAriaDescribedBy: [{ type: Input }],
        cardOpenDelay: [{ type: Input }],
        cardDismissDelay: [{ type: Input }],
        expandedCardOpenDelay: [{ type: Input }],
        sticky: [{ type: Input }],
        instantOpenOnClick: [{ type: Input }],
        styles: [{ type: Input }],
        target: [{ type: Input }],
        eventListenerTarget: [{ type: Input }],
        trapFocus: [{ type: Input }],
        shouldBlockHoverCard: [{ type: Input }],
        setInitialFocus: [{ type: Input }],
        openHotKey: [{ type: Input }],
        expandingCardOptions: [{ type: Input }],
        plainCardOptions: [{ type: Input }],
        onCardVisible: [{ type: Output }],
        onCardHide: [{ type: Output }],
        onCardExpand: [{ type: Output }]
    };
    return FabHoverCardComponent;
}(ReactWrapperComponent));
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabHoverCardComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabHoverCardComponent.prototype.componentRef;
    /** @type {?} */
    FabHoverCardComponent.prototype.className;
    /** @type {?} */
    FabHoverCardComponent.prototype.theme;
    /** @type {?} */
    FabHoverCardComponent.prototype.type;
    /** @type {?} */
    FabHoverCardComponent.prototype.setAriaDescribedBy;
    /** @type {?} */
    FabHoverCardComponent.prototype.cardOpenDelay;
    /** @type {?} */
    FabHoverCardComponent.prototype.cardDismissDelay;
    /** @type {?} */
    FabHoverCardComponent.prototype.expandedCardOpenDelay;
    /** @type {?} */
    FabHoverCardComponent.prototype.sticky;
    /** @type {?} */
    FabHoverCardComponent.prototype.instantOpenOnClick;
    /** @type {?} */
    FabHoverCardComponent.prototype.styles;
    /** @type {?} */
    FabHoverCardComponent.prototype.target;
    /** @type {?} */
    FabHoverCardComponent.prototype.eventListenerTarget;
    /** @type {?} */
    FabHoverCardComponent.prototype.trapFocus;
    /** @type {?} */
    FabHoverCardComponent.prototype.shouldBlockHoverCard;
    /** @type {?} */
    FabHoverCardComponent.prototype.setInitialFocus;
    /** @type {?} */
    FabHoverCardComponent.prototype.openHotKey;
    /** @type {?} */
    FabHoverCardComponent.prototype.onCardVisible;
    /** @type {?} */
    FabHoverCardComponent.prototype.onCardHide;
    /** @type {?} */
    FabHoverCardComponent.prototype.onCardExpand;
    /** @type {?} */
    FabHoverCardComponent.prototype.transformedExpandingCardProps;
    /**
     * @type {?}
     * @private
     */
    FabHoverCardComponent.prototype._expandingCardOptions;
    /** @type {?} */
    FabHoverCardComponent.prototype.transformedPlainCardProps;
    /**
     * @type {?}
     * @private
     */
    FabHoverCardComponent.prototype._plainCardOptions;
}
/**
 * Counterpart of `IExpandingCardProps`, with Angular adjustments.
 * @record
 */
function IExpandingCardOptions() { }
if (false) {
    /** @type {?|undefined} */
    IExpandingCardOptions.prototype.renderCompactCard;
    /** @type {?|undefined} */
    IExpandingCardOptions.prototype.renderExpandedCard;
}
/**
 * @record
 */
function IPlainCardOptions() { }
if (false) {
    /** @type {?|undefined} */
    IPlainCardOptions.prototype.renderPlainCard;
}
/**
 * @record
 * @template T
 */
function RenderCardContext() { }
if (false) {
    /** @type {?} */
    RenderCardContext.prototype.data;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabPlainCardComponent = /** @class */ (function (_super) {
    __extends(FabPlainCardComponent, _super);
    function FabPlainCardComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone }) || this;
        _this.onEnter = new EventEmitter();
        _this.onLeave = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    FabPlainCardComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onRenderPlainCard = this.createRenderPropHandler(this.renderPlainCard);
    };
    FabPlainCardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-plain-card',
                    exportAs: 'fabPlainCard',
                    template: "\n    <PlainCard\n      [componentRef]=\"componentRef\"\n      [className]=\"className\"\n      [directionalHint]=\"directionalHint\"\n      [directionalHintFixed]=\"directionalHintFixed\"\n      [firstFocus]=\"firstFocus\"\n      [gapSpace]=\"gapSpace\"\n      [renderData]=\"renderData\"\n      [styles]=\"styles\"\n      [targetElement]=\"targetElement\"\n      [theme]=\"theme\"\n      [trapFocus]=\"trapFocus\"\n      [RenderPlainCard]=\"renderPlainCard && onRenderPlainCard\"\n      (onEnter)=\"onEnter.emit()\"\n      (onLeave)=\"onLeave.emit()\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </PlainCard>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabPlainCardComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    FabPlainCardComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: false },] }],
        componentRef: [{ type: Input }],
        className: [{ type: Input }],
        directionalHint: [{ type: Input }],
        directionalHintFixed: [{ type: Input }],
        firstFocus: [{ type: Input }],
        gapSpace: [{ type: Input }],
        renderData: [{ type: Input }],
        styles: [{ type: Input }],
        targetElement: [{ type: Input }],
        theme: [{ type: Input }],
        trapFocus: [{ type: Input }],
        renderPlainCard: [{ type: Input }],
        onEnter: [{ type: Output }],
        onLeave: [{ type: Output }]
    };
    return FabPlainCardComponent;
}(ReactWrapperComponent));
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabPlainCardComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabPlainCardComponent.prototype.componentRef;
    /** @type {?} */
    FabPlainCardComponent.prototype.className;
    /** @type {?} */
    FabPlainCardComponent.prototype.directionalHint;
    /** @type {?} */
    FabPlainCardComponent.prototype.directionalHintFixed;
    /** @type {?} */
    FabPlainCardComponent.prototype.firstFocus;
    /** @type {?} */
    FabPlainCardComponent.prototype.gapSpace;
    /** @type {?} */
    FabPlainCardComponent.prototype.renderData;
    /** @type {?} */
    FabPlainCardComponent.prototype.styles;
    /** @type {?} */
    FabPlainCardComponent.prototype.targetElement;
    /** @type {?} */
    FabPlainCardComponent.prototype.theme;
    /** @type {?} */
    FabPlainCardComponent.prototype.trapFocus;
    /** @type {?} */
    FabPlainCardComponent.prototype.renderPlainCard;
    /** @type {?} */
    FabPlainCardComponent.prototype.onEnter;
    /** @type {?} */
    FabPlainCardComponent.prototype.onLeave;
    /** @type {?} */
    FabPlainCardComponent.prototype.onRenderPlainCard;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var components = [FabHoverCardComponent, FabExpandingCardComponent, FabPlainCardComponent];
var FabHoverCardModule = /** @class */ (function () {
    function FabHoverCardModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('ExpandingCard', (/**
         * @return {?}
         */
        function () { return ExpandingCard; }));
        registerElement('HoverCard', (/**
         * @return {?}
         */
        function () { return HoverCard; }));
        registerElement('PlainCard', (/**
         * @return {?}
         */
        function () { return PlainCard; }));
    }
    FabHoverCardModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: components,
                    exports: components,
                    schemas: [NO_ERRORS_SCHEMA],
                },] }
    ];
    /** @nocollapse */
    FabHoverCardModule.ctorParameters = function () { return []; };
    return FabHoverCardModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FabExpandingCardComponent, FabHoverCardComponent, FabHoverCardModule, FabPlainCardComponent };
//# sourceMappingURL=angular-react-fabric-lib-components-hover-card.js.map
