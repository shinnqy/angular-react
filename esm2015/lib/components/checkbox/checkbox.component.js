/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, NgZone, Output, Renderer2, ViewChild, } from '@angular/core';
export class FabCheckboxComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, { ngZone });
        this.onChange = new EventEmitter();
        /* Non-React props, more native support for Angular */
        // support for two-way data binding for `@Input() checked`.
        this.checkedChange = new EventEmitter();
        // coming from React context - we need to bind to this so we can access the Angular Component properties
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onRenderLabel = this.createRenderPropHandler(this.renderLabel);
    }
    /**
     * @param {?=} ev
     * @param {?=} checked
     * @return {?}
     */
    onChangeHandler(ev, checked) {
        this.onChange.emit({
            ev: ev && ev.nativeEvent,
            checked,
        });
        this.checkedChange.emit(checked);
    }
}
FabCheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-checkbox',
                exportAs: 'fabCheckbox',
                template: `
    <Checkbox
      #reactNode
      [componentRef]="componentRef"
      [className]="className"
      [checked]="checked"
      [defaultChecked]="defaultChecked"
      [label]="label"
      [disabled]="disabled"
      [inputProps]="inputProps"
      [boxSide]="boxSide"
      [theme]="theme"
      [ariaLabel]="ariaLabel"
      [ariaLabelledBy]="ariaLabelledBy"
      [ariaDescribedBy]="ariaDescribedBy"
      [ariaPositionInSet]="ariaPositionInSet"
      [ariaSetSize]="ariaSetSize"
      [checkmarkIconProps]="checkmarkIconProps"
      [keytipProps]="keytipProps"
      [styles]="styles"
      [RenderLabel]="renderLabel && onRenderLabel"
      [Change]="onChangeHandler"
    >
    </Checkbox>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabCheckboxComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabCheckboxComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    componentRef: [{ type: Input }],
    className: [{ type: Input }],
    checked: [{ type: Input }],
    defaultChecked: [{ type: Input }],
    label: [{ type: Input }],
    disabled: [{ type: Input }],
    inputProps: [{ type: Input }],
    boxSide: [{ type: Input }],
    theme: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    ariaLabelledBy: [{ type: Input }],
    ariaDescribedBy: [{ type: Input }],
    ariaPositionInSet: [{ type: Input }],
    ariaSetSize: [{ type: Input }],
    checkmarkIconProps: [{ type: Input }],
    keytipProps: [{ type: Input }],
    styles: [{ type: Input }],
    renderLabel: [{ type: Input }],
    onChange: [{ type: Output }],
    checkedChange: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabCheckboxComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabCheckboxComponent.prototype.componentRef;
    /** @type {?} */
    FabCheckboxComponent.prototype.className;
    /** @type {?} */
    FabCheckboxComponent.prototype.checked;
    /** @type {?} */
    FabCheckboxComponent.prototype.defaultChecked;
    /** @type {?} */
    FabCheckboxComponent.prototype.label;
    /** @type {?} */
    FabCheckboxComponent.prototype.disabled;
    /** @type {?} */
    FabCheckboxComponent.prototype.inputProps;
    /** @type {?} */
    FabCheckboxComponent.prototype.boxSide;
    /** @type {?} */
    FabCheckboxComponent.prototype.theme;
    /** @type {?} */
    FabCheckboxComponent.prototype.ariaLabel;
    /** @type {?} */
    FabCheckboxComponent.prototype.ariaLabelledBy;
    /** @type {?} */
    FabCheckboxComponent.prototype.ariaDescribedBy;
    /** @type {?} */
    FabCheckboxComponent.prototype.ariaPositionInSet;
    /** @type {?} */
    FabCheckboxComponent.prototype.ariaSetSize;
    /** @type {?} */
    FabCheckboxComponent.prototype.checkmarkIconProps;
    /** @type {?} */
    FabCheckboxComponent.prototype.keytipProps;
    /** @type {?} */
    FabCheckboxComponent.prototype.styles;
    /** @type {?} */
    FabCheckboxComponent.prototype.renderLabel;
    /** @type {?} */
    FabCheckboxComponent.prototype.onChange;
    /** @type {?} */
    FabCheckboxComponent.prototype.checkedChange;
    /** @type {?} */
    FabCheckboxComponent.prototype.onRenderLabel;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljL2xpYi9jb21wb25lbnRzL2NoZWNrYm94LyIsInNvdXJjZXMiOlsiY2hlY2tib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBdUMscUJBQXFCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUVOLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBbUN2QixNQUFNLE9BQU8sb0JBQXFCLFNBQVEscUJBQXFDOzs7Ozs7O0lBK0I3RSxZQUFZLFVBQXNCLEVBQUUsaUJBQW9DLEVBQUUsUUFBbUIsRUFBRSxNQUFjO1FBQzNHLEtBQUssQ0FBQyxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztRQVQxQyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQXFDLENBQUM7OztRQUlqRSxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFPN0Qsd0dBQXdHO1FBQ3hHLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdEUsQ0FBQzs7Ozs7O0lBRUQsZUFBZSxDQUFDLEVBQThDLEVBQUUsT0FBaUI7UUFDL0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDakIsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsV0FBVztZQUN4QixPQUFPO1NBQ1IsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7O1lBaEZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JUO2dCQUVELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO3lCQUR0QyxnQkFBZ0I7YUFFMUI7Ozs7WUExQ0MsVUFBVTtZQUZWLGlCQUFpQjtZQVFqQixTQUFTO1lBSFQsTUFBTTs7OzJCQXlDTCxTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsyQkFFdkMsS0FBSzt3QkFDTCxLQUFLO3NCQUNMLEtBQUs7NkJBQ0wsS0FBSztvQkFDTCxLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsS0FBSztzQkFDTCxLQUFLO29CQUNMLEtBQUs7d0JBQ0wsS0FBSzs2QkFDTCxLQUFLOzhCQUNMLEtBQUs7Z0NBQ0wsS0FBSzswQkFDTCxLQUFLO2lDQUNMLEtBQUs7MEJBQ0wsS0FBSztxQkFDTCxLQUFLOzBCQUVMLEtBQUs7dUJBRUwsTUFBTTs0QkFJTixNQUFNOzs7Ozs7O0lBMUJQLDRDQUE2RTs7SUFFN0UsNENBQXVEOztJQUN2RCx5Q0FBaUQ7O0lBQ2pELHVDQUE2Qzs7SUFDN0MsOENBQTJEOztJQUMzRCxxQ0FBeUM7O0lBQ3pDLHdDQUErQzs7SUFDL0MsMENBQWtGOztJQUNsRix1Q0FBNkM7O0lBQzdDLHFDQUF5Qzs7SUFDekMseUNBQWlEOztJQUNqRCw4Q0FBMkQ7O0lBQzNELCtDQUE2RDs7SUFDN0QsaURBQWlFOztJQUNqRSwyQ0FBcUQ7O0lBQ3JELGtEQUFtRTs7SUFDbkUsMkNBQXFEOztJQUNyRCxzQ0FBMkM7O0lBRTNDLDJDQUE0RDs7SUFFNUQsd0NBQW9GOztJQUlwRiw2Q0FBK0Q7O0lBRS9ELDZDQUFzRyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyBJbnB1dFJlbmRlcmVyT3B0aW9ucywgSnN4UmVuZGVyRnVuYywgUmVhY3RXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXItcmVhY3QvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE5nWm9uZSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3Q2hpbGQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElDaGVja2JveFByb3BzIH0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvQ2hlY2tib3gnO1xyXG5pbXBvcnQgeyBGb3JtRXZlbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZhYi1jaGVja2JveCcsXHJcbiAgZXhwb3J0QXM6ICdmYWJDaGVja2JveCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxDaGVja2JveFxyXG4gICAgICAjcmVhY3ROb2RlXHJcbiAgICAgIFtjb21wb25lbnRSZWZdPVwiY29tcG9uZW50UmVmXCJcclxuICAgICAgW2NsYXNzTmFtZV09XCJjbGFzc05hbWVcIlxyXG4gICAgICBbY2hlY2tlZF09XCJjaGVja2VkXCJcclxuICAgICAgW2RlZmF1bHRDaGVja2VkXT1cImRlZmF1bHRDaGVja2VkXCJcclxuICAgICAgW2xhYmVsXT1cImxhYmVsXCJcclxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgW2lucHV0UHJvcHNdPVwiaW5wdXRQcm9wc1wiXHJcbiAgICAgIFtib3hTaWRlXT1cImJveFNpZGVcIlxyXG4gICAgICBbdGhlbWVdPVwidGhlbWVcIlxyXG4gICAgICBbYXJpYUxhYmVsXT1cImFyaWFMYWJlbFwiXHJcbiAgICAgIFthcmlhTGFiZWxsZWRCeV09XCJhcmlhTGFiZWxsZWRCeVwiXHJcbiAgICAgIFthcmlhRGVzY3JpYmVkQnldPVwiYXJpYURlc2NyaWJlZEJ5XCJcclxuICAgICAgW2FyaWFQb3NpdGlvbkluU2V0XT1cImFyaWFQb3NpdGlvbkluU2V0XCJcclxuICAgICAgW2FyaWFTZXRTaXplXT1cImFyaWFTZXRTaXplXCJcclxuICAgICAgW2NoZWNrbWFya0ljb25Qcm9wc109XCJjaGVja21hcmtJY29uUHJvcHNcIlxyXG4gICAgICBba2V5dGlwUHJvcHNdPVwia2V5dGlwUHJvcHNcIlxyXG4gICAgICBbc3R5bGVzXT1cInN0eWxlc1wiXHJcbiAgICAgIFtSZW5kZXJMYWJlbF09XCJyZW5kZXJMYWJlbCAmJiBvblJlbmRlckxhYmVsXCJcclxuICAgICAgW0NoYW5nZV09XCJvbkNoYW5nZUhhbmRsZXJcIlxyXG4gICAgPlxyXG4gICAgPC9DaGVja2JveD5cclxuICBgLFxyXG4gIHN0eWxlczogWydyZWFjdC1yZW5kZXJlciddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmFiQ2hlY2tib3hDb21wb25lbnQgZXh0ZW5kcyBSZWFjdFdyYXBwZXJDb21wb25lbnQ8SUNoZWNrYm94UHJvcHM+IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBAVmlld0NoaWxkKCdyZWFjdE5vZGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcm90ZWN0ZWQgcmVhY3ROb2RlUmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICBASW5wdXQoKSBjb21wb25lbnRSZWY/OiBJQ2hlY2tib3hQcm9wc1snY29tcG9uZW50UmVmJ107XHJcbiAgQElucHV0KCkgY2xhc3NOYW1lPzogSUNoZWNrYm94UHJvcHNbJ2NsYXNzTmFtZSddO1xyXG4gIEBJbnB1dCgpIGNoZWNrZWQ/OiBJQ2hlY2tib3hQcm9wc1snY2hlY2tlZCddO1xyXG4gIEBJbnB1dCgpIGRlZmF1bHRDaGVja2VkPzogSUNoZWNrYm94UHJvcHNbJ2RlZmF1bHRDaGVja2VkJ107XHJcbiAgQElucHV0KCkgbGFiZWw/OiBJQ2hlY2tib3hQcm9wc1snbGFiZWwnXTtcclxuICBASW5wdXQoKSBkaXNhYmxlZD86IElDaGVja2JveFByb3BzWydkaXNhYmxlZCddO1xyXG4gIEBJbnB1dCgpIGlucHV0UHJvcHM/OiBSZWFjdC5CdXR0b25IVE1MQXR0cmlidXRlczxIVE1MRWxlbWVudCB8IEhUTUxCdXR0b25FbGVtZW50PjtcclxuICBASW5wdXQoKSBib3hTaWRlPzogSUNoZWNrYm94UHJvcHNbJ2JveFNpZGUnXTtcclxuICBASW5wdXQoKSB0aGVtZT86IElDaGVja2JveFByb3BzWyd0aGVtZSddO1xyXG4gIEBJbnB1dCgpIGFyaWFMYWJlbD86IElDaGVja2JveFByb3BzWydhcmlhTGFiZWwnXTtcclxuICBASW5wdXQoKSBhcmlhTGFiZWxsZWRCeT86IElDaGVja2JveFByb3BzWydhcmlhTGFiZWxsZWRCeSddO1xyXG4gIEBJbnB1dCgpIGFyaWFEZXNjcmliZWRCeT86IElDaGVja2JveFByb3BzWydhcmlhRGVzY3JpYmVkQnknXTtcclxuICBASW5wdXQoKSBhcmlhUG9zaXRpb25JblNldD86IElDaGVja2JveFByb3BzWydhcmlhUG9zaXRpb25JblNldCddO1xyXG4gIEBJbnB1dCgpIGFyaWFTZXRTaXplPzogSUNoZWNrYm94UHJvcHNbJ2FyaWFTZXRTaXplJ107XHJcbiAgQElucHV0KCkgY2hlY2ttYXJrSWNvblByb3BzPzogSUNoZWNrYm94UHJvcHNbJ2NoZWNrbWFya0ljb25Qcm9wcyddO1xyXG4gIEBJbnB1dCgpIGtleXRpcFByb3BzPzogSUNoZWNrYm94UHJvcHNbJ2tleXRpcFByb3BzJ107XHJcbiAgQElucHV0KCkgc3R5bGVzPzogSUNoZWNrYm94UHJvcHNbJ3N0eWxlcyddO1xyXG5cclxuICBASW5wdXQoKSByZW5kZXJMYWJlbD86IElucHV0UmVuZGVyZXJPcHRpb25zPElDaGVja2JveFByb3BzPjtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx7IGV2PzogRXZlbnQ7IGNoZWNrZWQ/OiBib29sZWFuIH0+KCk7XHJcblxyXG4gIC8qIE5vbi1SZWFjdCBwcm9wcywgbW9yZSBuYXRpdmUgc3VwcG9ydCBmb3IgQW5ndWxhciAqL1xyXG4gIC8vIHN1cHBvcnQgZm9yIHR3by13YXkgZGF0YSBiaW5kaW5nIGZvciBgQElucHV0KCkgY2hlY2tlZGAuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNoZWNrZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIG9uUmVuZGVyTGFiZWw6IChwcm9wcz86IElDaGVja2JveFByb3BzLCBkZWZhdWx0UmVuZGVyPzogSnN4UmVuZGVyRnVuYzxJQ2hlY2tib3hQcm9wcz4pID0+IEpTWC5FbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG5nWm9uZTogTmdab25lKSB7XHJcbiAgICBzdXBlcihlbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXIsIHsgbmdab25lIH0pO1xyXG5cclxuICAgIC8vIGNvbWluZyBmcm9tIFJlYWN0IGNvbnRleHQgLSB3ZSBuZWVkIHRvIGJpbmQgdG8gdGhpcyBzbyB3ZSBjYW4gYWNjZXNzIHRoZSBBbmd1bGFyIENvbXBvbmVudCBwcm9wZXJ0aWVzXHJcbiAgICB0aGlzLm9uQ2hhbmdlSGFuZGxlciA9IHRoaXMub25DaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMub25SZW5kZXJMYWJlbCA9IHRoaXMuY3JlYXRlUmVuZGVyUHJvcEhhbmRsZXIodGhpcy5yZW5kZXJMYWJlbCk7XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZUhhbmRsZXIoZXY/OiBGb3JtRXZlbnQ8SFRNTEVsZW1lbnQgfCBIVE1MSW5wdXRFbGVtZW50PiwgY2hlY2tlZD86IGJvb2xlYW4pIHtcclxuICAgIHRoaXMub25DaGFuZ2UuZW1pdCh7XHJcbiAgICAgIGV2OiBldiAmJiBldi5uYXRpdmVFdmVudCxcclxuICAgICAgY2hlY2tlZCxcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY2hlY2tlZENoYW5nZS5lbWl0KGNoZWNrZWQpO1xyXG4gIH1cclxufVxyXG4iXX0=