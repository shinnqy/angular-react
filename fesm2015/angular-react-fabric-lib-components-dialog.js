import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { EventEmitter, Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, ViewChild, Input, Output, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dialog, DialogContent, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabDialogComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer);
        this.onDismiss = new EventEmitter();
        this.onDismissHandler = this.onDismissHandler.bind(this);
    }
    /**
     * @param {?} ev
     * @return {?}
     */
    onDismissHandler(ev) {
        this.onDismiss.emit(ev && ev.nativeEvent);
    }
}
FabDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-dialog',
                exportAs: 'fabDialog',
                template: `
    <!-- prettier-ignore -->
    <Dialog
      #reactNode
      [responsiveMode]="responsiveMode"
      [elementToFocusOnDismiss]="elementToFocusOnDismiss"
      [ignoreExternalFocusing]="ignoreExternalFocusing"
      [forceFocusInsideTrap]="forceFocusInsideTrap"
      [firstFocusableSelector]="firstFocusableSelector"
      [closeButtonAriaLabel]="closeButtonAriaLabel"
      [isClickableOutsideFocusTrap]="isClickableOutsideFocusTrap"
      [componentRef]="componentRef"
      [styles]="styles"
      [theme]="theme"
      [dialogContentProps]="dialogContentProps"
      [hidden]="hidden"
      [modalProps]="modalProps"
      [minWidth]="minWidth"
      [maxWidth]="maxWidth"
      (onDismiss)="onDismissHandler($event)"
    >
      <ReactContent><ng-content></ng-content></ReactContent>
    </Dialog>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabDialogComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
FabDialogComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    responsiveMode: [{ type: Input }],
    elementToFocusOnDismiss: [{ type: Input }],
    ignoreExternalFocusing: [{ type: Input }],
    forceFocusInsideTrap: [{ type: Input }],
    firstFocusableSelector: [{ type: Input }],
    closeButtonAriaLabel: [{ type: Input }],
    isClickableOutsideFocusTrap: [{ type: Input }],
    componentRef: [{ type: Input }],
    styles: [{ type: Input }],
    theme: [{ type: Input }],
    dialogContentProps: [{ type: Input }],
    hidden: [{ type: Input }],
    modalProps: [{ type: Input }],
    minWidth: [{ type: Input }],
    maxWidth: [{ type: Input }],
    onDismiss: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabDialogComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabDialogComponent.prototype.responsiveMode;
    /** @type {?} */
    FabDialogComponent.prototype.elementToFocusOnDismiss;
    /** @type {?} */
    FabDialogComponent.prototype.ignoreExternalFocusing;
    /** @type {?} */
    FabDialogComponent.prototype.forceFocusInsideTrap;
    /** @type {?} */
    FabDialogComponent.prototype.firstFocusableSelector;
    /** @type {?} */
    FabDialogComponent.prototype.closeButtonAriaLabel;
    /** @type {?} */
    FabDialogComponent.prototype.isClickableOutsideFocusTrap;
    /** @type {?} */
    FabDialogComponent.prototype.componentRef;
    /** @type {?} */
    FabDialogComponent.prototype.styles;
    /** @type {?} */
    FabDialogComponent.prototype.theme;
    /** @type {?} */
    FabDialogComponent.prototype.dialogContentProps;
    /** @type {?} */
    FabDialogComponent.prototype.hidden;
    /** @type {?} */
    FabDialogComponent.prototype.modalProps;
    /** @type {?} */
    FabDialogComponent.prototype.minWidth;
    /** @type {?} */
    FabDialogComponent.prototype.maxWidth;
    /** @type {?} */
    FabDialogComponent.prototype.onDismiss;
}
class FabDialogFooterComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer);
    }
}
FabDialogFooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-dialog-footer',
                exportAs: 'fabDialogFooter',
                template: `
    <DialogFooter #reactNode [componentRef]="componentRef" [styles]="styles" [theme]="theme" [className]="className">
      <ReactContent><ng-content></ng-content></ReactContent>
    </DialogFooter>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabDialogFooterComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
FabDialogFooterComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    componentRef: [{ type: Input }],
    styles: [{ type: Input }],
    theme: [{ type: Input }],
    className: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabDialogFooterComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabDialogFooterComponent.prototype.componentRef;
    /** @type {?} */
    FabDialogFooterComponent.prototype.styles;
    /** @type {?} */
    FabDialogFooterComponent.prototype.theme;
    /** @type {?} */
    FabDialogFooterComponent.prototype.className;
}
class FabDialogContentComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer);
        this.onDismiss = new EventEmitter();
    }
}
FabDialogContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-dialog-content',
                exportAs: 'fabDialogContent',
                template: `
    <DialogContent
      #reactNode
      [componentRef]="componentRef"
      [styles]="styles"
      [theme]="theme"
      [isMultiline]="isMultiline"
      [showCloseButton]="showCloseButton"
      [topButtonsProps]="topButtonsProps"
      [className]="className"
      [subTextId]="subTextId"
      [subText]="subText"
      [titleId]="titleId"
      [title]="title"
      [responsiveMode]="responsiveMode"
      [closeButtonAriaLabel]="closeButtonAriaLabel"
      [type]="type"
      [draggableHeaderClassName]="draggableHeaderClassName"
      (onDismiss)="onDismiss.emit($event && $event.nativeEvent)"
    >
      <ReactContent><ng-content></ng-content></ReactContent>
    </DialogContent>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabDialogContentComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
FabDialogContentComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    componentRef: [{ type: Input }],
    styles: [{ type: Input }],
    theme: [{ type: Input }],
    isMultiline: [{ type: Input }],
    showCloseButton: [{ type: Input }],
    topButtonsProps: [{ type: Input }],
    className: [{ type: Input }],
    subTextId: [{ type: Input }],
    subText: [{ type: Input }],
    titleId: [{ type: Input }],
    title: [{ type: Input }],
    responsiveMode: [{ type: Input }],
    closeButtonAriaLabel: [{ type: Input }],
    type: [{ type: Input }],
    draggableHeaderClassName: [{ type: Input }],
    onDismiss: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabDialogContentComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabDialogContentComponent.prototype.componentRef;
    /** @type {?} */
    FabDialogContentComponent.prototype.styles;
    /** @type {?} */
    FabDialogContentComponent.prototype.theme;
    /** @type {?} */
    FabDialogContentComponent.prototype.isMultiline;
    /** @type {?} */
    FabDialogContentComponent.prototype.showCloseButton;
    /** @type {?} */
    FabDialogContentComponent.prototype.topButtonsProps;
    /** @type {?} */
    FabDialogContentComponent.prototype.className;
    /** @type {?} */
    FabDialogContentComponent.prototype.subTextId;
    /** @type {?} */
    FabDialogContentComponent.prototype.subText;
    /** @type {?} */
    FabDialogContentComponent.prototype.titleId;
    /** @type {?} */
    FabDialogContentComponent.prototype.title;
    /** @type {?} */
    FabDialogContentComponent.prototype.responsiveMode;
    /** @type {?} */
    FabDialogContentComponent.prototype.closeButtonAriaLabel;
    /** @type {?} */
    FabDialogContentComponent.prototype.type;
    /** @type {?} */
    FabDialogContentComponent.prototype.draggableHeaderClassName;
    /** @type {?} */
    FabDialogContentComponent.prototype.onDismiss;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components = [FabDialogComponent, FabDialogContentComponent, FabDialogFooterComponent];
class FabDialogModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Dialog', (/**
         * @return {?}
         */
        () => Dialog));
        registerElement('DialogContent', (/**
         * @return {?}
         */
        () => DialogContent));
        registerElement('DialogFooter', (/**
         * @return {?}
         */
        () => DialogFooter));
    }
}
FabDialogModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components,
                exports: components,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabDialogModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FabDialogComponent, FabDialogContentComponent, FabDialogFooterComponent, FabDialogModule };
//# sourceMappingURL=angular-react-fabric-lib-components-dialog.js.map
