/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewChild, } from '@angular/core';
var FabProgressIndicatorComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabProgressIndicatorComponent, _super);
    function FabProgressIndicatorComponent(elementRef, changeDetectorRef, renderer) {
        return _super.call(this, elementRef, changeDetectorRef, renderer) || this;
    }
    Object.defineProperty(FabProgressIndicatorComponent.prototype, "renderDescription", {
        get: /**
         * @return {?}
         */
        function () {
            return this._renderDescription;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._renderDescription = value;
            if (value) {
                this.description = this.createInputJsxRenderer(value)({});
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FabProgressIndicatorComponent.prototype, "renderLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return this._renderLabel;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._renderLabel = value;
            if (value) {
                this.label = this.createInputJsxRenderer(value)({});
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FabProgressIndicatorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onRenderProgress = this.createRenderPropHandler(this.renderProgress);
    };
    FabProgressIndicatorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-progress-indicator',
                    exportAs: 'fabProgressIndicator',
                    template: "\n    <ProgressIndicator\n      #reactNode\n      [ariaValueText]=\"ariaValueText\"\n      [barHeight]=\"barHeight\"\n      [className]=\"className\"\n      [description]=\"description\"\n      [label]=\"label\"\n      [RenderProgress]=\"renderProgress && onRenderProgress\"\n      [percentComplete]=\"percentComplete\"\n      [progressHidden]=\"progressHidden\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n    >\n    </ProgressIndicator>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabProgressIndicatorComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    FabProgressIndicatorComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
        ariaValueText: [{ type: Input }],
        barHeight: [{ type: Input }],
        className: [{ type: Input }],
        renderProgress: [{ type: Input }],
        percentComplete: [{ type: Input }],
        progressHidden: [{ type: Input }],
        styles: [{ type: Input }],
        theme: [{ type: Input }],
        renderDescription: [{ type: Input }],
        renderLabel: [{ type: Input }]
    };
    return FabProgressIndicatorComponent;
}(ReactWrapperComponent));
export { FabProgressIndicatorComponent };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabProgressIndicatorComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabProgressIndicatorComponent.prototype.ariaValueText;
    /** @type {?} */
    FabProgressIndicatorComponent.prototype.barHeight;
    /** @type {?} */
    FabProgressIndicatorComponent.prototype.className;
    /** @type {?} */
    FabProgressIndicatorComponent.prototype.renderProgress;
    /** @type {?} */
    FabProgressIndicatorComponent.prototype.percentComplete;
    /** @type {?} */
    FabProgressIndicatorComponent.prototype.progressHidden;
    /** @type {?} */
    FabProgressIndicatorComponent.prototype.styles;
    /** @type {?} */
    FabProgressIndicatorComponent.prototype.theme;
    /** @type {?} */
    FabProgressIndicatorComponent.prototype.description;
    /**
     * @type {?}
     * @private
     */
    FabProgressIndicatorComponent.prototype._renderDescription;
    /** @type {?} */
    FabProgressIndicatorComponent.prototype.label;
    /**
     * @type {?}
     * @private
     */
    FabProgressIndicatorComponent.prototype._renderLabel;
    /** @type {?} */
    FabProgressIndicatorComponent.prototype.onRenderProgress;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtaW5kaWNhdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy9saWIvY29tcG9uZW50cy9wcm9ncmVzcy1pbmRpY2F0b3IvIiwic291cmNlcyI6WyJwcm9ncmVzcy1pbmRpY2F0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQUUscUJBQXFCLEVBQXVDLE1BQU0scUJBQXFCLENBQUM7QUFDakcsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsU0FBUyxFQUNULFNBQVMsR0FFVixNQUFNLGVBQWUsQ0FBQztBQUd2QjtJQXNCbUQseURBQThDO0lBOEMvRix1Q0FBWSxVQUFzQixFQUFFLGlCQUFvQyxFQUFFLFFBQW1CO2VBQzNGLGtCQUFNLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLENBQUM7SUFDaEQsQ0FBQztJQXBDRCxzQkFDSSw0REFBaUI7Ozs7UUFRckI7WUFDRSxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztRQUNqQyxDQUFDOzs7OztRQVhELFVBQ3NCLEtBQStCO1lBQ25ELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7WUFFaEMsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDM0Q7UUFDSCxDQUFDOzs7T0FBQTtJQVNELHNCQUNJLHNEQUFXOzs7O1FBUWY7WUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDM0IsQ0FBQzs7Ozs7UUFYRCxVQUNnQixLQUErQjtZQUM3QyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUUxQixJQUFJLEtBQUssRUFBRTtnQkFDVCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNyRDtRQUNILENBQUM7OztPQUFBOzs7O0lBZUQsZ0RBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDNUUsQ0FBQzs7Z0JBMUVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxRQUFRLEVBQUUscWNBZVQ7b0JBRUQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07NkJBRHRDLGdCQUFnQjtpQkFFMUI7Ozs7Z0JBN0JDLFVBQVU7Z0JBRlYsaUJBQWlCO2dCQUlqQixTQUFTOzs7K0JBNkJSLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dDQUV2QyxLQUFLOzRCQUNMLEtBQUs7NEJBQ0wsS0FBSztpQ0FDTCxLQUFLO2tDQUNMLEtBQUs7aUNBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7b0NBRUwsS0FBSzs4QkFnQkwsS0FBSzs7SUF5QlIsb0NBQUM7Q0FBQSxBQTNFRCxDQXNCbUQscUJBQXFCLEdBcUR2RTtTQXJEWSw2QkFBNkI7Ozs7OztJQUN4QyxxREFBNkU7O0lBRTdFLHNEQUFrRTs7SUFDbEUsa0RBQTBEOztJQUMxRCxrREFBMEQ7O0lBQzFELHVEQUF3RTs7SUFDeEUsd0RBQXNFOztJQUN0RSx1REFBb0U7O0lBQ3BFLCtDQUFvRDs7SUFDcEQsOENBQWtEOztJQWVsRCxvREFBOEI7Ozs7O0lBQzlCLDJEQUFzRDs7SUFldEQsOENBQXdCOzs7OztJQUN4QixxREFBZ0Q7O0lBRWhELHlEQUEySCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyBSZWFjdFdyYXBwZXJDb21wb25lbnQsIEpzeFJlbmRlckZ1bmMsIElucHV0UmVuZGVyZXJPcHRpb25zIH0gZnJvbSAnQGFuZ3VsYXItcmVhY3QvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFZpZXdDaGlsZCxcclxuICBPbkluaXQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElQcm9ncmVzc0luZGljYXRvclByb3BzIH0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvUHJvZ3Jlc3NJbmRpY2F0b3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmYWItcHJvZ3Jlc3MtaW5kaWNhdG9yJyxcclxuICBleHBvcnRBczogJ2ZhYlByb2dyZXNzSW5kaWNhdG9yJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPFByb2dyZXNzSW5kaWNhdG9yXHJcbiAgICAgICNyZWFjdE5vZGVcclxuICAgICAgW2FyaWFWYWx1ZVRleHRdPVwiYXJpYVZhbHVlVGV4dFwiXHJcbiAgICAgIFtiYXJIZWlnaHRdPVwiYmFySGVpZ2h0XCJcclxuICAgICAgW2NsYXNzTmFtZV09XCJjbGFzc05hbWVcIlxyXG4gICAgICBbZGVzY3JpcHRpb25dPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICBbbGFiZWxdPVwibGFiZWxcIlxyXG4gICAgICBbUmVuZGVyUHJvZ3Jlc3NdPVwicmVuZGVyUHJvZ3Jlc3MgJiYgb25SZW5kZXJQcm9ncmVzc1wiXHJcbiAgICAgIFtwZXJjZW50Q29tcGxldGVdPVwicGVyY2VudENvbXBsZXRlXCJcclxuICAgICAgW3Byb2dyZXNzSGlkZGVuXT1cInByb2dyZXNzSGlkZGVuXCJcclxuICAgICAgW3N0eWxlc109XCJzdHlsZXNcIlxyXG4gICAgICBbdGhlbWVdPVwidGhlbWVcIlxyXG4gICAgPlxyXG4gICAgPC9Qcm9ncmVzc0luZGljYXRvcj5cclxuICBgLFxyXG4gIHN0eWxlczogWydyZWFjdC1yZW5kZXJlciddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmFiUHJvZ3Jlc3NJbmRpY2F0b3JDb21wb25lbnQgZXh0ZW5kcyBSZWFjdFdyYXBwZXJDb21wb25lbnQ8SVByb2dyZXNzSW5kaWNhdG9yUHJvcHM+IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBAVmlld0NoaWxkKCdyZWFjdE5vZGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcm90ZWN0ZWQgcmVhY3ROb2RlUmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICBASW5wdXQoKSBhcmlhVmFsdWVUZXh0PzogSVByb2dyZXNzSW5kaWNhdG9yUHJvcHNbJ2FyaWFWYWx1ZVRleHQnXTtcclxuICBASW5wdXQoKSBiYXJIZWlnaHQ/OiBJUHJvZ3Jlc3NJbmRpY2F0b3JQcm9wc1snYmFySGVpZ2h0J107XHJcbiAgQElucHV0KCkgY2xhc3NOYW1lPzogSVByb2dyZXNzSW5kaWNhdG9yUHJvcHNbJ2NsYXNzTmFtZSddO1xyXG4gIEBJbnB1dCgpIHJlbmRlclByb2dyZXNzPzogSW5wdXRSZW5kZXJlck9wdGlvbnM8SVByb2dyZXNzSW5kaWNhdG9yUHJvcHM+O1xyXG4gIEBJbnB1dCgpIHBlcmNlbnRDb21wbGV0ZT86IElQcm9ncmVzc0luZGljYXRvclByb3BzWydwZXJjZW50Q29tcGxldGUnXTtcclxuICBASW5wdXQoKSBwcm9ncmVzc0hpZGRlbj86IElQcm9ncmVzc0luZGljYXRvclByb3BzWydwcm9ncmVzc0hpZGRlbiddO1xyXG4gIEBJbnB1dCgpIHN0eWxlcz86IElQcm9ncmVzc0luZGljYXRvclByb3BzWydzdHlsZXMnXTtcclxuICBASW5wdXQoKSB0aGVtZT86IElQcm9ncmVzc0luZGljYXRvclByb3BzWyd0aGVtZSddO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCByZW5kZXJEZXNjcmlwdGlvbih2YWx1ZTogSW5wdXRSZW5kZXJlck9wdGlvbnM8e30+KSB7XHJcbiAgICB0aGlzLl9yZW5kZXJEZXNjcmlwdGlvbiA9IHZhbHVlO1xyXG5cclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICB0aGlzLmRlc2NyaXB0aW9uID0gdGhpcy5jcmVhdGVJbnB1dEpzeFJlbmRlcmVyKHZhbHVlKSh7fSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgcmVuZGVyRGVzY3JpcHRpb24oKTogSW5wdXRSZW5kZXJlck9wdGlvbnM8e30+IHtcclxuICAgIHJldHVybiB0aGlzLl9yZW5kZXJEZXNjcmlwdGlvbjtcclxuICB9XHJcblxyXG4gIGRlc2NyaXB0aW9uPzogUmVhY3QuUmVhY3ROb2RlO1xyXG4gIHByaXZhdGUgX3JlbmRlckRlc2NyaXB0aW9uPzogSW5wdXRSZW5kZXJlck9wdGlvbnM8e30+O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCByZW5kZXJMYWJlbCh2YWx1ZTogSW5wdXRSZW5kZXJlck9wdGlvbnM8e30+KSB7XHJcbiAgICB0aGlzLl9yZW5kZXJMYWJlbCA9IHZhbHVlO1xyXG5cclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICB0aGlzLmxhYmVsID0gdGhpcy5jcmVhdGVJbnB1dEpzeFJlbmRlcmVyKHZhbHVlKSh7fSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgcmVuZGVyTGFiZWwoKTogSW5wdXRSZW5kZXJlck9wdGlvbnM8e30+IHtcclxuICAgIHJldHVybiB0aGlzLl9yZW5kZXJMYWJlbDtcclxuICB9XHJcblxyXG4gIGxhYmVsPzogUmVhY3QuUmVhY3ROb2RlO1xyXG4gIHByaXZhdGUgX3JlbmRlckxhYmVsPzogSW5wdXRSZW5kZXJlck9wdGlvbnM8e30+O1xyXG5cclxuICBvblJlbmRlclByb2dyZXNzOiAocHJvcHM/OiBJUHJvZ3Jlc3NJbmRpY2F0b3JQcm9wcywgZGVmYXVsdFJlbmRlcj86IEpzeFJlbmRlckZ1bmM8SVByb2dyZXNzSW5kaWNhdG9yUHJvcHM+KSA9PiBKU1guRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcbiAgICBzdXBlcihlbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXIpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLm9uUmVuZGVyUHJvZ3Jlc3MgPSB0aGlzLmNyZWF0ZVJlbmRlclByb3BIYW5kbGVyKHRoaXMucmVuZGVyUHJvZ3Jlc3MpO1xyXG4gIH1cclxufVxyXG4iXX0=