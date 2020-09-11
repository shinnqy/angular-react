/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, NgZone, Output, Renderer2, ViewChild, } from '@angular/core';
import omit from 'angular-react-toolkit/utils/omit';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvbGliL2NvbXBvbmVudHMvc2VhcmNoLWJveC8iLCJzb3VyY2VzIjpbInNlYXJjaC1ib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBOEIscUJBQXFCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sSUFBSSxNQUFNLGtDQUFrQyxDQUFDO0FBNkJwRCxNQUFNLE9BQU8scUJBQXNCLFNBQVEscUJBQXNDOzs7Ozs7O0lBb0MvRSxZQUFZLFVBQXNCLEVBQUUsaUJBQW9DLEVBQUUsUUFBbUIsRUFBRSxNQUFjO1FBQzNHLEtBQUssQ0FBQyxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztRQVYxQyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQXFCLENBQUM7UUFDakQsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFxQixDQUFDO1FBQ2pELFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBZ0IsQ0FBQztRQUMzQyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQWdCLENBQUM7UUFTN0QsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJ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RCx5Q0FBK0Q7O0lBRS9ELGlEQUErQjs7Ozs7SUFFL0Isb0RBQTRDOzs7OztBQXlFOUMsb0NBZ0JDOzs7SUFOQyxvQ0FBd0Q7O0lBQ3hELG9DQUF3RDs7SUFDeEQsMkNBQStEOztJQUMvRCwrQ0FBbUU7O0lBQ25FLHdDQUE0RDs7SUFDNUQsd0NBQTREIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IElucHV0UmVuZGVyZXJPcHRpb25zLCBPbWl0LCBSZWFjdFdyYXBwZXJDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9jb3JlJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0NoaWxkLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJQnV0dG9uUHJvcHMgfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9CdXR0b24nO1xyXG5pbXBvcnQgeyBJU2VhcmNoQm94UHJvcHMgfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9TZWFyY2hCb3gnO1xyXG5pbXBvcnQgb21pdCBmcm9tICdhbmd1bGFyLXJlYWN0LXRvb2xraXQvdXRpbHMvb21pdCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZhYi1zZWFyY2gtYm94JyxcclxuICBleHBvcnRBczogJ2ZhYlNlYXJjaEJveCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxTZWFyY2hCb3hcclxuICAgICAgI3JlYWN0Tm9kZVxyXG4gICAgICBbY29tcG9uZW50UmVmXT1cImNvbXBvbmVudFJlZlwiXHJcbiAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXHJcbiAgICAgIFt2YWx1ZV09XCJ2YWx1ZVwiXHJcbiAgICAgIFtjbGFzc05hbWVdPVwiY2xhc3NOYW1lXCJcclxuICAgICAgW2FyaWFMYWJlbF09XCJhcmlhTGFiZWxcIlxyXG4gICAgICBbY2xlYXJCdXR0b25Qcm9wc109XCJjbGVhckJ1dHRvblByb3BzXCJcclxuICAgICAgW2ljb25Qcm9wc109XCJpY29uUHJvcHNcIlxyXG4gICAgICBbdW5kZXJsaW5lZF09XCJ1bmRlcmxpbmVkXCJcclxuICAgICAgW3RoZW1lXT1cInRoZW1lXCJcclxuICAgICAgW3N0eWxlc109XCJzdHlsZXNcIlxyXG4gICAgICBbZGlzYWJsZUFuaW1hdGlvbl09XCJkaXNhYmxlQW5pbWF0aW9uXCJcclxuICAgICAgW0NoYW5nZV09XCJvbkNoYW5nZUhhbmRsZXJcIlxyXG4gICAgICBbU2VhcmNoXT1cIm9uU2VhcmNoSGFuZGxlclwiXHJcbiAgICAgIFtDbGVhcl09XCJvbkNsZWFySGFuZGxlclwiXHJcbiAgICAgIFtFc2NhcGVdPVwib25Fc2NhcGVIYW5kbGVyXCJcclxuICAgID5cclxuICAgIDwvU2VhcmNoQm94PlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbJ3JlYWN0LXJlbmRlcmVyJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYWJTZWFyY2hCb3hDb21wb25lbnQgZXh0ZW5kcyBSZWFjdFdyYXBwZXJDb21wb25lbnQ8SVNlYXJjaEJveFByb3BzPiB7XHJcbiAgQFZpZXdDaGlsZCgncmVhY3ROb2RlJywgeyBzdGF0aWM6IHRydWUgfSkgcHJvdGVjdGVkIHJlYWN0Tm9kZVJlZjogRWxlbWVudFJlZjtcclxuXHJcbiAgQElucHV0KCkgY29tcG9uZW50UmVmPzogSVNlYXJjaEJveFByb3BzWydjb21wb25lbnRSZWYnXTtcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcj86IElTZWFyY2hCb3hQcm9wc1sncGxhY2Vob2xkZXInXTtcclxuICBASW5wdXQoKSB2YWx1ZT86IElTZWFyY2hCb3hQcm9wc1sndmFsdWUnXTtcclxuICBASW5wdXQoKSBjbGFzc05hbWU/OiBJU2VhcmNoQm94UHJvcHNbJ2NsYXNzTmFtZSddO1xyXG4gIEBJbnB1dCgpIGFyaWFMYWJlbD86IElTZWFyY2hCb3hQcm9wc1snYXJpYUxhYmVsJ107XHJcbiAgQElucHV0KCkgdW5kZXJsaW5lZD86IElTZWFyY2hCb3hQcm9wc1sndW5kZXJsaW5lZCddO1xyXG4gIEBJbnB1dCgpIHRoZW1lPzogSVNlYXJjaEJveFByb3BzWyd0aGVtZSddO1xyXG4gIEBJbnB1dCgpIHN0eWxlcz86IElTZWFyY2hCb3hQcm9wc1snc3R5bGVzJ107XHJcbiAgQElucHV0KCkgZGlzYWJsZUFuaW1hdGlvbj86IElTZWFyY2hCb3hQcm9wc1snZGlzYWJsZUFuaW1hdGlvbiddO1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGNsZWFyQnV0dG9uT3B0aW9ucyh2YWx1ZTogSUJ1dHRvbk9wdGlvbnMpIHtcclxuICAgIHRoaXMuX2NsZWFyQnV0dG9uT3B0aW9ucyA9IHZhbHVlO1xyXG5cclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICB0aGlzLmNsZWFyQnV0dG9uUHJvcHMgPSB0aGlzLl90cmFuc2Zvcm1CdXR0b25PcHRpb25zVG9Qcm9wcyh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgY2xlYXJCdXR0b25PcHRpb25zKCk6IElCdXR0b25PcHRpb25zIHtcclxuICAgIHJldHVybiB0aGlzLl9jbGVhckJ1dHRvbk9wdGlvbnM7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBpY29uUHJvcHM/OiBJU2VhcmNoQm94UHJvcHNbJ2ljb25Qcm9wcyddO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHsgbmV3VmFsdWU6IGFueSB9PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvblNlYXJjaCA9IG5ldyBFdmVudEVtaXR0ZXI8eyBuZXdWYWx1ZTogYW55IH0+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uQ2xlYXIgPSBuZXcgRXZlbnRFbWl0dGVyPHsgZXY/OiBhbnkgfT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25Fc2NhcGUgPSBuZXcgRXZlbnRFbWl0dGVyPHsgZXY/OiBhbnkgfT4oKTtcclxuXHJcbiAgY2xlYXJCdXR0b25Qcm9wczogSUJ1dHRvblByb3BzO1xyXG5cclxuICBwcml2YXRlIF9jbGVhckJ1dHRvbk9wdGlvbnM6IElCdXR0b25PcHRpb25zO1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG5nWm9uZTogTmdab25lKSB7XHJcbiAgICBzdXBlcihlbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXIsIHsgbmdab25lIH0pO1xyXG5cclxuICAgIHRoaXMub25DaGFuZ2VIYW5kbGVyID0gdGhpcy5vbkNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25TZWFyY2hIYW5kbGVyID0gdGhpcy5vblNlYXJjaEhhbmRsZXIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25DbGVhckhhbmRsZXIgPSB0aGlzLm9uQ2xlYXJIYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uRXNjYXBlSGFuZGxlciA9IHRoaXMub25Fc2NhcGVIYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZUhhbmRsZXIobmV3VmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5vbkNoYW5nZS5lbWl0KHtcclxuICAgICAgbmV3VmFsdWUsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uU2VhcmNoSGFuZGxlcihuZXdWYWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLm9uU2VhcmNoLmVtaXQoe1xyXG4gICAgICBuZXdWYWx1ZSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25DbGVhckhhbmRsZXIoZXY/OiBhbnkpIHtcclxuICAgIHRoaXMub25DbGVhci5lbWl0KHtcclxuICAgICAgZXY6IChldiAmJiBldi5uYXRpdmVFbGVtZW50KSB8fCBldixcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25Fc2NhcGVIYW5kbGVyKGV2PzogYW55KSB7XHJcbiAgICB0aGlzLm9uRXNjYXBlLmVtaXQoe1xyXG4gICAgICBldjogKGV2ICYmIGV2Lm5hdGl2ZUVsZW1lbnQpIHx8IGV2LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF90cmFuc2Zvcm1CdXR0b25PcHRpb25zVG9Qcm9wcyhvcHRpb25zOiBJQnV0dG9uT3B0aW9ucyk6IElCdXR0b25Qcm9wcyB7XHJcbiAgICBjb25zdCBzaGFyZWRQcm9wZXJ0aWVzID0gb21pdChcclxuICAgICAgb3B0aW9ucyxcclxuICAgICAgJ3JlbmRlckljb24nLFxyXG4gICAgICAncmVuZGVyVGV4dCcsXHJcbiAgICAgICdyZW5kZXJEZXNjcmlwdGlvbicsXHJcbiAgICAgICdyZW5kZXJBcmlhRGVzY3JpcHRpb24nLFxyXG4gICAgICAncmVuZGVyQ2hpbGRyZW4nLFxyXG4gICAgICAncmVuZGVyTWVudUljb24nXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGljb25SZW5kZXJlciA9IHRoaXMuY3JlYXRlSW5wdXRKc3hSZW5kZXJlcihvcHRpb25zLnJlbmRlckljb24pO1xyXG4gICAgY29uc3QgdGV4dFJlbmRlcmVyID0gdGhpcy5jcmVhdGVJbnB1dEpzeFJlbmRlcmVyKG9wdGlvbnMucmVuZGVyVGV4dCk7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvblJlbmRlcmVyID0gdGhpcy5jcmVhdGVJbnB1dEpzeFJlbmRlcmVyKG9wdGlvbnMucmVuZGVyRGVzY3JpcHRpb24pO1xyXG4gICAgY29uc3QgYXJpYURlc2NyaXB0aW9uUmVuZGVyZXIgPSB0aGlzLmNyZWF0ZUlucHV0SnN4UmVuZGVyZXIob3B0aW9ucy5yZW5kZXJBcmlhRGVzY3JpcHRpb24pO1xyXG4gICAgY29uc3QgY2hpbGRyZW5SZW5kZXJlciA9IHRoaXMuY3JlYXRlSW5wdXRKc3hSZW5kZXJlcihvcHRpb25zLnJlbmRlckNoaWxkcmVuKTtcclxuICAgIGNvbnN0IG1lbnVJY29uUmVuZGVyZXIgPSB0aGlzLmNyZWF0ZUlucHV0SnN4UmVuZGVyZXIob3B0aW9ucy5yZW5kZXJNZW51SWNvbik7XHJcblxyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXHJcbiAgICAgIHt9LFxyXG4gICAgICBzaGFyZWRQcm9wZXJ0aWVzLFxyXG4gICAgICBpY29uUmVuZGVyZXIgJiYgKHsgb25SZW5kZXJJY29uOiBwcm9wcyA9PiBpY29uUmVuZGVyZXIocHJvcHMpIH0gYXMgUGljazxJQnV0dG9uUHJvcHMsICdvblJlbmRlckljb24nPiksXHJcbiAgICAgIHRleHRSZW5kZXJlciAmJiAoeyBvblJlbmRlclRleHQ6IHByb3BzID0+IHRleHRSZW5kZXJlcihwcm9wcykgfSBhcyBQaWNrPElCdXR0b25Qcm9wcywgJ29uUmVuZGVyVGV4dCc+KSxcclxuICAgICAgZGVzY3JpcHRpb25SZW5kZXJlciAmJlxyXG4gICAgICAgICh7IG9uUmVuZGVyRGVzY3JpcHRpb246IHByb3BzID0+IGRlc2NyaXB0aW9uUmVuZGVyZXIocHJvcHMpIH0gYXMgUGljazxJQnV0dG9uUHJvcHMsICdvblJlbmRlckRlc2NyaXB0aW9uJz4pLFxyXG4gICAgICBhcmlhRGVzY3JpcHRpb25SZW5kZXJlciAmJlxyXG4gICAgICAgICh7IG9uUmVuZGVyQXJpYURlc2NyaXB0aW9uOiBwcm9wcyA9PiBhcmlhRGVzY3JpcHRpb25SZW5kZXJlcihwcm9wcykgfSBhcyBQaWNrPFxyXG4gICAgICAgICAgSUJ1dHRvblByb3BzLFxyXG4gICAgICAgICAgJ29uUmVuZGVyQXJpYURlc2NyaXB0aW9uJ1xyXG4gICAgICAgID4pLFxyXG4gICAgICBjaGlsZHJlblJlbmRlcmVyICYmXHJcbiAgICAgICAgKHsgb25SZW5kZXJDaGlsZHJlbjogcHJvcHMgPT4gY2hpbGRyZW5SZW5kZXJlcihwcm9wcykgfSBhcyBQaWNrPElCdXR0b25Qcm9wcywgJ29uUmVuZGVyQ2hpbGRyZW4nPiksXHJcbiAgICAgIG1lbnVJY29uUmVuZGVyZXIgJiZcclxuICAgICAgICAoeyBvblJlbmRlck1lbnVJY29uOiBwcm9wcyA9PiBtZW51SWNvblJlbmRlcmVyKHByb3BzKSB9IGFzIFBpY2s8SUJ1dHRvblByb3BzLCAnb25SZW5kZXJNZW51SWNvbic+KVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUJ1dHRvbk9wdGlvbnNcclxuICBleHRlbmRzIE9taXQ8XHJcbiAgICBJQnV0dG9uUHJvcHMsXHJcbiAgICB8ICdvblJlbmRlckljb24nXHJcbiAgICB8ICdvblJlbmRlclRleHQnXHJcbiAgICB8ICdvblJlbmRlckRlc2NyaXB0aW9uJ1xyXG4gICAgfCAnb25SZW5kZXJBcmlhRGVzY3JpcHRpb24nXHJcbiAgICB8ICdvblJlbmRlckNoaWxkcmVuJ1xyXG4gICAgfCAnb25SZW5kZXJNZW51SWNvbidcclxuICA+IHtcclxuICByZWFkb25seSByZW5kZXJJY29uOiBJbnB1dFJlbmRlcmVyT3B0aW9uczxJQnV0dG9uUHJvcHM+O1xyXG4gIHJlYWRvbmx5IHJlbmRlclRleHQ6IElucHV0UmVuZGVyZXJPcHRpb25zPElCdXR0b25Qcm9wcz47XHJcbiAgcmVhZG9ubHkgcmVuZGVyRGVzY3JpcHRpb246IElucHV0UmVuZGVyZXJPcHRpb25zPElCdXR0b25Qcm9wcz47XHJcbiAgcmVhZG9ubHkgcmVuZGVyQXJpYURlc2NyaXB0aW9uOiBJbnB1dFJlbmRlcmVyT3B0aW9uczxJQnV0dG9uUHJvcHM+O1xyXG4gIHJlYWRvbmx5IHJlbmRlckNoaWxkcmVuOiBJbnB1dFJlbmRlcmVyT3B0aW9uczxJQnV0dG9uUHJvcHM+O1xyXG4gIHJlYWRvbmx5IHJlbmRlck1lbnVJY29uOiBJbnB1dFJlbmRlcmVyT3B0aW9uczxJQnV0dG9uUHJvcHM+O1xyXG59XHJcbiJdfQ==