/// <reference types="react" />
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectorRef, ElementRef, EventEmitter, Renderer2 } from '@angular/core';
import { IDialogContentProps, IDialogFooterProps, IDialogProps } from 'office-ui-fabric-react/lib/Dialog';
export declare class FabDialogComponent extends ReactWrapperComponent<IDialogProps> {
    protected reactNodeRef: ElementRef;
    responsiveMode?: IDialogProps['responsiveMode'];
    elementToFocusOnDismiss?: IDialogProps['elementToFocusOnDismiss'];
    ignoreExternalFocusing?: IDialogProps['ignoreExternalFocusing'];
    forceFocusInsideTrap?: IDialogProps['forceFocusInsideTrap'];
    firstFocusableSelector?: IDialogProps['firstFocusableSelector'];
    closeButtonAriaLabel?: IDialogProps['closeButtonAriaLabel'];
    isClickableOutsideFocusTrap?: IDialogProps['isClickableOutsideFocusTrap'];
    componentRef?: IDialogProps['componentRef'];
    styles?: IDialogProps['styles'];
    theme?: IDialogProps['theme'];
    dialogContentProps?: IDialogProps['dialogContentProps'];
    hidden?: IDialogProps['hidden'];
    modalProps?: IDialogProps['modalProps'];
    minWidth?: IDialogProps['minWidth'];
    maxWidth?: IDialogProps['maxWidth'];
    readonly onDismiss: EventEmitter<MouseEvent>;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2);
    onDismissHandler(ev: React.MouseEvent<HTMLButtonElement>): void;
}
export declare class FabDialogFooterComponent extends ReactWrapperComponent<IDialogFooterProps> {
    protected reactNodeRef: ElementRef;
    componentRef?: IDialogFooterProps['componentRef'];
    styles?: IDialogFooterProps['styles'];
    theme?: IDialogFooterProps['theme'];
    className?: IDialogFooterProps['className'];
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2);
}
export declare class FabDialogContentComponent extends ReactWrapperComponent<IDialogContentProps> {
    protected reactNodeRef: ElementRef;
    componentRef?: IDialogContentProps['componentRef'];
    styles?: IDialogContentProps['styles'];
    theme?: IDialogContentProps['theme'];
    isMultiline?: IDialogContentProps['isMultiline'];
    showCloseButton?: IDialogContentProps['showCloseButton'];
    topButtonsProps?: IDialogContentProps['topButtonsProps'];
    className?: IDialogContentProps['className'];
    subTextId?: IDialogContentProps['subTextId'];
    subText?: IDialogContentProps['subText'];
    titleId?: IDialogContentProps['titleId'];
    title?: IDialogContentProps['title'];
    responsiveMode?: IDialogContentProps['responsiveMode'];
    closeButtonAriaLabel?: IDialogContentProps['closeButtonAriaLabel'];
    type?: IDialogContentProps['type'];
    draggableHeaderClassName?: IDialogContentProps['draggableHeaderClassName'];
    readonly onDismiss: EventEmitter<MouseEvent>;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2);
}
