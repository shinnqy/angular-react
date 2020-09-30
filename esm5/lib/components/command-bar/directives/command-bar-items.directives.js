/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ContentChildren, Directive, QueryList } from '@angular/core';
import { ChangeableItemsDirective } from '@angular-react/fabric/lib/components/core';
import { getDataAttributes } from '@angular-react/fabric/lib/utils';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC1iYXItaXRlbXMuZGlyZWN0aXZlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NvbW1hbmQtYmFyL2RpcmVjdGl2ZXMvY29tbWFuZC1iYXItaXRlbXMuZGlyZWN0aXZlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0EsT0FBTyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBR3BFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7O0FBRXhFOzs7O0lBQTJELHdEQUFnRDtJQUEzRzs7SUFrQkEsQ0FBQztJQWZDLHNCQUFJLCtDQUFLOzs7O1FBQVQ7WUFDRSxPQUFPLENBQ0wsSUFBSSxDQUFDLGNBQWM7Z0JBQ25CLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRzs7OztnQkFBeUIsVUFBQyxhQUFzQyxJQUFLLE9BQUEsc0JBQ3ZGLGFBQWEsRUFDYixpQkFBaUIsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsSUFDbEUsT0FBTzs7Ozs7b0JBQUUsVUFBQyxFQUFFLEVBQUUsSUFBSTt3QkFDaEIsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7NEJBQ3ZCLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLFdBQVc7NEJBQ3hCLElBQUksRUFBRSxJQUFJO3lCQUNYLENBQUMsQ0FBQztvQkFDTCxDQUFDLEtBQ0QsRUFUMEYsQ0FTMUYsRUFBQyxDQUNKLENBQUM7UUFDSixDQUFDOzs7T0FBQTtJQUNILG1DQUFDO0FBQUQsQ0FBQyxBQWxCRCxDQUEyRCx3QkFBd0IsR0FrQmxGOzs7Ozs7O0lBakJDLHNEQUFxRTs7QUFtQnZFO0lBQzhDLG9EQUE0QjtJQUQxRTs7SUFHQSxDQUFDOztnQkFIQSxTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUseUJBQXlCLEVBQUU7OztpQ0FFL0MsZUFBZSxTQUFDLHVCQUF1Qjs7SUFDMUMsK0JBQUM7Q0FBQSxBQUhELENBQzhDLDRCQUE0QixHQUV6RTtTQUZZLHdCQUF3Qjs7O0lBQ25DLGtEQUFzRzs7QUFHeEc7SUFDaUQsdURBQTRCO0lBRDdFOztJQUdBLENBQUM7O2dCQUhBLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSw2QkFBNkIsRUFBRTs7O2lDQUVuRCxlQUFlLFNBQUMsdUJBQXVCOztJQUMxQyxrQ0FBQztDQUFBLEFBSEQsQ0FDaUQsNEJBQTRCLEdBRTVFO1NBRlksMkJBQTJCOzs7SUFDdEMscURBQXNHOztBQUd4RztJQUNzRCw0REFBNEI7SUFEbEY7O0lBR0EsQ0FBQzs7Z0JBSEEsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLGtDQUFrQyxFQUFFOzs7aUNBRXhELGVBQWUsU0FBQyx1QkFBdUI7O0lBQzFDLHVDQUFDO0NBQUEsQUFIRCxDQUNzRCw0QkFBNEIsR0FFakY7U0FGWSxnQ0FBZ0M7OztJQUMzQywwREFBc0ciLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgQ29udGVudENoaWxkcmVuLCBEaXJlY3RpdmUsIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDaGFuZ2VhYmxlSXRlbXNEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9mYWJyaWMvbGliL2NvbXBvbmVudHMvY29yZSc7XHJcbmltcG9ydCB7IGdldERhdGFBdHRyaWJ1dGVzIH0gZnJvbSAnQGFuZ3VsYXItcmVhY3QvZmFicmljL2xpYi91dGlscyc7XHJcblxyXG5pbXBvcnQgeyBJQ29tbWFuZEJhckl0ZW1PcHRpb25zIH0gZnJvbSAnLi4vY29tbWFuZC1iYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tbWFuZEJhckl0ZW1EaXJlY3RpdmUgfSBmcm9tICcuL2NvbW1hbmQtYmFyLWl0ZW0uZGlyZWN0aXZlcyc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ29tbWFuZEJhckl0ZW1zRGlyZWN0aXZlQmFzZSBleHRlbmRzIENoYW5nZWFibGVJdGVtc0RpcmVjdGl2ZTxJQ29tbWFuZEJhckl0ZW1PcHRpb25zPiB7XHJcbiAgYWJzdHJhY3QgcmVhZG9ubHkgZGlyZWN0aXZlSXRlbXM6IFF1ZXJ5TGlzdDxDb21tYW5kQmFySXRlbURpcmVjdGl2ZT47XHJcblxyXG4gIGdldCBpdGVtcygpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRoaXMuZGlyZWN0aXZlSXRlbXMgJiZcclxuICAgICAgdGhpcy5kaXJlY3RpdmVJdGVtcy5tYXA8SUNvbW1hbmRCYXJJdGVtT3B0aW9ucz4oKGRpcmVjdGl2ZUl0ZW06IENvbW1hbmRCYXJJdGVtRGlyZWN0aXZlKSA9PiAoe1xyXG4gICAgICAgIC4uLmRpcmVjdGl2ZUl0ZW0sXHJcbiAgICAgICAgLi4uZ2V0RGF0YUF0dHJpYnV0ZXMoZGlyZWN0aXZlSXRlbS5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRydWUpLFxyXG4gICAgICAgIG9uQ2xpY2s6IChldiwgaXRlbSkgPT4ge1xyXG4gICAgICAgICAgZGlyZWN0aXZlSXRlbS5jbGljay5lbWl0KHtcclxuICAgICAgICAgICAgZXY6IGV2ICYmIGV2Lm5hdGl2ZUV2ZW50LFxyXG4gICAgICAgICAgICBpdGVtOiBpdGVtLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSkpXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnZmFiLWNvbW1hbmQtYmFyID4gaXRlbXMnIH0pXHJcbmV4cG9ydCBjbGFzcyBDb21tYW5kQmFySXRlbXNEaXJlY3RpdmUgZXh0ZW5kcyBDb21tYW5kQmFySXRlbXNEaXJlY3RpdmVCYXNlIHtcclxuICBAQ29udGVudENoaWxkcmVuKENvbW1hbmRCYXJJdGVtRGlyZWN0aXZlKSByZWFkb25seSBkaXJlY3RpdmVJdGVtczogUXVlcnlMaXN0PENvbW1hbmRCYXJJdGVtRGlyZWN0aXZlPjtcclxufVxyXG5cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnZmFiLWNvbW1hbmQtYmFyID4gZmFyLWl0ZW1zJyB9KVxyXG5leHBvcnQgY2xhc3MgQ29tbWFuZEJhckZhckl0ZW1zRGlyZWN0aXZlIGV4dGVuZHMgQ29tbWFuZEJhckl0ZW1zRGlyZWN0aXZlQmFzZSB7XHJcbiAgQENvbnRlbnRDaGlsZHJlbihDb21tYW5kQmFySXRlbURpcmVjdGl2ZSkgcmVhZG9ubHkgZGlyZWN0aXZlSXRlbXM6IFF1ZXJ5TGlzdDxDb21tYW5kQmFySXRlbURpcmVjdGl2ZT47XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ2ZhYi1jb21tYW5kLWJhciA+IG92ZXJmbG93LWl0ZW1zJyB9KVxyXG5leHBvcnQgY2xhc3MgQ29tbWFuZEJhck92ZXJmbG93SXRlbXNEaXJlY3RpdmUgZXh0ZW5kcyBDb21tYW5kQmFySXRlbXNEaXJlY3RpdmVCYXNlIHtcclxuICBAQ29udGVudENoaWxkcmVuKENvbW1hbmRCYXJJdGVtRGlyZWN0aXZlKSByZWFkb25seSBkaXJlY3RpdmVJdGVtczogUXVlcnlMaXN0PENvbW1hbmRCYXJJdGVtRGlyZWN0aXZlPjtcclxufVxyXG4iXX0=