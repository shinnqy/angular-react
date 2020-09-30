import { AfterContentInit, EventEmitter, OnDestroy, QueryList, TemplateRef, ElementRef } from '@angular/core';
import { IContextualMenuItem } from 'office-ui-fabric-react/lib/ContextualMenu';
import { KnownKeys, InputRendererOptions } from '@angular-react/core';
import { ItemChangedPayload, IChangeableItemsContainer, ChangeableItemDirective } from '@angular-react/fabric/lib/components/core';
import { OnChanges } from '@angular-react/fabric/lib/declarations';
export declare type ContextualMenuItemChangedPayload = ItemChangedPayload<IContextualMenuItemOptions['key'], IContextualMenuItemOptions>;
/**
 * Wrapper directive to allow rendering a custom item to a ContextualMenuItem.
 */
export declare class ContextualMenuItemRenderDirective {
    readonly templateRef: TemplateRef<IContextualMenuItemOptionsRenderContext>;
}
/**
 * Wrapper directive to allow rendering a custom icon to a ContextualMenuItem.
 */
export declare class ContextualMenuItemRenderIconDirective {
    readonly templateRef: TemplateRef<IContextualMenuItemOptionsRenderIconContext>;
}
export declare class ContextualMenuItemDirective extends ChangeableItemDirective<IContextualMenuItem> implements AfterContentInit, IChangeableItemsContainer<IContextualMenuItem>, IContextualMenuItem, OnChanges<ContextualMenuItemDirective>, OnDestroy {
    readonly elementRef: ElementRef<HTMLElement>;
    readonly menuItemsDirectives: QueryList<ContextualMenuItemDirective>;
    readonly renderDirective: ContextualMenuItemRenderDirective;
    readonly renderIconDirective: ContextualMenuItemRenderIconDirective;
    componentRef?: IContextualMenuItem['componentRef'];
    text?: IContextualMenuItem['text'];
    secondaryText?: IContextualMenuItem['secondaryText'];
    itemType?: IContextualMenuItem['itemType'];
    iconProps?: IContextualMenuItem['iconProps'];
    submenuIconProps?: IContextualMenuItem['submenuIconProps'];
    disabled?: IContextualMenuItem['disabled'];
    primaryDisabled?: IContextualMenuItem['primaryDisabled'];
    shortCut?: IContextualMenuItem['shortCut'];
    canCheck?: IContextualMenuItem['canCheck'];
    checked?: IContextualMenuItem['checked'];
    split?: IContextualMenuItem['split'];
    data?: IContextualMenuItem['data'];
    href?: IContextualMenuItem['href'];
    target?: IContextualMenuItem['target'];
    rel?: IContextualMenuItem['rel'];
    subMenuProps?: IContextualMenuItem['subMenuProps'];
    getItemClassNames?: IContextualMenuItem['getItemClassNames'];
    itemProps?: IContextualMenuItem['itemProps'];
    getSplitButtonVerticalDividerClassNames?: IContextualMenuItem['getSplitButtonVerticalDividerClassNames'];
    sectionProps?: IContextualMenuItem['sectionProps'];
    className?: IContextualMenuItem['className'];
    style?: IContextualMenuItem['style'];
    ariaLabel?: IContextualMenuItem['ariaLabel'];
    title?: IContextualMenuItem['title'];
    onMouseDown?: IContextualMenuItem['onMouseDown'];
    role?: IContextualMenuItem['role'];
    customOnRenderListLength?: IContextualMenuItem['customOnRenderListLength'];
    keytipProps?: IContextualMenuItem['keytipProps'];
    inactive?: IContextualMenuItem['inactive'];
    name?: IContextualMenuItem['name'];
    render: IContextualMenuItemOptions['render'];
    renderIcon: IContextualMenuItemOptions['renderIcon'];
    readonly click: EventEmitter<{
        ev?: MouseEvent | KeyboardEvent;
        item?: IContextualMenuItem;
    }>;
    readonly onChildItemChanged: EventEmitter<ItemChangedPayload<string, IContextualMenuItem>>;
    readonly onItemsChanged: EventEmitter<QueryList<ChangeableItemDirective<IContextualMenuItem>>>;
    constructor(elementRef: ElementRef<HTMLElement>);
    private _changeableItemsHelper;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    private _directiveToContextualMenuItem;
}
export interface IContextualMenuItemOptions<TData = any> extends Pick<IContextualMenuItem, Exclude<KnownKeys<IContextualMenuItem>, 'onRender' | 'onRenderIcon'>> {
    readonly renderIcon?: InputRendererOptions<IContextualMenuItemOptionsRenderIconContext>;
    readonly render?: InputRendererOptions<IContextualMenuItemOptionsRenderContext>;
    readonly data?: TData;
    /**
     * For any attributes like data-* etc.
     */
    [propertyName: string]: any;
}
export interface IContextualMenuItemOptionsRenderContext {
    item: any;
    dismissMenu: (ev?: any, dismissAll?: boolean) => void;
}
export interface IContextualMenuItemOptionsRenderIconContext {
    contextualMenuItem: IContextualMenuItem;
}
