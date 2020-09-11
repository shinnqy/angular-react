import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, ViewChild, Input, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabLinkComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer);
        this.LinkType = Link;
    }
}
FabLinkComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-link',
                exportAs: 'fabLink',
                template: `
    <Disguise
      #reactNode
      [disguiseRootAs]="LinkType"
      [href]="href"
      [type]="type"
      [download]="download"
      [hrefLang]="hrefLang"
      [media]="media"
      [rel]="rel"
      [target]="target"
      [autoFocus]="autoFocus"
      [form]="form"
      [formAction]="formAction"
      [formEncType]="formEncType"
      [formMethod]="formMethod"
      [formNoValidate]="formNoValidate"
      [formTarget]="formTarget"
      [name]="name"
      [value]="value"
      [as]="linkAs"
      [componentRef]="componentRef"
      [disabled]="disabled"
      [styles]="styles"
      [theme]="theme"
      [keytipProps]="keytipProps"
    >
      <ReactContent><ng-content></ng-content></ReactContent>
    </Disguise>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabLinkComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
FabLinkComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    href: [{ type: Input }],
    type: [{ type: Input }],
    download: [{ type: Input }],
    hrefLang: [{ type: Input }],
    media: [{ type: Input }],
    rel: [{ type: Input }],
    target: [{ type: Input }],
    autoFocus: [{ type: Input }],
    form: [{ type: Input }],
    formAction: [{ type: Input }],
    formEncType: [{ type: Input }],
    formMethod: [{ type: Input }],
    formNoValidate: [{ type: Input }],
    formTarget: [{ type: Input }],
    name: [{ type: Input }],
    value: [{ type: Input }],
    componentRef: [{ type: Input }],
    disabled: [{ type: Input }],
    styles: [{ type: Input }],
    theme: [{ type: Input }],
    linkAs: [{ type: Input, args: ['as',] }],
    keytipProps: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FabLinkComponent.prototype.LinkType;
    /**
     * @type {?}
     * @protected
     */
    FabLinkComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabLinkComponent.prototype.href;
    /** @type {?} */
    FabLinkComponent.prototype.type;
    /** @type {?} */
    FabLinkComponent.prototype.download;
    /** @type {?} */
    FabLinkComponent.prototype.hrefLang;
    /** @type {?} */
    FabLinkComponent.prototype.media;
    /** @type {?} */
    FabLinkComponent.prototype.rel;
    /** @type {?} */
    FabLinkComponent.prototype.target;
    /** @type {?} */
    FabLinkComponent.prototype.autoFocus;
    /** @type {?} */
    FabLinkComponent.prototype.form;
    /** @type {?} */
    FabLinkComponent.prototype.formAction;
    /** @type {?} */
    FabLinkComponent.prototype.formEncType;
    /** @type {?} */
    FabLinkComponent.prototype.formMethod;
    /** @type {?} */
    FabLinkComponent.prototype.formNoValidate;
    /** @type {?} */
    FabLinkComponent.prototype.formTarget;
    /** @type {?} */
    FabLinkComponent.prototype.name;
    /** @type {?} */
    FabLinkComponent.prototype.value;
    /** @type {?} */
    FabLinkComponent.prototype.componentRef;
    /** @type {?} */
    FabLinkComponent.prototype.disabled;
    /** @type {?} */
    FabLinkComponent.prototype.styles;
    /** @type {?} */
    FabLinkComponent.prototype.theme;
    /** @type {?} */
    FabLinkComponent.prototype.linkAs;
    /** @type {?} */
    FabLinkComponent.prototype.keytipProps;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components = [FabLinkComponent];
class FabLinkModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Link', (/**
         * @return {?}
         */
        () => Link));
    }
}
FabLinkModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components,
                exports: components,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabLinkModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FabLinkComponent, FabLinkModule };
//# sourceMappingURL=angular-react-fabric-lib-components-link.js.map
