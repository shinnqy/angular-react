import { TemplateRef, ElementRef } from '@angular/core';
import { ItemChangedPayload } from 'angular-react-toolkit/core/declarative/item-changed.payload';
import { ContextualMenuItemDirective } from '../../contextual-menu/directives/contextual-menu-item.directive';
import { ICommandBarItemOptions, ICommandBarItemOptionsRenderContext, ICommandBarItemOptionsRenderIconContext } from '../command-bar.component';
export declare type CommandBarItemChangedPayload = ItemChangedPayload<ICommandBarItemOptions['key'], ICommandBarItemOptions>;
/**
 * Wrapper directive to allow rendering a custom item to a CommandBarItem.
 */
export declare class CommandBarItemRenderDirective {
    readonly templateRef: TemplateRef<ICommandBarItemOptionsRenderContext>;
}
/**
 * Wrapper directive to allow rendering a custom icon to a CommandBarItem.
 */
export declare class CommandBarItemRenderIconDirective {
    readonly templateRef: TemplateRef<ICommandBarItemOptionsRenderIconContext>;
}
export declare class CommandBarItemDirective extends ContextualMenuItemDirective implements ICommandBarItemOptions {
    iconOnly?: ICommandBarItemOptions['iconOnly'];
    tooltipHostProps?: ICommandBarItemOptions['tooltipHostProps'];
    buttonStyles?: ICommandBarItemOptions['buttonStyles'];
    cacheKey?: ICommandBarItemOptions['cacheKey'];
    renderedInOverflow?: ICommandBarItemOptions['renderedInOverflow'];
    commandBarButtonAs?: ICommandBarItemOptions['commandBarButtonAs'];
    constructor(elementRef: ElementRef<HTMLElement>);
}
