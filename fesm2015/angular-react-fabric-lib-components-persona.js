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
class FabPersonaBaseComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, { ngZone });
        this.onPhotoLoadingStateChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onRenderCoin = this.createRenderPropHandler(this.renderCoin);
        this.onRenderInitials = this.createRenderPropHandler(this.renderInitials);
    }
}
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
class FabPersonaComponent extends FabPersonaBaseComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, ngZone);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        this.onRenderPrimaryText = this.createRenderPropHandler(this.renderPrimaryText);
        this.onRenderSecondaryText = this.createRenderPropHandler(this.renderSecondaryText);
        this.onRenderTertiaryText = this.createRenderPropHandler(this.renderTertiaryText);
        this.onRenderOptionalText = this.createRenderPropHandler(this.renderOptionalText);
    }
}
FabPersonaComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-persona',
                exportAs: 'fabPersona',
                template: `
    <Persona
      #reactNode
      [text]="text"
      [size]="size"
      [imageShouldFadeIn]="imageShouldFadeIn"
      [imageShouldStartVisible]="imageShouldStartVisible"
      [imageUrl]="imageUrl"
      [imageAlt]="imageAlt"
      [imageInitials]="imageInitials"
      [allowPhoneInitials]="allowPhoneInitials"
      [initialsColor]="initialsColor"
      [presence]="presence"
      [isOutOfOffice]="isOutOfOffice"
      [secondaryText]="secondaryText"
      [tertiaryText]="tertiaryText"
      [optionalText]="optionalText"
      [hidePersonaDetails]="hidePersonaDetails"
      [showSecondaryText]="showSecondaryText"
      [showUnknownPersonaCoin]="showUnknownPersonaCoin"
      [showInitialsUntilImageLoads]="showInitialsUntilImageLoads"
      [coinSize]="coinSize"
      [theme]="theme"
      [componentRef]="componentRef"
      [className]="className"
      [styles]="styles"
      [coinProps]="coinProps"
      [RenderInitials]="renderInitials && onRenderInitials"
      [RenderCoin]="renderCoin && onRenderCoin"
      [RenderPrimaryText]="renderPrimaryText && onRenderPrimaryText"
      [RenderSecondaryText]="renderSecondaryText && onRenderSecondaryText"
      [RenderTertiaryText]="renderTertiaryText && onRenderTertiaryText"
      [RenderOptionalText]="renderOptionalText && onRenderOptionalText"
      (onPhotoLoadingStateChange)="onPhotoLoadingStateChange.emit($event)"
    >
    </Persona>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabPersonaComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
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
class FabPersonaCoinComponent extends FabPersonaBaseComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, ngZone);
    }
}
FabPersonaCoinComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-persona-coin',
                exportAs: 'fabPersonaCoin',
                template: `
    <PersonaCoin
      #reactNode
      [text]="text"
      [size]="size"
      [imageShouldFadeIn]="imageShouldFadeIn"
      [imageShouldStartVisible]="imageShouldStartVisible"
      [imageUrl]="imageUrl"
      [imageAlt]="imageAlt"
      [imageInitials]="imageInitials"
      [allowPhoneInitials]="allowPhoneInitials"
      [initialsColor]="initialsColor"
      [presence]="presence"
      [isOutOfOffice]="isOutOfOffice"
      [secondaryText]="secondaryText"
      [tertiaryText]="tertiaryText"
      [optionalText]="optionalText"
      [hidePersonaDetails]="hidePersonaDetails"
      [showUnknownPersonaCoin]="showUnknownPersonaCoin"
      [showInitialsUntilImageLoads]="showInitialsUntilImageLoads"
      [coinSize]="coinSize"
      [theme]="theme"
      [componentRef]="componentRef"
      [styles]="styles"
      [className]="className"
      [RenderInitials]="renderInitials && onRenderInitials"
      [RenderCoin]="renderCoin && onRenderCoin"
      (onPhotoLoadingStateChange)="onPhotoLoadingStateChange.emit($event)"
    >
    </PersonaCoin>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabPersonaCoinComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabPersonaCoinComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    componentRef: [{ type: Input }],
    styles: [{ type: Input }],
    className: [{ type: Input }]
};
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
const components = [FabPersonaComponent, FabPersonaCoinComponent];
class FabPersonaModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Persona', (/**
         * @return {?}
         */
        () => Persona));
        registerElement('PersonaCoin', (/**
         * @return {?}
         */
        () => PersonaCoin));
    }
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
FabPersonaModule.ctorParameters = () => [];

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
