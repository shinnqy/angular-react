/// <reference types="react" />
import { InputRendererOptions, JsxRenderFunc, ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnInit, Renderer2 } from '@angular/core';
import { ImageLoadState } from 'office-ui-fabric-react/lib/components/Image/Image.types';
import { IPersonaCoinProps, IPersonaProps, IPersonaSharedProps } from 'office-ui-fabric-react/lib/Persona';
export declare abstract class FabPersonaBaseComponent<TProps extends IPersonaSharedProps> extends ReactWrapperComponent<TProps> implements OnInit {
    text?: IPersonaProps['text'];
    size?: IPersonaProps['size'];
    imageShouldFadeIn?: IPersonaProps['imageShouldFadeIn'];
    imageShouldStartVisible?: IPersonaProps['imageShouldStartVisible'];
    imageUrl?: IPersonaProps['imageUrl'];
    imageAlt?: IPersonaProps['imageAlt'];
    imageInitials?: IPersonaProps['imageInitials'];
    allowPhoneInitials?: IPersonaProps['allowPhoneInitials'];
    initialsColor?: IPersonaProps['initialsColor'];
    presence?: IPersonaProps['presence'];
    isOutOfOffice?: IPersonaProps['isOutOfOffice'];
    secondaryText?: IPersonaProps['secondaryText'];
    tertiaryText?: IPersonaProps['tertiaryText'];
    optionalText?: IPersonaProps['optionalText'];
    hidePersonaDetails?: IPersonaProps['hidePersonaDetails'];
    showSecondaryText?: IPersonaProps['showSecondaryText'];
    showUnknownPersonaCoin?: IPersonaProps['showUnknownPersonaCoin'];
    showInitialsUntilImageLoads?: IPersonaProps['showInitialsUntilImageLoads'];
    coinSize?: IPersonaProps['coinSize'];
    theme?: IPersonaProps['theme'];
    renderCoin?: InputRendererOptions<IPersonaSharedProps>;
    renderInitials?: InputRendererOptions<IPersonaSharedProps>;
    readonly onPhotoLoadingStateChange: EventEmitter<ImageLoadState>;
    onRenderCoin: (props?: IPersonaSharedProps, defaultRender?: JsxRenderFunc<IPersonaSharedProps>) => JSX.Element;
    onRenderInitials: (props?: IPersonaSharedProps, defaultRender?: JsxRenderFunc<IPersonaSharedProps>) => JSX.Element;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2, ngZone: NgZone);
    ngOnInit(): void;
}
export declare class FabPersonaComponent extends FabPersonaBaseComponent<IPersonaProps> implements OnInit {
    protected reactNodeRef: ElementRef;
    componentRef?: IPersonaProps['componentRef'];
    className?: IPersonaProps['className'];
    styles?: IPersonaProps['styles'];
    coinProps?: IPersonaProps['coinProps'];
    renderPrimaryText?: InputRendererOptions<IPersonaProps>;
    renderSecondaryText?: InputRendererOptions<IPersonaProps>;
    renderTertiaryText?: InputRendererOptions<IPersonaProps>;
    renderOptionalText?: InputRendererOptions<IPersonaProps>;
    onRenderPrimaryText: (props?: IPersonaProps, defaultRender?: JsxRenderFunc<IPersonaProps>) => JSX.Element;
    onRenderSecondaryText: (props?: IPersonaProps, defaultRender?: JsxRenderFunc<IPersonaProps>) => JSX.Element;
    onRenderTertiaryText: (props?: IPersonaProps, defaultRender?: JsxRenderFunc<IPersonaProps>) => JSX.Element;
    onRenderOptionalText: (props?: IPersonaProps, defaultRender?: JsxRenderFunc<IPersonaProps>) => JSX.Element;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2, ngZone: NgZone);
    ngOnInit(): void;
}
export declare class FabPersonaCoinComponent extends FabPersonaBaseComponent<IPersonaCoinProps> implements OnInit {
    protected reactNodeRef: ElementRef;
    componentRef?: IPersonaCoinProps['componentRef'];
    styles?: IPersonaCoinProps['styles'];
    className?: IPersonaCoinProps['className'];
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2, ngZone: NgZone);
}
