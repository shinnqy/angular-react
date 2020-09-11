import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectorRef, ElementRef, EventEmitter, Renderer2 } from '@angular/core';
import { IImageProps, ImageLoadState } from 'office-ui-fabric-react/lib/Image';
export declare class FabImageComponent extends ReactWrapperComponent<IImageProps> {
    alt?: IImageProps['alt'];
    crossOrigin?: IImageProps['crossOrigin'];
    height?: IImageProps['height'];
    sizes?: IImageProps['sizes'];
    src?: IImageProps['src'];
    srcSet?: IImageProps['srcSet'];
    useMap?: IImageProps['useMap'];
    width?: IImageProps['width'];
    styles?: IImageProps['styles'];
    theme?: IImageProps['theme'];
    className?: IImageProps['className'];
    shouldFadeIn?: IImageProps['shouldFadeIn'];
    shouldStartVisible?: IImageProps['shouldStartVisible'];
    imageFit?: IImageProps['imageFit'];
    errorSrc?: IImageProps['errorSrc'];
    maximizeFrame?: IImageProps['maximizeFrame'];
    coverStyle?: IImageProps['coverStyle'];
    readonly onLoadingStateChange: EventEmitter<ImageLoadState>;
    protected reactNodeRef: ElementRef;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2);
}
