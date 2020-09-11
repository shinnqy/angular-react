import { __extends } from 'tslib';
import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { EventEmitter, Input, Output, Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, NgZone, ViewChild, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Persona, PersonaCoin } from 'office-ui-fabric-react/lib/Persona';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template TProps
 */
var FabPersonaBaseComponent = /** @class */ (function (_super) {
    __extends(FabPersonaBaseComponent, _super);
    function FabPersonaBaseComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone }) || this;
        _this.onPhotoLoadingStateChange = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    FabPersonaBaseComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onRenderCoin = this.createRenderPropHandler(this.renderCoin);
        this.onRenderInitials = this.createRenderPropHandler(this.renderInitials);
    };
    FabPersonaBaseComponent.propDecorators = {
        text: [{ type: Input }],
        size: [{ type: Input }],
        imageShouldFadeIn: [{ type: Input }],
        imageShouldStartVisible: [{ type: Input }],
        imageUrl: [{ type: Input }],
        imageAlt: [{ type: Input }],
        imageInitials: [{ type: Input }],
        allowPhoneInitials: [{ type: Input }],
        initialsColor: [{ type: Input }],
        presence: [{ type: Input }],
        isOutOfOffice: [{ type: Input }],
        secondaryText: [{ type: Input }],
        tertiaryText: [{ type: Input }],
        optionalText: [{ type: Input }],
        hidePersonaDetails: [{ type: Input }],
        showSecondaryText: [{ type: Input }],
        showUnknownPersonaCoin: [{ type: Input }],
        showInitialsUntilImageLoads: [{ type: Input }],
        coinSize: [{ type: Input }],
        theme: [{ type: Input }],
        renderCoin: [{ type: Input }],
        renderInitials: [{ type: Input }],
        onPhotoLoadingStateChange: [{ type: Output }]
    };
    return FabPersonaBaseComponent;
}(ReactWrapperComponent));
if (false) {
    /** @type {?} */
    FabPersonaBaseComponent.prototype.text;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.size;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.imageShouldFadeIn;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.imageShouldStartVisible;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.imageUrl;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.imageAlt;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.imageInitials;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.allowPhoneInitials;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.initialsColor;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.presence;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.isOutOfOffice;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.secondaryText;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.tertiaryText;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.optionalText;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.hidePersonaDetails;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.showSecondaryText;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.showUnknownPersonaCoin;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.showInitialsUntilImageLoads;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.coinSize;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.theme;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.renderCoin;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.renderInitials;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.onPhotoLoadingStateChange;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.onRenderCoin;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.onRenderInitials;
}
var FabPersonaComponent = /** @class */ (function (_super) {
    __extends(FabPersonaComponent, _super);
    function FabPersonaComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        return _super.call(this, elementRef, changeDetectorRef, renderer, ngZone) || this;
    }
    /**
     * @return {?}
     */
    FabPersonaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
        this.onRenderPrimaryText = this.createRenderPropHandler(this.renderPrimaryText);
        this.onRenderSecondaryText = this.createRenderPropHandler(this.renderSecondaryText);
        this.onRenderTertiaryText = this.createRenderPropHandler(this.renderTertiaryText);
        this.onRenderOptionalText = this.createRenderPropHandler(this.renderOptionalText);
    };
    FabPersonaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-persona',
                    exportAs: 'fabPersona',
                    template: "\n    <Persona\n      #reactNode\n      [text]=\"text\"\n      [size]=\"size\"\n      [imageShouldFadeIn]=\"imageShouldFadeIn\"\n      [imageShouldStartVisible]=\"imageShouldStartVisible\"\n      [imageUrl]=\"imageUrl\"\n      [imageAlt]=\"imageAlt\"\n      [imageInitials]=\"imageInitials\"\n      [allowPhoneInitials]=\"allowPhoneInitials\"\n      [initialsColor]=\"initialsColor\"\n      [presence]=\"presence\"\n      [isOutOfOffice]=\"isOutOfOffice\"\n      [secondaryText]=\"secondaryText\"\n      [tertiaryText]=\"tertiaryText\"\n      [optionalText]=\"optionalText\"\n      [hidePersonaDetails]=\"hidePersonaDetails\"\n      [showSecondaryText]=\"showSecondaryText\"\n      [showUnknownPersonaCoin]=\"showUnknownPersonaCoin\"\n      [showInitialsUntilImageLoads]=\"showInitialsUntilImageLoads\"\n      [coinSize]=\"coinSize\"\n      [theme]=\"theme\"\n      [componentRef]=\"componentRef\"\n      [className]=\"className\"\n      [styles]=\"styles\"\n      [coinProps]=\"coinProps\"\n      [RenderInitials]=\"renderInitials && onRenderInitials\"\n      [RenderCoin]=\"renderCoin && onRenderCoin\"\n      [RenderPrimaryText]=\"renderPrimaryText && onRenderPrimaryText\"\n      [RenderSecondaryText]=\"renderSecondaryText && onRenderSecondaryText\"\n      [RenderTertiaryText]=\"renderTertiaryText && onRenderTertiaryText\"\n      [RenderOptionalText]=\"renderOptionalText && onRenderOptionalText\"\n      (onPhotoLoadingStateChange)=\"onPhotoLoadingStateChange.emit($event)\"\n    >\n    </Persona>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabPersonaComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    FabPersonaComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
        componentRef: [{ type: Input }],
        className: [{ type: Input }],
        styles: [{ type: Input }],
        coinProps: [{ type: Input }],
        renderPrimaryText: [{ type: Input }],
        renderSecondaryText: [{ type: Input }],
        renderTertiaryText: [{ type: Input }],
        renderOptionalText: [{ type: Input }]
    };
    return FabPersonaComponent;
}(FabPersonaBaseComponent));
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabPersonaComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabPersonaComponent.prototype.componentRef;
    /** @type {?} */
    FabPersonaComponent.prototype.className;
    /** @type {?} */
    FabPersonaComponent.prototype.styles;
    /** @type {?} */
    FabPersonaComponent.prototype.coinProps;
    /** @type {?} */
    FabPersonaComponent.prototype.renderPrimaryText;
    /** @type {?} */
    FabPersonaComponent.prototype.renderSecondaryText;
    /** @type {?} */
    FabPersonaComponent.prototype.renderTertiaryText;
    /** @type {?} */
    FabPersonaComponent.prototype.renderOptionalText;
    /** @type {?} */
    FabPersonaComponent.prototype.onRenderPrimaryText;
    /** @type {?} */
    FabPersonaComponent.prototype.onRenderSecondaryText;
    /** @type {?} */
    FabPersonaComponent.prototype.onRenderTertiaryText;
    /** @type {?} */
    FabPersonaComponent.prototype.onRenderOptionalText;
}
var FabPersonaCoinComponent = /** @class */ (function (_super) {
    __extends(FabPersonaCoinComponent, _super);
    function FabPersonaCoinComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        return _super.call(this, elementRef, changeDetectorRef, renderer, ngZone) || this;
    }
    FabPersonaCoinComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-persona-coin',
                    exportAs: 'fabPersonaCoin',
                    template: "\n    <PersonaCoin\n      #reactNode\n      [text]=\"text\"\n      [size]=\"size\"\n      [imageShouldFadeIn]=\"imageShouldFadeIn\"\n      [imageShouldStartVisible]=\"imageShouldStartVisible\"\n      [imageUrl]=\"imageUrl\"\n      [imageAlt]=\"imageAlt\"\n      [imageInitials]=\"imageInitials\"\n      [allowPhoneInitials]=\"allowPhoneInitials\"\n      [initialsColor]=\"initialsColor\"\n      [presence]=\"presence\"\n      [isOutOfOffice]=\"isOutOfOffice\"\n      [secondaryText]=\"secondaryText\"\n      [tertiaryText]=\"tertiaryText\"\n      [optionalText]=\"optionalText\"\n      [hidePersonaDetails]=\"hidePersonaDetails\"\n      [showUnknownPersonaCoin]=\"showUnknownPersonaCoin\"\n      [showInitialsUntilImageLoads]=\"showInitialsUntilImageLoads\"\n      [coinSize]=\"coinSize\"\n      [theme]=\"theme\"\n      [componentRef]=\"componentRef\"\n      [styles]=\"styles\"\n      [className]=\"className\"\n      [RenderInitials]=\"renderInitials && onRenderInitials\"\n      [RenderCoin]=\"renderCoin && onRenderCoin\"\n      (onPhotoLoadingStateChange)=\"onPhotoLoadingStateChange.emit($event)\"\n    >\n    </PersonaCoin>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabPersonaCoinComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    FabPersonaCoinComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
        componentRef: [{ type: Input }],
        styles: [{ type: Input }],
        className: [{ type: Input }]
    };
    return FabPersonaCoinComponent;
}(FabPersonaBaseComponent));
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabPersonaCoinComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabPersonaCoinComponent.prototype.componentRef;
    /** @type {?} */
    FabPersonaCoinComponent.prototype.styles;
    /** @type {?} */
    FabPersonaCoinComponent.prototype.className;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var components = [FabPersonaComponent, FabPersonaCoinComponent];
var FabPersonaModule = /** @class */ (function () {
    function FabPersonaModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Persona', (/**
         * @return {?}
         */
        function () { return Persona; }));
        registerElement('PersonaCoin', (/**
         * @return {?}
         */
        function () { return PersonaCoin; }));
    }
    FabPersonaModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: components,
                    exports: components,
                    schemas: [NO_ERRORS_SCHEMA],
                },] }
    ];
    /** @nocollapse */
    FabPersonaModule.ctorParameters = function () { return []; };
    return FabPersonaModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FabPersonaBaseComponent, FabPersonaCoinComponent, FabPersonaComponent, FabPersonaModule };
//# sourceMappingURL=angular-react-fabric-lib-components-persona.js.map
