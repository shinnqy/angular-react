/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ChangeDetectionStrategy, ChangeDetectorRef, ContentChild, Component, ElementRef, EventEmitter, Input, NgZone, Output, Renderer2, ViewChild, } from '@angular/core';
import { ReactWrapperComponent } from '@angular-react/core';
import { omit } from 'angular-react-toolkit/utils/omit';
import { mergeItemChanges } from 'angular-react-toolkit/core/declarative/item-changed';
import { DetailsListColumnsDirective } from './directives/details-list-columns.directive';
import { DetailsListGroupsDirective } from './directives/details-list-groups.directive';
export class FabDetailsListComponent extends ReactWrapperComponent {
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
export function IMissingItemRenderContext() { }
if (false) {
    /** @type {?|undefined} */
    IMissingItemRenderContext.prototype.index;
    /** @type {?|undefined} */
    IMissingItemRenderContext.prototype.rowProps;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RldGFpbHMtbGlzdC9kZXRhaWxzLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFlBQVksRUFDWixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUdOLE1BQU0sRUFFTixTQUFTLEVBQ1QsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBdUMscUJBQXFCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQWNqRyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFJdkYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDMUYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUE0RXhGLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxxQkFBd0M7Ozs7Ozs7SUFtR25GLFlBQVksVUFBc0IsRUFBRSxpQkFBb0MsRUFBRSxRQUFtQixFQUFFLE1BQWM7UUFDM0csS0FBSyxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7O1FBcENoRSx3QkFBbUIsR0FBRyxJQUFJLFlBQVksRUFBOEMsQ0FBQztRQUNyRix3QkFBbUIsR0FBRyxJQUFJLFlBQVksRUFBb0MsQ0FBQztRQUMzRSw4QkFBeUIsR0FBRyxJQUFJLFlBQVksRUFBb0MsQ0FBQztRQUNqRixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFpRSxDQUFD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OztJQUMxRSxzREFBeUU7O0lBQ3pFLHNEQUF5RTs7SUFDekUsb0RBQTZFOztJQUM3RSw0Q0FBNEQ7O0lBRzVELHNEQUF3Rzs7SUFDeEcsc0RBQThGOztJQUM5Riw0REFBb0c7O0lBQ3BHLGlEQUFzSDs7SUFDdEgsOENBQXVGOztJQUN2RixvREFBc0c7O0lBQ3RHLGdEQUFrRzs7SUFDbEcsZ0RBQXNGOztJQUN0RixtREFBeUY7O0lBR3pGLDBDQUEyRDs7SUFDM0QseUNBQXVDOzs7OztJQUd2QyxzREFBNEM7O0lBQzVDLHFEQUEwQzs7Ozs7SUFFMUMsaURBQXFEOztJQUVyRCxtREFHaUI7O0lBQ2pCLHdEQUdpQjs7SUFDakIsd0RBR2lCOztJQUNqQixzREFBa0Y7O0lBQ2xGLDhDQUF3Rzs7Ozs7QUF3SjFHLCtDQUdDOzs7SUFGQywwQ0FBZTs7SUFDZiw2Q0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0NoaWxkLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbnB1dFJlbmRlcmVyT3B0aW9ucywgSnN4UmVuZGVyRnVuYywgUmVhY3RXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXItcmVhY3QvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgRGV0YWlsc0xpc3RCYXNlLFxyXG4gIElDb2x1bW4sXHJcbiAgSURldGFpbHNMaXN0Q2hlY2tib3hQcm9wcyxcclxuICBJRGV0YWlsc0Zvb3RlclByb3BzLFxyXG4gIElEZXRhaWxzSGVhZGVyUHJvcHMsXHJcbiAgSURldGFpbHNMaXN0UHJvcHMsXHJcbiAgSURldGFpbHNSb3dQcm9wcyxcclxuICBJR3JvdXAsXHJcbn0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvRGV0YWlsc0xpc3QnO1xyXG5pbXBvcnQgeyBJTGlzdFByb3BzIH0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvTGlzdCc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBPbkNoYW5nZXMsIFR5cGVkQ2hhbmdlcyB9IGZyb20gJ2FuZ3VsYXItcmVhY3QtdG9vbGtpdC9kZWNsYXJhdGlvbnMvYW5ndWxhci90eXBlZC1jaGFuZ2VzJztcclxuaW1wb3J0IHsgb21pdCB9IGZyb20gJ2FuZ3VsYXItcmVhY3QtdG9vbGtpdC91dGlscy9vbWl0JztcclxuaW1wb3J0IHsgbWVyZ2VJdGVtQ2hhbmdlcyB9IGZyb20gJ2FuZ3VsYXItcmVhY3QtdG9vbGtpdC9jb3JlL2RlY2xhcmF0aXZlL2l0ZW0tY2hhbmdlZCc7XHJcbmltcG9ydCB7IENoYW5nZWFibGVJdGVtc0RpcmVjdGl2ZSB9IGZyb20gJ2FuZ3VsYXItcmVhY3QtdG9vbGtpdC9jb3JlL3NoYXJlZC9jaGFuZ2VhYmxlLWl0ZW1zLmRpcmVjdGl2ZSc7XHJcblxyXG5pbXBvcnQgeyBJRGV0YWlsc0xpc3RDb2x1bW5PcHRpb25zIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2RldGFpbHMtbGlzdC1jb2x1bW4uZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRGV0YWlsc0xpc3RDb2x1bW5zRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2RldGFpbHMtbGlzdC1jb2x1bW5zLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IERldGFpbHNMaXN0R3JvdXBzRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2RldGFpbHMtbGlzdC1ncm91cHMuZGlyZWN0aXZlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZmFiLWRldGFpbHMtbGlzdCcsXHJcbiAgZXhwb3J0QXM6ICdmYWJEZXRhaWxzTGlzdCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxEZXRhaWxzTGlzdFxyXG4gICAgICAjcmVhY3ROb2RlXHJcbiAgICAgIFtpdGVtc109XCJpdGVtc1wiXHJcbiAgICAgIFthcmlhTGFiZWxdPVwiYXJpYUxhYmVsXCJcclxuICAgICAgW2FyaWFMYWJlbEZvckdyaWRdPVwiYXJpYUxhYmVsRm9yR3JpZFwiXHJcbiAgICAgIFthcmlhTGFiZWxGb3JMaXN0SGVhZGVyXT1cImFyaWFMYWJlbEZvckxpc3RIZWFkZXJcIlxyXG4gICAgICBbYXJpYUxhYmVsRm9yU2VsZWN0QWxsQ2hlY2tib3hdPVwiYXJpYUxhYmVsRm9yU2VsZWN0QWxsQ2hlY2tib3hcIlxyXG4gICAgICBbYXJpYUxhYmVsRm9yU2VsZWN0aW9uQ29sdW1uXT1cImFyaWFMYWJlbEZvclNlbGVjdGlvbkNvbHVtblwiXHJcbiAgICAgIFtjZWxsU3R5bGVQcm9wc109XCJjZWxsU3R5bGVQcm9wc1wiXHJcbiAgICAgIFtjaGVja0J1dHRvbkFyaWFMYWJlbF09XCJjaGVja0J1dHRvbkFyaWFMYWJlbFwiXHJcbiAgICAgIFtjaGVja2JveENlbGxDbGFzc05hbWVdPVwiY2hlY2tib3hDZWxsQ2xhc3NOYW1lXCJcclxuICAgICAgW2NoZWNrYm94VmlzaWJpbGl0eV09XCJjaGVja2JveFZpc2liaWxpdHlcIlxyXG4gICAgICBbY2xhc3NOYW1lXT1cImNsYXNzTmFtZVwiXHJcbiAgICAgIFtjb2x1bW5SZW9yZGVyT3B0aW9uc109XCJjb2x1bW5SZW9yZGVyT3B0aW9uc1wiXHJcbiAgICAgIFtjb2x1bW5zXT1cInRyYW5zZm9ybWVkQ29sdW1uc19cIlxyXG4gICAgICBbY29tcGFjdF09XCJjb21wYWN0XCJcclxuICAgICAgW2NvbXBvbmVudFJlZl09XCJjb21wb25lbnRSZWZcIlxyXG4gICAgICBbY29uc3RyYWluTW9kZV09XCJjb25zdHJhaW5Nb2RlXCJcclxuICAgICAgW2Rpc2FibGVTZWxlY3Rpb25ab25lXT1cImRpc2FibGVTZWxlY3Rpb25ab25lXCJcclxuICAgICAgW2RyYWdEcm9wRXZlbnRzXT1cImRyYWdEcm9wRXZlbnRzXCJcclxuICAgICAgW2VuYWJsZVVwZGF0ZUFuaW1hdGlvbnNdPVwiZW5hYmxlVXBkYXRlQW5pbWF0aW9uc1wiXHJcbiAgICAgIFtlbnRlck1vZGFsU2VsZWN0aW9uT25Ub3VjaF09XCJlbnRlck1vZGFsU2VsZWN0aW9uT25Ub3VjaFwiXHJcbiAgICAgIFtnZXRDZWxsVmFsdWVLZXldPVwiZ2V0Q2VsbFZhbHVlS2V5XCJcclxuICAgICAgW2dldEdyb3VwSGVpZ2h0XT1cImdldEdyb3VwSGVpZ2h0XCJcclxuICAgICAgW2dldEtleV09XCJnZXRLZXlcIlxyXG4gICAgICBbZ2V0Um93QXJpYURlc2NyaWJlZEJ5XT1cImdldFJvd0FyaWFEZXNjcmliZWRCeVwiXHJcbiAgICAgIFtnZXRSb3dBcmlhTGFiZWxdPVwiZ2V0Um93QXJpYUxhYmVsXCJcclxuICAgICAgW2dyb3VwUHJvcHNdPVwiZ3JvdXBQcm9wc1wiXHJcbiAgICAgIFtncm91cHNdPVwidHJhbnNmb3JtZWRHcm91cHNfXCJcclxuICAgICAgW2luZGVudFdpZHRoXT1cImluZGVudFdpZHRoXCJcclxuICAgICAgW2luaXRpYWxGb2N1c2VkSW5kZXhdPVwiaW5pdGlhbEZvY3VzZWRJbmRleFwiXHJcbiAgICAgIFtpc0hlYWRlclZpc2libGVdPVwiaXNIZWFkZXJWaXNpYmxlXCJcclxuICAgICAgW2xheW91dE1vZGVdPVwibGF5b3V0TW9kZVwiXHJcbiAgICAgIFtsaXN0UHJvcHNdPVwibGlzdFByb3BzXCJcclxuICAgICAgW21pbmltdW1QaXhlbHNGb3JEcmFnXT1cIm1pbmltdW1QaXhlbHNGb3JEcmFnXCJcclxuICAgICAgW3Jvd0VsZW1lbnRFdmVudE1hcF09XCJyb3dFbGVtZW50RXZlbnRNYXBcIlxyXG4gICAgICBbc2VsZWN0aW9uXT1cInNlbGVjdGlvblwiXHJcbiAgICAgIFtzZWxlY3Rpb25Nb2RlXT1cInNlbGVjdGlvbk1vZGVcIlxyXG4gICAgICBbc2VsZWN0aW9uUHJlc2VydmVkT25FbXB0eUNsaWNrXT1cInNlbGVjdGlvblByZXNlcnZlZE9uRW1wdHlDbGlja1wiXHJcbiAgICAgIFtzZWxlY3Rpb25ab25lUHJvcHNdPVwic2VsZWN0aW9uWm9uZVByb3BzXCJcclxuICAgICAgW3NldEtleV09XCJzZXRLZXlcIlxyXG4gICAgICBbc2hvdWxkQXBwbHlBcHBsaWNhdGlvblJvbGVdPVwic2hvdWxkQXBwbHlBcHBsaWNhdGlvblJvbGVcIlxyXG4gICAgICBbc2tpcFZpZXdwb3J0TWVhc3VyZXNdPVwic2tpcFZpZXdwb3J0TWVhc3VyZXNcIlxyXG4gICAgICBbc3R5bGVzXT1cInN0eWxlc1wiXHJcbiAgICAgIFt0aGVtZV09XCJ0aGVtZVwiXHJcbiAgICAgIFt1c2VGYXN0SWNvbnNdPVwidXNlRmFzdEljb25zXCJcclxuICAgICAgW3VzZVBhZ2VDYWNoZV09XCJ1c2VQYWdlQ2FjaGVcIlxyXG4gICAgICBbdXNlUmVkdWNlZFJvd1JlbmRlcmVyXT1cInVzZVJlZHVjZWRSb3dSZW5kZXJlclwiXHJcbiAgICAgIFt2aWV3cG9ydF09XCJ2aWV3cG9ydFwiXHJcbiAgICAgIFtSZW5kZXJDaGVja2JveF09XCJyZW5kZXJDaGVja2JveCAmJiBvblJlbmRlckNoZWNrYm94XCJcclxuICAgICAgW1JlbmRlckRldGFpbHNGb290ZXJdPVwicmVuZGVyRGV0YWlsc0Zvb3RlciAmJiBvblJlbmRlckRldGFpbHNGb290ZXJcIlxyXG4gICAgICBbUmVuZGVyRGV0YWlsc0hlYWRlcl09XCJyZW5kZXJEZXRhaWxzSGVhZGVyICYmIG9uUmVuZGVyRGV0YWlsc0hlYWRlclwiXHJcbiAgICAgIFtSZW5kZXJNaXNzaW5nSXRlbV09XCJyZW5kZXJNaXNzaW5nSXRlbSAmJiBvblJlbmRlck1pc3NpbmdJdGVtXCJcclxuICAgICAgW1JlbmRlclJvd109XCJyZW5kZXJEZXRhaWxzSGVhZGVyICYmIG9uUmVuZGVyUm93XCJcclxuICAgICAgW0FjdGl2ZUl0ZW1DaGFuZ2VkXT1cIm9uQWN0aXZlSXRlbUNoYW5nZWRIYW5kbGVyXCJcclxuICAgICAgW0NvbHVtbkhlYWRlckNsaWNrXT1cIm9uQ29sdW1uSGVhZGVyQ2xpY2tIYW5kbGVyXCJcclxuICAgICAgW0NvbHVtbkhlYWRlckNvbnRleHRNZW51XT1cIm9uQ29sdW1uSGVhZGVyQ29udGV4dE1lbnVIYW5kbGVyXCJcclxuICAgICAgW0NvbHVtblJlc2l6ZV09XCJvbkNvbHVtblJlc2l6ZUhhbmRsZXJcIlxyXG4gICAgICBbRGlkVXBkYXRlXT1cIm9uRGlkVXBkYXRlSGFuZGxlclwiXHJcbiAgICAgIFtJdGVtQ29udGV4dE1lbnVdPVwib25JdGVtQ29udGV4dE1lbnVIYW5kbGVyXCJcclxuICAgICAgW0l0ZW1JbnZva2VkXT1cIm9uSXRlbUludm9rZWRIYW5kbGVyXCJcclxuICAgICAgW1Jvd0RpZE1vdW50XT1cIm9uUm93RGlkTW91bnRIYW5kbGVyXCJcclxuICAgICAgW1Jvd1dpbGxVbm1vdW50XT1cIm9uUm93V2lsbFVubW91bnRIYW5kbGVyXCJcclxuICAgICAgW1Nob3VsZFZpcnR1YWxpemVdPVwib25TaG91bGRWaXJ0dWFsaXplXCJcclxuICAgID5cclxuICAgIDwvRGV0YWlsc0xpc3Q+XHJcbiAgYCxcclxuICBzdHlsZXM6IFsncmVhY3QtcmVuZGVyZXInXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZhYkRldGFpbHNMaXN0Q29tcG9uZW50IGV4dGVuZHMgUmVhY3RXcmFwcGVyQ29tcG9uZW50PElEZXRhaWxzTGlzdFByb3BzPlxyXG4gIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzPEZhYkRldGFpbHNMaXN0Q29tcG9uZW50PiwgT25EZXN0cm95LCBPbkluaXQge1xyXG4gIEBDb250ZW50Q2hpbGQoRGV0YWlsc0xpc3RDb2x1bW5zRGlyZWN0aXZlLCB7IHN0YXRpYzogdHJ1ZSB9KSByZWFkb25seSBjb2x1bW5zRGlyZWN0aXZlPzogRGV0YWlsc0xpc3RDb2x1bW5zRGlyZWN0aXZlO1xyXG4gIEBDb250ZW50Q2hpbGQoRGV0YWlsc0xpc3RHcm91cHNEaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlIH0pIHJlYWRvbmx5IGdyb3Vwc0RpcmVjdGl2ZT86IERldGFpbHNMaXN0R3JvdXBzRGlyZWN0aXZlO1xyXG5cclxuICBAVmlld0NoaWxkKCdyZWFjdE5vZGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcm90ZWN0ZWQgcmVhY3ROb2RlUmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICBASW5wdXQoKSB0aGVtZT86IElEZXRhaWxzTGlzdFByb3BzWyd0aGVtZSddO1xyXG4gIEBJbnB1dCgpIHN0eWxlcz86IElEZXRhaWxzTGlzdFByb3BzWydzdHlsZXMnXTtcclxuICBASW5wdXQoKSBjb21wb25lbnRSZWY/OiBJRGV0YWlsc0xpc3RQcm9wc1snY29tcG9uZW50UmVmJ107XHJcbiAgQElucHV0KCkgc2V0S2V5PzogSURldGFpbHNMaXN0UHJvcHNbJ3NldEtleSddO1xyXG4gIEBJbnB1dCgpIGl0ZW1zOiBJRGV0YWlsc0xpc3RQcm9wc1snaXRlbXMnXTtcclxuICBASW5wdXQoKSBsaXN0UHJvcHM/OiBJRGV0YWlsc0xpc3RQcm9wc1snbGlzdFByb3BzJ107XHJcbiAgQElucHV0KCkgaW5pdGlhbEZvY3VzZWRJbmRleD86IElEZXRhaWxzTGlzdFByb3BzWydpbml0aWFsRm9jdXNlZEluZGV4J107XHJcbiAgQElucHV0KCkgY2xhc3NOYW1lPzogSURldGFpbHNMaXN0UHJvcHNbJ2NsYXNzTmFtZSddO1xyXG4gIEBJbnB1dCgpIGdyb3VwUHJvcHM/OiBJRGV0YWlsc0xpc3RQcm9wc1snZ3JvdXBQcm9wcyddO1xyXG4gIEBJbnB1dCgpIGluZGVudFdpZHRoPzogSURldGFpbHNMaXN0UHJvcHNbJ2luZGVudFdpZHRoJ107XHJcbiAgQElucHV0KCkgc2VsZWN0aW9uPzogSURldGFpbHNMaXN0UHJvcHNbJ3NlbGVjdGlvbiddO1xyXG4gIEBJbnB1dCgpIHNlbGVjdGlvbk1vZGU/OiBJRGV0YWlsc0xpc3RQcm9wc1snc2VsZWN0aW9uTW9kZSddO1xyXG4gIEBJbnB1dCgpIHNlbGVjdGlvblByZXNlcnZlZE9uRW1wdHlDbGljaz86IElEZXRhaWxzTGlzdFByb3BzWydzZWxlY3Rpb25QcmVzZXJ2ZWRPbkVtcHR5Q2xpY2snXTtcclxuICBASW5wdXQoKSBzZWxlY3Rpb25ab25lUHJvcHM/OiBJRGV0YWlsc0xpc3RQcm9wc1snc2VsZWN0aW9uWm9uZVByb3BzJ107XHJcbiAgQElucHV0KCkgbGF5b3V0TW9kZT86IElEZXRhaWxzTGlzdFByb3BzWydsYXlvdXRNb2RlJ107XHJcbiAgQElucHV0KCkgY2hlY2tib3hWaXNpYmlsaXR5PzogSURldGFpbHNMaXN0UHJvcHNbJ2NoZWNrYm94VmlzaWJpbGl0eSddO1xyXG4gIEBJbnB1dCgpIGlzSGVhZGVyVmlzaWJsZT86IElEZXRhaWxzTGlzdFByb3BzWydpc0hlYWRlclZpc2libGUnXTtcclxuICBASW5wdXQoKSBjb25zdHJhaW5Nb2RlPzogSURldGFpbHNMaXN0UHJvcHNbJ2NvbnN0cmFpbk1vZGUnXTtcclxuICBASW5wdXQoKSByb3dFbGVtZW50RXZlbnRNYXA/OiBJRGV0YWlsc0xpc3RQcm9wc1sncm93RWxlbWVudEV2ZW50TWFwJ107XHJcbiAgQElucHV0KCkgZ2V0Q2VsbFZhbHVlS2V5PzogSURldGFpbHNMaXN0UHJvcHNbJ2dldENlbGxWYWx1ZUtleSddO1xyXG4gIEBJbnB1dCgpIGRyYWdEcm9wRXZlbnRzPzogSURldGFpbHNMaXN0UHJvcHNbJ2RyYWdEcm9wRXZlbnRzJ107XHJcbiAgQElucHV0KCkgdmlld3BvcnQ/OiBJRGV0YWlsc0xpc3RQcm9wc1sndmlld3BvcnQnXTtcclxuICBASW5wdXQoKSBhcmlhTGFiZWxGb3JMaXN0SGVhZGVyPzogSURldGFpbHNMaXN0UHJvcHNbJ2FyaWFMYWJlbEZvckxpc3RIZWFkZXInXTtcclxuICBASW5wdXQoKSBhcmlhTGFiZWxGb3JTZWxlY3RBbGxDaGVja2JveD86IElEZXRhaWxzTGlzdFByb3BzWydhcmlhTGFiZWxGb3JTZWxlY3RBbGxDaGVja2JveCddO1xyXG4gIEBJbnB1dCgpIGFyaWFMYWJlbEZvclNlbGVjdGlvbkNvbHVtbj86IElEZXRhaWxzTGlzdFByb3BzWydhcmlhTGFiZWxGb3JTZWxlY3Rpb25Db2x1bW4nXTtcclxuICBASW5wdXQoKSBnZXRSb3dBcmlhTGFiZWw/OiBJRGV0YWlsc0xpc3RQcm9wc1snZ2V0Um93QXJpYUxhYmVsJ107XHJcbiAgQElucHV0KCkgZ2V0Um93QXJpYURlc2NyaWJlZEJ5PzogSURldGFpbHNMaXN0UHJvcHNbJ2dldFJvd0FyaWFEZXNjcmliZWRCeSddO1xyXG4gIEBJbnB1dCgpIGdldEtleT86IElEZXRhaWxzTGlzdFByb3BzWydnZXRLZXknXTtcclxuICBASW5wdXQoKSBhcmlhTGFiZWw/OiBJRGV0YWlsc0xpc3RQcm9wc1snYXJpYUxhYmVsJ107XHJcbiAgQElucHV0KCkgY2hlY2tCdXR0b25BcmlhTGFiZWw/OiBJRGV0YWlsc0xpc3RQcm9wc1snY2hlY2tCdXR0b25BcmlhTGFiZWwnXTtcclxuICBASW5wdXQoKSBhcmlhTGFiZWxGb3JHcmlkPzogSURldGFpbHNMaXN0UHJvcHNbJ2FyaWFMYWJlbEZvckdyaWQnXTtcclxuICBASW5wdXQoKSBzaG91bGRBcHBseUFwcGxpY2F0aW9uUm9sZT86IElEZXRhaWxzTGlzdFByb3BzWydzaG91bGRBcHBseUFwcGxpY2F0aW9uUm9sZSddO1xyXG4gIEBJbnB1dCgpIG1pbmltdW1QaXhlbHNGb3JEcmFnPzogSURldGFpbHNMaXN0UHJvcHNbJ21pbmltdW1QaXhlbHNGb3JEcmFnJ107XHJcbiAgQElucHV0KCkgY29tcGFjdD86IElEZXRhaWxzTGlzdFByb3BzWydjb21wYWN0J107XHJcbiAgQElucHV0KCkgdXNlUGFnZUNhY2hlPzogSURldGFpbHNMaXN0UHJvcHNbJ3VzZVBhZ2VDYWNoZSddO1xyXG4gIEBJbnB1dCgpIG9uU2hvdWxkVmlydHVhbGl6ZT86IChwcm9wczogSUxpc3RQcm9wcykgPT4gYm9vbGVhbjtcclxuICBASW5wdXQoKSBjaGVja2JveENlbGxDbGFzc05hbWU/OiBJRGV0YWlsc0xpc3RQcm9wc1snY2hlY2tib3hDZWxsQ2xhc3NOYW1lJ107XHJcbiAgQElucHV0KCkgZW50ZXJNb2RhbFNlbGVjdGlvbk9uVG91Y2g/OiBJRGV0YWlsc0xpc3RQcm9wc1snZW50ZXJNb2RhbFNlbGVjdGlvbk9uVG91Y2gnXTtcclxuICBASW5wdXQoKSBjb2x1bW5SZW9yZGVyT3B0aW9ucz86IElEZXRhaWxzTGlzdFByb3BzWydjb2x1bW5SZW9yZGVyT3B0aW9ucyddO1xyXG4gIEBJbnB1dCgpIGdldEdyb3VwSGVpZ2h0PzogSURldGFpbHNMaXN0UHJvcHNbJ2dldEdyb3VwSGVpZ2h0J107XHJcbiAgQElucHV0KCkgdXNlUmVkdWNlZFJvd1JlbmRlcmVyPzogSURldGFpbHNMaXN0UHJvcHNbJ3VzZVJlZHVjZWRSb3dSZW5kZXJlciddO1xyXG4gIEBJbnB1dCgpIGNlbGxTdHlsZVByb3BzPzogSURldGFpbHNMaXN0UHJvcHNbJ2NlbGxTdHlsZVByb3BzJ107XHJcbiAgQElucHV0KCkgZGlzYWJsZVNlbGVjdGlvblpvbmU/OiBJRGV0YWlsc0xpc3RQcm9wc1snZGlzYWJsZVNlbGVjdGlvblpvbmUnXTtcclxuICBASW5wdXQoKSBlbmFibGVVcGRhdGVBbmltYXRpb25zPzogSURldGFpbHNMaXN0UHJvcHNbJ2VuYWJsZVVwZGF0ZUFuaW1hdGlvbnMnXTtcclxuICBASW5wdXQoKSB1c2VGYXN0SWNvbnM/OiBJRGV0YWlsc0xpc3RQcm9wc1sndXNlRmFzdEljb25zJ107XHJcblxyXG4gIC8vIEluaGVyaXRlZCBtZW1iZXJzIChJV2l0aFZpZXdwb3J0UHJvcHMpXHJcbiAgQElucHV0KCkgc2tpcFZpZXdwb3J0TWVhc3VyZXM/OiBJRGV0YWlsc0xpc3RQcm9wc1snc2tpcFZpZXdwb3J0TWVhc3VyZXMnXTtcclxuXHJcbiAgLy8gUmVuZGVyIG1lbWJlcnNcclxuICBASW5wdXQoKSByZW5kZXJDaGVja2JveD86IElucHV0UmVuZGVyZXJPcHRpb25zPElEZXRhaWxzTGlzdENoZWNrYm94UHJvcHM+O1xyXG4gIEBJbnB1dCgpIHJlbmRlckRldGFpbHNGb290ZXI/OiBJbnB1dFJlbmRlcmVyT3B0aW9uczxJRGV0YWlsc0Zvb3RlclByb3BzPjtcclxuICBASW5wdXQoKSByZW5kZXJEZXRhaWxzSGVhZGVyPzogSW5wdXRSZW5kZXJlck9wdGlvbnM8SURldGFpbHNIZWFkZXJQcm9wcz47XHJcbiAgQElucHV0KCkgcmVuZGVyTWlzc2luZ0l0ZW0/OiBJbnB1dFJlbmRlcmVyT3B0aW9uczxJTWlzc2luZ0l0ZW1SZW5kZXJDb250ZXh0PjtcclxuICBASW5wdXQoKSByZW5kZXJSb3c/OiBJbnB1dFJlbmRlcmVyT3B0aW9uczxJRGV0YWlsc1Jvd1Byb3BzPjtcclxuXHJcbiAgLy8gQ2FsbGJhY2sgbWVtYmVyc1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvbkFjdGl2ZUl0ZW1DaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjx7IGl0ZW0/OiBhbnk7IGluZGV4PzogbnVtYmVyOyBldj86IEV2ZW50IH0+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uQ29sdW1uSGVhZGVyQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHsgZXY/OiBFdmVudDsgY29sdW1uPzogSUNvbHVtbiB9PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvbkNvbHVtbkhlYWRlckNvbnRleHRNZW51ID0gbmV3IEV2ZW50RW1pdHRlcjx7IGNvbHVtbj86IElDb2x1bW47IGV2PzogRXZlbnQgfT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25Db2x1bW5SZXNpemUgPSBuZXcgRXZlbnRFbWl0dGVyPHsgY29sdW1uPzogSUNvbHVtbjsgbmV3V2lkdGg/OiBudW1iZXI7IGNvbHVtbkluZGV4PzogbnVtYmVyIH0+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uRGlkVXBkYXRlID0gbmV3IEV2ZW50RW1pdHRlcjx7IGRldGFpbHNMaXN0PzogRGV0YWlsc0xpc3RCYXNlIH0+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uSXRlbUNvbnRleHRNZW51ID0gbmV3IEV2ZW50RW1pdHRlcjx7IGl0ZW0/OiBhbnk7IGluZGV4PzogbnVtYmVyOyBldj86IEV2ZW50IH0+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uSXRlbUludm9rZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHsgaXRlbT86IGFueTsgaW5kZXg/OiBudW1iZXI7IGV2PzogRXZlbnQgfT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25Sb3dEaWRNb3VudCA9IG5ldyBFdmVudEVtaXR0ZXI8eyBpdGVtPzogYW55OyBpbmRleD86IG51bWJlciB9PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvblJvd1dpbGxVbm1vdW50ID0gbmV3IEV2ZW50RW1pdHRlcjx7IGl0ZW0/OiBhbnk7IGluZGV4PzogbnVtYmVyIH0+KCk7XHJcblxyXG4gIC8vIERpcmVjdGl2ZSBtZW1iZXJzXHJcbiAgQElucHV0KCkgY29sdW1uczogUmVhZG9ubHlBcnJheTxJRGV0YWlsc0xpc3RDb2x1bW5PcHRpb25zPjtcclxuICBASW5wdXQoKSBncm91cHM6IFJlYWRvbmx5QXJyYXk8SUdyb3VwPjtcclxuXHJcbiAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gIHRyYW5zZm9ybWVkQ29sdW1uc186IFJlYWRvbmx5QXJyYXk8SUNvbHVtbj47XHJcbiAgdHJhbnNmb3JtZWRHcm91cHNfOiBSZWFkb25seUFycmF5PElHcm91cD47XHJcblxyXG4gIHByaXZhdGUgcmVhZG9ubHkgX3N1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XHJcblxyXG4gIG9uUmVuZGVyQ2hlY2tib3g6IChcclxuICAgIHByb3BzPzogSURldGFpbHNMaXN0Q2hlY2tib3hQcm9wcyxcclxuICAgIGRlZmF1bHRSZW5kZXI/OiBKc3hSZW5kZXJGdW5jPElEZXRhaWxzTGlzdENoZWNrYm94UHJvcHM+XHJcbiAgKSA9PiBKU1guRWxlbWVudDtcclxuICBvblJlbmRlckRldGFpbHNGb290ZXI6IChcclxuICAgIHByb3BzPzogSURldGFpbHNGb290ZXJQcm9wcyxcclxuICAgIGRlZmF1bHRSZW5kZXI/OiBKc3hSZW5kZXJGdW5jPElEZXRhaWxzRm9vdGVyUHJvcHM+XHJcbiAgKSA9PiBKU1guRWxlbWVudDtcclxuICBvblJlbmRlckRldGFpbHNIZWFkZXI6IChcclxuICAgIHByb3BzPzogSURldGFpbHNIZWFkZXJQcm9wcyxcclxuICAgIGRlZmF1bHRSZW5kZXI/OiBKc3hSZW5kZXJGdW5jPElEZXRhaWxzSGVhZGVyUHJvcHM+XHJcbiAgKSA9PiBKU1guRWxlbWVudDtcclxuICBvblJlbmRlck1pc3NpbmdJdGVtOiAoaW5kZXg/OiBudW1iZXIsIHJvd1Byb3BzPzogSURldGFpbHNSb3dQcm9wcykgPT4gSlNYLkVsZW1lbnQ7XHJcbiAgb25SZW5kZXJSb3c6IChwcm9wcz86IElEZXRhaWxzUm93UHJvcHMsIGRlZmF1bHRSZW5kZXI/OiBKc3hSZW5kZXJGdW5jPElEZXRhaWxzUm93UHJvcHM+KSA9PiBKU1guRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCBuZ1pvbmU6IE5nWm9uZSkge1xyXG4gICAgc3VwZXIoZWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyLCB7IG5nWm9uZSwgc2V0SG9zdERpc3BsYXk6IHRydWUgfSk7XHJcblxyXG4gICAgLy8gQmluZCB0aGlzIHRvIGFjY2VzcyBBbmd1bGFyIGNvbXBvbmVudCBwcm9wZXJ0aWVzXHJcbiAgICB0aGlzLm9uQWN0aXZlSXRlbUNoYW5nZWRIYW5kbGVyID0gdGhpcy5vbkFjdGl2ZUl0ZW1DaGFuZ2VkSGFuZGxlci5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbkNvbHVtbkhlYWRlckNsaWNrSGFuZGxlciA9IHRoaXMub25Db2x1bW5IZWFkZXJDbGlja0hhbmRsZXIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25Db2x1bW5IZWFkZXJDb250ZXh0TWVudUhhbmRsZXIgPSB0aGlzLm9uQ29sdW1uSGVhZGVyQ29udGV4dE1lbnVIYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uQ29sdW1uUmVzaXplSGFuZGxlciA9IHRoaXMub25Db2x1bW5SZXNpemVIYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uRGlkVXBkYXRlSGFuZGxlciA9IHRoaXMub25EaWRVcGRhdGVIYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uSXRlbUNvbnRleHRNZW51SGFuZGxlciA9IHRoaXMub25JdGVtQ29udGV4dE1lbnVIYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uSXRlbUludm9rZWRIYW5kbGVyID0gdGhpcy5vbkl0ZW1JbnZva2VkSGFuZGxlci5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vblJvd0RpZE1vdW50SGFuZGxlciA9IHRoaXMub25Sb3dEaWRNb3VudEhhbmRsZXIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25Sb3dXaWxsVW5tb3VudEhhbmRsZXIgPSB0aGlzLm9uUm93V2lsbFVubW91bnRIYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMub25SZW5kZXJDaGVja2JveCA9IHRoaXMuY3JlYXRlUmVuZGVyUHJvcEhhbmRsZXIodGhpcy5yZW5kZXJDaGVja2JveCk7XHJcbiAgICB0aGlzLm9uUmVuZGVyRGV0YWlsc0Zvb3RlciA9IHRoaXMuY3JlYXRlUmVuZGVyUHJvcEhhbmRsZXIodGhpcy5yZW5kZXJEZXRhaWxzRm9vdGVyKTtcclxuICAgIHRoaXMub25SZW5kZXJEZXRhaWxzSGVhZGVyID0gdGhpcy5jcmVhdGVSZW5kZXJQcm9wSGFuZGxlcih0aGlzLnJlbmRlckRldGFpbHNIZWFkZXIpO1xyXG4gICAgdGhpcy5vblJlbmRlclJvdyA9IHRoaXMuY3JlYXRlUmVuZGVyUHJvcEhhbmRsZXIodGhpcy5yZW5kZXJSb3cpO1xyXG5cclxuICAgIGNvbnN0IG1pc3NpbmdJdGVtUmVuZGVyZXIgPSB0aGlzLmNyZWF0ZUlucHV0SnN4UmVuZGVyZXIodGhpcy5yZW5kZXJNaXNzaW5nSXRlbSk7XHJcbiAgICB0aGlzLm9uUmVuZGVyTWlzc2luZ0l0ZW0gPSAoaW5kZXgsIHJvd1Byb3BzKSA9PiBtaXNzaW5nSXRlbVJlbmRlcmVyKHsgaW5kZXgsIHJvd1Byb3BzIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogVHlwZWRDaGFuZ2VzPEZhYkRldGFpbHNMaXN0Q29tcG9uZW50Pikge1xyXG4gICAgaWYgKFxyXG4gICAgICBjaGFuZ2VzWydjb2x1bW5zJ10gJiZcclxuICAgICAgY2hhbmdlc1snY29sdW1ucyddLmN1cnJlbnRWYWx1ZSAmJlxyXG4gICAgICBjaGFuZ2VzWydjb2x1bW5zJ10ucHJldmlvdXNWYWx1ZSAhPT0gY2hhbmdlc1snY29sdW1ucyddLmN1cnJlbnRWYWx1ZVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuX2NyZWF0ZVRyYW5zZm9ybWVkQ29sdW1ucyhjaGFuZ2VzWydjb2x1bW5zJ10uY3VycmVudFZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmIChcclxuICAgICAgY2hhbmdlc1snZ3JvdXBzJ10gJiZcclxuICAgICAgY2hhbmdlc1snZ3JvdXBzJ10uY3VycmVudFZhbHVlICYmXHJcbiAgICAgIGNoYW5nZXNbJ2dyb3VwcyddLnByZXZpb3VzVmFsdWUgIT09IGNoYW5nZXNbJ2dyb3VwcyddLmN1cnJlbnRWYWx1ZVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuX2NyZWF0ZVRyYW5zZm9ybWVkR3JvdXBzKGNoYW5nZXNbJ2dyb3VwcyddLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBzdXBlci5uZ09uQ2hhbmdlcyhjaGFuZ2VzKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmNvbHVtbnNEaXJlY3RpdmUpIHtcclxuICAgICAgdGhpcy5faW5pdERpcmVjdGl2ZSh0aGlzLmNvbHVtbnNEaXJlY3RpdmUsICdjb2x1bW5zJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5ncm91cHNEaXJlY3RpdmUpIHtcclxuICAgICAgdGhpcy5faW5pdERpcmVjdGl2ZSh0aGlzLmdyb3Vwc0RpcmVjdGl2ZSwgJ2dyb3VwcycpO1xyXG4gICAgfVxyXG4gICAgc3VwZXIubmdBZnRlckNvbnRlbnRJbml0KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xyXG4gIH1cclxuXHJcbiAgb25BY3RpdmVJdGVtQ2hhbmdlZEhhbmRsZXIoaXRlbT86IGFueSwgaW5kZXg/OiBudW1iZXIsIGV2PzogUmVhY3QuRm9jdXNFdmVudDxIVE1MRWxlbWVudD4pIHtcclxuICAgIHRoaXMub25BY3RpdmVJdGVtQ2hhbmdlZC5lbWl0KHsgaXRlbSwgaW5kZXgsIGV2OiBldi5uYXRpdmVFdmVudCB9KTtcclxuICB9XHJcblxyXG4gIG9uQ29sdW1uSGVhZGVyQ2xpY2tIYW5kbGVyKGV2PzogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudD4sIGNvbHVtbj86IElDb2x1bW4pIHtcclxuICAgIHRoaXMub25Db2x1bW5IZWFkZXJDbGljay5lbWl0KHsgZXY6IGV2Lm5hdGl2ZUV2ZW50LCBjb2x1bW4gfSk7XHJcbiAgfVxyXG5cclxuICBvbkNvbHVtbkhlYWRlckNvbnRleHRNZW51SGFuZGxlcihjb2x1bW4/OiBJQ29sdW1uLCBldj86IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEVsZW1lbnQ+KSB7XHJcbiAgICB0aGlzLm9uQ29sdW1uSGVhZGVyQ29udGV4dE1lbnUuZW1pdCh7IGNvbHVtbiwgZXY6IGV2Lm5hdGl2ZUV2ZW50IH0pO1xyXG4gIH1cclxuXHJcbiAgb25Db2x1bW5SZXNpemVIYW5kbGVyKGNvbHVtbj86IElDb2x1bW4sIG5ld1dpZHRoPzogbnVtYmVyLCBjb2x1bW5JbmRleD86IG51bWJlcikge1xyXG4gICAgdGhpcy5vbkNvbHVtblJlc2l6ZS5lbWl0KHsgY29sdW1uLCBuZXdXaWR0aCwgY29sdW1uSW5kZXggfSk7XHJcbiAgfVxyXG5cclxuICBvbkRpZFVwZGF0ZUhhbmRsZXIoZGV0YWlsc0xpc3Q/OiBEZXRhaWxzTGlzdEJhc2UpIHtcclxuICAgIHRoaXMub25EaWRVcGRhdGUuZW1pdCh7IGRldGFpbHNMaXN0IH0pO1xyXG4gIH1cclxuXHJcbiAgb25JdGVtQ29udGV4dE1lbnVIYW5kbGVyKGl0ZW0/OiBhbnksIGluZGV4PzogbnVtYmVyLCBldj86IEV2ZW50KSB7XHJcbiAgICB0aGlzLm9uSXRlbUNvbnRleHRNZW51LmVtaXQoeyBpdGVtLCBpbmRleCwgZXYgfSk7XHJcbiAgfVxyXG5cclxuICBvbkl0ZW1JbnZva2VkSGFuZGxlcihpdGVtPzogYW55LCBpbmRleD86IG51bWJlciwgZXY/OiBFdmVudCkge1xyXG4gICAgdGhpcy5vbkl0ZW1JbnZva2VkLmVtaXQoeyBpdGVtLCBpbmRleCwgZXYgfSk7XHJcbiAgfVxyXG5cclxuICBvblJvd0RpZE1vdW50SGFuZGxlcihpdGVtPzogYW55LCBpbmRleD86IG51bWJlcikge1xyXG4gICAgdGhpcy5vblJvd0RpZE1vdW50LmVtaXQoeyBpdGVtLCBpbmRleCB9KTtcclxuICB9XHJcblxyXG4gIG9uUm93V2lsbFVubW91bnRIYW5kbGVyKGl0ZW0/OiBhbnksIGluZGV4PzogbnVtYmVyKSB7XHJcbiAgICB0aGlzLm9uUm93V2lsbFVubW91bnQuZW1pdCh7IGl0ZW0sIGluZGV4IH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfaW5pdERpcmVjdGl2ZShkaXJlY3RpdmU6IENoYW5nZWFibGVJdGVtc0RpcmVjdGl2ZTxhbnk+LCBwcm9wZXJ0eUtleTogJ2NvbHVtbnMnIHwgJ2dyb3VwcycpIHtcclxuICAgIGNvbnN0IHRyYW5zZm9ybUl0ZW1zRnVuYyA9IHRoaXMuX3RyYW5zZm9ybUl0ZW1zRnVuY3Rpb24oZGlyZWN0aXZlKTtcclxuICAgIGNvbnN0IHNldEl0ZW1zID0gKG1hcHBlcjogKGl0ZW1zOiBSZWFkb25seUFycmF5PGFueT4pID0+IFJlYWRvbmx5QXJyYXk8YW55PikgPT4ge1xyXG4gICAgICB0aGlzW3Byb3BlcnR5S2V5XSA9IG1hcHBlcih0aGlzW3Byb3BlcnR5S2V5XSk7XHJcbiAgICAgIHRyYW5zZm9ybUl0ZW1zRnVuYyh0aGlzW3Byb3BlcnR5S2V5XSk7XHJcbiAgICAgIHRoaXMubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHNldEl0ZW1zKCgpID0+IGRpcmVjdGl2ZS5pdGVtcyk7XHJcblxyXG4gICAgLy8gU3Vic2NyaWJlIHRvIGFkZGluZy9yZW1vdmluZyBpdGVtc1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKFxyXG4gICAgICBkaXJlY3RpdmUub25JdGVtc0NoYW5nZWQuc3Vic2NyaWJlKChuZXdJdGVtczogUXVlcnlMaXN0PENoYW5nZWFibGVJdGVtc0RpcmVjdGl2ZTxhbnk+PikgPT4ge1xyXG4gICAgICAgIHNldEl0ZW1zKCgpID0+IG5ld0l0ZW1zLm1hcChkaXJlY3RpdmUgPT4gZGlyZWN0aXZlKSk7XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICAgIC8vIFN1YnNjcmliZSBmb3IgZXhpc3RpbmcgaXRlbSBjaGFuZ2VzXHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLnB1c2goXHJcbiAgICAgIGRpcmVjdGl2ZS5vbkNoaWxkSXRlbUNoYW5nZWQuc3Vic2NyaWJlKCh7IGtleSwgY2hhbmdlcyB9KSA9PiB7XHJcbiAgICAgICAgc2V0SXRlbXMoaXRlbXMgPT4gaXRlbXMubWFwKGl0ZW0gPT4gKGl0ZW0ua2V5ID09PSBrZXkgPyBtZXJnZUl0ZW1DaGFuZ2VzKGl0ZW0sIGNoYW5nZXMpIDogaXRlbSkpKTtcclxuICAgICAgICB0aGlzLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3RyYW5zZm9ybUl0ZW1zRnVuY3Rpb24oZGlyZWN0aXZlOiBDaGFuZ2VhYmxlSXRlbXNEaXJlY3RpdmU8YW55Pikge1xyXG4gICAgaWYgKGRpcmVjdGl2ZSBpbnN0YW5jZW9mIERldGFpbHNMaXN0Q29sdW1uc0RpcmVjdGl2ZSkge1xyXG4gICAgICByZXR1cm4gKG5ld0NvbHVtbnM6IFJlYWRvbmx5QXJyYXk8YW55PikgPT4gdGhpcy5fY3JlYXRlVHJhbnNmb3JtZWRDb2x1bW5zKG5ld0NvbHVtbnMpO1xyXG4gICAgfSBlbHNlIGlmIChkaXJlY3RpdmUgaW5zdGFuY2VvZiBEZXRhaWxzTGlzdEdyb3Vwc0RpcmVjdGl2ZSkge1xyXG4gICAgICByZXR1cm4gKG5ld0dyb3VwczogUmVhZG9ubHlBcnJheTxhbnk+KSA9PiB0aGlzLl9jcmVhdGVUcmFuc2Zvcm1lZEdyb3VwcyhuZXdHcm91cHMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGRpcmVjdGl2ZSBnaXZlbicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfY3JlYXRlVHJhbnNmb3JtZWRDb2x1bW5zKG5ld0NvbHVtbnM6IFJlYWRvbmx5QXJyYXk8SURldGFpbHNMaXN0Q29sdW1uT3B0aW9ucz4pIHtcclxuICAgIHRoaXMudHJhbnNmb3JtZWRDb2x1bW5zXyA9IG5ld0NvbHVtbnMubWFwKGNvbHVtbiA9PiB0aGlzLl90cmFuc2Zvcm1EZXRhaWxzTGlzdENvbHVtbk9wdGlvbnNUb1Byb3BzKGNvbHVtbikpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfdHJhbnNmb3JtRGV0YWlsc0xpc3RDb2x1bW5PcHRpb25zVG9Qcm9wcyhvcHRpb25zOiBJRGV0YWlsc0xpc3RDb2x1bW5PcHRpb25zKTogSUNvbHVtbiB7XHJcbiAgICBjb25zdCByZW5kZXJlciA9IHRoaXMuY3JlYXRlSW5wdXRKc3hSZW5kZXJlcihvcHRpb25zLnJlbmRlcik7XHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihcclxuICAgICAge30sXHJcbiAgICAgIG9taXQob3B0aW9ucywgJ3JlbmRlcicpLFxyXG4gICAgICByZW5kZXJlciAmJlxyXG4gICAgICAoe1xyXG4gICAgICAgIG9uUmVuZGVyOiAoaXRlbT86IGFueSwgaW5kZXg/OiBudW1iZXIsIGNvbHVtbj86IElDb2x1bW4pID0+IHJlbmRlcmVyKHsgaXRlbSwgaW5kZXgsIGNvbHVtbiB9KSxcclxuICAgICAgfSBhcyBQaWNrPElDb2x1bW4sICdvblJlbmRlcic+KVxyXG4gICAgKSBhcyBJQ29sdW1uO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfY3JlYXRlVHJhbnNmb3JtZWRHcm91cHMobmV3R3JvdXBzOiBSZWFkb25seUFycmF5PElHcm91cD4pIHtcclxuICAgIHRoaXMudHJhbnNmb3JtZWRHcm91cHNfID0gbmV3R3JvdXBzO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTWlzc2luZ0l0ZW1SZW5kZXJDb250ZXh0IHtcclxuICBpbmRleD86IG51bWJlcjtcclxuICByb3dQcm9wcz86IElEZXRhaWxzUm93UHJvcHM7XHJcbn1cclxuIl19