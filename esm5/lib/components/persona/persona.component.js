/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, NgZone, Output, Renderer2, ViewChild, } from '@angular/core';
/**
 * @abstract
 * @template TProps
 */
var FabPersonaBaseComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabPersonaBaseComponent, _super);
    function FabPersonaBaseComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone }) || this;
        _this.onPhotoLoadingStateChange = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    FabPersonaBaseComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onRenderCoin = this.createRenderPropHandler(this.renderCoin);
        this.onRenderInitials = this.createRenderPropHandler(this.renderInitials);
    };
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
    return FabPersonaBaseComponent;
}(ReactWrapperComponent));
export { FabPersonaBaseComponent };
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
var FabPersonaComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabPersonaComponent, _super);
    function FabPersonaComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        return _super.call(this, elementRef, changeDetectorRef, renderer, ngZone) || this;
    }
    /**
     * @return {?}
     */
    FabPersonaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
        this.onRenderPrimaryText = this.createRenderPropHandler(this.renderPrimaryText);
        this.onRenderSecondaryText = this.createRenderPropHandler(this.renderSecondaryText);
        this.onRenderTertiaryText = this.createRenderPropHandler(this.renderTertiaryText);
        this.onRenderOptionalText = this.createRenderPropHandler(this.renderOptionalText);
    };
    FabPersonaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-persona',
                    exportAs: 'fabPersona',
                    template: "\n    <Persona\n      #reactNode\n      [text]=\"text\"\n      [size]=\"size\"\n      [imageShouldFadeIn]=\"imageShouldFadeIn\"\n      [imageShouldStartVisible]=\"imageShouldStartVisible\"\n      [imageUrl]=\"imageUrl\"\n      [imageAlt]=\"imageAlt\"\n      [imageInitials]=\"imageInitials\"\n      [allowPhoneInitials]=\"allowPhoneInitials\"\n      [initialsColor]=\"initialsColor\"\n      [presence]=\"presence\"\n      [isOutOfOffice]=\"isOutOfOffice\"\n      [secondaryText]=\"secondaryText\"\n      [tertiaryText]=\"tertiaryText\"\n      [optionalText]=\"optionalText\"\n      [hidePersonaDetails]=\"hidePersonaDetails\"\n      [showSecondaryText]=\"showSecondaryText\"\n      [showUnknownPersonaCoin]=\"showUnknownPersonaCoin\"\n      [showInitialsUntilImageLoads]=\"showInitialsUntilImageLoads\"\n      [coinSize]=\"coinSize\"\n      [theme]=\"theme\"\n      [componentRef]=\"componentRef\"\n      [className]=\"className\"\n      [styles]=\"styles\"\n      [coinProps]=\"coinProps\"\n      [RenderInitials]=\"renderInitials && onRenderInitials\"\n      [RenderCoin]=\"renderCoin && onRenderCoin\"\n      [RenderPrimaryText]=\"renderPrimaryText && onRenderPrimaryText\"\n      [RenderSecondaryText]=\"renderSecondaryText && onRenderSecondaryText\"\n      [RenderTertiaryText]=\"renderTertiaryText && onRenderTertiaryText\"\n      [RenderOptionalText]=\"renderOptionalText && onRenderOptionalText\"\n      (onPhotoLoadingStateChange)=\"onPhotoLoadingStateChange.emit($event)\"\n    >\n    </Persona>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabPersonaComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
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
    return FabPersonaComponent;
}(FabPersonaBaseComponent));
export { FabPersonaComponent };
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
var FabPersonaCoinComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabPersonaCoinComponent, _super);
    function FabPersonaCoinComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        return _super.call(this, elementRef, changeDetectorRef, renderer, ngZone) || this;
    }
    FabPersonaCoinComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-persona-coin',
                    exportAs: 'fabPersonaCoin',
                    template: "\n    <PersonaCoin\n      #reactNode\n      [text]=\"text\"\n      [size]=\"size\"\n      [imageShouldFadeIn]=\"imageShouldFadeIn\"\n      [imageShouldStartVisible]=\"imageShouldStartVisible\"\n      [imageUrl]=\"imageUrl\"\n      [imageAlt]=\"imageAlt\"\n      [imageInitials]=\"imageInitials\"\n      [allowPhoneInitials]=\"allowPhoneInitials\"\n      [initialsColor]=\"initialsColor\"\n      [presence]=\"presence\"\n      [isOutOfOffice]=\"isOutOfOffice\"\n      [secondaryText]=\"secondaryText\"\n      [tertiaryText]=\"tertiaryText\"\n      [optionalText]=\"optionalText\"\n      [hidePersonaDetails]=\"hidePersonaDetails\"\n      [showUnknownPersonaCoin]=\"showUnknownPersonaCoin\"\n      [showInitialsUntilImageLoads]=\"showInitialsUntilImageLoads\"\n      [coinSize]=\"coinSize\"\n      [theme]=\"theme\"\n      [componentRef]=\"componentRef\"\n      [styles]=\"styles\"\n      [className]=\"className\"\n      [RenderInitials]=\"renderInitials && onRenderInitials\"\n      [RenderCoin]=\"renderCoin && onRenderCoin\"\n      (onPhotoLoadingStateChange)=\"onPhotoLoadingStateChange.emit($event)\"\n    >\n    </PersonaCoin>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabPersonaCoinComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    FabPersonaCoinComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
        componentRef: [{ type: Input }],
        styles: [{ type: Input }],
        className: [{ type: Input }]
    };
    return FabPersonaCoinComponent;
}(FabPersonaBaseComponent));
export { FabPersonaCoinComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9wZXJzb25hL3BlcnNvbmEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQXVDLHFCQUFxQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakcsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFFTixNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFJdkI7SUFBMEYsbURBQTZCO0lBK0JySCxpQ0FBWSxVQUFzQixFQUFFLGlCQUFvQyxFQUFFLFFBQW1CLEVBQUUsTUFBYztRQUE3RyxZQUNFLGtCQUFNLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDLFNBQzNEO1FBUGtCLCtCQUF5QixHQUFHLElBQUksWUFBWSxFQUFrQixDQUFDOztJQU9sRixDQUFDOzs7O0lBRUQsMENBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzVFLENBQUM7O3VCQXBDQSxLQUFLO3VCQUNMLEtBQUs7b0NBQ0wsS0FBSzswQ0FDTCxLQUFLOzJCQUNMLEtBQUs7MkJBQ0wsS0FBSztnQ0FDTCxLQUFLO3FDQUNMLEtBQUs7Z0NBQ0wsS0FBSzsyQkFDTCxLQUFLO2dDQUNMLEtBQUs7Z0NBQ0wsS0FBSzsrQkFDTCxLQUFLOytCQUNMLEtBQUs7cUNB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LEVBQUUsaW5DQThCVDtvQkFFRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs2QkFEdEMsZ0JBQWdCO2lCQUUxQjs7OztnQkFwS0MsVUFBVTtnQkFGVixpQkFBaUI7Z0JBUWpCLFNBQVM7Z0JBSFQsTUFBTTs7OytCQW1LTCxTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsrQkFFdkMsS0FBSzt5QkFDTCxLQUFLOzRCQUNMLEtBQUs7O0lBS1IsOEJBQUM7Q0FBQSxBQS9DRCxDQXFDNkMsdUJBQXVCLEdBVW5FO1NBVlksdUJBQXVCOzs7Ozs7SUFDbEMsK0NBQTZFOztJQUU3RSwrQ0FBMEQ7O0lBQzFELHlDQUE4Qzs7SUFDOUMsNENBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IElucHV0UmVuZGVyZXJPcHRpb25zLCBKc3hSZW5kZXJGdW5jLCBSZWFjdFdyYXBwZXJDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9jb3JlJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFZpZXdDaGlsZCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW1hZ2VMb2FkU3RhdGUgfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9jb21wb25lbnRzL0ltYWdlL0ltYWdlLnR5cGVzJztcclxuaW1wb3J0IHsgSVBlcnNvbmFDb2luUHJvcHMsIElQZXJzb25hUHJvcHMsIElQZXJzb25hU2hhcmVkUHJvcHMgfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9QZXJzb25hJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGYWJQZXJzb25hQmFzZUNvbXBvbmVudDxUUHJvcHMgZXh0ZW5kcyBJUGVyc29uYVNoYXJlZFByb3BzPiBleHRlbmRzIFJlYWN0V3JhcHBlckNvbXBvbmVudDxUUHJvcHM+XHJcbiAgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHRleHQ/OiBJUGVyc29uYVByb3BzWyd0ZXh0J107XHJcbiAgQElucHV0KCkgc2l6ZT86IElQZXJzb25hUHJvcHNbJ3NpemUnXTtcclxuICBASW5wdXQoKSBpbWFnZVNob3VsZEZhZGVJbj86IElQZXJzb25hUHJvcHNbJ2ltYWdlU2hvdWxkRmFkZUluJ107XHJcbiAgQElucHV0KCkgaW1hZ2VTaG91bGRTdGFydFZpc2libGU/OiBJUGVyc29uYVByb3BzWydpbWFnZVNob3VsZFN0YXJ0VmlzaWJsZSddO1xyXG4gIEBJbnB1dCgpIGltYWdlVXJsPzogSVBlcnNvbmFQcm9wc1snaW1hZ2VVcmwnXTtcclxuICBASW5wdXQoKSBpbWFnZUFsdD86IElQZXJzb25hUHJvcHNbJ2ltYWdlQWx0J107XHJcbiAgQElucHV0KCkgaW1hZ2VJbml0aWFscz86IElQZXJzb25hUHJvcHNbJ2ltYWdlSW5pdGlhbHMnXTtcclxuICBASW5wdXQoKSBhbGxvd1Bob25lSW5pdGlhbHM/OiBJUGVyc29uYVByb3BzWydhbGxvd1Bob25lSW5pdGlhbHMnXTtcclxuICBASW5wdXQoKSBpbml0aWFsc0NvbG9yPzogSVBlcnNvbmFQcm9wc1snaW5pdGlhbHNDb2xvciddO1xyXG4gIEBJbnB1dCgpIHByZXNlbmNlPzogSVBlcnNvbmFQcm9wc1sncHJlc2VuY2UnXTtcclxuICBASW5wdXQoKSBpc091dE9mT2ZmaWNlPzogSVBlcnNvbmFQcm9wc1snaXNPdXRPZk9mZmljZSddO1xyXG4gIEBJbnB1dCgpIHNlY29uZGFyeVRleHQ/OiBJUGVyc29uYVByb3BzWydzZWNvbmRhcnlUZXh0J107XHJcbiAgQElucHV0KCkgdGVydGlhcnlUZXh0PzogSVBlcnNvbmFQcm9wc1sndGVydGlhcnlUZXh0J107XHJcbiAgQElucHV0KCkgb3B0aW9uYWxUZXh0PzogSVBlcnNvbmFQcm9wc1snb3B0aW9uYWxUZXh0J107XHJcbiAgQElucHV0KCkgaGlkZVBlcnNvbmFEZXRhaWxzPzogSVBlcnNvbmFQcm9wc1snaGlkZVBlcnNvbmFEZXRhaWxzJ107XHJcbiAgQElucHV0KCkgc2hvd1NlY29uZGFyeVRleHQ/OiBJUGVyc29uYVByb3BzWydzaG93U2Vjb25kYXJ5VGV4dCddO1xyXG4gIEBJbnB1dCgpIHNob3dVbmtub3duUGVyc29uYUNvaW4/OiBJUGVyc29uYVByb3BzWydzaG93VW5rbm93blBlcnNvbmFDb2luJ107XHJcbiAgQElucHV0KCkgc2hvd0luaXRpYWxzVW50aWxJbWFnZUxvYWRzPzogSVBlcnNvbmFQcm9wc1snc2hvd0luaXRpYWxzVW50aWxJbWFnZUxvYWRzJ107XHJcbiAgQElucHV0KCkgY29pblNpemU/OiBJUGVyc29uYVByb3BzWydjb2luU2l6ZSddO1xyXG4gIEBJbnB1dCgpIHRoZW1lPzogSVBlcnNvbmFQcm9wc1sndGhlbWUnXTtcclxuXHJcbiAgQElucHV0KCkgcmVuZGVyQ29pbj86IElucHV0UmVuZGVyZXJPcHRpb25zPElQZXJzb25hU2hhcmVkUHJvcHM+O1xyXG4gIEBJbnB1dCgpIHJlbmRlckluaXRpYWxzPzogSW5wdXRSZW5kZXJlck9wdGlvbnM8SVBlcnNvbmFTaGFyZWRQcm9wcz47XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvblBob3RvTG9hZGluZ1N0YXRlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxJbWFnZUxvYWRTdGF0ZT4oKTtcclxuXHJcbiAgb25SZW5kZXJDb2luOiAocHJvcHM/OiBJUGVyc29uYVNoYXJlZFByb3BzLCBkZWZhdWx0UmVuZGVyPzogSnN4UmVuZGVyRnVuYzxJUGVyc29uYVNoYXJlZFByb3BzPikgPT4gSlNYLkVsZW1lbnQ7XHJcbiAgb25SZW5kZXJJbml0aWFsczogKHByb3BzPzogSVBlcnNvbmFTaGFyZWRQcm9wcywgZGVmYXVsdFJlbmRlcj86IEpzeFJlbmRlckZ1bmM8SVBlcnNvbmFTaGFyZWRQcm9wcz4pID0+IEpTWC5FbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG5nWm9uZTogTmdab25lKSB7XHJcbiAgICBzdXBlcihlbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXIsIHsgbmdab25lIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLm9uUmVuZGVyQ29pbiA9IHRoaXMuY3JlYXRlUmVuZGVyUHJvcEhhbmRsZXIodGhpcy5yZW5kZXJDb2luKTtcclxuICAgIHRoaXMub25SZW5kZXJJbml0aWFscyA9IHRoaXMuY3JlYXRlUmVuZGVyUHJvcEhhbmRsZXIodGhpcy5yZW5kZXJJbml0aWFscyk7XHJcbiAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZhYi1wZXJzb25hJyxcclxuICBleHBvcnRBczogJ2ZhYlBlcnNvbmEnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8UGVyc29uYVxyXG4gICAgICAjcmVhY3ROb2RlXHJcbiAgICAgIFt0ZXh0XT1cInRleHRcIlxyXG4gICAgICBbc2l6ZV09XCJzaXplXCJcclxuICAgICAgW2ltYWdlU2hvdWxkRmFkZUluXT1cImltYWdlU2hvdWxkRmFkZUluXCJcclxuICAgICAgW2ltYWdlU2hvdWxkU3RhcnRWaXNpYmxlXT1cImltYWdlU2hvdWxkU3RhcnRWaXNpYmxlXCJcclxuICAgICAgW2ltYWdlVXJsXT1cImltYWdlVXJsXCJcclxuICAgICAgW2ltYWdlQWx0XT1cImltYWdlQWx0XCJcclxuICAgICAgW2ltYWdlSW5pdGlhbHNdPVwiaW1hZ2VJbml0aWFsc1wiXHJcbiAgICAgIFthbGxvd1Bob25lSW5pdGlhbHNdPVwiYWxsb3dQaG9uZUluaXRpYWxzXCJcclxuICAgICAgW2luaXRpYWxzQ29sb3JdPVwiaW5pdGlhbHNDb2xvclwiXHJcbiAgICAgIFtwcmVzZW5jZV09XCJwcmVzZW5jZVwiXHJcbiAgICAgIFtpc091dE9mT2ZmaWNlXT1cImlzT3V0T2ZPZmZpY2VcIlxyXG4gICAgICBbc2Vjb25kYXJ5VGV4dF09XCJzZWNvbmRhcnlUZXh0XCJcclxuICAgICAgW3RlcnRpYXJ5VGV4dF09XCJ0ZXJ0aWFyeVRleHRcIlxyXG4gICAgICBbb3B0aW9uYWxUZXh0XT1cIm9wdGlvbmFsVGV4dFwiXHJcbiAgICAgIFtoaWRlUGVyc29uYURldGFpbHNdPVwiaGlkZVBlcnNvbmFEZXRhaWxzXCJcclxuICAgICAgW3Nob3dTZWNvbmRhcnlUZXh0XT1cInNob3dTZWNvbmRhcnlUZXh0XCJcclxuICAgICAgW3Nob3dVbmtub3duUGVyc29uYUNvaW5dPVwic2hvd1Vua25vd25QZXJzb25hQ29pblwiXHJcbiAgICAgIFtzaG93SW5pdGlhbHNVbnRpbEltYWdlTG9hZHNdPVwic2hvd0luaXRpYWxzVW50aWxJbWFnZUxvYWRzXCJcclxuICAgICAgW2NvaW5TaXplXT1cImNvaW5TaXplXCJcclxuICAgICAgW3RoZW1lXT1cInRoZW1lXCJcclxuICAgICAgW2NvbXBvbmVudFJlZl09XCJjb21wb25lbnRSZWZcIlxyXG4gICAgICBbY2xhc3NOYW1lXT1cImNsYXNzTmFtZVwiXHJcbiAgICAgIFtzdHlsZXNdPVwic3R5bGVzXCJcclxuICAgICAgW2NvaW5Qcm9wc109XCJjb2luUHJvcHNcIlxyXG4gICAgICBbUmVuZGVySW5pdGlhbHNdPVwicmVuZGVySW5pdGlhbHMgJiYgb25SZW5kZXJJbml0aWFsc1wiXHJcbiAgICAgIFtSZW5kZXJDb2luXT1cInJlbmRlckNvaW4gJiYgb25SZW5kZXJDb2luXCJcclxuICAgICAgW1JlbmRlclByaW1hcnlUZXh0XT1cInJlbmRlclByaW1hcnlUZXh0ICYmIG9uUmVuZGVyUHJpbWFyeVRleHRcIlxyXG4gICAgICBbUmVuZGVyU2Vjb25kYXJ5VGV4dF09XCJyZW5kZXJTZWNvbmRhcnlUZXh0ICYmIG9uUmVuZGVyU2Vjb25kYXJ5VGV4dFwiXHJcbiAgICAgIFtSZW5kZXJUZXJ0aWFyeVRleHRdPVwicmVuZGVyVGVydGlhcnlUZXh0ICYmIG9uUmVuZGVyVGVydGlhcnlUZXh0XCJcclxuICAgICAgW1JlbmRlck9wdGlvbmFsVGV4dF09XCJyZW5kZXJPcHRpb25hbFRleHQgJiYgb25SZW5kZXJPcHRpb25hbFRleHRcIlxyXG4gICAgICAob25QaG90b0xvYWRpbmdTdGF0ZUNoYW5nZSk9XCJvblBob3RvTG9hZGluZ1N0YXRlQ2hhbmdlLmVtaXQoJGV2ZW50KVwiXHJcbiAgICA+XHJcbiAgICA8L1BlcnNvbmE+XHJcbiAgYCxcclxuICBzdHlsZXM6IFsncmVhY3QtcmVuZGVyZXInXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZhYlBlcnNvbmFDb21wb25lbnQgZXh0ZW5kcyBGYWJQZXJzb25hQmFzZUNvbXBvbmVudDxJUGVyc29uYVByb3BzPiBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQFZpZXdDaGlsZCgncmVhY3ROb2RlJywgeyBzdGF0aWM6IHRydWUgfSkgcHJvdGVjdGVkIHJlYWN0Tm9kZVJlZjogRWxlbWVudFJlZjtcclxuXHJcbiAgQElucHV0KCkgY29tcG9uZW50UmVmPzogSVBlcnNvbmFQcm9wc1snY29tcG9uZW50UmVmJ107XHJcbiAgQElucHV0KCkgY2xhc3NOYW1lPzogSVBlcnNvbmFQcm9wc1snY2xhc3NOYW1lJ107XHJcbiAgQElucHV0KCkgc3R5bGVzPzogSVBlcnNvbmFQcm9wc1snc3R5bGVzJ107XHJcbiAgQElucHV0KCkgY29pblByb3BzPzogSVBlcnNvbmFQcm9wc1snY29pblByb3BzJ107XHJcblxyXG4gIEBJbnB1dCgpIHJlbmRlclByaW1hcnlUZXh0PzogSW5wdXRSZW5kZXJlck9wdGlvbnM8SVBlcnNvbmFQcm9wcz47XHJcbiAgQElucHV0KCkgcmVuZGVyU2Vjb25kYXJ5VGV4dD86IElucHV0UmVuZGVyZXJPcHRpb25zPElQZXJzb25hUHJvcHM+O1xyXG4gIEBJbnB1dCgpIHJlbmRlclRlcnRpYXJ5VGV4dD86IElucHV0UmVuZGVyZXJPcHRpb25zPElQZXJzb25hUHJvcHM+O1xyXG4gIEBJbnB1dCgpIHJlbmRlck9wdGlvbmFsVGV4dD86IElucHV0UmVuZGVyZXJPcHRpb25zPElQZXJzb25hUHJvcHM+O1xyXG5cclxuICBvblJlbmRlclByaW1hcnlUZXh0OiAocHJvcHM/OiBJUGVyc29uYVByb3BzLCBkZWZhdWx0UmVuZGVyPzogSnN4UmVuZGVyRnVuYzxJUGVyc29uYVByb3BzPikgPT4gSlNYLkVsZW1lbnQ7XHJcbiAgb25SZW5kZXJTZWNvbmRhcnlUZXh0OiAocHJvcHM/OiBJUGVyc29uYVByb3BzLCBkZWZhdWx0UmVuZGVyPzogSnN4UmVuZGVyRnVuYzxJUGVyc29uYVByb3BzPikgPT4gSlNYLkVsZW1lbnQ7XHJcbiAgb25SZW5kZXJUZXJ0aWFyeVRleHQ6IChwcm9wcz86IElQZXJzb25hUHJvcHMsIGRlZmF1bHRSZW5kZXI/OiBKc3hSZW5kZXJGdW5jPElQZXJzb25hUHJvcHM+KSA9PiBKU1guRWxlbWVudDtcclxuICBvblJlbmRlck9wdGlvbmFsVGV4dDogKHByb3BzPzogSVBlcnNvbmFQcm9wcywgZGVmYXVsdFJlbmRlcj86IEpzeFJlbmRlckZ1bmM8SVBlcnNvbmFQcm9wcz4pID0+IEpTWC5FbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG5nWm9uZTogTmdab25lKSB7XHJcbiAgICBzdXBlcihlbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXIsIG5nWm9uZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHN1cGVyLm5nT25Jbml0KCk7XHJcblxyXG4gICAgdGhpcy5vblJlbmRlclByaW1hcnlUZXh0ID0gdGhpcy5jcmVhdGVSZW5kZXJQcm9wSGFuZGxlcih0aGlzLnJlbmRlclByaW1hcnlUZXh0KTtcclxuICAgIHRoaXMub25SZW5kZXJTZWNvbmRhcnlUZXh0ID0gdGhpcy5jcmVhdGVSZW5kZXJQcm9wSGFuZGxlcih0aGlzLnJlbmRlclNlY29uZGFyeVRleHQpO1xyXG4gICAgdGhpcy5vblJlbmRlclRlcnRpYXJ5VGV4dCA9IHRoaXMuY3JlYXRlUmVuZGVyUHJvcEhhbmRsZXIodGhpcy5yZW5kZXJUZXJ0aWFyeVRleHQpO1xyXG4gICAgdGhpcy5vblJlbmRlck9wdGlvbmFsVGV4dCA9IHRoaXMuY3JlYXRlUmVuZGVyUHJvcEhhbmRsZXIodGhpcy5yZW5kZXJPcHRpb25hbFRleHQpO1xyXG4gIH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmYWItcGVyc29uYS1jb2luJyxcclxuICBleHBvcnRBczogJ2ZhYlBlcnNvbmFDb2luJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPFBlcnNvbmFDb2luXHJcbiAgICAgICNyZWFjdE5vZGVcclxuICAgICAgW3RleHRdPVwidGV4dFwiXHJcbiAgICAgIFtzaXplXT1cInNpemVcIlxyXG4gICAgICBbaW1hZ2VTaG91bGRGYWRlSW5dPVwiaW1hZ2VTaG91bGRGYWRlSW5cIlxyXG4gICAgICBbaW1hZ2VTaG91bGRTdGFydFZpc2libGVdPVwiaW1hZ2VTaG91bGRTdGFydFZpc2libGVcIlxyXG4gICAgICBbaW1hZ2VVcmxdPVwiaW1hZ2VVcmxcIlxyXG4gICAgICBbaW1hZ2VBbHRdPVwiaW1hZ2VBbHRcIlxyXG4gICAgICBbaW1hZ2VJbml0aWFsc109XCJpbWFnZUluaXRpYWxzXCJcclxuICAgICAgW2FsbG93UGhvbmVJbml0aWFsc109XCJhbGxvd1Bob25lSW5pdGlhbHNcIlxyXG4gICAgICBbaW5pdGlhbHNDb2xvcl09XCJpbml0aWFsc0NvbG9yXCJcclxuICAgICAgW3ByZXNlbmNlXT1cInByZXNlbmNlXCJcclxuICAgICAgW2lzT3V0T2ZPZmZpY2VdPVwiaXNPdXRPZk9mZmljZVwiXHJcbiAgICAgIFtzZWNvbmRhcnlUZXh0XT1cInNlY29uZGFyeVRleHRcIlxyXG4gICAgICBbdGVydGlhcnlUZXh0XT1cInRlcnRpYXJ5VGV4dFwiXHJcbiAgICAgIFtvcHRpb25hbFRleHRdPVwib3B0aW9uYWxUZXh0XCJcclxuICAgICAgW2hpZGVQZXJzb25hRGV0YWlsc109XCJoaWRlUGVyc29uYURldGFpbHNcIlxyXG4gICAgICBbc2hvd1Vua25vd25QZXJzb25hQ29pbl09XCJzaG93VW5rbm93blBlcnNvbmFDb2luXCJcclxuICAgICAgW3Nob3dJbml0aWFsc1VudGlsSW1hZ2VMb2Fkc109XCJzaG93SW5pdGlhbHNVbnRpbEltYWdlTG9hZHNcIlxyXG4gICAgICBbY29pblNpemVdPVwiY29pblNpemVcIlxyXG4gICAgICBbdGhlbWVdPVwidGhlbWVcIlxyXG4gICAgICBbY29tcG9uZW50UmVmXT1cImNvbXBvbmVudFJlZlwiXHJcbiAgICAgIFtzdHlsZXNdPVwic3R5bGVzXCJcclxuICAgICAgW2NsYXNzTmFtZV09XCJjbGFzc05hbWVcIlxyXG4gICAgICBbUmVuZGVySW5pdGlhbHNdPVwicmVuZGVySW5pdGlhbHMgJiYgb25SZW5kZXJJbml0aWFsc1wiXHJcbiAgICAgIFtSZW5kZXJDb2luXT1cInJlbmRlckNvaW4gJiYgb25SZW5kZXJDb2luXCJcclxuICAgICAgKG9uUGhvdG9Mb2FkaW5nU3RhdGVDaGFuZ2UpPVwib25QaG90b0xvYWRpbmdTdGF0ZUNoYW5nZS5lbWl0KCRldmVudClcIlxyXG4gICAgPlxyXG4gICAgPC9QZXJzb25hQ29pbj5cclxuICBgLFxyXG4gIHN0eWxlczogWydyZWFjdC1yZW5kZXJlciddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmFiUGVyc29uYUNvaW5Db21wb25lbnQgZXh0ZW5kcyBGYWJQZXJzb25hQmFzZUNvbXBvbmVudDxJUGVyc29uYUNvaW5Qcm9wcz4gaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBWaWV3Q2hpbGQoJ3JlYWN0Tm9kZScsIHsgc3RhdGljOiB0cnVlIH0pIHByb3RlY3RlZCByZWFjdE5vZGVSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBJbnB1dCgpIGNvbXBvbmVudFJlZj86IElQZXJzb25hQ29pblByb3BzWydjb21wb25lbnRSZWYnXTtcclxuICBASW5wdXQoKSBzdHlsZXM/OiBJUGVyc29uYUNvaW5Qcm9wc1snc3R5bGVzJ107XHJcbiAgQElucHV0KCkgY2xhc3NOYW1lPzogSVBlcnNvbmFDb2luUHJvcHNbJ2NsYXNzTmFtZSddO1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG5nWm9uZTogTmdab25lKSB7XHJcbiAgICBzdXBlcihlbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXIsIG5nWm9uZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==