import { __extends, __decorate, __metadata } from 'tslib';
import { passProp, ReactWrapperComponent, registerElement } from '@angular-react/core';
import { Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, NgZone, ViewChild, Input, EventEmitter, ContentChildren, Output, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabPivotItemComponent = /** @class */ (function (_super) {
    __extends(FabPivotItemComponent, _super);
    function FabPivotItemComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone, setHostDisplay: true }) || this;
        _this.disabled = false;
        return _this;
    }
    /**
     * @return {?}
     */
    FabPivotItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onRenderItemLink = this.createRenderPropHandler(this.renderItemLink);
    };
    FabPivotItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-pivot-item',
                    exportAs: 'fabPivotItem',
                    template: "\n    <PivotItem\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [headerText]=\"headerText\"\n      [headerButtonProps]=\"headerButtonProps\"\n      [itemKey]=\"itemKey\"\n      [ariaLabel]=\"ariaLabel\"\n      [itemCount]=\"itemCount\"\n      [itemIcon]=\"itemIcon\"\n      [keytipProps]=\"keytipProps\"\n      [RenderItemLink]=\"renderItemLink && onRenderItemLink\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </PivotItem>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabPivotItemComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    FabPivotItemComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
        disabled: [{ type: Input }],
        componentRef: [{ type: Input }],
        headerText: [{ type: Input }],
        headerButtonProps: [{ type: Input }],
        itemKey: [{ type: Input }],
        ariaLabel: [{ type: Input }],
        itemCount: [{ type: Input }],
        itemIcon: [{ type: Input }],
        keytipProps: [{ type: Input }],
        renderItemLink: [{ type: Input }]
    };
    __decorate([
        passProp(),
        __metadata("design:type", Object)
    ], FabPivotItemComponent.prototype, "componentRef", void 0);
    __decorate([
        passProp(),
        __metadata("design:type", Object)
    ], FabPivotItemComponent.prototype, "headerText", void 0);
    __decorate([
        passProp(),
        __metadata("design:type", Object)
    ], FabPivotItemComponent.prototype, "headerButtonProps", void 0);
    __decorate([
        passProp(),
        __metadata("design:type", Object)
    ], FabPivotItemComponent.prototype, "itemKey", void 0);
    __decorate([
        passProp(),
        __metadata("design:type", Object)
    ], FabPivotItemComponent.prototype, "ariaLabel", void 0);
    __decorate([
        passProp(),
        __metadata("design:type", Object)
    ], FabPivotItemComponent.prototype, "itemCount", void 0);
    __decorate([
        passProp(),
        __metadata("design:type", Object)
    ], FabPivotItemComponent.prototype, "itemIcon", void 0);
    __decorate([
        passProp(),
        __metadata("design:type", Object)
    ], FabPivotItemComponent.prototype, "keytipProps", void 0);
    __decorate([
        passProp(),
        __metadata("design:type", Object)
    ], FabPivotItemComponent.prototype, "renderItemLink", void 0);
    __decorate([
        passProp(),
        __metadata("design:type", Function)
    ], FabPivotItemComponent.prototype, "onRenderItemLink", void 0);
    return FabPivotItemComponent;
}(ReactWrapperComponent));
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabPivotItemComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabPivotItemComponent.prototype.disabled;
    /** @type {?} */
    FabPivotItemComponent.prototype.componentRef;
    /** @type {?} */
    FabPivotItemComponent.prototype.headerText;
    /** @type {?} */
    FabPivotItemComponent.prototype.headerButtonProps;
    /** @type {?} */
    FabPivotItemComponent.prototype.itemKey;
    /** @type {?} */
    FabPivotItemComponent.prototype.ariaLabel;
    /** @type {?} */
    FabPivotItemComponent.prototype.itemCount;
    /** @type {?} */
    FabPivotItemComponent.prototype.itemIcon;
    /** @type {?} */
    FabPivotItemComponent.prototype.keytipProps;
    /** @type {?} */
    FabPivotItemComponent.prototype.renderItemLink;
    /** @type {?} */
    FabPivotItemComponent.prototype.onRenderItemLink;
}
var FabPivotComponent = /** @class */ (function (_super) {
    __extends(FabPivotComponent, _super);
    function FabPivotComponent(elementRef, changeDetectorRef, renderer) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { setHostDisplay: true }) || this;
        _this.PivotType = Pivot;
        _this.PivotItemType = PivotItem;
        _this.onLinkClick = new EventEmitter();
        _this.onLinkClickHandler = _this.onLinkClickHandler.bind(_this);
        return _this;
    }
    /**
     * @param {?=} item
     * @param {?=} ev
     * @return {?}
     */
    FabPivotComponent.prototype.onLinkClickHandler = /**
     * @param {?=} item
     * @param {?=} ev
     * @return {?}
     */
    function (item, ev) {
        this.onLinkClick.emit({
            ev: ev && ev.nativeEvent,
            item: item,
        });
    };
    FabPivotComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-pivot',
                    exportAs: 'fabPivot',
                    template: "\n    <Disguise\n      #reactNode\n      [disguiseRootAs]=\"PivotType\"\n      [disguiseChildrenAs]=\"PivotItemType\"\n      [ngChildComponents]=\"children || pivotItems?.toArray()\"\n      [componentRef]=\"componentRef\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [className]=\"className\"\n      [defaultSelectedKey]=\"defaultSelectedKey\"\n      [defaultSelectedIndex]=\"defaultSelectedIndex\"\n      [selectedKey]=\"selectedKey\"\n      [linkSize]=\"linkSize\"\n      [linkFormat]=\"linkFormat\"\n      [headersOnly]=\"headersOnly\"\n      [getTabId]=\"getTabId\"\n      [LinkClick]=\"onLinkClickHandler\"\n    >\n      <ReactContent><ng-content select=\"fab-pivot-item\"></ng-content></ReactContent>\n    </Disguise>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabPivotComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    FabPivotComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
        pivotItems: [{ type: ContentChildren, args: [FabPivotItemComponent,] }],
        componentRef: [{ type: Input }],
        styles: [{ type: Input }],
        theme: [{ type: Input }],
        className: [{ type: Input }],
        defaultSelectedKey: [{ type: Input }],
        defaultSelectedIndex: [{ type: Input }],
        selectedKey: [{ type: Input }],
        linkSize: [{ type: Input }],
        linkFormat: [{ type: Input }],
        headersOnly: [{ type: Input }],
        getTabId: [{ type: Input }],
        children: [{ type: Input }],
        onLinkClick: [{ type: Output }]
    };
    return FabPivotComponent;
}(ReactWrapperComponent));
if (false) {
    /** @type {?} */
    FabPivotComponent.prototype.PivotType;
    /** @type {?} */
    FabPivotComponent.prototype.PivotItemType;
    /**
     * @type {?}
     * @protected
     */
    FabPivotComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabPivotComponent.prototype.pivotItems;
    /** @type {?} */
    FabPivotComponent.prototype.componentRef;
    /** @type {?} */
    FabPivotComponent.prototype.styles;
    /** @type {?} */
    FabPivotComponent.prototype.theme;
    /** @type {?} */
    FabPivotComponent.prototype.className;
    /** @type {?} */
    FabPivotComponent.prototype.defaultSelectedKey;
    /** @type {?} */
    FabPivotComponent.prototype.defaultSelectedIndex;
    /** @type {?} */
    FabPivotComponent.prototype.selectedKey;
    /** @type {?} */
    FabPivotComponent.prototype.linkSize;
    /** @type {?} */
    FabPivotComponent.prototype.linkFormat;
    /** @type {?} */
    FabPivotComponent.prototype.headersOnly;
    /** @type {?} */
    FabPivotComponent.prototype.getTabId;
    /** @type {?} */
    FabPivotComponent.prototype.children;
    /** @type {?} */
    FabPivotComponent.prototype.onLinkClick;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var components = [FabPivotComponent, FabPivotItemComponent];
var FabPivotModule = /** @class */ (function () {
    function FabPivotModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Pivot', (/**
         * @return {?}
         */
        function () { return Pivot; }));
        registerElement('PivotItem', (/**
         * @return {?}
         */
        function () { return PivotItem; }));
    }
    FabPivotModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: components,
                    exports: components,
                    schemas: [NO_ERRORS_SCHEMA],
                },] }
    ];
    /** @nocollapse */
    FabPivotModule.ctorParameters = function () { return []; };
    return FabPivotModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FabPivotComponent, FabPivotItemComponent, FabPivotModule };
//# sourceMappingURL=angular-react-fabric-lib-components-pivot.js.map
