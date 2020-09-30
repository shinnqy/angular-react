/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, NgZone, Output, Renderer2, ViewChild, } from '@angular/core';
import { omit } from '@angular-react/fabric/lib/utils';
var FabSearchBoxComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabSearchBoxComponent, _super);
    function FabSearchBoxComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone }) || this;
        _this.onChange = new EventEmitter();
        _this.onSearch = new EventEmitter();
        _this.onClear = new EventEmitter();
        _this.onEscape = new EventEmitter();
        _this.onChangeHandler = _this.onChangeHandler.bind(_this);
        _this.onSearchHandler = _this.onSearchHandler.bind(_this);
        _this.onClearHandler = _this.onClearHandler.bind(_this);
        _this.onEscapeHandler = _this.onEscapeHandler.bind(_this);
        return _this;
    }
    Object.defineProperty(FabSearchBoxComponent.prototype, "clearButtonOptions", {
        get: /**
         * @return {?}
         */
        function () {
            return this._clearButtonOptions;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._clearButtonOptions = value;
            if (value) {
                this.clearButtonProps = this._transformButtonOptionsToProps(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} newValue
     * @return {?}
     */
    FabSearchBoxComponent.prototype.onChangeHandler = /**
     * @param {?} newValue
     * @return {?}
     */
    function (newValue) {
        this.onChange.emit({
            newValue: newValue,
        });
    };
    /**
     * @param {?} newValue
     * @return {?}
     */
    FabSearchBoxComponent.prototype.onSearchHandler = /**
     * @param {?} newValue
     * @return {?}
     */
    function (newValue) {
        this.onSearch.emit({
            newValue: newValue,
        });
    };
    /**
     * @param {?=} ev
     * @return {?}
     */
    FabSearchBoxComponent.prototype.onClearHandler = /**
     * @param {?=} ev
     * @return {?}
     */
    function (ev) {
        this.onClear.emit({
            ev: (ev && ev.nativeElement) || ev,
        });
    };
    /**
     * @param {?=} ev
     * @return {?}
     */
    FabSearchBoxComponent.prototype.onEscapeHandler = /**
     * @param {?=} ev
     * @return {?}
     */
    function (ev) {
        this.onEscape.emit({
            ev: (ev && ev.nativeElement) || ev,
        });
    };
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    FabSearchBoxComponent.prototype._transformButtonOptionsToProps = /**
     * @private
     * @param {?} options
     * @return {?}
     */
    function (options) {
        /** @type {?} */
        var sharedProperties = omit(options, 'renderIcon', 'renderText', 'renderDescription', 'renderAriaDescription', 'renderChildren', 'renderMenuIcon');
        /** @type {?} */
        var iconRenderer = this.createInputJsxRenderer(options.renderIcon);
        /** @type {?} */
        var textRenderer = this.createInputJsxRenderer(options.renderText);
        /** @type {?} */
        var descriptionRenderer = this.createInputJsxRenderer(options.renderDescription);
        /** @type {?} */
        var ariaDescriptionRenderer = this.createInputJsxRenderer(options.renderAriaDescription);
        /** @type {?} */
        var childrenRenderer = this.createInputJsxRenderer(options.renderChildren);
        /** @type {?} */
        var menuIconRenderer = this.createInputJsxRenderer(options.renderMenuIcon);
        return Object.assign({}, sharedProperties, iconRenderer && ((/** @type {?} */ ({ onRenderIcon: (/**
             * @param {?} props
             * @return {?}
             */
            function (props) { return iconRenderer(props); }) }))), textRenderer && ((/** @type {?} */ ({ onRenderText: (/**
             * @param {?} props
             * @return {?}
             */
            function (props) { return textRenderer(props); }) }))), descriptionRenderer &&
            ((/** @type {?} */ ({ onRenderDescription: (/**
                 * @param {?} props
                 * @return {?}
                 */
                function (props) { return descriptionRenderer(props); }) }))), ariaDescriptionRenderer &&
            ((/** @type {?} */ ({ onRenderAriaDescription: (/**
                 * @param {?} props
                 * @return {?}
                 */
                function (props) { return ariaDescriptionRenderer(props); }) }))), childrenRenderer &&
            ((/** @type {?} */ ({ onRenderChildren: (/**
                 * @param {?} props
                 * @return {?}
                 */
                function (props) { return childrenRenderer(props); }) }))), menuIconRenderer &&
            ((/** @type {?} */ ({ onRenderMenuIcon: (/**
                 * @param {?} props
                 * @return {?}
                 */
                function (props) { return menuIconRenderer(props); }) }))));
    };
    FabSearchBoxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-search-box',
                    exportAs: 'fabSearchBox',
                    template: "\n    <SearchBox\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [placeholder]=\"placeholder\"\n      [value]=\"value\"\n      [className]=\"className\"\n      [ariaLabel]=\"ariaLabel\"\n      [clearButtonProps]=\"clearButtonProps\"\n      [iconProps]=\"iconProps\"\n      [underlined]=\"underlined\"\n      [theme]=\"theme\"\n      [styles]=\"styles\"\n      [disableAnimation]=\"disableAnimation\"\n      [Change]=\"onChangeHandler\"\n      [Search]=\"onSearchHandler\"\n      [Clear]=\"onClearHandler\"\n      [Escape]=\"onEscapeHandler\"\n    >\n    </SearchBox>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabSearchBoxComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    FabSearchBoxComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
        componentRef: [{ type: Input }],
        placeholder: [{ type: Input }],
        value: [{ type: Input }],
        className: [{ type: Input }],
        ariaLabel: [{ type: Input }],
        underlined: [{ type: Input }],
        theme: [{ type: Input }],
        styles: [{ type: Input }],
        disableAnimation: [{ type: Input }],
        clearButtonOptions: [{ type: Input }],
        iconProps: [{ type: Input }],
        onChange: [{ type: Output }],
        onSearch: [{ type: Output }],
        onClear: [{ type: Output }],
        onEscape: [{ type: Output }]
    };
    return FabSearchBoxComponent;
}(ReactWrapperComponent));
export { FabSearchBoxComponent };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabSearchBoxComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabSearchBoxComponent.prototype.componentRef;
    /** @type {?} */
    FabSearchBoxComponent.prototype.placeholder;
    /** @type {?} */
    FabSearchBoxComponent.prototype.value;
    /** @type {?} */
    FabSearchBoxComponent.prototype.className;
    /** @type {?} */
    FabSearchBoxComponent.prototype.ariaLabel;
    /** @type {?} */
    FabSearchBoxComponent.prototype.underlined;
    /** @type {?} */
    FabSearchBoxComponent.prototype.theme;
    /** @type {?} */
    FabSearchBoxComponent.prototype.styles;
    /** @type {?} */
    FabSearchBoxComponent.prototype.disableAnimation;
    /** @type {?} */
    FabSearchBoxComponent.prototype.iconProps;
    /** @type {?} */
    FabSearchBoxComponent.prototype.onChange;
    /** @type {?} */
    FabSearchBoxComponent.prototype.onSearch;
    /** @type {?} */
    FabSearchBoxComponent.prototype.onClear;
    /** @type {?} */
    FabSearchBoxComponent.prototype.onEscape;
    /** @type {?} */
    FabSearchBoxComponent.prototype.clearButtonProps;
    /**
     * @type {?}
     * @private
     */
    FabSearchBoxComponent.prototype._clearButtonOptions;
}
/**
 * @record
 */
