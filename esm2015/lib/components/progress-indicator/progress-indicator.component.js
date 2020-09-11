/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewChild, } from '@angular/core';
export class FabProgressIndicatorComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set renderDescription(value) {
        this._renderDescription = value;
        if (value) {
            this.description = this.createInputJsxRenderer(value)({});
        }
    }
    /**
     * @return {?}
     */
    get renderDescription() {
        return this._renderDescription;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set renderLabel(value) {
        this._renderLabel = value;
        if (value) {
            this.label = this.createInputJsxRenderer(value)({});
        }
    }
    /**
     * @return {?}
     */
    get renderLabel() {
        return this._renderLabel;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onRenderProgress = this.createRenderPropHandler(this.renderProgress);
    }
}
FabProgressIndicatorComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-progress-indicator',
                exportAs: 'fabProgressIndicator',
                template: `
    <ProgressIndicator
      #reactNode
      [ariaValueText]="ariaValueText"
      [barHeight]="barHeight"
      [className]="className"
      [description]="description"
      [label]="label"
      [RenderProgress]="renderProgress && onRenderProgress"
      [percentComplete]="percentComplete"
      [progressHidden]="progressHidden"
      [styles]="styles"
      [theme]="theme"
    >
    </ProgressIndicator>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabProgressIndicatorComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtaW5kaWNhdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy9saWIvY29tcG9uZW50cy9wcm9ncmVzcy1pbmRpY2F0b3IvIiwic291cmNlcyI6WyJwcm9ncmVzcy1pbmRpY2F0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBRSxxQkFBcUIsRUFBdUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxTQUFTLEVBQ1QsU0FBUyxHQUVWLE1BQU0sZUFBZSxDQUFDO0FBeUJ2QixNQUFNLE9BQU8sNkJBQThCLFNBQVEscUJBQThDOzs7Ozs7SUE4Qy9GLFlBQVksVUFBc0IsRUFBRSxpQkFBb0MsRUFBRSxRQUFtQjtRQUMzRixLQUFLLENBQUMsVUFBVSxFQUFFLGlCQUFpQixFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBcENELElBQ0ksaUJBQWlCLENBQUMsS0FBK0I7UUFDbkQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztRQUVoQyxJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzNEO0lBQ0gsQ0FBQzs7OztJQUVELElBQUksaUJBQWlCO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBS0QsSUFDSSxXQUFXLENBQUMsS0FBK0I7UUFDN0MsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFFMUIsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNyRDtJQUNILENBQUM7Ozs7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQzs7OztJQVdELFFBQVE7UUFDTixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM1RSxDQUFDOzs7WUExRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7O0dBZVQ7Z0JBRUQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07eUJBRHRDLGdCQUFnQjthQUUxQjs7OztZQTdCQyxVQUFVO1lBRlYsaUJBQWlCO1lBSWpCLFNBQVM7OzsyQkE2QlIsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7NEJBRXZDLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLOzZCQUNMLEtBQUs7OEJBQ0wsS0FBSzs2QkFDTCxLQUFLO3FCQUNMLEtBQUs7b0JBQ0wsS0FBSztnQ0FFTCxLQUFLOzBCQWdCTCxLQUFLOzs7Ozs7O0lBM0JOLHFEQUE2RTs7SUFFN0Usc0RBQWtFOztJQUNsRSxrREFBMEQ7O0lBQzFELGtEQUEwRDs7SUFDMUQsdURBQXdFOztJQUN4RSx3REFBc0U7O0lBQ3RFLHVEQUFvRTs7SUFDcEUsK0NBQW9EOztJQUNwRCw4Q0FBa0Q7O0lBZWxELG9EQUE4Qjs7Ozs7SUFDOUIsMkRBQXNEOztJQWV0RCw4Q0FBd0I7Ozs7O0lBQ3hCLHFEQUFnRDs7SUFFaEQseURBQTJIIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IFJlYWN0V3JhcHBlckNvbXBvbmVudCwgSnN4UmVuZGVyRnVuYywgSW5wdXRSZW5kZXJlck9wdGlvbnMgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9jb3JlJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0NoaWxkLFxyXG4gIE9uSW5pdCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSVByb2dyZXNzSW5kaWNhdG9yUHJvcHMgfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9Qcm9ncmVzc0luZGljYXRvcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZhYi1wcm9ncmVzcy1pbmRpY2F0b3InLFxyXG4gIGV4cG9ydEFzOiAnZmFiUHJvZ3Jlc3NJbmRpY2F0b3InLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8UHJvZ3Jlc3NJbmRpY2F0b3JcclxuICAgICAgI3JlYWN0Tm9kZVxyXG4gICAgICBbYXJpYVZhbHVlVGV4dF09XCJhcmlhVmFsdWVUZXh0XCJcclxuICAgICAgW2JhckhlaWdodF09XCJiYXJIZWlnaHRcIlxyXG4gICAgICBbY2xhc3NOYW1lXT1cImNsYXNzTmFtZVwiXHJcbiAgICAgIFtkZXNjcmlwdGlvbl09XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgIFtsYWJlbF09XCJsYWJlbFwiXHJcbiAgICAgIFtSZW5kZXJQcm9ncmVzc109XCJyZW5kZXJQcm9ncmVzcyAmJiBvblJlbmRlclByb2dyZXNzXCJcclxuICAgICAgW3BlcmNlbnRDb21wbGV0ZV09XCJwZXJjZW50Q29tcGxldGVcIlxyXG4gICAgICBbcHJvZ3Jlc3NIaWRkZW5dPVwicHJvZ3Jlc3NIaWRkZW5cIlxyXG4gICAgICBbc3R5bGVzXT1cInN0eWxlc1wiXHJcbiAgICAgIFt0aGVtZV09XCJ0aGVtZVwiXHJcbiAgICA+XHJcbiAgICA8L1Byb2dyZXNzSW5kaWNhdG9yPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbJ3JlYWN0LXJlbmRlcmVyJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYWJQcm9ncmVzc0luZGljYXRvckNvbXBvbmVudCBleHRlbmRzIFJlYWN0V3JhcHBlckNvbXBvbmVudDxJUHJvZ3Jlc3NJbmRpY2F0b3JQcm9wcz4gaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBWaWV3Q2hpbGQoJ3JlYWN0Tm9kZScsIHsgc3RhdGljOiB0cnVlIH0pIHByb3RlY3RlZCByZWFjdE5vZGVSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBJbnB1dCgpIGFyaWFWYWx1ZVRleHQ/OiBJUHJvZ3Jlc3NJbmRpY2F0b3JQcm9wc1snYXJpYVZhbHVlVGV4dCddO1xyXG4gIEBJbnB1dCgpIGJhckhlaWdodD86IElQcm9ncmVzc0luZGljYXRvclByb3BzWydiYXJIZWlnaHQnXTtcclxuICBASW5wdXQoKSBjbGFzc05hbWU/OiBJUHJvZ3Jlc3NJbmRpY2F0b3JQcm9wc1snY2xhc3NOYW1lJ107XHJcbiAgQElucHV0KCkgcmVuZGVyUHJvZ3Jlc3M/OiBJbnB1dFJlbmRlcmVyT3B0aW9uczxJUHJvZ3Jlc3NJbmRpY2F0b3JQcm9wcz47XHJcbiAgQElucHV0KCkgcGVyY2VudENvbXBsZXRlPzogSVByb2dyZXNzSW5kaWNhdG9yUHJvcHNbJ3BlcmNlbnRDb21wbGV0ZSddO1xyXG4gIEBJbnB1dCgpIHByb2dyZXNzSGlkZGVuPzogSVByb2dyZXNzSW5kaWNhdG9yUHJvcHNbJ3Byb2dyZXNzSGlkZGVuJ107XHJcbiAgQElucHV0KCkgc3R5bGVzPzogSVByb2dyZXNzSW5kaWNhdG9yUHJvcHNbJ3N0eWxlcyddO1xyXG4gIEBJbnB1dCgpIHRoZW1lPzogSVByb2dyZXNzSW5kaWNhdG9yUHJvcHNbJ3RoZW1lJ107XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHJlbmRlckRlc2NyaXB0aW9uKHZhbHVlOiBJbnB1dFJlbmRlcmVyT3B0aW9uczx7fT4pIHtcclxuICAgIHRoaXMuX3JlbmRlckRlc2NyaXB0aW9uID0gdmFsdWU7XHJcblxyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSB0aGlzLmNyZWF0ZUlucHV0SnN4UmVuZGVyZXIodmFsdWUpKHt9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCByZW5kZXJEZXNjcmlwdGlvbigpOiBJbnB1dFJlbmRlcmVyT3B0aW9uczx7fT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3JlbmRlckRlc2NyaXB0aW9uO1xyXG4gIH1cclxuXHJcbiAgZGVzY3JpcHRpb24/OiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgcHJpdmF0ZSBfcmVuZGVyRGVzY3JpcHRpb24/OiBJbnB1dFJlbmRlcmVyT3B0aW9uczx7fT47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHJlbmRlckxhYmVsKHZhbHVlOiBJbnB1dFJlbmRlcmVyT3B0aW9uczx7fT4pIHtcclxuICAgIHRoaXMuX3JlbmRlckxhYmVsID0gdmFsdWU7XHJcblxyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMubGFiZWwgPSB0aGlzLmNyZWF0ZUlucHV0SnN4UmVuZGVyZXIodmFsdWUpKHt9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCByZW5kZXJMYWJlbCgpOiBJbnB1dFJlbmRlcmVyT3B0aW9uczx7fT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3JlbmRlckxhYmVsO1xyXG4gIH1cclxuXHJcbiAgbGFiZWw/OiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgcHJpdmF0ZSBfcmVuZGVyTGFiZWw/OiBJbnB1dFJlbmRlcmVyT3B0aW9uczx7fT47XHJcblxyXG4gIG9uUmVuZGVyUHJvZ3Jlc3M6IChwcm9wcz86IElQcm9ncmVzc0luZGljYXRvclByb3BzLCBkZWZhdWx0UmVuZGVyPzogSnN4UmVuZGVyRnVuYzxJUHJvZ3Jlc3NJbmRpY2F0b3JQcm9wcz4pID0+IEpTWC5FbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcik7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMub25SZW5kZXJQcm9ncmVzcyA9IHRoaXMuY3JlYXRlUmVuZGVyUHJvcEhhbmRsZXIodGhpcy5yZW5kZXJQcm9ncmVzcyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==