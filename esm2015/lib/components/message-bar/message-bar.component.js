/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, NgZone, Output, Renderer2, ViewChild, } from '@angular/core';
export class FabMessageBarComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, { ngZone });
        // Non-React prop, used together with onDismiss to allow it to be an Output EventEmitter.
        this.dismissable = null;
        this.onDismiss = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const onRenderActions = this.createRenderPropHandler(this.renderActions);
        this.actions = onRenderActions();
    }
    /**
     * @return {?}
     */
    get onDismissInternal() {
        if (!this.dismissable) {
            return null;
        }
        return (/**
         * @param {?} ev
         * @return {?}
         */
        ev => {
            this.onDismiss.emit(ev && ev.nativeEvent);
        });
    }
}
FabMessageBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-message-bar',
                exportAs: 'fabMessageBar',
                template: `
    <MessageBar
      #reactNode
      [componentRef]="componentRef"
      [messageBarType]="messageBarType"
      [isMultiline]="isMultiline"
      [dismissButtonAriaLabel]="dismissButtonAriaLabel"
      [truncated]="truncated"
      [overflowButtonAriaLabel]="overflowButtonAriaLabel"
      [className]="className"
      [theme]="theme"
      [styles]="styles"
      [Dismiss]="onDismissInternal"
      [actions]="renderActions && actions"
    >
      <ReactContent><ng-content></ng-content></ReactContent>
    </MessageBar>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabMessageBarComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabMessageBarComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    componentRef: [{ type: Input }],
    messageBarType: [{ type: Input }],
    isMultiline: [{ type: Input }],
    dismissButtonAriaLabel: [{ type: Input }],
    truncated: [{ type: Input }],
    overflowButtonAriaLabel: [{ type: Input }],
    className: [{ type: Input }],
    theme: [{ type: Input }],
    styles: [{ type: Input }],
    renderActions: [{ type: Input }],
    dismissable: [{ type: Input }],
    onDismiss: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabMessageBarComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabMessageBarComponent.prototype.componentRef;
    /** @type {?} */
    FabMessageBarComponent.prototype.messageBarType;
    /** @type {?} */
    FabMessageBarComponent.prototype.isMultiline;
    /** @type {?} */
    FabMessageBarComponent.prototype.dismissButtonAriaLabel;
    /** @type {?} */
    FabMessageBarComponent.prototype.truncated;
    /** @type {?} */
    FabMessageBarComponent.prototype.overflowButtonAriaLabel;
    /** @type {?} */
    FabMessageBarComponent.prototype.className;
    /** @type {?} */
    FabMessageBarComponent.prototype.theme;
    /** @type {?} */
    FabMessageBarComponent.prototype.styles;
    /** @type {?} */
    FabMessageBarComponent.prototype.renderActions;
    /** @type {?} */
    FabMessageBarComponent.prototype.dismissable;
    /** @type {?} */
    FabMessageBarComponent.prototype.onDismiss;
    /** @type {?} */
    FabMessageBarComponent.prototype.actions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljL2xpYi9jb21wb25lbnRzL21lc3NhZ2UtYmFyLyIsInNvdXJjZXMiOlsibWVzc2FnZS1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBd0IscUJBQXFCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNsRixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUVOLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBMkJ2QixNQUFNLE9BQU8sc0JBQXVCLFNBQVEscUJBQXVDOzs7Ozs7O0lBc0JqRixZQUFZLFVBQXNCLEVBQUUsaUJBQW9DLEVBQUUsUUFBbUIsRUFBRSxNQUFjO1FBQzNHLEtBQUssQ0FBQyxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQzs7UUFQcEQsZ0JBQVcsR0FBYSxJQUFJLENBQUM7UUFFbkIsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7SUFNOUQsQ0FBQzs7OztJQUVELFFBQVE7O2NBQ0EsZUFBZSxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3hFLElBQUksQ0FBQyxPQUFPLEdBQUcsZUFBZSxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7OztJQUVELElBQUksaUJBQWlCO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRDs7OztRQUFPLEVBQUUsQ0FBQyxFQUFFO1lBQ1YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM1QyxDQUFDLEVBQUM7SUFDSixDQUFDOzs7WUEvREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUJUO2dCQUVELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO3lCQUR0QyxnQkFBZ0I7YUFFMUI7Ozs7WUFsQ0MsVUFBVTtZQUZWLGlCQUFpQjtZQVFqQixTQUFTO1lBSFQsTUFBTTs7OzJCQWlDTCxTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsyQkFFdkMsS0FBSzs2QkFDTCxLQUFLOzBCQUNMLEtBQUs7cUNBQ0wsS0FBSzt3QkFDTCxLQUFLO3NDQUNMLEtBQUs7d0JBQ0wsS0FBSztvQkFDTCxLQUFLO3FCQUNMLEtBQUs7NEJBRUwsS0FBSzswQkFHTCxLQUFLO3dCQUVMLE1BQU07Ozs7Ozs7SUFqQlAsOENBQTZFOztJQUU3RSw4Q0FBeUQ7O0lBQ3pELGdEQUE2RDs7SUFDN0QsNkNBQXVEOztJQUN2RCx3REFBNkU7O0lBQzdFLDJDQUFtRDs7SUFDbkQseURBQStFOztJQUMvRSwyQ0FBbUQ7O0lBQ25ELHVDQUEyQzs7SUFDM0Msd0NBQTZDOztJQUU3QywrQ0FBa0Q7O0lBR2xELDZDQUFzQzs7SUFFdEMsMkNBQThEOztJQUU5RCx5Q0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgSW5wdXRSZW5kZXJlck9wdGlvbnMsIFJlYWN0V3JhcHBlckNvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0NoaWxkLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJTWVzc2FnZUJhclByb3BzIH0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvTWVzc2FnZUJhcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZhYi1tZXNzYWdlLWJhcicsXHJcbiAgZXhwb3J0QXM6ICdmYWJNZXNzYWdlQmFyJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPE1lc3NhZ2VCYXJcclxuICAgICAgI3JlYWN0Tm9kZVxyXG4gICAgICBbY29tcG9uZW50UmVmXT1cImNvbXBvbmVudFJlZlwiXHJcbiAgICAgIFttZXNzYWdlQmFyVHlwZV09XCJtZXNzYWdlQmFyVHlwZVwiXHJcbiAgICAgIFtpc011bHRpbGluZV09XCJpc011bHRpbGluZVwiXHJcbiAgICAgIFtkaXNtaXNzQnV0dG9uQXJpYUxhYmVsXT1cImRpc21pc3NCdXR0b25BcmlhTGFiZWxcIlxyXG4gICAgICBbdHJ1bmNhdGVkXT1cInRydW5jYXRlZFwiXHJcbiAgICAgIFtvdmVyZmxvd0J1dHRvbkFyaWFMYWJlbF09XCJvdmVyZmxvd0J1dHRvbkFyaWFMYWJlbFwiXHJcbiAgICAgIFtjbGFzc05hbWVdPVwiY2xhc3NOYW1lXCJcclxuICAgICAgW3RoZW1lXT1cInRoZW1lXCJcclxuICAgICAgW3N0eWxlc109XCJzdHlsZXNcIlxyXG4gICAgICBbRGlzbWlzc109XCJvbkRpc21pc3NJbnRlcm5hbFwiXHJcbiAgICAgIFthY3Rpb25zXT1cInJlbmRlckFjdGlvbnMgJiYgYWN0aW9uc1wiXHJcbiAgICA+XHJcbiAgICAgIDxSZWFjdENvbnRlbnQ+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvUmVhY3RDb250ZW50PlxyXG4gICAgPC9NZXNzYWdlQmFyPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbJ3JlYWN0LXJlbmRlcmVyJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYWJNZXNzYWdlQmFyQ29tcG9uZW50IGV4dGVuZHMgUmVhY3RXcmFwcGVyQ29tcG9uZW50PElNZXNzYWdlQmFyUHJvcHM+IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBAVmlld0NoaWxkKCdyZWFjdE5vZGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcm90ZWN0ZWQgcmVhY3ROb2RlUmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICBASW5wdXQoKSBjb21wb25lbnRSZWY/OiBJTWVzc2FnZUJhclByb3BzWydjb21wb25lbnRSZWYnXTtcclxuICBASW5wdXQoKSBtZXNzYWdlQmFyVHlwZT86IElNZXNzYWdlQmFyUHJvcHNbJ21lc3NhZ2VCYXJUeXBlJ107XHJcbiAgQElucHV0KCkgaXNNdWx0aWxpbmU/OiBJTWVzc2FnZUJhclByb3BzWydpc011bHRpbGluZSddO1xyXG4gIEBJbnB1dCgpIGRpc21pc3NCdXR0b25BcmlhTGFiZWw/OiBJTWVzc2FnZUJhclByb3BzWydkaXNtaXNzQnV0dG9uQXJpYUxhYmVsJ107XHJcbiAgQElucHV0KCkgdHJ1bmNhdGVkPzogSU1lc3NhZ2VCYXJQcm9wc1sndHJ1bmNhdGVkJ107XHJcbiAgQElucHV0KCkgb3ZlcmZsb3dCdXR0b25BcmlhTGFiZWw/OiBJTWVzc2FnZUJhclByb3BzWydvdmVyZmxvd0J1dHRvbkFyaWFMYWJlbCddO1xyXG4gIEBJbnB1dCgpIGNsYXNzTmFtZT86IElNZXNzYWdlQmFyUHJvcHNbJ2NsYXNzTmFtZSddO1xyXG4gIEBJbnB1dCgpIHRoZW1lPzogSU1lc3NhZ2VCYXJQcm9wc1sndGhlbWUnXTtcclxuICBASW5wdXQoKSBzdHlsZXM/OiBJTWVzc2FnZUJhclByb3BzWydzdHlsZXMnXTtcclxuXHJcbiAgQElucHV0KCkgcmVuZGVyQWN0aW9ucz86IElucHV0UmVuZGVyZXJPcHRpb25zPHt9PjtcclxuXHJcbiAgLy8gTm9uLVJlYWN0IHByb3AsIHVzZWQgdG9nZXRoZXIgd2l0aCBvbkRpc21pc3MgdG8gYWxsb3cgaXQgdG8gYmUgYW4gT3V0cHV0IEV2ZW50RW1pdHRlci5cclxuICBASW5wdXQoKSBkaXNtaXNzYWJsZT86IGJvb2xlYW4gPSBudWxsO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25EaXNtaXNzID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xyXG5cclxuICBhY3Rpb25zOiBKU1guRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCBuZ1pvbmU6IE5nWm9uZSkge1xyXG4gICAgc3VwZXIoZWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyLCB7IG5nWm9uZSB9KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgY29uc3Qgb25SZW5kZXJBY3Rpb25zID0gdGhpcy5jcmVhdGVSZW5kZXJQcm9wSGFuZGxlcih0aGlzLnJlbmRlckFjdGlvbnMpO1xyXG4gICAgdGhpcy5hY3Rpb25zID0gb25SZW5kZXJBY3Rpb25zKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgb25EaXNtaXNzSW50ZXJuYWwoKTogbnVsbCB8IElNZXNzYWdlQmFyUHJvcHNbJ29uRGlzbWlzcyddIHtcclxuICAgIGlmICghdGhpcy5kaXNtaXNzYWJsZSkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZXYgPT4ge1xyXG4gICAgICB0aGlzLm9uRGlzbWlzcy5lbWl0KGV2ICYmIGV2Lm5hdGl2ZUV2ZW50KTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==