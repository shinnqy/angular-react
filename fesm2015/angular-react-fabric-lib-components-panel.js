import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { EventEmitter, Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, NgZone, ViewChild, Input, Output, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Panel } from 'office-ui-fabric-react/lib/Panel';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabPanelComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, { ngZone });
        this.onLightDismissClick = new EventEmitter();
        this.onOpen = new EventEmitter();
        this.onOpened = new EventEmitter();
        this.onDismiss = new EventEmitter();
        this.onDismissed = new EventEmitter();
        // coming from React context - we need to bind to this so we can access the Angular Component properties
        this.onRenderHeader = this.onRenderHeader.bind(this);
        this.onDismissHandler = this.onDismissHandler.bind(this);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onRenderNavigation = this.createRenderPropHandler(this.renderNavigation);
        this.onRenderNavigationContent = this.createRenderPropHandler(this.renderNavigationContent);
        this._renderHeader = this.createInputJsxRenderer(this.renderHeader);
        this.onRenderBody = this.createRenderPropHandler(this.renderBody);
        this.onRenderFooter = this.createRenderPropHandler(this.renderFooter);
        this.onRenderFooterContent = this.createRenderPropHandler(this.renderFooterContent);
    }
    /**
     * @param {?=} props
     * @param {?=} defaultRender
     * @param {?=} headerTextId
     * @return {?}
     */
    onRenderHeader(props, defaultRender, headerTextId) {
        if (!this.renderHeader) {
            return typeof defaultRender === 'function' ? defaultRender(props, defaultRender, headerTextId) : null;
        }
        return this._renderHeader({ props, headerTextId });
    }
    /**
     * @param {?=} ev
     * @return {?}
     */
    onDismissHandler(ev) {
        this.onDismiss.emit({
            ev: ev && ev.nativeEvent,
        });
    }
}
FabPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-panel',
                exportAs: 'fabPanel',
                template: `
    <Panel
      #reactNode
      [componentRef]="componentRef"
      [isOpen]="isOpen"
      [hasCloseButton]="hasCloseButton"
      [isLightDismiss]="isLightDismiss"
      [isHiddenOnDismiss]="isHiddenOnDismiss"
      [isBlocking]="isBlocking"
      [isFooterAtBottom]="isFooterAtBottom"
      [headerText]="headerText"
      [styles]="styles"
      [theme]="theme"
      [className]="className"
      [type]="type"
      [customWidth]="customWidth"
      [closeButtonAriaLabel]="closeButtonAriaLabel"
      [headerClassName]="headerClassName"
      [elementToFocusOnDismiss]="elementToFocusOnDismiss"
      [ignoreExternalFocusing]="ignoreExternalFocusing"
      [forceFocusInsideTrap]="forceFocusInsideTrap"
      [firstFocusableSelector]="firstFocusableSelector"
      [focusTrapZoneProps]="focusTrapZoneProps"
      [layerProps]="layerProps"
      [componentId]="componentId"
      [RenderHeader]="renderHeader && onRenderHeader"
      [RenderNavigation]="renderNavigation && onRenderNavigation"
      [RenderNavigationContent]="renderNavigationContent && onRenderNavigationContent"
      [RenderBody]="renderBody && onRenderBody"
      [RenderFooter]="renderFooter && onRenderFooter"
      [RenderFooterContent]="renderFooterContent && onRenderFooterContent"
      [Dismiss]="onDismissHandler"
      (onOpen)="onOpen.emit($event)"
      (onOpened)="onOpened.emit($event)"
      (onDismissed)="onDismissed.emit($event)"
      (onLightDismissClick)="onLightDismissClick.emit($event)"
    >
      <ReactContent><ng-content></ng-content></ReactContent>
    </Panel>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabPanelComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabPanelComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    componentRef: [{ type: Input }],
    isOpen: [{ type: Input }],
    hasCloseButton: [{ type: Input }],
    isLightDismiss: [{ type: Input }],
    isHiddenOnDismiss: [{ type: Input }],
    isBlocking: [{ type: Input }],
    isFooterAtBottom: [{ type: Input }],
    headerText: [{ type: Input }],
    styles: [{ type: Input }],
    theme: [{ type: Input }],
    className: [{ type: Input }],
    type: [{ type: Input }],
    customWidth: [{ type: Input }],
    closeButtonAriaLabel: [{ type: Input }],
    headerClassName: [{ type: Input }],
    elementToFocusOnDismiss: [{ type: Input }],
    ignoreExternalFocusing: [{ type: Input }],
    forceFocusInsideTrap: [{ type: Input }],
    firstFocusableSelector: [{ type: Input }],
    focusTrapZoneProps: [{ type: Input }],
    layerProps: [{ type: Input }],
    componentId: [{ type: Input }],
    renderNavigation: [{ type: Input }],
    renderNavigationContent: [{ type: Input }],
    renderHeader: [{ type: Input }],
    renderBody: [{ type: Input }],
    renderFooter: [{ type: Input }],
    renderFooterContent: [{ type: Input }],
    onLightDismissClick: [{ type: Output }],
    onOpen: [{ type: Output }],
    onOpened: [{ type: Output }],
    onDismiss: [{ type: Output }],
    onDismissed: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabPanelComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabPanelComponent.prototype.componentRef;
    /** @type {?} */
    FabPanelComponent.prototype.isOpen;
    /** @type {?} */
    FabPanelComponent.prototype.hasCloseButton;
    /** @type {?} */
    FabPanelComponent.prototype.isLightDismiss;
    /** @type {?} */
    FabPanelComponent.prototype.isHiddenOnDismiss;
    /** @type {?} */
    FabPanelComponent.prototype.isBlocking;
    /** @type {?} */
    FabPanelComponent.prototype.isFooterAtBottom;
    /** @type {?} */
    FabPanelComponent.prototype.headerText;
    /** @type {?} */
    FabPanelComponent.prototype.styles;
    /** @type {?} */
    FabPanelComponent.prototype.theme;
    /** @type {?} */
    FabPanelComponent.prototype.className;
    /** @type {?} */
    FabPanelComponent.prototype.type;
    /** @type {?} */
    FabPanelComponent.prototype.customWidth;
    /** @type {?} */
    FabPanelComponent.prototype.closeButtonAriaLabel;
    /** @type {?} */
    FabPanelComponent.prototype.headerClassName;
    /** @type {?} */
    FabPanelComponent.prototype.elementToFocusOnDismiss;
    /** @type {?} */
    FabPanelComponent.prototype.ignoreExternalFocusing;
    /** @type {?} */
    FabPanelComponent.prototype.forceFocusInsideTrap;
    /** @type {?} */
    FabPanelComponent.prototype.firstFocusableSelector;
    /** @type {?} */
    FabPanelComponent.prototype.focusTrapZoneProps;
    /** @type {?} */
    FabPanelComponent.prototype.layerProps;
    /** @type {?} */
    FabPanelComponent.prototype.componentId;
    /** @type {?} */
    FabPanelComponent.prototype.renderNavigation;
    /** @type {?} */
    FabPanelComponent.prototype.renderNavigationContent;
    /** @type {?} */
    FabPanelComponent.prototype.renderHeader;
    /** @type {?} */
    FabPanelComponent.prototype.renderBody;
    /** @type {?} */
    FabPanelComponent.prototype.renderFooter;
    /** @type {?} */
    FabPanelComponent.prototype.renderFooterContent;
    /** @type {?} */
    FabPanelComponent.prototype.onLightDismissClick;
    /** @type {?} */
    FabPanelComponent.prototype.onOpen;
    /** @type {?} */
    FabPanelComponent.prototype.onOpened;
    /** @type {?} */
    FabPanelComponent.prototype.onDismiss;
    /** @type {?} */
    FabPanelComponent.prototype.onDismissed;
    /**
     * @type {?}
     * @private
     */
    FabPanelComponent.prototype._renderHeader;
    /** @type {?} */
    FabPanelComponent.prototype.onRenderNavigation;
    /** @type {?} */
    FabPanelComponent.prototype.onRenderNavigationContent;
    /** @type {?} */
    FabPanelComponent.prototype.onRenderBody;
    /** @type {?} */
    FabPanelComponent.prototype.onRenderFooter;
    /** @type {?} */
    FabPanelComponent.prototype.onRenderFooterContent;
}
/**
 * Counterpart of `IPanelHeaderRenderer`.
 * @record
 */
function IPanelHeaderRenderContext() { }
if (false) {
    /** @type {?|undefined} */
    IPanelHeaderRenderContext.prototype.props;
    /** @type {?|undefined} */
    IPanelHeaderRenderContext.prototype.headerTextId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components = [FabPanelComponent];
class FabPanelModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Panel', (/**
         * @return {?}
         */
        () => Panel));
    }
}
FabPanelModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components,
                exports: components,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabPanelModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FabPanelComponent, FabPanelModule };
//# sourceMappingURL=angular-react-fabric-lib-components-panel.js.map
