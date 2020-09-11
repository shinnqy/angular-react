import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { EventEmitter, Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, NgZone, ViewChild, Input, Output, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageBar } from 'office-ui-fabric-react/lib/MessageBar';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabMessageBarComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, { ngZone });
        // Non-React prop, used together with onDismiss to allow it to be an Output EventEmitter.
        this.dismissable = null;
        this.onDismiss = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const onRenderActions = this.createRenderPropHandler(this.renderActions);
        this.actions = onRenderActions();
    }
    /**
     * @return {?}
     */
    get onDismissInternal() {
        if (!this.dismissable) {
            return null;
        }
        return (/**
         * @param {?} ev
         * @return {?}
         */
        ev => {
            this.onDismiss.emit(ev && ev.nativeEvent);
        });
    }
}
FabMessageBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-message-bar',
                exportAs: 'fabMessageBar',
                template: `
    <MessageBar
      #reactNode
      [componentRef]="componentRef"
      [messageBarType]="messageBarType"
      [isMultiline]="isMultiline"
      [dismissButtonAriaLabel]="dismissButtonAriaLabel"
      [truncated]="truncated"
      [overflowButtonAriaLabel]="overflowButtonAriaLabel"
      [className]="className"
      [theme]="theme"
      [styles]="styles"
      [Dismiss]="onDismissInternal"
      [actions]="renderActions && actions"
    >
      <ReactContent><ng-content></ng-content></ReactContent>
    </MessageBar>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabMessageBarComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
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
const components = [FabMessageBarComponent];
class FabMessageBarModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('MessageBar', (/**
         * @return {?}
         */
        () => MessageBar));
    }
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
FabMessageBarModule.ctorParameters = () => [];

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
