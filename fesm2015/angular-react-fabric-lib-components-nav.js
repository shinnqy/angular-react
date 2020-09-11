import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { Nav } from 'office-ui-fabric-react/lib/Nav';
import { EventEmitter, Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, ViewChild, Input, Output, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabNavComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer);
        this.onLinkClick = new EventEmitter();
        this.onLinkExpandClick = new EventEmitter();
        this.onLinkClickHandler = this.onLinkClickHandler.bind(this);
        this.onLinkExpandClickHandler = this.onLinkExpandClickHandler.bind(this);
    }
    /**
     * @param {?} event
     * @param {?=} link
     * @return {?}
     */
    onLinkClickHandler(event, link) {
        this.onLinkClick.emit({
            event: event.nativeEvent,
            link: link
        });
    }
    /**
     * @param {?} event
     * @param {?=} link
     * @return {?}
     */
    onLinkExpandClickHandler(event, link) {
        this.onLinkExpandClick.emit({
            event: event.nativeEvent,
            link: link
        });
    }
}
FabNavComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-nav',
                exportAs: 'fabNav',
                template: `
    <Nav
      #reactNode
      [groups]="groups"
      [LinkClick]="onLinkClickHandler"
      [selectedKey]="selectedKey"
      [expandButtonAriaLabel]="expandButtonAriaLabel"
      [LinkExpandClick]="onLinkExpandClickHandler"
      [isOnTop]="isOnTop"
      [initialSelectedKey]="initialSelectedKey"
      [ariaLabel]="ariaLabel"
      [selectedAriaLabel]="selectedAriaLabel"
    >
    </Nav>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabNavComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
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
class FabNavModule {
    constructor() {
        registerElement('Nav', (/**
         * @return {?}
         */
        () => Nav));
    }
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
FabNavModule.ctorParameters = () => [];

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
