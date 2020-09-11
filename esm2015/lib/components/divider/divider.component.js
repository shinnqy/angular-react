/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewChild, } from '@angular/core';
export class FabDividerComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer);
    }
}
FabDividerComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-vertical-divider',
                exportAs: 'fabVerticalDivider',
                template: `
    <VerticalDivider
      #reactNode
      [getClassNames]="getClassNames"
      [theme]="theme"
      [styles]="styles"
      [className]="className"
    >
    </VerticalDivider>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabDividerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
FabDividerComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    getClassNames: [{ type: Input }],
    theme: [{ type: Input }],
    styles: [{ type: Input }],
    className: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGl2aWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvbGliL2NvbXBvbmVudHMvZGl2aWRlci8iLCJzb3VyY2VzIjpbImRpdmlkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzVELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLFNBQVMsRUFDVCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFtQnZCLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxxQkFBNEM7Ozs7OztJQVFuRixZQUFZLFVBQXNCLEVBQUUsaUJBQW9DLEVBQUUsUUFBbUI7UUFDM0YsS0FBSyxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7WUExQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRTs7Ozs7Ozs7O0dBU1Q7Z0JBRUQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07eUJBRHRDLGdCQUFnQjthQUUxQjs7OztZQXRCQyxVQUFVO1lBRlYsaUJBQWlCO1lBSWpCLFNBQVM7OzsyQkFzQlIsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7NEJBRXZDLEtBQUs7b0JBQ0wsS0FBSztxQkFDTCxLQUFLO3dCQUNMLEtBQUs7Ozs7Ozs7SUFMTiwyQ0FBNkU7O0lBRTdFLDRDQUFnRTs7SUFDaEUsb0NBQWdEOztJQUNoRCxxQ0FBa0Q7O0lBQ2xELHdDQUF3RCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyBSZWFjdFdyYXBwZXJDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9jb3JlJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0NoaWxkLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJVmVydGljYWxEaXZpZGVyUHJvcHMgfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9EaXZpZGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZmFiLXZlcnRpY2FsLWRpdmlkZXInLFxyXG4gIGV4cG9ydEFzOiAnZmFiVmVydGljYWxEaXZpZGVyJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPFZlcnRpY2FsRGl2aWRlclxyXG4gICAgICAjcmVhY3ROb2RlXHJcbiAgICAgIFtnZXRDbGFzc05hbWVzXT1cImdldENsYXNzTmFtZXNcIlxyXG4gICAgICBbdGhlbWVdPVwidGhlbWVcIlxyXG4gICAgICBbc3R5bGVzXT1cInN0eWxlc1wiXHJcbiAgICAgIFtjbGFzc05hbWVdPVwiY2xhc3NOYW1lXCJcclxuICAgID5cclxuICAgIDwvVmVydGljYWxEaXZpZGVyPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbJ3JlYWN0LXJlbmRlcmVyJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYWJEaXZpZGVyQ29tcG9uZW50IGV4dGVuZHMgUmVhY3RXcmFwcGVyQ29tcG9uZW50PElWZXJ0aWNhbERpdmlkZXJQcm9wcz4ge1xyXG4gIEBWaWV3Q2hpbGQoJ3JlYWN0Tm9kZScsIHsgc3RhdGljOiB0cnVlIH0pIHByb3RlY3RlZCByZWFjdE5vZGVSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBJbnB1dCgpIGdldENsYXNzTmFtZXM/OiBJVmVydGljYWxEaXZpZGVyUHJvcHNbJ2dldENsYXNzTmFtZXMnXTtcclxuICBASW5wdXQoKSB0aGVtZT86IElWZXJ0aWNhbERpdmlkZXJQcm9wc1sndGhlbWUnXTtcclxuICBASW5wdXQoKSBzdHlsZXM/OiBJVmVydGljYWxEaXZpZGVyUHJvcHNbJ3N0eWxlcyddO1xyXG4gIEBJbnB1dCgpIGNsYXNzTmFtZT86IElWZXJ0aWNhbERpdmlkZXJQcm9wc1snY2xhc3NOYW1lJ107XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xyXG4gICAgc3VwZXIoZWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyKTtcclxuICB9XHJcbn1cclxuIl19