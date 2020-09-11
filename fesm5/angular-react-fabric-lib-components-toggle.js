import { __extends } from 'tslib';
import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { EventEmitter, Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, ViewChild, Input, Output, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabToggleComponent = /** @class */ (function (_super) {
    __extends(FabToggleComponent, _super);
    function FabToggleComponent(elementRef, changeDetectorRef, renderer) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer) || this;
        _this.onChange = new EventEmitter();
        _this.onChangeHandler = _this.onChangeHandler.bind(_this);
        return _this;
    }
    /**
     * @param {?} event
     * @param {?=} checked
     * @return {?}
     */
    FabToggleComponent.prototype.onChangeHandler = /**
     * @param {?} event
     * @param {?=} checked
     * @return {?}
     */
    function (event, checked) {
        this.onChange.emit({
            event: event && event.nativeEvent,
            checked: checked,
        });
    };
    FabToggleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-toggle',
                    exportAs: 'fabToggle',
                    template: "\n    <Toggle\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [label]=\"label\"\n      [Text]=\"onText\"\n      [offText]=\"offText\"\n      [ariaLabel]=\"ariaLabel\"\n      [checked]=\"checked\"\n      [defaultChecked]=\"defaultChecked\"\n      [disabled]=\"disabled\"\n      [inlineLabel]=\"inlineLabel\"\n      [theme]=\"theme\"\n      [styles]=\"styles\"\n      [keytipProps]=\"keytipProps\"\n      [Change]=\"onChangeHandler\"\n    >\n    </Toggle>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabToggleComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
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
    return FabToggleComponent;
}(ReactWrapperComponent));
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
var components = [FabToggleComponent];
var FabToggleModule = /** @class */ (function () {
    function FabToggleModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Toggle', (/**
         * @return {?}
         */
        function () { return Toggle; }));
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
    FabToggleModule.ctorParameters = function () { return []; };
    return FabToggleModule;
}());

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
