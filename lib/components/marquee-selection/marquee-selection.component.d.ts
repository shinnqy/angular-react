import { ChangeDetectorRef, ElementRef, NgZone, Renderer2 } from '@angular/core';
import { ReactWrapperComponent } from '@angular-react/core';
import { IMarqueeSelectionProps } from 'office-ui-fabric-react/lib/MarqueeSelection';
export declare class FabMarqueeSelectionComponent extends ReactWrapperComponent<IMarqueeSelectionProps> {
    protected reactNodeRef: ElementRef;
    componentRef?: IMarqueeSelectionProps['componentRef'];
    selection: IMarqueeSelectionProps['selection'];
    rootProps?: IMarqueeSelectionProps['rootProps'];
    onShouldStartSelection?: (ev: MouseEvent) => boolean;
    isEnabled?: IMarqueeSelectionProps['isEnabled'];
    isDraggingConstrainedToRoot?: IMarqueeSelectionProps['isDraggingConstrainedToRoot'];
    className?: IMarqueeSelectionProps['className'];
    theme?: IMarqueeSelectionProps['theme'];
    styles?: IMarqueeSelectionProps['styles'];
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2, ngZone: NgZone);
}
