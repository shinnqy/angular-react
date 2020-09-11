import { __extends } from 'tslib';
import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, ViewChild, Input, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabLinkComponent = /** @class */ (function (_super) {
    __extends(FabLinkComponent, _super);
    function FabLinkComponent(elementRef, changeDetectorRef, renderer) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer) || this;
        _this.LinkType = Link;
        return _this;
    }
    FabLinkComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-link',
                    exportAs: 'fabLink',
                    template: "\n    <Disguise\n      #reactNode\n      [disguiseRootAs]=\"LinkType\"\n      [href]=\"href\"\n      [type]=\"type\"\n      [download]=\"download\"\n      [hrefLang]=\"hrefLang\"\n      [media]=\"media\"\n      [rel]=\"rel\"\n      [target]=\"target\"\n      [autoFocus]=\"autoFocus\"\n      [form]=\"form\"\n      [formAction]=\"formAction\"\n      [formEncType]=\"formEncType\"\n      [formMethod]=\"formMethod\"\n      [formNoValidate]=\"formNoValidate\"\n      [formTarget]=\"formTarget\"\n      [name]=\"name\"\n      [value]=\"value\"\n      [as]=\"linkAs\"\n      [componentRef]=\"componentRef\"\n      [disabled]=\"disabled\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [keytipProps]=\"keytipProps\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </Disguise>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabLinkComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
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
    return FabLinkComponent;
}(ReactWrapperComponent));
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
var components = [FabLinkComponent];
var FabLinkModule = /** @class */ (function () {
    function FabLinkModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Link', (/**
         * @return {?}
         */
        function () { return Link; }));
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
    FabLinkModule.ctorParameters = function () { return []; };
    return FabLinkModule;
}());

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
