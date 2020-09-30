/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, NgZone, Output, Renderer2, ViewChild, } from '@angular/core';
import { omit } from '@angular-react/fabric/lib/utils';
export class FabSearchBoxComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, { ngZone });
        this.onChange = new EventEmitter();
        this.onSearch = new EventEmitter();
        this.onClear = new EventEmitter();
        this.onEscape = new EventEmitter();
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
        this.onClearHandler = this.onClearHandler.bind(this);
        this.onEscapeHandler = this.onEscapeHandler.bind(this);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set clearButtonOptions(value) {
        this._clearButtonOptions = value;
        if (value) {
            this.clearButtonProps = this._transformButtonOptionsToProps(value);
        }
    }
    /**
     * @return {?}
     */
    get clearButtonOptions() {
        return this._clearButtonOptions;
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    onChangeHandler(newValue) {
        this.onChange.emit({
            newValue,
        });
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    onSearchHandler(newValue) {
        this.onSearch.emit({
            newValue,
        });
    }
    /**
     * @param {?=} ev
     * @return {?}
     */
    onClearHandler(ev) {
        this.onClear.emit({
            ev: (ev && ev.nativeElement) || ev,
        });
    }
    /**
     * @param {?=} ev
     * @return {?}
     */
    onEscapeHandler(ev) {
        this.onEscape.emit({
            ev: (ev && ev.nativeElement) || ev,
        });
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    _transformButtonOptionsToProps(options) {
        /** @type {?} */
        const sharedProperties = omit(options, 'renderIcon', 'renderText', 'renderDescription', 'renderAriaDescription', 'renderChildren', 'renderMenuIcon');
        /** @type {?} */
        const iconRenderer = this.createInputJsxRenderer(options.renderIcon);
        /** @type {?} */
        const textRenderer = this.createInputJsxRenderer(options.renderText);
        /** @type {?} */
        const descriptionRenderer = this.createInputJsxRenderer(options.renderDescription);
        /** @type {?} */
        const ariaDescriptionRenderer = this.createInputJsxRenderer(options.renderAriaDescription);
        /** @type {?} */
        const childrenRenderer = this.createInputJsxRenderer(options.renderChildren);
        /** @type {?} */
        const menuIconRenderer = this.createInputJsxRenderer(options.renderMenuIcon);
        return Object.assign({}, sharedProperties, iconRenderer && ((/** @type {?} */ ({ onRenderIcon: (/**
             * @param {?} props
             * @return {?}
             */
            props => iconRenderer(props)) }))), textRenderer && ((/** @type {?} */ ({ onRenderText: (/**
             * @param {?} props
             * @return {?}
             */
            props => textRenderer(props)) }))), descriptionRenderer &&
            ((/** @type {?} */ ({ onRenderDescription: (/**
                 * @param {?} props
                 * @return {?}
                 */
                props => descriptionRenderer(props)) }))), ariaDescriptionRenderer &&
            ((/** @type {?} */ ({ onRenderAriaDescription: (/**
                 * @param {?} props
                 * @return {?}
                 */
                props => ariaDescriptionRenderer(props)) }))), childrenRenderer &&
            ((/** @type {?} */ ({ onRenderChildren: (/**
                 * @param {?} props
                 * @return {?}
                 */
                props => childrenRenderer(props)) }))), menuIconRenderer &&
            ((/** @type {?} */ ({ onRenderMenuIcon: (/**
                 * @param {?} props
                 * @return {?}
                 */
                props => menuIconRenderer(props)) }))));
    }
}
FabSearchBoxComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-search-box',
                exportAs: 'fabSearchBox',
                template: `
    <SearchBox
      #reactNode
      [componentRef]="componentRef"
      [placeholder]="placeholder"
      [value]="value"
      [className]="className"
      [ariaLabel]="ariaLabel"
      [clearButtonProps]="clearButtonProps"
      [iconProps]="iconProps"
      [underlined]="underlined"
      [theme]="theme"
      [styles]="styles"
      [disableAnimation]="disableAnimation"
      [Change]="onChangeHandler"
      [Search]="onSearchHandler"
      [Clear]="onClearHandler"
      [Escape]="onEscapeHandler"
    >
    </SearchBox>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabSearchBoxComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zZWFyY2gtYm94L3NlYXJjaC1ib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBOEIscUJBQXFCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQTZCdkQsTUFBTSxPQUFPLHFCQUFzQixTQUFRLHFCQUFzQzs7Ozs7OztJQW9DL0UsWUFBWSxVQUFzQixFQUFFLGlCQUFvQyxFQUFFLFFBQW1CLEVBQUUsTUFBYztRQUMzRyxLQUFLLENBQUMsVUFBVSxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFWMUMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFxQixDQUFDO1FBQ2pELGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBcUIsQ0FBQztRQUNqRCxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQWdCLENBQUM7UUFDM0MsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFnQixDQUFDO1FBUzdELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxj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QUE4RDs7SUFDOUQseUNBQStEOztJQUUvRCxpREFBK0I7Ozs7O0lBRS9CLG9EQUE0Qzs7Ozs7QUF5RTlDLG9DQWdCQzs7O0lBTkMsb0NBQXdEOztJQUN4RCxvQ0FBd0Q7O0lBQ3hELDJDQUErRDs7SUFDL0QsK0NBQW1FOztJQUNuRSx3Q0FBNEQ7O0lBQzVELHdDQUE0RCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyBJbnB1dFJlbmRlcmVyT3B0aW9ucywgT21pdCwgUmVhY3RXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXItcmVhY3QvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE5nWm9uZSxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFZpZXdDaGlsZCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSUJ1dHRvblByb3BzIH0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvQnV0dG9uJztcclxuaW1wb3J0IHsgSVNlYXJjaEJveFByb3BzIH0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvU2VhcmNoQm94JztcclxuaW1wb3J0IHsgb21pdCB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy9saWIvdXRpbHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmYWItc2VhcmNoLWJveCcsXHJcbiAgZXhwb3J0QXM6ICdmYWJTZWFyY2hCb3gnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8U2VhcmNoQm94XHJcbiAgICAgICNyZWFjdE5vZGVcclxuICAgICAgW2NvbXBvbmVudFJlZl09XCJjb21wb25lbnRSZWZcIlxyXG4gICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxyXG4gICAgICBbdmFsdWVdPVwidmFsdWVcIlxyXG4gICAgICBbY2xhc3NOYW1lXT1cImNsYXNzTmFtZVwiXHJcbiAgICAgIFthcmlhTGFiZWxdPVwiYXJpYUxhYmVsXCJcclxuICAgICAgW2NsZWFyQnV0dG9uUHJvcHNdPVwiY2xlYXJCdXR0b25Qcm9wc1wiXHJcbiAgICAgIFtpY29uUHJvcHNdPVwiaWNvblByb3BzXCJcclxuICAgICAgW3VuZGVybGluZWRdPVwidW5kZXJsaW5lZFwiXHJcbiAgICAgIFt0aGVtZV09XCJ0aGVtZVwiXHJcbiAgICAgIFtzdHlsZXNdPVwic3R5bGVzXCJcclxuICAgICAgW2Rpc2FibGVBbmltYXRpb25dPVwiZGlzYWJsZUFuaW1hdGlvblwiXHJcbiAgICAgIFtDaGFuZ2VdPVwib25DaGFuZ2VIYW5kbGVyXCJcclxuICAgICAgW1NlYXJjaF09XCJvblNlYXJjaEhhbmRsZXJcIlxyXG4gICAgICBbQ2xlYXJdPVwib25DbGVhckhhbmRsZXJcIlxyXG4gICAgICBbRXNjYXBlXT1cIm9uRXNjYXBlSGFuZGxlclwiXHJcbiAgICA+XHJcbiAgICA8L1NlYXJjaEJveD5cclxuICBgLFxyXG4gIHN0eWxlczogWydyZWFjdC1yZW5kZXJlciddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmFiU2VhcmNoQm94Q29tcG9uZW50IGV4dGVuZHMgUmVhY3RXcmFwcGVyQ29tcG9uZW50PElTZWFyY2hCb3hQcm9wcz4ge1xyXG4gIEBWaWV3Q2hpbGQoJ3JlYWN0Tm9kZScsIHsgc3RhdGljOiB0cnVlIH0pIHByb3RlY3RlZCByZWFjdE5vZGVSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBJbnB1dCgpIGNvbXBvbmVudFJlZj86IElTZWFyY2hCb3hQcm9wc1snY29tcG9uZW50UmVmJ107XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI/OiBJU2VhcmNoQm94UHJvcHNbJ3BsYWNlaG9sZGVyJ107XHJcbiAgQElucHV0KCkgdmFsdWU/OiBJU2VhcmNoQm94UHJvcHNbJ3ZhbHVlJ107XHJcbiAgQElucHV0KCkgY2xhc3NOYW1lPzogSVNlYXJjaEJveFByb3BzWydjbGFzc05hbWUnXTtcclxuICBASW5wdXQoKSBhcmlhTGFiZWw/OiBJU2VhcmNoQm94UHJvcHNbJ2FyaWFMYWJlbCddO1xyXG4gIEBJbnB1dCgpIHVuZGVybGluZWQ/OiBJU2VhcmNoQm94UHJvcHNbJ3VuZGVybGluZWQnXTtcclxuICBASW5wdXQoKSB0aGVtZT86IElTZWFyY2hCb3hQcm9wc1sndGhlbWUnXTtcclxuICBASW5wdXQoKSBzdHlsZXM/OiBJU2VhcmNoQm94UHJvcHNbJ3N0eWxlcyddO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVBbmltYXRpb24/OiBJU2VhcmNoQm94UHJvcHNbJ2Rpc2FibGVBbmltYXRpb24nXTtcclxuICBASW5wdXQoKVxyXG4gIHNldCBjbGVhckJ1dHRvbk9wdGlvbnModmFsdWU6IElCdXR0b25PcHRpb25zKSB7XHJcbiAgICB0aGlzLl9jbGVhckJ1dHRvbk9wdGlvbnMgPSB2YWx1ZTtcclxuXHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgdGhpcy5jbGVhckJ1dHRvblByb3BzID0gdGhpcy5fdHJhbnNmb3JtQnV0dG9uT3B0aW9uc1RvUHJvcHModmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGNsZWFyQnV0dG9uT3B0aW9ucygpOiBJQnV0dG9uT3B0aW9ucyB7XHJcbiAgICByZXR1cm4gdGhpcy5fY2xlYXJCdXR0b25PcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgaWNvblByb3BzPzogSVNlYXJjaEJveFByb3BzWydpY29uUHJvcHMnXTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx7IG5ld1ZhbHVlOiBhbnkgfT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25TZWFyY2ggPSBuZXcgRXZlbnRFbWl0dGVyPHsgbmV3VmFsdWU6IGFueSB9PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvbkNsZWFyID0gbmV3IEV2ZW50RW1pdHRlcjx7IGV2PzogYW55IH0+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uRXNjYXBlID0gbmV3IEV2ZW50RW1pdHRlcjx7IGV2PzogYW55IH0+KCk7XHJcblxyXG4gIGNsZWFyQnV0dG9uUHJvcHM6IElCdXR0b25Qcm9wcztcclxuXHJcbiAgcHJpdmF0ZSBfY2xlYXJCdXR0b25PcHRpb25zOiBJQnV0dG9uT3B0aW9ucztcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCBuZ1pvbmU6IE5nWm9uZSkge1xyXG4gICAgc3VwZXIoZWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyLCB7IG5nWm9uZSB9KTtcclxuXHJcbiAgICB0aGlzLm9uQ2hhbmdlSGFuZGxlciA9IHRoaXMub25DaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uU2VhcmNoSGFuZGxlciA9IHRoaXMub25TZWFyY2hIYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uQ2xlYXJIYW5kbGVyID0gdGhpcy5vbkNsZWFySGFuZGxlci5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbkVzY2FwZUhhbmRsZXIgPSB0aGlzLm9uRXNjYXBlSGFuZGxlci5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2VIYW5kbGVyKG5ld1ZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMub25DaGFuZ2UuZW1pdCh7XHJcbiAgICAgIG5ld1ZhbHVlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvblNlYXJjaEhhbmRsZXIobmV3VmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5vblNlYXJjaC5lbWl0KHtcclxuICAgICAgbmV3VmFsdWUsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uQ2xlYXJIYW5kbGVyKGV2PzogYW55KSB7XHJcbiAgICB0aGlzLm9uQ2xlYXIuZW1pdCh7XHJcbiAgICAgIGV2OiAoZXYgJiYgZXYubmF0aXZlRWxlbWVudCkgfHwgZXYsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uRXNjYXBlSGFuZGxlcihldj86IGFueSkge1xyXG4gICAgdGhpcy5vbkVzY2FwZS5lbWl0KHtcclxuICAgICAgZXY6IChldiAmJiBldi5uYXRpdmVFbGVtZW50KSB8fCBldixcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfdHJhbnNmb3JtQnV0dG9uT3B0aW9uc1RvUHJvcHMob3B0aW9uczogSUJ1dHRvbk9wdGlvbnMpOiBJQnV0dG9uUHJvcHMge1xyXG4gICAgY29uc3Qgc2hhcmVkUHJvcGVydGllcyA9IG9taXQoXHJcbiAgICAgIG9wdGlvbnMsXHJcbiAgICAgICdyZW5kZXJJY29uJyxcclxuICAgICAgJ3JlbmRlclRleHQnLFxyXG4gICAgICAncmVuZGVyRGVzY3JpcHRpb24nLFxyXG4gICAgICAncmVuZGVyQXJpYURlc2NyaXB0aW9uJyxcclxuICAgICAgJ3JlbmRlckNoaWxkcmVuJyxcclxuICAgICAgJ3JlbmRlck1lbnVJY29uJ1xyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBpY29uUmVuZGVyZXIgPSB0aGlzLmNyZWF0ZUlucHV0SnN4UmVuZGVyZXIob3B0aW9ucy5yZW5kZXJJY29uKTtcclxuICAgIGNvbnN0IHRleHRSZW5kZXJlciA9IHRoaXMuY3JlYXRlSW5wdXRKc3hSZW5kZXJlcihvcHRpb25zLnJlbmRlclRleHQpO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25SZW5kZXJlciA9IHRoaXMuY3JlYXRlSW5wdXRKc3hSZW5kZXJlcihvcHRpb25zLnJlbmRlckRlc2NyaXB0aW9uKTtcclxuICAgIGNvbnN0IGFyaWFEZXNjcmlwdGlvblJlbmRlcmVyID0gdGhpcy5jcmVhdGVJbnB1dEpzeFJlbmRlcmVyKG9wdGlvbnMucmVuZGVyQXJpYURlc2NyaXB0aW9uKTtcclxuICAgIGNvbnN0IGNoaWxkcmVuUmVuZGVyZXIgPSB0aGlzLmNyZWF0ZUlucHV0SnN4UmVuZGVyZXIob3B0aW9ucy5yZW5kZXJDaGlsZHJlbik7XHJcbiAgICBjb25zdCBtZW51SWNvblJlbmRlcmVyID0gdGhpcy5jcmVhdGVJbnB1dEpzeFJlbmRlcmVyKG9wdGlvbnMucmVuZGVyTWVudUljb24pO1xyXG5cclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKFxyXG4gICAgICB7fSxcclxuICAgICAgc2hhcmVkUHJvcGVydGllcyxcclxuICAgICAgaWNvblJlbmRlcmVyICYmICh7IG9uUmVuZGVySWNvbjogcHJvcHMgPT4gaWNvblJlbmRlcmVyKHByb3BzKSB9IGFzIFBpY2s8SUJ1dHRvblByb3BzLCAnb25SZW5kZXJJY29uJz4pLFxyXG4gICAgICB0ZXh0UmVuZGVyZXIgJiYgKHsgb25SZW5kZXJUZXh0OiBwcm9wcyA9PiB0ZXh0UmVuZGVyZXIocHJvcHMpIH0gYXMgUGljazxJQnV0dG9uUHJvcHMsICdvblJlbmRlclRleHQnPiksXHJcbiAgICAgIGRlc2NyaXB0aW9uUmVuZGVyZXIgJiZcclxuICAgICAgICAoeyBvblJlbmRlckRlc2NyaXB0aW9uOiBwcm9wcyA9PiBkZXNjcmlwdGlvblJlbmRlcmVyKHByb3BzKSB9IGFzIFBpY2s8SUJ1dHRvblByb3BzLCAnb25SZW5kZXJEZXNjcmlwdGlvbic+KSxcclxuICAgICAgYXJpYURlc2NyaXB0aW9uUmVuZGVyZXIgJiZcclxuICAgICAgICAoeyBvblJlbmRlckFyaWFEZXNjcmlwdGlvbjogcHJvcHMgPT4gYXJpYURlc2NyaXB0aW9uUmVuZGVyZXIocHJvcHMpIH0gYXMgUGljazxcclxuICAgICAgICAgIElCdXR0b25Qcm9wcyxcclxuICAgICAgICAgICdvblJlbmRlckFyaWFEZXNjcmlwdGlvbidcclxuICAgICAgICA+KSxcclxuICAgICAgY2hpbGRyZW5SZW5kZXJlciAmJlxyXG4gICAgICAgICh7IG9uUmVuZGVyQ2hpbGRyZW46IHByb3BzID0+IGNoaWxkcmVuUmVuZGVyZXIocHJvcHMpIH0gYXMgUGljazxJQnV0dG9uUHJvcHMsICdvblJlbmRlckNoaWxkcmVuJz4pLFxyXG4gICAgICBtZW51SWNvblJlbmRlcmVyICYmXHJcbiAgICAgICAgKHsgb25SZW5kZXJNZW51SWNvbjogcHJvcHMgPT4gbWVudUljb25SZW5kZXJlcihwcm9wcykgfSBhcyBQaWNrPElCdXR0b25Qcm9wcywgJ29uUmVuZGVyTWVudUljb24nPilcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElCdXR0b25PcHRpb25zXHJcbiAgZXh0ZW5kcyBPbWl0PFxyXG4gICAgSUJ1dHRvblByb3BzLFxyXG4gICAgfCAnb25SZW5kZXJJY29uJ1xyXG4gICAgfCAnb25SZW5kZXJUZXh0J1xyXG4gICAgfCAnb25SZW5kZXJEZXNjcmlwdGlvbidcclxuICAgIHwgJ29uUmVuZGVyQXJpYURlc2NyaXB0aW9uJ1xyXG4gICAgfCAnb25SZW5kZXJDaGlsZHJlbidcclxuICAgIHwgJ29uUmVuZGVyTWVudUljb24nXHJcbiAgPiB7XHJcbiAgcmVhZG9ubHkgcmVuZGVySWNvbjogSW5wdXRSZW5kZXJlck9wdGlvbnM8SUJ1dHRvblByb3BzPjtcclxuICByZWFkb25seSByZW5kZXJUZXh0OiBJbnB1dFJlbmRlcmVyT3B0aW9uczxJQnV0dG9uUHJvcHM+O1xyXG4gIHJlYWRvbmx5IHJlbmRlckRlc2NyaXB0aW9uOiBJbnB1dFJlbmRlcmVyT3B0aW9uczxJQnV0dG9uUHJvcHM+O1xyXG4gIHJlYWRvbmx5IHJlbmRlckFyaWFEZXNjcmlwdGlvbjogSW5wdXRSZW5kZXJlck9wdGlvbnM8SUJ1dHRvblByb3BzPjtcclxuICByZWFkb25seSByZW5kZXJDaGlsZHJlbjogSW5wdXRSZW5kZXJlck9wdGlvbnM8SUJ1dHRvblByb3BzPjtcclxuICByZWFkb25seSByZW5kZXJNZW51SWNvbjogSW5wdXRSZW5kZXJlck9wdGlvbnM8SUJ1dHRvblByb3BzPjtcclxufVxyXG4iXX0=