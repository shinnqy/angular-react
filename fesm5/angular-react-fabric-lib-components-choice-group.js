import { __extends } from 'tslib';
import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { EventEmitter, Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, ViewChild, Input, Output, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChoiceGroup } from 'office-ui-fabric-react/lib/ChoiceGroup';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabChoiceGroupComponent = /** @class */ (function (_super) {
    __extends(FabChoiceGroupComponent, _super);
    function FabChoiceGroupComponent(elementRef, changeDetectorRef, renderer) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer) || this;
        _this.onChanged = new EventEmitter();
        _this.onChange = new EventEmitter();
        _this.onChangedHandler = _this.onChangedHandler.bind(_this);
        _this.onChangeHandler = _this.onChangeHandler.bind(_this);
        return _this;
    }
    /**
     * @param {?} option
     * @param {?=} evt
     * @return {?}
     */
    FabChoiceGroupComponent.prototype.onChangedHandler = /**
     * @param {?} option
     * @param {?=} evt
     * @return {?}
     */
    function (option, evt) {
        this.onChanged.emit({
            option: option,
            evt: evt && evt.nativeEvent,
        });
    };
    /**
     * @param {?=} ev
     * @param {?=} option
     * @return {?}
     */
    FabChoiceGroupComponent.prototype.onChangeHandler = /**
     * @param {?=} ev
     * @param {?=} option
     * @return {?}
     */
    function (ev, option) {
        this.onChange.emit({
            ev: ev && ev.nativeEvent,
            option: option,
        });
    };
    FabChoiceGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-choice-group',
                    exportAs: 'fabChoiceGroup',
                    template: "\n    <ChoiceGroup\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [options]=\"options\"\n      [defaultSelectedKey]=\"defaultSelectedKey\"\n      [selectedKey]=\"selectedKey\"\n      [label]=\"label\"\n      [required]=\"required\"\n      [theme]=\"theme\"\n      [styles]=\"styles\"\n      [ariaLabelledBy]=\"ariaLabelledBy\"\n      [Changed]=\"onChangedHandler\"\n      [Change]=\"onChangeHandler\"\n    >\n    </ChoiceGroup>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabChoiceGroupComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
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
    return FabChoiceGroupComponent;
}(ReactWrapperComponent));
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
var components = [FabChoiceGroupComponent];
var FabChoiceGroupModule = /** @class */ (function () {
    function FabChoiceGroupModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('ChoiceGroup', (/**
         * @return {?}
         */
        function () { return ChoiceGroup; }));
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
    FabChoiceGroupModule.ctorParameters = function () { return []; };
    return FabChoiceGroupModule;
}());

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
