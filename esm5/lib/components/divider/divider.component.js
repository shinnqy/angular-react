/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewChild, } from '@angular/core';
var FabDividerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabDividerComponent, _super);
    function FabDividerComponent(elementRef, changeDetectorRef, renderer) {
        return _super.call(this, elementRef, changeDetectorRef, renderer) || this;
    }
    FabDividerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-vertical-divider',
                    exportAs: 'fabVerticalDivider',
                    template: "\n    <VerticalDivider\n      #reactNode\n      [getClassNames]=\"getClassNames\"\n      [theme]=\"theme\"\n      [styles]=\"styles\"\n      [className]=\"className\"\n    >\n    </VerticalDivider>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabDividerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    FabDividerComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
        getClassNames: [{ type: Input }],
        theme: [{ type: Input }],
        styles: [{ type: Input }],
        className: [{ type: Input }]
    };
    return FabDividerComponent;
}(ReactWrapperComponent));
export { FabDividerComponent };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabDividerComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabDividerComponent.prototype.getClassNames;
    /** @type {?} */
    FabDividerComponent.prototype.theme;
    /** @type {?} */
    FabDividerComponent.prototype.styles;
    /** @type {?} */
    FabDividerComponent.prototype.className;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGl2aWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kaXZpZGVyL2RpdmlkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM1RCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxTQUFTLEVBQ1QsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBR3ZCO0lBZ0J5QywrQ0FBNEM7SUFRbkYsNkJBQVksVUFBc0IsRUFBRSxpQkFBb0MsRUFBRSxRQUFtQjtlQUMzRixrQkFBTSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxDQUFDO0lBQ2hELENBQUM7O2dCQTFCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsUUFBUSxFQUFFLDJNQVNUO29CQUVELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzZCQUR0QyxnQkFBZ0I7aUJBRTFCOzs7O2dCQXRCQyxVQUFVO2dCQUZWLGlCQUFpQjtnQkFJakIsU0FBUzs7OytCQXNCUixTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQ0FFdkMsS0FBSzt3QkFDTCxLQUFLO3lCQUNMLEtBQUs7NEJBQ0wsS0FBSzs7SUFLUiwwQkFBQztDQUFBLEFBM0JELENBZ0J5QyxxQkFBcUIsR0FXN0Q7U0FYWSxtQkFBbUI7Ozs7OztJQUM5QiwyQ0FBNkU7O0lBRTdFLDRDQUFnRTs7SUFDaEUsb0NBQWdEOztJQUNoRCxxQ0FBa0Q7O0lBQ2xELHdDQUF3RCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyBSZWFjdFdyYXBwZXJDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9jb3JlJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0NoaWxkLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJVmVydGljYWxEaXZpZGVyUHJvcHMgfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9EaXZpZGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZmFiLXZlcnRpY2FsLWRpdmlkZXInLFxyXG4gIGV4cG9ydEFzOiAnZmFiVmVydGljYWxEaXZpZGVyJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPFZlcnRpY2FsRGl2aWRlclxyXG4gICAgICAjcmVhY3ROb2RlXHJcbiAgICAgIFtnZXRDbGFzc05hbWVzXT1cImdldENsYXNzTmFtZXNcIlxyXG4gICAgICBbdGhlbWVdPVwidGhlbWVcIlxyXG4gICAgICBbc3R5bGVzXT1cInN0eWxlc1wiXHJcbiAgICAgIFtjbGFzc05hbWVdPVwiY2xhc3NOYW1lXCJcclxuICAgID5cclxuICAgIDwvVmVydGljYWxEaXZpZGVyPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbJ3JlYWN0LXJlbmRlcmVyJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYWJEaXZpZGVyQ29tcG9uZW50IGV4dGVuZHMgUmVhY3RXcmFwcGVyQ29tcG9uZW50PElWZXJ0aWNhbERpdmlkZXJQcm9wcz4ge1xyXG4gIEBWaWV3Q2hpbGQoJ3JlYWN0Tm9kZScsIHsgc3RhdGljOiB0cnVlIH0pIHByb3RlY3RlZCByZWFjdE5vZGVSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBJbnB1dCgpIGdldENsYXNzTmFtZXM/OiBJVmVydGljYWxEaXZpZGVyUHJvcHNbJ2dldENsYXNzTmFtZXMnXTtcclxuICBASW5wdXQoKSB0aGVtZT86IElWZXJ0aWNhbERpdmlkZXJQcm9wc1sndGhlbWUnXTtcclxuICBASW5wdXQoKSBzdHlsZXM/OiBJVmVydGljYWxEaXZpZGVyUHJvcHNbJ3N0eWxlcyddO1xyXG4gIEBJbnB1dCgpIGNsYXNzTmFtZT86IElWZXJ0aWNhbERpdmlkZXJQcm9wc1snY2xhc3NOYW1lJ107XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xyXG4gICAgc3VwZXIoZWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyKTtcclxuICB9XHJcbn1cclxuIl19