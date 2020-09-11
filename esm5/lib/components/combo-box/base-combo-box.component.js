/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { EventEmitter, Input, Output, ContentChild, } from '@angular/core';
import { ComboBoxOptionsDirective } from './directives/combo-box-options.directive';
/**
 * @abstract
 */
var FabBaseComboBoxComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabBaseComboBoxComponent, _super);
    function FabBaseComboBoxComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone }) || this;
        _this.onItemClick = new EventEmitter();
        _this.onChange = new EventEmitter();
        _this.onPendingValueChanged = new EventEmitter();
        _this.onMenuOpen = new EventEmitter();
        _this.onMenuDismissed = new EventEmitter();
        _this.onMenuDismiss = new EventEmitter();
        _this.onScrollToItem = new EventEmitter();
        // coming from React context - we need to bind to this so we can access the Angular Component properties
        _this.onItemClickHandler = _this.onItemClickHandler.bind(_this);
        _this.onChangeHandler = _this.onChangeHandler.bind(_this);
        _this.onPendingValueChangedHandler = _this.onPendingValueChangedHandler.bind(_this);
        _this.onScrollToItemHandler = _this.onScrollToItemHandler.bind(_this);
        return _this;
    }
    /**
     * @return {?}
     */
    FabBaseComboBoxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onRenderLowerContent = this.createRenderPropHandler(this.renderLowerContent);
    };
    /**
     * @return {?}
     */
    FabBaseComboBoxComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        if (this.comboBoxOptionsDirective) {
            this._initDirective(this.comboBoxOptionsDirective);
        }
        _super.prototype.ngAfterContentInit.call(this);
    };
    /**
     * @param {?} event
     * @param {?=} option
     * @param {?=} index
     * @return {?}
     */
    FabBaseComboBoxComponent.prototype.onItemClickHandler = /**
     * @param {?} event
     * @param {?=} option
     * @param {?=} index
     * @return {?}
     */
    function (event, option, index) {
        this.onItemClick.emit({
            event: event.nativeEvent,
            option: option,
            index: index,
        });
    };
    /**
     * @param {?} event
     * @param {?=} option
     * @param {?=} index
     * @param {?=} value
     * @return {?}
     */
    FabBaseComboBoxComponent.prototype.onChangeHandler = /**
     * @param {?} event
     * @param {?=} option
     * @param {?=} index
     * @param {?=} value
     * @return {?}
     */
    function (event, option, index, value) {
        this.onChange.emit({
            event: event.nativeEvent,
            option: option,
            index: index,
            value: value,
        });
    };
    /**
     * @param {?=} option
     * @param {?=} index
     * @param {?=} value
     * @return {?}
     */
    FabBaseComboBoxComponent.prototype.onPendingValueChangedHandler = /**
     * @param {?=} option
     * @param {?=} index
     * @param {?=} value
     * @return {?}
     */
    function (option, index, value) {
        this.onPendingValueChanged.emit({
            option: option,
            index: index,
            value: value,
        });
    };
    /**
     * @param {?} itemIndex
     * @return {?}
     */
    FabBaseComboBoxComponent.prototype.onScrollToItemHandler = /**
     * @param {?} itemIndex
     * @return {?}
     */
    function (itemIndex) {
        this.onScrollToItem.emit({
            itemIndex: itemIndex,
        });
    };
    /**
     * @private
     * @param {?} directive
     * @return {?}
     */
    FabBaseComboBoxComponent.prototype._initDirective = /**
     * @private
     * @param {?} directive
     * @return {?}
     */
    function (directive) {
        this.options = directive.items;
        this.markForCheck();
    };
    FabBaseComboBoxComponent.propDecorators = {
        componentRef: [{ type: Input }],
        options: [{ type: Input }],
        allowFreeform: [{ type: Input }],
        autoComplete: [{ type: Input }],
        text: [{ type: Input }],
        buttonIconProps: [{ type: Input }],
        autofill: [{ type: Input }],
        theme: [{ type: Input }],
        styles: [{ type: Input }],
        getClassNames: [{ type: Input }],
        caretDownButtonStyles: [{ type: Input }],
        comboBoxOptionStyles: [{ type: Input }],
        scrollSelectedToTop: [{ type: Input }],
        dropdownWidth: [{ type: Input }],
        useComboBoxAsMenuWidth: [{ type: Input }],
        multiSelect: [{ type: Input }],
        isButtonAriaHidden: [{ type: Input }],
        ariaDescribedBy: [{ type: Input }],
        keytipProps: [{ type: Input }],
        persistMenu: [{ type: Input }],
        shouldRestoreFocus: [{ type: Input }],
        resolveOptions: [{ type: Input }],
        renderLowerContent: [{ type: Input }],
        onItemClick: [{ type: Output }],
        onChange: [{ type: Output }],
        onPendingValueChanged: [{ type: Output }],
        onMenuOpen: [{ type: Output }],
        onMenuDismissed: [{ type: Output }],
        onMenuDismiss: [{ type: Output }],
        onScrollToItem: [{ type: Output }],
        comboBoxOptionsDirective: [{ type: ContentChild, args: [ComboBoxOptionsDirective, { static: true },] }]
    };
    return FabBaseComboBoxComponent;
}(ReactWrapperComponent));
export { FabBaseComboBoxComponent };
if (false) {
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.componentRef;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.options;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.allowFreeform;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.autoComplete;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.text;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.buttonIconProps;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.autofill;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.theme;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.styles;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.getClassNames;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.caretDownButtonStyles;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.comboBoxOptionStyles;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.scrollSelectedToTop;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.dropdownWidth;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.useComboBoxAsMenuWidth;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.multiSelect;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.isButtonAriaHidden;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.ariaDescribedBy;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.keytipProps;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.persistMenu;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.shouldRestoreFocus;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.resolveOptions;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.renderLowerContent;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.onItemClick;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.onChange;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.onPendingValueChanged;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.onMenuOpen;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.onMenuDismissed;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.onMenuDismiss;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.onScrollToItem;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.comboBoxOptionsDirective;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.onRenderLowerContent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1jb21iby1ib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljL2xpYi9jb21wb25lbnRzL2NvbWJvLWJveC8iLCJzb3VyY2VzIjpbImJhc2UtY29tYm8tYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0EsT0FBTyxFQUF1QyxxQkFBcUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pHLE9BQU8sRUFHTCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFFTixZQUFZLEdBRWIsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMENBQTBDLENBQUM7Ozs7QUFFcEY7SUFBdUQsb0RBQXFDO0lBcUQxRixrQ0FBWSxVQUFzQixFQUFFLGlCQUFvQyxFQUFFLFFBQW1CLEVBQUUsTUFBYztRQUE3RyxZQUNFLGtCQUFNLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDLFNBTzNEO1FBakNrQixpQkFBVyxHQUFHLElBQUksWUFBWSxFQUk3QyxDQUFDO1FBQ2MsY0FBUSxHQUFHLElBQUksWUFBWSxFQUsxQyxDQUFDO1FBQ2MsMkJBQXFCLEdBQUcsSUFBSSxZQUFZLEVBSXZELENBQUM7UUFDYyxnQkFBVSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDdEMscUJBQWUsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQzNDLG1CQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUN6QyxvQkFBYyxHQUFHLElBQUksWUFBWSxFQUF5QixDQUFDO1FBUzVFLHdHQUF3RztRQUN4RyxLQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUM3RCxLQUFJLENBQUMsZUFBZSxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMs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L0MseUNBQXlDOztJQUN6QywwQ0FBMkM7O0lBQzNDLGlEQUF5RDs7SUFDekQseURBQXlFOztJQUN6RSx3REFBdUU7O0lBQ3ZFLHVEQUFxRTs7SUFDckUsaURBQXlEOztJQUN6RCwwREFBMkU7O0lBQzNFLCtDQUFxRDs7SUFDckQsc0RBQW1FOztJQUNuRSxtREFBNkQ7O0lBQzdELCtDQUFxRDs7SUFDckQsK0NBQXFEOztJQUNyRCxzREFBbUU7O0lBQ25FLGtEQUE2Rzs7SUFFN0csc0RBQW1FOztJQUVuRSwrQ0FJSzs7SUFDTCw0Q0FLSzs7SUFDTCx5REFJSzs7SUFDTCw4Q0FBeUQ7O0lBQ3pELG1EQUE4RDs7SUFDOUQsaURBQTREOztJQUM1RCxrREFBOEU7O0lBRTlFLDREQUF1SDs7SUFFdkgsd0RBQTZHIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IElucHV0UmVuZGVyZXJPcHRpb25zLCBKc3hSZW5kZXJGdW5jLCBSZWFjdFdyYXBwZXJDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9jb3JlJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElDb21ib0JveCwgSUNvbWJvQm94T3B0aW9uLCBJQ29tYm9Cb3hQcm9wcyB9IGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliL0NvbWJvQm94JztcclxuaW1wb3J0IHsgQ29tYm9Cb3hPcHRpb25EaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvY29tYm8tYm94LW9wdGlvbi5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBDb21ib0JveE9wdGlvbnNEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvY29tYm8tYm94LW9wdGlvbnMuZGlyZWN0aXZlJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGYWJCYXNlQ29tYm9Cb3hDb21wb25lbnQgZXh0ZW5kcyBSZWFjdFdyYXBwZXJDb21wb25lbnQ8SUNvbWJvQm94UHJvcHM+XHJcbiAgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQge1xyXG5cclxuICBASW5wdXQoKSBjb21wb25lbnRSZWY/OiBJQ29tYm9Cb3hQcm9wc1snY29tcG9uZW50UmVmJ107XHJcbiAgQElucHV0KCkgb3B0aW9uczogSUNvbWJvQm94UHJvcHNbJ29wdGlvbnMnXTtcclxuICBASW5wdXQoKSBhbGxvd0ZyZWVmb3JtPzogSUNvbWJvQm94UHJvcHNbJ2FsbG93RnJlZWZvcm0nXTtcclxuICBASW5wdXQoKSBhdXRvQ29tcGxldGU/OiBJQ29tYm9Cb3hQcm9wc1snYXV0b0NvbXBsZXRlJ107XHJcbiAgQElucHV0KCkgdGV4dD86IElDb21ib0JveFByb3BzWyd0ZXh0J107XHJcbiAgQElucHV0KCkgYnV0dG9uSWNvblByb3BzPzogSUNvbWJvQm94UHJvcHNbJ2J1dHRvbkljb25Qcm9wcyddO1xyXG4gIEBJbnB1dCgpIGF1dG9maWxsPzogSUNvbWJvQm94UHJvcHNbJ2F1dG9maWxsJ107XHJcbiAgQElucHV0KCkgdGhlbWU/OiBJQ29tYm9Cb3hQcm9wc1sndGhlbWUnXTtcclxuICBASW5wdXQoKSBzdHlsZXM/OiBJQ29tYm9Cb3hQcm9wc1snc3R5bGVzJ107XHJcbiAgQElucHV0KCkgZ2V0Q2xhc3NOYW1lcz86IElDb21ib0JveFByb3BzWydnZXRDbGFzc05hbWVzJ107XHJcbiAgQElucHV0KCkgY2FyZXREb3duQnV0dG9uU3R5bGVzPzogSUNvbWJvQm94UHJvcHNbJ2NhcmV0RG93bkJ1dHRvblN0eWxlcyddO1xyXG4gIEBJbnB1dCgpIGNvbWJvQm94T3B0aW9uU3R5bGVzPzogSUNvbWJvQm94UHJvcHNbJ2NvbWJvQm94T3B0aW9uU3R5bGVzJ107XHJcbiAgQElucHV0KCkgc2Nyb2xsU2VsZWN0ZWRUb1RvcD86IElDb21ib0JveFByb3BzWydzY3JvbGxTZWxlY3RlZFRvVG9wJ107XHJcbiAgQElucHV0KCkgZHJvcGRvd25XaWR0aD86IElDb21ib0JveFByb3BzWydkcm9wZG93bldpZHRoJ107XHJcbiAgQElucHV0KCkgdXNlQ29tYm9Cb3hBc01lbnVXaWR0aD86IElDb21ib0JveFByb3BzWyd1c2VDb21ib0JveEFzTWVudVdpZHRoJ107XHJcbiAgQElucHV0KCkgbXVsdGlTZWxlY3Q/OiBJQ29tYm9Cb3hQcm9wc1snbXVsdGlTZWxlY3QnXTtcclxuICBASW5wdXQoKSBpc0J1dHRvbkFyaWFIaWRkZW4/OiBJQ29tYm9Cb3hQcm9wc1snaXNCdXR0b25BcmlhSGlkZGVuJ107XHJcbiAgQElucHV0KCkgYXJpYURlc2NyaWJlZEJ5PzogSUNvbWJvQm94UHJvcHNbJ2FyaWFEZXNjcmliZWRCeSddO1xyXG4gIEBJbnB1dCgpIGtleXRpcFByb3BzPzogSUNvbWJvQm94UHJvcHNbJ2tleXRpcFByb3BzJ107XHJcbiAgQElucHV0KCkgcGVyc2lzdE1lbnU/OiBJQ29tYm9Cb3hQcm9wc1sncGVyc2lzdE1lbnUnXTtcclxuICBASW5wdXQoKSBzaG91bGRSZXN0b3JlRm9jdXM/OiBJQ29tYm9Cb3hQcm9wc1snc2hvdWxkUmVzdG9yZUZvY3VzJ107XHJcbiAgQElucHV0KCkgcmVzb2x2ZU9wdGlvbnM/OiAob3B0aW9uczogSUNvbWJvQm94T3B0aW9uW10pID0+IElDb21ib0JveE9wdGlvbltdIHwgUHJvbWlzZUxpa2U8SUNvbWJvQm94T3B0aW9uW10+O1xyXG5cclxuICBASW5wdXQoKSByZW5kZXJMb3dlckNvbnRlbnQ/OiBJbnB1dFJlbmRlcmVyT3B0aW9uczxJQ29tYm9Cb3hQcm9wcz47XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvbkl0ZW1DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8e1xyXG4gICAgZXZlbnQ6IEV2ZW50O1xyXG4gICAgb3B0aW9uPzogSUNvbWJvQm94T3B0aW9uO1xyXG4gICAgaW5kZXg/OiBudW1iZXI7XHJcbiAgfT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHtcclxuICAgIGV2ZW50OiBFdmVudDtcclxuICAgIG9wdGlvbj86IElDb21ib0JveE9wdGlvbjtcclxuICAgIGluZGV4PzogbnVtYmVyO1xyXG4gICAgdmFsdWU/OiBzdHJpbmc7XHJcbiAgfT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25QZW5kaW5nVmFsdWVDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjx7XHJcbiAgICBvcHRpb24/OiBJQ29tYm9Cb3hPcHRpb247XHJcbiAgICBpbmRleD86IG51bWJlcjtcclxuICAgIHZhbHVlPzogc3RyaW5nO1xyXG4gIH0+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uTWVudU9wZW4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uTWVudURpc21pc3NlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25NZW51RGlzbWlzcyA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25TY3JvbGxUb0l0ZW0gPSBuZXcgRXZlbnRFbWl0dGVyPHsgaXRlbUluZGV4OiBudW1iZXIgfT4oKTtcclxuXHJcbiAgQENvbnRlbnRDaGlsZChDb21ib0JveE9wdGlvbnNEaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlIH0pIHJlYWRvbmx5IGNvbWJvQm94T3B0aW9uc0RpcmVjdGl2ZT86IENvbWJvQm94T3B0aW9uc0RpcmVjdGl2ZTtcclxuXHJcbiAgb25SZW5kZXJMb3dlckNvbnRlbnQ6IChwcm9wcz86IElDb21ib0JveFByb3BzLCBkZWZhdWx0UmVuZGVyPzogSnN4UmVuZGVyRnVuYzxJQ29tYm9Cb3hQcm9wcz4pID0+IEpTWC5FbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG5nWm9uZTogTmdab25lKSB7XHJcbiAgICBzdXBlcihlbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXIsIHsgbmdab25lIH0pO1xyXG5cclxuICAgIC8vIGNvbWluZyBmcm9tIFJlYWN0IGNvbnRleHQgLSB3ZSBuZWVkIHRvIGJpbmQgdG8gdGhpcyBzbyB3ZSBjYW4gYWNjZXNzIHRoZSBBbmd1bGFyIENvbXBvbmVudCBwcm9wZXJ0aWVzXHJcbiAgICB0aGlzLm9uSXRlbUNsaWNrSGFuZGxlciA9IHRoaXMub25JdGVtQ2xpY2tIYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uQ2hhbmdlSGFuZGxlciA9IHRoaXMub25DaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uUGVuZGluZ1ZhbHVlQ2hhbmdlZEhhbmRsZXIgPSB0aGlzLm9uUGVuZGluZ1ZhbHVlQ2hhbmdlZEhhbmRsZXIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25TY3JvbGxUb0l0ZW1IYW5kbGVyID0gdGhpcy5vblNjcm9sbFRvSXRlbUhhbmRsZXIuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5vblJlbmRlckxvd2VyQ29udGVudCA9IHRoaXMuY3JlYXRlUmVuZGVyUHJvcEhhbmRsZXIodGhpcy5yZW5kZXJMb3dlckNvbnRlbnQpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgaWYgKHRoaXMuY29tYm9Cb3hPcHRpb25zRGlyZWN0aXZlKSB7XHJcbiAgICAgIHRoaXMuX2luaXREaXJlY3RpdmUodGhpcy5jb21ib0JveE9wdGlvbnNEaXJlY3RpdmUpO1xyXG4gICAgfVxyXG4gICAgc3VwZXIubmdBZnRlckNvbnRlbnRJbml0KCk7XHJcbiAgfVxyXG5cclxuICBvbkl0ZW1DbGlja0hhbmRsZXIoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxJQ29tYm9Cb3g+LCBvcHRpb24/OiBJQ29tYm9Cb3hPcHRpb24sIGluZGV4PzogbnVtYmVyKSB7XHJcbiAgICB0aGlzLm9uSXRlbUNsaWNrLmVtaXQoe1xyXG4gICAgICBldmVudDogZXZlbnQubmF0aXZlRXZlbnQsXHJcbiAgICAgIG9wdGlvbixcclxuICAgICAgaW5kZXgsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlSGFuZGxlcihldmVudDogUmVhY3QuRm9ybUV2ZW50PElDb21ib0JveD4sIG9wdGlvbj86IElDb21ib0JveE9wdGlvbiwgaW5kZXg/OiBudW1iZXIsIHZhbHVlPzogc3RyaW5nKSB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoe1xyXG4gICAgICBldmVudDogZXZlbnQubmF0aXZlRXZlbnQsXHJcbiAgICAgIG9wdGlvbixcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHZhbHVlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvblBlbmRpbmdWYWx1ZUNoYW5nZWRIYW5kbGVyKG9wdGlvbj86IElDb21ib0JveE9wdGlvbiwgaW5kZXg/OiBudW1iZXIsIHZhbHVlPzogc3RyaW5nKSB7XHJcbiAgICB0aGlzLm9uUGVuZGluZ1ZhbHVlQ2hhbmdlZC5lbWl0KHtcclxuICAgICAgb3B0aW9uLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgdmFsdWUsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uU2Nyb2xsVG9JdGVtSGFuZGxlcihpdGVtSW5kZXg6IG51bWJlcikge1xyXG4gICAgdGhpcy5vblNjcm9sbFRvSXRlbS5lbWl0KHtcclxuICAgICAgaXRlbUluZGV4LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9pbml0RGlyZWN0aXZlKGRpcmVjdGl2ZTogQ29tYm9Cb3hPcHRpb25zRGlyZWN0aXZlKSB7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSBkaXJlY3RpdmUuaXRlbXM7XHJcbiAgICB0aGlzLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxufVxyXG4iXX0=