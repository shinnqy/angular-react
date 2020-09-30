/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { passProp, ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, Input, NgZone, Output, QueryList, Renderer2, ViewChild, } from '@angular/core';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
export class FabPivotItemComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, { ngZone, setHostDisplay: true });
        this.disabled = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onRenderItemLink = this.createRenderPropHandler(this.renderItemLink);
    }
}
FabPivotItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-pivot-item',
                exportAs: 'fabPivotItem',
                template: `
    <PivotItem
      #reactNode
      [componentRef]="componentRef"
      [headerText]="headerText"
      [headerButtonProps]="headerButtonProps"
      [itemKey]="itemKey"
      [ariaLabel]="ariaLabel"
      [itemCount]="itemCount"
      [itemIcon]="itemIcon"
      [keytipProps]="keytipProps"
      [RenderItemLink]="renderItemLink && onRenderItemLink"
    >
      <ReactContent><ng-content></ng-content></ReactContent>
    </PivotItem>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabPivotItemComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabPivotItemComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    disabled: [{ type: Input }],
    componentRef: [{ type: Input }],
    headerText: [{ type: Input }],
    headerButtonProps: [{ type: Input }],
    itemKey: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    itemCount: [{ type: Input }],
    itemIcon: [{ type: Input }],
    keytipProps: [{ type: Input }],
    renderItemLink: [{ type: Input }]
};
tslib_1.__decorate([
    passProp(),
    tslib_1.__metadata("design:type", Object)
], FabPivotItemComponent.prototype, "componentRef", void 0);
tslib_1.__decorate([
    passProp(),
    tslib_1.__metadata("design:type", Object)
], FabPivotItemComponent.prototype, "headerText", void 0);
tslib_1.__decorate([
    passProp(),
    tslib_1.__metadata("design:type", Object)
], FabPivotItemComponent.prototype, "headerButtonProps", void 0);
tslib_1.__decorate([
    passProp(),
    tslib_1.__metadata("design:type", Object)
], FabPivotItemComponent.prototype, "itemKey", void 0);
tslib_1.__decorate([
    passProp(),
    tslib_1.__metadata("design:type", Object)
], FabPivotItemComponent.prototype, "ariaLabel", void 0);
tslib_1.__decorate([
    passProp(),
    tslib_1.__metadata("design:type", Object)
], FabPivotItemComponent.prototype, "itemCount", void 0);
tslib_1.__decorate([
    passProp(),
    tslib_1.__metadata("design:type", Object)
], FabPivotItemComponent.prototype, "itemIcon", void 0);
tslib_1.__decorate([
    passProp(),
    tslib_1.__metadata("design:type", Object)
], FabPivotItemComponent.prototype, "keytipProps", void 0);
tslib_1.__decorate([
    passProp(),
    tslib_1.__metadata("design:type", Object)
], FabPivotItemComponent.prototype, "renderItemLink", void 0);
tslib_1.__decorate([
    passProp(),
    tslib_1.__metadata("design:type", Function)
], FabPivotItemComponent.prototype, "onRenderItemLink", void 0);
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabPivotItemComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabPivotItemComponent.prototype.disabled;
    /** @type {?} */
    FabPivotItemComponent.prototype.componentRef;
    /** @type {?} */
    FabPivotItemComponent.prototype.headerText;
    /** @type {?} */
    FabPivotItemComponent.prototype.headerButtonProps;
    /** @type {?} */
    FabPivotItemComponent.prototype.itemKey;
    /** @type {?} */
    FabPivotItemComponent.prototype.ariaLabel;
    /** @type {?} */
    FabPivotItemComponent.prototype.itemCount;
    /** @type {?} */
    FabPivotItemComponent.prototype.itemIcon;
    /** @type {?} */
    FabPivotItemComponent.prototype.keytipProps;
    /** @type {?} */
    FabPivotItemComponent.prototype.renderItemLink;
    /** @type {?} */
    FabPivotItemComponent.prototype.onRenderItemLink;
}
export class FabPivotComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer, { setHostDisplay: true });
        this.PivotType = Pivot;
        this.PivotItemType = PivotItem;
        this.onLinkClick = new EventEmitter();
        this.onLinkClickHandler = this.onLinkClickHandler.bind(this);
    }
    /**
     * @param {?=} item
     * @param {?=} ev
     * @return {?}
     */
    onLinkClickHandler(item, ev) {
        this.onLinkClick.emit({
            ev: ev && ev.nativeEvent,
            item: item,
        });
    }
}
FabPivotComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-pivot',
                exportAs: 'fabPivot',
                template: `
    <Disguise
      #reactNode
      [disguiseRootAs]="PivotType"
      [disguiseChildrenAs]="PivotItemType"
      [ngChildComponents]="children || pivotItems?.toArray()"
      [componentRef]="componentRef"
      [styles]="styles"
      [theme]="theme"
      [className]="className"
      [defaultSelectedKey]="defaultSelectedKey"
      [defaultSelectedIndex]="defaultSelectedIndex"
      [selectedKey]="selectedKey"
      [linkSize]="linkSize"
      [linkFormat]="linkFormat"
      [headersOnly]="headersOnly"
      [getTabId]="getTabId"
      [LinkClick]="onLinkClickHandler"
    >
      <ReactContent><ng-content select="fab-pivot-item"></ng-content></ReactContent>
    </Disguise>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabPivotComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
FabPivotComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    pivotItems: [{ type: ContentChildren, args: [FabPivotItemComponent,] }],
    componentRef: [{ type: Input }],
    styles: [{ type: Input }],
    theme: [{ type: Input }],
    className: [{ type: Input }],
    defaultSelectedKey: [{ type: Input }],
    defaultSelectedIndex: [{ type: Input }],
    selectedKey: [{ type: Input }],
    linkSize: [{ type: Input }],
    linkFormat: [{ type: Input }],
    headersOnly: [{ type: Input }],
    getTabId: [{ type: Input }],
    children: [{ type: Input }],
    onLinkClick: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    FabPivotComponent.prototype.PivotType;
    /** @type {?} */
    FabPivotComponent.prototype.PivotItemType;
    /**
     * @type {?}
     * @protected
     */
    FabPivotComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabPivotComponent.prototype.pivotItems;
    /** @type {?} */
    FabPivotComponent.prototype.componentRef;
    /** @type {?} */
    FabPivotComponent.prototype.styles;
    /** @type {?} */
    FabPivotComponent.prototype.theme;
    /** @type {?} */
    FabPivotComponent.prototype.className;
    /** @type {?} */
    FabPivotComponent.prototype.defaultSelectedKey;
    /** @type {?} */
    FabPivotComponent.prototype.defaultSelectedIndex;
    /** @type {?} */
    FabPivotComponent.prototype.selectedKey;
    /** @type {?} */
    FabPivotComponent.prototype.linkSize;
    /** @type {?} */
    FabPivotComponent.prototype.linkFormat;
    /** @type {?} */
    FabPivotComponent.prototype.headersOnly;
    /** @type {?} */
    FabPivotComponent.prototype.getTabId;
    /** @type {?} */
    FabPivotComponent.prototype.children;
    /** @type {?} */
    FabPivotComponent.prototype.onLinkClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGl2b3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcGl2b3QvcGl2b3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQXVDLFFBQVEsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzNHLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUVOLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQWdDLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQXlCbEcsTUFBTSxPQUFPLHFCQUFzQixTQUFRLHFCQUFzQzs7Ozs7OztJQWdCL0UsWUFBWSxVQUFzQixFQUFFLGlCQUFvQyxFQUFFLFFBQW1CLEVBQUUsTUFBYztRQUMzRyxLQUFLLENBQUMsVUFBVSxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQWQxRSxhQUFRLEdBQUksS0FBSyxDQUFDO0lBZTNCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDNUUsQ0FBQzs7O1lBNUNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7R0FlVDtnQkFFRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTt5QkFEdEMsZ0JBQWdC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QUFrRDs7SUFDbEQscUNBQTRDOztJQUM1QyxxQ0FBcUQ7O0lBRXJELHdDQUEyRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyBJbnB1dFJlbmRlcmVyT3B0aW9ucywgSnN4UmVuZGVyRnVuYywgcGFzc1Byb3AsIFJlYWN0V3JhcHBlckNvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3Q2hpbGQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElQaXZvdEl0ZW1Qcm9wcywgSVBpdm90UHJvcHMsIFBpdm90LCBQaXZvdEl0ZW0gfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9QaXZvdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZmFiLXBpdm90LWl0ZW0nLFxyXG4gIGV4cG9ydEFzOiAnZmFiUGl2b3RJdGVtJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPFBpdm90SXRlbVxyXG4gICAgICAjcmVhY3ROb2RlXHJcbiAgICAgIFtjb21wb25lbnRSZWZdPVwiY29tcG9uZW50UmVmXCJcclxuICAgICAgW2hlYWRlclRleHRdPVwiaGVhZGVyVGV4dFwiXHJcbiAgICAgIFtoZWFkZXJCdXR0b25Qcm9wc109XCJoZWFkZXJCdXR0b25Qcm9wc1wiXHJcbiAgICAgIFtpdGVtS2V5XT1cIml0ZW1LZXlcIlxyXG4gICAgICBbYXJpYUxhYmVsXT1cImFyaWFMYWJlbFwiXHJcbiAgICAgIFtpdGVtQ291bnRdPVwiaXRlbUNvdW50XCJcclxuICAgICAgW2l0ZW1JY29uXT1cIml0ZW1JY29uXCJcclxuICAgICAgW2tleXRpcFByb3BzXT1cImtleXRpcFByb3BzXCJcclxuICAgICAgW1JlbmRlckl0ZW1MaW5rXT1cInJlbmRlckl0ZW1MaW5rICYmIG9uUmVuZGVySXRlbUxpbmtcIlxyXG4gICAgPlxyXG4gICAgICA8UmVhY3RDb250ZW50PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L1JlYWN0Q29udGVudD5cclxuICAgIDwvUGl2b3RJdGVtPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbJ3JlYWN0LXJlbmRlcmVyJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYWJQaXZvdEl0ZW1Db21wb25lbnQgZXh0ZW5kcyBSZWFjdFdyYXBwZXJDb21wb25lbnQ8SVBpdm90SXRlbVByb3BzPiBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQFZpZXdDaGlsZCgncmVhY3ROb2RlJywgeyBzdGF0aWM6IHRydWUgfSkgcHJvdGVjdGVkIHJlYWN0Tm9kZVJlZjogRWxlbWVudFJlZjtcclxuXHJcbiAgQElucHV0KCkgZGlzYWJsZWQ/ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQHBhc3NQcm9wKCkgY29tcG9uZW50UmVmPzogSVBpdm90SXRlbVByb3BzWydjb21wb25lbnRSZWYnXTtcclxuICBASW5wdXQoKSBAcGFzc1Byb3AoKSBoZWFkZXJUZXh0PzogSVBpdm90SXRlbVByb3BzWydoZWFkZXJUZXh0J107XHJcbiAgQElucHV0KCkgQHBhc3NQcm9wKCkgaGVhZGVyQnV0dG9uUHJvcHM/OiBJUGl2b3RJdGVtUHJvcHNbJ2hlYWRlckJ1dHRvblByb3BzJ107XHJcbiAgQElucHV0KCkgQHBhc3NQcm9wKCkgaXRlbUtleT86IElQaXZvdEl0ZW1Qcm9wc1snaXRlbUtleSddO1xyXG4gIEBJbnB1dCgpIEBwYXNzUHJvcCgpIGFyaWFMYWJlbD86IElQaXZvdEl0ZW1Qcm9wc1snYXJpYUxhYmVsJ107XHJcbiAgQElucHV0KCkgQHBhc3NQcm9wKCkgaXRlbUNvdW50PzogSVBpdm90SXRlbVByb3BzWydpdGVtQ291bnQnXTtcclxuICBASW5wdXQoKSBAcGFzc1Byb3AoKSBpdGVtSWNvbj86IElQaXZvdEl0ZW1Qcm9wc1snaXRlbUljb24nXTtcclxuICBASW5wdXQoKSBAcGFzc1Byb3AoKSBrZXl0aXBQcm9wcz86IElQaXZvdEl0ZW1Qcm9wc1sna2V5dGlwUHJvcHMnXTtcclxuICBASW5wdXQoKSBAcGFzc1Byb3AoKSByZW5kZXJJdGVtTGluaz86IElucHV0UmVuZGVyZXJPcHRpb25zPElQaXZvdEl0ZW1Qcm9wcz47XHJcblxyXG4gIEBwYXNzUHJvcCgpIG9uUmVuZGVySXRlbUxpbms6IChwcm9wcz86IElQaXZvdEl0ZW1Qcm9wcywgZGVmYXVsdFJlbmRlcj86IEpzeFJlbmRlckZ1bmM8SVBpdm90SXRlbVByb3BzPikgPT4gSlNYLkVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmdab25lOiBOZ1pvbmUpIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlciwgeyBuZ1pvbmUsIHNldEhvc3REaXNwbGF5OiB0cnVlIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLm9uUmVuZGVySXRlbUxpbmsgPSB0aGlzLmNyZWF0ZVJlbmRlclByb3BIYW5kbGVyKHRoaXMucmVuZGVySXRlbUxpbmspO1xyXG4gIH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmYWItcGl2b3QnLFxyXG4gIGV4cG9ydEFzOiAnZmFiUGl2b3QnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8RGlzZ3Vpc2VcclxuICAgICAgI3JlYWN0Tm9kZVxyXG4gICAgICBbZGlzZ3Vpc2VSb290QXNdPVwiUGl2b3RUeXBlXCJcclxuICAgICAgW2Rpc2d1aXNlQ2hpbGRyZW5Bc109XCJQaXZvdEl0ZW1UeXBlXCJcclxuICAgICAgW25nQ2hpbGRDb21wb25lbnRzXT1cImNoaWxkcmVuIHx8IHBpdm90SXRlbXM/LnRvQXJyYXkoKVwiXHJcbiAgICAgIFtjb21wb25lbnRSZWZdPVwiY29tcG9uZW50UmVmXCJcclxuICAgICAgW3N0eWxlc109XCJzdHlsZXNcIlxyXG4gICAgICBbdGhlbWVdPVwidGhlbWVcIlxyXG4gICAgICBbY2xhc3NOYW1lXT1cImNsYXNzTmFtZVwiXHJcbiAgICAgIFtkZWZhdWx0U2VsZWN0ZWRLZXldPVwiZGVmYXVsdFNlbGVjdGVkS2V5XCJcclxuICAgICAgW2RlZmF1bHRTZWxlY3RlZEluZGV4XT1cImRlZmF1bHRTZWxlY3RlZEluZGV4XCJcclxuICAgICAgW3NlbGVjdGVkS2V5XT1cInNlbGVjdGVkS2V5XCJcclxuICAgICAgW2xpbmtTaXplXT1cImxpbmtTaXplXCJcclxuICAgICAgW2xpbmtGb3JtYXRdPVwibGlua0Zvcm1hdFwiXHJcbiAgICAgIFtoZWFkZXJzT25seV09XCJoZWFkZXJzT25seVwiXHJcbiAgICAgIFtnZXRUYWJJZF09XCJnZXRUYWJJZFwiXHJcbiAgICAgIFtMaW5rQ2xpY2tdPVwib25MaW5rQ2xpY2tIYW5kbGVyXCJcclxuICAgID5cclxuICAgICAgPFJlYWN0Q29udGVudD48bmctY29udGVudCBzZWxlY3Q9XCJmYWItcGl2b3QtaXRlbVwiPjwvbmctY29udGVudD48L1JlYWN0Q29udGVudD5cclxuICAgIDwvRGlzZ3Vpc2U+XHJcbiAgYCxcclxuICBzdHlsZXM6IFsncmVhY3QtcmVuZGVyZXInXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZhYlBpdm90Q29tcG9uZW50IGV4dGVuZHMgUmVhY3RXcmFwcGVyQ29tcG9uZW50PElQaXZvdFByb3BzPiB7XHJcbiAgcmVhZG9ubHkgUGl2b3RUeXBlID0gUGl2b3Q7XHJcbiAgcmVhZG9ubHkgUGl2b3RJdGVtVHlwZSA9IFBpdm90SXRlbTtcclxuXHJcbiAgQFZpZXdDaGlsZCgncmVhY3ROb2RlJywgeyBzdGF0aWM6IHRydWUgfSkgcHJvdGVjdGVkIHJlYWN0Tm9kZVJlZjogRWxlbWVudFJlZjtcclxuXHJcbiAgQENvbnRlbnRDaGlsZHJlbihGYWJQaXZvdEl0ZW1Db21wb25lbnQpIHBpdm90SXRlbXM6IFF1ZXJ5TGlzdDxGYWJQaXZvdEl0ZW1Db21wb25lbnQ+O1xyXG5cclxuICBASW5wdXQoKSBjb21wb25lbnRSZWY/OiBJUGl2b3RQcm9wc1snY29tcG9uZW50UmVmJ107XHJcbiAgQElucHV0KCkgc3R5bGVzPzogSVBpdm90UHJvcHNbJ3N0eWxlcyddO1xyXG4gIEBJbnB1dCgpIHRoZW1lPzogSVBpdm90UHJvcHNbJ3RoZW1lJ107XHJcbiAgQElucHV0KCkgY2xhc3NOYW1lPzogSVBpdm90UHJvcHNbJ2NsYXNzTmFtZSddO1xyXG4gIEBJbnB1dCgpIGRlZmF1bHRTZWxlY3RlZEtleT86IElQaXZvdFByb3BzWydkZWZhdWx0U2VsZWN0ZWRLZXknXTtcclxuICBASW5wdXQoKSBkZWZhdWx0U2VsZWN0ZWRJbmRleD86IElQaXZvdFByb3BzWydkZWZhdWx0U2VsZWN0ZWRJbmRleCddO1xyXG4gIEBJbnB1dCgpIHNlbGVjdGVkS2V5PzogSVBpdm90UHJvcHNbJ3NlbGVjdGVkS2V5J107XHJcbiAgQElucHV0KCkgbGlua1NpemU/OiBJUGl2b3RQcm9wc1snbGlua1NpemUnXTtcclxuICBASW5wdXQoKSBsaW5rRm9ybWF0PzogSVBpdm90UHJvcHNbJ2xpbmtGb3JtYXQnXTtcclxuICBASW5wdXQoKSBoZWFkZXJzT25seT86IElQaXZvdFByb3BzWydoZWFkZXJzT25seSddO1xyXG4gIEBJbnB1dCgpIGdldFRhYklkPzogSVBpdm90UHJvcHNbJ2dldFRhYklkJ107XHJcbiAgQElucHV0KCkgY2hpbGRyZW4/OiBRdWVyeUxpc3Q8RmFiUGl2b3RJdGVtQ29tcG9uZW50PjtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uTGlua0NsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjx7IGl0ZW0/OiBQaXZvdEl0ZW07IGV2PzogTW91c2VFdmVudCB9PigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlciwgeyBzZXRIb3N0RGlzcGxheTogdHJ1ZSB9KTtcclxuXHJcbiAgICB0aGlzLm9uTGlua0NsaWNrSGFuZGxlciA9IHRoaXMub25MaW5rQ2xpY2tIYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBvbkxpbmtDbGlja0hhbmRsZXIoaXRlbT86IFBpdm90SXRlbSwgZXY/OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50Pikge1xyXG4gICAgdGhpcy5vbkxpbmtDbGljay5lbWl0KHtcclxuICAgICAgZXY6IGV2ICYmIGV2Lm5hdGl2ZUV2ZW50LFxyXG4gICAgICBpdGVtOiBpdGVtLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==