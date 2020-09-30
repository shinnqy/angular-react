/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ChangeDetectionStrategy, ChangeDetectorRef, ContentChild, Component, ElementRef, EventEmitter, Input, NgZone, Output, Renderer2, ViewChild, } from '@angular/core';
import { ReactWrapperComponent } from '@angular-react/core';
import { omit } from '@angular-react/fabric/lib/utils';
import { mergeItemChanges } from '@angular-react/fabric/lib/components/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RldGFpbHMtbGlzdC9kZXRhaWxzLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFlBQVksRUFDWixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUdOLE1BQU0sRUFFTixTQUFTLEVBQ1QsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBdUMscUJBQXFCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQWFqRyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdkQsT0FBTyxFQUFFLGdCQUFnQixFQUE0QixNQUFNLDJDQUEyQyxDQUFDO0FBSXZHLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzFGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBNEV4RixNQUFNLE9BQU8sdUJBQXdCLFNBQVEscUJBQXdDOzs7Ozs7O0lBbUduRixZQUFZLFVBQXNCLEVBQUUsaUJBQW9DLEVBQUUsUUFBbUIsRUFBRSxNQUFjO1FBQzNHLEtBQUssQ0FBQyxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDOztRQXBDaEUsd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQThDLENBQUM7UUFDckYsd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQW9DLENBQUM7UUFDM0UsOEJBQXlCLEdBQUcsSUFBSSxZQUFZLEVBQW9DLENBQUM7UUFDakYsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBaUUsQ0FB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RTs7SUFDMUUsc0RBQXlFOztJQUN6RSxzREFBeUU7O0lBQ3pFLG9EQUE2RTs7SUFDN0UsNENBQTREOztJQUc1RCxzREFBd0c7O0lBQ3hHLHNEQUE4Rjs7SUFDOUYsNERBQW9HOztJQUNwRyxpREFBc0g7O0lBQ3RILDhDQUF1Rjs7SUFDdkYsb0RBQXNHOztJQUN0RyxnREFBa0c7O0lBQ2xHLGdEQUFzRjs7SUFDdEYsbURBQXlGOztJQUd6RiwwQ0FBMkQ7O0lBQzNELHlDQUF1Qzs7Ozs7SUFHdkMsc0RBQTRDOztJQUM1QyxxREFBMEM7Ozs7O0lBRTFDLGlEQUFxRDs7SUFFckQsbURBR2lCOztJQUNqQix3REFHaUI7O0lBQ2pCLHdEQUdpQjs7SUFDakIsc0RBQWtGOztJQUNsRiw4Q0FBd0c7Ozs7O0FBd0oxRywrQ0FHQzs7O0lBRkMsMENBQWU7O0lBQ2YsNkNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb250ZW50Q2hpbGQsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE5nWm9uZSxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBRdWVyeUxpc3QsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFZpZXdDaGlsZCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5wdXRSZW5kZXJlck9wdGlvbnMsIEpzeFJlbmRlckZ1bmMsIFJlYWN0V3JhcHBlckNvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIERldGFpbHNMaXN0QmFzZSxcclxuICBJQ29sdW1uLFxyXG4gIElEZXRhaWxzTGlzdENoZWNrYm94UHJvcHMsXHJcbiAgSURldGFpbHNGb290ZXJQcm9wcyxcclxuICBJRGV0YWlsc0hlYWRlclByb3BzLFxyXG4gIElEZXRhaWxzTGlzdFByb3BzLFxyXG4gIElEZXRhaWxzUm93UHJvcHMsXHJcbiAgSUdyb3VwLFxyXG59IGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliL0RldGFpbHNMaXN0JztcclxuaW1wb3J0IHsgSUxpc3RQcm9wcyB9IGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliL0xpc3QnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgb21pdCB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy9saWIvdXRpbHMnO1xyXG5pbXBvcnQgeyBtZXJnZUl0ZW1DaGFuZ2VzLCBDaGFuZ2VhYmxlSXRlbXNEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9mYWJyaWMvbGliL2NvbXBvbmVudHMvY29yZSc7XHJcbmltcG9ydCB7IFR5cGVkQ2hhbmdlcywgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXItcmVhY3QvZmFicmljL2xpYi9kZWNsYXJhdGlvbnMnO1xyXG5cclxuaW1wb3J0IHsgSURldGFpbHNMaXN0Q29sdW1uT3B0aW9ucyB9IGZyb20gJy4vZGlyZWN0aXZlcy9kZXRhaWxzLWxpc3QtY29sdW1uLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IERldGFpbHNMaXN0Q29sdW1uc0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9kZXRhaWxzLWxpc3QtY29sdW1ucy5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBEZXRhaWxzTGlzdEdyb3Vwc0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9kZXRhaWxzLWxpc3QtZ3JvdXBzLmRpcmVjdGl2ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZhYi1kZXRhaWxzLWxpc3QnLFxyXG4gIGV4cG9ydEFzOiAnZmFiRGV0YWlsc0xpc3QnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8RGV0YWlsc0xpc3RcclxuICAgICAgI3JlYWN0Tm9kZVxyXG4gICAgICBbaXRlbXNdPVwiaXRlbXNcIlxyXG4gICAgICBbYXJpYUxhYmVsXT1cImFyaWFMYWJlbFwiXHJcbiAgICAgIFthcmlhTGFiZWxGb3JHcmlkXT1cImFyaWFMYWJlbEZvckdyaWRcIlxyXG4gICAgICBbYXJpYUxhYmVsRm9yTGlzdEhlYWRlcl09XCJhcmlhTGFiZWxGb3JMaXN0SGVhZGVyXCJcclxuICAgICAgW2FyaWFMYWJlbEZvclNlbGVjdEFsbENoZWNrYm94XT1cImFyaWFMYWJlbEZvclNlbGVjdEFsbENoZWNrYm94XCJcclxuICAgICAgW2FyaWFMYWJlbEZvclNlbGVjdGlvbkNvbHVtbl09XCJhcmlhTGFiZWxGb3JTZWxlY3Rpb25Db2x1bW5cIlxyXG4gICAgICBbY2VsbFN0eWxlUHJvcHNdPVwiY2VsbFN0eWxlUHJvcHNcIlxyXG4gICAgICBbY2hlY2tCdXR0b25BcmlhTGFiZWxdPVwiY2hlY2tCdXR0b25BcmlhTGFiZWxcIlxyXG4gICAgICBbY2hlY2tib3hDZWxsQ2xhc3NOYW1lXT1cImNoZWNrYm94Q2VsbENsYXNzTmFtZVwiXHJcbiAgICAgIFtjaGVja2JveFZpc2liaWxpdHldPVwiY2hlY2tib3hWaXNpYmlsaXR5XCJcclxuICAgICAgW2NsYXNzTmFtZV09XCJjbGFzc05hbWVcIlxyXG4gICAgICBbY29sdW1uUmVvcmRlck9wdGlvbnNdPVwiY29sdW1uUmVvcmRlck9wdGlvbnNcIlxyXG4gICAgICBbY29sdW1uc109XCJ0cmFuc2Zvcm1lZENvbHVtbnNfXCJcclxuICAgICAgW2NvbXBhY3RdPVwiY29tcGFjdFwiXHJcbiAgICAgIFtjb21wb25lbnRSZWZdPVwiY29tcG9uZW50UmVmXCJcclxuICAgICAgW2NvbnN0cmFpbk1vZGVdPVwiY29uc3RyYWluTW9kZVwiXHJcbiAgICAgIFtkaXNhYmxlU2VsZWN0aW9uWm9uZV09XCJkaXNhYmxlU2VsZWN0aW9uWm9uZVwiXHJcbiAgICAgIFtkcmFnRHJvcEV2ZW50c109XCJkcmFnRHJvcEV2ZW50c1wiXHJcbiAgICAgIFtlbmFibGVVcGRhdGVBbmltYXRpb25zXT1cImVuYWJsZVVwZGF0ZUFuaW1hdGlvbnNcIlxyXG4gICAgICBbZW50ZXJNb2RhbFNlbGVjdGlvbk9uVG91Y2hdPVwiZW50ZXJNb2RhbFNlbGVjdGlvbk9uVG91Y2hcIlxyXG4gICAgICBbZ2V0Q2VsbFZhbHVlS2V5XT1cImdldENlbGxWYWx1ZUtleVwiXHJcbiAgICAgIFtnZXRHcm91cEhlaWdodF09XCJnZXRHcm91cEhlaWdodFwiXHJcbiAgICAgIFtnZXRLZXldPVwiZ2V0S2V5XCJcclxuICAgICAgW2dldFJvd0FyaWFEZXNjcmliZWRCeV09XCJnZXRSb3dBcmlhRGVzY3JpYmVkQnlcIlxyXG4gICAgICBbZ2V0Um93QXJpYUxhYmVsXT1cImdldFJvd0FyaWFMYWJlbFwiXHJcbiAgICAgIFtncm91cFByb3BzXT1cImdyb3VwUHJvcHNcIlxyXG4gICAgICBbZ3JvdXBzXT1cInRyYW5zZm9ybWVkR3JvdXBzX1wiXHJcbiAgICAgIFtpbmRlbnRXaWR0aF09XCJpbmRlbnRXaWR0aFwiXHJcbiAgICAgIFtpbml0aWFsRm9jdXNlZEluZGV4XT1cImluaXRpYWxGb2N1c2VkSW5kZXhcIlxyXG4gICAgICBbaXNIZWFkZXJWaXNpYmxlXT1cImlzSGVhZGVyVmlzaWJsZVwiXHJcbiAgICAgIFtsYXlvdXRNb2RlXT1cImxheW91dE1vZGVcIlxyXG4gICAgICBbbGlzdFByb3BzXT1cImxpc3RQcm9wc1wiXHJcbiAgICAgIFttaW5pbXVtUGl4ZWxzRm9yRHJhZ109XCJtaW5pbXVtUGl4ZWxzRm9yRHJhZ1wiXHJcbiAgICAgIFtyb3dFbGVtZW50RXZlbnRNYXBdPVwicm93RWxlbWVudEV2ZW50TWFwXCJcclxuICAgICAgW3NlbGVjdGlvbl09XCJzZWxlY3Rpb25cIlxyXG4gICAgICBbc2VsZWN0aW9uTW9kZV09XCJzZWxlY3Rpb25Nb2RlXCJcclxuICAgICAgW3NlbGVjdGlvblByZXNlcnZlZE9uRW1wdHlDbGlja109XCJzZWxlY3Rpb25QcmVzZXJ2ZWRPbkVtcHR5Q2xpY2tcIlxyXG4gICAgICBbc2VsZWN0aW9uWm9uZVByb3BzXT1cInNlbGVjdGlvblpvbmVQcm9wc1wiXHJcbiAgICAgIFtzZXRLZXldPVwic2V0S2V5XCJcclxuICAgICAgW3Nob3VsZEFwcGx5QXBwbGljYXRpb25Sb2xlXT1cInNob3VsZEFwcGx5QXBwbGljYXRpb25Sb2xlXCJcclxuICAgICAgW3NraXBWaWV3cG9ydE1lYXN1cmVzXT1cInNraXBWaWV3cG9ydE1lYXN1cmVzXCJcclxuICAgICAgW3N0eWxlc109XCJzdHlsZXNcIlxyXG4gICAgICBbdGhlbWVdPVwidGhlbWVcIlxyXG4gICAgICBbdXNlRmFzdEljb25zXT1cInVzZUZhc3RJY29uc1wiXHJcbiAgICAgIFt1c2VQYWdlQ2FjaGVdPVwidXNlUGFnZUNhY2hlXCJcclxuICAgICAgW3VzZVJlZHVjZWRSb3dSZW5kZXJlcl09XCJ1c2VSZWR1Y2VkUm93UmVuZGVyZXJcIlxyXG4gICAgICBbdmlld3BvcnRdPVwidmlld3BvcnRcIlxyXG4gICAgICBbUmVuZGVyQ2hlY2tib3hdPVwicmVuZGVyQ2hlY2tib3ggJiYgb25SZW5kZXJDaGVja2JveFwiXHJcbiAgICAgIFtSZW5kZXJEZXRhaWxzRm9vdGVyXT1cInJlbmRlckRldGFpbHNGb290ZXIgJiYgb25SZW5kZXJEZXRhaWxzRm9vdGVyXCJcclxuICAgICAgW1JlbmRlckRldGFpbHNIZWFkZXJdPVwicmVuZGVyRGV0YWlsc0hlYWRlciAmJiBvblJlbmRlckRldGFpbHNIZWFkZXJcIlxyXG4gICAgICBbUmVuZGVyTWlzc2luZ0l0ZW1dPVwicmVuZGVyTWlzc2luZ0l0ZW0gJiYgb25SZW5kZXJNaXNzaW5nSXRlbVwiXHJcbiAgICAgIFtSZW5kZXJSb3ddPVwicmVuZGVyRGV0YWlsc0hlYWRlciAmJiBvblJlbmRlclJvd1wiXHJcbiAgICAgIFtBY3RpdmVJdGVtQ2hhbmdlZF09XCJvbkFjdGl2ZUl0ZW1DaGFuZ2VkSGFuZGxlclwiXHJcbiAgICAgIFtDb2x1bW5IZWFkZXJDbGlja109XCJvbkNvbHVtbkhlYWRlckNsaWNrSGFuZGxlclwiXHJcbiAgICAgIFtDb2x1bW5IZWFkZXJDb250ZXh0TWVudV09XCJvbkNvbHVtbkhlYWRlckNvbnRleHRNZW51SGFuZGxlclwiXHJcbiAgICAgIFtDb2x1bW5SZXNpemVdPVwib25Db2x1bW5SZXNpemVIYW5kbGVyXCJcclxuICAgICAgW0RpZFVwZGF0ZV09XCJvbkRpZFVwZGF0ZUhhbmRsZXJcIlxyXG4gICAgICBbSXRlbUNvbnRleHRNZW51XT1cIm9uSXRlbUNvbnRleHRNZW51SGFuZGxlclwiXHJcbiAgICAgIFtJdGVtSW52b2tlZF09XCJvbkl0ZW1JbnZva2VkSGFuZGxlclwiXHJcbiAgICAgIFtSb3dEaWRNb3VudF09XCJvblJvd0RpZE1vdW50SGFuZGxlclwiXHJcbiAgICAgIFtSb3dXaWxsVW5tb3VudF09XCJvblJvd1dpbGxVbm1vdW50SGFuZGxlclwiXHJcbiAgICAgIFtTaG91bGRWaXJ0dWFsaXplXT1cIm9uU2hvdWxkVmlydHVhbGl6ZVwiXHJcbiAgICA+XHJcbiAgICA8L0RldGFpbHNMaXN0PlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbJ3JlYWN0LXJlbmRlcmVyJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYWJEZXRhaWxzTGlzdENvbXBvbmVudCBleHRlbmRzIFJlYWN0V3JhcHBlckNvbXBvbmVudDxJRGV0YWlsc0xpc3RQcm9wcz5cclxuICBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlczxGYWJEZXRhaWxzTGlzdENvbXBvbmVudD4sIE9uRGVzdHJveSwgT25Jbml0IHtcclxuICBAQ29udGVudENoaWxkKERldGFpbHNMaXN0Q29sdW1uc0RpcmVjdGl2ZSwgeyBzdGF0aWM6IHRydWUgfSkgcmVhZG9ubHkgY29sdW1uc0RpcmVjdGl2ZT86IERldGFpbHNMaXN0Q29sdW1uc0RpcmVjdGl2ZTtcclxuICBAQ29udGVudENoaWxkKERldGFpbHNMaXN0R3JvdXBzRGlyZWN0aXZlLCB7IHN0YXRpYzogdHJ1ZSB9KSByZWFkb25seSBncm91cHNEaXJlY3RpdmU/OiBEZXRhaWxzTGlzdEdyb3Vwc0RpcmVjdGl2ZTtcclxuXHJcbiAgQFZpZXdDaGlsZCgncmVhY3ROb2RlJywgeyBzdGF0aWM6IHRydWUgfSkgcHJvdGVjdGVkIHJlYWN0Tm9kZVJlZjogRWxlbWVudFJlZjtcclxuXHJcbiAgQElucHV0KCkgdGhlbWU/OiBJRGV0YWlsc0xpc3RQcm9wc1sndGhlbWUnXTtcclxuICBASW5wdXQoKSBzdHlsZXM/OiBJRGV0YWlsc0xpc3RQcm9wc1snc3R5bGVzJ107XHJcbiAgQElucHV0KCkgY29tcG9uZW50UmVmPzogSURldGFpbHNMaXN0UHJvcHNbJ2NvbXBvbmVudFJlZiddO1xyXG4gIEBJbnB1dCgpIHNldEtleT86IElEZXRhaWxzTGlzdFByb3BzWydzZXRLZXknXTtcclxuICBASW5wdXQoKSBpdGVtczogSURldGFpbHNMaXN0UHJvcHNbJ2l0ZW1zJ107XHJcbiAgQElucHV0KCkgbGlzdFByb3BzPzogSURldGFpbHNMaXN0UHJvcHNbJ2xpc3RQcm9wcyddO1xyXG4gIEBJbnB1dCgpIGluaXRpYWxGb2N1c2VkSW5kZXg/OiBJRGV0YWlsc0xpc3RQcm9wc1snaW5pdGlhbEZvY3VzZWRJbmRleCddO1xyXG4gIEBJbnB1dCgpIGNsYXNzTmFtZT86IElEZXRhaWxzTGlzdFByb3BzWydjbGFzc05hbWUnXTtcclxuICBASW5wdXQoKSBncm91cFByb3BzPzogSURldGFpbHNMaXN0UHJvcHNbJ2dyb3VwUHJvcHMnXTtcclxuICBASW5wdXQoKSBpbmRlbnRXaWR0aD86IElEZXRhaWxzTGlzdFByb3BzWydpbmRlbnRXaWR0aCddO1xyXG4gIEBJbnB1dCgpIHNlbGVjdGlvbj86IElEZXRhaWxzTGlzdFByb3BzWydzZWxlY3Rpb24nXTtcclxuICBASW5wdXQoKSBzZWxlY3Rpb25Nb2RlPzogSURldGFpbHNMaXN0UHJvcHNbJ3NlbGVjdGlvbk1vZGUnXTtcclxuICBASW5wdXQoKSBzZWxlY3Rpb25QcmVzZXJ2ZWRPbkVtcHR5Q2xpY2s/OiBJRGV0YWlsc0xpc3RQcm9wc1snc2VsZWN0aW9uUHJlc2VydmVkT25FbXB0eUNsaWNrJ107XHJcbiAgQElucHV0KCkgc2VsZWN0aW9uWm9uZVByb3BzPzogSURldGFpbHNMaXN0UHJvcHNbJ3NlbGVjdGlvblpvbmVQcm9wcyddO1xyXG4gIEBJbnB1dCgpIGxheW91dE1vZGU/OiBJRGV0YWlsc0xpc3RQcm9wc1snbGF5b3V0TW9kZSddO1xyXG4gIEBJbnB1dCgpIGNoZWNrYm94VmlzaWJpbGl0eT86IElEZXRhaWxzTGlzdFByb3BzWydjaGVja2JveFZpc2liaWxpdHknXTtcclxuICBASW5wdXQoKSBpc0hlYWRlclZpc2libGU/OiBJRGV0YWlsc0xpc3RQcm9wc1snaXNIZWFkZXJWaXNpYmxlJ107XHJcbiAgQElucHV0KCkgY29uc3RyYWluTW9kZT86IElEZXRhaWxzTGlzdFByb3BzWydjb25zdHJhaW5Nb2RlJ107XHJcbiAgQElucHV0KCkgcm93RWxlbWVudEV2ZW50TWFwPzogSURldGFpbHNMaXN0UHJvcHNbJ3Jvd0VsZW1lbnRFdmVudE1hcCddO1xyXG4gIEBJbnB1dCgpIGdldENlbGxWYWx1ZUtleT86IElEZXRhaWxzTGlzdFByb3BzWydnZXRDZWxsVmFsdWVLZXknXTtcclxuICBASW5wdXQoKSBkcmFnRHJvcEV2ZW50cz86IElEZXRhaWxzTGlzdFByb3BzWydkcmFnRHJvcEV2ZW50cyddO1xyXG4gIEBJbnB1dCgpIHZpZXdwb3J0PzogSURldGFpbHNMaXN0UHJvcHNbJ3ZpZXdwb3J0J107XHJcbiAgQElucHV0KCkgYXJpYUxhYmVsRm9yTGlzdEhlYWRlcj86IElEZXRhaWxzTGlzdFByb3BzWydhcmlhTGFiZWxGb3JMaXN0SGVhZGVyJ107XHJcbiAgQElucHV0KCkgYXJpYUxhYmVsRm9yU2VsZWN0QWxsQ2hlY2tib3g/OiBJRGV0YWlsc0xpc3RQcm9wc1snYXJpYUxhYmVsRm9yU2VsZWN0QWxsQ2hlY2tib3gnXTtcclxuICBASW5wdXQoKSBhcmlhTGFiZWxGb3JTZWxlY3Rpb25Db2x1bW4/OiBJRGV0YWlsc0xpc3RQcm9wc1snYXJpYUxhYmVsRm9yU2VsZWN0aW9uQ29sdW1uJ107XHJcbiAgQElucHV0KCkgZ2V0Um93QXJpYUxhYmVsPzogSURldGFpbHNMaXN0UHJvcHNbJ2dldFJvd0FyaWFMYWJlbCddO1xyXG4gIEBJbnB1dCgpIGdldFJvd0FyaWFEZXNjcmliZWRCeT86IElEZXRhaWxzTGlzdFByb3BzWydnZXRSb3dBcmlhRGVzY3JpYmVkQnknXTtcclxuICBASW5wdXQoKSBnZXRLZXk/OiBJRGV0YWlsc0xpc3RQcm9wc1snZ2V0S2V5J107XHJcbiAgQElucHV0KCkgYXJpYUxhYmVsPzogSURldGFpbHNMaXN0UHJvcHNbJ2FyaWFMYWJlbCddO1xyXG4gIEBJbnB1dCgpIGNoZWNrQnV0dG9uQXJpYUxhYmVsPzogSURldGFpbHNMaXN0UHJvcHNbJ2NoZWNrQnV0dG9uQXJpYUxhYmVsJ107XHJcbiAgQElucHV0KCkgYXJpYUxhYmVsRm9yR3JpZD86IElEZXRhaWxzTGlzdFByb3BzWydhcmlhTGFiZWxGb3JHcmlkJ107XHJcbiAgQElucHV0KCkgc2hvdWxkQXBwbHlBcHBsaWNhdGlvblJvbGU/OiBJRGV0YWlsc0xpc3RQcm9wc1snc2hvdWxkQXBwbHlBcHBsaWNhdGlvblJvbGUnXTtcclxuICBASW5wdXQoKSBtaW5pbXVtUGl4ZWxzRm9yRHJhZz86IElEZXRhaWxzTGlzdFByb3BzWydtaW5pbXVtUGl4ZWxzRm9yRHJhZyddO1xyXG4gIEBJbnB1dCgpIGNvbXBhY3Q/OiBJRGV0YWlsc0xpc3RQcm9wc1snY29tcGFjdCddO1xyXG4gIEBJbnB1dCgpIHVzZVBhZ2VDYWNoZT86IElEZXRhaWxzTGlzdFByb3BzWyd1c2VQYWdlQ2FjaGUnXTtcclxuICBASW5wdXQoKSBvblNob3VsZFZpcnR1YWxpemU/OiAocHJvcHM6IElMaXN0UHJvcHMpID0+IGJvb2xlYW47XHJcbiAgQElucHV0KCkgY2hlY2tib3hDZWxsQ2xhc3NOYW1lPzogSURldGFpbHNMaXN0UHJvcHNbJ2NoZWNrYm94Q2VsbENsYXNzTmFtZSddO1xyXG4gIEBJbnB1dCgpIGVudGVyTW9kYWxTZWxlY3Rpb25PblRvdWNoPzogSURldGFpbHNMaXN0UHJvcHNbJ2VudGVyTW9kYWxTZWxlY3Rpb25PblRvdWNoJ107XHJcbiAgQElucHV0KCkgY29sdW1uUmVvcmRlck9wdGlvbnM/OiBJRGV0YWlsc0xpc3RQcm9wc1snY29sdW1uUmVvcmRlck9wdGlvbnMnXTtcclxuICBASW5wdXQoKSBnZXRHcm91cEhlaWdodD86IElEZXRhaWxzTGlzdFByb3BzWydnZXRHcm91cEhlaWdodCddO1xyXG4gIEBJbnB1dCgpIHVzZVJlZHVjZWRSb3dSZW5kZXJlcj86IElEZXRhaWxzTGlzdFByb3BzWyd1c2VSZWR1Y2VkUm93UmVuZGVyZXInXTtcclxuICBASW5wdXQoKSBjZWxsU3R5bGVQcm9wcz86IElEZXRhaWxzTGlzdFByb3BzWydjZWxsU3R5bGVQcm9wcyddO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVTZWxlY3Rpb25ab25lPzogSURldGFpbHNMaXN0UHJvcHNbJ2Rpc2FibGVTZWxlY3Rpb25ab25lJ107XHJcbiAgQElucHV0KCkgZW5hYmxlVXBkYXRlQW5pbWF0aW9ucz86IElEZXRhaWxzTGlzdFByb3BzWydlbmFibGVVcGRhdGVBbmltYXRpb25zJ107XHJcbiAgQElucHV0KCkgdXNlRmFzdEljb25zPzogSURldGFpbHNMaXN0UHJvcHNbJ3VzZUZhc3RJY29ucyddO1xyXG5cclxuICAvLyBJbmhlcml0ZWQgbWVtYmVycyAoSVdpdGhWaWV3cG9ydFByb3BzKVxyXG4gIEBJbnB1dCgpIHNraXBWaWV3cG9ydE1lYXN1cmVzPzogSURldGFpbHNMaXN0UHJvcHNbJ3NraXBWaWV3cG9ydE1lYXN1cmVzJ107XHJcblxyXG4gIC8vIFJlbmRlciBtZW1iZXJzXHJcbiAgQElucHV0KCkgcmVuZGVyQ2hlY2tib3g/OiBJbnB1dFJlbmRlcmVyT3B0aW9uczxJRGV0YWlsc0xpc3RDaGVja2JveFByb3BzPjtcclxuICBASW5wdXQoKSByZW5kZXJEZXRhaWxzRm9vdGVyPzogSW5wdXRSZW5kZXJlck9wdGlvbnM8SURldGFpbHNGb290ZXJQcm9wcz47XHJcbiAgQElucHV0KCkgcmVuZGVyRGV0YWlsc0hlYWRlcj86IElucHV0UmVuZGVyZXJPcHRpb25zPElEZXRhaWxzSGVhZGVyUHJvcHM+O1xyXG4gIEBJbnB1dCgpIHJlbmRlck1pc3NpbmdJdGVtPzogSW5wdXRSZW5kZXJlck9wdGlvbnM8SU1pc3NpbmdJdGVtUmVuZGVyQ29udGV4dD47XHJcbiAgQElucHV0KCkgcmVuZGVyUm93PzogSW5wdXRSZW5kZXJlck9wdGlvbnM8SURldGFpbHNSb3dQcm9wcz47XHJcblxyXG4gIC8vIENhbGxiYWNrIG1lbWJlcnNcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25BY3RpdmVJdGVtQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8eyBpdGVtPzogYW55OyBpbmRleD86IG51bWJlcjsgZXY/OiBFdmVudCB9PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvbkNvbHVtbkhlYWRlckNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjx7IGV2PzogRXZlbnQ7IGNvbHVtbj86IElDb2x1bW4gfT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25Db2x1bW5IZWFkZXJDb250ZXh0TWVudSA9IG5ldyBFdmVudEVtaXR0ZXI8eyBjb2x1bW4/OiBJQ29sdW1uOyBldj86IEV2ZW50IH0+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uQ29sdW1uUmVzaXplID0gbmV3IEV2ZW50RW1pdHRlcjx7IGNvbHVtbj86IElDb2x1bW47IG5ld1dpZHRoPzogbnVtYmVyOyBjb2x1bW5JbmRleD86IG51bWJlciB9PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvbkRpZFVwZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8eyBkZXRhaWxzTGlzdD86IERldGFpbHNMaXN0QmFzZSB9PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvbkl0ZW1Db250ZXh0TWVudSA9IG5ldyBFdmVudEVtaXR0ZXI8eyBpdGVtPzogYW55OyBpbmRleD86IG51bWJlcjsgZXY/OiBFdmVudCB9PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvbkl0ZW1JbnZva2VkID0gbmV3IEV2ZW50RW1pdHRlcjx7IGl0ZW0/OiBhbnk7IGluZGV4PzogbnVtYmVyOyBldj86IEV2ZW50IH0+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uUm93RGlkTW91bnQgPSBuZXcgRXZlbnRFbWl0dGVyPHsgaXRlbT86IGFueTsgaW5kZXg/OiBudW1iZXIgfT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25Sb3dXaWxsVW5tb3VudCA9IG5ldyBFdmVudEVtaXR0ZXI8eyBpdGVtPzogYW55OyBpbmRleD86IG51bWJlciB9PigpO1xyXG5cclxuICAvLyBEaXJlY3RpdmUgbWVtYmVyc1xyXG4gIEBJbnB1dCgpIGNvbHVtbnM6IFJlYWRvbmx5QXJyYXk8SURldGFpbHNMaXN0Q29sdW1uT3B0aW9ucz47XHJcbiAgQElucHV0KCkgZ3JvdXBzOiBSZWFkb25seUFycmF5PElHcm91cD47XHJcblxyXG4gIC8qKiBAaW50ZXJuYWwgKi9cclxuICB0cmFuc2Zvcm1lZENvbHVtbnNfOiBSZWFkb25seUFycmF5PElDb2x1bW4+O1xyXG4gIHRyYW5zZm9ybWVkR3JvdXBzXzogUmVhZG9ubHlBcnJheTxJR3JvdXA+O1xyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IF9zdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xyXG5cclxuICBvblJlbmRlckNoZWNrYm94OiAoXHJcbiAgICBwcm9wcz86IElEZXRhaWxzTGlzdENoZWNrYm94UHJvcHMsXHJcbiAgICBkZWZhdWx0UmVuZGVyPzogSnN4UmVuZGVyRnVuYzxJRGV0YWlsc0xpc3RDaGVja2JveFByb3BzPlxyXG4gICkgPT4gSlNYLkVsZW1lbnQ7XHJcbiAgb25SZW5kZXJEZXRhaWxzRm9vdGVyOiAoXHJcbiAgICBwcm9wcz86IElEZXRhaWxzRm9vdGVyUHJvcHMsXHJcbiAgICBkZWZhdWx0UmVuZGVyPzogSnN4UmVuZGVyRnVuYzxJRGV0YWlsc0Zvb3RlclByb3BzPlxyXG4gICkgPT4gSlNYLkVsZW1lbnQ7XHJcbiAgb25SZW5kZXJEZXRhaWxzSGVhZGVyOiAoXHJcbiAgICBwcm9wcz86IElEZXRhaWxzSGVhZGVyUHJvcHMsXHJcbiAgICBkZWZhdWx0UmVuZGVyPzogSnN4UmVuZGVyRnVuYzxJRGV0YWlsc0hlYWRlclByb3BzPlxyXG4gICkgPT4gSlNYLkVsZW1lbnQ7XHJcbiAgb25SZW5kZXJNaXNzaW5nSXRlbTogKGluZGV4PzogbnVtYmVyLCByb3dQcm9wcz86IElEZXRhaWxzUm93UHJvcHMpID0+IEpTWC5FbGVtZW50O1xyXG4gIG9uUmVuZGVyUm93OiAocHJvcHM/OiBJRGV0YWlsc1Jvd1Byb3BzLCBkZWZhdWx0UmVuZGVyPzogSnN4UmVuZGVyRnVuYzxJRGV0YWlsc1Jvd1Byb3BzPikgPT4gSlNYLkVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmdab25lOiBOZ1pvbmUpIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlciwgeyBuZ1pvbmUsIHNldEhvc3REaXNwbGF5OiB0cnVlIH0pO1xyXG5cclxuICAgIC8vIEJpbmQgdGhpcyB0byBhY2Nlc3MgQW5ndWxhciBjb21wb25lbnQgcHJvcGVydGllc1xyXG4gICAgdGhpcy5vbkFjdGl2ZUl0ZW1DaGFuZ2VkSGFuZGxlciA9IHRoaXMub25BY3RpdmVJdGVtQ2hhbmdlZEhhbmRsZXIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25Db2x1bW5IZWFkZXJDbGlja0hhbmRsZXIgPSB0aGlzLm9uQ29sdW1uSGVhZGVyQ2xpY2tIYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uQ29sdW1uSGVhZGVyQ29udGV4dE1lbnVIYW5kbGVyID0gdGhpcy5vbkNvbHVtbkhlYWRlckNvbnRleHRNZW51SGFuZGxlci5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbkNvbHVtblJlc2l6ZUhhbmRsZXIgPSB0aGlzLm9uQ29sdW1uUmVzaXplSGFuZGxlci5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbkRpZFVwZGF0ZUhhbmRsZXIgPSB0aGlzLm9uRGlkVXBkYXRlSGFuZGxlci5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbkl0ZW1Db250ZXh0TWVudUhhbmRsZXIgPSB0aGlzLm9uSXRlbUNvbnRleHRNZW51SGFuZGxlci5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbkl0ZW1JbnZva2VkSGFuZGxlciA9IHRoaXMub25JdGVtSW52b2tlZEhhbmRsZXIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25Sb3dEaWRNb3VudEhhbmRsZXIgPSB0aGlzLm9uUm93RGlkTW91bnRIYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uUm93V2lsbFVubW91bnRIYW5kbGVyID0gdGhpcy5vblJvd1dpbGxVbm1vdW50SGFuZGxlci5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLm9uUmVuZGVyQ2hlY2tib3ggPSB0aGlzLmNyZWF0ZVJlbmRlclByb3BIYW5kbGVyKHRoaXMucmVuZGVyQ2hlY2tib3gpO1xyXG4gICAgdGhpcy5vblJlbmRlckRldGFpbHNGb290ZXIgPSB0aGlzLmNyZWF0ZVJlbmRlclByb3BIYW5kbGVyKHRoaXMucmVuZGVyRGV0YWlsc0Zvb3Rlcik7XHJcbiAgICB0aGlzLm9uUmVuZGVyRGV0YWlsc0hlYWRlciA9IHRoaXMuY3JlYXRlUmVuZGVyUHJvcEhhbmRsZXIodGhpcy5yZW5kZXJEZXRhaWxzSGVhZGVyKTtcclxuICAgIHRoaXMub25SZW5kZXJSb3cgPSB0aGlzLmNyZWF0ZVJlbmRlclByb3BIYW5kbGVyKHRoaXMucmVuZGVyUm93KTtcclxuXHJcbiAgICBjb25zdCBtaXNzaW5nSXRlbVJlbmRlcmVyID0gdGhpcy5jcmVhdGVJbnB1dEpzeFJlbmRlcmVyKHRoaXMucmVuZGVyTWlzc2luZ0l0ZW0pO1xyXG4gICAgdGhpcy5vblJlbmRlck1pc3NpbmdJdGVtID0gKGluZGV4LCByb3dQcm9wcykgPT4gbWlzc2luZ0l0ZW1SZW5kZXJlcih7IGluZGV4LCByb3dQcm9wcyB9KTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFR5cGVkQ2hhbmdlczxGYWJEZXRhaWxzTGlzdENvbXBvbmVudD4pIHtcclxuICAgIGlmIChcclxuICAgICAgY2hhbmdlc1snY29sdW1ucyddICYmXHJcbiAgICAgIGNoYW5nZXNbJ2NvbHVtbnMnXS5jdXJyZW50VmFsdWUgJiZcclxuICAgICAgY2hhbmdlc1snY29sdW1ucyddLnByZXZpb3VzVmFsdWUgIT09IGNoYW5nZXNbJ2NvbHVtbnMnXS5jdXJyZW50VmFsdWVcclxuICAgICkge1xyXG4gICAgICB0aGlzLl9jcmVhdGVUcmFuc2Zvcm1lZENvbHVtbnMoY2hhbmdlc1snY29sdW1ucyddLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoXHJcbiAgICAgIGNoYW5nZXNbJ2dyb3VwcyddICYmXHJcbiAgICAgIGNoYW5nZXNbJ2dyb3VwcyddLmN1cnJlbnRWYWx1ZSAmJlxyXG4gICAgICBjaGFuZ2VzWydncm91cHMnXS5wcmV2aW91c1ZhbHVlICE9PSBjaGFuZ2VzWydncm91cHMnXS5jdXJyZW50VmFsdWVcclxuICAgICkge1xyXG4gICAgICB0aGlzLl9jcmVhdGVUcmFuc2Zvcm1lZEdyb3VwcyhjaGFuZ2VzWydncm91cHMnXS5jdXJyZW50VmFsdWUpO1xyXG4gICAgfVxyXG4gICAgc3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5jb2x1bW5zRGlyZWN0aXZlKSB7XHJcbiAgICAgIHRoaXMuX2luaXREaXJlY3RpdmUodGhpcy5jb2x1bW5zRGlyZWN0aXZlLCAnY29sdW1ucycpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZ3JvdXBzRGlyZWN0aXZlKSB7XHJcbiAgICAgIHRoaXMuX2luaXREaXJlY3RpdmUodGhpcy5ncm91cHNEaXJlY3RpdmUsICdncm91cHMnKTtcclxuICAgIH1cclxuICAgIHN1cGVyLm5nQWZ0ZXJDb250ZW50SW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmZvckVhY2goc3ViID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcclxuICB9XHJcblxyXG4gIG9uQWN0aXZlSXRlbUNoYW5nZWRIYW5kbGVyKGl0ZW0/OiBhbnksIGluZGV4PzogbnVtYmVyLCBldj86IFJlYWN0LkZvY3VzRXZlbnQ8SFRNTEVsZW1lbnQ+KSB7XHJcbiAgICB0aGlzLm9uQWN0aXZlSXRlbUNoYW5nZWQuZW1pdCh7IGl0ZW0sIGluZGV4LCBldjogZXYubmF0aXZlRXZlbnQgfSk7XHJcbiAgfVxyXG5cclxuICBvbkNvbHVtbkhlYWRlckNsaWNrSGFuZGxlcihldj86IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEVsZW1lbnQ+LCBjb2x1bW4/OiBJQ29sdW1uKSB7XHJcbiAgICB0aGlzLm9uQ29sdW1uSGVhZGVyQ2xpY2suZW1pdCh7IGV2OiBldi5uYXRpdmVFdmVudCwgY29sdW1uIH0pO1xyXG4gIH1cclxuXHJcbiAgb25Db2x1bW5IZWFkZXJDb250ZXh0TWVudUhhbmRsZXIoY29sdW1uPzogSUNvbHVtbiwgZXY/OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50Pikge1xyXG4gICAgdGhpcy5vbkNvbHVtbkhlYWRlckNvbnRleHRNZW51LmVtaXQoeyBjb2x1bW4sIGV2OiBldi5uYXRpdmVFdmVudCB9KTtcclxuICB9XHJcblxyXG4gIG9uQ29sdW1uUmVzaXplSGFuZGxlcihjb2x1bW4/OiBJQ29sdW1uLCBuZXdXaWR0aD86IG51bWJlciwgY29sdW1uSW5kZXg/OiBudW1iZXIpIHtcclxuICAgIHRoaXMub25Db2x1bW5SZXNpemUuZW1pdCh7IGNvbHVtbiwgbmV3V2lkdGgsIGNvbHVtbkluZGV4IH0pO1xyXG4gIH1cclxuXHJcbiAgb25EaWRVcGRhdGVIYW5kbGVyKGRldGFpbHNMaXN0PzogRGV0YWlsc0xpc3RCYXNlKSB7XHJcbiAgICB0aGlzLm9uRGlkVXBkYXRlLmVtaXQoeyBkZXRhaWxzTGlzdCB9KTtcclxuICB9XHJcblxyXG4gIG9uSXRlbUNvbnRleHRNZW51SGFuZGxlcihpdGVtPzogYW55LCBpbmRleD86IG51bWJlciwgZXY/OiBFdmVudCkge1xyXG4gICAgdGhpcy5vbkl0ZW1Db250ZXh0TWVudS5lbWl0KHsgaXRlbSwgaW5kZXgsIGV2IH0pO1xyXG4gIH1cclxuXHJcbiAgb25JdGVtSW52b2tlZEhhbmRsZXIoaXRlbT86IGFueSwgaW5kZXg/OiBudW1iZXIsIGV2PzogRXZlbnQpIHtcclxuICAgIHRoaXMub25JdGVtSW52b2tlZC5lbWl0KHsgaXRlbSwgaW5kZXgsIGV2IH0pO1xyXG4gIH1cclxuXHJcbiAgb25Sb3dEaWRNb3VudEhhbmRsZXIoaXRlbT86IGFueSwgaW5kZXg/OiBudW1iZXIpIHtcclxuICAgIHRoaXMub25Sb3dEaWRNb3VudC5lbWl0KHsgaXRlbSwgaW5kZXggfSk7XHJcbiAgfVxyXG5cclxuICBvblJvd1dpbGxVbm1vdW50SGFuZGxlcihpdGVtPzogYW55LCBpbmRleD86IG51bWJlcikge1xyXG4gICAgdGhpcy5vblJvd1dpbGxVbm1vdW50LmVtaXQoeyBpdGVtLCBpbmRleCB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2luaXREaXJlY3RpdmUoZGlyZWN0aXZlOiBDaGFuZ2VhYmxlSXRlbXNEaXJlY3RpdmU8YW55PiwgcHJvcGVydHlLZXk6ICdjb2x1bW5zJyB8ICdncm91cHMnKSB7XHJcbiAgICBjb25zdCB0cmFuc2Zvcm1JdGVtc0Z1bmMgPSB0aGlzLl90cmFuc2Zvcm1JdGVtc0Z1bmN0aW9uKGRpcmVjdGl2ZSk7XHJcbiAgICBjb25zdCBzZXRJdGVtcyA9IChtYXBwZXI6IChpdGVtczogUmVhZG9ubHlBcnJheTxhbnk+KSA9PiBSZWFkb25seUFycmF5PGFueT4pID0+IHtcclxuICAgICAgdGhpc1twcm9wZXJ0eUtleV0gPSBtYXBwZXIodGhpc1twcm9wZXJ0eUtleV0pO1xyXG4gICAgICB0cmFuc2Zvcm1JdGVtc0Z1bmModGhpc1twcm9wZXJ0eUtleV0pO1xyXG4gICAgICB0aGlzLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfTtcclxuXHJcbiAgICBzZXRJdGVtcygoKSA9PiBkaXJlY3RpdmUuaXRlbXMpO1xyXG5cclxuICAgIC8vIFN1YnNjcmliZSB0byBhZGRpbmcvcmVtb3ZpbmcgaXRlbXNcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMucHVzaChcclxuICAgICAgZGlyZWN0aXZlLm9uSXRlbXNDaGFuZ2VkLnN1YnNjcmliZSgobmV3SXRlbXM6IFF1ZXJ5TGlzdDxDaGFuZ2VhYmxlSXRlbXNEaXJlY3RpdmU8YW55Pj4pID0+IHtcclxuICAgICAgICBzZXRJdGVtcygoKSA9PiBuZXdJdGVtcy5tYXAoZGlyZWN0aXZlID0+IGRpcmVjdGl2ZSkpO1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBTdWJzY3JpYmUgZm9yIGV4aXN0aW5nIGl0ZW0gY2hhbmdlc1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKFxyXG4gICAgICBkaXJlY3RpdmUub25DaGlsZEl0ZW1DaGFuZ2VkLnN1YnNjcmliZSgoeyBrZXksIGNoYW5nZXMgfSkgPT4ge1xyXG4gICAgICAgIHNldEl0ZW1zKGl0ZW1zID0+IGl0ZW1zLm1hcChpdGVtID0+IChpdGVtLmtleSA9PT0ga2V5ID8gbWVyZ2VJdGVtQ2hhbmdlcyhpdGVtLCBjaGFuZ2VzKSA6IGl0ZW0pKSk7XHJcbiAgICAgICAgdGhpcy5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF90cmFuc2Zvcm1JdGVtc0Z1bmN0aW9uKGRpcmVjdGl2ZTogQ2hhbmdlYWJsZUl0ZW1zRGlyZWN0aXZlPGFueT4pIHtcclxuICAgIGlmIChkaXJlY3RpdmUgaW5zdGFuY2VvZiBEZXRhaWxzTGlzdENvbHVtbnNEaXJlY3RpdmUpIHtcclxuICAgICAgcmV0dXJuIChuZXdDb2x1bW5zOiBSZWFkb25seUFycmF5PGFueT4pID0+IHRoaXMuX2NyZWF0ZVRyYW5zZm9ybWVkQ29sdW1ucyhuZXdDb2x1bW5zKTtcclxuICAgIH0gZWxzZSBpZiAoZGlyZWN0aXZlIGluc3RhbmNlb2YgRGV0YWlsc0xpc3RHcm91cHNEaXJlY3RpdmUpIHtcclxuICAgICAgcmV0dXJuIChuZXdHcm91cHM6IFJlYWRvbmx5QXJyYXk8YW55PikgPT4gdGhpcy5fY3JlYXRlVHJhbnNmb3JtZWRHcm91cHMobmV3R3JvdXBzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBkaXJlY3RpdmUgZ2l2ZW4nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2NyZWF0ZVRyYW5zZm9ybWVkQ29sdW1ucyhuZXdDb2x1bW5zOiBSZWFkb25seUFycmF5PElEZXRhaWxzTGlzdENvbHVtbk9wdGlvbnM+KSB7XHJcbiAgICB0aGlzLnRyYW5zZm9ybWVkQ29sdW1uc18gPSBuZXdDb2x1bW5zLm1hcChjb2x1bW4gPT4gdGhpcy5fdHJhbnNmb3JtRGV0YWlsc0xpc3RDb2x1bW5PcHRpb25zVG9Qcm9wcyhjb2x1bW4pKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3RyYW5zZm9ybURldGFpbHNMaXN0Q29sdW1uT3B0aW9uc1RvUHJvcHMob3B0aW9uczogSURldGFpbHNMaXN0Q29sdW1uT3B0aW9ucyk6IElDb2x1bW4ge1xyXG4gICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzLmNyZWF0ZUlucHV0SnN4UmVuZGVyZXIob3B0aW9ucy5yZW5kZXIpO1xyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXHJcbiAgICAgIHt9LFxyXG4gICAgICBvbWl0KG9wdGlvbnMsICdyZW5kZXInKSxcclxuICAgICAgcmVuZGVyZXIgJiZcclxuICAgICAgKHtcclxuICAgICAgICBvblJlbmRlcjogKGl0ZW0/OiBhbnksIGluZGV4PzogbnVtYmVyLCBjb2x1bW4/OiBJQ29sdW1uKSA9PiByZW5kZXJlcih7IGl0ZW0sIGluZGV4LCBjb2x1bW4gfSksXHJcbiAgICAgIH0gYXMgUGljazxJQ29sdW1uLCAnb25SZW5kZXInPilcclxuICAgICkgYXMgSUNvbHVtbjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2NyZWF0ZVRyYW5zZm9ybWVkR3JvdXBzKG5ld0dyb3VwczogUmVhZG9ubHlBcnJheTxJR3JvdXA+KSB7XHJcbiAgICB0aGlzLnRyYW5zZm9ybWVkR3JvdXBzXyA9IG5ld0dyb3VwcztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU1pc3NpbmdJdGVtUmVuZGVyQ29udGV4dCB7XHJcbiAgaW5kZXg/OiBudW1iZXI7XHJcbiAgcm93UHJvcHM/OiBJRGV0YWlsc1Jvd1Byb3BzO1xyXG59XHJcbiJdfQ==