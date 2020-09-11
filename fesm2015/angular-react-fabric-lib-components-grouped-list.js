import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { EventEmitter, Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, NgZone, ViewChild, Input, Output, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupedList } from 'office-ui-fabric-react/lib/GroupedList';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabGroupedListComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, { ngZone });
        this.onGroupExpandStateChanged = new EventEmitter();
        // coming from React context - we need to bind to this so we can access the Angular Component properties
        this.onRenderCell = this.onRenderCell.bind(this);
        this.onGroupExpandStateChangedHandler = this.onGroupExpandStateChangedHandler.bind(this);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._renderCell = this.createInputJsxRenderer(this.renderCell);
    }
    /**
     * @param {?=} nestingDepth
     * @param {?=} item
     * @param {?=} index
     * @return {?}
     */
    onRenderCell(nestingDepth, item, index) {
        return this._renderCell({ nestingDepth, item, index });
    }
    /**
     * @param {?} isSomeGroupExpanded
     * @return {?}
     */
    onGroupExpandStateChangedHandler(isSomeGroupExpanded) {
        this.onGroupExpandStateChanged.emit({
            isSomeGroupExpanded,
        });
    }
}
FabGroupedListComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-grouped-list',
                exportAs: 'fabGroupedList',
                template: `
    <GroupedList
      #reactNode
      [componentRef]="componentRef"
      [theme]="theme"
      [styles]="styles"
      [className]="className"
      [compact]="compact"
      [dragDropEvents]="dragDropEvents"
      [dragDropHelper]="dragDropHelper"
      [eventsToRegister]="eventsToRegister"
      [groupProps]="groupProps"
      [groups]="groups"
      [items]="items"
      [listProps]="listProps"
      [selection]="selection"
      [selectionMode]="selectionMode"
      [viewport]="viewport"
      [usePageCache]="usePageCache"
      [shouldVirtualize]="shouldVirtualize"
      [getGroupHeight]="getGroupHeight"
      [RenderCell]="renderCell && onRenderCell"
      [GroupExpandStateChanged]="onGroupExpandStateChangedHandler"
    >
    </GroupedList>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabGroupedListComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabGroupedListComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    componentRef: [{ type: Input }],
    theme: [{ type: Input }],
    styles: [{ type: Input }],
    className: [{ type: Input }],
    compact: [{ type: Input }],
    dragDropEvents: [{ type: Input }],
    dragDropHelper: [{ type: Input }],
    eventsToRegister: [{ type: Input }],
    groupProps: [{ type: Input }],
    groups: [{ type: Input }],
    items: [{ type: Input }],
    listProps: [{ type: Input }],
    selection: [{ type: Input }],
    selectionMode: [{ type: Input }],
    viewport: [{ type: Input }],
    usePageCache: [{ type: Input }],
    shouldVirtualize: [{ type: Input }],
    getGroupHeight: [{ type: Input }],
    renderCell: [{ type: Input }],
    onGroupExpandStateChanged: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabGroupedListComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabGroupedListComponent.prototype.componentRef;
    /** @type {?} */
    FabGroupedListComponent.prototype.theme;
    /** @type {?} */
    FabGroupedListComponent.prototype.styles;
    /** @type {?} */
    FabGroupedListComponent.prototype.className;
    /** @type {?} */
    FabGroupedListComponent.prototype.compact;
    /** @type {?} */
    FabGroupedListComponent.prototype.dragDropEvents;
    /** @type {?} */
    FabGroupedListComponent.prototype.dragDropHelper;
    /** @type {?} */
    FabGroupedListComponent.prototype.eventsToRegister;
    /** @type {?} */
    FabGroupedListComponent.prototype.groupProps;
    /** @type {?} */
    FabGroupedListComponent.prototype.groups;
    /** @type {?} */
    FabGroupedListComponent.prototype.items;
    /** @type {?} */
    FabGroupedListComponent.prototype.listProps;
    /** @type {?} */
    FabGroupedListComponent.prototype.selection;
    /** @type {?} */
    FabGroupedListComponent.prototype.selectionMode;
    /** @type {?} */
    FabGroupedListComponent.prototype.viewport;
    /** @type {?} */
    FabGroupedListComponent.prototype.usePageCache;
    /** @type {?} */
    FabGroupedListComponent.prototype.shouldVirtualize;
    /** @type {?} */
    FabGroupedListComponent.prototype.getGroupHeight;
    /** @type {?} */
    FabGroupedListComponent.prototype.renderCell;
    /** @type {?} */
    FabGroupedListComponent.prototype.onGroupExpandStateChanged;
    /**
     * @type {?}
     * @private
     */
    FabGroupedListComponent.prototype._renderCell;
}
/**
 * @record
 */
function ICellRenderContext() { }
if (false) {
    /** @type {?|undefined} */
    ICellRenderContext.prototype.nestingDepth;
    /** @type {?|undefined} */
    ICellRenderContext.prototype.item;
    /** @type {?|undefined} */
    ICellRenderContext.prototype.index;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components = [FabGroupedListComponent];
class FabGroupedListModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('GroupedList', (/**
         * @return {?}
         */
        () => GroupedList));
    }
}
FabGroupedListModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components,
                exports: components,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabGroupedListModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FabGroupedListComponent, FabGroupedListModule };
//# sourceMappingURL=angular-react-fabric-lib-components-grouped-list.js.map
