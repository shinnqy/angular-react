import { __extends, __assign, __spread } from 'tslib';
import { Directive, ContentChild, TemplateRef, EventEmitter, Input, Output, ContentChildren, Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, NgZone, ViewChild, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { omit } from '@angular-react/fabric/lib/utils';
import { ChangeableItemDirective, ChangeableItemsDirective, mergeItemChanges } from '@angular-react/fabric/lib/components/core';
import { GroupItemDirective, FabGroupModule } from '@angular-react/fabric/lib/components/group';
import { CommonModule } from '@angular/common';
import { DetailsList } from 'office-ui-fabric-react/lib/DetailsList';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Wrapper directive for rendering a custom column to a DetailsListColumn
 */
var DetailsListColumnRenderDirective = /** @class */ (function () {
    function DetailsListColumnRenderDirective() {
    }
    DetailsListColumnRenderDirective.decorators = [
        { type: Directive, args: [{ selector: 'fab-details-list-column > render' },] }
    ];
    DetailsListColumnRenderDirective.propDecorators = {
        templateRef: [{ type: ContentChild, args: [TemplateRef, { static: false },] }]
    };
    return DetailsListColumnRenderDirective;
}());
if (false) {
    /** @type {?} */
    DetailsListColumnRenderDirective.prototype.templateRef;
}
/**
 * Wrapper directive for creating a DetailsListColumn
 */
var DetailsListColumnDirective = /** @class */ (function (_super) {
    __extends(DetailsListColumnDirective, _super);
    function DetailsListColumnDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Callback members
        _this.onColumnClick = new EventEmitter();
        _this.onColumnContextMenu = new EventEmitter();
        _this.onColumnResize = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    DetailsListColumnDirective.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        if (this.renderDirective && this.renderDirective.templateRef) {
            this.render = this.renderDirective.templateRef;
        }
    };
    DetailsListColumnDirective.decorators = [
        { type: Directive, args: [{ selector: 'fab-details-list-column' },] }
    ];
    DetailsListColumnDirective.propDecorators = {
        renderDirective: [{ type: ContentChild, args: [DetailsListColumnRenderDirective, { static: false },] }],
        name: [{ type: Input }],
        fieldName: [{ type: Input }],
        className: [{ type: Input }],
        minWidth: [{ type: Input }],
        ariaLabel: [{ type: Input }],
        isRowHeader: [{ type: Input }],
        maxWidth: [{ type: Input }],
        columnActionsMode: [{ type: Input }],
        iconName: [{ type: Input }],
        isIconOnly: [{ type: Input }],
        iconClassName: [{ type: Input }],
        isCollapsable: [{ type: Input }],
        isSorted: [{ type: Input }],
        isSortedDescending: [{ type: Input }],
        isResizable: [{ type: Input }],
        isMultiline: [{ type: Input }],
        onRender: [{ type: Input }],
        getValueKey: [{ type: Input }],
        onRenderDivider: [{ type: Input }],
        isFiltered: [{ type: Input }],
        isGrouped: [{ type: Input }],
        data: [{ type: Input }],
        calculatedWidth: [{ type: Input }],
        currentWidth: [{ type: Input }],
        headerClassName: [{ type: Input }],
        isPadded: [{ type: Input }],
        sortAscendingAriaLabel: [{ type: Input }],
        sortDescendingAriaLabel: [{ type: Input }],
        groupAriaLabel: [{ type: Input }],
        filterAriaLabel: [{ type: Input }],
        render: [{ type: Input }],
        onColumnClick: [{ type: Output }],
        onColumnContextMenu: [{ type: Output }],
        onColumnResize: [{ type: Output }]
    };
    return DetailsListColumnDirective;
}(ChangeableItemDirective));
if (false) {
    /** @type {?} */
    DetailsListColumnDirective.prototype.renderDirective;
    /** @type {?} */
    DetailsListColumnDirective.prototype.name;
    /** @type {?} */
    DetailsListColumnDirective.prototype.fieldName;
    /** @type {?} */
    DetailsListColumnDirective.prototype.className;
    /** @type {?} */
    DetailsListColumnDirective.prototype.minWidth;
    /** @type {?} */
    DetailsListColumnDirective.prototype.ariaLabel;
    /** @type {?} */
    DetailsListColumnDirective.prototype.isRowHeader;
    /** @type {?} */
    DetailsListColumnDirective.prototype.maxWidth;
    /** @type {?} */
    DetailsListColumnDirective.prototype.columnActionsMode;
    /** @type {?} */
    DetailsListColumnDirective.prototype.iconName;
    /** @type {?} */
    DetailsListColumnDirective.prototype.isIconOnly;
    /** @type {?} */
    DetailsListColumnDirective.prototype.iconClassName;
    /** @type {?} */
    DetailsListColumnDirective.prototype.isCollapsable;
    /** @type {?} */
    DetailsListColumnDirective.prototype.isSorted;
    /** @type {?} */
    DetailsListColumnDirective.prototype.isSortedDescending;
    /** @type {?} */
    DetailsListColumnDirective.prototype.isResizable;
    /** @type {?} */
    DetailsListColumnDirective.prototype.isMultiline;
    /** @type {?} */
    DetailsListColumnDirective.prototype.onRender;
    /** @type {?} */
    DetailsListColumnDirective.prototype.getValueKey;
    /** @type {?} */
    DetailsListColumnDirective.prototype.onRenderDivider;
    /** @type {?} */
    DetailsListColumnDirective.prototype.isFiltered;
    /** @type {?} */
    DetailsListColumnDirective.prototype.isGrouped;
    /** @type {?} */
    DetailsListColumnDirective.prototype.data;
    /** @type {?} */
    DetailsListColumnDirective.prototype.calculatedWidth;
    /** @type {?} */
    DetailsListColumnDirective.prototype.currentWidth;
    /** @type {?} */
    DetailsListColumnDirective.prototype.headerClassName;
    /** @type {?} */
    DetailsListColumnDirective.prototype.isPadded;
    /** @type {?} */
    DetailsListColumnDirective.prototype.sortAscendingAriaLabel;
    /** @type {?} */
    DetailsListColumnDirective.prototype.sortDescendingAriaLabel;
    /** @type {?} */
    DetailsListColumnDirective.prototype.groupAriaLabel;
    /** @type {?} */
    DetailsListColumnDirective.prototype.filterAriaLabel;
    /** @type {?} */
    DetailsListColumnDirective.prototype.render;
    /** @type {?} */
    DetailsListColumnDirective.prototype.onColumnClick;
    /** @type {?} */
    DetailsListColumnDirective.prototype.onColumnContextMenu;
    /** @type {?} */
    DetailsListColumnDirective.prototype.onColumnResize;
}
/**
 * @record
 * @template TData
 */
