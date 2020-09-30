/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, NgZone, Renderer2, ViewChild, } from '@angular/core';
import { ReactWrapperComponent } from '@angular-react/core';
var FabMarqueeSelectionComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabMarqueeSelectionComponent, _super);
    function FabMarqueeSelectionComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        return _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone, setHostDisplay: true }) || this;
    }
    FabMarqueeSelectionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-marquee-selection',
                    exportAs: 'fabMarqueeSelection',
                    template: "\n    <MarqueeSelection\n      #reactNode\n      [selection]=\"selection\"\n      [className]=\"className\"\n      [componentRef]=\"componentRef\"\n      [isDraggingConstrainedToRoot]=\"isDraggingConstrainedToRoot\"\n      [isEnabled]=\"isEnabled\"\n      [rootProps]=\"rootProps\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [ShouldStartSelection]=\"onShouldStartSelection\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </MarqueeSelection>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabMarqueeSelectionComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    FabMarqueeSelectionComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
        componentRef: [{ type: Input }],
        selection: [{ type: Input }],
        rootProps: [{ type: Input }],
        onShouldStartSelection: [{ type: Input }],
        isEnabled: [{ type: Input }],
        isDraggingConstrainedToRoot: [{ type: Input }],
        className: [{ type: Input }],
        theme: [{ type: Input }],
        styles: [{ type: Input }]
    };
    return FabMarqueeSelectionComponent;
}(ReactWrapperComponent));
export { FabMarqueeSelectionComponent };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabMarqueeSelectionComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabMarqueeSelectionComponent.prototype.componentRef;
    /** @type {?} */
    FabMarqueeSelectionComponent.prototype.selection;
    /** @type {?} */
    FabMarqueeSelectionComponent.prototype.rootProps;
    /** @type {?} */
    FabMarqueeSelectionComponent.prototype.onShouldStartSelection;
    /** @type {?} */
    FabMarqueeSelectionComponent.prototype.isEnabled;
    /** @type {?} */
    FabMarqueeSelectionComponent.prototype.isDraggingConstrainedToRoot;
    /** @type {?} */
    FabMarqueeSelectionComponent.prototype.className;
    /** @type {?} */
    FabMarqueeSelectionComponent.prototype.theme;
    /** @type {?} */
    FabMarqueeSelectionComponent.prototype.styles;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFycXVlZS1zZWxlY3Rpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvbWFycXVlZS1zZWxlY3Rpb24vbWFycXVlZS1zZWxlY3Rpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUc1RDtJQXNCa0Qsd0RBQTZDO0lBYTdGLHNDQUFZLFVBQXNCLEVBQUUsaUJBQW9DLEVBQUUsUUFBbUIsRUFBRSxNQUFjO2VBQzNHLGtCQUFNLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsRUFBRSxNQUFNLFFBQUEsRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDbEYsQ0FBQzs7Z0JBckNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUUsMGVBZVQ7b0JBRUQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07NkJBRHRDLGdCQUFnQjtpQkFFMUI7Ozs7Z0JBOUJDLFVBQVU7Z0JBRlYsaUJBQWlCO2dCQUtqQixTQUFTO2dCQURULE1BQU07OzsrQkE4QkwsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7K0JBRXZDLEtBQUs7NEJBQ0wsS0FBSzs0QkFDTCxLQUFLO3lDQUNMLEtBQUs7NEJBQ0wsS0FBSzs4Q0FDTCxLQUFLOzRCQUNMLEtBQUs7d0JBQ0wsS0FBSzt5QkFDTCxLQUFLOztJQUtSLG1DQUFDO0NBQUEsQUF0Q0QsQ0FzQmtELHFCQUFxQixHQWdCdEU7U0FoQlksNEJBQTRCOzs7Ozs7SUFDdkMsb0RBQTZFOztJQUU3RSxvREFBK0Q7O0lBQy9ELGlEQUF3RDs7SUFDeEQsaURBQXlEOztJQUN6RCw4REFBOEQ7O0lBQzlELGlEQUF5RDs7SUFDekQsbUVBQTZGOztJQUM3RixpREFBeUQ7O0lBQ3pELDZDQUFpRDs7SUFDakQsOENBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3Q2hpbGQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJlYWN0V3JhcHBlckNvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2NvcmUnO1xyXG5pbXBvcnQgeyBJTWFycXVlZVNlbGVjdGlvblByb3BzIH0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvTWFycXVlZVNlbGVjdGlvbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZhYi1tYXJxdWVlLXNlbGVjdGlvbicsXHJcbiAgZXhwb3J0QXM6ICdmYWJNYXJxdWVlU2VsZWN0aW9uJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPE1hcnF1ZWVTZWxlY3Rpb25cclxuICAgICAgI3JlYWN0Tm9kZVxyXG4gICAgICBbc2VsZWN0aW9uXT1cInNlbGVjdGlvblwiXHJcbiAgICAgIFtjbGFzc05hbWVdPVwiY2xhc3NOYW1lXCJcclxuICAgICAgW2NvbXBvbmVudFJlZl09XCJjb21wb25lbnRSZWZcIlxyXG4gICAgICBbaXNEcmFnZ2luZ0NvbnN0cmFpbmVkVG9Sb290XT1cImlzRHJhZ2dpbmdDb25zdHJhaW5lZFRvUm9vdFwiXHJcbiAgICAgIFtpc0VuYWJsZWRdPVwiaXNFbmFibGVkXCJcclxuICAgICAgW3Jvb3RQcm9wc109XCJyb290UHJvcHNcIlxyXG4gICAgICBbc3R5bGVzXT1cInN0eWxlc1wiXHJcbiAgICAgIFt0aGVtZV09XCJ0aGVtZVwiXHJcbiAgICAgIFtTaG91bGRTdGFydFNlbGVjdGlvbl09XCJvblNob3VsZFN0YXJ0U2VsZWN0aW9uXCJcclxuICAgID5cclxuICAgICAgPFJlYWN0Q29udGVudD48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9SZWFjdENvbnRlbnQ+XHJcbiAgICA8L01hcnF1ZWVTZWxlY3Rpb24+XHJcbiAgYCxcclxuICBzdHlsZXM6IFsncmVhY3QtcmVuZGVyZXInXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZhYk1hcnF1ZWVTZWxlY3Rpb25Db21wb25lbnQgZXh0ZW5kcyBSZWFjdFdyYXBwZXJDb21wb25lbnQ8SU1hcnF1ZWVTZWxlY3Rpb25Qcm9wcz4ge1xyXG4gIEBWaWV3Q2hpbGQoJ3JlYWN0Tm9kZScsIHsgc3RhdGljOiB0cnVlIH0pIHByb3RlY3RlZCByZWFjdE5vZGVSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBJbnB1dCgpIGNvbXBvbmVudFJlZj86IElNYXJxdWVlU2VsZWN0aW9uUHJvcHNbJ2NvbXBvbmVudFJlZiddO1xyXG4gIEBJbnB1dCgpIHNlbGVjdGlvbjogSU1hcnF1ZWVTZWxlY3Rpb25Qcm9wc1snc2VsZWN0aW9uJ107XHJcbiAgQElucHV0KCkgcm9vdFByb3BzPzogSU1hcnF1ZWVTZWxlY3Rpb25Qcm9wc1sncm9vdFByb3BzJ107XHJcbiAgQElucHV0KCkgb25TaG91bGRTdGFydFNlbGVjdGlvbj86IChldjogTW91c2VFdmVudCkgPT4gYm9vbGVhbjtcclxuICBASW5wdXQoKSBpc0VuYWJsZWQ/OiBJTWFycXVlZVNlbGVjdGlvblByb3BzWydpc0VuYWJsZWQnXTtcclxuICBASW5wdXQoKSBpc0RyYWdnaW5nQ29uc3RyYWluZWRUb1Jvb3Q/OiBJTWFycXVlZVNlbGVjdGlvblByb3BzWydpc0RyYWdnaW5nQ29uc3RyYWluZWRUb1Jvb3QnXTtcclxuICBASW5wdXQoKSBjbGFzc05hbWU/OiBJTWFycXVlZVNlbGVjdGlvblByb3BzWydjbGFzc05hbWUnXTtcclxuICBASW5wdXQoKSB0aGVtZT86IElNYXJxdWVlU2VsZWN0aW9uUHJvcHNbJ3RoZW1lJ107XHJcbiAgQElucHV0KCkgc3R5bGVzPzogSU1hcnF1ZWVTZWxlY3Rpb25Qcm9wc1snc3R5bGVzJ107XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmdab25lOiBOZ1pvbmUpIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlciwgeyBuZ1pvbmUsIHNldEhvc3REaXNwbGF5OiB0cnVlIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=