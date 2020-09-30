/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild, } from '@angular/core';
export class FabChoiceGroupComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer);
        this.onChanged = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onChangedHandler = this.onChangedHandler.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }
    /**
     * @param {?} option
     * @param {?=} evt
     * @return {?}
     */
    onChangedHandler(option, evt) {
        this.onChanged.emit({
            option,
            evt: evt && evt.nativeEvent,
        });
    }
    /**
     * @param {?=} ev
     * @param {?=} option
     * @return {?}
     */
    onChangeHandler(ev, option) {
        this.onChange.emit({
            ev: ev && ev.nativeEvent,
            option,
        });
    }
}
FabChoiceGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-choice-group',
                exportAs: 'fabChoiceGroup',
                template: `
    <ChoiceGroup
      #reactNode
      [componentRef]="componentRef"
      [options]="options"
      [defaultSelectedKey]="defaultSelectedKey"
      [selectedKey]="selectedKey"
      [label]="label"
      [required]="required"
      [theme]="theme"
      [styles]="styles"
      [ariaLabelledBy]="ariaLabelledBy"
      [Changed]="onChangedHandler"
      [Change]="onChangeHandler"
    >
    </ChoiceGroup>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabChoiceGroupComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
FabChoiceGroupComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    componentRef: [{ type: Input }],
    options: [{ type: Input }],
    defaultSelectedKey: [{ type: Input }],
    selectedKey: [{ type: Input }],
    label: [{ type: Input }],
    theme: [{ type: Input }],
    styles: [{ type: Input }],
    ariaLabelledBy: [{ type: Input }],
    required: [{ type: Input }],
    onChanged: [{ type: Output }],
    onChange: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabChoiceGroupComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabChoiceGroupComponent.prototype.componentRef;
    /** @type {?} */
    FabChoiceGroupComponent.prototype.options;
    /** @type {?} */
    FabChoiceGroupComponent.prototype.defaultSelectedKey;
    /** @type {?} */
    FabChoiceGroupComponent.prototype.selectedKey;
    /** @type {?} */
    FabChoiceGroupComponent.prototype.label;
    /** @type {?} */
    FabChoiceGroupComponent.prototype.theme;
    /** @type {?} */
    FabChoiceGroupComponent.prototype.styles;
    /** @type {?} */
    FabChoiceGroupComponent.prototype.ariaLabelledBy;
    /**
     * HTML Input props
     * @type {?}
     */
    FabChoiceGroupComponent.prototype.required;
    /** @type {?} */
    FabChoiceGroupComponent.prototype.onChanged;
    /** @type {?} */
    FabChoiceGroupComponent.prototype.onChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hvaWNlLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Nob2ljZS1ncm91cC9jaG9pY2UtZ3JvdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzVELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQTBCdkIsTUFBTSxPQUFPLHVCQUF3QixTQUFRLHFCQUF3Qzs7Ozs7O0lBa0JuRixZQUFZLFVBQXNCLEVBQUUsaUJBQW9DLEVBQUUsUUFBbUI7UUFDM0YsS0FBSyxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUo5QixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQStDLENBQUM7UUFDNUUsYUFBUSxHQUFHLElBQUksWUFBWSxFQUErQyxDQUFDO1FBSzVGLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsTUFBMEIsRUFBRSxHQUFxRDtRQUNoRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztZQUNsQixNQUFNO1lBQ04sR0FBRyxFQUFFLEdBQUcsSUFBSSxHQUFHLENBQUMsV0FBVztTQUM1QixDQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFRCxlQUFlLENBQUMsRUFBb0QsRUFBRSxNQUEyQjtRQUMvRixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNqQixFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxXQUFXO1lBQ3hCLE1BQU07U0FDUCxDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUE1REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztHQWdCVDtnQkFFRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTt5QkFEdEMsZ0JBQWdCO2FBRTFCOzs7O1lBL0JDLFVBQVU7WUFGVixpQkFBaUI7WUFNakIsU0FBUzs7OzJCQTZCUixTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsyQkFFdkMsS0FBSztzQkFDTCxLQUFLO2lDQUNMLEtBQUs7MEJBQ0wsS0FBSztvQkFDTCxLQUFLO29CQUNMLEtBQUs7cUJBQ0wsS0FBSzs2QkFDTCxLQUFLO3VCQUdMLEtBQUs7d0JBRUwsTUFBTTt1QkFDTixNQUFNOzs7Ozs7O0lBZlAsK0NBQTZFOztJQUU3RSwrQ0FBMEQ7O0lBQzFELDBDQUFnRDs7SUFDaEQscURBQXNFOztJQUN0RSw4Q0FBd0Q7O0lBQ3hELHdDQUE0Qzs7SUFDNUMsd0NBQTRDOztJQUM1Qyx5Q0FBOEM7O0lBQzlDLGlEQUE4RDs7Ozs7SUFHOUQsMkNBQWtEOztJQUVsRCw0Q0FBK0Y7O0lBQy9GLDJDQUE4RiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyBSZWFjdFdyYXBwZXJDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9jb3JlJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3Q2hpbGQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElDaG9pY2VHcm91cE9wdGlvbiwgSUNob2ljZUdyb3VwUHJvcHMgfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9DaG9pY2VHcm91cCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZhYi1jaG9pY2UtZ3JvdXAnLFxyXG4gIGV4cG9ydEFzOiAnZmFiQ2hvaWNlR3JvdXAnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8Q2hvaWNlR3JvdXBcclxuICAgICAgI3JlYWN0Tm9kZVxyXG4gICAgICBbY29tcG9uZW50UmVmXT1cImNvbXBvbmVudFJlZlwiXHJcbiAgICAgIFtvcHRpb25zXT1cIm9wdGlvbnNcIlxyXG4gICAgICBbZGVmYXVsdFNlbGVjdGVkS2V5XT1cImRlZmF1bHRTZWxlY3RlZEtleVwiXHJcbiAgICAgIFtzZWxlY3RlZEtleV09XCJzZWxlY3RlZEtleVwiXHJcbiAgICAgIFtsYWJlbF09XCJsYWJlbFwiXHJcbiAgICAgIFtyZXF1aXJlZF09XCJyZXF1aXJlZFwiXHJcbiAgICAgIFt0aGVtZV09XCJ0aGVtZVwiXHJcbiAgICAgIFtzdHlsZXNdPVwic3R5bGVzXCJcclxuICAgICAgW2FyaWFMYWJlbGxlZEJ5XT1cImFyaWFMYWJlbGxlZEJ5XCJcclxuICAgICAgW0NoYW5nZWRdPVwib25DaGFuZ2VkSGFuZGxlclwiXHJcbiAgICAgIFtDaGFuZ2VdPVwib25DaGFuZ2VIYW5kbGVyXCJcclxuICAgID5cclxuICAgIDwvQ2hvaWNlR3JvdXA+XHJcbiAgYCxcclxuICBzdHlsZXM6IFsncmVhY3QtcmVuZGVyZXInXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZhYkNob2ljZUdyb3VwQ29tcG9uZW50IGV4dGVuZHMgUmVhY3RXcmFwcGVyQ29tcG9uZW50PElDaG9pY2VHcm91cFByb3BzPiB7XHJcbiAgQFZpZXdDaGlsZCgncmVhY3ROb2RlJywgeyBzdGF0aWM6IHRydWUgfSkgcHJvdGVjdGVkIHJlYWN0Tm9kZVJlZjogRWxlbWVudFJlZjtcclxuXHJcbiAgQElucHV0KCkgY29tcG9uZW50UmVmPzogSUNob2ljZUdyb3VwUHJvcHNbJ2NvbXBvbmVudFJlZiddO1xyXG4gIEBJbnB1dCgpIG9wdGlvbnM/OiBJQ2hvaWNlR3JvdXBQcm9wc1snb3B0aW9ucyddO1xyXG4gIEBJbnB1dCgpIGRlZmF1bHRTZWxlY3RlZEtleT86IElDaG9pY2VHcm91cFByb3BzWydkZWZhdWx0U2VsZWN0ZWRLZXknXTtcclxuICBASW5wdXQoKSBzZWxlY3RlZEtleT86IElDaG9pY2VHcm91cFByb3BzWydzZWxlY3RlZEtleSddO1xyXG4gIEBJbnB1dCgpIGxhYmVsPzogSUNob2ljZUdyb3VwUHJvcHNbJ2xhYmVsJ107XHJcbiAgQElucHV0KCkgdGhlbWU/OiBJQ2hvaWNlR3JvdXBQcm9wc1sndGhlbWUnXTtcclxuICBASW5wdXQoKSBzdHlsZXM/OiBJQ2hvaWNlR3JvdXBQcm9wc1snc3R5bGVzJ107XHJcbiAgQElucHV0KCkgYXJpYUxhYmVsbGVkQnk/OiBJQ2hvaWNlR3JvdXBQcm9wc1snYXJpYUxhYmVsbGVkQnknXTtcclxuXHJcbiAgLyoqIEhUTUwgSW5wdXQgcHJvcHMgKi9cclxuICBASW5wdXQoKSByZXF1aXJlZD86IElDaG9pY2VHcm91cFByb3BzWydyZXF1aXJlZCddO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25DaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjx7IG9wdGlvbjogSUNob2ljZUdyb3VwT3B0aW9uOyBldnQ/OiBFdmVudCB9PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8eyBldj86IEV2ZW50OyBvcHRpb24/OiBJQ2hvaWNlR3JvdXBPcHRpb24gfT4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcbiAgICBzdXBlcihlbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXIpO1xyXG5cclxuICAgIHRoaXMub25DaGFuZ2VkSGFuZGxlciA9IHRoaXMub25DaGFuZ2VkSGFuZGxlci5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbkNoYW5nZUhhbmRsZXIgPSB0aGlzLm9uQ2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2VkSGFuZGxlcihvcHRpb246IElDaG9pY2VHcm91cE9wdGlvbiwgZXZ0PzogUmVhY3QuRm9ybUV2ZW50PEhUTUxFbGVtZW50IHwgSFRNTElucHV0RWxlbWVudD4pIHtcclxuICAgIHRoaXMub25DaGFuZ2VkLmVtaXQoe1xyXG4gICAgICBvcHRpb24sXHJcbiAgICAgIGV2dDogZXZ0ICYmIGV2dC5uYXRpdmVFdmVudCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2VIYW5kbGVyKGV2PzogUmVhY3QuRm9ybUV2ZW50PEhUTUxFbGVtZW50IHwgSFRNTElucHV0RWxlbWVudD4sIG9wdGlvbj86IElDaG9pY2VHcm91cE9wdGlvbikge1xyXG4gICAgdGhpcy5vbkNoYW5nZS5lbWl0KHtcclxuICAgICAgZXY6IGV2ICYmIGV2Lm5hdGl2ZUV2ZW50LFxyXG4gICAgICBvcHRpb24sXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19