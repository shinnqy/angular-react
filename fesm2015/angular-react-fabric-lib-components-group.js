import { Directive, ContentChildren, Input, Output, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ChangeableItemDirective, ChangeableItemsHelper } from '@angular-react/fabric/lib/components/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GroupItemDirective extends ChangeableItemDirective {
    /**
     * @return {?}
     */
    get onChildItemChanged() {
        return this.changeableItemsHelper && this.changeableItemsHelper.onChildItemChanged;
    }
    /**
     * @return {?}
     */
    get onItemsChanged() {
        return this.changeableItemsHelper && this.changeableItemsHelper.onItemsChanged;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.changeableItemsHelper = new ChangeableItemsHelper(this.groupItemsDirectives, this, (/**
         * @param {?} nonSelf
         * @return {?}
         */
        nonSelf => {
            this.children = (/** @type {?} */ (nonSelf));
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.changeableItemsHelper.destroy();
    }
}
GroupItemDirective.decorators = [
    { type: Directive, args: [{ selector: 'fab-group-item' },] }
];
GroupItemDirective.propDecorators = {
    groupItemsDirectives: [{ type: ContentChildren, args: [GroupItemDirective,] }],
    name: [{ type: Input }],
    startIndex: [{ type: Input }],
    count: [{ type: Input }],
    children: [{ type: Input }],
    level: [{ type: Input }],
    isCollapsed: [{ type: Input }],
    isShowingAll: [{ type: Input }],
    isDropEnabled: [{ type: Input }],
    data: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    hasMoreData: [{ type: Input }],
    onChildItemChanged: [{ type: Output }],
    onItemsChanged: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    GroupItemDirective.prototype.groupItemsDirectives;
    /** @type {?} */
    GroupItemDirective.prototype.name;
    /** @type {?} */
    GroupItemDirective.prototype.startIndex;
    /** @type {?} */
    GroupItemDirective.prototype.count;
    /** @type {?} */
    GroupItemDirective.prototype.children;
    /** @type {?} */
    GroupItemDirective.prototype.level;
    /** @type {?} */
    GroupItemDirective.prototype.isCollapsed;
    /** @type {?} */
    GroupItemDirective.prototype.isShowingAll;
    /** @type {?} */
    GroupItemDirective.prototype.isDropEnabled;
    /** @type {?} */
    GroupItemDirective.prototype.data;
    /** @type {?} */
    GroupItemDirective.prototype.ariaLabel;
    /** @type {?} */
    GroupItemDirective.prototype.hasMoreData;
    /**
     * @type {?}
     * @private
     */
    GroupItemDirective.prototype.changeableItemsHelper;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components = [GroupItemDirective];
class FabGroupModule {
}
FabGroupModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components,
                exports: components,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FabGroupModule, GroupItemDirective };
//# sourceMappingURL=angular-react-fabric-lib-components-group.js.map