function IDetailsListColumnOptions() { }
if (false) {
    /** @type {?|undefined} */
    IDetailsListColumnOptions.prototype.render;
    /** @type {?|undefined} */
    IDetailsListColumnOptions.prototype.onColumnClick;
    /** @type {?|undefined} */
    IDetailsListColumnOptions.prototype.onColumnContextMenu;
    /** @type {?|undefined} */
    IDetailsListColumnOptions.prototype.onColumnResize;
    /** @type {?|undefined} */
    IDetailsListColumnOptions.prototype.data;
}
/**
 * @record
 */
function IDetailsListColumnOptionsRenderContext() { }
if (false) {
    /** @type {?|undefined} */
    IDetailsListColumnOptionsRenderContext.prototype.item;
    /** @type {?|undefined} */
    IDetailsListColumnOptionsRenderContext.prototype.index;
    /** @type {?|undefined} */
    IDetailsListColumnOptionsRenderContext.prototype.column;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Wrapper directive for creating multiple DetailsListColumns
 */
var DetailsListColumnsDirective = /** @class */ (function (_super) {
    __extends(DetailsListColumnsDirective, _super);
    function DetailsListColumnsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DetailsListColumnsDirective.prototype, "items", {
        get: /**
         * @return {?}
         */
        function () {
            return this.directiveItems.map((/**
             * @param {?} directiveItem
             * @return {?}
             */
            function (directiveItem) { return (__assign({}, directiveItem, { onColumnClick: (/**
                 * @param {?} ev
                 * @param {?} column
                 * @return {?}
                 */
                function (ev, column) {
                    directiveItem.onColumnClick.emit({ ev: ev && ev.nativeEvent, column: column });
                }), onColumnContextMenu: (/**
                 * @param {?=} column
                 * @param {?=} ev
                 * @return {?}
                 */
                function (column, ev) {
                    directiveItem.onColumnContextMenu.emit({ column: column, ev: ev && ev.nativeEvent });
                }), onColumnResize: (/**
                 * @param {?=} width
                 * @return {?}
                 */
                function (width) {
                    directiveItem.onColumnResize.emit({ width: width });
                }) })); }));
        },
        enumerable: true,
        configurable: true
    });
    DetailsListColumnsDirective.decorators = [
        { type: Directive, args: [{ selector: 'fab-details-list > columns' },] }
    ];
    DetailsListColumnsDirective.propDecorators = {
        directiveItems: [{ type: ContentChildren, args: [DetailsListColumnDirective,] }]
    };
    return DetailsListColumnsDirective;
}(ChangeableItemsDirective));
if (false) {
    /** @type {?} */
    DetailsListColumnsDirective.prototype.directiveItems;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Wrapper directive for creating multiple DetailsList Groups
 */
var DetailsListGroupsDirective = /** @class */ (function (_super) {
    __extends(DetailsListGroupsDirective, _super);
    function DetailsListGroupsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DetailsListGroupsDirective.prototype, "items", {
        get: /**
         * @return {?}
         */
        function () {
            return this.directiveItems.toArray();
        },
        enumerable: true,
        configurable: true
    });
    DetailsListGroupsDirective.decorators = [
        { type: Directive, args: [{ selector: 'fab-details-list > groups' },] }
    ];
    DetailsListGroupsDirective.propDecorators = {
        directiveItems: [{ type: ContentChildren, args: [GroupItemDirective,] }]
    };
    return DetailsListGroupsDirective;
}(ChangeableItemsDirective));
if (false) {
    /** @type {?} */
    DetailsListGroupsDirective.prototype.directiveItems;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabDetailsListComponent = /** @class */ (function (_super) {
    __extends(FabDetailsListComponent, _super);
    function FabDetailsListComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone, setHostDisplay: true }) || this;
        // Callback members
        _this.onActiveItemChanged = new EventEmitter();
        _this.onColumnHeaderClick = new EventEmitter();
        _this.onColumnHeaderContextMenu = new EventEmitter();
        _this.onColumnResize = new EventEmitter();
        _this.onDidUpdate = new EventEmitter();
        _this.onItemContextMenu = new EventEmitter();
        _this.onItemInvoked = new EventEmitter();
        _this.onRowDidMount = new EventEmitter();
        _this.onRowWillUnmount = new EventEmitter();
        _this._subscriptions = [];
        // Bind this to access Angular component properties
        _this.onActiveItemChangedHandler = _this.onActiveItemChangedHandler.bind(_this);
        _this.onColumnHeaderClickHandler = _this.onColumnHeaderClickHandler.bind(_this);
        _this.onColumnHeaderContextMenuHandler = _this.onColumnHeaderContextMenuHandler.bind(_this);
        _this.onColumnResizeHandler = _this.onColumnResizeHandler.bind(_this);
        _this.onDidUpdateHandler = _this.onDidUpdateHandler.bind(_this);
        _this.onItemContextMenuHandler = _this.onItemContextMenuHandler.bind(_this);
        _this.onItemInvokedHandler = _this.onItemInvokedHandler.bind(_this);
        _this.onRowDidMountHandler = _this.onRowDidMountHandler.bind(_this);
        _this.onRowWillUnmountHandler = _this.onRowWillUnmountHandler.bind(_this);
        return _this;
    }
    /**
     * @return {?}
     */
    FabDetailsListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onRenderCheckbox = this.createRenderPropHandler(this.renderCheckbox);
        this.onRenderDetailsFooter = this.createRenderPropHandler(this.renderDetailsFooter);
        this.onRenderDetailsHeader = this.createRenderPropHandler(this.renderDetailsHeader);
        this.onRenderRow = this.createRenderPropHandler(this.renderRow);
        /** @type {?} */
        var missingItemRenderer = this.createInputJsxRenderer(this.renderMissingItem);
        this.onRenderMissingItem = (/**
         * @param {?} index
         * @param {?} rowProps
         * @return {?}
         */
        function (index, rowProps) { return missingItemRenderer({ index: index, rowProps: rowProps }); });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    FabDetailsListComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['columns'] &&
            changes['columns'].currentValue &&
            changes['columns'].previousValue !== changes['columns'].currentValue) {
            this._createTransformedColumns(changes['columns'].currentValue);
        }
        if (changes['groups'] &&
            changes['groups'].currentValue &&
            changes['groups'].previousValue !== changes['groups'].currentValue) {
            this._createTransformedGroups(changes['groups'].currentValue);
        }
        _super.prototype.ngOnChanges.call(this, changes);
    };
    /**
     * @return {?}
     */
    FabDetailsListComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        if (this.columnsDirective) {
            this._initDirective(this.columnsDirective, 'columns');
        }
        if (this.groupsDirective) {
            this._initDirective(this.groupsDirective, 'groups');
        }
        _super.prototype.ngAfterContentInit.call(this);
    };
    /**
     * @return {?}
     */
    FabDetailsListComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._subscriptions.forEach((/**
         * @param {?} sub
         * @return {?}
         */
        function (sub) { return sub.unsubscribe(); }));
    };
    /**
     * @param {?=} item
     * @param {?=} index
     * @param {?=} ev
     * @return {?}
     */
    FabDetailsListComponent.prototype.onActiveItemChangedHandler = /**
     * @param {?=} item
     * @param {?=} index
     * @param {?=} ev
     * @return {?}
     */
    function (item, index, ev) {
        this.onActiveItemChanged.emit({ item: item, index: index, ev: ev.nativeEvent });
    };
    /**
     * @param {?=} ev
     * @param {?=} column
     * @return {?}
     */
    FabDetailsListComponent.prototype.onColumnHeaderClickHandler = /**
     * @param {?=} ev
     * @param {?=} column
     * @return {?}
     */
    function (ev, column) {
        this.onColumnHeaderClick.emit({ ev: ev.nativeEvent, column: column });
    };
    /**
     * @param {?=} column
     * @param {?=} ev
     * @return {?}
     */
    FabDetailsListComponent.prototype.onColumnHeaderContextMenuHandler = /**
     * @param {?=} column
     * @param {?=} ev
     * @return {?}
     */
    function (column, ev) {
        this.onColumnHeaderContextMenu.emit({ column: column, ev: ev.nativeEvent });
    };
    /**
     * @param {?=} column
     * @param {?=} newWidth
     * @param {?=} columnIndex
     * @return {?}
     */
    FabDetailsListComponent.prototype.onColumnResizeHandler = /**
     * @param {?=} column
     * @param {?=} newWidth
     * @param {?=} columnIndex
     * @return {?}
     */
    function (column, newWidth, columnIndex) {
        this.onColumnResize.emit({ column: column, newWidth: newWidth, columnIndex: columnIndex });
    };
    /**
     * @param {?=} detailsList
     * @return {?}
     */
    FabDetailsListComponent.prototype.onDidUpdateHandler = /**
     * @param {?=} detailsList
     * @return {?}
     */
    function (detailsList) {
        this.onDidUpdate.emit({ detailsList: detailsList });
    };
    /**
     * @param {?=} item
     * @param {?=} index
     * @param {?=} ev
     * @return {?}
     */
    FabDetailsListComponent.prototype.onItemContextMenuHandler = /**
     * @param {?=} item
     * @param {?=} index
     * @param {?=} ev
     * @return {?}
     */
    function (item, index, ev) {
        this.onItemContextMenu.emit({ item: item, index: index, ev: ev });
    };
    /**
     * @param {?=} item
     * @param {?=} index
     * @param {?=} ev
     * @return {?}
     */
    FabDetailsListComponent.prototype.onItemInvokedHandler = /**
     * @param {?=} item
     * @param {?=} index
     * @param {?=} ev
     * @return {?}
     */
    function (item, index, ev) {
        this.onItemInvoked.emit({ item: item, index: index, ev: ev });
    };
    /**
     * @param {?=} item
     * @param {?=} index
     * @return {?}
     */
    FabDetailsListComponent.prototype.onRowDidMountHandler = /**
     * @param {?=} item
     * @param {?=} index
     * @return {?}
     */
    function (item, index) {
        this.onRowDidMount.emit({ item: item, index: index });
    };
    /**
     * @param {?=} item
     * @param {?=} index
     * @return {?}
     */
    FabDetailsListComponent.prototype.onRowWillUnmountHandler = /**
     * @param {?=} item
     * @param {?=} index
     * @return {?}
     */
    function (item, index) {
        this.onRowWillUnmount.emit({ item: item, index: index });
    };
    /**
     * @private
     * @param {?} directive
     * @param {?} propertyKey
     * @return {?}
     */
    FabDetailsListComponent.prototype._initDirective = /**
     * @private
     * @param {?} directive
     * @param {?} propertyKey
     * @return {?}
     */
    function (directive, propertyKey) {
        var _this = this;
        /** @type {?} */
        var transformItemsFunc = this._transformItemsFunction(directive);
        /** @type {?} */
        var setItems = (/**
         * @param {?} mapper
         * @return {?}
         */
        function (mapper) {
            _this[propertyKey] = mapper(_this[propertyKey]);
            transformItemsFunc(_this[propertyKey]);
            _this.markForCheck();
        });
        setItems((/**
         * @return {?}
         */
        function () { return directive.items; }));
        // Subscribe to adding/removing items
        this._subscriptions.push(directive.onItemsChanged.subscribe((/**
         * @param {?} newItems
         * @return {?}
         */
        function (newItems) {
            setItems((/**
             * @return {?}
             */
            function () { return newItems.map((/**
             * @param {?} directive
             * @return {?}
             */
            function (directive) { return directive; })); }));
        })));
        // Subscribe for existing item changes
        this._subscriptions.push(directive.onChildItemChanged.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var key = _a.key, changes = _a.changes;
            setItems((/**
             * @param {?} items
             * @return {?}
             */
            function (items) { return items.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return (item.key === key ? mergeItemChanges(item, changes) : item); })); }));
            _this.markForCheck();
        })));
    };
    /**
     * @private
     * @param {?} directive
     * @return {?}
     */
    FabDetailsListComponent.prototype._transformItemsFunction = /**
     * @private
     * @param {?} directive
     * @return {?}
     */
    function (directive) {
        var _this = this;
        if (directive instanceof DetailsListColumnsDirective) {
            return (/**
             * @param {?} newColumns
             * @return {?}
             */
            function (newColumns) { return _this._createTransformedColumns(newColumns); });
        }
        else if (directive instanceof DetailsListGroupsDirective) {
            return (/**
             * @param {?} newGroups
             * @return {?}
             */
            function (newGroups) { return _this._createTransformedGroups(newGroups); });
        }
        else {
            throw new Error('Invalid directive given');
        }
    };
    /**
     * @private
     * @param {?} newColumns
     * @return {?}
     */
    FabDetailsListComponent.prototype._createTransformedColumns = /**
     * @private
     * @param {?} newColumns
     * @return {?}
     */
    function (newColumns) {
        var _this = this;
        this.transformedColumns_ = newColumns.map((/**
         * @param {?} column
         * @return {?}
         */
        function (column) { return _this._transformDetailsListColumnOptionsToProps(column); }));
    };
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    FabDetailsListComponent.prototype._transformDetailsListColumnOptionsToProps = /**
     * @private
     * @param {?} options
     * @return {?}
     */
    function (options) {
        /** @type {?} */
        var renderer = this.createInputJsxRenderer(options.render);
        return (/** @type {?} */ (Object.assign({}, omit(options, 'render'), renderer &&
            ((/** @type {?} */ ({
                onRender: (/**
                 * @param {?=} item
                 * @param {?=} index
                 * @param {?=} column
                 * @return {?}
                 */
                function (item, index, column) { return renderer({ item: item, index: index, column: column }); }),
            }))))));
    };
    /**
     * @private
     * @param {?} newGroups
     * @return {?}
     */
    FabDetailsListComponent.prototype._createTransformedGroups = /**
     * @private
     * @param {?} newGroups
     * @return {?}
     */
    function (newGroups) {
        this.transformedGroups_ = newGroups;
    };
    FabDetailsListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-details-list',
                    exportAs: 'fabDetailsList',
                    template: "\n    <DetailsList\n      #reactNode\n      [items]=\"items\"\n      [ariaLabel]=\"ariaLabel\"\n      [ariaLabelForGrid]=\"ariaLabelForGrid\"\n      [ariaLabelForListHeader]=\"ariaLabelForListHeader\"\n      [ariaLabelForSelectAllCheckbox]=\"ariaLabelForSelectAllCheckbox\"\n      [ariaLabelForSelectionColumn]=\"ariaLabelForSelectionColumn\"\n      [cellStyleProps]=\"cellStyleProps\"\n      [checkButtonAriaLabel]=\"checkButtonAriaLabel\"\n      [checkboxCellClassName]=\"checkboxCellClassName\"\n      [checkboxVisibility]=\"checkboxVisibility\"\n      [className]=\"className\"\n      [columnReorderOptions]=\"columnReorderOptions\"\n      [columns]=\"transformedColumns_\"\n      [compact]=\"compact\"\n      [componentRef]=\"componentRef\"\n      [constrainMode]=\"constrainMode\"\n      [disableSelectionZone]=\"disableSelectionZone\"\n      [dragDropEvents]=\"dragDropEvents\"\n      [enableUpdateAnimations]=\"enableUpdateAnimations\"\n      [enterModalSelectionOnTouch]=\"enterModalSelectionOnTouch\"\n      [getCellValueKey]=\"getCellValueKey\"\n      [getGroupHeight]=\"getGroupHeight\"\n      [getKey]=\"getKey\"\n      [getRowAriaDescribedBy]=\"getRowAriaDescribedBy\"\n      [getRowAriaLabel]=\"getRowAriaLabel\"\n      [groupProps]=\"groupProps\"\n      [groups]=\"transformedGroups_\"\n      [indentWidth]=\"indentWidth\"\n      [initialFocusedIndex]=\"initialFocusedIndex\"\n      [isHeaderVisible]=\"isHeaderVisible\"\n      [layoutMode]=\"layoutMode\"\n      [listProps]=\"listProps\"\n      [minimumPixelsForDrag]=\"minimumPixelsForDrag\"\n      [rowElementEventMap]=\"rowElementEventMap\"\n      [selection]=\"selection\"\n      [selectionMode]=\"selectionMode\"\n      [selectionPreservedOnEmptyClick]=\"selectionPreservedOnEmptyClick\"\n      [selectionZoneProps]=\"selectionZoneProps\"\n      [setKey]=\"setKey\"\n      [shouldApplyApplicationRole]=\"shouldApplyApplicationRole\"\n      [skipViewportMeasures]=\"skipViewportMeasures\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [useFastIcons]=\"useFastIcons\"\n      [usePageCache]=\"usePageCache\"\n      [useReducedRowRenderer]=\"useReducedRowRenderer\"\n      [viewport]=\"viewport\"\n      [RenderCheckbox]=\"renderCheckbox && onRenderCheckbox\"\n      [RenderDetailsFooter]=\"renderDetailsFooter && onRenderDetailsFooter\"\n      [RenderDetailsHeader]=\"renderDetailsHeader && onRenderDetailsHeader\"\n      [RenderMissingItem]=\"renderMissingItem && onRenderMissingItem\"\n      [RenderRow]=\"renderDetailsHeader && onRenderRow\"\n      [ActiveItemChanged]=\"onActiveItemChangedHandler\"\n      [ColumnHeaderClick]=\"onColumnHeaderClickHandler\"\n      [ColumnHeaderContextMenu]=\"onColumnHeaderContextMenuHandler\"\n      [ColumnResize]=\"onColumnResizeHandler\"\n      [DidUpdate]=\"onDidUpdateHandler\"\n      [ItemContextMenu]=\"onItemContextMenuHandler\"\n      [ItemInvoked]=\"onItemInvokedHandler\"\n      [RowDidMount]=\"onRowDidMountHandler\"\n      [RowWillUnmount]=\"onRowWillUnmountHandler\"\n      [ShouldVirtualize]=\"onShouldVirtualize\"\n    >\n    </DetailsList>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabDetailsListComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    FabDetailsListComponent.propDecorators = {
        columnsDirective: [{ type: ContentChild, args: [DetailsListColumnsDirective, { static: true },] }],
        groupsDirective: [{ type: ContentChild, args: [DetailsListGroupsDirective, { static: true },] }],
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
        theme: [{ type: Input }],
        styles: [{ type: Input }],
        componentRef: [{ type: Input }],
        setKey: [{ type: Input }],
        items: [{ type: Input }],
        listProps: [{ type: Input }],
        initialFocusedIndex: [{ type: Input }],
        className: [{ type: Input }],
        groupProps: [{ type: Input }],
        indentWidth: [{ type: Input }],
        selection: [{ type: Input }],
        selectionMode: [{ type: Input }],
        selectionPreservedOnEmptyClick: [{ type: Input }],
        selectionZoneProps: [{ type: Input }],
        layoutMode: [{ type: Input }],
        checkboxVisibility: [{ type: Input }],
        isHeaderVisible: [{ type: Input }],
        constrainMode: [{ type: Input }],
        rowElementEventMap: [{ type: Input }],
        getCellValueKey: [{ type: Input }],
        dragDropEvents: [{ type: Input }],
        viewport: [{ type: Input }],
        ariaLabelForListHeader: [{ type: Input }],
        ariaLabelForSelectAllCheckbox: [{ type: Input }],
        ariaLabelForSelectionColumn: [{ type: Input }],
        getRowAriaLabel: [{ type: Input }],
        getRowAriaDescribedBy: [{ type: Input }],
        getKey: [{ type: Input }],
        ariaLabel: [{ type: Input }],
        checkButtonAriaLabel: [{ type: Input }],
        ariaLabelForGrid: [{ type: Input }],
        shouldApplyApplicationRole: [{ type: Input }],
        minimumPixelsForDrag: [{ type: Input }],
        compact: [{ type: Input }],
        usePageCache: [{ type: Input }],
        onShouldVirtualize: [{ type: Input }],
        checkboxCellClassName: [{ type: Input }],
        enterModalSelectionOnTouch: [{ type: Input }],
        columnReorderOptions: [{ type: Input }],
        getGroupHeight: [{ type: Input }],
        useReducedRowRenderer: [{ type: Input }],
        cellStyleProps: [{ type: Input }],
        disableSelectionZone: [{ type: Input }],
        enableUpdateAnimations: [{ type: Input }],
        useFastIcons: [{ type: Input }],
        skipViewportMeasures: [{ type: Input }],
        renderCheckbox: [{ type: Input }],
        renderDetailsFooter: [{ type: Input }],
        renderDetailsHeader: [{ type: Input }],
        renderMissingItem: [{ type: Input }],
        renderRow: [{ type: Input }],
        onActiveItemChanged: [{ type: Output }],
        onColumnHeaderClick: [{ type: Output }],
        onColumnHeaderContextMenu: [{ type: Output }],
        onColumnResize: [{ type: Output }],
        onDidUpdate: [{ type: Output }],
        onItemContextMenu: [{ type: Output }],
        onItemInvoked: [{ type: Output }],
        onRowDidMount: [{ type: Output }],
        onRowWillUnmount: [{ type: Output }],
        columns: [{ type: Input }],
        groups: [{ type: Input }]
    };
    return FabDetailsListComponent;
}(ReactWrapperComponent));
if (false) {
    /** @type {?} */
    FabDetailsListComponent.prototype.columnsDirective;
    /** @type {?} */
    FabDetailsListComponent.prototype.groupsDirective;
    /**
     * @type {?}
     * @protected
     */
    FabDetailsListComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabDetailsListComponent.prototype.theme;
    /** @type {?} */
    FabDetailsListComponent.prototype.styles;
    /** @type {?} */
    FabDetailsListComponent.prototype.componentRef;
    /** @type {?} */
    FabDetailsListComponent.prototype.setKey;
    /** @type {?} */
    FabDetailsListComponent.prototype.items;
    /** @type {?} */
    FabDetailsListComponent.prototype.listProps;
    /** @type {?} */
    FabDetailsListComponent.prototype.initialFocusedIndex;
    /** @type {?} */
    FabDetailsListComponent.prototype.className;
    /** @type {?} */
    FabDetailsListComponent.prototype.groupProps;
    /** @type {?} */
    FabDetailsListComponent.prototype.indentWidth;
    /** @type {?} */
    FabDetailsListComponent.prototype.selection;
    /** @type {?} */
    FabDetailsListComponent.prototype.selectionMode;
    /** @type {?} */
    FabDetailsListComponent.prototype.selectionPreservedOnEmptyClick;
    /** @type {?} */
    FabDetailsListComponent.prototype.selectionZoneProps;
    /** @type {?} */
    FabDetailsListComponent.prototype.layoutMode;
    /** @type {?} */
    FabDetailsListComponent.prototype.checkboxVisibility;
    /** @type {?} */
    FabDetailsListComponent.prototype.isHeaderVisible;
    /** @type {?} */
    FabDetailsListComponent.prototype.constrainMode;
    /** @type {?} */
    FabDetailsListComponent.prototype.rowElementEventMap;
    /** @type {?} */
    FabDetailsListComponent.prototype.getCellValueKey;
    /** @type {?} */
    FabDetailsListComponent.prototype.dragDropEvents;
    /** @type {?} */
    FabDetailsListComponent.prototype.viewport;
    /** @type {?} */
    FabDetailsListComponent.prototype.ariaLabelForListHeader;
    /** @type {?} */
    FabDetailsListComponent.prototype.ariaLabelForSelectAllCheckbox;
    /** @type {?} */
    FabDetailsListComponent.prototype.ariaLabelForSelectionColumn;
    /** @type {?} */
    FabDetailsListComponent.prototype.getRowAriaLabel;
    /** @type {?} */
    FabDetailsListComponent.prototype.getRowAriaDescribedBy;
    /** @type {?} */
    FabDetailsListComponent.prototype.getKey;
    /** @type {?} */
    FabDetailsListComponent.prototype.ariaLabel;
    /** @type {?} */
    FabDetailsListComponent.prototype.checkButtonAriaLabel;
    /** @type {?} */
    FabDetailsListComponent.prototype.ariaLabelForGrid;
    /** @type {?} */
    FabDetailsListComponent.prototype.shouldApplyApplicationRole;
    /** @type {?} */
    FabDetailsListComponent.prototype.minimumPixelsForDrag;
    /** @type {?} */
    FabDetailsListComponent.prototype.compact;
    /** @type {?} */
    FabDetailsListComponent.prototype.usePageCache;
    /** @type {?} */
    FabDetailsListComponent.prototype.onShouldVirtualize;
    /** @type {?} */
    FabDetailsListComponent.prototype.checkboxCellClassName;
    /** @type {?} */
    FabDetailsListComponent.prototype.enterModalSelectionOnTouch;
    /** @type {?} */
    FabDetailsListComponent.prototype.columnReorderOptions;
    /** @type {?} */
    FabDetailsListComponent.prototype.getGroupHeight;
    /** @type {?} */
    FabDetailsListComponent.prototype.useReducedRowRenderer;
    /** @type {?} */
    FabDetailsListComponent.prototype.cellStyleProps;
    /** @type {?} */
    FabDetailsListComponent.prototype.disableSelectionZone;
    /** @type {?} */
    FabDetailsListComponent.prototype.enableUpdateAnimations;
    /** @type {?} */
    FabDetailsListComponent.prototype.useFastIcons;
    /** @type {?} */
    FabDetailsListComponent.prototype.skipViewportMeasures;
    /** @type {?} */
    FabDetailsListComponent.prototype.renderCheckbox;
    /** @type {?} */
    FabDetailsListComponent.prototype.renderDetailsFooter;
    /** @type {?} */
    FabDetailsListComponent.prototype.renderDetailsHeader;
    /** @type {?} */
    FabDetailsListComponent.prototype.renderMissingItem;
    /** @type {?} */
    FabDetailsListComponent.prototype.renderRow;
    /** @type {?} */
    FabDetailsListComponent.prototype.onActiveItemChanged;
    /** @type {?} */
    FabDetailsListComponent.prototype.onColumnHeaderClick;
    /** @type {?} */
    FabDetailsListComponent.prototype.onColumnHeaderContextMenu;
    /** @type {?} */
    FabDetailsListComponent.prototype.onColumnResize;
    /** @type {?} */
    FabDetailsListComponent.prototype.onDidUpdate;
    /** @type {?} */
    FabDetailsListComponent.prototype.onItemContextMenu;
    /** @type {?} */
    FabDetailsListComponent.prototype.onItemInvoked;
    /** @type {?} */
    FabDetailsListComponent.prototype.onRowDidMount;
    /** @type {?} */
    FabDetailsListComponent.prototype.onRowWillUnmount;
    /** @type {?} */
    FabDetailsListComponent.prototype.columns;
    /** @type {?} */
    FabDetailsListComponent.prototype.groups;
    /**
     * \@internal
     * @type {?}
     */
    FabDetailsListComponent.prototype.transformedColumns_;
    /** @type {?} */
    FabDetailsListComponent.prototype.transformedGroups_;
    /**
     * @type {?}
     * @private
     */
    FabDetailsListComponent.prototype._subscriptions;
    /** @type {?} */
    FabDetailsListComponent.prototype.onRenderCheckbox;
    /** @type {?} */
    FabDetailsListComponent.prototype.onRenderDetailsFooter;
    /** @type {?} */
    FabDetailsListComponent.prototype.onRenderDetailsHeader;
    /** @type {?} */
    FabDetailsListComponent.prototype.onRenderMissingItem;
    /** @type {?} */
    FabDetailsListComponent.prototype.onRenderRow;
}
/**
 * @record
 */
function IMissingItemRenderContext() { }
if (false) {
    /** @type {?|undefined} */
    IMissingItemRenderContext.prototype.index;
    /** @type {?|undefined} */
    IMissingItemRenderContext.prototype.rowProps;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var components = [
    DetailsListColumnDirective,
    DetailsListColumnRenderDirective,
    DetailsListColumnsDirective,
    DetailsListGroupsDirective,
    FabDetailsListComponent,
];
var FabDetailsListModule = /** @class */ (function () {
    function FabDetailsListModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('DetailsList', (/**
         * @return {?}
         */
        function () { return DetailsList; }));
    }
    FabDetailsListModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FabGroupModule],
                    declarations: components,
                    exports: __spread(components, [FabGroupModule]),
                    schemas: [NO_ERRORS_SCHEMA],
                },] }
    ];
    /** @nocollapse */
    FabDetailsListModule.ctorParameters = function () { return []; };
    return FabDetailsListModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DetailsListColumnDirective, DetailsListColumnRenderDirective, DetailsListColumnsDirective, DetailsListGroupsDirective, FabDetailsListComponent, FabDetailsListModule };
//# sourceMappingURL=angular-react-fabric-lib-components-details-list.js.map
