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
class DetailsListColumnRenderDirective {
}
DetailsListColumnRenderDirective.decorators = [
    { type: Directive, args: [{ selector: 'fab-details-list-column > render' },] }
];
DetailsListColumnRenderDirective.propDecorators = {
    templateRef: [{ type: ContentChild, args: [TemplateRef, { static: false },] }]
};
if (false) {
    /** @type {?} */
    DetailsListColumnRenderDirective.prototype.templateRef;
}
/**
 * Wrapper directive for creating a DetailsListColumn
 */
class DetailsListColumnDirective extends ChangeableItemDirective {
    constructor() {
        super(...arguments);
        // Callback members
        this.onColumnClick = new EventEmitter();
        this.onColumnContextMenu = new EventEmitter();
        this.onColumnResize = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.renderDirective && this.renderDirective.templateRef) {
            this.render = this.renderDirective.templateRef;
        }
    }
}
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
class DetailsListColumnsDirective extends ChangeableItemsDirective {
    /**
     * @return {?}
     */
    get items() {
        return this.directiveItems.map((/**
         * @param {?} directiveItem
         * @return {?}
         */
        directiveItem => (Object.assign({}, directiveItem, { onColumnClick: (/**
             * @param {?} ev
             * @param {?} column
             * @return {?}
             */
            (ev, column) => {
                directiveItem.onColumnClick.emit({ ev: ev && ev.nativeEvent, column });
            }), onColumnContextMenu: (/**
             * @param {?=} column
             * @param {?=} ev
             * @return {?}
             */
            (column, ev) => {
                directiveItem.onColumnContextMenu.emit({ column, ev: ev && ev.nativeEvent });
            }), onColumnResize: (/**
             * @param {?=} width
             * @return {?}
             */
            (width) => {
                directiveItem.onColumnResize.emit({ width });
            }) }))));
    }
}
DetailsListColumnsDirective.decorators = [
    { type: Directive, args: [{ selector: 'fab-details-list > columns' },] }
];
DetailsListColumnsDirective.propDecorators = {
    directiveItems: [{ type: ContentChildren, args: [DetailsListColumnDirective,] }]
};
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
class DetailsListGroupsDirective extends ChangeableItemsDirective {
    /**
     * @return {?}
     */
    get items() {
        return this.directiveItems.toArray();
    }
}
DetailsListGroupsDirective.decorators = [
    { type: Directive, args: [{ selector: 'fab-details-list > groups' },] }
];
DetailsListGroupsDirective.propDecorators = {
    directiveItems: [{ type: ContentChildren, args: [GroupItemDirective,] }]
};
if (false) {
    /** @type {?} */
    DetailsListGroupsDirective.prototype.directiveItems;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabDetailsListComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, { ngZone, setHostDisplay: true });
        // Callback members
        this.onActiveItemChanged = new EventEmitter();
        this.onColumnHeaderClick = new EventEmitter();
        this.onColumnHeaderContextMenu = new EventEmitter();
        this.onColumnResize = new EventEmitter();
        this.onDidUpdate = new EventEmitter();
        this.onItemContextMenu = new EventEmitter();
        this.onItemInvoked = new EventEmitter();
        this.onRowDidMount = new EventEmitter();
        this.onRowWillUnmount = new EventEmitter();
        this._subscriptions = [];
        // Bind this to access Angular component properties
        this.onActiveItemChangedHandler = this.onActiveItemChangedHandler.bind(this);
        this.onColumnHeaderClickHandler = this.onColumnHeaderClickHandler.bind(this);
        this.onColumnHeaderContextMenuHandler = this.onColumnHeaderContextMenuHandler.bind(this);
        this.onColumnResizeHandler = this.onColumnResizeHandler.bind(this);
        this.onDidUpdateHandler = this.onDidUpdateHandler.bind(this);
        this.onItemContextMenuHandler = this.onItemContextMenuHandler.bind(this);
        this.onItemInvokedHandler = this.onItemInvokedHandler.bind(this);
        this.onRowDidMountHandler = this.onRowDidMountHandler.bind(this);
        this.onRowWillUnmountHandler = this.onRowWillUnmountHandler.bind(this);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onRenderCheckbox = this.createRenderPropHandler(this.renderCheckbox);
        this.onRenderDetailsFooter = this.createRenderPropHandler(this.renderDetailsFooter);
        this.onRenderDetailsHeader = this.createRenderPropHandler(this.renderDetailsHeader);
        this.onRenderRow = this.createRenderPropHandler(this.renderRow);
        /** @type {?} */
        const missingItemRenderer = this.createInputJsxRenderer(this.renderMissingItem);
        this.onRenderMissingItem = (/**
         * @param {?} index
         * @param {?} rowProps
         * @return {?}
         */
        (index, rowProps) => missingItemRenderer({ index, rowProps }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
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
        super.ngOnChanges(changes);
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.columnsDirective) {
            this._initDirective(this.columnsDirective, 'columns');
        }
        if (this.groupsDirective) {
            this._initDirective(this.groupsDirective, 'groups');
        }
        super.ngAfterContentInit();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._subscriptions.forEach((/**
         * @param {?} sub
         * @return {?}
         */
        sub => sub.unsubscribe()));
    }
    /**
     * @param {?=} item
     * @param {?=} index
     * @param {?=} ev
     * @return {?}
     */
    onActiveItemChangedHandler(item, index, ev) {
        this.onActiveItemChanged.emit({ item, index, ev: ev.nativeEvent });
    }
    /**
     * @param {?=} ev
     * @param {?=} column
     * @return {?}
     */
    onColumnHeaderClickHandler(ev, column) {
        this.onColumnHeaderClick.emit({ ev: ev.nativeEvent, column });
    }
    /**
     * @param {?=} column
     * @param {?=} ev
     * @return {?}
     */
    onColumnHeaderContextMenuHandler(column, ev) {
        this.onColumnHeaderContextMenu.emit({ column, ev: ev.nativeEvent });
    }
    /**
     * @param {?=} column
     * @param {?=} newWidth
     * @param {?=} columnIndex
     * @return {?}
     */
    onColumnResizeHandler(column, newWidth, columnIndex) {
        this.onColumnResize.emit({ column, newWidth, columnIndex });
    }
    /**
     * @param {?=} detailsList
     * @return {?}
     */
    onDidUpdateHandler(detailsList) {
        this.onDidUpdate.emit({ detailsList });
    }
    /**
     * @param {?=} item
     * @param {?=} index
     * @param {?=} ev
     * @return {?}
     */
    onItemContextMenuHandler(item, index, ev) {
        this.onItemContextMenu.emit({ item, index, ev });
    }
    /**
     * @param {?=} item
     * @param {?=} index
     * @param {?=} ev
     * @return {?}
     */
    onItemInvokedHandler(item, index, ev) {
        this.onItemInvoked.emit({ item, index, ev });
    }
    /**
     * @param {?=} item
     * @param {?=} index
     * @return {?}
     */
    onRowDidMountHandler(item, index) {
        this.onRowDidMount.emit({ item, index });
    }
    /**
     * @param {?=} item
     * @param {?=} index
     * @return {?}
     */
    onRowWillUnmountHandler(item, index) {
        this.onRowWillUnmount.emit({ item, index });
    }
    /**
     * @private
     * @param {?} directive
     * @param {?} propertyKey
     * @return {?}
     */
    _initDirective(directive, propertyKey) {
        /** @type {?} */
        const transformItemsFunc = this._transformItemsFunction(directive);
        /** @type {?} */
        const setItems = (/**
         * @param {?} mapper
         * @return {?}
         */
        (mapper) => {
            this[propertyKey] = mapper(this[propertyKey]);
            transformItemsFunc(this[propertyKey]);
            this.markForCheck();
        });
        setItems((/**
         * @return {?}
         */
        () => directive.items));
        // Subscribe to adding/removing items
        this._subscriptions.push(directive.onItemsChanged.subscribe((/**
         * @param {?} newItems
         * @return {?}
         */
        (newItems) => {
            setItems((/**
             * @return {?}
             */
            () => newItems.map((/**
             * @param {?} directive
             * @return {?}
             */
            directive => directive))));
        })));
        // Subscribe for existing item changes
        this._subscriptions.push(directive.onChildItemChanged.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ key, changes }) => {
            setItems((/**
             * @param {?} items
             * @return {?}
             */
            items => items.map((/**
             * @param {?} item
             * @return {?}
             */
            item => (item.key === key ? mergeItemChanges(item, changes) : item)))));
            this.markForCheck();
        })));
    }
    /**
     * @private
     * @param {?} directive
     * @return {?}
     */
    _transformItemsFunction(directive) {
        if (directive instanceof DetailsListColumnsDirective) {
            return (/**
             * @param {?} newColumns
             * @return {?}
             */
            (newColumns) => this._createTransformedColumns(newColumns));
        }
        else if (directive instanceof DetailsListGroupsDirective) {
            return (/**
             * @param {?} newGroups
             * @return {?}
             */
            (newGroups) => this._createTransformedGroups(newGroups));
        }
        else {
            throw new Error('Invalid directive given');
        }
    }
    /**
     * @private
     * @param {?} newColumns
     * @return {?}
     */
    _createTransformedColumns(newColumns) {
        this.transformedColumns_ = newColumns.map((/**
         * @param {?} column
         * @return {?}
         */
        column => this._transformDetailsListColumnOptionsToProps(column)));
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    _transformDetailsListColumnOptionsToProps(options) {
        /** @type {?} */
        const renderer = this.createInputJsxRenderer(options.render);
        return (/** @type {?} */ (Object.assign({}, omit(options, 'render'), renderer &&
            ((/** @type {?} */ ({
                onRender: (/**
                 * @param {?=} item
                 * @param {?=} index
                 * @param {?=} column
                 * @return {?}
                 */
                (item, index, column) => renderer({ item, index, column })),
            }))))));
    }
    /**
     * @private
     * @param {?} newGroups
     * @return {?}
     */
    _createTransformedGroups(newGroups) {
        this.transformedGroups_ = newGroups;
    }
}
FabDetailsListComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-details-list',
                exportAs: 'fabDetailsList',
                template: `
    <DetailsList
      #reactNode
      [items]="items"
      [ariaLabel]="ariaLabel"
      [ariaLabelForGrid]="ariaLabelForGrid"
      [ariaLabelForListHeader]="ariaLabelForListHeader"
      [ariaLabelForSelectAllCheckbox]="ariaLabelForSelectAllCheckbox"
      [ariaLabelForSelectionColumn]="ariaLabelForSelectionColumn"
      [cellStyleProps]="cellStyleProps"
      [checkButtonAriaLabel]="checkButtonAriaLabel"
      [checkboxCellClassName]="checkboxCellClassName"
      [checkboxVisibility]="checkboxVisibility"
      [className]="className"
      [columnReorderOptions]="columnReorderOptions"
      [columns]="transformedColumns_"
      [compact]="compact"
      [componentRef]="componentRef"
      [constrainMode]="constrainMode"
      [disableSelectionZone]="disableSelectionZone"
      [dragDropEvents]="dragDropEvents"
      [enableUpdateAnimations]="enableUpdateAnimations"
      [enterModalSelectionOnTouch]="enterModalSelectionOnTouch"
      [getCellValueKey]="getCellValueKey"
      [getGroupHeight]="getGroupHeight"
      [getKey]="getKey"
      [getRowAriaDescribedBy]="getRowAriaDescribedBy"
      [getRowAriaLabel]="getRowAriaLabel"
      [groupProps]="groupProps"
      [groups]="transformedGroups_"
      [indentWidth]="indentWidth"
      [initialFocusedIndex]="initialFocusedIndex"
      [isHeaderVisible]="isHeaderVisible"
      [layoutMode]="layoutMode"
      [listProps]="listProps"
      [minimumPixelsForDrag]="minimumPixelsForDrag"
      [rowElementEventMap]="rowElementEventMap"
      [selection]="selection"
      [selectionMode]="selectionMode"
      [selectionPreservedOnEmptyClick]="selectionPreservedOnEmptyClick"
      [selectionZoneProps]="selectionZoneProps"
      [setKey]="setKey"
      [shouldApplyApplicationRole]="shouldApplyApplicationRole"
      [skipViewportMeasures]="skipViewportMeasures"
      [styles]="styles"
      [theme]="theme"
      [useFastIcons]="useFastIcons"
      [usePageCache]="usePageCache"
      [useReducedRowRenderer]="useReducedRowRenderer"
      [viewport]="viewport"
      [RenderCheckbox]="renderCheckbox && onRenderCheckbox"
      [RenderDetailsFooter]="renderDetailsFooter && onRenderDetailsFooter"
      [RenderDetailsHeader]="renderDetailsHeader && onRenderDetailsHeader"
      [RenderMissingItem]="renderMissingItem && onRenderMissingItem"
      [RenderRow]="renderDetailsHeader && onRenderRow"
      [ActiveItemChanged]="onActiveItemChangedHandler"
      [ColumnHeaderClick]="onColumnHeaderClickHandler"
      [ColumnHeaderContextMenu]="onColumnHeaderContextMenuHandler"
      [ColumnResize]="onColumnResizeHandler"
      [DidUpdate]="onDidUpdateHandler"
      [ItemContextMenu]="onItemContextMenuHandler"
      [ItemInvoked]="onItemInvokedHandler"
      [RowDidMount]="onRowDidMountHandler"
      [RowWillUnmount]="onRowWillUnmountHandler"
      [ShouldVirtualize]="onShouldVirtualize"
    >
    </DetailsList>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabDetailsListComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
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
const components = [
    DetailsListColumnDirective,
    DetailsListColumnRenderDirective,
    DetailsListColumnsDirective,
    DetailsListGroupsDirective,
    FabDetailsListComponent,
];
class FabDetailsListModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('DetailsList', (/**
         * @return {?}
         */
        () => DetailsList));
    }
}
FabDetailsListModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FabGroupModule],
                declarations: components,
                exports: [...components, FabGroupModule],
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabDetailsListModule.ctorParameters = () => [];

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
