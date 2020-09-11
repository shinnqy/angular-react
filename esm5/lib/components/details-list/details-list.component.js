/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ChangeDetectionStrategy, ChangeDetectorRef, ContentChild, Component, ElementRef, EventEmitter, Input, NgZone, Output, Renderer2, ViewChild, } from '@angular/core';
import { ReactWrapperComponent } from '@angular-react/core';
import { omit } from 'angular-react-toolkit/utils/omit';
import { mergeItemChanges } from 'angular-react-toolkit/core/declarative/item-changed';
import { DetailsListColumnsDirective } from './directives/details-list-columns.directive';
import { DetailsListGroupsDirective } from './directives/details-list-groups.directive';
var FabDetailsListComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabDetailsListComponent, _super);
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
export { FabDetailsListComponent };
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
export function IMissingItemRenderContext() { }
if (false) {
    /** @type {?|undefined} */
    IMissingItemRenderContext.prototype.index;
    /** @type {?|undefined} */
    IMissingItemRenderContext.prototype.rowProps;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RldGFpbHMtbGlzdC9kZXRhaWxzLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixZQUFZLEVBQ1osU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFHTixNQUFNLEVBRU4sU0FBUyxFQUNULFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXVDLHFCQUFxQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFjakcsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBSXZGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzFGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBRXhGO0lBMEU2QyxtREFBd0M7SUFtR25GLGlDQUFZLFVBQXNCLEVBQUUsaUJBQW9DLEVBQUUsUUFBbUIsRUFBRSxNQUFjO1FBQTdHLFlBQ0Usa0JBQU0sVUFBVSxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxFQUFFLE1BQU0sUUFBQSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxTQVlqRjs7UUFoRGtCLHlCQUFtQixHQUFHLElBQUksWUFBWSxFQUE4QyxDQUFDO1FBQ3JGLHlCQUFtQixHQUFHLElBQUksWUFBWSxFQUFvQyxDQUFDO1FBQzNFLCtCQUF5QixHQUFHLElBQUksWUFBWSxFQUFvQyxDQUFDO1FBQ2pGLG9CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQWlFLENBQUM7UUFDbkcsaUJBQVcs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SUFDdEUsa0RBQWdFOztJQUNoRSxpREFBOEQ7O0lBQzlELDJDQUFrRDs7SUFDbEQseURBQThFOztJQUM5RSxnRUFBNEY7O0lBQzVGLDhEQUF3Rjs7SUFDeEYsa0RBQWdFOztJQUNoRSx3REFBNEU7O0lBQzVFLHlDQUE4Qzs7SUFDOUMsNENBQW9EOztJQUNwRCx1REFBMEU7O0lBQzFFLG1EQUFrRTs7SUFDbEUsNkRBQXNGOztJQUN0Rix1REFBMEU7O0lBQzFFLDBDQUFnRDs7SUFDaEQsK0NBQTBEOztJQUMxRCxxREFBNkQ7O0lBQzdELHdEQUE0RTs7SUFDNUUsNkRBQXNGOztJQUN0Rix1REFBMEU7O0lBQzFFLGlEQUE4RDs7SUFDOUQsd0RBQTRFOztJQUM1RSxpREFBOEQ7O0lBQzlELHVEQUEwRTs7SUFDMUUseURBQThFOztJQUM5RSwrQ0FBMEQ7O0lBRzFELHVEQUEwRTs7SUFHMUUsaURBQTBFOztJQUMxRSxzREFBeUU7O0lBQ3pFLHNEQUF5RTs7SUFDekUsb0RBQTZFOztJQUM3RSw0Q0FBNEQ7O0lBRzVELHNEQUF3Rzs7SUFDeEcsc0RBQThGOztJQUM5Riw0REFBb0c7O0lBQ3BHLGlEQUFzSDs7SUFDdEgsOENBQXVGOztJQUN2RixvREFBc0c7O0lBQ3RHLGdEQUFrRzs7SUFDbEcsZ0RBQXNGOztJQUN0RixtREFBeUY7O0lBR3pGLDBDQUEyRDs7SUFDM0QseUNBQXVDOzs7OztJQUd2QyxzREFBNEM7O0lBQzVDLHFEQUEwQzs7Ozs7SUFFMUMsaURBQXFEOztJQUVyRCxtREFHaUI7O0lBQ2pCLHdEQUdpQjs7SUFDakIsd0RBR2lCOztJQUNqQixzREFBa0Y7O0lBQ2xGLDhDQUF3Rzs7Ozs7QUF3SjFHLCtDQUdDOzs7SUFGQywwQ0FBZTs7SUFDZiw2Q0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0NoaWxkLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbnB1dFJlbmRlcmVyT3B0aW9ucywgSnN4UmVuZGVyRnVuYywgUmVhY3RXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXItcmVhY3QvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgRGV0YWlsc0xpc3RCYXNlLFxyXG4gIElDb2x1bW4sXHJcbiAgSURldGFpbHNMaXN0Q2hlY2tib3hQcm9wcyxcclxuICBJRGV0YWlsc0Zvb3RlclByb3BzLFxyXG4gIElEZXRhaWxzSGVhZGVyUHJvcHMsXHJcbiAgSURldGFpbHNMaXN0UHJvcHMsXHJcbiAgSURldGFpbHNSb3dQcm9wcyxcclxuICBJR3JvdXAsXHJcbn0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvRGV0YWlsc0xpc3QnO1xyXG5pbXBvcnQgeyBJTGlzdFByb3BzIH0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvTGlzdCc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBPbkNoYW5nZXMsIFR5cGVkQ2hhbmdlcyB9IGZyb20gJ2FuZ3VsYXItcmVhY3QtdG9vbGtpdC9kZWNsYXJhdGlvbnMvYW5ndWxhci90eXBlZC1jaGFuZ2VzJztcclxuaW1wb3J0IHsgb21pdCB9IGZyb20gJ2FuZ3VsYXItcmVhY3QtdG9vbGtpdC91dGlscy9vbWl0JztcclxuaW1wb3J0IHsgbWVyZ2VJdGVtQ2hhbmdlcyB9IGZyb20gJ2FuZ3VsYXItcmVhY3QtdG9vbGtpdC9jb3JlL2RlY2xhcmF0aXZlL2l0ZW0tY2hhbmdlZCc7XHJcbmltcG9ydCB7IENoYW5nZWFibGVJdGVtc0RpcmVjdGl2ZSB9IGZyb20gJ2FuZ3VsYXItcmVhY3QtdG9vbGtpdC9jb3JlL3NoYXJlZC9jaGFuZ2VhYmxlLWl0ZW1zLmRpcmVjdGl2ZSc7XHJcblxyXG5pbXBvcnQgeyBJRGV0YWlsc0xpc3RDb2x1bW5PcHRpb25zIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2RldGFpbHMtbGlzdC1jb2x1bW4uZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRGV0YWlsc0xpc3RDb2x1bW5zRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2RldGFpbHMtbGlzdC1jb2x1bW5zLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IERldGFpbHNMaXN0R3JvdXBzRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2RldGFpbHMtbGlzdC1ncm91cHMuZGlyZWN0aXZlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZmFiLWRldGFpbHMtbGlzdCcsXHJcbiAgZXhwb3J0QXM6ICdmYWJEZXRhaWxzTGlzdCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxEZXRhaWxzTGlzdFxyXG4gICAgICAjcmVhY3ROb2RlXHJcbiAgICAgIFtpdGVtc109XCJpdGVtc1wiXHJcbiAgICAgIFthcmlhTGFiZWxdPVwiYXJpYUxhYmVsXCJcclxuICAgICAgW2FyaWFMYWJlbEZvckdyaWRdPVwiYXJpYUxhYmVsRm9yR3JpZFwiXHJcbiAgICAgIFthcmlhTGFiZWxGb3JMaXN0SGVhZGVyXT1cImFyaWFMYWJlbEZvckxpc3RIZWFkZXJcIlxyXG4gICAgICBbYXJpYUxhYmVsRm9yU2VsZWN0QWxsQ2hlY2tib3hdPVwiYXJpYUxhYmVsRm9yU2VsZWN0QWxsQ2hlY2tib3hcIlxyXG4gICAgICBbYXJpYUxhYmVsRm9yU2VsZWN0aW9uQ29sdW1uXT1cImFyaWFMYWJlbEZvclNlbGVjdGlvbkNvbHVtblwiXHJcbiAgICAgIFtjZWxsU3R5bGVQcm9wc109XCJjZWxsU3R5bGVQcm9wc1wiXHJcbiAgICAgIFtjaGVja0J1dHRvbkFyaWFMYWJlbF09XCJjaGVja0J1dHRvbkFyaWFMYWJlbFwiXHJcbiAgICAgIFtjaGVja2JveENlbGxDbGFzc05hbWVdPVwiY2hlY2tib3hDZWxsQ2xhc3NOYW1lXCJcclxuICAgICAgW2NoZWNrYm94VmlzaWJpbGl0eV09XCJjaGVja2JveFZpc2liaWxpdHlcIlxyXG4gICAgICBbY2xhc3NOYW1lXT1cImNsYXNzTmFtZVwiXHJcbiAgICAgIFtjb2x1bW5SZW9yZGVyT3B0aW9uc109XCJjb2x1bW5SZW9yZGVyT3B0aW9uc1wiXHJcbiAgICAgIFtjb2x1bW5zXT1cInRyYW5zZm9ybWVkQ29sdW1uc19cIlxyXG4gICAgICBbY29tcGFjdF09XCJjb21wYWN0XCJcclxuICAgICAgW2NvbXBvbmVudFJlZl09XCJjb21wb25lbnRSZWZcIlxyXG4gICAgICBbY29uc3RyYWluTW9kZV09XCJjb25zdHJhaW5Nb2RlXCJcclxuICAgICAgW2Rpc2FibGVTZWxlY3Rpb25ab25lXT1cImRpc2FibGVTZWxlY3Rpb25ab25lXCJcclxuICAgICAgW2RyYWdEcm9wRXZlbnRzXT1cImRyYWdEcm9wRXZlbnRzXCJcclxuICAgICAgW2VuYWJsZVVwZGF0ZUFuaW1hdGlvbnNdPVwiZW5hYmxlVXBkYXRlQW5pbWF0aW9uc1wiXHJcbiAgICAgIFtlbnRlck1vZGFsU2VsZWN0aW9uT25Ub3VjaF09XCJlbnRlck1vZGFsU2VsZWN0aW9uT25Ub3VjaFwiXHJcbiAgICAgIFtnZXRDZWxsVmFsdWVLZXldPVwiZ2V0Q2VsbFZhbHVlS2V5XCJcclxuICAgICAgW2dldEdyb3VwSGVpZ2h0XT1cImdldEdyb3VwSGVpZ2h0XCJcclxuICAgICAgW2dldEtleV09XCJnZXRLZXlcIlxyXG4gICAgICBbZ2V0Um93QXJpYURlc2NyaWJlZEJ5XT1cImdldFJvd0FyaWFEZXNjcmliZWRCeVwiXHJcbiAgICAgIFtnZXRSb3dBcmlhTGFiZWxdPVwiZ2V0Um93QXJpYUxhYmVsXCJcclxuICAgICAgW2dyb3VwUHJvcHNdPVwiZ3JvdXBQcm9wc1wiXHJcbiAgICAgIFtncm91cHNdPVwidHJhbnNmb3JtZWRHcm91cHNfXCJcclxuICAgICAgW2luZGVudFdpZHRoXT1cImluZGVudFdpZHRoXCJcclxuICAgICAgW2luaXRpYWxGb2N1c2VkSW5kZXhdPVwiaW5pdGlhbEZvY3VzZWRJbmRleFwiXHJcbiAgICAgIFtpc0hlYWRlclZpc2libGVdPVwiaXNIZWFkZXJWaXNpYmxlXCJcclxuICAgICAgW2xheW91dE1vZGVdPVwibGF5b3V0TW9kZVwiXHJcbiAgICAgIFtsaXN0UHJvcHNdPVwibGlzdFByb3BzXCJcclxuICAgICAgW21pbmltdW1QaXhlbHNGb3JEcmFnXT1cIm1pbmltdW1QaXhlbHNGb3JEcmFnXCJcclxuICAgICAgW3Jvd0VsZW1lbnRFdmVudE1hcF09XCJyb3dFbGVtZW50RXZlbnRNYXBcIlxyXG4gICAgICBbc2VsZWN0aW9uXT1cInNlbGVjdGlvblwiXHJcbiAgICAgIFtzZWxlY3Rpb25Nb2RlXT1cInNlbGVjdGlvbk1vZGVcIlxyXG4gICAgICBbc2VsZWN0aW9uUHJlc2VydmVkT25FbXB0eUNsaWNrXT1cInNlbGVjdGlvblByZXNlcnZlZE9uRW1wdHlDbGlja1wiXHJcbiAgICAgIFtzZWxlY3Rpb25ab25lUHJvcHNdPVwic2VsZWN0aW9uWm9uZVByb3BzXCJcclxuICAgICAgW3NldEtleV09XCJzZXRLZXlcIlxyXG4gICAgICBbc2hvdWxkQXBwbHlBcHBsaWNhdGlvblJvbGVdPVwic2hvdWxkQXBwbHlBcHBsaWNhdGlvblJvbGVcIlxyXG4gICAgICBbc2tpcFZpZXdwb3J0TWVhc3VyZXNdPVwic2tpcFZpZXdwb3J0TWVhc3VyZXNcIlxyXG4gICAgICBbc3R5bGVzXT1cInN0eWxlc1wiXHJcbiAgICAgIFt0aGVtZV09XCJ0aGVtZVwiXHJcbiAgICAgIFt1c2VGYXN0SWNvbnNdPVwidXNlRmFzdEljb25zXCJcclxuICAgICAgW3VzZVBhZ2VDYWNoZV09XCJ1c2VQYWdlQ2FjaGVcIlxyXG4gICAgICBbdXNlUmVkdWNlZFJvd1JlbmRlcmVyXT1cInVzZVJlZHVjZWRSb3dSZW5kZXJlclwiXHJcbiAgICAgIFt2aWV3cG9ydF09XCJ2aWV3cG9ydFwiXHJcbiAgICAgIFtSZW5kZXJDaGVja2JveF09XCJyZW5kZXJDaGVja2JveCAmJiBvblJlbmRlckNoZWNrYm94XCJcclxuICAgICAgW1JlbmRlckRldGFpbHNGb290ZXJdPVwicmVuZGVyRGV0YWlsc0Zvb3RlciAmJiBvblJlbmRlckRldGFpbHNGb290ZXJcIlxyXG4gICAgICBbUmVuZGVyRGV0YWlsc0hlYWRlcl09XCJyZW5kZXJEZXRhaWxzSGVhZGVyICYmIG9uUmVuZGVyRGV0YWlsc0hlYWRlclwiXHJcbiAgICAgIFtSZW5kZXJNaXNzaW5nSXRlbV09XCJyZW5kZXJNaXNzaW5nSXRlbSAmJiBvblJlbmRlck1pc3NpbmdJdGVtXCJcclxuICAgICAgW1JlbmRlclJvd109XCJyZW5kZXJEZXRhaWxzSGVhZGVyICYmIG9uUmVuZGVyUm93XCJcclxuICAgICAgW0FjdGl2ZUl0ZW1DaGFuZ2VkXT1cIm9uQWN0aXZlSXRlbUNoYW5nZWRIYW5kbGVyXCJcclxuICAgICAgW0NvbHVtbkhlYWRlckNsaWNrXT1cIm9uQ29sdW1uSGVhZGVyQ2xpY2tIYW5kbGVyXCJcclxuICAgICAgW0NvbHVtbkhlYWRlckNvbnRleHRNZW51XT1cIm9uQ29sdW1uSGVhZGVyQ29udGV4dE1lbnVIYW5kbGVyXCJcclxuICAgICAgW0NvbHVtblJlc2l6ZV09XCJvbkNvbHVtblJlc2l6ZUhhbmRsZXJcIlxyXG4gICAgICBbRGlkVXBkYXRlXT1cIm9uRGlkVXBkYXRlSGFuZGxlclwiXHJcbiAgICAgIFtJdGVtQ29udGV4dE1lbnVdPVwib25JdGVtQ29udGV4dE1lbnVIYW5kbGVyXCJcclxuICAgICAgW0l0ZW1JbnZva2VkXT1cIm9uSXRlbUludm9rZWRIYW5kbGVyXCJcclxuICAgICAgW1Jvd0RpZE1vdW50XT1cIm9uUm93RGlkTW91bnRIYW5kbGVyXCJcclxuICAgICAgW1Jvd1dpbGxVbm1vdW50XT1cIm9uUm93V2lsbFVubW91bnRIYW5kbGVyXCJcclxuICAgICAgW1Nob3VsZFZpcnR1YWxpemVdPVwib25TaG91bGRWaXJ0dWFsaXplXCJcclxuICAgID5cclxuICAgIDwvRGV0YWlsc0xpc3Q+XHJcbiAgYCxcclxuICBzdHlsZXM6IFsncmVhY3QtcmVuZGVyZXInXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZhYkRldGFpbHNMaXN0Q29tcG9uZW50IGV4dGVuZHMgUmVhY3RXcmFwcGVyQ29tcG9uZW50PElEZXRhaWxzTGlzdFByb3BzPlxyXG4gIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzPEZhYkRldGFpbHNMaXN0Q29tcG9uZW50PiwgT25EZXN0cm95LCBPbkluaXQge1xyXG4gIEBDb250ZW50Q2hpbGQoRGV0YWlsc0xpc3RDb2x1bW5zRGlyZWN0aXZlLCB7IHN0YXRpYzogdHJ1ZSB9KSByZWFkb25seSBjb2x1bW5zRGlyZWN0aXZlPzogRGV0YWlsc0xpc3RDb2x1bW5zRGlyZWN0aXZlO1xyXG4gIEBDb250ZW50Q2hpbGQoRGV0YWlsc0xpc3RHcm91cHNEaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlIH0pIHJlYWRvbmx5IGdyb3Vwc0RpcmVjdGl2ZT86IERldGFpbHNMaXN0R3JvdXBzRGlyZWN0aXZlO1xyXG5cclxuICBAVmlld0NoaWxkKCdyZWFjdE5vZGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcm90ZWN0ZWQgcmVhY3ROb2RlUmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICBASW5wdXQoKSB0aGVtZT86IElEZXRhaWxzTGlzdFByb3BzWyd0aGVtZSddO1xyXG4gIEBJbnB1dCgpIHN0eWxlcz86IElEZXRhaWxzTGlzdFByb3BzWydzdHlsZXMnXTtcclxuICBASW5wdXQoKSBjb21wb25lbnRSZWY/OiBJRGV0YWlsc0xpc3RQcm9wc1snY29tcG9uZW50UmVmJ107XHJcbiAgQElucHV0KCkgc2V0S2V5PzogSURldGFpbHNMaXN0UHJvcHNbJ3NldEtleSddO1xyXG4gIEBJbnB1dCgpIGl0ZW1zOiBJRGV0YWlsc0xpc3RQcm9wc1snaXRlbXMnXTtcclxuICBASW5wdXQoKSBsaXN0UHJvcHM/OiBJRGV0YWlsc0xpc3RQcm9wc1snbGlzdFByb3BzJ107XHJcbiAgQElucHV0KCkgaW5pdGlhbEZvY3VzZWRJbmRleD86IElEZXRhaWxzTGlzdFByb3BzWydpbml0aWFsRm9jdXNlZEluZGV4J107XHJcbiAgQElucHV0KCkgY2xhc3NOYW1lPzogSURldGFpbHNMaXN0UHJvcHNbJ2NsYXNzTmFtZSddO1xyXG4gIEBJbnB1dCgpIGdyb3VwUHJvcHM/OiBJRGV0YWlsc0xpc3RQcm9wc1snZ3JvdXBQcm9wcyddO1xyXG4gIEBJbnB1dCgpIGluZGVudFdpZHRoPzogSURldGFpbHNMaXN0UHJvcHNbJ2luZGVudFdpZHRoJ107XHJcbiAgQElucHV0KCkgc2VsZWN0aW9uPzogSURldGFpbHNMaXN0UHJvcHNbJ3NlbGVjdGlvbiddO1xyXG4gIEBJbnB1dCgpIHNlbGVjdGlvbk1vZGU/OiBJRGV0YWlsc0xpc3RQcm9wc1snc2VsZWN0aW9uTW9kZSddO1xyXG4gIEBJbnB1dCgpIHNlbGVjdGlvblByZXNlcnZlZE9uRW1wdHlDbGljaz86IElEZXRhaWxzTGlzdFByb3BzWydzZWxlY3Rpb25QcmVzZXJ2ZWRPbkVtcHR5Q2xpY2snXTtcclxuICBASW5wdXQoKSBzZWxlY3Rpb25ab25lUHJvcHM/OiBJRGV0YWlsc0xpc3RQcm9wc1snc2VsZWN0aW9uWm9uZVByb3BzJ107XHJcbiAgQElucHV0KCkgbGF5b3V0TW9kZT86IElEZXRhaWxzTGlzdFByb3BzWydsYXlvdXRNb2RlJ107XHJcbiAgQElucHV0KCkgY2hlY2tib3hWaXNpYmlsaXR5PzogSURldGFpbHNMaXN0UHJvcHNbJ2NoZWNrYm94VmlzaWJpbGl0eSddO1xyXG4gIEBJbnB1dCgpIGlzSGVhZGVyVmlzaWJsZT86IElEZXRhaWxzTGlzdFByb3BzWydpc0hlYWRlclZpc2libGUnXTtcclxuICBASW5wdXQoKSBjb25zdHJhaW5Nb2RlPzogSURldGFpbHNMaXN0UHJvcHNbJ2NvbnN0cmFpbk1vZGUnXTtcclxuICBASW5wdXQoKSByb3dFbGVtZW50RXZlbnRNYXA/OiBJRGV0YWlsc0xpc3RQcm9wc1sncm93RWxlbWVudEV2ZW50TWFwJ107XHJcbiAgQElucHV0KCkgZ2V0Q2VsbFZhbHVlS2V5PzogSURldGFpbHNMaXN0UHJvcHNbJ2dldENlbGxWYWx1ZUtleSddO1xyXG4gIEBJbnB1dCgpIGRyYWdEcm9wRXZlbnRzPzogSURldGFpbHNMaXN0UHJvcHNbJ2RyYWdEcm9wRXZlbnRzJ107XHJcbiAgQElucHV0KCkgdmlld3BvcnQ/OiBJRGV0YWlsc0xpc3RQcm9wc1sndmlld3BvcnQnXTtcclxuICBASW5wdXQoKSBhcmlhTGFiZWxGb3JMaXN0SGVhZGVyPzogSURldGFpbHNMaXN0UHJvcHNbJ2FyaWFMYWJlbEZvckxpc3RIZWFkZXInXTtcclxuICBASW5wdXQoKSBhcmlhTGFiZWxGb3JTZWxlY3RBbGxDaGVja2JveD86IElEZXRhaWxzTGlzdFByb3BzWydhcmlhTGFiZWxGb3JTZWxlY3RBbGxDaGVja2JveCddO1xyXG4gIEBJbnB1dCgpIGFyaWFMYWJlbEZvclNlbGVjdGlvbkNvbHVtbj86IElEZXRhaWxzTGlzdFByb3BzWydhcmlhTGFiZWxGb3JTZWxlY3Rpb25Db2x1bW4nXTtcclxuICBASW5wdXQoKSBnZXRSb3dBcmlhTGFiZWw/OiBJRGV0YWlsc0xpc3RQcm9wc1snZ2V0Um93QXJpYUxhYmVsJ107XHJcbiAgQElucHV0KCkgZ2V0Um93QXJpYURlc2NyaWJlZEJ5PzogSURldGFpbHNMaXN0UHJvcHNbJ2dldFJvd0FyaWFEZXNjcmliZWRCeSddO1xyXG4gIEBJbnB1dCgpIGdldEtleT86IElEZXRhaWxzTGlzdFByb3BzWydnZXRLZXknXTtcclxuICBASW5wdXQoKSBhcmlhTGFiZWw/OiBJRGV0YWlsc0xpc3RQcm9wc1snYXJpYUxhYmVsJ107XHJcbiAgQElucHV0KCkgY2hlY2tCdXR0b25BcmlhTGFiZWw/OiBJRGV0YWlsc0xpc3RQcm9wc1snY2hlY2tCdXR0b25BcmlhTGFiZWwnXTtcclxuICBASW5wdXQoKSBhcmlhTGFiZWxGb3JHcmlkPzogSURldGFpbHNMaXN0UHJvcHNbJ2FyaWFMYWJlbEZvckdyaWQnXTtcclxuICBASW5wdXQoKSBzaG91bGRBcHBseUFwcGxpY2F0aW9uUm9sZT86IElEZXRhaWxzTGlzdFByb3BzWydzaG91bGRBcHBseUFwcGxpY2F0aW9uUm9sZSddO1xyXG4gIEBJbnB1dCgpIG1pbmltdW1QaXhlbHNGb3JEcmFnPzogSURldGFpbHNMaXN0UHJvcHNbJ21pbmltdW1QaXhlbHNGb3JEcmFnJ107XHJcbiAgQElucHV0KCkgY29tcGFjdD86IElEZXRhaWxzTGlzdFByb3BzWydjb21wYWN0J107XHJcbiAgQElucHV0KCkgdXNlUGFnZUNhY2hlPzogSURldGFpbHNMaXN0UHJvcHNbJ3VzZVBhZ2VDYWNoZSddO1xyXG4gIEBJbnB1dCgpIG9uU2hvdWxkVmlydHVhbGl6ZT86IChwcm9wczogSUxpc3RQcm9wcykgPT4gYm9vbGVhbjtcclxuICBASW5wdXQoKSBjaGVja2JveENlbGxDbGFzc05hbWU/OiBJRGV0YWlsc0xpc3RQcm9wc1snY2hlY2tib3hDZWxsQ2xhc3NOYW1lJ107XHJcbiAgQElucHV0KCkgZW50ZXJNb2RhbFNlbGVjdGlvbk9uVG91Y2g/OiBJRGV0YWlsc0xpc3RQcm9wc1snZW50ZXJNb2RhbFNlbGVjdGlvbk9uVG91Y2gnXTtcclxuICBASW5wdXQoKSBjb2x1bW5SZW9yZGVyT3B0aW9ucz86IElEZXRhaWxzTGlzdFByb3BzWydjb2x1bW5SZW9yZGVyT3B0aW9ucyddO1xyXG4gIEBJbnB1dCgpIGdldEdyb3VwSGVpZ2h0PzogSURldGFpbHNMaXN0UHJvcHNbJ2dldEdyb3VwSGVpZ2h0J107XHJcbiAgQElucHV0KCkgdXNlUmVkdWNlZFJvd1JlbmRlcmVyPzogSURldGFpbHNMaXN0UHJvcHNbJ3VzZVJlZHVjZWRSb3dSZW5kZXJlciddO1xyXG4gIEBJbnB1dCgpIGNlbGxTdHlsZVByb3BzPzogSURldGFpbHNMaXN0UHJvcHNbJ2NlbGxTdHlsZVByb3BzJ107XHJcbiAgQElucHV0KCkgZGlzYWJsZVNlbGVjdGlvblpvbmU/OiBJRGV0YWlsc0xpc3RQcm9wc1snZGlzYWJsZVNlbGVjdGlvblpvbmUnXTtcclxuICBASW5wdXQoKSBlbmFibGVVcGRhdGVBbmltYXRpb25zPzogSURldGFpbHNMaXN0UHJvcHNbJ2VuYWJsZVVwZGF0ZUFuaW1hdGlvbnMnXTtcclxuICBASW5wdXQoKSB1c2VGYXN0SWNvbnM/OiBJRGV0YWlsc0xpc3RQcm9wc1sndXNlRmFzdEljb25zJ107XHJcblxyXG4gIC8vIEluaGVyaXRlZCBtZW1iZXJzIChJV2l0aFZpZXdwb3J0UHJvcHMpXHJcbiAgQElucHV0KCkgc2tpcFZpZXdwb3J0TWVhc3VyZXM/OiBJRGV0YWlsc0xpc3RQcm9wc1snc2tpcFZpZXdwb3J0TWVhc3VyZXMnXTtcclxuXHJcbiAgLy8gUmVuZGVyIG1lbWJlcnNcclxuICBASW5wdXQoKSByZW5kZXJDaGVja2JveD86IElucHV0UmVuZGVyZXJPcHRpb25zPElEZXRhaWxzTGlzdENoZWNrYm94UHJvcHM+O1xyXG4gIEBJbnB1dCgpIHJlbmRlckRldGFpbHNGb290ZXI/OiBJbnB1dFJlbmRlcmVyT3B0aW9uczxJRGV0YWlsc0Zvb3RlclByb3BzPjtcclxuICBASW5wdXQoKSByZW5kZXJEZXRhaWxzSGVhZGVyPzogSW5wdXRSZW5kZXJlck9wdGlvbnM8SURldGFpbHNIZWFkZXJQcm9wcz47XHJcbiAgQElucHV0KCkgcmVuZGVyTWlzc2luZ0l0ZW0/OiBJbnB1dFJlbmRlcmVyT3B0aW9uczxJTWlzc2luZ0l0ZW1SZW5kZXJDb250ZXh0PjtcclxuICBASW5wdXQoKSByZW5kZXJSb3c/OiBJbnB1dFJlbmRlcmVyT3B0aW9uczxJRGV0YWlsc1Jvd1Byb3BzPjtcclxuXHJcbiAgLy8gQ2FsbGJhY2sgbWVtYmVyc1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvbkFjdGl2ZUl0ZW1DaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjx7IGl0ZW0/OiBhbnk7IGluZGV4PzogbnVtYmVyOyBldj86IEV2ZW50IH0+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uQ29sdW1uSGVhZGVyQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHsgZXY/OiBFdmVudDsgY29sdW1uPzogSUNvbHVtbiB9PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvbkNvbHVtbkhlYWRlckNvbnRleHRNZW51ID0gbmV3IEV2ZW50RW1pdHRlcjx7IGNvbHVtbj86IElDb2x1bW47IGV2PzogRXZlbnQgfT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25Db2x1bW5SZXNpemUgPSBuZXcgRXZlbnRFbWl0dGVyPHsgY29sdW1uPzogSUNvbHVtbjsgbmV3V2lkdGg/OiBudW1iZXI7IGNvbHVtbkluZGV4PzogbnVtYmVyIH0+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uRGlkVXBkYXRlID0gbmV3IEV2ZW50RW1pdHRlcjx7IGRldGFpbHNMaXN0PzogRGV0YWlsc0xpc3RCYXNlIH0+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uSXRlbUNvbnRleHRNZW51ID0gbmV3IEV2ZW50RW1pdHRlcjx7IGl0ZW0/OiBhbnk7IGluZGV4PzogbnVtYmVyOyBldj86IEV2ZW50IH0+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uSXRlbUludm9rZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHsgaXRlbT86IGFueTsgaW5kZXg/OiBudW1iZXI7IGV2PzogRXZlbnQgfT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25Sb3dEaWRNb3VudCA9IG5ldyBFdmVudEVtaXR0ZXI8eyBpdGVtPzogYW55OyBpbmRleD86IG51bWJlciB9PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvblJvd1dpbGxVbm1vdW50ID0gbmV3IEV2ZW50RW1pdHRlcjx7IGl0ZW0/OiBhbnk7IGluZGV4PzogbnVtYmVyIH0+KCk7XHJcblxyXG4gIC8vIERpcmVjdGl2ZSBtZW1iZXJzXHJcbiAgQElucHV0KCkgY29sdW1uczogUmVhZG9ubHlBcnJheTxJRGV0YWlsc0xpc3RDb2x1bW5PcHRpb25zPjtcclxuICBASW5wdXQoKSBncm91cHM6IFJlYWRvbmx5QXJyYXk8SUdyb3VwPjtcclxuXHJcbiAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gIHRyYW5zZm9ybWVkQ29sdW1uc186IFJlYWRvbmx5QXJyYXk8SUNvbHVtbj47XHJcbiAgdHJhbnNmb3JtZWRHcm91cHNfOiBSZWFkb25seUFycmF5PElHcm91cD47XHJcblxyXG4gIHByaXZhdGUgcmVhZG9ubHkgX3N1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XHJcblxyXG4gIG9uUmVuZGVyQ2hlY2tib3g6IChcclxuICAgIHByb3BzPzogSURldGFpbHNMaXN0Q2hlY2tib3hQcm9wcyxcclxuICAgIGRlZmF1bHRSZW5kZXI/OiBKc3hSZW5kZXJGdW5jPElEZXRhaWxzTGlzdENoZWNrYm94UHJvcHM+XHJcbiAgKSA9PiBKU1guRWxlbWVudDtcclxuICBvblJlbmRlckRldGFpbHNGb290ZXI6IChcclxuICAgIHByb3BzPzogSURldGFpbHNGb290ZXJQcm9wcyxcclxuICAgIGRlZmF1bHRSZW5kZXI/OiBKc3hSZW5kZXJGdW5jPElEZXRhaWxzRm9vdGVyUHJvcHM+XHJcbiAgKSA9PiBKU1guRWxlbWVudDtcclxuICBvblJlbmRlckRldGFpbHNIZWFkZXI6IChcclxuICAgIHByb3BzPzogSURldGFpbHNIZWFkZXJQcm9wcyxcclxuICAgIGRlZmF1bHRSZW5kZXI/OiBKc3hSZW5kZXJGdW5jPElEZXRhaWxzSGVhZGVyUHJvcHM+XHJcbiAgKSA9PiBKU1guRWxlbWVudDtcclxuICBvblJlbmRlck1pc3NpbmdJdGVtOiAoaW5kZXg/OiBudW1iZXIsIHJvd1Byb3BzPzogSURldGFpbHNSb3dQcm9wcykgPT4gSlNYLkVsZW1lbnQ7XHJcbiAgb25SZW5kZXJSb3c6IChwcm9wcz86IElEZXRhaWxzUm93UHJvcHMsIGRlZmF1bHRSZW5kZXI/OiBKc3hSZW5kZXJGdW5jPElEZXRhaWxzUm93UHJvcHM+KSA9PiBKU1guRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCBuZ1pvbmU6IE5nWm9uZSkge1xyXG4gICAgc3VwZXIoZWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyLCB7IG5nWm9uZSwgc2V0SG9zdERpc3BsYXk6IHRydWUgfSk7XHJcblxyXG4gICAgLy8gQmluZCB0aGlzIHRvIGFjY2VzcyBBbmd1bGFyIGNvbXBvbmVudCBwcm9wZXJ0aWVzXHJcbiAgICB0aGlzLm9uQWN0aXZlSXRlbUNoYW5nZWRIYW5kbGVyID0gdGhpcy5vbkFjdGl2ZUl0ZW1DaGFuZ2VkSGFuZGxlci5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbkNvbHVtbkhlYWRlckNsaWNrSGFuZGxlciA9IHRoaXMub25Db2x1bW5IZWFkZXJDbGlja0hhbmRsZXIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25Db2x1bW5IZWFkZXJDb250ZXh0TWVudUhhbmRsZXIgPSB0aGlzLm9uQ29sdW1uSGVhZGVyQ29udGV4dE1lbnVIYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uQ29sdW1uUmVzaXplSGFuZGxlciA9IHRoaXMub25Db2x1bW5SZXNpemVIYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uRGlkVXBkYXRlSGFuZGxlciA9IHRoaXMub25EaWRVcGRhdGVIYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uSXRlbUNvbnRleHRNZW51SGFuZGxlciA9IHRoaXMub25JdGVtQ29udGV4dE1lbnVIYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uSXRlbUludm9rZWRIYW5kbGVyID0gdGhpcy5vbkl0ZW1JbnZva2VkSGFuZGxlci5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vblJvd0RpZE1vdW50SGFuZGxlciA9IHRoaXMub25Sb3dEaWRNb3VudEhhbmRsZXIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25Sb3dXaWxsVW5tb3VudEhhbmRsZXIgPSB0aGlzLm9uUm93V2lsbFVubW91bnRIYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMub25SZW5kZXJDaGVja2JveCA9IHRoaXMuY3JlYXRlUmVuZGVyUHJvcEhhbmRsZXIodGhpcy5yZW5kZXJDaGVja2JveCk7XHJcbiAgICB0aGlzLm9uUmVuZGVyRGV0YWlsc0Zvb3RlciA9IHRoaXMuY3JlYXRlUmVuZGVyUHJvcEhhbmRsZXIodGhpcy5yZW5kZXJEZXRhaWxzRm9vdGVyKTtcclxuICAgIHRoaXMub25SZW5kZXJEZXRhaWxzSGVhZGVyID0gdGhpcy5jcmVhdGVSZW5kZXJQcm9wSGFuZGxlcih0aGlzLnJlbmRlckRldGFpbHNIZWFkZXIpO1xyXG4gICAgdGhpcy5vblJlbmRlclJvdyA9IHRoaXMuY3JlYXRlUmVuZGVyUHJvcEhhbmRsZXIodGhpcy5yZW5kZXJSb3cpO1xyXG5cclxuICAgIGNvbnN0IG1pc3NpbmdJdGVtUmVuZGVyZXIgPSB0aGlzLmNyZWF0ZUlucHV0SnN4UmVuZGVyZXIodGhpcy5yZW5kZXJNaXNzaW5nSXRlbSk7XHJcbiAgICB0aGlzLm9uUmVuZGVyTWlzc2luZ0l0ZW0gPSAoaW5kZXgsIHJvd1Byb3BzKSA9PiBtaXNzaW5nSXRlbVJlbmRlcmVyKHsgaW5kZXgsIHJvd1Byb3BzIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogVHlwZWRDaGFuZ2VzPEZhYkRldGFpbHNMaXN0Q29tcG9uZW50Pikge1xyXG4gICAgaWYgKFxyXG4gICAgICBjaGFuZ2VzWydjb2x1bW5zJ10gJiZcclxuICAgICAgY2hhbmdlc1snY29sdW1ucyddLmN1cnJlbnRWYWx1ZSAmJlxyXG4gICAgICBjaGFuZ2VzWydjb2x1bW5zJ10ucHJldmlvdXNWYWx1ZSAhPT0gY2hhbmdlc1snY29sdW1ucyddLmN1cnJlbnRWYWx1ZVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuX2NyZWF0ZVRyYW5zZm9ybWVkQ29sdW1ucyhjaGFuZ2VzWydjb2x1bW5zJ10uY3VycmVudFZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmIChcclxuICAgICAgY2hhbmdlc1snZ3JvdXBzJ10gJiZcclxuICAgICAgY2hhbmdlc1snZ3JvdXBzJ10uY3VycmVudFZhbHVlICYmXHJcbiAgICAgIGNoYW5nZXNbJ2dyb3VwcyddLnByZXZpb3VzVmFsdWUgIT09IGNoYW5nZXNbJ2dyb3VwcyddLmN1cnJlbnRWYWx1ZVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuX2NyZWF0ZVRyYW5zZm9ybWVkR3JvdXBzKGNoYW5nZXNbJ2dyb3VwcyddLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBzdXBlci5uZ09uQ2hhbmdlcyhjaGFuZ2VzKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmNvbHVtbnNEaXJlY3RpdmUpIHtcclxuICAgICAgdGhpcy5faW5pdERpcmVjdGl2ZSh0aGlzLmNvbHVtbnNEaXJlY3RpdmUsICdjb2x1bW5zJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5ncm91cHNEaXJlY3RpdmUpIHtcclxuICAgICAgdGhpcy5faW5pdERpcmVjdGl2ZSh0aGlzLmdyb3Vwc0RpcmVjdGl2ZSwgJ2dyb3VwcycpO1xyXG4gICAgfVxyXG4gICAgc3VwZXIubmdBZnRlckNvbnRlbnRJbml0KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xyXG4gIH1cclxuXHJcbiAgb25BY3RpdmVJdGVtQ2hhbmdlZEhhbmRsZXIoaXRlbT86IGFueSwgaW5kZXg/OiBudW1iZXIsIGV2PzogUmVhY3QuRm9jdXNFdmVudDxIVE1MRWxlbWVudD4pIHtcclxuICAgIHRoaXMub25BY3RpdmVJdGVtQ2hhbmdlZC5lbWl0KHsgaXRlbSwgaW5kZXgsIGV2OiBldi5uYXRpdmVFdmVudCB9KTtcclxuICB9XHJcblxyXG4gIG9uQ29sdW1uSGVhZGVyQ2xpY2tIYW5kbGVyKGV2PzogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudD4sIGNvbHVtbj86IElDb2x1bW4pIHtcclxuICAgIHRoaXMub25Db2x1bW5IZWFkZXJDbGljay5lbWl0KHsgZXY6IGV2Lm5hdGl2ZUV2ZW50LCBjb2x1bW4gfSk7XHJcbiAgfVxyXG5cclxuICBvbkNvbHVtbkhlYWRlckNvbnRleHRNZW51SGFuZGxlcihjb2x1bW4/OiBJQ29sdW1uLCBldj86IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEVsZW1lbnQ+KSB7XHJcbiAgICB0aGlzLm9uQ29sdW1uSGVhZGVyQ29udGV4dE1lbnUuZW1pdCh7IGNvbHVtbiwgZXY6IGV2Lm5hdGl2ZUV2ZW50IH0pO1xyXG4gIH1cclxuXHJcbiAgb25Db2x1bW5SZXNpemVIYW5kbGVyKGNvbHVtbj86IElDb2x1bW4sIG5ld1dpZHRoPzogbnVtYmVyLCBjb2x1bW5JbmRleD86IG51bWJlcikge1xyXG4gICAgdGhpcy5vbkNvbHVtblJlc2l6ZS5lbWl0KHsgY29sdW1uLCBuZXdXaWR0aCwgY29sdW1uSW5kZXggfSk7XHJcbiAgfVxyXG5cclxuICBvbkRpZFVwZGF0ZUhhbmRsZXIoZGV0YWlsc0xpc3Q/OiBEZXRhaWxzTGlzdEJhc2UpIHtcclxuICAgIHRoaXMub25EaWRVcGRhdGUuZW1pdCh7IGRldGFpbHNMaXN0IH0pO1xyXG4gIH1cclxuXHJcbiAgb25JdGVtQ29udGV4dE1lbnVIYW5kbGVyKGl0ZW0/OiBhbnksIGluZGV4PzogbnVtYmVyLCBldj86IEV2ZW50KSB7XHJcbiAgICB0aGlzLm9uSXRlbUNvbnRleHRNZW51LmVtaXQoeyBpdGVtLCBpbmRleCwgZXYgfSk7XHJcbiAgfVxyXG5cclxuICBvbkl0ZW1JbnZva2VkSGFuZGxlcihpdGVtPzogYW55LCBpbmRleD86IG51bWJlciwgZXY/OiBFdmVudCkge1xyXG4gICAgdGhpcy5vbkl0ZW1JbnZva2VkLmVtaXQoeyBpdGVtLCBpbmRleCwgZXYgfSk7XHJcbiAgfVxyXG5cclxuICBvblJvd0RpZE1vdW50SGFuZGxlcihpdGVtPzogYW55LCBpbmRleD86IG51bWJlcikge1xyXG4gICAgdGhpcy5vblJvd0RpZE1vdW50LmVtaXQoeyBpdGVtLCBpbmRleCB9KTtcclxuICB9XHJcblxyXG4gIG9uUm93V2lsbFVubW91bnRIYW5kbGVyKGl0ZW0/OiBhbnksIGluZGV4PzogbnVtYmVyKSB7XHJcbiAgICB0aGlzLm9uUm93V2lsbFVubW91bnQuZW1pdCh7IGl0ZW0sIGluZGV4IH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfaW5pdERpcmVjdGl2ZShkaXJlY3RpdmU6IENoYW5nZWFibGVJdGVtc0RpcmVjdGl2ZTxhbnk+LCBwcm9wZXJ0eUtleTogJ2NvbHVtbnMnIHwgJ2dyb3VwcycpIHtcclxuICAgIGNvbnN0IHRyYW5zZm9ybUl0ZW1zRnVuYyA9IHRoaXMuX3RyYW5zZm9ybUl0ZW1zRnVuY3Rpb24oZGlyZWN0aXZlKTtcclxuICAgIGNvbnN0IHNldEl0ZW1zID0gKG1hcHBlcjogKGl0ZW1zOiBSZWFkb25seUFycmF5PGFueT4pID0+IFJlYWRvbmx5QXJyYXk8YW55PikgPT4ge1xyXG4gICAgICB0aGlzW3Byb3BlcnR5S2V5XSA9IG1hcHBlcih0aGlzW3Byb3BlcnR5S2V5XSk7XHJcbiAgICAgIHRyYW5zZm9ybUl0ZW1zRnVuYyh0aGlzW3Byb3BlcnR5S2V5XSk7XHJcbiAgICAgIHRoaXMubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHNldEl0ZW1zKCgpID0+IGRpcmVjdGl2ZS5pdGVtcyk7XHJcblxyXG4gICAgLy8gU3Vic2NyaWJlIHRvIGFkZGluZy9yZW1vdmluZyBpdGVtc1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKFxyXG4gICAgICBkaXJlY3RpdmUub25JdGVtc0NoYW5nZWQuc3Vic2NyaWJlKChuZXdJdGVtczogUXVlcnlMaXN0PENoYW5nZWFibGVJdGVtc0RpcmVjdGl2ZTxhbnk+PikgPT4ge1xyXG4gICAgICAgIHNldEl0ZW1zKCgpID0+IG5ld0l0ZW1zLm1hcChkaXJlY3RpdmUgPT4gZGlyZWN0aXZlKSk7XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICAgIC8vIFN1YnNjcmliZSBmb3IgZXhpc3RpbmcgaXRlbSBjaGFuZ2VzXHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLnB1c2goXHJcbiAgICAgIGRpcmVjdGl2ZS5vbkNoaWxkSXRlbUNoYW5nZWQuc3Vic2NyaWJlKCh7IGtleSwgY2hhbmdlcyB9KSA9PiB7XHJcbiAgICAgICAgc2V0SXRlbXMoaXRlbXMgPT4gaXRlbXMubWFwKGl0ZW0gPT4gKGl0ZW0ua2V5ID09PSBrZXkgPyBtZXJnZUl0ZW1DaGFuZ2VzKGl0ZW0sIGNoYW5nZXMpIDogaXRlbSkpKTtcclxuICAgICAgICB0aGlzLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3RyYW5zZm9ybUl0ZW1zRnVuY3Rpb24oZGlyZWN0aXZlOiBDaGFuZ2VhYmxlSXRlbXNEaXJlY3RpdmU8YW55Pikge1xyXG4gICAgaWYgKGRpcmVjdGl2ZSBpbnN0YW5jZW9mIERldGFpbHNMaXN0Q29sdW1uc0RpcmVjdGl2ZSkge1xyXG4gICAgICByZXR1cm4gKG5ld0NvbHVtbnM6IFJlYWRvbmx5QXJyYXk8YW55PikgPT4gdGhpcy5fY3JlYXRlVHJhbnNmb3JtZWRDb2x1bW5zKG5ld0NvbHVtbnMpO1xyXG4gICAgfSBlbHNlIGlmIChkaXJlY3RpdmUgaW5zdGFuY2VvZiBEZXRhaWxzTGlzdEdyb3Vwc0RpcmVjdGl2ZSkge1xyXG4gICAgICByZXR1cm4gKG5ld0dyb3VwczogUmVhZG9ubHlBcnJheTxhbnk+KSA9PiB0aGlzLl9jcmVhdGVUcmFuc2Zvcm1lZEdyb3VwcyhuZXdHcm91cHMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGRpcmVjdGl2ZSBnaXZlbicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfY3JlYXRlVHJhbnNmb3JtZWRDb2x1bW5zKG5ld0NvbHVtbnM6IFJlYWRvbmx5QXJyYXk8SURldGFpbHNMaXN0Q29sdW1uT3B0aW9ucz4pIHtcclxuICAgIHRoaXMudHJhbnNmb3JtZWRDb2x1bW5zXyA9IG5ld0NvbHVtbnMubWFwKGNvbHVtbiA9PiB0aGlzLl90cmFuc2Zvcm1EZXRhaWxzTGlzdENvbHVtbk9wdGlvbnNUb1Byb3BzKGNvbHVtbikpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfdHJhbnNmb3JtRGV0YWlsc0xpc3RDb2x1bW5PcHRpb25zVG9Qcm9wcyhvcHRpb25zOiBJRGV0YWlsc0xpc3RDb2x1bW5PcHRpb25zKTogSUNvbHVtbiB7XHJcbiAgICBjb25zdCByZW5kZXJlciA9IHRoaXMuY3JlYXRlSW5wdXRKc3hSZW5kZXJlcihvcHRpb25zLnJlbmRlcik7XHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihcclxuICAgICAge30sXHJcbiAgICAgIG9taXQob3B0aW9ucywgJ3JlbmRlcicpLFxyXG4gICAgICByZW5kZXJlciAmJlxyXG4gICAgICAoe1xyXG4gICAgICAgIG9uUmVuZGVyOiAoaXRlbT86IGFueSwgaW5kZXg/OiBudW1iZXIsIGNvbHVtbj86IElDb2x1bW4pID0+IHJlbmRlcmVyKHsgaXRlbSwgaW5kZXgsIGNvbHVtbiB9KSxcclxuICAgICAgfSBhcyBQaWNrPElDb2x1bW4sICdvblJlbmRlcic+KVxyXG4gICAgKSBhcyBJQ29sdW1uO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfY3JlYXRlVHJhbnNmb3JtZWRHcm91cHMobmV3R3JvdXBzOiBSZWFkb25seUFycmF5PElHcm91cD4pIHtcclxuICAgIHRoaXMudHJhbnNmb3JtZWRHcm91cHNfID0gbmV3R3JvdXBzO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTWlzc2luZ0l0ZW1SZW5kZXJDb250ZXh0IHtcclxuICBpbmRleD86IG51bWJlcjtcclxuICByb3dQcm9wcz86IElEZXRhaWxzUm93UHJvcHM7XHJcbn1cclxuIl19