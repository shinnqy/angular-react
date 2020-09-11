/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewChild, } from '@angular/core';
import { Link } from 'office-ui-fabric-react/lib/Link';
var FabLinkComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabLinkComponent, _super);
    function FabLinkComponent(elementRef, changeDetectorRef, renderer) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer) || this;
        _this.LinkType = Link;
        return _this;
    }
    FabLinkComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-link',
                    exportAs: 'fabLink',
                    template: "\n    <Disguise\n      #reactNode\n      [disguiseRootAs]=\"LinkType\"\n      [href]=\"href\"\n      [type]=\"type\"\n      [download]=\"download\"\n      [hrefLang]=\"hrefLang\"\n      [media]=\"media\"\n      [rel]=\"rel\"\n      [target]=\"target\"\n      [autoFocus]=\"autoFocus\"\n      [form]=\"form\"\n      [formAction]=\"formAction\"\n      [formEncType]=\"formEncType\"\n      [formMethod]=\"formMethod\"\n      [formNoValidate]=\"formNoValidate\"\n      [formTarget]=\"formTarget\"\n      [name]=\"name\"\n      [value]=\"value\"\n      [as]=\"linkAs\"\n      [componentRef]=\"componentRef\"\n      [disabled]=\"disabled\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [keytipProps]=\"keytipProps\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </Disguise>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabLinkComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    FabLinkComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
        href: [{ type: Input }],
        type: [{ type: Input }],
        download: [{ type: Input }],
        hrefLang: [{ type: Input }],
        media: [{ type: Input }],
        rel: [{ type: Input }],
        target: [{ type: Input }],
        autoFocus: [{ type: Input }],
        form: [{ type: Input }],
        formAction: [{ type: Input }],
        formEncType: [{ type: Input }],
        formMethod: [{ type: Input }],
        formNoValidate: [{ type: Input }],
        formTarget: [{ type: Input }],
        name: [{ type: Input }],
        value: [{ type: Input }],
        componentRef: [{ type: Input }],
        disabled: [{ type: Input }],
        styles: [{ type: Input }],
        theme: [{ type: Input }],
        linkAs: [{ type: Input, args: ['as',] }],
        keytipProps: [{ type: Input }]
    };
    return FabLinkComponent;
}(ReactWrapperComponent));
export { FabLinkComponent };
if (false) {
    /** @type {?} */
    FabLinkComponent.prototype.LinkType;
    /**
     * @type {?}
     * @protected
     */
    FabLinkComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabLinkComponent.prototype.href;
    /** @type {?} */
    FabLinkComponent.prototype.type;
    /** @type {?} */
    FabLinkComponent.prototype.download;
    /** @type {?} */
    FabLinkComponent.prototype.hrefLang;
    /** @type {?} */
    FabLinkComponent.prototype.media;
    /** @type {?} */
    FabLinkComponent.prototype.rel;
    /** @type {?} */
    FabLinkComponent.prototype.target;
    /** @type {?} */
    FabLinkComponent.prototype.autoFocus;
    /** @type {?} */
    FabLinkComponent.prototype.form;
    /** @type {?} */
    FabLinkComponent.prototype.formAction;
    /** @type {?} */
    FabLinkComponent.prototype.formEncType;
    /** @type {?} */
    FabLinkComponent.prototype.formMethod;
    /** @type {?} */
    FabLinkComponent.prototype.formNoValidate;
    /** @type {?} */
    FabLinkComponent.prototype.formTarget;
    /** @type {?} */
    FabLinkComponent.prototype.name;
    /** @type {?} */
    FabLinkComponent.prototype.value;
    /** @type {?} */
    FabLinkComponent.prototype.componentRef;
    /** @type {?} */
    FabLinkComponent.prototype.disabled;
    /** @type {?} */
    FabLinkComponent.prototype.styles;
    /** @type {?} */
    FabLinkComponent.prototype.theme;
    /** @type {?} */
    FabLinkComponent.prototype.linkAs;
    /** @type {?} */
    FabLinkComponent.prototype.keytipProps;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvbGliL2NvbXBvbmVudHMvbGluay8iLCJzb3VyY2VzIjpbImxpbmsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM1RCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxTQUFTLEVBQ1QsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBYyxJQUFJLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUVuRTtJQW9Dc0MsNENBQWlDO0lBNkJyRSwwQkFBWSxVQUFzQixFQUFFLGlCQUFvQyxFQUFFLFFBQW1CO1FBQTdGLFlBQ0Usa0JBQU0sVUFBVSxFQUFFLGlCQUFpQixFQUFFLFFBQVEsQ0FBQyxTQUMvQztRQTlCUSxjQUFRLEdBQVEsSUFBSSxDQUFDOztJQThCOUIsQ0FBQzs7Z0JBbkVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFFBQVEsRUFBRSw4eUJBNkJUO29CQUVELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzZCQUR0QyxnQkFBZ0I7aUJBRTFCOzs7O2dCQTFDQyxVQUFVO2dCQUZWLGlCQUFpQjtnQkFJakIsU0FBUzs7OytCQTRDUixTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTt1QkFFdkMsS0FBSzt1QkFDTCxLQUFLOzJCQUNMLEtBQUs7MkJBQ0wsS0FBSzt3QkFDTCxLQUFLO3NCQUNMLEtBQUs7eUJBQ0wsS0FBSzs0QkFDTCxLQUFLO3VCQUNMLEtBQUs7NkJBQ0wsS0FBSzs4QkFDTCxLQUFLOzZCQUNMLEtBQUs7aUNBQ0wsS0FBSzs2QkFDTCxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSzsrQkFFTCxLQUFLOzJCQUNMLEtBQUs7eUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3lCQUNMLEtBQUssU0FBQyxJQUFJOzhCQUNWLEtBQUs7O0lBS1IsdUJBQUM7Q0FBQSxBQXBFRCxDQW9Dc0MscUJBQXFCLEdBZ0MxRDtTQWhDWSxnQkFBZ0I7OztJQUMzQixvQ0FBOEI7Ozs7O0lBRTlCLHdDQUE2RTs7SUFFN0UsZ0NBQWtDOztJQUNsQyxnQ0FBbUM7O0lBQ25DLG9DQUEyQzs7SUFDM0Msb0NBQTJDOztJQUMzQyxpQ0FBcUM7O0lBQ3JDLCtCQUFpQzs7SUFDakMsa0NBQXVDOztJQUN2QyxxQ0FBNkM7O0lBQzdDLGdDQUFtQzs7SUFDbkMsc0NBQStDOztJQUMvQyx1Q0FBaUQ7O0lBQ2pELHNDQUErQzs7SUFDL0MsMENBQXVEOztJQUN2RCxzQ0FBK0M7O0lBQy9DLGdDQUFtQzs7SUFDbkMsaUNBQXFDOztJQUVyQyx3Q0FBbUQ7O0lBQ25ELG9DQUEyQzs7SUFDM0Msa0NBQXVDOztJQUN2QyxpQ0FBcUM7O0lBQ3JDLGtDQUErRTs7SUFDL0UsdUNBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IFJlYWN0V3JhcHBlckNvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3Q2hpbGQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElMaW5rUHJvcHMsIExpbmsgfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9MaW5rJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZmFiLWxpbmsnLFxyXG4gIGV4cG9ydEFzOiAnZmFiTGluaycsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxEaXNndWlzZVxyXG4gICAgICAjcmVhY3ROb2RlXHJcbiAgICAgIFtkaXNndWlzZVJvb3RBc109XCJMaW5rVHlwZVwiXHJcbiAgICAgIFtocmVmXT1cImhyZWZcIlxyXG4gICAgICBbdHlwZV09XCJ0eXBlXCJcclxuICAgICAgW2Rvd25sb2FkXT1cImRvd25sb2FkXCJcclxuICAgICAgW2hyZWZMYW5nXT1cImhyZWZMYW5nXCJcclxuICAgICAgW21lZGlhXT1cIm1lZGlhXCJcclxuICAgICAgW3JlbF09XCJyZWxcIlxyXG4gICAgICBbdGFyZ2V0XT1cInRhcmdldFwiXHJcbiAgICAgIFthdXRvRm9jdXNdPVwiYXV0b0ZvY3VzXCJcclxuICAgICAgW2Zvcm1dPVwiZm9ybVwiXHJcbiAgICAgIFtmb3JtQWN0aW9uXT1cImZvcm1BY3Rpb25cIlxyXG4gICAgICBbZm9ybUVuY1R5cGVdPVwiZm9ybUVuY1R5cGVcIlxyXG4gICAgICBbZm9ybU1ldGhvZF09XCJmb3JtTWV0aG9kXCJcclxuICAgICAgW2Zvcm1Ob1ZhbGlkYXRlXT1cImZvcm1Ob1ZhbGlkYXRlXCJcclxuICAgICAgW2Zvcm1UYXJnZXRdPVwiZm9ybVRhcmdldFwiXHJcbiAgICAgIFtuYW1lXT1cIm5hbWVcIlxyXG4gICAgICBbdmFsdWVdPVwidmFsdWVcIlxyXG4gICAgICBbYXNdPVwibGlua0FzXCJcclxuICAgICAgW2NvbXBvbmVudFJlZl09XCJjb21wb25lbnRSZWZcIlxyXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICBbc3R5bGVzXT1cInN0eWxlc1wiXHJcbiAgICAgIFt0aGVtZV09XCJ0aGVtZVwiXHJcbiAgICAgIFtrZXl0aXBQcm9wc109XCJrZXl0aXBQcm9wc1wiXHJcbiAgICA+XHJcbiAgICAgIDxSZWFjdENvbnRlbnQ+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvUmVhY3RDb250ZW50PlxyXG4gICAgPC9EaXNndWlzZT5cclxuICBgLFxyXG4gIHN0eWxlczogWydyZWFjdC1yZW5kZXJlciddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmFiTGlua0NvbXBvbmVudCBleHRlbmRzIFJlYWN0V3JhcHBlckNvbXBvbmVudDxJTGlua1Byb3BzPiB7XHJcbiAgcmVhZG9ubHkgTGlua1R5cGU6IGFueSA9IExpbms7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3JlYWN0Tm9kZScsIHsgc3RhdGljOiB0cnVlIH0pIHByb3RlY3RlZCByZWFjdE5vZGVSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBJbnB1dCgpIGhyZWY6IElMaW5rUHJvcHNbJ2hyZWYnXTtcclxuICBASW5wdXQoKSB0eXBlPzogSUxpbmtQcm9wc1sndHlwZSddO1xyXG4gIEBJbnB1dCgpIGRvd25sb2FkPzogSUxpbmtQcm9wc1snZG93bmxvYWQnXTtcclxuICBASW5wdXQoKSBocmVmTGFuZz86IElMaW5rUHJvcHNbJ2hyZWZMYW5nJ107XHJcbiAgQElucHV0KCkgbWVkaWE/OiBJTGlua1Byb3BzWydtZWRpYSddO1xyXG4gIEBJbnB1dCgpIHJlbD86IElMaW5rUHJvcHNbJ3JlbCddO1xyXG4gIEBJbnB1dCgpIHRhcmdldD86IElMaW5rUHJvcHNbJ3RhcmdldCddO1xyXG4gIEBJbnB1dCgpIGF1dG9Gb2N1cz86IElMaW5rUHJvcHNbJ2F1dG9Gb2N1cyddO1xyXG4gIEBJbnB1dCgpIGZvcm0/OiBJTGlua1Byb3BzWydmb3JtJ107XHJcbiAgQElucHV0KCkgZm9ybUFjdGlvbj86IElMaW5rUHJvcHNbJ2Zvcm1BY3Rpb24nXTtcclxuICBASW5wdXQoKSBmb3JtRW5jVHlwZT86IElMaW5rUHJvcHNbJ2Zvcm1FbmNUeXBlJ107XHJcbiAgQElucHV0KCkgZm9ybU1ldGhvZD86IElMaW5rUHJvcHNbJ2Zvcm1NZXRob2QnXTtcclxuICBASW5wdXQoKSBmb3JtTm9WYWxpZGF0ZT86IElMaW5rUHJvcHNbJ2Zvcm1Ob1ZhbGlkYXRlJ107XHJcbiAgQElucHV0KCkgZm9ybVRhcmdldD86IElMaW5rUHJvcHNbJ2Zvcm1UYXJnZXQnXTtcclxuICBASW5wdXQoKSBuYW1lPzogSUxpbmtQcm9wc1snbmFtZSddO1xyXG4gIEBJbnB1dCgpIHZhbHVlPzogSUxpbmtQcm9wc1sndmFsdWUnXTtcclxuXHJcbiAgQElucHV0KCkgY29tcG9uZW50UmVmPzogSUxpbmtQcm9wc1snY29tcG9uZW50UmVmJ107XHJcbiAgQElucHV0KCkgZGlzYWJsZWQ/OiBJTGlua1Byb3BzWydkaXNhYmxlZCddO1xyXG4gIEBJbnB1dCgpIHN0eWxlcz86IElMaW5rUHJvcHNbJ3N0eWxlcyddO1xyXG4gIEBJbnB1dCgpIHRoZW1lPzogSUxpbmtQcm9wc1sndGhlbWUnXTtcclxuICBASW5wdXQoJ2FzJykgbGlua0FzPzogc3RyaW5nIHwgUmVhY3QuQ29tcG9uZW50Q2xhc3MgfCBSZWFjdC5TdGF0ZWxlc3NDb21wb25lbnQ7XHJcbiAgQElucHV0KCkga2V5dGlwUHJvcHM/OiBJTGlua1Byb3BzWydrZXl0aXBQcm9wcyddO1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcik7XHJcbiAgfVxyXG59XHJcbiJdfQ==