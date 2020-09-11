import { __extends } from 'tslib';
import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { EventEmitter, Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, NgZone, ViewChild, Input, Output, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupedList } from 'office-ui-fabric-react/lib/GroupedList';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabGroupedListComponent = /** @class */ (function (_super) {
    __extends(FabGroupedListComponent, _super);
    function FabGroupedListComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone }) || this;
        _this.onGroupExpandStateChanged = new EventEmitter();
        // coming from React context - we need to bind to this so we can access the Angular Component properties
        _this.onRenderCell = _this.onRenderCell.bind(_this);
        _this.onGroupExpandStateChangedHandler = _this.onGroupExpandStateChangedHandler.bind(_this);
        return _this;
    }
    /**
     * @return {?}
     */
    FabGroupedListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._renderCell = this.createInputJsxRenderer(this.renderCell);
    };
    /**
     * @param {?=} nestingDepth
     * @param {?=} item
     * @param {?=} index
     * @return {?}
     */
    FabGroupedListComponent.prototype.onRenderCell = /**
     * @param {?=} nestingDepth
     * @param {?=} item
     * @param {?=} index
     * @return {?}
     */
    function (nestingDepth, item, index) {
        return this._renderCell({ nestingDepth: nestingDepth, item: item, index: index });
    };
    /**
     * @param {?} isSomeGroupExpanded
     * @return {?}
     */
    FabGroupedListComponent.prototype.onGroupExpandStateChangedHandler = /**
     * @param {?} isSomeGroupExpanded
     * @return {?}
     */
    function (isSomeGroupExpanded) {
        this.onGroupExpandStateChanged.emit({
            isSomeGroupExpanded: isSomeGroupExpanded,
        });
    };
    FabGroupedListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-grouped-list',
                    exportAs: 'fabGroupedList',
                    template: "\n    <GroupedList\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [theme]=\"theme\"\n      [styles]=\"styles\"\n      [className]=\"className\"\n      [compact]=\"compact\"\n      [dragDropEvents]=\"dragDropEvents\"\n      [dragDropHelper]=\"dragDropHelper\"\n      [eventsToRegister]=\"eventsToRegister\"\n      [groupProps]=\"groupProps\"\n      [groups]=\"groups\"\n      [items]=\"items\"\n      [listProps]=\"listProps\"\n      [selection]=\"selection\"\n      [selectionMode]=\"selectionMode\"\n      [viewport]=\"viewport\"\n      [usePageCache]=\"usePageCache\"\n      [shouldVirtualize]=\"shouldVirtualize\"\n      [getGroupHeight]=\"getGroupHeight\"\n      [RenderCell]=\"renderCell && onRenderCell\"\n      [GroupExpandStateChanged]=\"onGroupExpandStateChangedHandler\"\n    >\n    </GroupedList>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabGroupedListComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    FabGroupedListComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
        componentRef: [{ type: Input }],
        theme: [{ type: Input }],
        styles: [{ type: Input }],
        className: [{ type: Input }],
        compact: [{ type: Input }],
        dragDropEvents: [{ type: Input }],
        dragDropHelper: [{ type: Input }],
        eventsToRegister: [{ type: Input }],
        groupProps: [{ type: Input }],
        groups: [{ type: Input }],
        items: [{ type: Input }],
        listProps: [{ type: Input }],
        selection: [{ type: Input }],
        selectionMode: [{ type: Input }],
        viewport: [{ type: Input }],
        usePageCache: [{ type: Input }],
        shouldVirtualize: [{ type: Input }],
        getGroupHeight: [{ type: Input }],
        renderCell: [{ type: Input }],
        onGroupExpandStateChanged: [{ type: Output }]
    };
    return FabGroupedListComponent;
}(ReactWrapperComponent));
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabGroupedListComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabGroupedListComponent.prototype.componentRef;
    /** @type {?} */
    FabGroupedListComponent.prototype.theme;
    /** @type {?} */
    FabGroupedListComponent.prototype.styles;
    /** @type {?} */
    FabGroupedListComponent.prototype.className;
    /** @type {?} */
    FabGroupedListComponent.prototype.compact;
    /** @type {?} */
    FabGroupedListComponent.prototype.dragDropEvents;
    /** @type {?} */
    FabGroupedListComponent.prototype.dragDropHelper;
    /** @type {?} */
    FabGroupedListComponent.prototype.eventsToRegister;
    /** @type {?} */
    FabGroupedListComponent.prototype.groupProps;
    /** @type {?} */
    FabGroupedListComponent.prototype.groups;
    /** @type {?} */
    FabGroupedListComponent.prototype.items;
    /** @type {?} */
    FabGroupedListComponent.prototype.listProps;
    /** @type {?} */
    FabGroupedListComponent.prototype.selection;
    /** @type {?} */
    FabGroupedListComponent.prototype.selectionMode;
    /** @type {?} */
    FabGroupedListComponent.prototype.viewport;
    /** @type {?} */
    FabGroupedListComponent.prototype.usePageCache;
    /** @type {?} */
    FabGroupedListComponent.prototype.shouldVirtualize;
    /** @type {?} */
    FabGroupedListComponent.prototype.getGroupHeight;
    /** @type {?} */
    FabGroupedListComponent.prototype.renderCell;
    /** @type {?} */
    FabGroupedListComponent.prototype.onGroupExpandStateChanged;
    /**
     * @type {?}
     * @private
     */
    FabGroupedListComponent.prototype._renderCell;
}
/**
 * @record
 */
function ICellRenderContext() { }
if (false) {
    /** @type {?|undefined} */
    ICellRenderContext.prototype.nestingDepth;
    /** @type {?|undefined} */
    ICellRenderContext.prototype.item;
    /** @type {?|undefined} */
    ICellRenderContext.prototype.index;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var components = [FabGroupedListComponent];
var FabGroupedListModule = /** @class */ (function () {
    function FabGroupedListModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('GroupedList', (/**
         * @return {?}
         */
        function () { return GroupedList; }));
    }
    FabGroupedListModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: components,
                    exports: components,
                    schemas: [NO_ERRORS_SCHEMA],
                },] }
    ];
    /** @nocollapse */
    FabGroupedListModule.ctorParameters = function () { return []; };
    return FabGroupedListModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FabGroupedListComponent, FabGroupedListModule };
//# sourceMappingURL=angular-react-fabric-lib-components-grouped-list.js.map
