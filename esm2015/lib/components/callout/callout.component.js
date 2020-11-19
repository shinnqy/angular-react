/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild, } from '@angular/core';
export class FabCalloutComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer);
        this.onLayerMounted = new EventEmitter();
        this.onPositioned = new EventEmitter();
        this.onDismiss = new EventEmitter();
        this.onScroll = new EventEmitter();
    }
}
FabCalloutComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-callout',
                exportAs: 'fabCallout',
                template: `
    <Callout
      #reactNode
      [target]="target"
      [directionalHint]="directionalHint"
      [directionalHintForRTL]="directionalHintForRTL"
      [gapSpace]="gapSpace"
      [beakWidth]="beakWidth"
      [calloutWidth]="calloutWidth"
      [backgroundColor]="backgroundColor"
      [bounds]="bounds"
      [minPagePadding]="minPagePadding"
      [isBeakVisible]="isBeakVisible"
      [preventDismissOnScroll]="preventDismissOnScroll"
      [preventDismissOnResize]="preventDismissOnResize"
      [preventDismissOnLostFocus]="preventDismissOnLostFocus"
      [coverTarget]="coverTarget"
      [alignTargetEdge]="alignTargetEdge"
      [role]="role"
      [ariaLabel]="ariaLabel"
      [ariaLabelledBy]="ariaLabelledBy"
      [ariaDescribedBy]="ariaDescribedBy"
      [className]="className"
      [layerProps]="layerProps"
      [doNotLayer]="doNotLayer"
      [directionalHintFixed]="directionalHintFixed"
      [finalHeight]="finalHeight"
      [hideOverflow]="hideOverflow"
      [setInitialFocus]="setInitialFocus"
      [calloutMaxHeight]="calloutMaxHeight"
      [theme]="theme"
      [styles]="styles"
      [hidden]="hidden"
      [shouldRestoreFocus]="shouldRestoreFocus"
      (onLayerMounted)="onLayerMounted.emit()"
      (onPositioned)="onPositioned.emit($event)"
      (onDismiss)="onDismiss.emit($event)"
      (onScroll)="onScroll.emit()"
    >
      <ReactContent><ng-content></ng-content></ReactContent>
    </Callout>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabCalloutComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
FabCalloutComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    target: [{ type: Input }],
    directionalHint: [{ type: Input }],
    directionalHintForRTL: [{ type: Input }],
    gapSpace: [{ type: Input }],
    beakWidth: [{ type: Input }],
    calloutWidth: [{ type: Input }],
    backgroundColor: [{ type: Input }],
    bounds: [{ type: Input }],
    minPagePadding: [{ type: Input }],
    isBeakVisible: [{ type: Input }],
    preventDismissOnScroll: [{ type: Input }],
    preventDismissOnResize: [{ type: Input }],
    preventDismissOnLostFocus: [{ type: Input }],
    coverTarget: [{ type: Input }],
    alignTargetEdge: [{ type: Input }],
    role: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    ariaLabelledBy: [{ type: Input }],
    ariaDescribedBy: [{ type: Input }],
    className: [{ type: Input }],
    layerProps: [{ type: Input }],
    doNotLayer: [{ type: Input }],
    directionalHintFixed: [{ type: Input }],
    finalHeight: [{ type: Input }],
    hideOverflow: [{ type: Input }],
    setInitialFocus: [{ type: Input }],
    calloutMaxHeight: [{ type: Input }],
    theme: [{ type: Input }],
    styles: [{ type: Input }],
    hidden: [{ type: Input }],
    shouldRestoreFocus: [{ type: Input }],
    onLayerMounted: [{ type: Output }],
    onPositioned: [{ type: Output }],
    onDismiss: [{ type: Output }],
    onScroll: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabCalloutComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabCalloutComponent.prototype.target;
    /** @type {?} */
    FabCalloutComponent.prototype.directionalHint;
    /** @type {?} */
    FabCalloutComponent.prototype.directionalHintForRTL;
    /** @type {?} */
    FabCalloutComponent.prototype.gapSpace;
    /** @type {?} */
    FabCalloutComponent.prototype.beakWidth;
    /** @type {?} */
    FabCalloutComponent.prototype.calloutWidth;
    /** @type {?} */
    FabCalloutComponent.prototype.backgroundColor;
    /** @type {?} */
    FabCalloutComponent.prototype.bounds;
    /** @type {?} */
    FabCalloutComponent.prototype.minPagePadding;
    /** @type {?} */
    FabCalloutComponent.prototype.isBeakVisible;
    /** @type {?} */
    FabCalloutComponent.prototype.preventDismissOnScroll;
    /** @type {?} */
    FabCalloutComponent.prototype.preventDismissOnResize;
    /** @type {?} */
    FabCalloutComponent.prototype.preventDismissOnLostFocus;
    /** @type {?} */
    FabCalloutComponent.prototype.coverTarget;
    /** @type {?} */
    FabCalloutComponent.prototype.alignTargetEdge;
    /** @type {?} */
    FabCalloutComponent.prototype.role;
    /** @type {?} */
    FabCalloutComponent.prototype.ariaLabel;
    /** @type {?} */
    FabCalloutComponent.prototype.ariaLabelledBy;
    /** @type {?} */
    FabCalloutComponent.prototype.ariaDescribedBy;
    /** @type {?} */
    FabCalloutComponent.prototype.className;
    /** @type {?} */
    FabCalloutComponent.prototype.layerProps;
    /** @type {?} */
    FabCalloutComponent.prototype.doNotLayer;
    /** @type {?} */
    FabCalloutComponent.prototype.directionalHintFixed;
    /** @type {?} */
    FabCalloutComponent.prototype.finalHeight;
    /** @type {?} */
    FabCalloutComponent.prototype.hideOverflow;
    /** @type {?} */
    FabCalloutComponent.prototype.setInitialFocus;
    /** @type {?} */
    FabCalloutComponent.prototype.calloutMaxHeight;
    /** @type {?} */
    FabCalloutComponent.prototype.theme;
    /** @type {?} */
    FabCalloutComponent.prototype.styles;
    /** @type {?} */
    FabCalloutComponent.prototype.hidden;
    /** @type {?} */
    FabCalloutComponent.prototype.shouldRestoreFocus;
    /** @type {?} */
    FabCalloutComponent.prototype.onLayerMounted;
    /** @type {?} */
    FabCalloutComponent.prototype.onPositioned;
    /** @type {?} */
    FabCalloutComponent.prototype.onDismiss;
    /** @type {?} */
    FabCalloutComponent.prototype.onScroll;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbG91dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jYWxsb3V0L2NhbGxvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzVELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQW9EdkIsTUFBTSxPQUFPLG1CQUFvQixTQUFRLHFCQUFvQzs7Ozs7O0lBd0MzRSxZQUFZLFVBQXNCLEVBQUUsaUJBQW9DLEVBQUUsUUFBbUI7UUFDM0YsS0FBSyxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLENBQUMsQ0FBQztRQU45QixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDMUMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBMEMsQ0FBQztRQUMxRSxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQWdCLENBQUM7UUFDN0MsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7SUFJdkQsQ0FBQzs7O1lBMUZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F5Q1Q7Z0JBRUQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07eUJBRHRDLGdCQUFnQjthQUUxQjs7OztZQXpEQyxVQUFVO1lBRlYsaUJBQWlCO1lBTWpCLFNBQVM7OzsyQkF1RFIsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7cUJBRXZDLEtBQUs7OEJBQ0wsS0FBSztvQ0FDTCxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSzsyQkFDTCxLQUFLOzhCQUNMLEtBQUs7cUJBQ0wsS0FBSzs2QkFDTCxLQUFLOzRCQUNMLEtBQUs7cUNBQ0wsS0FBSztxQ0FDTCxLQUFLO3dDQUNMLEtBQUs7MEJBQ0wsS0FBSzs4QkFDTCxLQUFLO21CQUNMLEtBQUs7d0JBQ0wsS0FBSzs2QkFDTCxLQUFLOzhCQUNMLEtBQUs7d0JBQ0wsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7bUNBQ0wsS0FBSzswQkFDTCxLQUFLOzJCQUNMLEtBQUs7OEJBQ0wsS0FBSzsrQkFDTCxLQUFLO29CQUNMLEtBQUs7cUJBQ0wsS0FBSztxQkFDTCxLQUFLO2lDQUNMLEtBQUs7NkJBRUwsTUFBTTsyQkFDTixNQUFNO3dCQUNOLE1BQU07dUJBQ04sTUFBTTs7Ozs7OztJQXJDUCwyQ0FBNkU7O0lBRTdFLHFDQUEwQzs7SUFDMUMsOENBQTREOztJQUM1RCxvREFBd0U7O0lBQ3hFLHVDQUE4Qzs7SUFDOUMsd0NBQWdEOztJQUNoRCwyQ0FBc0Q7O0lBQ3RELDhDQUE0RDs7SUFDNUQscUNBQTBDOztJQUMxQyw2Q0FBMEQ7O0lBQzFELDRDQUF3RDs7SUFDeEQscURBQTBFOztJQUMxRSxxREFBMEU7O0lBQzFFLHdEQUFnRjs7SUFDaEYsMENBQW9EOztJQUNwRCw4Q0FBNEQ7O0lBQzVELG1DQUFzQzs7SUFDdEMsd0NBQWdEOztJQUNoRCw2Q0FBMEQ7O0lBQzFELDhDQUE0RDs7SUFDNUQsd0NBQWdEOztJQUNoRCx5Q0FBa0Q7O0lBQ2xELHlDQUFrRDs7SUFDbEQsbURBQXNFOztJQUN0RSwwQ0FBb0Q7O0lBQ3BELDJDQUFzRDs7SUFDdEQsOENBQTREOztJQUM1RCwrQ0FBOEQ7O0lBQzlELG9DQUF3Qzs7SUFDeEMscUNBQTBDOztJQUMxQyxxQ0FBMEM7O0lBQzFDLGlEQUFrRTs7SUFFbEUsNkNBQTZEOztJQUM3RCwyQ0FBNkY7O0lBQzdGLHdDQUFnRTs7SUFDaEUsdUNBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IFJlYWN0V3JhcHBlckNvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFZpZXdDaGlsZCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSUNhbGxvdXRQcm9wcyB9IGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliL0NhbGxvdXQnO1xyXG5pbXBvcnQgeyBJQ2FsbG91dFBvc2l0aW9uZWRJbmZvIH0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvdXRpbGl0aWVzL3Bvc2l0aW9uaW5nL3Bvc2l0aW9uaW5nLnR5cGVzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZmFiLWNhbGxvdXQnLFxyXG4gIGV4cG9ydEFzOiAnZmFiQ2FsbG91dCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxDYWxsb3V0XHJcbiAgICAgICNyZWFjdE5vZGVcclxuICAgICAgW3RhcmdldF09XCJ0YXJnZXRcIlxyXG4gICAgICBbZGlyZWN0aW9uYWxIaW50XT1cImRpcmVjdGlvbmFsSGludFwiXHJcbiAgICAgIFtkaXJlY3Rpb25hbEhpbnRGb3JSVExdPVwiZGlyZWN0aW9uYWxIaW50Rm9yUlRMXCJcclxuICAgICAgW2dhcFNwYWNlXT1cImdhcFNwYWNlXCJcclxuICAgICAgW2JlYWtXaWR0aF09XCJiZWFrV2lkdGhcIlxyXG4gICAgICBbY2FsbG91dFdpZHRoXT1cImNhbGxvdXRXaWR0aFwiXHJcbiAgICAgIFtiYWNrZ3JvdW5kQ29sb3JdPVwiYmFja2dyb3VuZENvbG9yXCJcclxuICAgICAgW2JvdW5kc109XCJib3VuZHNcIlxyXG4gICAgICBbbWluUGFnZVBhZGRpbmddPVwibWluUGFnZVBhZGRpbmdcIlxyXG4gICAgICBbaXNCZWFrVmlzaWJsZV09XCJpc0JlYWtWaXNpYmxlXCJcclxuICAgICAgW3ByZXZlbnREaXNtaXNzT25TY3JvbGxdPVwicHJldmVudERpc21pc3NPblNjcm9sbFwiXHJcbiAgICAgIFtwcmV2ZW50RGlzbWlzc09uUmVzaXplXT1cInByZXZlbnREaXNtaXNzT25SZXNpemVcIlxyXG4gICAgICBbcHJldmVudERpc21pc3NPbkxvc3RGb2N1c109XCJwcmV2ZW50RGlzbWlzc09uTG9zdEZvY3VzXCJcclxuICAgICAgW2NvdmVyVGFyZ2V0XT1cImNvdmVyVGFyZ2V0XCJcclxuICAgICAgW2FsaWduVGFyZ2V0RWRnZV09XCJhbGlnblRhcmdldEVkZ2VcIlxyXG4gICAgICBbcm9sZV09XCJyb2xlXCJcclxuICAgICAgW2FyaWFMYWJlbF09XCJhcmlhTGFiZWxcIlxyXG4gICAgICBbYXJpYUxhYmVsbGVkQnldPVwiYXJpYUxhYmVsbGVkQnlcIlxyXG4gICAgICBbYXJpYURlc2NyaWJlZEJ5XT1cImFyaWFEZXNjcmliZWRCeVwiXHJcbiAgICAgIFtjbGFzc05hbWVdPVwiY2xhc3NOYW1lXCJcclxuICAgICAgW2xheWVyUHJvcHNdPVwibGF5ZXJQcm9wc1wiXHJcbiAgICAgIFtkb05vdExheWVyXT1cImRvTm90TGF5ZXJcIlxyXG4gICAgICBbZGlyZWN0aW9uYWxIaW50Rml4ZWRdPVwiZGlyZWN0aW9uYWxIaW50Rml4ZWRcIlxyXG4gICAgICBbZmluYWxIZWlnaHRdPVwiZmluYWxIZWlnaHRcIlxyXG4gICAgICBbaGlkZU92ZXJmbG93XT1cImhpZGVPdmVyZmxvd1wiXHJcbiAgICAgIFtzZXRJbml0aWFsRm9jdXNdPVwic2V0SW5pdGlhbEZvY3VzXCJcclxuICAgICAgW2NhbGxvdXRNYXhIZWlnaHRdPVwiY2FsbG91dE1heEhlaWdodFwiXHJcbiAgICAgIFt0aGVtZV09XCJ0aGVtZVwiXHJcbiAgICAgIFtzdHlsZXNdPVwic3R5bGVzXCJcclxuICAgICAgW2hpZGRlbl09XCJoaWRkZW5cIlxyXG4gICAgICBbc2hvdWxkUmVzdG9yZUZvY3VzXT1cInNob3VsZFJlc3RvcmVGb2N1c1wiXHJcbiAgICAgIChvbkxheWVyTW91bnRlZCk9XCJvbkxheWVyTW91bnRlZC5lbWl0KClcIlxyXG4gICAgICAob25Qb3NpdGlvbmVkKT1cIm9uUG9zaXRpb25lZC5lbWl0KCRldmVudClcIlxyXG4gICAgICAob25EaXNtaXNzKT1cIm9uRGlzbWlzcy5lbWl0KCRldmVudClcIlxyXG4gICAgICAob25TY3JvbGwpPVwib25TY3JvbGwuZW1pdCgpXCJcclxuICAgID5cclxuICAgICAgPFJlYWN0Q29udGVudD48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9SZWFjdENvbnRlbnQ+XHJcbiAgICA8L0NhbGxvdXQ+XHJcbiAgYCxcclxuICBzdHlsZXM6IFsncmVhY3QtcmVuZGVyZXInXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZhYkNhbGxvdXRDb21wb25lbnQgZXh0ZW5kcyBSZWFjdFdyYXBwZXJDb21wb25lbnQ8SUNhbGxvdXRQcm9wcz4ge1xyXG4gIEBWaWV3Q2hpbGQoJ3JlYWN0Tm9kZScsIHsgc3RhdGljOiB0cnVlIH0pIHByb3RlY3RlZCByZWFjdE5vZGVSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBJbnB1dCgpIHRhcmdldD86IElDYWxsb3V0UHJvcHNbJ3RhcmdldCddO1xyXG4gIEBJbnB1dCgpIGRpcmVjdGlvbmFsSGludD86IElDYWxsb3V0UHJvcHNbJ2RpcmVjdGlvbmFsSGludCddO1xyXG4gIEBJbnB1dCgpIGRpcmVjdGlvbmFsSGludEZvclJUTD86IElDYWxsb3V0UHJvcHNbJ2RpcmVjdGlvbmFsSGludEZvclJUTCddO1xyXG4gIEBJbnB1dCgpIGdhcFNwYWNlPzogSUNhbGxvdXRQcm9wc1snZ2FwU3BhY2UnXTtcclxuICBASW5wdXQoKSBiZWFrV2lkdGg/OiBJQ2FsbG91dFByb3BzWydiZWFrV2lkdGgnXTtcclxuICBASW5wdXQoKSBjYWxsb3V0V2lkdGg/OiBJQ2FsbG91dFByb3BzWydjYWxsb3V0V2lkdGgnXTtcclxuICBASW5wdXQoKSBiYWNrZ3JvdW5kQ29sb3I/OiBJQ2FsbG91dFByb3BzWydiYWNrZ3JvdW5kQ29sb3InXTtcclxuICBASW5wdXQoKSBib3VuZHM/OiBJQ2FsbG91dFByb3BzWydib3VuZHMnXTtcclxuICBASW5wdXQoKSBtaW5QYWdlUGFkZGluZz86IElDYWxsb3V0UHJvcHNbJ21pblBhZ2VQYWRkaW5nJ107XHJcbiAgQElucHV0KCkgaXNCZWFrVmlzaWJsZT86IElDYWxsb3V0UHJvcHNbJ2lzQmVha1Zpc2libGUnXTtcclxuICBASW5wdXQoKSBwcmV2ZW50RGlzbWlzc09uU2Nyb2xsPzogSUNhbGxvdXRQcm9wc1sncHJldmVudERpc21pc3NPblNjcm9sbCddO1xyXG4gIEBJbnB1dCgpIHByZXZlbnREaXNtaXNzT25SZXNpemU/OiBJQ2FsbG91dFByb3BzWydwcmV2ZW50RGlzbWlzc09uUmVzaXplJ107XHJcbiAgQElucHV0KCkgcHJldmVudERpc21pc3NPbkxvc3RGb2N1cz86IElDYWxsb3V0UHJvcHNbJ3ByZXZlbnREaXNtaXNzT25Mb3N0Rm9jdXMnXTtcclxuICBASW5wdXQoKSBjb3ZlclRhcmdldD86IElDYWxsb3V0UHJvcHNbJ2NvdmVyVGFyZ2V0J107XHJcbiAgQElucHV0KCkgYWxpZ25UYXJnZXRFZGdlPzogSUNhbGxvdXRQcm9wc1snYWxpZ25UYXJnZXRFZGdlJ107XHJcbiAgQElucHV0KCkgcm9sZT86IElDYWxsb3V0UHJvcHNbJ3JvbGUnXTtcclxuICBASW5wdXQoKSBhcmlhTGFiZWw/OiBJQ2FsbG91dFByb3BzWydhcmlhTGFiZWwnXTtcclxuICBASW5wdXQoKSBhcmlhTGFiZWxsZWRCeT86IElDYWxsb3V0UHJvcHNbJ2FyaWFMYWJlbGxlZEJ5J107XHJcbiAgQElucHV0KCkgYXJpYURlc2NyaWJlZEJ5PzogSUNhbGxvdXRQcm9wc1snYXJpYURlc2NyaWJlZEJ5J107XHJcbiAgQElucHV0KCkgY2xhc3NOYW1lPzogSUNhbGxvdXRQcm9wc1snY2xhc3NOYW1lJ107XHJcbiAgQElucHV0KCkgbGF5ZXJQcm9wcz86IElDYWxsb3V0UHJvcHNbJ2xheWVyUHJvcHMnXTtcclxuICBASW5wdXQoKSBkb05vdExheWVyPzogSUNhbGxvdXRQcm9wc1snZG9Ob3RMYXllciddO1xyXG4gIEBJbnB1dCgpIGRpcmVjdGlvbmFsSGludEZpeGVkPzogSUNhbGxvdXRQcm9wc1snZGlyZWN0aW9uYWxIaW50Rml4ZWQnXTtcclxuICBASW5wdXQoKSBmaW5hbEhlaWdodD86IElDYWxsb3V0UHJvcHNbJ2ZpbmFsSGVpZ2h0J107XHJcbiAgQElucHV0KCkgaGlkZU92ZXJmbG93PzogSUNhbGxvdXRQcm9wc1snaGlkZU92ZXJmbG93J107XHJcbiAgQElucHV0KCkgc2V0SW5pdGlhbEZvY3VzPzogSUNhbGxvdXRQcm9wc1snc2V0SW5pdGlhbEZvY3VzJ107XHJcbiAgQElucHV0KCkgY2FsbG91dE1heEhlaWdodD86IElDYWxsb3V0UHJvcHNbJ2NhbGxvdXRNYXhIZWlnaHQnXTtcclxuICBASW5wdXQoKSB0aGVtZT86IElDYWxsb3V0UHJvcHNbJ3RoZW1lJ107XHJcbiAgQElucHV0KCkgc3R5bGVzPzogSUNhbGxvdXRQcm9wc1snc3R5bGVzJ107XHJcbiAgQElucHV0KCkgaGlkZGVuPzogSUNhbGxvdXRQcm9wc1snaGlkZGVuJ107XHJcbiAgQElucHV0KCkgc2hvdWxkUmVzdG9yZUZvY3VzPzogSUNhbGxvdXRQcm9wc1snc2hvdWxkUmVzdG9yZUZvY3VzJ107XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvbkxheWVyTW91bnRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25Qb3NpdGlvbmVkID0gbmV3IEV2ZW50RW1pdHRlcjx7IHBvc2l0aW9ucz86IElDYWxsb3V0UG9zaXRpb25lZEluZm8gfT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25EaXNtaXNzID0gbmV3IEV2ZW50RW1pdHRlcjx7IGV2PzogYW55IH0+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uU2Nyb2xsID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcik7XHJcbiAgfVxyXG59XHJcbiJdfQ==