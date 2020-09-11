/// <reference types="react" />
import { InputRendererOptions, ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnInit, Renderer2 } from '@angular/core';
import { IGroup, IGroupedListProps, IGroupRenderProps } from 'office-ui-fabric-react/lib/GroupedList';
import { IListProps } from 'office-ui-fabric-react/lib/List';
export declare class FabGroupedListComponent extends ReactWrapperComponent<IGroupedListProps> implements OnInit {
    protected reactNodeRef: ElementRef;
    componentRef?: IGroupedListProps['componentRef'];
    theme?: IGroupedListProps['theme'];
    styles?: IGroupedListProps['styles'];
    className?: IGroupedListProps['className'];
    compact?: IGroupedListProps['compact'];
    dragDropEvents?: IGroupedListProps['dragDropEvents'];
    dragDropHelper?: IGroupedListProps['dragDropHelper'];
    eventsToRegister?: IGroupedListProps['eventsToRegister'];
    groupProps?: IGroupRenderProps;
    groups?: IGroupedListProps['groups'];
    items: IGroupedListProps['items'];
    listProps?: IGroupedListProps['listProps'];
    selection?: IGroupedListProps['selection'];
    selectionMode?: IGroupedListProps['selectionMode'];
    viewport?: IGroupedListProps['viewport'];
    usePageCache?: IGroupedListProps['usePageCache'];
    shouldVirtualize?: (props: IListProps) => boolean;
    getGroupHeight?: (group: IGroup, groupIndex: number) => number;
    renderCell: InputRendererOptions<ICellRenderContext>;
    readonly onGroupExpandStateChanged: EventEmitter<{
        isSomeGroupExpanded: boolean;
    }>;
    private _renderCell;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2, ngZone: NgZone);
    ngOnInit(): void;
    onRenderCell(nestingDepth?: number, item?: any, index?: number): React.ReactNode;
    onGroupExpandStateChangedHandler(isSomeGroupExpanded: boolean): void;
}
export interface ICellRenderContext {
    nestingDepth?: number;
    item?: any;
    index?: number;
}
