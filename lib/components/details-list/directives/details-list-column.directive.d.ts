import { AfterContentInit, EventEmitter, TemplateRef } from '@angular/core';
import { InputRendererOptions, KnownKeys } from '@angular-react/core';
import { IColumn } from 'office-ui-fabric-react/lib/DetailsList';
import { ChangeableItemDirective } from '@angular-react/fabric/lib/components/core';
/**
 * Wrapper directive for rendering a custom column to a DetailsListColumn
 */
export declare class DetailsListColumnRenderDirective {
    readonly templateRef: TemplateRef<IDetailsListColumnOptionsRenderContext>;
}
/**
 * Wrapper directive for creating a DetailsListColumn
 */
export declare class DetailsListColumnDirective extends ChangeableItemDirective<IDetailsListColumnOptions> implements AfterContentInit {
    readonly renderDirective: DetailsListColumnRenderDirective;
    name: IColumn['name'];
    fieldName?: IColumn['fieldName'];
    className?: IColumn['className'];
    minWidth: IColumn['minWidth'];
    ariaLabel?: IColumn['ariaLabel'];
    isRowHeader?: IColumn['isRowHeader'];
    maxWidth?: IColumn['maxWidth'];
    columnActionsMode?: IColumn['columnActionsMode'];
    iconName?: IColumn['iconName'];
    isIconOnly?: IColumn['isIconOnly'];
    iconClassName?: IColumn['iconClassName'];
    isCollapsable?: IColumn['isCollapsable'];
    isSorted?: IColumn['isSorted'];
    isSortedDescending?: IColumn['isSortedDescending'];
    isResizable?: IColumn['isResizable'];
    isMultiline?: IColumn['isMultiline'];
    onRender?: IColumn['onRender'];
    getValueKey?: IColumn['getValueKey'];
    onRenderDivider?: IColumn['onRenderDivider'];
    isFiltered?: IColumn['isFiltered'];
    isGrouped?: IColumn['isGrouped'];
    data?: IColumn['data'];
    calculatedWidth?: IColumn['calculatedWidth'];
    currentWidth?: IColumn['currentWidth'];
    headerClassName?: IColumn['headerClassName'];
    isPadded?: IColumn['isPadded'];
    sortAscendingAriaLabel?: IColumn['sortAscendingAriaLabel'];
    sortDescendingAriaLabel?: IColumn['sortDescendingAriaLabel'];
    groupAriaLabel?: IColumn['groupAriaLabel'];
    filterAriaLabel?: IColumn['filterAriaLabel'];
    render: IDetailsListColumnOptions['render'];
    readonly onColumnClick: EventEmitter<{
        ev: Event;
        column: IColumn;
    }>;
    readonly onColumnContextMenu: EventEmitter<{
        column?: IColumn;
        ev?: Event;
    }>;
    readonly onColumnResize: EventEmitter<{
        width?: number;
    }>;
    ngAfterContentInit(): void;
}
export interface IDetailsListColumnOptions<TData = any> extends Pick<IColumn, Exclude<KnownKeys<IColumn>, 'onRender'>> {
    readonly render?: InputRendererOptions<IDetailsListColumnOptionsRenderContext>;
    readonly onColumnClick?: any;
    readonly onColumnContextMenu?: any;
    readonly onColumnResize?: any;
    readonly data?: TData;
}
export interface IDetailsListColumnOptionsRenderContext {
    item?: any;
    index?: number;
    column?: IColumn;
}