export function IButtonOptions() { }
if (false) {
    /** @type {?} */
    IButtonOptions.prototype.renderIcon;
    /** @type {?} */
    IButtonOptions.prototype.renderText;
    /** @type {?} */
    IButtonOptions.prototype.renderDescription;
    /** @type {?} */
    IButtonOptions.prototype.renderAriaDescription;
    /** @type {?} */
    IButtonOptions.prototype.renderChildren;
    /** @type {?} */
    IButtonOptions.prototype.renderMenuIcon;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zZWFyY2gtYm94L3NlYXJjaC1ib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQThCLHFCQUFxQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEYsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFdkQ7SUEyQjJDLGlEQUFzQztJQW9DL0UsK0JBQVksVUFBc0IsRUFBRSxpQkFBb0MsRUFBRSxRQUFtQixFQUFFLE1BQWM7UUFBN0csWUFDRSxrQkFBTSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQyxTQU0zRDtRQWhCa0IsY0FBUSxHQUFHLElBQUksWUFBWSxFQUFxQixDQUFDO1FBQ2pELGNBQVEsR0FBRyxJQUFJLFlBQVksRUFBcUIsQ0FBQztRQUNqRCxhQUFPLEdBQUcsSUFBSSxZQUFZLEVBQWdCLENBQUM7UUFDM0MsY0FBUSxHQUFHLElBQUksWUFBWSxFQUFnQixDQUFDO1FBUzdELEtBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDdkQsS0FBSSxDQUFDLGVBQWUsR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUN2RCxLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFB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Q0FBd0Q7O0lBQ3hELDRDQUFzRDs7SUFDdEQsc0NBQTBDOztJQUMxQywwQ0FBa0Q7O0lBQ2xELDBDQUFrRDs7SUFDbEQsMkNBQW9EOztJQUNwRCxzQ0FBMEM7O0lBQzFDLHVDQUE0Qzs7SUFDNUMsaURBQWdFOztJQWNoRSwwQ0FBa0Q7O0lBRWxELHlDQUFvRTs7SUFDcEUseUNBQW9FOztJQUNwRSx3Q0FBOEQ7O0lBQzlELHlDQUErRDs7SUFFL0QsaURBQStCOzs7OztJQUUvQixvREFBNEM7Ozs7O0FBeUU5QyxvQ0FnQkM7OztJQU5DLG9DQUF3RDs7SUFDeEQsb0NBQXdEOztJQUN4RCwyQ0FBK0Q7O0lBQy9ELCtDQUFtRTs7SUFDbkUsd0NBQTREOztJQUM1RCx3Q0FBNEQiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgSW5wdXRSZW5kZXJlck9wdGlvbnMsIE9taXQsIFJlYWN0V3JhcHBlckNvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3Q2hpbGQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElCdXR0b25Qcm9wcyB9IGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliL0J1dHRvbic7XHJcbmltcG9ydCB7IElTZWFyY2hCb3hQcm9wcyB9IGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliL1NlYXJjaEJveCc7XHJcbmltcG9ydCB7IG9taXQgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9mYWJyaWMvbGliL3V0aWxzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZmFiLXNlYXJjaC1ib3gnLFxyXG4gIGV4cG9ydEFzOiAnZmFiU2VhcmNoQm94JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPFNlYXJjaEJveFxyXG4gICAgICAjcmVhY3ROb2RlXHJcbiAgICAgIFtjb21wb25lbnRSZWZdPVwiY29tcG9uZW50UmVmXCJcclxuICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcclxuICAgICAgW3ZhbHVlXT1cInZhbHVlXCJcclxuICAgICAgW2NsYXNzTmFtZV09XCJjbGFzc05hbWVcIlxyXG4gICAgICBbYXJpYUxhYmVsXT1cImFyaWFMYWJlbFwiXHJcbiAgICAgIFtjbGVhckJ1dHRvblByb3BzXT1cImNsZWFyQnV0dG9uUHJvcHNcIlxyXG4gICAgICBbaWNvblByb3BzXT1cImljb25Qcm9wc1wiXHJcbiAgICAgIFt1bmRlcmxpbmVkXT1cInVuZGVybGluZWRcIlxyXG4gICAgICBbdGhlbWVdPVwidGhlbWVcIlxyXG4gICAgICBbc3R5bGVzXT1cInN0eWxlc1wiXHJcbiAgICAgIFtkaXNhYmxlQW5pbWF0aW9uXT1cImRpc2FibGVBbmltYXRpb25cIlxyXG4gICAgICBbQ2hhbmdlXT1cIm9uQ2hhbmdlSGFuZGxlclwiXHJcbiAgICAgIFtTZWFyY2hdPVwib25TZWFyY2hIYW5kbGVyXCJcclxuICAgICAgW0NsZWFyXT1cIm9uQ2xlYXJIYW5kbGVyXCJcclxuICAgICAgW0VzY2FwZV09XCJvbkVzY2FwZUhhbmRsZXJcIlxyXG4gICAgPlxyXG4gICAgPC9TZWFyY2hCb3g+XHJcbiAgYCxcclxuICBzdHlsZXM6IFsncmVhY3QtcmVuZGVyZXInXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZhYlNlYXJjaEJveENvbXBvbmVudCBleHRlbmRzIFJlYWN0V3JhcHBlckNvbXBvbmVudDxJU2VhcmNoQm94UHJvcHM+IHtcclxuICBAVmlld0NoaWxkKCdyZWFjdE5vZGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcm90ZWN0ZWQgcmVhY3ROb2RlUmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICBASW5wdXQoKSBjb21wb25lbnRSZWY/OiBJU2VhcmNoQm94UHJvcHNbJ2NvbXBvbmVudFJlZiddO1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyPzogSVNlYXJjaEJveFByb3BzWydwbGFjZWhvbGRlciddO1xyXG4gIEBJbnB1dCgpIHZhbHVlPzogSVNlYXJjaEJveFByb3BzWyd2YWx1ZSddO1xyXG4gIEBJbnB1dCgpIGNsYXNzTmFtZT86IElTZWFyY2hCb3hQcm9wc1snY2xhc3NOYW1lJ107XHJcbiAgQElucHV0KCkgYXJpYUxhYmVsPzogSVNlYXJjaEJveFByb3BzWydhcmlhTGFiZWwnXTtcclxuICBASW5wdXQoKSB1bmRlcmxpbmVkPzogSVNlYXJjaEJveFByb3BzWyd1bmRlcmxpbmVkJ107XHJcbiAgQElucHV0KCkgdGhlbWU/OiBJU2VhcmNoQm94UHJvcHNbJ3RoZW1lJ107XHJcbiAgQElucHV0KCkgc3R5bGVzPzogSVNlYXJjaEJveFByb3BzWydzdHlsZXMnXTtcclxuICBASW5wdXQoKSBkaXNhYmxlQW5pbWF0aW9uPzogSVNlYXJjaEJveFByb3BzWydkaXNhYmxlQW5pbWF0aW9uJ107XHJcbiAgQElucHV0KClcclxuICBzZXQgY2xlYXJCdXR0b25PcHRpb25zKHZhbHVlOiBJQnV0dG9uT3B0aW9ucykge1xyXG4gICAgdGhpcy5fY2xlYXJCdXR0b25PcHRpb25zID0gdmFsdWU7XHJcblxyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuY2xlYXJCdXR0b25Qcm9wcyA9IHRoaXMuX3RyYW5zZm9ybUJ1dHRvbk9wdGlvbnNUb1Byb3BzKHZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBjbGVhckJ1dHRvbk9wdGlvbnMoKTogSUJ1dHRvbk9wdGlvbnMge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NsZWFyQnV0dG9uT3B0aW9ucztcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIGljb25Qcm9wcz86IElTZWFyY2hCb3hQcm9wc1snaWNvblByb3BzJ107XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8eyBuZXdWYWx1ZTogYW55IH0+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uU2VhcmNoID0gbmV3IEV2ZW50RW1pdHRlcjx7IG5ld1ZhbHVlOiBhbnkgfT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25DbGVhciA9IG5ldyBFdmVudEVtaXR0ZXI8eyBldj86IGFueSB9PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvbkVzY2FwZSA9IG5ldyBFdmVudEVtaXR0ZXI8eyBldj86IGFueSB9PigpO1xyXG5cclxuICBjbGVhckJ1dHRvblByb3BzOiBJQnV0dG9uUHJvcHM7XHJcblxyXG4gIHByaXZhdGUgX2NsZWFyQnV0dG9uT3B0aW9uczogSUJ1dHRvbk9wdGlvbnM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmdab25lOiBOZ1pvbmUpIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlciwgeyBuZ1pvbmUgfSk7XHJcblxyXG4gICAgdGhpcy5vbkNoYW5nZUhhbmRsZXIgPSB0aGlzLm9uQ2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vblNlYXJjaEhhbmRsZXIgPSB0aGlzLm9uU2VhcmNoSGFuZGxlci5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbkNsZWFySGFuZGxlciA9IHRoaXMub25DbGVhckhhbmRsZXIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25Fc2NhcGVIYW5kbGVyID0gdGhpcy5vbkVzY2FwZUhhbmRsZXIuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlSGFuZGxlcihuZXdWYWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoe1xyXG4gICAgICBuZXdWYWx1ZSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25TZWFyY2hIYW5kbGVyKG5ld1ZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMub25TZWFyY2guZW1pdCh7XHJcbiAgICAgIG5ld1ZhbHVlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbkNsZWFySGFuZGxlcihldj86IGFueSkge1xyXG4gICAgdGhpcy5vbkNsZWFyLmVtaXQoe1xyXG4gICAgICBldjogKGV2ICYmIGV2Lm5hdGl2ZUVsZW1lbnQpIHx8IGV2LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbkVzY2FwZUhhbmRsZXIoZXY/OiBhbnkpIHtcclxuICAgIHRoaXMub25Fc2NhcGUuZW1pdCh7XHJcbiAgICAgIGV2OiAoZXYgJiYgZXYubmF0aXZlRWxlbWVudCkgfHwgZXYsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3RyYW5zZm9ybUJ1dHRvbk9wdGlvbnNUb1Byb3BzKG9wdGlvbnM6IElCdXR0b25PcHRpb25zKTogSUJ1dHRvblByb3BzIHtcclxuICAgIGNvbnN0IHNoYXJlZFByb3BlcnRpZXMgPSBvbWl0KFxyXG4gICAgICBvcHRpb25zLFxyXG4gICAgICAncmVuZGVySWNvbicsXHJcbiAgICAgICdyZW5kZXJUZXh0JyxcclxuICAgICAgJ3JlbmRlckRlc2NyaXB0aW9uJyxcclxuICAgICAgJ3JlbmRlckFyaWFEZXNjcmlwdGlvbicsXHJcbiAgICAgICdyZW5kZXJDaGlsZHJlbicsXHJcbiAgICAgICdyZW5kZXJNZW51SWNvbidcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgaWNvblJlbmRlcmVyID0gdGhpcy5jcmVhdGVJbnB1dEpzeFJlbmRlcmVyKG9wdGlvbnMucmVuZGVySWNvbik7XHJcbiAgICBjb25zdCB0ZXh0UmVuZGVyZXIgPSB0aGlzLmNyZWF0ZUlucHV0SnN4UmVuZGVyZXIob3B0aW9ucy5yZW5kZXJUZXh0KTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uUmVuZGVyZXIgPSB0aGlzLmNyZWF0ZUlucHV0SnN4UmVuZGVyZXIob3B0aW9ucy5yZW5kZXJEZXNjcmlwdGlvbik7XHJcbiAgICBjb25zdCBhcmlhRGVzY3JpcHRpb25SZW5kZXJlciA9IHRoaXMuY3JlYXRlSW5wdXRKc3hSZW5kZXJlcihvcHRpb25zLnJlbmRlckFyaWFEZXNjcmlwdGlvbik7XHJcbiAgICBjb25zdCBjaGlsZHJlblJlbmRlcmVyID0gdGhpcy5jcmVhdGVJbnB1dEpzeFJlbmRlcmVyKG9wdGlvbnMucmVuZGVyQ2hpbGRyZW4pO1xyXG4gICAgY29uc3QgbWVudUljb25SZW5kZXJlciA9IHRoaXMuY3JlYXRlSW5wdXRKc3hSZW5kZXJlcihvcHRpb25zLnJlbmRlck1lbnVJY29uKTtcclxuXHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihcclxuICAgICAge30sXHJcbiAgICAgIHNoYXJlZFByb3BlcnRpZXMsXHJcbiAgICAgIGljb25SZW5kZXJlciAmJiAoeyBvblJlbmRlckljb246IHByb3BzID0+IGljb25SZW5kZXJlcihwcm9wcykgfSBhcyBQaWNrPElCdXR0b25Qcm9wcywgJ29uUmVuZGVySWNvbic+KSxcclxuICAgICAgdGV4dFJlbmRlcmVyICYmICh7IG9uUmVuZGVyVGV4dDogcHJvcHMgPT4gdGV4dFJlbmRlcmVyKHByb3BzKSB9IGFzIFBpY2s8SUJ1dHRvblByb3BzLCAnb25SZW5kZXJUZXh0Jz4pLFxyXG4gICAgICBkZXNjcmlwdGlvblJlbmRlcmVyICYmXHJcbiAgICAgICAgKHsgb25SZW5kZXJEZXNjcmlwdGlvbjogcHJvcHMgPT4gZGVzY3JpcHRpb25SZW5kZXJlcihwcm9wcykgfSBhcyBQaWNrPElCdXR0b25Qcm9wcywgJ29uUmVuZGVyRGVzY3JpcHRpb24nPiksXHJcbiAgICAgIGFyaWFEZXNjcmlwdGlvblJlbmRlcmVyICYmXHJcbiAgICAgICAgKHsgb25SZW5kZXJBcmlhRGVzY3JpcHRpb246IHByb3BzID0+IGFyaWFEZXNjcmlwdGlvblJlbmRlcmVyKHByb3BzKSB9IGFzIFBpY2s8XHJcbiAgICAgICAgICBJQnV0dG9uUHJvcHMsXHJcbiAgICAgICAgICAnb25SZW5kZXJBcmlhRGVzY3JpcHRpb24nXHJcbiAgICAgICAgPiksXHJcbiAgICAgIGNoaWxkcmVuUmVuZGVyZXIgJiZcclxuICAgICAgICAoeyBvblJlbmRlckNoaWxkcmVuOiBwcm9wcyA9PiBjaGlsZHJlblJlbmRlcmVyKHByb3BzKSB9IGFzIFBpY2s8SUJ1dHRvblByb3BzLCAnb25SZW5kZXJDaGlsZHJlbic+KSxcclxuICAgICAgbWVudUljb25SZW5kZXJlciAmJlxyXG4gICAgICAgICh7IG9uUmVuZGVyTWVudUljb246IHByb3BzID0+IG1lbnVJY29uUmVuZGVyZXIocHJvcHMpIH0gYXMgUGljazxJQnV0dG9uUHJvcHMsICdvblJlbmRlck1lbnVJY29uJz4pXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQnV0dG9uT3B0aW9uc1xyXG4gIGV4dGVuZHMgT21pdDxcclxuICAgIElCdXR0b25Qcm9wcyxcclxuICAgIHwgJ29uUmVuZGVySWNvbidcclxuICAgIHwgJ29uUmVuZGVyVGV4dCdcclxuICAgIHwgJ29uUmVuZGVyRGVzY3JpcHRpb24nXHJcbiAgICB8ICdvblJlbmRlckFyaWFEZXNjcmlwdGlvbidcclxuICAgIHwgJ29uUmVuZGVyQ2hpbGRyZW4nXHJcbiAgICB8ICdvblJlbmRlck1lbnVJY29uJ1xyXG4gID4ge1xyXG4gIHJlYWRvbmx5IHJlbmRlckljb246IElucHV0UmVuZGVyZXJPcHRpb25zPElCdXR0b25Qcm9wcz47XHJcbiAgcmVhZG9ubHkgcmVuZGVyVGV4dDogSW5wdXRSZW5kZXJlck9wdGlvbnM8SUJ1dHRvblByb3BzPjtcclxuICByZWFkb25seSByZW5kZXJEZXNjcmlwdGlvbjogSW5wdXRSZW5kZXJlck9wdGlvbnM8SUJ1dHRvblByb3BzPjtcclxuICByZWFkb25seSByZW5kZXJBcmlhRGVzY3JpcHRpb246IElucHV0UmVuZGVyZXJPcHRpb25zPElCdXR0b25Qcm9wcz47XHJcbiAgcmVhZG9ubHkgcmVuZGVyQ2hpbGRyZW46IElucHV0UmVuZGVyZXJPcHRpb25zPElCdXR0b25Qcm9wcz47XHJcbiAgcmVhZG9ubHkgcmVuZGVyTWVudUljb246IElucHV0UmVuZGVyZXJPcHRpb25zPElCdXR0b25Qcm9wcz47XHJcbn1cclxuIl19