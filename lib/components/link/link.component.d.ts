/// <reference types="react" />
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectorRef, ElementRef, Renderer2 } from '@angular/core';
import { ILinkProps } from 'office-ui-fabric-react/lib/Link';
export declare class FabLinkComponent extends ReactWrapperComponent<ILinkProps> {
    readonly LinkType: any;
    protected reactNodeRef: ElementRef;
    href: ILinkProps['href'];
    type?: ILinkProps['type'];
    download?: ILinkProps['download'];
    hrefLang?: ILinkProps['hrefLang'];
    media?: ILinkProps['media'];
    rel?: ILinkProps['rel'];
    target?: ILinkProps['target'];
    autoFocus?: ILinkProps['autoFocus'];
    form?: ILinkProps['form'];
    formAction?: ILinkProps['formAction'];
    formEncType?: ILinkProps['formEncType'];
    formMethod?: ILinkProps['formMethod'];
    formNoValidate?: ILinkProps['formNoValidate'];
    formTarget?: ILinkProps['formTarget'];
    name?: ILinkProps['name'];
    value?: ILinkProps['value'];
    componentRef?: ILinkProps['componentRef'];
    disabled?: ILinkProps['disabled'];
    styles?: ILinkProps['styles'];
    theme?: ILinkProps['theme'];
    linkAs?: string | React.ComponentClass | React.StatelessComponent;
    keytipProps?: ILinkProps['keytipProps'];
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2);
}
