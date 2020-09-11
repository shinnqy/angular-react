/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, NgZone, Output, Renderer2, ViewChild, } from '@angular/core';
/**
 * @abstract
 * @template TProps
 */
export class FabPersonaBaseComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, { ngZone });
        this.onPhotoLoadingStateChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onRenderCoin = this.createRenderPropHandler(this.renderCoin);
        this.onRenderInitials = this.createRenderPropHandler(this.renderInitials);
    }
}
FabPersonaBaseComponent.propDecorators = {
    text: [{ type: Input }],
    size: [{ type: Input }],
    imageShouldFadeIn: [{ type: Input }],
    imageShouldStartVisible: [{ type: Input }],
    imageUrl: [{ type: Input }],
    imageAlt: [{ type: Input }],
    imageInitials: [{ type: Input }],
    allowPhoneInitials: [{ type: Input }],
    initialsColor: [{ type: Input }],
    presence: [{ type: Input }],
    isOutOfOffice: [{ type: Input }],
    secondaryText: [{ type: Input }],
    tertiaryText: [{ type: Input }],
    optionalText: [{ type: Input }],
    hidePersonaDetails: [{ type: Input }],
    showSecondaryText: [{ type: Input }],
    showUnknownPersonaCoin: [{ type: Input }],
    showInitialsUntilImageLoads: [{ type: Input }],
    coinSize: [{ type: Input }],
    theme: [{ type: Input }],
    renderCoin: [{ type: Input }],
    renderInitials: [{ type: Input }],
    onPhotoLoadingStateChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    FabPersonaBaseComponent.prototype.text;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.size;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.imageShouldFadeIn;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.imageShouldStartVisible;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.imageUrl;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.imageAlt;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.imageInitials;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.allowPhoneInitials;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.initialsColor;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.presence;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.isOutOfOffice;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.secondaryText;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.tertiaryText;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.optionalText;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.hidePersonaDetails;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.showSecondaryText;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.showUnknownPersonaCoin;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.showInitialsUntilImageLoads;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.coinSize;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.theme;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.renderCoin;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.renderInitials;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.onPhotoLoadingStateChange;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.onRenderCoin;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.onRenderInitials;
}
export class FabPersonaComponent extends FabPersonaBaseComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, ngZone);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        this.onRenderPrimaryText = this.createRenderPropHandler(this.renderPrimaryText);
        this.onRenderSecondaryText = this.createRenderPropHandler(this.renderSecondaryText);
        this.onRenderTertiaryText = this.createRenderPropHandler(this.renderTertiaryText);
        this.onRenderOptionalText = this.createRenderPropHandler(this.renderOptionalText);
    }
}
FabPersonaComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-persona',
                exportAs: 'fabPersona',
                template: `
    <Persona
      #reactNode
      [text]="text"
      [size]="size"
      [imageShouldFadeIn]="imageShouldFadeIn"
      [imageShouldStartVisible]="imageShouldStartVisible"
      [imageUrl]="imageUrl"
      [imageAlt]="imageAlt"
      [imageInitials]="imageInitials"
      [allowPhoneInitials]="allowPhoneInitials"
      [initialsColor]="initialsColor"
      [presence]="presence"
      [isOutOfOffice]="isOutOfOffice"
      [secondaryText]="secondaryText"
      [tertiaryText]="tertiaryText"
      [optionalText]="optionalText"
      [hidePersonaDetails]="hidePersonaDetails"
      [showSecondaryText]="showSecondaryText"
      [showUnknownPersonaCoin]="showUnknownPersonaCoin"
      [showInitialsUntilImageLoads]="showInitialsUntilImageLoads"
      [coinSize]="coinSize"
      [theme]="theme"
      [componentRef]="componentRef"
      [className]="className"
      [styles]="styles"
      [coinProps]="coinProps"
      [RenderInitials]="renderInitials && onRenderInitials"
      [RenderCoin]="renderCoin && onRenderCoin"
      [RenderPrimaryText]="renderPrimaryText && onRenderPrimaryText"
      [RenderSecondaryText]="renderSecondaryText && onRenderSecondaryText"
      [RenderTertiaryText]="renderTertiaryText && onRenderTertiaryText"
      [RenderOptionalText]="renderOptionalText && onRenderOptionalText"
      (onPhotoLoadingStateChange)="onPhotoLoadingStateChange.emit($event)"
    >
    </Persona>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabPersonaComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabPersonaComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    componentRef: [{ type: Input }],
    className: [{ type: Input }],
    styles: [{ type: Input }],
    coinProps: [{ type: Input }],
    renderPrimaryText: [{ type: Input }],
    renderSecondaryText: [{ type: Input }],
    renderTertiaryText: [{ type: Input }],
    renderOptionalText: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabPersonaComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabPersonaComponent.prototype.componentRef;
    /** @type {?} */
    FabPersonaComponent.prototype.className;
    /** @type {?} */
    FabPersonaComponent.prototype.styles;
    /** @type {?} */
    FabPersonaComponent.prototype.coinProps;
    /** @type {?} */
    FabPersonaComponent.prototype.renderPrimaryText;
    /** @type {?} */
    FabPersonaComponent.prototype.renderSecondaryText;
    /** @type {?} */
    FabPersonaComponent.prototype.renderTertiaryText;
    /** @type {?} */
    FabPersonaComponent.prototype.renderOptionalText;
    /** @type {?} */
    FabPersonaComponent.prototype.onRenderPrimaryText;
    /** @type {?} */
    FabPersonaComponent.prototype.onRenderSecondaryText;
    /** @type {?} */
    FabPersonaComponent.prototype.onRenderTertiaryText;
    /** @type {?} */
    FabPersonaComponent.prototype.onRenderOptionalText;
}
export class FabPersonaCoinComponent extends FabPersonaBaseComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, ngZone);
    }
}
FabPersonaCoinComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-persona-coin',
                exportAs: 'fabPersonaCoin',
                template: `
    <PersonaCoin
      #reactNode
      [text]="text"
      [size]="size"
      [imageShouldFadeIn]="imageShouldFadeIn"
      [imageShouldStartVisible]="imageShouldStartVisible"
      [imageUrl]="imageUrl"
      [imageAlt]="imageAlt"
      [imageInitials]="imageInitials"
      [allowPhoneInitials]="allowPhoneInitials"
      [initialsColor]="initialsColor"
      [presence]="presence"
      [isOutOfOffice]="isOutOfOffice"
      [secondaryText]="secondaryText"
      [tertiaryText]="tertiaryText"
      [optionalText]="optionalText"
      [hidePersonaDetails]="hidePersonaDetails"
      [showUnknownPersonaCoin]="showUnknownPersonaCoin"
      [showInitialsUntilImageLoads]="showInitialsUntilImageLoads"
      [coinSize]="coinSize"
      [theme]="theme"
      [componentRef]="componentRef"
      [styles]="styles"
      [className]="className"
      [RenderInitials]="renderInitials && onRenderInitials"
      [RenderCoin]="renderCoin && onRenderCoin"
      (onPhotoLoadingStateChange)="onPhotoLoadingStateChange.emit($event)"
    >
    </PersonaCoin>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabPersonaCoinComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabPersonaCoinComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    componentRef: [{ type: Input }],
    styles: [{ type: Input }],
    className: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabPersonaCoinComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabPersonaCoinComponent.prototype.componentRef;
    /** @type {?} */
    FabPersonaCoinComponent.prototype.styles;
    /** @type {?} */
    FabPersonaCoinComponent.prototype.className;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvbGliL2NvbXBvbmVudHMvcGVyc29uYS8iLCJzb3VyY2VzIjpbInBlcnNvbmEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBdUMscUJBQXFCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUVOLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDOzs7OztBQUl2QixNQUFNLE9BQWdCLHVCQUE0RCxTQUFRLHFCQUE2Qjs7Ozs7OztJQStCckgsWUFBWSxVQUFzQixFQUFFLGlCQUFvQyxFQUFFLFFBQW1CLEVBQUUsTUFBYztRQUMzRyxLQUFLLENBQUMsVUFBVSxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFOMUMsOEJBQXlCLEdBQUcsSUFBSSxZQUFZLEVBQWtCLENBQUM7SUFPbEYsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDNUUsQ0FBQzs7O21CQXBDQSxLQUFLO21CQUNMLEtBQUs7Z0NBQ0wsS0FBSztzQ0FDTCxLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSzs0QkFDTCxLQUFLO2lDQUNMLEtBQUs7NEJBQ0wsS0FBSzt1QkFDTCxLQUFLOzRCQUNMLEtBQUs7NEJBQ0wsS0FBSzsyQkFDTCxLQUFLOzJCQUNMLEtB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Ozs7Ozs7Ozs7O0dBOEJUO2dCQUVELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO3lCQUR0QyxnQkFBZ0I7YUFFMUI7Ozs7WUFwS0MsVUFBVTtZQUZWLGlCQUFpQjtZQVFqQixTQUFTO1lBSFQsTUFBTTs7OzJCQW1LTCxTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsyQkFFdkMsS0FBSztxQkFDTCxLQUFLO3dCQUNMLEtBQUs7Ozs7Ozs7SUFKTiwrQ0FBNkU7O0lBRTdFLCtDQUEwRDs7SUFDMUQseUNBQThDOztJQUM5Qyw0Q0FBb0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgSW5wdXRSZW5kZXJlck9wdGlvbnMsIEpzeFJlbmRlckZ1bmMsIFJlYWN0V3JhcHBlckNvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0NoaWxkLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbWFnZUxvYWRTdGF0ZSB9IGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliL2NvbXBvbmVudHMvSW1hZ2UvSW1hZ2UudHlwZXMnO1xyXG5pbXBvcnQgeyBJUGVyc29uYUNvaW5Qcm9wcywgSVBlcnNvbmFQcm9wcywgSVBlcnNvbmFTaGFyZWRQcm9wcyB9IGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliL1BlcnNvbmEnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZhYlBlcnNvbmFCYXNlQ29tcG9uZW50PFRQcm9wcyBleHRlbmRzIElQZXJzb25hU2hhcmVkUHJvcHM+IGV4dGVuZHMgUmVhY3RXcmFwcGVyQ29tcG9uZW50PFRQcm9wcz5cclxuICBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgdGV4dD86IElQZXJzb25hUHJvcHNbJ3RleHQnXTtcclxuICBASW5wdXQoKSBzaXplPzogSVBlcnNvbmFQcm9wc1snc2l6ZSddO1xyXG4gIEBJbnB1dCgpIGltYWdlU2hvdWxkRmFkZUluPzogSVBlcnNvbmFQcm9wc1snaW1hZ2VTaG91bGRGYWRlSW4nXTtcclxuICBASW5wdXQoKSBpbWFnZVNob3VsZFN0YXJ0VmlzaWJsZT86IElQZXJzb25hUHJvcHNbJ2ltYWdlU2hvdWxkU3RhcnRWaXNpYmxlJ107XHJcbiAgQElucHV0KCkgaW1hZ2VVcmw/OiBJUGVyc29uYVByb3BzWydpbWFnZVVybCddO1xyXG4gIEBJbnB1dCgpIGltYWdlQWx0PzogSVBlcnNvbmFQcm9wc1snaW1hZ2VBbHQnXTtcclxuICBASW5wdXQoKSBpbWFnZUluaXRpYWxzPzogSVBlcnNvbmFQcm9wc1snaW1hZ2VJbml0aWFscyddO1xyXG4gIEBJbnB1dCgpIGFsbG93UGhvbmVJbml0aWFscz86IElQZXJzb25hUHJvcHNbJ2FsbG93UGhvbmVJbml0aWFscyddO1xyXG4gIEBJbnB1dCgpIGluaXRpYWxzQ29sb3I/OiBJUGVyc29uYVByb3BzWydpbml0aWFsc0NvbG9yJ107XHJcbiAgQElucHV0KCkgcHJlc2VuY2U/OiBJUGVyc29uYVByb3BzWydwcmVzZW5jZSddO1xyXG4gIEBJbnB1dCgpIGlzT3V0T2ZPZmZpY2U/OiBJUGVyc29uYVByb3BzWydpc091dE9mT2ZmaWNlJ107XHJcbiAgQElucHV0KCkgc2Vjb25kYXJ5VGV4dD86IElQZXJzb25hUHJvcHNbJ3NlY29uZGFyeVRleHQnXTtcclxuICBASW5wdXQoKSB0ZXJ0aWFyeVRleHQ/OiBJUGVyc29uYVByb3BzWyd0ZXJ0aWFyeVRleHQnXTtcclxuICBASW5wdXQoKSBvcHRpb25hbFRleHQ/OiBJUGVyc29uYVByb3BzWydvcHRpb25hbFRleHQnXTtcclxuICBASW5wdXQoKSBoaWRlUGVyc29uYURldGFpbHM/OiBJUGVyc29uYVByb3BzWydoaWRlUGVyc29uYURldGFpbHMnXTtcclxuICBASW5wdXQoKSBzaG93U2Vjb25kYXJ5VGV4dD86IElQZXJzb25hUHJvcHNbJ3Nob3dTZWNvbmRhcnlUZXh0J107XHJcbiAgQElucHV0KCkgc2hvd1Vua25vd25QZXJzb25hQ29pbj86IElQZXJzb25hUHJvcHNbJ3Nob3dVbmtub3duUGVyc29uYUNvaW4nXTtcclxuICBASW5wdXQoKSBzaG93SW5pdGlhbHNVbnRpbEltYWdlTG9hZHM/OiBJUGVyc29uYVByb3BzWydzaG93SW5pdGlhbHNVbnRpbEltYWdlTG9hZHMnXTtcclxuICBASW5wdXQoKSBjb2luU2l6ZT86IElQZXJzb25hUHJvcHNbJ2NvaW5TaXplJ107XHJcbiAgQElucHV0KCkgdGhlbWU/OiBJUGVyc29uYVByb3BzWyd0aGVtZSddO1xyXG5cclxuICBASW5wdXQoKSByZW5kZXJDb2luPzogSW5wdXRSZW5kZXJlck9wdGlvbnM8SVBlcnNvbmFTaGFyZWRQcm9wcz47XHJcbiAgQElucHV0KCkgcmVuZGVySW5pdGlhbHM/OiBJbnB1dFJlbmRlcmVyT3B0aW9uczxJUGVyc29uYVNoYXJlZFByb3BzPjtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uUGhvdG9Mb2FkaW5nU3RhdGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEltYWdlTG9hZFN0YXRlPigpO1xyXG5cclxuICBvblJlbmRlckNvaW46IChwcm9wcz86IElQZXJzb25hU2hhcmVkUHJvcHMsIGRlZmF1bHRSZW5kZXI/OiBKc3hSZW5kZXJGdW5jPElQZXJzb25hU2hhcmVkUHJvcHM+KSA9PiBKU1guRWxlbWVudDtcclxuICBvblJlbmRlckluaXRpYWxzOiAocHJvcHM/OiBJUGVyc29uYVNoYXJlZFByb3BzLCBkZWZhdWx0UmVuZGVyPzogSnN4UmVuZGVyRnVuYzxJUGVyc29uYVNoYXJlZFByb3BzPikgPT4gSlNYLkVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmdab25lOiBOZ1pvbmUpIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlciwgeyBuZ1pvbmUgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMub25SZW5kZXJDb2luID0gdGhpcy5jcmVhdGVSZW5kZXJQcm9wSGFuZGxlcih0aGlzLnJlbmRlckNvaW4pO1xyXG4gICAgdGhpcy5vblJlbmRlckluaXRpYWxzID0gdGhpcy5jcmVhdGVSZW5kZXJQcm9wSGFuZGxlcih0aGlzLnJlbmRlckluaXRpYWxzKTtcclxuICB9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZmFiLXBlcnNvbmEnLFxyXG4gIGV4cG9ydEFzOiAnZmFiUGVyc29uYScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxQZXJzb25hXHJcbiAgICAgICNyZWFjdE5vZGVcclxuICAgICAgW3RleHRdPVwidGV4dFwiXHJcbiAgICAgIFtzaXplXT1cInNpemVcIlxyXG4gICAgICBbaW1hZ2VTaG91bGRGYWRlSW5dPVwiaW1hZ2VTaG91bGRGYWRlSW5cIlxyXG4gICAgICBbaW1hZ2VTaG91bGRTdGFydFZpc2libGVdPVwiaW1hZ2VTaG91bGRTdGFydFZpc2libGVcIlxyXG4gICAgICBbaW1hZ2VVcmxdPVwiaW1hZ2VVcmxcIlxyXG4gICAgICBbaW1hZ2VBbHRdPVwiaW1hZ2VBbHRcIlxyXG4gICAgICBbaW1hZ2VJbml0aWFsc109XCJpbWFnZUluaXRpYWxzXCJcclxuICAgICAgW2FsbG93UGhvbmVJbml0aWFsc109XCJhbGxvd1Bob25lSW5pdGlhbHNcIlxyXG4gICAgICBbaW5pdGlhbHNDb2xvcl09XCJpbml0aWFsc0NvbG9yXCJcclxuICAgICAgW3ByZXNlbmNlXT1cInByZXNlbmNlXCJcclxuICAgICAgW2lzT3V0T2ZPZmZpY2VdPVwiaXNPdXRPZk9mZmljZVwiXHJcbiAgICAgIFtzZWNvbmRhcnlUZXh0XT1cInNlY29uZGFyeVRleHRcIlxyXG4gICAgICBbdGVydGlhcnlUZXh0XT1cInRlcnRpYXJ5VGV4dFwiXHJcbiAgICAgIFtvcHRpb25hbFRleHRdPVwib3B0aW9uYWxUZXh0XCJcclxuICAgICAgW2hpZGVQZXJzb25hRGV0YWlsc109XCJoaWRlUGVyc29uYURldGFpbHNcIlxyXG4gICAgICBbc2hvd1NlY29uZGFyeVRleHRdPVwic2hvd1NlY29uZGFyeVRleHRcIlxyXG4gICAgICBbc2hvd1Vua25vd25QZXJzb25hQ29pbl09XCJzaG93VW5rbm93blBlcnNvbmFDb2luXCJcclxuICAgICAgW3Nob3dJbml0aWFsc1VudGlsSW1hZ2VMb2Fkc109XCJzaG93SW5pdGlhbHNVbnRpbEltYWdlTG9hZHNcIlxyXG4gICAgICBbY29pblNpemVdPVwiY29pblNpemVcIlxyXG4gICAgICBbdGhlbWVdPVwidGhlbWVcIlxyXG4gICAgICBbY29tcG9uZW50UmVmXT1cImNvbXBvbmVudFJlZlwiXHJcbiAgICAgIFtjbGFzc05hbWVdPVwiY2xhc3NOYW1lXCJcclxuICAgICAgW3N0eWxlc109XCJzdHlsZXNcIlxyXG4gICAgICBbY29pblByb3BzXT1cImNvaW5Qcm9wc1wiXHJcbiAgICAgIFtSZW5kZXJJbml0aWFsc109XCJyZW5kZXJJbml0aWFscyAmJiBvblJlbmRlckluaXRpYWxzXCJcclxuICAgICAgW1JlbmRlckNvaW5dPVwicmVuZGVyQ29pbiAmJiBvblJlbmRlckNvaW5cIlxyXG4gICAgICBbUmVuZGVyUHJpbWFyeVRleHRdPVwicmVuZGVyUHJpbWFyeVRleHQgJiYgb25SZW5kZXJQcmltYXJ5VGV4dFwiXHJcbiAgICAgIFtSZW5kZXJTZWNvbmRhcnlUZXh0XT1cInJlbmRlclNlY29uZGFyeVRleHQgJiYgb25SZW5kZXJTZWNvbmRhcnlUZXh0XCJcclxuICAgICAgW1JlbmRlclRlcnRpYXJ5VGV4dF09XCJyZW5kZXJUZXJ0aWFyeVRleHQgJiYgb25SZW5kZXJUZXJ0aWFyeVRleHRcIlxyXG4gICAgICBbUmVuZGVyT3B0aW9uYWxUZXh0XT1cInJlbmRlck9wdGlvbmFsVGV4dCAmJiBvblJlbmRlck9wdGlvbmFsVGV4dFwiXHJcbiAgICAgIChvblBob3RvTG9hZGluZ1N0YXRlQ2hhbmdlKT1cIm9uUGhvdG9Mb2FkaW5nU3RhdGVDaGFuZ2UuZW1pdCgkZXZlbnQpXCJcclxuICAgID5cclxuICAgIDwvUGVyc29uYT5cclxuICBgLFxyXG4gIHN0eWxlczogWydyZWFjdC1yZW5kZXJlciddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmFiUGVyc29uYUNvbXBvbmVudCBleHRlbmRzIEZhYlBlcnNvbmFCYXNlQ29tcG9uZW50PElQZXJzb25hUHJvcHM+IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBAVmlld0NoaWxkKCdyZWFjdE5vZGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcm90ZWN0ZWQgcmVhY3ROb2RlUmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICBASW5wdXQoKSBjb21wb25lbnRSZWY/OiBJUGVyc29uYVByb3BzWydjb21wb25lbnRSZWYnXTtcclxuICBASW5wdXQoKSBjbGFzc05hbWU/OiBJUGVyc29uYVByb3BzWydjbGFzc05hbWUnXTtcclxuICBASW5wdXQoKSBzdHlsZXM/OiBJUGVyc29uYVByb3BzWydzdHlsZXMnXTtcclxuICBASW5wdXQoKSBjb2luUHJvcHM/OiBJUGVyc29uYVByb3BzWydjb2luUHJvcHMnXTtcclxuXHJcbiAgQElucHV0KCkgcmVuZGVyUHJpbWFyeVRleHQ/OiBJbnB1dFJlbmRlcmVyT3B0aW9uczxJUGVyc29uYVByb3BzPjtcclxuICBASW5wdXQoKSByZW5kZXJTZWNvbmRhcnlUZXh0PzogSW5wdXRSZW5kZXJlck9wdGlvbnM8SVBlcnNvbmFQcm9wcz47XHJcbiAgQElucHV0KCkgcmVuZGVyVGVydGlhcnlUZXh0PzogSW5wdXRSZW5kZXJlck9wdGlvbnM8SVBlcnNvbmFQcm9wcz47XHJcbiAgQElucHV0KCkgcmVuZGVyT3B0aW9uYWxUZXh0PzogSW5wdXRSZW5kZXJlck9wdGlvbnM8SVBlcnNvbmFQcm9wcz47XHJcblxyXG4gIG9uUmVuZGVyUHJpbWFyeVRleHQ6IChwcm9wcz86IElQZXJzb25hUHJvcHMsIGRlZmF1bHRSZW5kZXI/OiBKc3hSZW5kZXJGdW5jPElQZXJzb25hUHJvcHM+KSA9PiBKU1guRWxlbWVudDtcclxuICBvblJlbmRlclNlY29uZGFyeVRleHQ6IChwcm9wcz86IElQZXJzb25hUHJvcHMsIGRlZmF1bHRSZW5kZXI/OiBKc3hSZW5kZXJGdW5jPElQZXJzb25hUHJvcHM+KSA9PiBKU1guRWxlbWVudDtcclxuICBvblJlbmRlclRlcnRpYXJ5VGV4dDogKHByb3BzPzogSVBlcnNvbmFQcm9wcywgZGVmYXVsdFJlbmRlcj86IEpzeFJlbmRlckZ1bmM8SVBlcnNvbmFQcm9wcz4pID0+IEpTWC5FbGVtZW50O1xyXG4gIG9uUmVuZGVyT3B0aW9uYWxUZXh0OiAocHJvcHM/OiBJUGVyc29uYVByb3BzLCBkZWZhdWx0UmVuZGVyPzogSnN4UmVuZGVyRnVuYzxJUGVyc29uYVByb3BzPikgPT4gSlNYLkVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmdab25lOiBOZ1pvbmUpIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlciwgbmdab25lKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgc3VwZXIubmdPbkluaXQoKTtcclxuXHJcbiAgICB0aGlzLm9uUmVuZGVyUHJpbWFyeVRleHQgPSB0aGlzLmNyZWF0ZVJlbmRlclByb3BIYW5kbGVyKHRoaXMucmVuZGVyUHJpbWFyeVRleHQpO1xyXG4gICAgdGhpcy5vblJlbmRlclNlY29uZGFyeVRleHQgPSB0aGlzLmNyZWF0ZVJlbmRlclByb3BIYW5kbGVyKHRoaXMucmVuZGVyU2Vjb25kYXJ5VGV4dCk7XHJcbiAgICB0aGlzLm9uUmVuZGVyVGVydGlhcnlUZXh0ID0gdGhpcy5jcmVhdGVSZW5kZXJQcm9wSGFuZGxlcih0aGlzLnJlbmRlclRlcnRpYXJ5VGV4dCk7XHJcbiAgICB0aGlzLm9uUmVuZGVyT3B0aW9uYWxUZXh0ID0gdGhpcy5jcmVhdGVSZW5kZXJQcm9wSGFuZGxlcih0aGlzLnJlbmRlck9wdGlvbmFsVGV4dCk7XHJcbiAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZhYi1wZXJzb25hLWNvaW4nLFxyXG4gIGV4cG9ydEFzOiAnZmFiUGVyc29uYUNvaW4nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8UGVyc29uYUNvaW5cclxuICAgICAgI3JlYWN0Tm9kZVxyXG4gICAgICBbdGV4dF09XCJ0ZXh0XCJcclxuICAgICAgW3NpemVdPVwic2l6ZVwiXHJcbiAgICAgIFtpbWFnZVNob3VsZEZhZGVJbl09XCJpbWFnZVNob3VsZEZhZGVJblwiXHJcbiAgICAgIFtpbWFnZVNob3VsZFN0YXJ0VmlzaWJsZV09XCJpbWFnZVNob3VsZFN0YXJ0VmlzaWJsZVwiXHJcbiAgICAgIFtpbWFnZVVybF09XCJpbWFnZVVybFwiXHJcbiAgICAgIFtpbWFnZUFsdF09XCJpbWFnZUFsdFwiXHJcbiAgICAgIFtpbWFnZUluaXRpYWxzXT1cImltYWdlSW5pdGlhbHNcIlxyXG4gICAgICBbYWxsb3dQaG9uZUluaXRpYWxzXT1cImFsbG93UGhvbmVJbml0aWFsc1wiXHJcbiAgICAgIFtpbml0aWFsc0NvbG9yXT1cImluaXRpYWxzQ29sb3JcIlxyXG4gICAgICBbcHJlc2VuY2VdPVwicHJlc2VuY2VcIlxyXG4gICAgICBbaXNPdXRPZk9mZmljZV09XCJpc091dE9mT2ZmaWNlXCJcclxuICAgICAgW3NlY29uZGFyeVRleHRdPVwic2Vjb25kYXJ5VGV4dFwiXHJcbiAgICAgIFt0ZXJ0aWFyeVRleHRdPVwidGVydGlhcnlUZXh0XCJcclxuICAgICAgW29wdGlvbmFsVGV4dF09XCJvcHRpb25hbFRleHRcIlxyXG4gICAgICBbaGlkZVBlcnNvbmFEZXRhaWxzXT1cImhpZGVQZXJzb25hRGV0YWlsc1wiXHJcbiAgICAgIFtzaG93VW5rbm93blBlcnNvbmFDb2luXT1cInNob3dVbmtub3duUGVyc29uYUNvaW5cIlxyXG4gICAgICBbc2hvd0luaXRpYWxzVW50aWxJbWFnZUxvYWRzXT1cInNob3dJbml0aWFsc1VudGlsSW1hZ2VMb2Fkc1wiXHJcbiAgICAgIFtjb2luU2l6ZV09XCJjb2luU2l6ZVwiXHJcbiAgICAgIFt0aGVtZV09XCJ0aGVtZVwiXHJcbiAgICAgIFtjb21wb25lbnRSZWZdPVwiY29tcG9uZW50UmVmXCJcclxuICAgICAgW3N0eWxlc109XCJzdHlsZXNcIlxyXG4gICAgICBbY2xhc3NOYW1lXT1cImNsYXNzTmFtZVwiXHJcbiAgICAgIFtSZW5kZXJJbml0aWFsc109XCJyZW5kZXJJbml0aWFscyAmJiBvblJlbmRlckluaXRpYWxzXCJcclxuICAgICAgW1JlbmRlckNvaW5dPVwicmVuZGVyQ29pbiAmJiBvblJlbmRlckNvaW5cIlxyXG4gICAgICAob25QaG90b0xvYWRpbmdTdGF0ZUNoYW5nZSk9XCJvblBob3RvTG9hZGluZ1N0YXRlQ2hhbmdlLmVtaXQoJGV2ZW50KVwiXHJcbiAgICA+XHJcbiAgICA8L1BlcnNvbmFDb2luPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbJ3JlYWN0LXJlbmRlcmVyJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYWJQZXJzb25hQ29pbkNvbXBvbmVudCBleHRlbmRzIEZhYlBlcnNvbmFCYXNlQ29tcG9uZW50PElQZXJzb25hQ29pblByb3BzPiBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQFZpZXdDaGlsZCgncmVhY3ROb2RlJywgeyBzdGF0aWM6IHRydWUgfSkgcHJvdGVjdGVkIHJlYWN0Tm9kZVJlZjogRWxlbWVudFJlZjtcclxuXHJcbiAgQElucHV0KCkgY29tcG9uZW50UmVmPzogSVBlcnNvbmFDb2luUHJvcHNbJ2NvbXBvbmVudFJlZiddO1xyXG4gIEBJbnB1dCgpIHN0eWxlcz86IElQZXJzb25hQ29pblByb3BzWydzdHlsZXMnXTtcclxuICBASW5wdXQoKSBjbGFzc05hbWU/OiBJUGVyc29uYUNvaW5Qcm9wc1snY2xhc3NOYW1lJ107XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmdab25lOiBOZ1pvbmUpIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlciwgbmdab25lKTtcclxuICB9XHJcbn1cclxuIl19