import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { EventEmitter, Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, NgZone, ViewChild, Input, Output, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabCheckboxComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, { ngZone });
        this.onChange = new EventEmitter();
        /* Non-React props, more native support for Angular */
        // support for two-way data binding for `@Input() checked`.
        this.checkedChange = new EventEmitter();
        // coming from React context - we need to bind to this so we can access the Angular Component properties
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onRenderLabel = this.createRenderPropHandler(this.renderLabel);
    }
    /**
     * @param {?=} ev
     * @param {?=} checked
     * @return {?}
     */
    onChangeHandler(ev, checked) {
        this.onChange.emit({
            ev: ev && ev.nativeEvent,
            checked,
        });
        this.checkedChange.emit(checked);
    }
}
FabCheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-checkbox',
                exportAs: 'fabCheckbox',
                template: `
    <Checkbox
      #reactNode
      [componentRef]="componentRef"
      [className]="className"
      [checked]="checked"
      [defaultChecked]="defaultChecked"
      [label]="label"
      [disabled]="disabled"
      [inputProps]="inputProps"
      [boxSide]="boxSide"
      [theme]="theme"
      [ariaLabel]="ariaLabel"
      [ariaLabelledBy]="ariaLabelledBy"
      [ariaDescribedBy]="ariaDescribedBy"
      [ariaPositionInSet]="ariaPositionInSet"
      [ariaSetSize]="ariaSetSize"
      [checkmarkIconProps]="checkmarkIconProps"
      [keytipProps]="keytipProps"
      [styles]="styles"
      [RenderLabel]="renderLabel && onRenderLabel"
      [Change]="onChangeHandler"
    >
    </Checkbox>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabCheckboxComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabCheckboxComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    componentRef: [{ type: Input }],
    className: [{ type: Input }],
    checked: [{ type: Input }],
    defaultChecked: [{ type: Input }],
    label: [{ type: Input }],
    disabled: [{ type: Input }],
    inputProps: [{ type: Input }],
    boxSide: [{ type: Input }],
    theme: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    ariaLabelledBy: [{ type: Input }],
    ariaDescribedBy: [{ type: Input }],
    ariaPositionInSet: [{ type: Input }],
    ariaSetSize: [{ type: Input }],
    checkmarkIconProps: [{ type: Input }],
    keytipProps: [{ type: Input }],
    styles: [{ type: Input }],
    renderLabel: [{ type: Input }],
    onChange: [{ type: Output }],
    checkedChange: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabCheckboxComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabCheckboxComponent.prototype.componentRef;
    /** @type {?} */
    FabCheckboxComponent.prototype.className;
    /** @type {?} */
    FabCheckboxComponent.prototype.checked;
    /** @type {?} */
    FabCheckboxComponent.prototype.defaultChecked;
    /** @type {?} */
    FabCheckboxComponent.prototype.label;
    /** @type {?} */
    FabCheckboxComponent.prototype.disabled;
    /** @type {?} */
    FabCheckboxComponent.prototype.inputProps;
    /** @type {?} */
    FabCheckboxComponent.prototype.boxSide;
    /** @type {?} */
    FabCheckboxComponent.prototype.theme;
    /** @type {?} */
    FabCheckboxComponent.prototype.ariaLabel;
    /** @type {?} */
    FabCheckboxComponent.prototype.ariaLabelledBy;
    /** @type {?} */
    FabCheckboxComponent.prototype.ariaDescribedBy;
    /** @type {?} */
    FabCheckboxComponent.prototype.ariaPositionInSet;
    /** @type {?} */
    FabCheckboxComponent.prototype.ariaSetSize;
    /** @type {?} */
    FabCheckboxComponent.prototype.checkmarkIconProps;
    /** @type {?} */
    FabCheckboxComponent.prototype.keytipProps;
    /** @type {?} */
    FabCheckboxComponent.prototype.styles;
    /** @type {?} */
    FabCheckboxComponent.prototype.renderLabel;
    /** @type {?} */
    FabCheckboxComponent.prototype.onChange;
    /** @type {?} */
    FabCheckboxComponent.prototype.checkedChange;
    /** @type {?} */
    FabCheckboxComponent.prototype.onRenderLabel;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components = [FabCheckboxComponent];
class FabCheckboxModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Checkbox', (/**
         * @return {?}
         */
        () => Checkbox));
    }
}
FabCheckboxModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components,
                exports: components,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabCheckboxModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FabCheckboxComponent, FabCheckboxModule };
//# sourceMappingURL=angular-react-fabric-lib-components-checkbox.js.map
