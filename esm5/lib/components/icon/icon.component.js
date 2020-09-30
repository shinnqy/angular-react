/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewChild, } from '@angular/core';
var FabIconComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabIconComponent, _super);
    function FabIconComponent(elementRef, changeDetectorRef, renderer) {
        return _super.call(this, elementRef, changeDetectorRef, renderer, { setHostDisplay: true }) || this;
    }
    FabIconComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-icon',
                    exportAs: 'fabIcon',
                    template: "\n    <Icon\n      #reactNode\n      [iconName]=\"iconName\"\n      [ariaLabel]=\"ariaLabel\"\n      [iconType]=\"iconType\"\n      [imageProps]=\"imageProps\"\n      [imageErrorAs]=\"imageErrorAs\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n    >\n    </Icon>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabIconComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    FabIconComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
        componentRef: [{ type: Input }],
        iconName: [{ type: Input }],
        ariaLabel: [{ type: Input }],
        iconType: [{ type: Input }],
        imageProps: [{ type: Input }],
        imageErrorAs: [{ type: Input }],
        styles: [{ type: Input }],
        theme: [{ type: Input }]
    };
    return FabIconComponent;
}(ReactWrapperComponent));
export { FabIconComponent };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabIconComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabIconComponent.prototype.componentRef;
    /** @type {?} */
    FabIconComponent.prototype.iconName;
    /** @type {?} */
    FabIconComponent.prototype.ariaLabel;
    /** @type {?} */
    FabIconComponent.prototype.iconType;
    /** @type {?} */
    FabIconComponent.prototype.imageProps;
    /** @type {?} */
    FabIconComponent.prototype.imageErrorAs;
    /** @type {?} */
    FabIconComponent.prototype.styles;
    /** @type {?} */
    FabIconComponent.prototype.theme;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9pY29uL2ljb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM1RCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxTQUFTLEVBQ1QsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBR3ZCO0lBbUJzQyw0Q0FBaUM7SUFhckUsMEJBQVksVUFBc0IsRUFBRSxpQkFBb0MsRUFBRSxRQUFtQjtlQUMzRixrQkFBTSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxDQUFDO0lBQzFFLENBQUM7O2dCQWxDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFFBQVEsRUFBRSxTQUFTO29CQUNuQixRQUFRLEVBQUUsb1JBWVQ7b0JBRUQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07NkJBRHRDLGdCQUFnQjtpQkFFMUI7Ozs7Z0JBekJDLFVBQVU7Z0JBRlYsaUJBQWlCO2dCQUlqQixTQUFTOzs7K0JBeUJSLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOytCQUV2QyxLQUFLOzJCQUVMLEtBQUs7NEJBQ0wsS0FBSzsyQkFDTCxLQUFLOzZCQUNMLEtBQUs7K0JBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7O0lBS1IsdUJBQUM7Q0FBQSxBQW5DRCxDQW1Cc0MscUJBQXFCLEdBZ0IxRDtTQWhCWSxnQkFBZ0I7Ozs7OztJQUMzQix3Q0FBNkU7O0lBRTdFLHdDQUFtRDs7SUFFbkQsb0NBQTJDOztJQUMzQyxxQ0FBNkM7O0lBQzdDLG9DQUEyQzs7SUFDM0Msc0NBQStDOztJQUMvQyx3Q0FBbUQ7O0lBQ25ELGtDQUF1Qzs7SUFDdkMsaUNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IFJlYWN0V3JhcHBlckNvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3Q2hpbGQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElJY29uUHJvcHMgfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9JY29uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZmFiLWljb24nLFxyXG4gIGV4cG9ydEFzOiAnZmFiSWNvbicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxJY29uXHJcbiAgICAgICNyZWFjdE5vZGVcclxuICAgICAgW2ljb25OYW1lXT1cImljb25OYW1lXCJcclxuICAgICAgW2FyaWFMYWJlbF09XCJhcmlhTGFiZWxcIlxyXG4gICAgICBbaWNvblR5cGVdPVwiaWNvblR5cGVcIlxyXG4gICAgICBbaW1hZ2VQcm9wc109XCJpbWFnZVByb3BzXCJcclxuICAgICAgW2ltYWdlRXJyb3JBc109XCJpbWFnZUVycm9yQXNcIlxyXG4gICAgICBbc3R5bGVzXT1cInN0eWxlc1wiXHJcbiAgICAgIFt0aGVtZV09XCJ0aGVtZVwiXHJcbiAgICA+XHJcbiAgICA8L0ljb24+XHJcbiAgYCxcclxuICBzdHlsZXM6IFsncmVhY3QtcmVuZGVyZXInXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZhYkljb25Db21wb25lbnQgZXh0ZW5kcyBSZWFjdFdyYXBwZXJDb21wb25lbnQ8SUljb25Qcm9wcz4ge1xyXG4gIEBWaWV3Q2hpbGQoJ3JlYWN0Tm9kZScsIHsgc3RhdGljOiB0cnVlIH0pIHByb3RlY3RlZCByZWFjdE5vZGVSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBJbnB1dCgpIGNvbXBvbmVudFJlZj86IElJY29uUHJvcHNbJ2NvbXBvbmVudFJlZiddO1xyXG5cclxuICBASW5wdXQoKSBpY29uTmFtZT86IElJY29uUHJvcHNbJ2ljb25OYW1lJ107XHJcbiAgQElucHV0KCkgYXJpYUxhYmVsPzogSUljb25Qcm9wc1snYXJpYUxhYmVsJ107XHJcbiAgQElucHV0KCkgaWNvblR5cGU/OiBJSWNvblByb3BzWydpY29uVHlwZSddO1xyXG4gIEBJbnB1dCgpIGltYWdlUHJvcHM/OiBJSWNvblByb3BzWydpbWFnZVByb3BzJ107XHJcbiAgQElucHV0KCkgaW1hZ2VFcnJvckFzPzogSUljb25Qcm9wc1snaW1hZ2VFcnJvckFzJ107XHJcbiAgQElucHV0KCkgc3R5bGVzPzogSUljb25Qcm9wc1snc3R5bGVzJ107XHJcbiAgQElucHV0KCkgdGhlbWU/OiBJSWNvblByb3BzWyd0aGVtZSddO1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlciwgeyBzZXRIb3N0RGlzcGxheTogdHJ1ZSB9KTtcclxuICB9XHJcbn1cclxuIl19