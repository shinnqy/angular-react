/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, NgZone, Output, Renderer2, ViewChild, } from '@angular/core';
var FabCheckboxComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabCheckboxComponent, _super);
    function FabCheckboxComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone }) || this;
        _this.onChange = new EventEmitter();
        /* Non-React props, more native support for Angular */
        // support for two-way data binding for `@Input() checked`.
        _this.checkedChange = new EventEmitter();
        // coming from React context - we need to bind to this so we can access the Angular Component properties
        _this.onChangeHandler = _this.onChangeHandler.bind(_this);
        return _this;
    }
    /**
     * @return {?}
     */
    FabCheckboxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onRenderLabel = this.createRenderPropHandler(this.renderLabel);
    };
    /**
     * @param {?=} ev
     * @param {?=} checked
     * @return {?}
     */
    FabCheckboxComponent.prototype.onChangeHandler = /**
     * @param {?=} ev
     * @param {?=} checked
     * @return {?}
     */
    function (ev, checked) {
        this.onChange.emit({
            ev: ev && ev.nativeEvent,
            checked: checked,
        });
        this.checkedChange.emit(checked);
    };
    FabCheckboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-checkbox',
                    exportAs: 'fabCheckbox',
                    template: "\n    <Checkbox\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [className]=\"className\"\n      [checked]=\"checked\"\n      [defaultChecked]=\"defaultChecked\"\n      [label]=\"label\"\n      [disabled]=\"disabled\"\n      [inputProps]=\"inputProps\"\n      [boxSide]=\"boxSide\"\n      [theme]=\"theme\"\n      [ariaLabel]=\"ariaLabel\"\n      [ariaLabelledBy]=\"ariaLabelledBy\"\n      [ariaDescribedBy]=\"ariaDescribedBy\"\n      [ariaPositionInSet]=\"ariaPositionInSet\"\n      [ariaSetSize]=\"ariaSetSize\"\n      [checkmarkIconProps]=\"checkmarkIconProps\"\n      [keytipProps]=\"keytipProps\"\n      [styles]=\"styles\"\n      [RenderLabel]=\"renderLabel && onRenderLabel\"\n      [Change]=\"onChangeHandler\"\n    >\n    </Checkbox>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabCheckboxComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
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
    return FabCheckboxComponent;
}(ReactWrapperComponent));
export { FabCheckboxComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQXVDLHFCQUFxQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakcsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFFTixNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUl2QjtJQStCMEMsZ0RBQXFDO0lBK0I3RSw4QkFBWSxVQUFzQixFQUFFLGlCQUFvQyxFQUFFLFFBQW1CLEVBQUUsTUFBYztRQUE3RyxZQUNFLGtCQUFNLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDLFNBSTNEO1FBYmtCLGNBQVEsR0FBRyxJQUFJLFlBQVksRUFBcUMsQ0FBQzs7O1FBSWpFLG1CQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQU83RCx3R0FBd0c7UUFDeEcsS0FBSSxDQUFDLGVBQWUsR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQzs7SUFDekQsQ0FBQzs7OztJQUVELHVDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN0RSxDQUFDOzs7Ozs7SUFFRCw4Q0FBZTs7Ozs7SUFBZixVQUFnQixFQUE4QyxFQUFFLE9BQWlCO1FBQy9FLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2pCLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLFdBQVc7WUFDeEIsT0FBTyxTQUFBO1NBQ1IsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Z0JBaEZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFFBQVEsRUFBRSw0dkJBd0JUO29CQUVELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzZCQUR0QyxnQkFBZ0I7aUJBRTFCOzs7O2dCQTFDQyxVQUFVO2dCQUZWLGlCQUFpQjtnQkFRakIsU0FBUztnQkFIVCxNQUFNOzs7K0JBeUNMLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOytCQUV2QyxLQUFLOzRCQUNMLEtBQUs7MEJBQ0wsS0FBSztpQ0FDTCxLQUFLO3dCQUNMLEtBQUs7MkJBQ0wsS0FBSzs2QkFDTCxLQUFLOzBCQUNMLEtBQUs7d0JBQ0wsS0FBSzs0QkFDTCxLQUFLO2lDQUNMLEtBQUs7a0NBQ0wsS0FBSztvQ0FDTCxLQUFLOzhCQUNMLEtBQUs7cUNBQ0wsS0FBSzs4QkFDTCxLQUFLO3lCQUNMLEtBQUs7OEJBRUwsS0FBSzsyQkFFTCxNQUFNO2dDQUlOLE1BQU07O0lBdUJULDJCQUFDO0NBQUEsQUFqRkQsQ0ErQjBDLHFCQUFxQixHQWtEOUQ7U0FsRFksb0JBQW9COzs7Ozs7SUFDL0IsNENBQTZFOztJQUU3RSw0Q0FBdUQ7O0lBQ3ZELHlDQUFpRDs7SUFDakQsdUNBQTZDOztJQUM3Qyw4Q0FBMkQ7O0lBQzNELHFDQUF5Qzs7SUFDekMsd0NBQStDOztJQUMvQywwQ0FBa0Y7O0lBQ2xGLHVDQUE2Qzs7SUFDN0MscUNBQXlDOztJQUN6Qyx5Q0FBaUQ7O0lBQ2pELDhDQUEyRDs7SUFDM0QsK0NBQTZEOztJQUM3RCxpREFBaUU7O0lBQ2pFLDJDQUFxRDs7SUFDckQsa0RBQW1FOztJQUNuRSwyQ0FBcUQ7O0lBQ3JELHNDQUEyQzs7SUFFM0MsMkNBQTREOztJQUU1RCx3Q0FBb0Y7O0lBSXBGLDZDQUErRDs7SUFFL0QsNkNBQXNHIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IElucHV0UmVuZGVyZXJPcHRpb25zLCBKc3hSZW5kZXJGdW5jLCBSZWFjdFdyYXBwZXJDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9jb3JlJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFZpZXdDaGlsZCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSUNoZWNrYm94UHJvcHMgfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9DaGVja2JveCc7XHJcbmltcG9ydCB7IEZvcm1FdmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZmFiLWNoZWNrYm94JyxcclxuICBleHBvcnRBczogJ2ZhYkNoZWNrYm94JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPENoZWNrYm94XHJcbiAgICAgICNyZWFjdE5vZGVcclxuICAgICAgW2NvbXBvbmVudFJlZl09XCJjb21wb25lbnRSZWZcIlxyXG4gICAgICBbY2xhc3NOYW1lXT1cImNsYXNzTmFtZVwiXHJcbiAgICAgIFtjaGVja2VkXT1cImNoZWNrZWRcIlxyXG4gICAgICBbZGVmYXVsdENoZWNrZWRdPVwiZGVmYXVsdENoZWNrZWRcIlxyXG4gICAgICBbbGFiZWxdPVwibGFiZWxcIlxyXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICBbaW5wdXRQcm9wc109XCJpbnB1dFByb3BzXCJcclxuICAgICAgW2JveFNpZGVdPVwiYm94U2lkZVwiXHJcbiAgICAgIFt0aGVtZV09XCJ0aGVtZVwiXHJcbiAgICAgIFthcmlhTGFiZWxdPVwiYXJpYUxhYmVsXCJcclxuICAgICAgW2FyaWFMYWJlbGxlZEJ5XT1cImFyaWFMYWJlbGxlZEJ5XCJcclxuICAgICAgW2FyaWFEZXNjcmliZWRCeV09XCJhcmlhRGVzY3JpYmVkQnlcIlxyXG4gICAgICBbYXJpYVBvc2l0aW9uSW5TZXRdPVwiYXJpYVBvc2l0aW9uSW5TZXRcIlxyXG4gICAgICBbYXJpYVNldFNpemVdPVwiYXJpYVNldFNpemVcIlxyXG4gICAgICBbY2hlY2ttYXJrSWNvblByb3BzXT1cImNoZWNrbWFya0ljb25Qcm9wc1wiXHJcbiAgICAgIFtrZXl0aXBQcm9wc109XCJrZXl0aXBQcm9wc1wiXHJcbiAgICAgIFtzdHlsZXNdPVwic3R5bGVzXCJcclxuICAgICAgW1JlbmRlckxhYmVsXT1cInJlbmRlckxhYmVsICYmIG9uUmVuZGVyTGFiZWxcIlxyXG4gICAgICBbQ2hhbmdlXT1cIm9uQ2hhbmdlSGFuZGxlclwiXHJcbiAgICA+XHJcbiAgICA8L0NoZWNrYm94PlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbJ3JlYWN0LXJlbmRlcmVyJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYWJDaGVja2JveENvbXBvbmVudCBleHRlbmRzIFJlYWN0V3JhcHBlckNvbXBvbmVudDxJQ2hlY2tib3hQcm9wcz4gaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBWaWV3Q2hpbGQoJ3JlYWN0Tm9kZScsIHsgc3RhdGljOiB0cnVlIH0pIHByb3RlY3RlZCByZWFjdE5vZGVSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBJbnB1dCgpIGNvbXBvbmVudFJlZj86IElDaGVja2JveFByb3BzWydjb21wb25lbnRSZWYnXTtcclxuICBASW5wdXQoKSBjbGFzc05hbWU/OiBJQ2hlY2tib3hQcm9wc1snY2xhc3NOYW1lJ107XHJcbiAgQElucHV0KCkgY2hlY2tlZD86IElDaGVja2JveFByb3BzWydjaGVja2VkJ107XHJcbiAgQElucHV0KCkgZGVmYXVsdENoZWNrZWQ/OiBJQ2hlY2tib3hQcm9wc1snZGVmYXVsdENoZWNrZWQnXTtcclxuICBASW5wdXQoKSBsYWJlbD86IElDaGVja2JveFByb3BzWydsYWJlbCddO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkPzogSUNoZWNrYm94UHJvcHNbJ2Rpc2FibGVkJ107XHJcbiAgQElucHV0KCkgaW5wdXRQcm9wcz86IFJlYWN0LkJ1dHRvbkhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50IHwgSFRNTEJ1dHRvbkVsZW1lbnQ+O1xyXG4gIEBJbnB1dCgpIGJveFNpZGU/OiBJQ2hlY2tib3hQcm9wc1snYm94U2lkZSddO1xyXG4gIEBJbnB1dCgpIHRoZW1lPzogSUNoZWNrYm94UHJvcHNbJ3RoZW1lJ107XHJcbiAgQElucHV0KCkgYXJpYUxhYmVsPzogSUNoZWNrYm94UHJvcHNbJ2FyaWFMYWJlbCddO1xyXG4gIEBJbnB1dCgpIGFyaWFMYWJlbGxlZEJ5PzogSUNoZWNrYm94UHJvcHNbJ2FyaWFMYWJlbGxlZEJ5J107XHJcbiAgQElucHV0KCkgYXJpYURlc2NyaWJlZEJ5PzogSUNoZWNrYm94UHJvcHNbJ2FyaWFEZXNjcmliZWRCeSddO1xyXG4gIEBJbnB1dCgpIGFyaWFQb3NpdGlvbkluU2V0PzogSUNoZWNrYm94UHJvcHNbJ2FyaWFQb3NpdGlvbkluU2V0J107XHJcbiAgQElucHV0KCkgYXJpYVNldFNpemU/OiBJQ2hlY2tib3hQcm9wc1snYXJpYVNldFNpemUnXTtcclxuICBASW5wdXQoKSBjaGVja21hcmtJY29uUHJvcHM/OiBJQ2hlY2tib3hQcm9wc1snY2hlY2ttYXJrSWNvblByb3BzJ107XHJcbiAgQElucHV0KCkga2V5dGlwUHJvcHM/OiBJQ2hlY2tib3hQcm9wc1sna2V5dGlwUHJvcHMnXTtcclxuICBASW5wdXQoKSBzdHlsZXM/OiBJQ2hlY2tib3hQcm9wc1snc3R5bGVzJ107XHJcblxyXG4gIEBJbnB1dCgpIHJlbmRlckxhYmVsPzogSW5wdXRSZW5kZXJlck9wdGlvbnM8SUNoZWNrYm94UHJvcHM+O1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHsgZXY/OiBFdmVudDsgY2hlY2tlZD86IGJvb2xlYW4gfT4oKTtcclxuXHJcbiAgLyogTm9uLVJlYWN0IHByb3BzLCBtb3JlIG5hdGl2ZSBzdXBwb3J0IGZvciBBbmd1bGFyICovXHJcbiAgLy8gc3VwcG9ydCBmb3IgdHdvLXdheSBkYXRhIGJpbmRpbmcgZm9yIGBASW5wdXQoKSBjaGVja2VkYC5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2hlY2tlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgb25SZW5kZXJMYWJlbDogKHByb3BzPzogSUNoZWNrYm94UHJvcHMsIGRlZmF1bHRSZW5kZXI/OiBKc3hSZW5kZXJGdW5jPElDaGVja2JveFByb3BzPikgPT4gSlNYLkVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmdab25lOiBOZ1pvbmUpIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlciwgeyBuZ1pvbmUgfSk7XHJcblxyXG4gICAgLy8gY29taW5nIGZyb20gUmVhY3QgY29udGV4dCAtIHdlIG5lZWQgdG8gYmluZCB0byB0aGlzIHNvIHdlIGNhbiBhY2Nlc3MgdGhlIEFuZ3VsYXIgQ29tcG9uZW50IHByb3BlcnRpZXNcclxuICAgIHRoaXMub25DaGFuZ2VIYW5kbGVyID0gdGhpcy5vbkNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5vblJlbmRlckxhYmVsID0gdGhpcy5jcmVhdGVSZW5kZXJQcm9wSGFuZGxlcih0aGlzLnJlbmRlckxhYmVsKTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlSGFuZGxlcihldj86IEZvcm1FdmVudDxIVE1MRWxlbWVudCB8IEhUTUxJbnB1dEVsZW1lbnQ+LCBjaGVja2VkPzogYm9vbGVhbikge1xyXG4gICAgdGhpcy5vbkNoYW5nZS5lbWl0KHtcclxuICAgICAgZXY6IGV2ICYmIGV2Lm5hdGl2ZUV2ZW50LFxyXG4gICAgICBjaGVja2VkLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jaGVja2VkQ2hhbmdlLmVtaXQoY2hlY2tlZCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==