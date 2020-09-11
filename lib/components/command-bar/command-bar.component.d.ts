import { InputRendererOptions, KnownKeys, ReactWrapperComponent } from '@angular-react/core';
import { AfterContentInit, ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnDestroy, Renderer2 } from '@angular/core';
import { ICommandBarItemProps, ICommandBarProps } from 'office-ui-fabric-react/lib/CommandBar';
import { IContextualMenuItem } from 'office-ui-fabric-react/lib/ContextualMenu';
import { OnChanges, TypedChanges } from 'angular-react-toolkit/declarations/angular/typed-changes';
import { CommandBarFarItemsDirective, CommandBarItemsDirective, CommandBarOverflowItemsDirective } from './directives/command-bar-items.directives';
export declare class FabCommandBarComponent extends ReactWrapperComponent<ICommandBarProps> implements OnChanges<FabCommandBarComponent>, AfterContentInit, OnDestroy {
    readonly itemsDirective?: CommandBarItemsDirective;
    readonly farItemsDirective?: CommandBarFarItemsDirective;
    readonly overflowItemsDirective?: CommandBarOverflowItemsDirective;
    protected reactNodeRef: ElementRef;
    componentRef?: ICommandBarProps['componentRef'];
    overflowButtonProps?: ICommandBarProps['overflowButtonProps'];
    overflowButtonAs?: ICommandBarProps['overflowButtonAs'];
    buttonAs?: ICommandBarProps['buttonAs'];
    shiftOnReduce?: ICommandBarProps['shiftOnReduce'];
    className?: ICommandBarProps['className'];
    ariaLabel?: ICommandBarProps['ariaLabel'];
    styles?: ICommandBarProps['styles'];
    theme?: ICommandBarProps['theme'];
    onReduceData?: ICommandBarProps['onReduceData'];
    onGrowData?: ICommandBarProps['onGrowData'];
    items: ReadonlyArray<ICommandBarItemOptions>;
    farItems: ReadonlyArray<ICommandBarItemOptions>;
    overflowItems: ReadonlyArray<ICommandBarItemOptions>;
    readonly onDataReduced: EventEmitter<{
        movedItem: ICommandBarItemProps;
    }>;
    readonly onDataGrown: EventEmitter<{
        movedItem: ICommandBarItemProps;
    }>;
    /** @internal */
    transformedItems_: ReadonlyArray<ICommandBarItemProps>;
    /** @internal */
    transformedFarItems_: ReadonlyArray<ICommandBarItemProps>;
    /** @internal */
    transformedOverflowItems_: ReadonlyArray<ICommandBarItemProps>;
    private readonly _subscriptions;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2, ngZone: NgZone);
    ngOnChanges(changes: TypedChanges<FabCommandBarComponent>): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    private _initDirective;
    private _createTransformedItems;
    private _createTransformedFarItems;
    private _createTransformedOverflowItems;
    private _transformCommandBarItemOptionsToProps;
}
export interface ICommandBarItemOptions<TData = any> extends Pick<ICommandBarItemProps, Exclude<KnownKeys<ICommandBarItemProps>, 'onRender' | 'onRenderIcon'>> {
    readonly renderIcon?: InputRendererOptions<ICommandBarItemOptionsRenderIconContext>;
    readonly render?: InputRendererOptions<ICommandBarItemOptionsRenderContext>;
    readonly data?: TData;
}
export interface ICommandBarItemOptionsRenderContext {
    item: any;
    dismissMenu: (ev?: any, dismissAll?: boolean) => void;
}
export interface ICommandBarItemOptionsRenderIconContext {
    contextualMenuItem: IContextualMenuItem;
}
