/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, NgZone, Output, Renderer2, ViewChild, } from '@angular/core';
export class FabPanelComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, { ngZone });
        this.onLightDismissClick = new EventEmitter();
        this.onOpen = new EventEmitter();
        this.onOpened = new EventEmitter();
        this.onDismiss = new EventEmitter();
        this.onDismissed = new EventEmitter();
        // coming from React context - we need to bind to this so we can access the Angular Component properties
        this.onRenderHeader = this.onRenderHeader.bind(this);
        this.onDismissHandler = this.onDismissHandler.bind(this);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onRenderNavigation = this.createRenderPropHandler(this.renderNavigation);
        this.onRenderNavigationContent = this.createRenderPropHandler(this.renderNavigationContent);
        this._renderHeader = this.createInputJsxRenderer(this.renderHeader);
        this.onRenderBody = this.createRenderPropHandler(this.renderBody);
        this.onRenderFooter = this.createRenderPropHandler(this.renderFooter);
        this.onRenderFooterContent = this.createRenderPropHandler(this.renderFooterContent);
    }
    /**
     * @param {?=} props
     * @param {?=} defaultRender
     * @param {?=} headerTextId
     * @return {?}
     */
    onRenderHeader(props, defaultRender, headerTextId) {
        if (!this.renderHeader) {
            return typeof defaultRender === 'function' ? defaultRender(props, defaultRender, headerTextId) : null;
        }
        return this._renderHeader({ props, headerTextId });
    }
    /**
     * @param {?=} ev
     * @return {?}
     */
    onDismissHandler(ev) {
        this.onDismiss.emit({
            ev: ev && ev.nativeEvent,
        });
    }
}
FabPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-panel',
                exportAs: 'fabPanel',
                template: `
    <Panel
      #reactNode
      [componentRef]="componentRef"
      [isOpen]="isOpen"
      [hasCloseButton]="hasCloseButton"
      [isLightDismiss]="isLightDismiss"
      [isHiddenOnDismiss]="isHiddenOnDismiss"
      [isBlocking]="isBlocking"
      [isFooterAtBottom]="isFooterAtBottom"
      [headerText]="headerText"
      [styles]="styles"
      [theme]="theme"
      [className]="className"
      [type]="type"
      [customWidth]="customWidth"
      [closeButtonAriaLabel]="closeButtonAriaLabel"
      [headerClassName]="headerClassName"
      [elementToFocusOnDismiss]="elementToFocusOnDismiss"
      [ignoreExternalFocusing]="ignoreExternalFocusing"
      [forceFocusInsideTrap]="forceFocusInsideTrap"
      [firstFocusableSelector]="firstFocusableSelector"
      [focusTrapZoneProps]="focusTrapZoneProps"
      [layerProps]="layerProps"
      [componentId]="componentId"
      [RenderHeader]="renderHeader && onRenderHeader"
      [RenderNavigation]="renderNavigation && onRenderNavigation"
      [RenderNavigationContent]="renderNavigationContent && onRenderNavigationContent"
      [RenderBody]="renderBody && onRenderBody"
      [RenderFooter]="renderFooter && onRenderFooter"
      [RenderFooterContent]="renderFooterContent && onRenderFooterContent"
      [Dismiss]="onDismissHandler"
      (onOpen)="onOpen.emit($event)"
      (onOpened)="onOpened.emit($event)"
      (onDismissed)="onDismissed.emit($event)"
      (onLightDismissClick)="onLightDismissClick.emit($event)"
    >
      <ReactContent><ng-content></ng-content></ReactContent>
    </Panel>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabPanelComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabPanelComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    componentRef: [{ type: Input }],
    isOpen: [{ type: Input }],
    hasCloseButton: [{ type: Input }],
    isLightDismiss: [{ type: Input }],
    isHiddenOnDismiss: [{ type: Input }],
    isBlocking: [{ type: Input }],
    isFooterAtBottom: [{ type: Input }],
    headerText: [{ type: Input }],
    styles: [{ type: Input }],
    theme: [{ type: Input }],
    className: [{ type: Input }],
    type: [{ type: Input }],
    customWidth: [{ type: Input }],
    closeButtonAriaLabel: [{ type: Input }],
    headerClassName: [{ type: Input }],
    elementToFocusOnDismiss: [{ type: Input }],
    ignoreExternalFocusing: [{ type: Input }],
    forceFocusInsideTrap: [{ type: Input }],
    firstFocusableSelector: [{ type: Input }],
    focusTrapZoneProps: [{ type: Input }],
    layerProps: [{ type: Input }],
    componentId: [{ type: Input }],
    renderNavigation: [{ type: Input }],
    renderNavigationContent: [{ type: Input }],
    renderHeader: [{ type: Input }],
    renderBody: [{ type: Input }],
    renderFooter: [{ type: Input }],
    renderFooterContent: [{ type: Input }],
    onLightDismissClick: [{ type: Output }],
    onOpen: [{ type: Output }],
    onOpened: [{ type: Output }],
    onDismiss: [{ type: Output }],
    onDismissed: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabPanelComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabPanelComponent.prototype.componentRef;
    /** @type {?} */
    FabPanelComponent.prototype.isOpen;
    /** @type {?} */
    FabPanelComponent.prototype.hasCloseButton;
    /** @type {?} */
    FabPanelComponent.prototype.isLightDismiss;
    /** @type {?} */
    FabPanelComponent.prototype.isHiddenOnDismiss;
    /** @type {?} */
    FabPanelComponent.prototype.isBlocking;
    /** @type {?} */
    FabPanelComponent.prototype.isFooterAtBottom;
    /** @type {?} */
    FabPanelComponent.prototype.headerText;
    /** @type {?} */
    FabPanelComponent.prototype.styles;
    /** @type {?} */
    FabPanelComponent.prototype.theme;
    /** @type {?} */
    FabPanelComponent.prototype.className;
    /** @type {?} */
    FabPanelComponent.prototype.type;
    /** @type {?} */
    FabPanelComponent.prototype.customWidth;
    /** @type {?} */
    FabPanelComponent.prototype.closeButtonAriaLabel;
    /** @type {?} */
    FabPanelComponent.prototype.headerClassName;
    /** @type {?} */
    FabPanelComponent.prototype.elementToFocusOnDismiss;
    /** @type {?} */
    FabPanelComponent.prototype.ignoreExternalFocusing;
    /** @type {?} */
    FabPanelComponent.prototype.forceFocusInsideTrap;
    /** @type {?} */
    FabPanelComponent.prototype.firstFocusableSelector;
    /** @type {?} */
    FabPanelComponent.prototype.focusTrapZoneProps;
    /** @type {?} */
    FabPanelComponent.prototype.layerProps;
    /** @type {?} */
    FabPanelComponent.prototype.componentId;
    /** @type {?} */
    FabPanelComponent.prototype.renderNavigation;
    /** @type {?} */
    FabPanelComponent.prototype.renderNavigationContent;
    /** @type {?} */
    FabPanelComponent.prototype.renderHeader;
    /** @type {?} */
    FabPanelComponent.prototype.renderBody;
    /** @type {?} */
    FabPanelComponent.prototype.renderFooter;
    /** @type {?} */
    FabPanelComponent.prototype.renderFooterContent;
    /** @type {?} */
    FabPanelComponent.prototype.onLightDismissClick;
    /** @type {?} */
    FabPanelComponent.prototype.onOpen;
    /** @type {?} */
    FabPanelComponent.prototype.onOpened;
    /** @type {?} */
    FabPanelComponent.prototype.onDismiss;
    /** @type {?} */
    FabPanelComponent.prototype.onDismissed;
    /**
     * @type {?}
     * @private
     */
    FabPanelComponent.prototype._renderHeader;
    /** @type {?} */
    FabPanelComponent.prototype.onRenderNavigation;
    /** @type {?} */
    FabPanelComponent.prototype.onRenderNavigationContent;
    /** @type {?} */
    FabPanelComponent.prototype.onRenderBody;
    /** @type {?} */
    FabPanelComponent.prototype.onRenderFooter;
    /** @type {?} */
    FabPanelComponent.prototype.onRenderFooterContent;
}
/**
 * Counterpart of `IPanelHeaderRenderer`.
 * @record
 */
export function IPanelHeaderRenderContext() { }
if (false) {
    /** @type {?|undefined} */
    IPanelHeaderRenderContext.prototype.props;
    /** @type {?|undefined} */
    IPanelHeaderRenderContext.prototype.headerTextId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljL2xpYi9jb21wb25lbnRzL3BhbmVsLyIsInNvdXJjZXMiOlsicGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBdUMscUJBQXFCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUVOLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBaUR2QixNQUFNLE9BQU8saUJBQWtCLFNBQVEscUJBQWtDOzs7Ozs7O0lBOEN2RSxZQUFZLFVBQXNCLEVBQUUsaUJBQW9DLEVBQUUsUUFBbUIsRUFBRSxNQUFjO1FBQzNHLEtBQUssQ0FBQyxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztRQWQxQyx3QkFBbUIsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQy9DLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQ2xDLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQ3BDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBa0IsQ0FBQztRQUMvQyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFZeEQsd0dBQXdHO1FBQ3hHLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsa0JB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QUFnRDs7SUFDaEQsd0NBQWtEOztJQUVsRCw2Q0FBOEQ7O0lBQzlELG9EQUFxRTs7SUFDckUseUNBQXdFOztJQUN4RSx1Q0FBd0Q7O0lBQ3hELHlDQUEwRDs7SUFDMUQsZ0RBQWlFOztJQUVqRSxnREFBa0U7O0lBQ2xFLG1DQUFxRDs7SUFDckQscUNBQXVEOztJQUN2RCxzQ0FBa0U7O0lBQ2xFLHdDQUEwRDs7Ozs7SUFFMUQsMENBQWdFOztJQUNoRSwrQ0FBcUc7O0lBQ3JHLHNEQUE0Rzs7SUFDNUcseUNBQStGOztJQUMvRiwyQ0FBaUc7O0lBQ2pHLGtEQUF3Rzs7Ozs7O0FBeUMxRywrQ0FHQzs7O0lBRkMsMENBQW9COztJQUNwQixpREFBa0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgSW5wdXRSZW5kZXJlck9wdGlvbnMsIEpzeFJlbmRlckZ1bmMsIFJlYWN0V3JhcHBlckNvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0NoaWxkLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJUGFuZWxIZWFkZXJSZW5kZXJlciwgSVBhbmVsUHJvcHMgfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9QYW5lbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZhYi1wYW5lbCcsXHJcbiAgZXhwb3J0QXM6ICdmYWJQYW5lbCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxQYW5lbFxyXG4gICAgICAjcmVhY3ROb2RlXHJcbiAgICAgIFtjb21wb25lbnRSZWZdPVwiY29tcG9uZW50UmVmXCJcclxuICAgICAgW2lzT3Blbl09XCJpc09wZW5cIlxyXG4gICAgICBbaGFzQ2xvc2VCdXR0b25dPVwiaGFzQ2xvc2VCdXR0b25cIlxyXG4gICAgICBbaXNMaWdodERpc21pc3NdPVwiaXNMaWdodERpc21pc3NcIlxyXG4gICAgICBbaXNIaWRkZW5PbkRpc21pc3NdPVwiaXNIaWRkZW5PbkRpc21pc3NcIlxyXG4gICAgICBbaXNCbG9ja2luZ109XCJpc0Jsb2NraW5nXCJcclxuICAgICAgW2lzRm9vdGVyQXRCb3R0b21dPVwiaXNGb290ZXJBdEJvdHRvbVwiXHJcbiAgICAgIFtoZWFkZXJUZXh0XT1cImhlYWRlclRleHRcIlxyXG4gICAgICBbc3R5bGVzXT1cInN0eWxlc1wiXHJcbiAgICAgIFt0aGVtZV09XCJ0aGVtZVwiXHJcbiAgICAgIFtjbGFzc05hbWVdPVwiY2xhc3NOYW1lXCJcclxuICAgICAgW3R5cGVdPVwidHlwZVwiXHJcbiAgICAgIFtjdXN0b21XaWR0aF09XCJjdXN0b21XaWR0aFwiXHJcbiAgICAgIFtjbG9zZUJ1dHRvbkFyaWFMYWJlbF09XCJjbG9zZUJ1dHRvbkFyaWFMYWJlbFwiXHJcbiAgICAgIFtoZWFkZXJDbGFzc05hbWVdPVwiaGVhZGVyQ2xhc3NOYW1lXCJcclxuICAgICAgW2VsZW1lbnRUb0ZvY3VzT25EaXNtaXNzXT1cImVsZW1lbnRUb0ZvY3VzT25EaXNtaXNzXCJcclxuICAgICAgW2lnbm9yZUV4dGVybmFsRm9jdXNpbmddPVwiaWdub3JlRXh0ZXJuYWxGb2N1c2luZ1wiXHJcbiAgICAgIFtmb3JjZUZvY3VzSW5zaWRlVHJhcF09XCJmb3JjZUZvY3VzSW5zaWRlVHJhcFwiXHJcbiAgICAgIFtmaXJzdEZvY3VzYWJsZVNlbGVjdG9yXT1cImZpcnN0Rm9jdXNhYmxlU2VsZWN0b3JcIlxyXG4gICAgICBbZm9jdXNUcmFwWm9uZVByb3BzXT1cImZvY3VzVHJhcFpvbmVQcm9wc1wiXHJcbiAgICAgIFtsYXllclByb3BzXT1cImxheWVyUHJvcHNcIlxyXG4gICAgICBbY29tcG9uZW50SWRdPVwiY29tcG9uZW50SWRcIlxyXG4gICAgICBbUmVuZGVySGVhZGVyXT1cInJlbmRlckhlYWRlciAmJiBvblJlbmRlckhlYWRlclwiXHJcbiAgICAgIFtSZW5kZXJOYXZpZ2F0aW9uXT1cInJlbmRlck5hdmlnYXRpb24gJiYgb25SZW5kZXJOYXZpZ2F0aW9uXCJcclxuICAgICAgW1JlbmRlck5hdmlnYXRpb25Db250ZW50XT1cInJlbmRlck5hdmlnYXRpb25Db250ZW50ICYmIG9uUmVuZGVyTmF2aWdhdGlvbkNvbnRlbnRcIlxyXG4gICAgICBbUmVuZGVyQm9keV09XCJyZW5kZXJCb2R5ICYmIG9uUmVuZGVyQm9keVwiXHJcbiAgICAgIFtSZW5kZXJGb290ZXJdPVwicmVuZGVyRm9vdGVyICYmIG9uUmVuZGVyRm9vdGVyXCJcclxuICAgICAgW1JlbmRlckZvb3RlckNvbnRlbnRdPVwicmVuZGVyRm9vdGVyQ29udGVudCAmJiBvblJlbmRlckZvb3RlckNvbnRlbnRcIlxyXG4gICAgICBbRGlzbWlzc109XCJvbkRpc21pc3NIYW5kbGVyXCJcclxuICAgICAgKG9uT3Blbik9XCJvbk9wZW4uZW1pdCgkZXZlbnQpXCJcclxuICAgICAgKG9uT3BlbmVkKT1cIm9uT3BlbmVkLmVtaXQoJGV2ZW50KVwiXHJcbiAgICAgIChvbkRpc21pc3NlZCk9XCJvbkRpc21pc3NlZC5lbWl0KCRldmVudClcIlxyXG4gICAgICAob25MaWdodERpc21pc3NDbGljayk9XCJvbkxpZ2h0RGlzbWlzc0NsaWNrLmVtaXQoJGV2ZW50KVwiXHJcbiAgICA+XHJcbiAgICAgIDxSZWFjdENvbnRlbnQ+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvUmVhY3RDb250ZW50PlxyXG4gICAgPC9QYW5lbD5cclxuICBgLFxyXG4gIHN0eWxlczogWydyZWFjdC1yZW5kZXJlciddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmFiUGFuZWxDb21wb25lbnQgZXh0ZW5kcyBSZWFjdFdyYXBwZXJDb21wb25lbnQ8SVBhbmVsUHJvcHM+IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBAVmlld0NoaWxkKCdyZWFjdE5vZGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcm90ZWN0ZWQgcmVhY3ROb2RlUmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICBASW5wdXQoKSBjb21wb25lbnRSZWY/OiBJUGFuZWxQcm9wc1snY29tcG9uZW50UmVmJ107XHJcbiAgQElucHV0KCkgaXNPcGVuPzogSVBhbmVsUHJvcHNbJ2lzT3BlbiddO1xyXG4gIEBJbnB1dCgpIGhhc0Nsb3NlQnV0dG9uPzogSVBhbmVsUHJvcHNbJ2hhc0Nsb3NlQnV0dG9uJ107XHJcbiAgQElucHV0KCkgaXNMaWdodERpc21pc3M/OiBJUGFuZWxQcm9wc1snaXNMaWdodERpc21pc3MnXTtcclxuICBASW5wdXQoKSBpc0hpZGRlbk9uRGlzbWlzcz86IElQYW5lbFByb3BzWydpc0hpZGRlbk9uRGlzbWlzcyddO1xyXG4gIEBJbnB1dCgpIGlzQmxvY2tpbmc/OiBJUGFuZWxQcm9wc1snaXNCbG9ja2luZyddO1xyXG4gIEBJbnB1dCgpIGlzRm9vdGVyQXRCb3R0b20/OiBJUGFuZWxQcm9wc1snaXNGb290ZXJBdEJvdHRvbSddO1xyXG4gIEBJbnB1dCgpIGhlYWRlclRleHQ/OiBJUGFuZWxQcm9wc1snaGVhZGVyVGV4dCddO1xyXG4gIEBJbnB1dCgpIHN0eWxlcz86IElQYW5lbFByb3BzWydzdHlsZXMnXTtcclxuICBASW5wdXQoKSB0aGVtZT86IElQYW5lbFByb3BzWyd0aGVtZSddO1xyXG4gIEBJbnB1dCgpIGNsYXNzTmFtZT86IElQYW5lbFByb3BzWydjbGFzc05hbWUnXTtcclxuICBASW5wdXQoKSB0eXBlPzogSVBhbmVsUHJvcHNbJ3R5cGUnXTtcclxuICBASW5wdXQoKSBjdXN0b21XaWR0aD86IElQYW5lbFByb3BzWydjdXN0b21XaWR0aCddO1xyXG4gIEBJbnB1dCgpIGNsb3NlQnV0dG9uQXJpYUxhYmVsPzogSVBhbmVsUHJvcHNbJ2Nsb3NlQnV0dG9uQXJpYUxhYmVsJ107XHJcbiAgQElucHV0KCkgaGVhZGVyQ2xhc3NOYW1lPzogSVBhbmVsUHJvcHNbJ2hlYWRlckNsYXNzTmFtZSddO1xyXG4gIEBJbnB1dCgpIGVsZW1lbnRUb0ZvY3VzT25EaXNtaXNzPzogSVBhbmVsUHJvcHNbJ2VsZW1lbnRUb0ZvY3VzT25EaXNtaXNzJ107XHJcbiAgQElucHV0KCkgaWdub3JlRXh0ZXJuYWxGb2N1c2luZz86IElQYW5lbFByb3BzWydpZ25vcmVFeHRlcm5hbEZvY3VzaW5nJ107XHJcbiAgQElucHV0KCkgZm9yY2VGb2N1c0luc2lkZVRyYXA/OiBJUGFuZWxQcm9wc1snZm9yY2VGb2N1c0luc2lkZVRyYXAnXTtcclxuICBASW5wdXQoKSBmaXJzdEZvY3VzYWJsZVNlbGVjdG9yPzogSVBhbmVsUHJvcHNbJ2ZpcnN0Rm9jdXNhYmxlU2VsZWN0b3InXTtcclxuICBASW5wdXQoKSBmb2N1c1RyYXBab25lUHJvcHM/OiBJUGFuZWxQcm9wc1snZm9jdXNUcmFwWm9uZVByb3BzJ107XHJcbiAgQElucHV0KCkgbGF5ZXJQcm9wcz86IElQYW5lbFByb3BzWydsYXllclByb3BzJ107XHJcbiAgQElucHV0KCkgY29tcG9uZW50SWQ/OiBJUGFuZWxQcm9wc1snY29tcG9uZW50SWQnXTtcclxuXHJcbiAgQElucHV0KCkgcmVuZGVyTmF2aWdhdGlvbj86IElucHV0UmVuZGVyZXJPcHRpb25zPElQYW5lbFByb3BzPjtcclxuICBASW5wdXQoKSByZW5kZXJOYXZpZ2F0aW9uQ29udGVudD86IElucHV0UmVuZGVyZXJPcHRpb25zPElQYW5lbFByb3BzPjtcclxuICBASW5wdXQoKSByZW5kZXJIZWFkZXI/OiBJbnB1dFJlbmRlcmVyT3B0aW9uczxJUGFuZWxIZWFkZXJSZW5kZXJDb250ZXh0PjtcclxuICBASW5wdXQoKSByZW5kZXJCb2R5PzogSW5wdXRSZW5kZXJlck9wdGlvbnM8SVBhbmVsUHJvcHM+O1xyXG4gIEBJbnB1dCgpIHJlbmRlckZvb3Rlcj86IElucHV0UmVuZGVyZXJPcHRpb25zPElQYW5lbFByb3BzPjtcclxuICBASW5wdXQoKSByZW5kZXJGb290ZXJDb250ZW50PzogSW5wdXRSZW5kZXJlck9wdGlvbnM8SVBhbmVsUHJvcHM+O1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25MaWdodERpc21pc3NDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25PcGVuID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvbk9wZW5lZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25EaXNtaXNzID0gbmV3IEV2ZW50RW1pdHRlcjx7IGV2PzogRXZlbnQgfT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25EaXNtaXNzZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIHByaXZhdGUgX3JlbmRlckhlYWRlcjogSnN4UmVuZGVyRnVuYzxJUGFuZWxIZWFkZXJSZW5kZXJDb250ZXh0PjtcclxuICBvblJlbmRlck5hdmlnYXRpb246IChwcm9wcz86IElQYW5lbFByb3BzLCBkZWZhdWx0UmVuZGVyPzogSnN4UmVuZGVyRnVuYzxJUGFuZWxQcm9wcz4pID0+IEpTWC5FbGVtZW50O1xyXG4gIG9uUmVuZGVyTmF2aWdhdGlvbkNvbnRlbnQ6IChwcm9wcz86IElQYW5lbFByb3BzLCBkZWZhdWx0UmVuZGVyPzogSnN4UmVuZGVyRnVuYzxJUGFuZWxQcm9wcz4pID0+IEpTWC5FbGVtZW50O1xyXG4gIG9uUmVuZGVyQm9keTogKHByb3BzPzogSVBhbmVsUHJvcHMsIGRlZmF1bHRSZW5kZXI/OiBKc3hSZW5kZXJGdW5jPElQYW5lbFByb3BzPikgPT4gSlNYLkVsZW1lbnQ7XHJcbiAgb25SZW5kZXJGb290ZXI6IChwcm9wcz86IElQYW5lbFByb3BzLCBkZWZhdWx0UmVuZGVyPzogSnN4UmVuZGVyRnVuYzxJUGFuZWxQcm9wcz4pID0+IEpTWC5FbGVtZW50O1xyXG4gIG9uUmVuZGVyRm9vdGVyQ29udGVudDogKHByb3BzPzogSVBhbmVsUHJvcHMsIGRlZmF1bHRSZW5kZXI/OiBKc3hSZW5kZXJGdW5jPElQYW5lbFByb3BzPikgPT4gSlNYLkVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmdab25lOiBOZ1pvbmUpIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlciwgeyBuZ1pvbmUgfSk7XHJcblxyXG4gICAgLy8gY29taW5nIGZyb20gUmVhY3QgY29udGV4dCAtIHdlIG5lZWQgdG8gYmluZCB0byB0aGlzIHNvIHdlIGNhbiBhY2Nlc3MgdGhlIEFuZ3VsYXIgQ29tcG9uZW50IHByb3BlcnRpZXNcclxuICAgIHRoaXMub25SZW5kZXJIZWFkZXIgPSB0aGlzLm9uUmVuZGVySGVhZGVyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uRGlzbWlzc0hhbmRsZXIgPSB0aGlzLm9uRGlzbWlzc0hhbmRsZXIuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5vblJlbmRlck5hdmlnYXRpb24gPSB0aGlzLmNyZWF0ZVJlbmRlclByb3BIYW5kbGVyKHRoaXMucmVuZGVyTmF2aWdhdGlvbik7XHJcbiAgICB0aGlzLm9uUmVuZGVyTmF2aWdhdGlvbkNvbnRlbnQgPSB0aGlzLmNyZWF0ZVJlbmRlclByb3BIYW5kbGVyKHRoaXMucmVuZGVyTmF2aWdhdGlvbkNvbnRlbnQpO1xyXG4gICAgdGhpcy5fcmVuZGVySGVhZGVyID0gdGhpcy5jcmVhdGVJbnB1dEpzeFJlbmRlcmVyKHRoaXMucmVuZGVySGVhZGVyKTtcclxuICAgIHRoaXMub25SZW5kZXJCb2R5ID0gdGhpcy5jcmVhdGVSZW5kZXJQcm9wSGFuZGxlcih0aGlzLnJlbmRlckJvZHkpO1xyXG4gICAgdGhpcy5vblJlbmRlckZvb3RlciA9IHRoaXMuY3JlYXRlUmVuZGVyUHJvcEhhbmRsZXIodGhpcy5yZW5kZXJGb290ZXIpO1xyXG4gICAgdGhpcy5vblJlbmRlckZvb3RlckNvbnRlbnQgPSB0aGlzLmNyZWF0ZVJlbmRlclByb3BIYW5kbGVyKHRoaXMucmVuZGVyRm9vdGVyQ29udGVudCk7XHJcbiAgfVxyXG5cclxuICBvblJlbmRlckhlYWRlcihcclxuICAgIHByb3BzPzogSVBhbmVsUHJvcHMsXHJcbiAgICBkZWZhdWx0UmVuZGVyPzogSVBhbmVsSGVhZGVyUmVuZGVyZXIsXHJcbiAgICBoZWFkZXJUZXh0SWQ/OiBzdHJpbmcgfCB1bmRlZmluZWRcclxuICApOiBKU1guRWxlbWVudCB7XHJcbiAgICBpZiAoIXRoaXMucmVuZGVySGVhZGVyKSB7XHJcbiAgICAgIHJldHVybiB0eXBlb2YgZGVmYXVsdFJlbmRlciA9PT0gJ2Z1bmN0aW9uJyA/IGRlZmF1bHRSZW5kZXIocHJvcHMsIGRlZmF1bHRSZW5kZXIsIGhlYWRlclRleHRJZCkgOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLl9yZW5kZXJIZWFkZXIoeyBwcm9wcywgaGVhZGVyVGV4dElkIH0pO1xyXG4gIH1cclxuXHJcbiAgb25EaXNtaXNzSGFuZGxlcihldj86IFJlYWN0LlN5bnRoZXRpY0V2ZW50PEhUTUxFbGVtZW50Pikge1xyXG4gICAgdGhpcy5vbkRpc21pc3MuZW1pdCh7XHJcbiAgICAgIGV2OiBldiAmJiBldi5uYXRpdmVFdmVudCxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENvdW50ZXJwYXJ0IG9mIGBJUGFuZWxIZWFkZXJSZW5kZXJlcmAuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElQYW5lbEhlYWRlclJlbmRlckNvbnRleHQge1xyXG4gIHByb3BzPzogSVBhbmVsUHJvcHM7XHJcbiAgaGVhZGVyVGV4dElkPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG59XHJcbiJdfQ==