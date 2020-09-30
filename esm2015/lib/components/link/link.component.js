/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewChild, } from '@angular/core';
import { Link } from 'office-ui-fabric-react/lib/Link';
export class FabLinkComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer);
        this.LinkType = Link;
    }
}
FabLinkComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-link',
                exportAs: 'fabLink',
                template: `
    <Disguise
      #reactNode
      [disguiseRootAs]="LinkType"
      [href]="href"
      [type]="type"
      [download]="download"
      [hrefLang]="hrefLang"
      [media]="media"
      [rel]="rel"
      [target]="target"
      [autoFocus]="autoFocus"
      [form]="form"
      [formAction]="formAction"
      [formEncType]="formEncType"
      [formMethod]="formMethod"
      [formNoValidate]="formNoValidate"
      [formTarget]="formTarget"
      [name]="name"
      [value]="value"
      [as]="linkAs"
      [componentRef]="componentRef"
      [disabled]="disabled"
      [styles]="styles"
      [theme]="theme"
      [keytipProps]="keytipProps"
    >
      <ReactContent><ng-content></ng-content></ReactContent>
    </Disguise>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabLinkComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9saW5rL2xpbmsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzVELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLFNBQVMsRUFDVCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFjLElBQUksRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBc0NuRSxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEscUJBQWlDOzs7Ozs7SUE2QnJFLFlBQVksVUFBc0IsRUFBRSxpQkFBb0MsRUFBRSxRQUFtQjtRQUMzRixLQUFLLENBQUMsVUFBVSxFQUFFLGlCQUFpQixFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBN0J4QyxhQUFRLEdBQVEsSUFBSSxDQUFDO0lBOEI5QixDQUFDOzs7WUFuRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixRQUFRLEVBQUUsU0FBUztnQkFDbkIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTZCVDtnQkFFRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTt5QkFEdEMsZ0JBQWdCO2FBRTFCOzs7O1lBMUNDLFVBQVU7WUFGVixpQkFBaUI7WUFJakIsU0FBUzs7OzJCQTRDUixTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTttQkFFdkMsS0FBSzttQkFDTCxLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSztvQkFDTCxLQUFLO2tCQUNMLEtBQUs7cUJBQ0wsS0FBSzt3QkFDTCxLQUFLO21CQUNMLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLO3lCQUNMLEtBQUs7NkJBQ0wsS0FBSzt5QkFDTCxLQUFLO21CQUNMLEtBQUs7b0JBQ0wsS0FBSzsyQkFFTCxLQUFLO3VCQUNMLEtBQUs7cUJBQ0wsS0FBSztvQkFDTCxLQUFLO3FCQUNMLEtBQUssU0FBQyxJQUFJOzBCQUNWLEtBQUs7Ozs7SUExQk4sb0NBQThCOzs7OztJQUU5Qix3Q0FBNkU7O0lBRTdFLGdDQUFrQzs7SUFDbEMsZ0NBQW1DOztJQUNuQyxvQ0FBMkM7O0lBQzNDLG9DQUEyQzs7SUFDM0MsaUNBQXFDOztJQUNyQywrQkFBaUM7O0lBQ2pDLGtDQUF1Qzs7SUFDdkMscUNBQTZDOztJQUM3QyxnQ0FBbUM7O0lBQ25DLHNDQUErQzs7SUFDL0MsdUNBQWlEOztJQUNqRCxzQ0FBK0M7O0lBQy9DLDBDQUF1RDs7SUFDdkQsc0NBQStDOztJQUMvQyxnQ0FBbUM7O0lBQ25DLGlDQUFxQzs7SUFFckMsd0NBQW1EOztJQUNuRCxvQ0FBMkM7O0lBQzNDLGtDQUF1Qzs7SUFDdkMsaUNBQXFDOztJQUNyQyxrQ0FBK0U7O0lBQy9FLHVDQUFpRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyBSZWFjdFdyYXBwZXJDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9jb3JlJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0NoaWxkLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJTGlua1Byb3BzLCBMaW5rIH0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvTGluayc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZhYi1saW5rJyxcclxuICBleHBvcnRBczogJ2ZhYkxpbmsnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8RGlzZ3Vpc2VcclxuICAgICAgI3JlYWN0Tm9kZVxyXG4gICAgICBbZGlzZ3Vpc2VSb290QXNdPVwiTGlua1R5cGVcIlxyXG4gICAgICBbaHJlZl09XCJocmVmXCJcclxuICAgICAgW3R5cGVdPVwidHlwZVwiXHJcbiAgICAgIFtkb3dubG9hZF09XCJkb3dubG9hZFwiXHJcbiAgICAgIFtocmVmTGFuZ109XCJocmVmTGFuZ1wiXHJcbiAgICAgIFttZWRpYV09XCJtZWRpYVwiXHJcbiAgICAgIFtyZWxdPVwicmVsXCJcclxuICAgICAgW3RhcmdldF09XCJ0YXJnZXRcIlxyXG4gICAgICBbYXV0b0ZvY3VzXT1cImF1dG9Gb2N1c1wiXHJcbiAgICAgIFtmb3JtXT1cImZvcm1cIlxyXG4gICAgICBbZm9ybUFjdGlvbl09XCJmb3JtQWN0aW9uXCJcclxuICAgICAgW2Zvcm1FbmNUeXBlXT1cImZvcm1FbmNUeXBlXCJcclxuICAgICAgW2Zvcm1NZXRob2RdPVwiZm9ybU1ldGhvZFwiXHJcbiAgICAgIFtmb3JtTm9WYWxpZGF0ZV09XCJmb3JtTm9WYWxpZGF0ZVwiXHJcbiAgICAgIFtmb3JtVGFyZ2V0XT1cImZvcm1UYXJnZXRcIlxyXG4gICAgICBbbmFtZV09XCJuYW1lXCJcclxuICAgICAgW3ZhbHVlXT1cInZhbHVlXCJcclxuICAgICAgW2FzXT1cImxpbmtBc1wiXHJcbiAgICAgIFtjb21wb25lbnRSZWZdPVwiY29tcG9uZW50UmVmXCJcclxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgW3N0eWxlc109XCJzdHlsZXNcIlxyXG4gICAgICBbdGhlbWVdPVwidGhlbWVcIlxyXG4gICAgICBba2V5dGlwUHJvcHNdPVwia2V5dGlwUHJvcHNcIlxyXG4gICAgPlxyXG4gICAgICA8UmVhY3RDb250ZW50PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L1JlYWN0Q29udGVudD5cclxuICAgIDwvRGlzZ3Vpc2U+XHJcbiAgYCxcclxuICBzdHlsZXM6IFsncmVhY3QtcmVuZGVyZXInXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZhYkxpbmtDb21wb25lbnQgZXh0ZW5kcyBSZWFjdFdyYXBwZXJDb21wb25lbnQ8SUxpbmtQcm9wcz4ge1xyXG4gIHJlYWRvbmx5IExpbmtUeXBlOiBhbnkgPSBMaW5rO1xyXG5cclxuICBAVmlld0NoaWxkKCdyZWFjdE5vZGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcm90ZWN0ZWQgcmVhY3ROb2RlUmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICBASW5wdXQoKSBocmVmOiBJTGlua1Byb3BzWydocmVmJ107XHJcbiAgQElucHV0KCkgdHlwZT86IElMaW5rUHJvcHNbJ3R5cGUnXTtcclxuICBASW5wdXQoKSBkb3dubG9hZD86IElMaW5rUHJvcHNbJ2Rvd25sb2FkJ107XHJcbiAgQElucHV0KCkgaHJlZkxhbmc/OiBJTGlua1Byb3BzWydocmVmTGFuZyddO1xyXG4gIEBJbnB1dCgpIG1lZGlhPzogSUxpbmtQcm9wc1snbWVkaWEnXTtcclxuICBASW5wdXQoKSByZWw/OiBJTGlua1Byb3BzWydyZWwnXTtcclxuICBASW5wdXQoKSB0YXJnZXQ/OiBJTGlua1Byb3BzWyd0YXJnZXQnXTtcclxuICBASW5wdXQoKSBhdXRvRm9jdXM/OiBJTGlua1Byb3BzWydhdXRvRm9jdXMnXTtcclxuICBASW5wdXQoKSBmb3JtPzogSUxpbmtQcm9wc1snZm9ybSddO1xyXG4gIEBJbnB1dCgpIGZvcm1BY3Rpb24/OiBJTGlua1Byb3BzWydmb3JtQWN0aW9uJ107XHJcbiAgQElucHV0KCkgZm9ybUVuY1R5cGU/OiBJTGlua1Byb3BzWydmb3JtRW5jVHlwZSddO1xyXG4gIEBJbnB1dCgpIGZvcm1NZXRob2Q/OiBJTGlua1Byb3BzWydmb3JtTWV0aG9kJ107XHJcbiAgQElucHV0KCkgZm9ybU5vVmFsaWRhdGU/OiBJTGlua1Byb3BzWydmb3JtTm9WYWxpZGF0ZSddO1xyXG4gIEBJbnB1dCgpIGZvcm1UYXJnZXQ/OiBJTGlua1Byb3BzWydmb3JtVGFyZ2V0J107XHJcbiAgQElucHV0KCkgbmFtZT86IElMaW5rUHJvcHNbJ25hbWUnXTtcclxuICBASW5wdXQoKSB2YWx1ZT86IElMaW5rUHJvcHNbJ3ZhbHVlJ107XHJcblxyXG4gIEBJbnB1dCgpIGNvbXBvbmVudFJlZj86IElMaW5rUHJvcHNbJ2NvbXBvbmVudFJlZiddO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkPzogSUxpbmtQcm9wc1snZGlzYWJsZWQnXTtcclxuICBASW5wdXQoKSBzdHlsZXM/OiBJTGlua1Byb3BzWydzdHlsZXMnXTtcclxuICBASW5wdXQoKSB0aGVtZT86IElMaW5rUHJvcHNbJ3RoZW1lJ107XHJcbiAgQElucHV0KCdhcycpIGxpbmtBcz86IHN0cmluZyB8IFJlYWN0LkNvbXBvbmVudENsYXNzIHwgUmVhY3QuU3RhdGVsZXNzQ29tcG9uZW50O1xyXG4gIEBJbnB1dCgpIGtleXRpcFByb3BzPzogSUxpbmtQcm9wc1sna2V5dGlwUHJvcHMnXTtcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcbiAgICBzdXBlcihlbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXIpO1xyXG4gIH1cclxufVxyXG4iXX0=