import { CommonModule } from '@angular/common';
import { Directive, ContentChild, TemplateRef, EventEmitter, ElementRef, ContentChildren, Input, Output, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { __extends, __assign } from 'tslib';
import { getDataAttributes } from '@angular-react/fabric/lib/utils';
import { ChangeableItemsHelper, ChangeableItemDirective } from '@angular-react/fabric/lib/components/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Wrapper directive to allow rendering a custom item to a ContextualMenuItem.
 */
var ContextualMenuItemRenderDirective = /** @class */ (function () {
    function ContextualMenuItemRenderDirective() {
    }
    ContextualMenuItemRenderDirective.decorators = [
        { type: Directive, args: [{ selector: 'fab-command-bar-item > render' },] }
    ];
    ContextualMenuItemRenderDirective.propDecorators = {
        templateRef: [{ type: ContentChild, args: [TemplateRef, { static: false },] }]
    };
    return ContextualMenuItemRenderDirective;
}());
if (false) {
    /** @type {?} */
    ContextualMenuItemRenderDirective.prototype.templateRef;
}
/**
 * Wrapper directive to allow rendering a custom icon to a ContextualMenuItem.
 */
var ContextualMenuItemRenderIconDirective = /** @class */ (function () {
    function ContextualMenuItemRenderIconDirective() {
    }
    ContextualMenuItemRenderIconDirective.decorators = [
        { type: Directive, args: [{ selector: 'fab-command-bar-item > render-icon' },] }
    ];
    ContextualMenuItemRenderIconDirective.propDecorators = {
        templateRef: [{ type: ContentChild, args: [TemplateRef, { static: false },] }]
    };
    return ContextualMenuItemRenderIconDirective;
}());
if (false) {
    /** @type {?} */
    ContextualMenuItemRenderIconDirective.prototype.templateRef;
}
var ContextualMenuItemDirective = /** @class */ (function (_super) {
    __extends(ContextualMenuItemDirective, _super);
    function ContextualMenuItemDirective(elementRef) {
        var _this = _super.call(this) || this;
        _this.elementRef = elementRef;
        _this.click = new EventEmitter();
        return _this;
    }
    Object.defineProperty(ContextualMenuItemDirective.prototype, "onChildItemChanged", {
        get: /**
         * @return {?}
         */
        function () {
            return this._changeableItemsHelper && this._changeableItemsHelper.onChildItemChanged;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContextualMenuItemDirective.prototype, "onItemsChanged", {
        get: /**
         * @return {?}
         */
        function () {
            return this._changeableItemsHelper && this._changeableItemsHelper.onItemsChanged;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ContextualMenuItemDirective.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.renderDirective && this.renderDirective.templateRef) {
            this.render = this.renderDirective.templateRef;
        }
        if (this.renderIconDirective && this.renderIconDirective.templateRef) {
            this.renderIcon = this.renderIconDirective.templateRef;
        }
        this._changeableItemsHelper = new ChangeableItemsHelper(this.menuItemsDirectives, this, (/**
         * @param {?} nonSelfDirective
         * @return {?}
         */
        function (nonSelfDirective) {
            /** @type {?} */
            var items = nonSelfDirective.map((/**
             * @param {?} directive
             * @return {?}
             */
            function (directive) { return _this._directiveToContextualMenuItem((/** @type {?} */ (directive))); }));
            if (!_this.subMenuProps) {
                _this.subMenuProps = { items: items };
            }
            else {
                _this.subMenuProps.items = items;
            }
        }));
    };
    /**
     * @return {?}
     */
    ContextualMenuItemDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._changeableItemsHelper.destroy();
    };
    /**
     * @private
     * @param {?} directive
     * @return {?}
     */
    ContextualMenuItemDirective.prototype._directiveToContextualMenuItem = /**
     * @private
     * @param {?} directive
     * @return {?}
     */
    function (directive) {
        return __assign({}, directive, getDataAttributes(directive.elementRef.nativeElement, true), { onClick: (/**
             * @param {?} ev
             * @param {?} item
             * @return {?}
             */
            function (ev, item) {
                directive.click.emit({ ev: ev && ev.nativeEvent, item: item });
            }) });
    };
    ContextualMenuItemDirective.decorators = [
        { type: Directive, args: [{ selector: 'contextual-menu-item' },] }
    ];
    /** @nocollapse */
    ContextualMenuItemDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    ContextualMenuItemDirective.propDecorators = {
        menuItemsDirectives: [{ type: ContentChildren, args: [ContextualMenuItemDirective,] }],
        renderDirective: [{ type: ContentChild, args: [ContextualMenuItemRenderDirective, { static: false },] }],
        renderIconDirective: [{ type: ContentChild, args: [ContextualMenuItemRenderIconDirective, { static: false },] }],
        componentRef: [{ type: Input }],
        text: [{ type: Input }],
        secondaryText: [{ type: Input }],
        itemType: [{ type: Input }],
        iconProps: [{ type: Input }],
        submenuIconProps: [{ type: Input }],
        disabled: [{ type: Input }],
        primaryDisabled: [{ type: Input }],
        shortCut: [{ type: Input }],
        canCheck: [{ type: Input }],
        checked: [{ type: Input }],
        split: [{ type: Input }],
        data: [{ type: Input }],
        href: [{ type: Input }],
        target: [{ type: Input }],
        rel: [{ type: Input }],
        subMenuProps: [{ type: Input }],
        getItemClassNames: [{ type: Input }],
        itemProps: [{ type: Input }],
        getSplitButtonVerticalDividerClassNames: [{ type: Input }],
        sectionProps: [{ type: Input }],
        className: [{ type: Input }],
        style: [{ type: Input }],
        ariaLabel: [{ type: Input }],
        title: [{ type: Input }],
        onMouseDown: [{ type: Input }],
        role: [{ type: Input }],
        customOnRenderListLength: [{ type: Input }],
        keytipProps: [{ type: Input }],
        inactive: [{ type: Input }],
        name: [{ type: Input }],
        render: [{ type: Input }],
        renderIcon: [{ type: Input }],
        click: [{ type: Output }],
        onChildItemChanged: [{ type: Output }],
        onItemsChanged: [{ type: Output }]
    };
    return ContextualMenuItemDirective;
}(ChangeableItemDirective));
if (false) {
    /** @type {?} */
    ContextualMenuItemDirective.prototype.menuItemsDirectives;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.renderDirective;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.renderIconDirective;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.componentRef;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.text;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.secondaryText;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.itemType;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.iconProps;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.submenuIconProps;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.disabled;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.primaryDisabled;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.shortCut;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.canCheck;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.checked;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.split;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.data;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.href;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.target;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.rel;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.subMenuProps;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.getItemClassNames;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.itemProps;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.getSplitButtonVerticalDividerClassNames;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.sectionProps;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.className;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.style;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.ariaLabel;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.title;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.onMouseDown;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.role;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.customOnRenderListLength;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.keytipProps;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.inactive;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.name;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.render;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.renderIcon;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.click;
    /**
     * @type {?}
     * @private
     */
    ContextualMenuItemDirective.prototype._changeableItemsHelper;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.elementRef;
}
/**
 * @record
 * @template TData
 */
function IContextualMenuItemOptions() { }
if (false) {
    /** @type {?|undefined} */
    IContextualMenuItemOptions.prototype.renderIcon;
    /** @type {?|undefined} */
    IContextualMenuItemOptions.prototype.render;
    /** @type {?|undefined} */
    IContextualMenuItemOptions.prototype.data;
    /* Skipping unhandled member: [propertyName: string]: any;*/
}
/**
 * @record
 */
function IContextualMenuItemOptionsRenderContext() { }
if (false) {
    /** @type {?} */
    IContextualMenuItemOptionsRenderContext.prototype.item;
    /** @type {?} */
    IContextualMenuItemOptionsRenderContext.prototype.dismissMenu;
}
/**
 * @record
 */
function IContextualMenuItemOptionsRenderIconContext() { }
if (false) {
    /** @type {?} */
    IContextualMenuItemOptionsRenderIconContext.prototype.contextualMenuItem;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var components = [
    ContextualMenuItemDirective,
    ContextualMenuItemRenderDirective,
    ContextualMenuItemRenderIconDirective,
];
var FabContextualMenuModule = /** @class */ (function () {
    function FabContextualMenuModule() {
    }
    FabContextualMenuModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: components,
                    exports: components,
                    schemas: [NO_ERRORS_SCHEMA],
                },] }
    ];
    return FabContextualMenuModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ContextualMenuItemDirective, ContextualMenuItemRenderDirective, ContextualMenuItemRenderIconDirective, FabContextualMenuModule };
//# sourceMappingURL=angular-react-fabric-lib-components-contextual-menu.js.map
