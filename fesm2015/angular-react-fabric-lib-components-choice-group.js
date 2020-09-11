import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { EventEmitter, Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, ViewChild, Input, Output, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChoiceGroup } from 'office-ui-fabric-react/lib/ChoiceGroup';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabChoiceGroupComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer);
        this.onChanged = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onChangedHandler = this.onChangedHandler.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }
    /**
     * @param {?} option
     * @param {?=} evt
     * @return {?}
     */
    onChangedHandler(option, evt) {
        this.onChanged.emit({
            option,
            evt: evt && evt.nativeEvent,
        });
    }
    /**
     * @param {?=} ev
     * @param {?=} option
     * @return {?}
     */
    onChangeHandler(ev, option) {
        this.onChange.emit({
            ev: ev && ev.nativeEvent,
            option,
        });
    }
}
FabChoiceGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-choice-group',
                exportAs: 'fabChoiceGroup',
                template: `
    <ChoiceGroup
      #reactNode
      [componentRef]="componentRef"
      [options]="options"
      [defaultSelectedKey]="defaultSelectedKey"
      [selectedKey]="selectedKey"
      [label]="label"
      [required]="required"
      [theme]="theme"
      [styles]="styles"
      [ariaLabelledBy]="ariaLabelledBy"
      [Changed]="onChangedHandler"
      [Change]="onChangeHandler"
    >
    </ChoiceGroup>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabChoiceGroupComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
FabChoiceGroupComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    componentRef: [{ type: Input }],
    options: [{ type: Input }],
    defaultSelectedKey: [{ type: Input }],
    selectedKey: [{ type: Input }],
    label: [{ type: Input }],
    theme: [{ type: Input }],
    styles: [{ type: Input }],
    ariaLabelledBy: [{ type: Input }],
    required: [{ type: Input }],
    onChanged: [{ type: Output }],
    onChange: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabChoiceGroupComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabChoiceGroupComponent.prototype.componentRef;
    /** @type {?} */
    FabChoiceGroupComponent.prototype.options;
    /** @type {?} */
    FabChoiceGroupComponent.prototype.defaultSelectedKey;
    /** @type {?} */
    FabChoiceGroupComponent.prototype.selectedKey;
    /** @type {?} */
    FabChoiceGroupComponent.prototype.label;
    /** @type {?} */
    FabChoiceGroupComponent.prototype.theme;
    /** @type {?} */
    FabChoiceGroupComponent.prototype.styles;
    /** @type {?} */
    FabChoiceGroupComponent.prototype.ariaLabelledBy;
    /**
     * HTML Input props
     * @type {?}
     */
    FabChoiceGroupComponent.prototype.required;
    /** @type {?} */
    FabChoiceGroupComponent.prototype.onChanged;
    /** @type {?} */
    FabChoiceGroupComponent.prototype.onChange;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components = [FabChoiceGroupComponent];
class FabChoiceGroupModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('ChoiceGroup', (/**
         * @return {?}
         */
        () => ChoiceGroup));
    }
}
FabChoiceGroupModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components,
                exports: components,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabChoiceGroupModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FabChoiceGroupComponent, FabChoiceGroupModule };
//# sourceMappingURL=angular-react-fabric-lib-components-choice-group.js.map
