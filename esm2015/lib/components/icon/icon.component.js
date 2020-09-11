/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewChild, } from '@angular/core';
export class FabIconComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer, { setHostDisplay: true });
    }
}
FabIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-icon',
                exportAs: 'fabIcon',
                template: `
    <Icon
      #reactNode
      [iconName]="iconName"
      [ariaLabel]="ariaLabel"
      [iconType]="iconType"
      [imageProps]="imageProps"
      [imageErrorAs]="imageErrorAs"
      [styles]="styles"
      [theme]="theme"
    >
    </Icon>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabIconComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvbGliL2NvbXBvbmVudHMvaWNvbi8iLCJzb3VyY2VzIjpbImljb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzVELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLFNBQVMsRUFDVCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFzQnZCLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxxQkFBaUM7Ozs7OztJQWFyRSxZQUFZLFVBQXNCLEVBQUUsaUJBQW9DLEVBQUUsUUFBbUI7UUFDM0YsS0FBSyxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUMzRSxDQUFDOzs7WUFsQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixRQUFRLEVBQUUsU0FBUztnQkFDbkIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7R0FZVDtnQkFFRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTt5QkFEdEMsZ0JBQWdCO2FBRTFCOzs7O1lBekJDLFVBQVU7WUFGVixpQkFBaUI7WUFJakIsU0FBUzs7OzJCQXlCUixTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsyQkFFdkMsS0FBSzt1QkFFTCxLQUFLO3dCQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLOzJCQUNMLEtBQUs7cUJBQ0wsS0FBSztvQkFDTCxLQUFLOzs7Ozs7O0lBVk4sd0NBQTZFOztJQUU3RSx3Q0FBbUQ7O0lBRW5ELG9DQUEyQzs7SUFDM0MscUNBQTZDOztJQUM3QyxvQ0FBMkM7O0lBQzNDLHNDQUErQzs7SUFDL0Msd0NBQW1EOztJQUNuRCxrQ0FBdUM7O0lBQ3ZDLGlDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyBSZWFjdFdyYXBwZXJDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9jb3JlJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0NoaWxkLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJSWNvblByb3BzIH0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvSWNvbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZhYi1pY29uJyxcclxuICBleHBvcnRBczogJ2ZhYkljb24nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8SWNvblxyXG4gICAgICAjcmVhY3ROb2RlXHJcbiAgICAgIFtpY29uTmFtZV09XCJpY29uTmFtZVwiXHJcbiAgICAgIFthcmlhTGFiZWxdPVwiYXJpYUxhYmVsXCJcclxuICAgICAgW2ljb25UeXBlXT1cImljb25UeXBlXCJcclxuICAgICAgW2ltYWdlUHJvcHNdPVwiaW1hZ2VQcm9wc1wiXHJcbiAgICAgIFtpbWFnZUVycm9yQXNdPVwiaW1hZ2VFcnJvckFzXCJcclxuICAgICAgW3N0eWxlc109XCJzdHlsZXNcIlxyXG4gICAgICBbdGhlbWVdPVwidGhlbWVcIlxyXG4gICAgPlxyXG4gICAgPC9JY29uPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbJ3JlYWN0LXJlbmRlcmVyJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYWJJY29uQ29tcG9uZW50IGV4dGVuZHMgUmVhY3RXcmFwcGVyQ29tcG9uZW50PElJY29uUHJvcHM+IHtcclxuICBAVmlld0NoaWxkKCdyZWFjdE5vZGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcm90ZWN0ZWQgcmVhY3ROb2RlUmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICBASW5wdXQoKSBjb21wb25lbnRSZWY/OiBJSWNvblByb3BzWydjb21wb25lbnRSZWYnXTtcclxuXHJcbiAgQElucHV0KCkgaWNvbk5hbWU/OiBJSWNvblByb3BzWydpY29uTmFtZSddO1xyXG4gIEBJbnB1dCgpIGFyaWFMYWJlbD86IElJY29uUHJvcHNbJ2FyaWFMYWJlbCddO1xyXG4gIEBJbnB1dCgpIGljb25UeXBlPzogSUljb25Qcm9wc1snaWNvblR5cGUnXTtcclxuICBASW5wdXQoKSBpbWFnZVByb3BzPzogSUljb25Qcm9wc1snaW1hZ2VQcm9wcyddO1xyXG4gIEBJbnB1dCgpIGltYWdlRXJyb3JBcz86IElJY29uUHJvcHNbJ2ltYWdlRXJyb3JBcyddO1xyXG4gIEBJbnB1dCgpIHN0eWxlcz86IElJY29uUHJvcHNbJ3N0eWxlcyddO1xyXG4gIEBJbnB1dCgpIHRoZW1lPzogSUljb25Qcm9wc1sndGhlbWUnXTtcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcbiAgICBzdXBlcihlbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXIsIHsgc2V0SG9zdERpc3BsYXk6IHRydWUgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==