import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { EventEmitter, Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, ViewChild, Input, Output, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Modal } from 'office-ui-fabric-react/lib/Modal';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabModalComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer);
        this.onLayerDidMount = new EventEmitter();
        this.onDismiss = new EventEmitter();
        this.onDismissed = new EventEmitter();
        this.onDismissHandler = this.onDismissHandler.bind(this);
    }
    /**
     * @param {?=} ev
     * @return {?}
     */
    onDismissHandler(ev) {
        this.onDismiss.emit(ev && ev.nativeEvent);
    }
}
FabModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-modal',
                exportAs: 'fabModal',
                template: `
    <Modal
      #reactNode
      [responsiveMode]="responsiveMode"
      [elementToFocusOnDismiss]="elementToFocusOnDismiss"
      [ignoreExternalFocusing]="ignoreExternalFocusing"
      [forceFocusInsideTrap]="forceFocusInsideTrap"
      [firstFocusableSelector]="firstFocusableSelector"
      [closeButtonAriaLabel]="closeButtonAriaLabel"
      [isClickableOutsideFocusTrap]="isClickableOutsideFocusTrap"
      [componentRef]="componentRef"
      [isOpen]="isOpen"
      [isDarkOverlay]="isDarkOverlay"
      [layerProps]="layerProps"
      [isBlocking]="isBlocking"
      [isModeless]="isModeless"
      [className]="className"
      [containerClassName]="containerClassName"
      [scrollableContentClassName]="scrollableContentClassName"
      [titleAriaId]="titleAriaId"
      [subtitleAriaId]="subtitleAriaId"
      [topOffsetFixed]="topOffsetFixed"
      [dragOptions]="dragOptions"
      [Dismiss]="onDismissHandler"
      (onLayerDidMount)="onLayerDidMount.emit()"
      (onDismissed)="onDismissed.emit()"
    >
      <ReactContent><ng-content></ng-content></ReactContent>
    </Modal>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabModalComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
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
const components = [FabModalComponent];
class FabModalModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Modal', (/**
         * @return {?}
         */
        () => Modal));
    }
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
FabModalModule.ctorParameters = () => [];

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
