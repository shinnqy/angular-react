/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ContentChildren, Directive, QueryList } from '@angular/core';
import { ChangeableItemsDirective } from 'angular-react-toolkit/core/shared/changeable-items.directive';
import { getDataAttributes } from 'angular-react-toolkit/utils/get-data-attributes';
import { CommandBarItemDirective } from './command-bar-item.directives';
/**
 * @abstract
 */
var /**
 * @abstract
 */
CommandBarItemsDirectiveBase = /** @class */ (function (_super) {
    tslib_1.__extends(CommandBarItemsDirectiveBase, _super);
    function CommandBarItemsDirectiveBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CommandBarItemsDirectiveBase.prototype, "items", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.directiveItems &&
                this.directiveItems.map((/**
                 * @param {?} directiveItem
                 * @return {?}
                 */
                function (directiveItem) { return (tslib_1.__assign({}, directiveItem, getDataAttributes(directiveItem.elementRef.nativeElement, true), { onClick: (/**
                     * @param {?} ev
                     * @param {?} item
                     * @return {?}
                     */
                    function (ev, item) {
                        directiveItem.click.emit({
                            ev: ev && ev.nativeEvent,
                            item: item,
                        });
                    }) })); })));
        },
        enumerable: true,
        configurable: true
    });
    return CommandBarItemsDirectiveBase;
}(ChangeableItemsDirective));
/**
 * @abstract
 */
