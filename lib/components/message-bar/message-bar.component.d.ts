/// <reference types="react" />
import { InputRendererOptions, ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnInit, Renderer2 } from '@angular/core';
import { IMessageBarProps } from 'office-ui-fabric-react/lib/MessageBar';
export declare class FabMessageBarComponent extends ReactWrapperComponent<IMessageBarProps> implements OnInit {
    protected reactNodeRef: ElementRef;
    componentRef?: IMessageBarProps['componentRef'];
    messageBarType?: IMessageBarProps['messageBarType'];
    isMultiline?: IMessageBarProps['isMultiline'];
    dismissButtonAriaLabel?: IMessageBarProps['dismissButtonAriaLabel'];
    truncated?: IMessageBarProps['truncated'];
    overflowButtonAriaLabel?: IMessageBarProps['overflowButtonAriaLabel'];
    className?: IMessageBarProps['className'];
    theme?: IMessageBarProps['theme'];
    styles?: IMessageBarProps['styles'];
    renderActions?: InputRendererOptions<{}>;
    dismissable?: boolean;
    readonly onDismiss: EventEmitter<MouseEvent>;
    actions: JSX.Element;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2, ngZone: NgZone);
    ngOnInit(): void;
    readonly onDismissInternal: null | IMessageBarProps['onDismiss'];
}
