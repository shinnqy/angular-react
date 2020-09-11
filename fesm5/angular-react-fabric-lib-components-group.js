import { __extends } from 'tslib';
import { Directive, ContentChildren, Input, Output, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ChangeableItemsHelper } from 'angular-react-toolkit/core/shared/changeable-helper';
import { ChangeableItemDirective } from 'angular-react-toolkit/core/shared/changeable-item.directive';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GroupItemDirective = /** @class */ (function (_super) {
    __extends(GroupItemDirective, _super);
    function GroupItemDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(GroupItemDirective.prototype, "onChildItemChanged", {
        get: /**
         * @return {?}
         */
        function () {
            return this.changeableItemsHelper && this.changeableItemsHelper.onChildItemChanged;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GroupItemDirective.prototype, "onItemsChanged", {
        get: /**
         * @return {?}
         */
        function () {
            return this.changeableItemsHelper && this.changeableItemsHelper.onItemsChanged;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    GroupItemDirective.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.changeableItemsHelper = new ChangeableItemsHelper(this.groupItemsDirectives, this, (/**
         * @param {?} nonSelf
         * @return {?}
         */
        function (nonSelf) {
            _this.children = (/** @type {?} */ (nonSelf));
        }));
    };
    /**
     * @return {?}
     */
    GroupItemDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.changeableItemsHelper.destroy();
    };
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
    return GroupItemDirective;
}(ChangeableItemDirective));
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
var components = [GroupItemDirective];
var FabGroupModule = /** @class */ (function () {
    function FabGroupModule() {
    }
    FabGroupModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: components,
                    exports: components,
                    schemas: [NO_ERRORS_SCHEMA],
                },] }
    ];
    return FabGroupModule;
}());

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
