/// <reference types="react" />
import { ReactWrapperComponent } from '@angular-react/core';
import { INavProps, INavLink } from 'office-ui-fabric-react/lib/Nav';
import { ElementRef, ChangeDetectorRef, Renderer2, EventEmitter } from '@angular/core';
export declare class FabNavComponent extends ReactWrapperComponent<INavProps> {
    protected reactNodeRef: ElementRef;
    componentRef?: INavProps['componentRef'];
    groups: INavProps["groups"];
    selectedKey?: INavProps["selectedKey"];
    isOnTop?: INavProps["isOnTop"];
    initialSelectedKey?: INavProps["initialSelectedKey"];
    ariaLabel?: INavProps["ariaLabel"];
    expandButtonAriaLabel?: INavProps["expandButtonAriaLabel"];
    selectedAriaLabel?: INavProps["selectedAriaLabel"];
    readonly onLinkClick: EventEmitter<{
        event: Event;
        link: INavLink;
    }>;
    readonly onLinkExpandClick: EventEmitter<{
        event: Event;
        link: INavLink;
    }>;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2);
    onLinkClickHandler(event: React.MouseEvent<HTMLElement>, link?: INavLink): void;
    onLinkExpandClickHandler(event: React.MouseEvent<HTMLElement>, link?: INavLink): void;
}
