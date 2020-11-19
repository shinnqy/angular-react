import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { EventEmitter, Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, Input, Output, ViewChild, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Image } from 'office-ui-fabric-react/lib/Image';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabImageComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer);
        this.onLoadingStateChange = new EventEmitter();
    }
}
FabImageComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-image',
                exportAs: 'fabImage',
                template: `
    <!-- prettier-ignore -->
    <Image
      #reactNode
      [alt]="alt"
      [crossOrigin]="crossOrigin"
      [height]="height"
      [sizes]="sizes"
      [src]="src"
      [srcSet]="srcSet"
      [useMap]="useMap"
      [width]="width"
      [styles]="styles"
      [theme]="theme"
      [className]="className"
      [shouldFadeIn]="shouldFadeIn"
      [shouldStartVisible]="shouldStartVisible"
      [imageFit]="imageFit"
      [errorSrc]="errorSrc"
      [maximizeFrame]="maximizeFrame"
      (onLoadingStateChange)="onLoadingStateChange.emit($event)"
      [coverStyle]="coverStyle"
    >
    </Image>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabImageComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
FabImageComponent.propDecorators = {
    alt: [{ type: Input }],
    crossOrigin: [{ type: Input }],
    height: [{ type: Input }],
    sizes: [{ type: Input }],
    src: [{ type: Input }],
    srcSet: [{ type: Input }],
    useMap: [{ type: Input }],
    width: [{ type: Input }],
    styles: [{ type: Input }],
    theme: [{ type: Input }],
    className: [{ type: Input }],
    shouldFadeIn: [{ type: Input }],
    shouldStartVisible: [{ type: Input }],
    imageFit: [{ type: Input }],
    errorSrc: [{ type: Input }],
    maximizeFrame: [{ type: Input }],
    coverStyle: [{ type: Input }],
    onLoadingStateChange: [{ type: Output }],
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
};
if (false) {
    /** @type {?} */
    FabImageComponent.prototype.alt;
    /** @type {?} */
    FabImageComponent.prototype.crossOrigin;
    /** @type {?} */
    FabImageComponent.prototype.height;
    /** @type {?} */
    FabImageComponent.prototype.sizes;
    /** @type {?} */
    FabImageComponent.prototype.src;
    /** @type {?} */
    FabImageComponent.prototype.srcSet;
    /** @type {?} */
    FabImageComponent.prototype.useMap;
    /** @type {?} */
    FabImageComponent.prototype.width;
    /** @type {?} */
    FabImageComponent.prototype.styles;
    /** @type {?} */
    FabImageComponent.prototype.theme;
    /** @type {?} */
    FabImageComponent.prototype.className;
    /** @type {?} */
    FabImageComponent.prototype.shouldFadeIn;
    /** @type {?} */
    FabImageComponent.prototype.shouldStartVisible;
    /** @type {?} */
    FabImageComponent.prototype.imageFit;
    /** @type {?} */
    FabImageComponent.prototype.errorSrc;
    /** @type {?} */
    FabImageComponent.prototype.maximizeFrame;
    /** @type {?} */
    FabImageComponent.prototype.coverStyle;
    /** @type {?} */
    FabImageComponent.prototype.onLoadingStateChange;
    /**
     * @type {?}
     * @protected
     */
    FabImageComponent.prototype.reactNodeRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components = [FabImageComponent];
class FabImageModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Image', (/**
         * @return {?}
         */
        () => Image));
    }
}
FabImageModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components,
                exports: components,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabImageModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FabImageComponent, FabImageModule };
//# sourceMappingURL=angular-react-fabric-lib-components-image.js.map