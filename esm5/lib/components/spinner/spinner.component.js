/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewChild, } from '@angular/core';
var FabSpinnerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabSpinnerComponent, _super);
    function FabSpinnerComponent(elementRef, changeDetectorRef, renderer) {
        return _super.call(this, elementRef, changeDetectorRef, renderer) || this;
    }
    FabSpinnerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-spinner',
                    exportAs: 'fabSpinner',
                    template: "\n    <Spinner\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [type]=\"type\"\n      [size]=\"size\"\n      [label]=\"label\"\n      [className]=\"className\"\n      [ariaLive]=\"ariaLive\"\n      [ariaLabel]=\"ariaLabel\"\n      [theme]=\"theme\"\n      [styles]=\"styles\"\n      [labelPosition]=\"labelPosition\"\n    >\n    </Spinner>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabSpinnerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    FabSpinnerComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
        componentRef: [{ type: Input }],
        type: [{ type: Input }],
        size: [{ type: Input }],
        label: [{ type: Input }],
        className: [{ type: Input }],
        ariaLive: [{ type: Input }],
        ariaLabel: [{ type: Input }],
        theme: [{ type: Input }],
        styles: [{ type: Input }],
        labelPosition: [{ type: Input }]
    };
    return FabSpinnerComponent;
}(ReactWrapperComponent));
export { FabSpinnerComponent };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabSpinnerComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabSpinnerComponent.prototype.componentRef;
    /** @type {?} */
    FabSpinnerComponent.prototype.type;
    /** @type {?} */
    FabSpinnerComponent.prototype.size;
    /** @type {?} */
    FabSpinnerComponent.prototype.label;
    /** @type {?} */
    FabSpinnerComponent.prototype.className;
    /** @type {?} */
    FabSpinnerComponent.prototype.ariaLive;
    /** @type {?} */
    FabSpinnerComponent.prototype.ariaLabel;
    /** @type {?} */
    FabSpinnerComponent.prototype.theme;
    /** @type {?} */
    FabSpinnerComponent.prototype.styles;
    /** @type {?} */
    FabSpinnerComponent.prototype.labelPosition;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM1RCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxTQUFTLEVBQ1QsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBR3ZCO0lBc0J5QywrQ0FBb0M7SUFjM0UsNkJBQVksVUFBc0IsRUFBRSxpQkFBb0MsRUFBRSxRQUFtQjtlQUMzRixrQkFBTSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxDQUFDO0lBQ2hELENBQUM7O2dCQXRDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUseVdBZVQ7b0JBRUQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07NkJBRHRDLGdCQUFnQjtpQkFFMUI7Ozs7Z0JBNUJDLFVBQVU7Z0JBRlYsaUJBQWlCO2dCQUlqQixTQUFTOzs7K0JBNEJSLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOytCQUV2QyxLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLOzRCQUNMLEtBQUs7MkJBQ0wsS0FBSzs0QkFDTCxLQUFLO3dCQUNMLEtBQUs7eUJBQ0wsS0FBSztnQ0FDTCxLQUFLOztJQUtSLDBCQUFDO0NBQUEsQUF2Q0QsQ0FzQnlDLHFCQUFxQixHQWlCN0Q7U0FqQlksbUJBQW1COzs7Ozs7SUFDOUIsMkNBQTZFOztJQUU3RSwyQ0FBc0Q7O0lBQ3RELG1DQUFzQzs7SUFDdEMsbUNBQXNDOztJQUN0QyxvQ0FBd0M7O0lBQ3hDLHdDQUFnRDs7SUFDaEQsdUNBQThDOztJQUM5Qyx3Q0FBZ0Q7O0lBQ2hELG9DQUF3Qzs7SUFDeEMscUNBQTBDOztJQUMxQyw0Q0FBd0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgUmVhY3RXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXItcmVhY3QvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFZpZXdDaGlsZCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSVNwaW5uZXJQcm9wcyB9IGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliL1NwaW5uZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmYWItc3Bpbm5lcicsXHJcbiAgZXhwb3J0QXM6ICdmYWJTcGlubmVyJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPFNwaW5uZXJcclxuICAgICAgI3JlYWN0Tm9kZVxyXG4gICAgICBbY29tcG9uZW50UmVmXT1cImNvbXBvbmVudFJlZlwiXHJcbiAgICAgIFt0eXBlXT1cInR5cGVcIlxyXG4gICAgICBbc2l6ZV09XCJzaXplXCJcclxuICAgICAgW2xhYmVsXT1cImxhYmVsXCJcclxuICAgICAgW2NsYXNzTmFtZV09XCJjbGFzc05hbWVcIlxyXG4gICAgICBbYXJpYUxpdmVdPVwiYXJpYUxpdmVcIlxyXG4gICAgICBbYXJpYUxhYmVsXT1cImFyaWFMYWJlbFwiXHJcbiAgICAgIFt0aGVtZV09XCJ0aGVtZVwiXHJcbiAgICAgIFtzdHlsZXNdPVwic3R5bGVzXCJcclxuICAgICAgW2xhYmVsUG9zaXRpb25dPVwibGFiZWxQb3NpdGlvblwiXHJcbiAgICA+XHJcbiAgICA8L1NwaW5uZXI+XHJcbiAgYCxcclxuICBzdHlsZXM6IFsncmVhY3QtcmVuZGVyZXInXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZhYlNwaW5uZXJDb21wb25lbnQgZXh0ZW5kcyBSZWFjdFdyYXBwZXJDb21wb25lbnQ8SVNwaW5uZXJQcm9wcz4ge1xyXG4gIEBWaWV3Q2hpbGQoJ3JlYWN0Tm9kZScsIHsgc3RhdGljOiB0cnVlIH0pIHByb3RlY3RlZCByZWFjdE5vZGVSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBJbnB1dCgpIGNvbXBvbmVudFJlZj86IElTcGlubmVyUHJvcHNbJ2NvbXBvbmVudFJlZiddO1xyXG4gIEBJbnB1dCgpIHR5cGU/OiBJU3Bpbm5lclByb3BzWyd0eXBlJ107XHJcbiAgQElucHV0KCkgc2l6ZT86IElTcGlubmVyUHJvcHNbJ3NpemUnXTtcclxuICBASW5wdXQoKSBsYWJlbD86IElTcGlubmVyUHJvcHNbJ2xhYmVsJ107XHJcbiAgQElucHV0KCkgY2xhc3NOYW1lPzogSVNwaW5uZXJQcm9wc1snY2xhc3NOYW1lJ107XHJcbiAgQElucHV0KCkgYXJpYUxpdmU/OiBJU3Bpbm5lclByb3BzWydhcmlhTGl2ZSddO1xyXG4gIEBJbnB1dCgpIGFyaWFMYWJlbD86IElTcGlubmVyUHJvcHNbJ2FyaWFMYWJlbCddO1xyXG4gIEBJbnB1dCgpIHRoZW1lPzogSVNwaW5uZXJQcm9wc1sndGhlbWUnXTtcclxuICBASW5wdXQoKSBzdHlsZXM/OiBJU3Bpbm5lclByb3BzWydzdHlsZXMnXTtcclxuICBASW5wdXQoKSBsYWJlbFBvc2l0aW9uPzogSVNwaW5uZXJQcm9wc1snbGFiZWxQb3NpdGlvbiddO1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcik7XHJcbiAgfVxyXG59XHJcbiJdfQ==