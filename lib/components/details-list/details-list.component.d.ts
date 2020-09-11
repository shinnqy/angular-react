/// <reference types="react" />
import { AfterContentInit, ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { InputRendererOptions, JsxRenderFunc, ReactWrapperComponent } from '@angular-react/core';
import { DetailsListBase, IColumn, IDetailsListCheckboxProps, IDetailsFooterProps, IDetailsHeaderProps, IDetailsListProps, IDetailsRowProps, IGroup } from 'office-ui-fabric-react/lib/DetailsList';
import { IListProps } from 'office-ui-fabric-react/lib/List';
import { OnChanges, TypedChanges } from 'angular-react-toolkit/declarations/angular/typed-changes';
import { IDetailsListColumnOptions } from './directives/details-list-column.directive';
import { DetailsListColumnsDirective } from './directives/details-list-columns.directive';
import { DetailsListGroupsDirective } from './directives/details-list-groups.directive';
export declare class FabDetailsListComponent extends ReactWrapperComponent<IDetailsListProps> implements AfterContentInit, OnChanges<FabDetailsListComponent>, OnDestroy, OnInit {
    readonly columnsDirective?: DetailsListColumnsDirective;
    readonly groupsDirective?: DetailsListGroupsDirective;
    protected reactNodeRef: ElementRef;
    theme?: IDetailsListProps['theme'];
    styles?: IDetailsListProps['styles'];
    componentRef?: IDetailsListProps['componentRef'];
    setKey?: IDetailsListProps['setKey'];
    items: IDetailsListProps['items'];
    listProps?: IDetailsListProps['listProps'];
    initialFocusedIndex?: IDetailsListProps['initialFocusedIndex'];
    className?: IDetailsListProps['className'];
    groupProps?: IDetailsListProps['groupProps'];
    indentWidth?: IDetailsListProps['indentWidth'];
    selection?: IDetailsListProps['selection'];
    selectionMode?: IDetailsListProps['selectionMode'];
    selectionPreservedOnEmptyClick?: IDetailsListProps['selectionPreservedOnEmptyClick'];
    selectionZoneProps?: IDetailsListProps['selectionZoneProps'];
    layoutMode?: IDetailsListProps['layoutMode'];
    checkboxVisibility?: IDetailsListProps['checkboxVisibility'];
    isHeaderVisible?: IDetailsListProps['isHeaderVisible'];
    constrainMode?: IDetailsListProps['constrainMode'];
    rowElementEventMap?: IDetailsListProps['rowElementEventMap'];
    getCellValueKey?: IDetailsListProps['getCellValueKey'];
    dragDropEvents?: IDetailsListProps['dragDropEvents'];
    viewport?: IDetailsListProps['viewport'];
    ariaLabelForListHeader?: IDetailsListProps['ariaLabelForListHeader'];
    ariaLabelForSelectAllCheckbox?: IDetailsListProps['ariaLabelForSelectAllCheckbox'];
    ariaLabelForSelectionColumn?: IDetailsListProps['ariaLabelForSelectionColumn'];
    getRowAriaLabel?: IDetailsListProps['getRowAriaLabel'];
    getRowAriaDescribedBy?: IDetailsListProps['getRowAriaDescribedBy'];
    getKey?: IDetailsListProps['getKey'];
    ariaLabel?: IDetailsListProps['ariaLabel'];
    checkButtonAriaLabel?: IDetailsListProps['checkButtonAriaLabel'];
    ariaLabelForGrid?: IDetailsListProps['ariaLabelForGrid'];
    shouldApplyApplicationRole?: IDetailsListProps['shouldApplyApplicationRole'];
    minimumPixelsForDrag?: IDetailsListProps['minimumPixelsForDrag'];
    compact?: IDetailsListProps['compact'];
    usePageCache?: IDetailsListProps['usePageCache'];
    onShouldVirtualize?: (props: IListProps) => boolean;
    checkboxCellClassName?: IDetailsListProps['checkboxCellClassName'];
    enterModalSelectionOnTouch?: IDetailsListProps['enterModalSelectionOnTouch'];
    columnReorderOptions?: IDetailsListProps['columnReorderOptions'];
    getGroupHeight?: IDetailsListProps['getGroupHeight'];
    useReducedRowRenderer?: IDetailsListProps['useReducedRowRenderer'];
    cellStyleProps?: IDetailsListProps['cellStyleProps'];
    disableSelectionZone?: IDetailsListProps['disableSelectionZone'];
    enableUpdateAnimations?: IDetailsListProps['enableUpdateAnimations'];
    useFastIcons?: IDetailsListProps['useFastIcons'];
    skipViewportMeasures?: IDetailsListProps['skipViewportMeasures'];
    renderCheckbox?: InputRendererOptions<IDetailsListCheckboxProps>;
    renderDetailsFooter?: InputRendererOptions<IDetailsFooterProps>;
    renderDetailsHeader?: InputRendererOptions<IDetailsHeaderProps>;
    renderMissingItem?: InputRendererOptions<IMissingItemRenderContext>;
    renderRow?: InputRendererOptions<IDetailsRowProps>;
    readonly onActiveItemChanged: EventEmitter<{
        item?: any;
        index?: number;
        ev?: Event;
    }>;
    readonly onColumnHeaderClick: EventEmitter<{
        ev?: Event;
        column?: IColumn;
    }>;
    readonly onColumnHeaderContextMenu: EventEmitter<{
        column?: IColumn;
        ev?: Event;
    }>;
    readonly onColumnResize: EventEmitter<{
        column?: IColumn;
        newWidth?: number;
        columnIndex?: number;
    }>;
    readonly onDidUpdate: EventEmitter<{
        detailsList?: DetailsListBase;
    }>;
    readonly onItemContextMenu: EventEmitter<{
        item?: any;
        index?: number;
        ev?: Event;
    }>;
    readonly onItemInvoked: EventEmitter<{
        item?: any;
        index?: number;
        ev?: Event;
    }>;
    readonly onRowDidMount: EventEmitter<{
        item?: any;
        index?: number;
    }>;
    readonly onRowWillUnmount: EventEmitter<{
        item?: any;
        index?: number;
    }>;
    columns: ReadonlyArray<IDetailsListColumnOptions>;
    groups: ReadonlyArray<IGroup>;
    /** @internal */
    transformedColumns_: ReadonlyArray<IColumn>;
    transformedGroups_: ReadonlyArray<IGroup>;
    private readonly _subscriptions;
    onRenderCheckbox: (props?: IDetailsListCheckboxProps, defaultRender?: JsxRenderFunc<IDetailsListCheckboxProps>) => JSX.Element;
    onRenderDetailsFooter: (props?: IDetailsFooterProps, defaultRender?: JsxRenderFunc<IDetailsFooterProps>) => JSX.Element;
    onRenderDetailsHeader: (props?: IDetailsHeaderProps, defaultRender?: JsxRenderFunc<IDetailsHeaderProps>) => JSX.Element;
    onRenderMissingItem: (index?: number, rowProps?: IDetailsRowProps) => JSX.Element;
    onRenderRow: (props?: IDetailsRowProps, defaultRender?: JsxRenderFunc<IDetailsRowProps>) => JSX.Element;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2, ngZone: NgZone);
    ngOnInit(): void;
    ngOnChanges(changes: TypedChanges<FabDetailsListComponent>): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    onActiveItemChangedHandler(item?: any, index?: number, ev?: React.FocusEvent<HTMLElement>): void;
    onColumnHeaderClickHandler(ev?: React.MouseEvent<HTMLElement>, column?: IColumn): void;
    onColumnHeaderContextMenuHandler(column?: IColumn, ev?: React.MouseEvent<HTMLElement>): void;
    onColumnResizeHandler(column?: IColumn, newWidth?: number, columnIndex?: number): void;
    onDidUpdateHandler(detailsList?: DetailsListBase): void;
    onItemContextMenuHandler(item?: any, index?: number, ev?: Event): void;
    onItemInvokedHandler(item?: any, index?: number, ev?: Event): void;
    onRowDidMountHandler(item?: any, index?: number): void;
    onRowWillUnmountHandler(item?: any, index?: number): void;
    private _initDirective;
    private _transformItemsFunction;
    private _createTransformedColumns;
    private _transformDetailsListColumnOptionsToProps;
    private _createTransformedGroups;
}
export interface IMissingItemRenderContext {
    index?: number;
    rowProps?: IDetailsRowProps;
}
