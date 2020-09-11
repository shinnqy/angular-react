import { __decorate, __metadata } from 'tslib';
import { ReactWrapperComponent, passProp, registerElement } from '@angular-react/core';
import { Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, NgZone, ViewChild, Input, EventEmitter, ContentChildren, Output, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabPivotItemComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, { ngZone, setHostDisplay: true });
        this.disabled = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onRenderItemLink = this.createRenderPropHandler(this.renderItemLink);
    }
}
FabPivotItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-pivot-item',
                exportAs: 'fabPivotItem',
                template: `
    <PivotItem
      #reactNode
      [componentRef]="componentRef"
      [headerText]="headerText"
      [headerButtonProps]="headerButtonProps"
      [itemKey]="itemKey"
      [ariaLabel]="ariaLabel"
      [itemCount]="itemCount"
      [itemIcon]="itemIcon"
      [keytipProps]="keytipProps"
      [RenderItemLink]="renderItemLink && onRenderItemLink"
    >
      <ReactContent><ng-content></ng-content></ReactContent>
    </PivotItem>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabPivotItemComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
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
class FabPivotComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer, { setHostDisplay: true });
        this.PivotType = Pivot;
        this.PivotItemType = PivotItem;
        this.onLinkClick = new EventEmitter();
        this.onLinkClickHandler = this.onLinkClickHandler.bind(this);
    }
    /**
     * @param {?=} item
     * @param {?=} ev
     * @return {?}
     */
    onLinkClickHandler(item, ev) {
        this.onLinkClick.emit({
            ev: ev && ev.nativeEvent,
            item: item,
        });
    }
}
FabPivotComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-pivot',
                exportAs: 'fabPivot',
                template: `
    <Disguise
      #reactNode
      [disguiseRootAs]="PivotType"
      [disguiseChildrenAs]="PivotItemType"
      [ngChildComponents]="children || pivotItems?.toArray()"
      [componentRef]="componentRef"
      [styles]="styles"
      [theme]="theme"
      [className]="className"
      [defaultSelectedKey]="defaultSelectedKey"
      [defaultSelectedIndex]="defaultSelectedIndex"
      [selectedKey]="selectedKey"
      [linkSize]="linkSize"
      [linkFormat]="linkFormat"
      [headersOnly]="headersOnly"
      [getTabId]="getTabId"
      [LinkClick]="onLinkClickHandler"
    >
      <ReactContent><ng-content select="fab-pivot-item"></ng-content></ReactContent>
    </Disguise>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabPivotComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
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
const components = [FabPivotComponent, FabPivotItemComponent];
class FabPivotModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Pivot', (/**
         * @return {?}
         */
        () => Pivot));
        registerElement('PivotItem', (/**
         * @return {?}
         */
        () => PivotItem));
    }
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
FabPivotModule.ctorParameters = () => [];

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
