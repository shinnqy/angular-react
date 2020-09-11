import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectorRef, ElementRef, EventEmitter, Renderer2 } from '@angular/core';
import { ICalloutProps } from 'office-ui-fabric-react/lib/Callout';
import { ICalloutPositionedInfo } from 'office-ui-fabric-react/lib/utilities/positioning/positioning.types';
export declare class FabCalloutComponent extends ReactWrapperComponent<ICalloutProps> {
    protected reactNodeRef: ElementRef;
    target?: ICalloutProps['target'];
    directionalHint?: ICalloutProps['directionalHint'];
    directionalHintForRTL?: ICalloutProps['directionalHintForRTL'];
    gapSpace?: ICalloutProps['gapSpace'];
    beakWidth?: ICalloutProps['beakWidth'];
    calloutWidth?: ICalloutProps['calloutWidth'];
    backgroundColor?: ICalloutProps['backgroundColor'];
    bounds?: ICalloutProps['bounds'];
    minPagePadding?: ICalloutProps['minPagePadding'];
    isBeakVisible?: ICalloutProps['isBeakVisible'];
    preventDismissOnScroll?: ICalloutProps['preventDismissOnScroll'];
    preventDismissOnResize?: ICalloutProps['preventDismissOnResize'];
    preventDismissOnLostFocus?: ICalloutProps['preventDismissOnLostFocus'];
    coverTarget?: ICalloutProps['coverTarget'];
    alignTargetEdge?: ICalloutProps['alignTargetEdge'];
    role?: ICalloutProps['role'];
    ariaLabel?: ICalloutProps['ariaLabel'];
    ariaLabelledBy?: ICalloutProps['ariaLabelledBy'];
    ariaDescribedBy?: ICalloutProps['ariaDescribedBy'];
    className?: ICalloutProps['className'];
    layerProps?: ICalloutProps['layerProps'];
    doNotLayer?: ICalloutProps['doNotLayer'];
    directionalHintFixed?: ICalloutProps['directionalHintFixed'];
    finalHeight?: ICalloutProps['finalHeight'];
    hideOverflow?: ICalloutProps['hideOverflow'];
    setInitialFocus?: ICalloutProps['setInitialFocus'];
    calloutMaxHeight?: ICalloutProps['calloutMaxHeight'];
    theme?: ICalloutProps['theme'];
    styles?: ICalloutProps['styles'];
    hidden?: ICalloutProps['hidden'];
    shouldRestoreFocus?: ICalloutProps['shouldRestoreFocus'];
    readonly onLayerMounted: EventEmitter<void>;
    readonly onPositioned: EventEmitter<{
        positions?: ICalloutPositionedInfo;
    }>;
    readonly onDismiss: EventEmitter<{
        ev?: any;
    }>;
    readonly onScroll: EventEmitter<void>;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2);
}
