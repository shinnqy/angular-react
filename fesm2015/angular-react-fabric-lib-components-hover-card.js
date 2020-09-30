import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { EventEmitter, Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, NgZone, ViewChild, Input, Output, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { omit } from '@angular-react/fabric/lib/utils';
import { CommonModule } from '@angular/common';
import { ExpandingCard, HoverCard, PlainCard } from 'office-ui-fabric-react/lib/HoverCard';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabExpandingCardComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, { ngZone });
        this.onEnter = new EventEmitter();
        this.onLeave = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onRenderCompactCard = this.createRenderPropHandler(this.renderCompactCard);
        this.onRenderExpandedCard = this.createRenderPropHandler(this.renderExpandedCard);
    }
}
FabExpandingCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-expanding-card',
                exportAs: 'fabExpandingCard',
                template: `
    <ExpandingCard
      [componentRef]="componentRef"
      [className]="className"
      [directionalHint]="directionalHint"
      [directionalHintFixed]="directionalHintFixed"
      [firstFocus]="firstFocus"
      [gapSpace]="gapSpace"
      [renderData]="renderData"
      [styles]="styles"
      [targetElement]="targetElement"
      [theme]="theme"
      [trapFocus]="trapFocus"
      [compactCardHeight]="compactCardHeight"
      [expandedCardHeight]="expandedCardHeight"
      [mode]="mode"
      [RenderCompactCard]="renderCompactCard && onRenderCompactCard"
      [RenderExpandedCard]="renderExpandedCard && onRenderExpandedCard"
      (onEnter)="onEnter.emit()"
      (onLeave)="onLeave.emit()"
    >
      <ReactContent><ng-content></ng-content></ReactContent>
    </ExpandingCard>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabExpandingCardComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
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
class FabHoverCardComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, { ngZone });
        this.onCardVisible = new EventEmitter();
        this.onCardHide = new EventEmitter();
        this.onCardExpand = new EventEmitter();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set expandingCardOptions(value) {
        this._expandingCardOptions = value;
        if (value) {
            this.transformedExpandingCardProps = this._transformExpandingCardOptionsToProps(value);
        }
    }
    /**
     * @return {?}
     */
    get expandingCardOptions() {
        return this._expandingCardOptions;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set plainCardOptions(value) {
        this._plainCardOptions = value;
        if (value) {
            this.transformedPlainCardProps = this._transformPlainCardOptionsToProps(value);
        }
    }
    /**
     * @return {?}
     */
    get plainCardOptions() {
        return this._plainCardOptions;
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    _transformExpandingCardOptionsToProps(options) {
        /** @type {?} */
        const sharedProperties = omit(options, 'renderCompactCard', 'renderExpandedCard');
        /** @type {?} */
        const compactCardRenderer = this.createInputJsxRenderer(options.renderCompactCard);
        /** @type {?} */
        const expandedCardRenderer = this.createInputJsxRenderer(options.renderExpandedCard);
        return Object.assign({}, sharedProperties, compactCardRenderer &&
            ((/** @type {?} */ ({ onRenderCompactCard: (/**
                 * @param {?} data
                 * @return {?}
                 */
                data => compactCardRenderer({ data })) }))), expandedCardRenderer &&
            ((/** @type {?} */ ({ onRenderExpandedCard: (/**
                 * @param {?} data
                 * @return {?}
                 */
                data => expandedCardRenderer({ data })) }))));
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    _transformPlainCardOptionsToProps(options) {
        /** @type {?} */
        const sharedProperties = omit(options, 'renderPlainCard');
        /** @type {?} */
        const plainCardRenderer = this.createInputJsxRenderer(options.renderPlainCard);
        return Object.assign({}, sharedProperties, plainCardRenderer &&
            ((/** @type {?} */ ({ onRenderPlainCard: (/**
                 * @param {?} data
                 * @return {?}
                 */
                data => plainCardRenderer({ data })) }))));
    }
}
FabHoverCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-hover-card',
                exportAs: 'fabHoverCard',
                template: `
    <HoverCard
      #reactNode
      [componentRef]="componentRef"
      [className]="className"
      [theme]="theme"
      [type]="type"
      [expandingCardProps]="transformedExpandingCardProps"
      [plainCardProps]="transformedPlainCardProps"
      [setAriaDescribedBy]="setAriaDescribedBy"
      [cardOpenDelay]="cardOpenDelay"
      [cardDismissDelay]="cardDismissDelay"
      [expandedCardOpenDelay]="expandedCardOpenDelay"
      [sticky]="sticky"
      [instantOpenOnClick]="instantOpenOnClick"
      [styles]="styles"
      [target]="target"
      [eventListenerTarget]="eventListenerTarget"
      [trapFocus]="trapFocus"
      [shouldBlockHoverCard]="shouldBlockHoverCard"
      [setInitialFocus]="setInitialFocus"
      [openHotKey]="openHotKey"
      (onCardVisible)="onCardVisible.emit()"
      (onCardHide)="onCardHide.emit()"
      (onCardExpand)="onCardExpand.emit()"
    >
      <ReactContent><ng-content></ng-content></ReactContent>
    </HoverCard>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabHoverCardComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
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
class FabPlainCardComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, { ngZone });
        this.onEnter = new EventEmitter();
        this.onLeave = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onRenderPlainCard = this.createRenderPropHandler(this.renderPlainCard);
    }
}
FabPlainCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-plain-card',
                exportAs: 'fabPlainCard',
                template: `
    <PlainCard
      [componentRef]="componentRef"
      [className]="className"
      [directionalHint]="directionalHint"
      [directionalHintFixed]="directionalHintFixed"
      [firstFocus]="firstFocus"
      [gapSpace]="gapSpace"
      [renderData]="renderData"
      [styles]="styles"
      [targetElement]="targetElement"
      [theme]="theme"
      [trapFocus]="trapFocus"
      [RenderPlainCard]="renderPlainCard && onRenderPlainCard"
      (onEnter)="onEnter.emit()"
      (onLeave)="onLeave.emit()"
    >
      <ReactContent><ng-content></ng-content></ReactContent>
    </PlainCard>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabPlainCardComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
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
const components = [FabHoverCardComponent, FabExpandingCardComponent, FabPlainCardComponent];
class FabHoverCardModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('ExpandingCard', (/**
         * @return {?}
         */
        () => ExpandingCard));
        registerElement('HoverCard', (/**
         * @return {?}
         */
        () => HoverCard));
        registerElement('PlainCard', (/**
         * @return {?}
         */
        () => PlainCard));
    }
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
FabHoverCardModule.ctorParameters = () => [];

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
