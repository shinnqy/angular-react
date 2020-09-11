/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild, } from '@angular/core';
var FabToggleComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabToggleComponent, _super);
    function FabToggleComponent(elementRef, changeDetectorRef, renderer) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer) || this;
        _this.onChange = new EventEmitter();
        _this.onChangeHandler = _this.onChangeHandler.bind(_this);
        return _this;
    }
    /**
     * @param {?} event
     * @param {?=} checked
     * @return {?}
     */
    FabToggleComponent.prototype.onChangeHandler = /**
     * @param {?} event
     * @param {?=} checked
     * @return {?}
     */
    function (event, checked) {
        this.onChange.emit({
            event: event && event.nativeEvent,
            checked: checked,
        });
    };
    FabToggleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-toggle',
                    exportAs: 'fabToggle',
                    template: "\n    <Toggle\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [label]=\"label\"\n      [Text]=\"onText\"\n      [offText]=\"offText\"\n      [ariaLabel]=\"ariaLabel\"\n      [checked]=\"checked\"\n      [defaultChecked]=\"defaultChecked\"\n      [disabled]=\"disabled\"\n      [inlineLabel]=\"inlineLabel\"\n      [theme]=\"theme\"\n      [styles]=\"styles\"\n      [keytipProps]=\"keytipProps\"\n      [Change]=\"onChangeHandler\"\n    >\n    </Toggle>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabToggleComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    FabToggleComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
        as: [{ type: Input }],
        componentRef: [{ type: Input }],
        label: [{ type: Input }],
        onText: [{ type: Input, args: ['onnText',] }],
        offText: [{ type: Input }],
        ariaLabel: [{ type: Input }],
        checked: [{ type: Input }],
        defaultChecked: [{ type: Input }],
        disabled: [{ type: Input }],
        inlineLabel: [{ type: Input }],
        theme: [{ type: Input }],
        styles: [{ type: Input }],
        keytipProps: [{ type: Input }],
        onChange: [{ type: Output }]
    };
    return FabToggleComponent;
}(ReactWrapperComponent));
export { FabToggleComponent };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabToggleComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabToggleComponent.prototype.as;
    /** @type {?} */
    FabToggleComponent.prototype.componentRef;
    /** @type {?} */
    FabToggleComponent.prototype.label;
    /**
     * Counterpart of `IToggleProps['onText']`.
     * Angular doesn't allow Inputs to be prefixed with "on", so this is misspelled as "onn".
     * @type {?}
     */
    FabToggleComponent.prototype.onText;
    /** @type {?} */
    FabToggleComponent.prototype.offText;
    /** @type {?} */
    FabToggleComponent.prototype.ariaLabel;
    /** @type {?} */
    FabToggleComponent.prototype.checked;
    /** @type {?} */
    FabToggleComponent.prototype.defaultChecked;
    /** @type {?} */
    FabToggleComponent.prototype.disabled;
    /** @type {?} */
    FabToggleComponent.prototype.inlineLabel;
    /** @type {?} */
    FabToggleComponent.prototype.theme;
    /** @type {?} */
    FabToggleComponent.prototype.styles;
    /** @type {?} */
    FabToggleComponent.prototype.keytipProps;
    /** @type {?} */
    FabToggleComponent.prototype.onChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy9saWIvY29tcG9uZW50cy90b2dnbGUvIiwic291cmNlcyI6WyJ0b2dnbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM1RCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFHdkI7SUF5QndDLDhDQUFtQztJQXlCekUsNEJBQVksVUFBc0IsRUFBRSxpQkFBb0MsRUFBRSxRQUFtQjtRQUE3RixZQUNFLGtCQUFNLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLENBQUMsU0FHL0M7UUFOa0IsY0FBUSxHQUFHLElBQUksWUFBWSxFQUE0QyxDQUFDO1FBS3pGLEtBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUM7O0lBQ3pELENBQUM7Ozs7OztJQUVELDRDQUFlOzs7OztJQUFmLFVBQWdCLEtBQW9DLEVBQUUsT0FBaUI7UUFDckUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDakIsS0FBSyxFQUFFLEtBQUssSUFBSSxLQUFLLENBQUMsV0FBVztZQUNqQyxPQUFPLFNBQUE7U0FDUixDQUFDLENBQUM7SUFDTCxDQUFDOztnQkE3REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsV0FBVztvQkFDckIsUUFBUSxFQUFFLDJkQWtCVDtvQkFFRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs2QkFEdEMsZ0JBQWdCO2lCQUUxQjs7OztnQkFqQ0MsVUFBVTtnQkFGVixpQkFBaUI7Z0JBTWpCLFNBQVM7OzsrQkErQlIsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7cUJBRXZDLEtBQUs7K0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3lCQU1MLEtBQUssU0FBQyxTQUFTOzBCQUNmLEtBQUs7NEJBQ0wsS0FBSzswQkFFTCxLQUFLO2lDQUNMLEtBQUs7MkJBQ0wsS0FBSzs4QkFDTCxLQUFLO3dCQUNMLEtBQUs7eUJBQ0wsS0FBSzs4QkFDTCxLQUFLOzJCQUVMLE1BQU07O0lBY1QseUJBQUM7Q0FBQSxBQTlERCxDQXlCd0MscUJBQXFCLEdBcUM1RDtTQXJDWSxrQkFBa0I7Ozs7OztJQUM3QiwwQ0FBNkU7O0lBRTdFLGdDQUFpQzs7SUFDakMsMENBQXFEOztJQUNyRCxtQ0FBdUM7Ozs7OztJQU12QyxvQ0FBa0Q7O0lBQ2xELHFDQUEyQzs7SUFDM0MsdUNBQStDOztJQUUvQyxxQ0FBMkM7O0lBQzNDLDRDQUF5RDs7SUFDekQsc0NBQTZDOztJQUM3Qyx5Q0FBbUQ7O0lBQ25ELG1DQUF1Qzs7SUFDdkMsb0NBQXlDOztJQUN6Qyx5Q0FBbUQ7O0lBRW5ELHNDQUEyRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyBSZWFjdFdyYXBwZXJDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9jb3JlJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3Q2hpbGQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElUb2dnbGVQcm9wcyB9IGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliL1RvZ2dsZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZhYi10b2dnbGUnLFxyXG4gIGV4cG9ydEFzOiAnZmFiVG9nZ2xlJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPFRvZ2dsZVxyXG4gICAgICAjcmVhY3ROb2RlXHJcbiAgICAgIFtjb21wb25lbnRSZWZdPVwiY29tcG9uZW50UmVmXCJcclxuICAgICAgW2xhYmVsXT1cImxhYmVsXCJcclxuICAgICAgW1RleHRdPVwib25UZXh0XCJcclxuICAgICAgW29mZlRleHRdPVwib2ZmVGV4dFwiXHJcbiAgICAgIFthcmlhTGFiZWxdPVwiYXJpYUxhYmVsXCJcclxuICAgICAgW2NoZWNrZWRdPVwiY2hlY2tlZFwiXHJcbiAgICAgIFtkZWZhdWx0Q2hlY2tlZF09XCJkZWZhdWx0Q2hlY2tlZFwiXHJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgIFtpbmxpbmVMYWJlbF09XCJpbmxpbmVMYWJlbFwiXHJcbiAgICAgIFt0aGVtZV09XCJ0aGVtZVwiXHJcbiAgICAgIFtzdHlsZXNdPVwic3R5bGVzXCJcclxuICAgICAgW2tleXRpcFByb3BzXT1cImtleXRpcFByb3BzXCJcclxuICAgICAgW0NoYW5nZV09XCJvbkNoYW5nZUhhbmRsZXJcIlxyXG4gICAgPlxyXG4gICAgPC9Ub2dnbGU+XHJcbiAgYCxcclxuICBzdHlsZXM6IFsncmVhY3QtcmVuZGVyZXInXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZhYlRvZ2dsZUNvbXBvbmVudCBleHRlbmRzIFJlYWN0V3JhcHBlckNvbXBvbmVudDxJVG9nZ2xlUHJvcHM+IHtcclxuICBAVmlld0NoaWxkKCdyZWFjdE5vZGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcm90ZWN0ZWQgcmVhY3ROb2RlUmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICBASW5wdXQoKSBhcz86IElUb2dnbGVQcm9wc1snYXMnXTtcclxuICBASW5wdXQoKSBjb21wb25lbnRSZWY/OiBJVG9nZ2xlUHJvcHNbJ2NvbXBvbmVudFJlZiddO1xyXG4gIEBJbnB1dCgpIGxhYmVsPzogSVRvZ2dsZVByb3BzWydsYWJlbCddO1xyXG5cclxuICAvKipcclxuICAgKiBDb3VudGVycGFydCBvZiBgSVRvZ2dsZVByb3BzWydvblRleHQnXWAuXHJcbiAgICogQW5ndWxhciBkb2Vzbid0IGFsbG93IElucHV0cyB0byBiZSBwcmVmaXhlZCB3aXRoIFwib25cIiwgc28gdGhpcyBpcyBtaXNzcGVsbGVkIGFzIFwib25uXCIuXHJcbiAgICovXHJcbiAgQElucHV0KCdvbm5UZXh0Jykgb25UZXh0PzogSVRvZ2dsZVByb3BzWydvblRleHQnXTtcclxuICBASW5wdXQoKSBvZmZUZXh0PzogSVRvZ2dsZVByb3BzWydvZmZUZXh0J107XHJcbiAgQElucHV0KCkgYXJpYUxhYmVsPzogSVRvZ2dsZVByb3BzWydhcmlhTGFiZWwnXTtcclxuXHJcbiAgQElucHV0KCkgY2hlY2tlZD86IElUb2dnbGVQcm9wc1snY2hlY2tlZCddO1xyXG4gIEBJbnB1dCgpIGRlZmF1bHRDaGVja2VkPzogSVRvZ2dsZVByb3BzWydkZWZhdWx0Q2hlY2tlZCddO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkPzogSVRvZ2dsZVByb3BzWydkaXNhYmxlZCddO1xyXG4gIEBJbnB1dCgpIGlubGluZUxhYmVsPzogSVRvZ2dsZVByb3BzWydpbmxpbmVMYWJlbCddO1xyXG4gIEBJbnB1dCgpIHRoZW1lPzogSVRvZ2dsZVByb3BzWyd0aGVtZSddO1xyXG4gIEBJbnB1dCgpIHN0eWxlcz86IElUb2dnbGVQcm9wc1snc3R5bGVzJ107XHJcbiAgQElucHV0KCkga2V5dGlwUHJvcHM/OiBJVG9nZ2xlUHJvcHNbJ2tleXRpcFByb3BzJ107XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8eyBldmVudDogTW91c2VFdmVudDsgY2hlY2tlZD86IGJvb2xlYW4gfT4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcbiAgICBzdXBlcihlbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXIpO1xyXG5cclxuICAgIHRoaXMub25DaGFuZ2VIYW5kbGVyID0gdGhpcy5vbkNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlSGFuZGxlcihldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudD4sIGNoZWNrZWQ/OiBib29sZWFuKSB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoe1xyXG4gICAgICBldmVudDogZXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQsXHJcbiAgICAgIGNoZWNrZWQsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19