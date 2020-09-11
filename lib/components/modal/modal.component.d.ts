/// <reference types="react" />
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectorRef, ElementRef, EventEmitter, Renderer2 } from '@angular/core';
import { IAccessiblePopupProps } from 'office-ui-fabric-react/lib/common/IAccessiblePopupProps';
import { IModalProps } from 'office-ui-fabric-react/lib/Modal';
import { IWithResponsiveModeState } from 'office-ui-fabric-react/lib/utilities/decorators/withResponsiveMode';
export declare class FabModalComponent extends ReactWrapperComponent<IModalProps> implements IWithResponsiveModeState, IAccessiblePopupProps {
    protected reactNodeRef: ElementRef;
    responsiveMode?: IModalProps['responsiveMode'];
    elementToFocusOnDismiss?: IModalProps['elementToFocusOnDismiss'];
    ignoreExternalFocusing?: IModalProps['ignoreExternalFocusing'];
    forceFocusInsideTrap?: IModalProps['forceFocusInsideTrap'];
    firstFocusableSelector?: IModalProps['firstFocusableSelector'];
    closeButtonAriaLabel?: IModalProps['closeButtonAriaLabel'];
    isClickableOutsideFocusTrap?: IModalProps['isClickableOutsideFocusTrap'];
    componentRef?: IModalProps['componentRef'];
    isOpen?: IModalProps['isOpen'];
    isDarkOverlay?: IModalProps['isDarkOverlay'];
    layerProps?: IModalProps['layerProps'];
    isBlocking?: IModalProps['isBlocking'];
    isModeless?: IModalProps['isModeless'];
    className?: IModalProps['className'];
    containerClassName?: IModalProps['containerClassName'];
    scrollableContentClassName?: IModalProps['scrollableContentClassName'];
    titleAriaId?: IModalProps['titleAriaId'];
    subtitleAriaId?: IModalProps['subtitleAriaId'];
    topOffsetFixed?: IModalProps['topOffsetFixed'];
    dragOptions?: IModalProps['dragOptions'];
    readonly onLayerDidMount: EventEmitter<void>;
    readonly onDismiss: EventEmitter<MouseEvent>;
    readonly onDismissed: EventEmitter<void>;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2);
    onDismissHandler(ev?: React.MouseEvent<HTMLButtonElement>): void;
}