export { CommandBarItemsDirectiveBase };
if (false) {
    /** @type {?} */
    CommandBarItemsDirectiveBase.prototype.directiveItems;
}
var CommandBarItemsDirective = /** @class */ (function (_super) {
    tslib_1.__extends(CommandBarItemsDirective, _super);
    function CommandBarItemsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CommandBarItemsDirective.decorators = [
        { type: Directive, args: [{ selector: 'fab-command-bar > items' },] }
    ];
    CommandBarItemsDirective.propDecorators = {
        directiveItems: [{ type: ContentChildren, args: [CommandBarItemDirective,] }]
    };
    return CommandBarItemsDirective;
}(CommandBarItemsDirectiveBase));
export { CommandBarItemsDirective };
if (false) {
    /** @type {?} */
    CommandBarItemsDirective.prototype.directiveItems;
}
var CommandBarFarItemsDirective = /** @class */ (function (_super) {
    tslib_1.__extends(CommandBarFarItemsDirective, _super);
    function CommandBarFarItemsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CommandBarFarItemsDirective.decorators = [
        { type: Directive, args: [{ selector: 'fab-command-bar > far-items' },] }
    ];
    CommandBarFarItemsDirective.propDecorators = {
        directiveItems: [{ type: ContentChildren, args: [CommandBarItemDirective,] }]
    };
    return CommandBarFarItemsDirective;
}(CommandBarItemsDirectiveBase));
export { CommandBarFarItemsDirective };
if (false) {
    /** @type {?} */
    CommandBarFarItemsDirective.prototype.directiveItems;
}
var CommandBarOverflowItemsDirective = /** @class */ (function (_super) {
    tslib_1.__extends(CommandBarOverflowItemsDirective, _super);
    function CommandBarOverflowItemsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CommandBarOverflowItemsDirective.decorators = [
        { type: Directive, args: [{ selector: 'fab-command-bar > overflow-items' },] }
    ];
    CommandBarOverflowItemsDirective.propDecorators = {
        directiveItems: [{ type: ContentChildren, args: [CommandBarItemDirective,] }]
    };
    return CommandBarOverflowItemsDirective;
}(CommandBarItemsDirectiveBase));
export { CommandBarOverflowItemsDirective };
if (false) {
    /** @type {?} */
    CommandBarOverflowItemsDirective.prototype.directiveItems;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC1iYXItaXRlbXMuZGlyZWN0aXZlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NvbW1hbmQtYmFyL2RpcmVjdGl2ZXMvY29tbWFuZC1iYXItaXRlbXMuZGlyZWN0aXZlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0EsT0FBTyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBR3BGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7O0FBRXhFOzs7O0lBQTJELHdEQUFnRDtJQUEzRzs7SUFrQkEsQ0FBQztJQWZDLHNCQUFJLCtDQUFLOzs7O1FBQVQ7WUFDRSxPQUFPLENBQ0wsSUFBSSxDQUFDLGNBQWM7Z0JBQ25CLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRzs7OztnQkFBeUIsVUFBQyxhQUFzQyxJQUFLLE9BQUEsc0JBQ3ZGLGFBQWEsRUFDYixpQkFBaUIsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsSUFDbEUsT0FBTzs7Ozs7b0JBQUUsVUFBQyxFQUFFLEVBQUUsSUFBSTt3QkFDaEIsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7NEJBQ3ZCLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLFdBQVc7NEJBQ3hCLElBQUksRUFBRSxJQUFJO3lCQUNYLENBQUMsQ0FBQztvQkFDTCxDQUFDLEtBQ0QsRUFUMEYsQ0FTMUYsRUFBQyxDQUNKLENBQUM7UUFDSixDQUFDOzs7T0FBQTtJQUNILG1DQUFDO0FBQUQsQ0FBQyxBQWxCRCxDQUEyRCx3QkFBd0IsR0FrQmxGOzs7Ozs7O0lBakJDLHNEQUFxRTs7QUFtQnZFO0lBQzhDLG9EQUE0QjtJQUQxRTs7SUFHQSxDQUFDOztnQkFIQSxTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUseUJBQXlCLEVBQUU7OztpQ0FFL0MsZUFBZSxTQUFDLHVCQUF1Qjs7SUFDMUMsK0JBQUM7Q0FBQSxBQUhELENBQzhDLDRCQUE0QixHQUV6RTtTQUZZLHdCQUF3Qjs7O0lBQ25DLGtEQUFzRzs7QUFHeEc7SUFDaUQsdURBQTRCO0lBRDdFOztJQUdBLENBQUM7O2dCQUhBLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSw2QkFBNkIsRUFBRTs7O2lDQUVuRCxlQUFlLFNBQUMsdUJBQXVCOztJQUMxQyxrQ0FBQztDQUFBLEFBSEQsQ0FDaUQsNEJBQTRCLEdBRTVFO1NBRlksMkJBQTJCOzs7SUFDdEMscURBQXNHOztBQUd4RztJQUNzRCw0REFBNEI7SUFEbEY7O0lBR0EsQ0FBQzs7Z0JBSEEsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLGtDQUFrQyxFQUFFOzs7aUNBRXhELGVBQWUsU0FBQyx1QkFBdUI7O0lBQzFDLHVDQUFDO0NBQUEsQUFIRCxDQUNzRCw0QkFBNEIsR0FFakY7U0FGWSxnQ0FBZ0M7OztJQUMzQywwREFBc0ciLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgQ29udGVudENoaWxkcmVuLCBEaXJlY3RpdmUsIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDaGFuZ2VhYmxlSXRlbXNEaXJlY3RpdmUgfSBmcm9tICdhbmd1bGFyLXJlYWN0LXRvb2xraXQvY29yZS9zaGFyZWQvY2hhbmdlYWJsZS1pdGVtcy5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBnZXREYXRhQXR0cmlidXRlcyB9IGZyb20gJ2FuZ3VsYXItcmVhY3QtdG9vbGtpdC91dGlscy9nZXQtZGF0YS1hdHRyaWJ1dGVzJztcclxuXHJcbmltcG9ydCB7IElDb21tYW5kQmFySXRlbU9wdGlvbnMgfSBmcm9tICcuLi9jb21tYW5kLWJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21tYW5kQmFySXRlbURpcmVjdGl2ZSB9IGZyb20gJy4vY29tbWFuZC1iYXItaXRlbS5kaXJlY3RpdmVzJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb21tYW5kQmFySXRlbXNEaXJlY3RpdmVCYXNlIGV4dGVuZHMgQ2hhbmdlYWJsZUl0ZW1zRGlyZWN0aXZlPElDb21tYW5kQmFySXRlbU9wdGlvbnM+IHtcclxuICBhYnN0cmFjdCByZWFkb25seSBkaXJlY3RpdmVJdGVtczogUXVlcnlMaXN0PENvbW1hbmRCYXJJdGVtRGlyZWN0aXZlPjtcclxuXHJcbiAgZ2V0IGl0ZW1zKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy5kaXJlY3RpdmVJdGVtcyAmJlxyXG4gICAgICB0aGlzLmRpcmVjdGl2ZUl0ZW1zLm1hcDxJQ29tbWFuZEJhckl0ZW1PcHRpb25zPigoZGlyZWN0aXZlSXRlbTogQ29tbWFuZEJhckl0ZW1EaXJlY3RpdmUpID0+ICh7XHJcbiAgICAgICAgLi4uZGlyZWN0aXZlSXRlbSxcclxuICAgICAgICAuLi5nZXREYXRhQXR0cmlidXRlcyhkaXJlY3RpdmVJdGVtLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdHJ1ZSksXHJcbiAgICAgICAgb25DbGljazogKGV2LCBpdGVtKSA9PiB7XHJcbiAgICAgICAgICBkaXJlY3RpdmVJdGVtLmNsaWNrLmVtaXQoe1xyXG4gICAgICAgICAgICBldjogZXYgJiYgZXYubmF0aXZlRXZlbnQsXHJcbiAgICAgICAgICAgIGl0ZW06IGl0ZW0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICB9KSlcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdmYWItY29tbWFuZC1iYXIgPiBpdGVtcycgfSlcclxuZXhwb3J0IGNsYXNzIENvbW1hbmRCYXJJdGVtc0RpcmVjdGl2ZSBleHRlbmRzIENvbW1hbmRCYXJJdGVtc0RpcmVjdGl2ZUJhc2Uge1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oQ29tbWFuZEJhckl0ZW1EaXJlY3RpdmUpIHJlYWRvbmx5IGRpcmVjdGl2ZUl0ZW1zOiBRdWVyeUxpc3Q8Q29tbWFuZEJhckl0ZW1EaXJlY3RpdmU+O1xyXG59XHJcblxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdmYWItY29tbWFuZC1iYXIgPiBmYXItaXRlbXMnIH0pXHJcbmV4cG9ydCBjbGFzcyBDb21tYW5kQmFyRmFySXRlbXNEaXJlY3RpdmUgZXh0ZW5kcyBDb21tYW5kQmFySXRlbXNEaXJlY3RpdmVCYXNlIHtcclxuICBAQ29udGVudENoaWxkcmVuKENvbW1hbmRCYXJJdGVtRGlyZWN0aXZlKSByZWFkb25seSBkaXJlY3RpdmVJdGVtczogUXVlcnlMaXN0PENvbW1hbmRCYXJJdGVtRGlyZWN0aXZlPjtcclxufVxyXG5cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnZmFiLWNvbW1hbmQtYmFyID4gb3ZlcmZsb3ctaXRlbXMnIH0pXHJcbmV4cG9ydCBjbGFzcyBDb21tYW5kQmFyT3ZlcmZsb3dJdGVtc0RpcmVjdGl2ZSBleHRlbmRzIENvbW1hbmRCYXJJdGVtc0RpcmVjdGl2ZUJhc2Uge1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oQ29tbWFuZEJhckl0ZW1EaXJlY3RpdmUpIHJlYWRvbmx5IGRpcmVjdGl2ZUl0ZW1zOiBRdWVyeUxpc3Q8Q29tbWFuZEJhckl0ZW1EaXJlY3RpdmU+O1xyXG59XHJcbiJdfQ==