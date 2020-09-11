import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { EventEmitter, Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, ViewChild, Input, Output, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabToggleComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer);
        this.onChange = new EventEmitter();
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }
    /**
     * @param {?} event
     * @param {?=} checked
     * @return {?}
     */
    onChangeHandler(event, checked) {
        this.onChange.emit({
            event: event && event.nativeEvent,
            checked,
        });
    }
}
FabToggleComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-toggle',
                exportAs: 'fabToggle',
                template: `
    <Toggle
      #reactNode
      [componentRef]="componentRef"
      [label]="label"
      [Text]="onText"
      [offText]="offText"
      [ariaLabel]="ariaLabel"
      [checked]="checked"
      [defaultChecked]="defaultChecked"
      [disabled]="disabled"
      [inlineLabel]="inlineLabel"
      [theme]="theme"
      [styles]="styles"
      [keytipProps]="keytipProps"
      [Change]="onChangeHandler"
    >
    </Toggle>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabToggleComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
FabToggleComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    as: [{ type: Input }],
    componentRef: [{ type: Input }],
    label: [{ type: Input }],
    onText: [{ type: Input, args: ['onnText',] }],
    offText: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    checked: [{ type: Input }],
    defaultChecked: [{ type: Input }],
    disabled: [{ type: Input }],
    inlineLabel: [{ type: Input }],
    theme: [{ type: Input }],
    styles: [{ type: Input }],
    keytipProps: [{ type: Input }],
    onChange: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabToggleComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabToggleComponent.prototype.as;
    /** @type {?} */
    FabToggleComponent.prototype.componentRef;
    /** @type {?} */
    FabToggleComponent.prototype.label;
    /**
     * Counterpart of `IToggleProps['onText']`.
     * Angular doesn't allow Inputs to be prefixed with "on", so this is misspelled as "onn".
     * @type {?}
     */
    FabToggleComponent.prototype.onText;
    /** @type {?} */
    FabToggleComponent.prototype.offText;
    /** @type {?} */
    FabToggleComponent.prototype.ariaLabel;
    /** @type {?} */
    FabToggleComponent.prototype.checked;
    /** @type {?} */
    FabToggleComponent.prototype.defaultChecked;
    /** @type {?} */
    FabToggleComponent.prototype.disabled;
    /** @type {?} */
    FabToggleComponent.prototype.inlineLabel;
    /** @type {?} */
    FabToggleComponent.prototype.theme;
    /** @type {?} */
    FabToggleComponent.prototype.styles;
    /** @type {?} */
    FabToggleComponent.prototype.keytipProps;
    /** @type {?} */
    FabToggleComponent.prototype.onChange;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components = [FabToggleComponent];
class FabToggleModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Toggle', (/**
         * @return {?}
         */
        () => Toggle));
    }
}
FabToggleModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components,
                exports: components,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabToggleModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FabToggleComponent, FabToggleModule };
//# sourceMappingURL=angular-react-fabric-lib-components-toggle.js.map
