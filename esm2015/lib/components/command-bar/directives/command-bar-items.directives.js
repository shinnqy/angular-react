/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ContentChildren, Directive, QueryList } from '@angular/core';
import { ChangeableItemsDirective } from '@angular-react/fabric/lib/components/core';
import { getDataAttributes } from '@angular-react/fabric/lib/utils';
import { CommandBarItemDirective } from './command-bar-item.directives';
/**
 * @abstract
 */
export class CommandBarItemsDirectiveBase extends ChangeableItemsDirective {
    /**
     * @return {?}
     */
    get items() {
        return (this.directiveItems &&
            this.directiveItems.map((/**
             * @param {?} directiveItem
             * @return {?}
             */
            (directiveItem) => (Object.assign({}, directiveItem, getDataAttributes(directiveItem.elementRef.nativeElement, true), { onClick: (/**
                 * @param {?} ev
                 * @param {?} item
                 * @return {?}
                 */
                (ev, item) => {
                    directiveItem.click.emit({
                        ev: ev && ev.nativeEvent,
                        item: item,
                    });
                }) })))));
    }
}
if (false) {
    /** @type {?} */
    CommandBarItemsDirectiveBase.prototype.directiveItems;
}
export class CommandBarItemsDirective extends CommandBarItemsDirectiveBase {
}
CommandBarItemsDirective.decorators = [
    { type: Directive, args: [{ selector: 'fab-command-bar > items' },] }
];
CommandBarItemsDirective.propDecorators = {
    directiveItems: [{ type: ContentChildren, args: [CommandBarItemDirective,] }]
};
if (false) {
    /** @type {?} */
    CommandBarItemsDirective.prototype.directiveItems;
}
export class CommandBarFarItemsDirective extends CommandBarItemsDirectiveBase {
}
CommandBarFarItemsDirective.decorators = [
    { type: Directive, args: [{ selector: 'fab-command-bar > far-items' },] }
];
CommandBarFarItemsDirective.propDecorators = {
    directiveItems: [{ type: ContentChildren, args: [CommandBarItemDirective,] }]
};
if (false) {
    /** @type {?} */
    CommandBarFarItemsDirective.prototype.directiveItems;
}
export class CommandBarOverflowItemsDirective extends CommandBarItemsDirectiveBase {
}
CommandBarOverflowItemsDirective.decorators = [
    { type: Directive, args: [{ selector: 'fab-command-bar > overflow-items' },] }
];
CommandBarOverflowItemsDirective.propDecorators = {
    directiveItems: [{ type: ContentChildren, args: [CommandBarItemDirective,] }]
};
if (false) {
    /** @type {?} */
    CommandBarOverflowItemsDirective.prototype.directiveItems;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC1iYXItaXRlbXMuZGlyZWN0aXZlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NvbW1hbmQtYmFyL2RpcmVjdGl2ZXMvY29tbWFuZC1iYXItaXRlbXMuZGlyZWN0aXZlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQSxPQUFPLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDckYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFHcEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7QUFFeEUsTUFBTSxPQUFnQiw0QkFBNkIsU0FBUSx3QkFBZ0Q7Ozs7SUFHekcsSUFBSSxLQUFLO1FBQ1AsT0FBTyxDQUNMLElBQUksQ0FBQyxjQUFjO1lBQ25CLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRzs7OztZQUF5QixDQUFDLGFBQXNDLEVBQUUsRUFBRSxDQUFDLG1CQUN2RixhQUFhLEVBQ2IsaUJBQWlCLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLElBQ2xFLE9BQU87Ozs7O2dCQUFFLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFO29CQUNwQixhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQzt3QkFDdkIsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsV0FBVzt3QkFDeEIsSUFBSSxFQUFFLElBQUk7cUJBQ1gsQ0FBQyxDQUFDO2dCQUNMLENBQUMsS0FDRCxFQUFDLENBQ0osQ0FBQztJQUNKLENBQUM7Q0FDRjs7O0lBakJDLHNEQUFxRTs7QUFvQnZFLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSw0QkFBNEI7OztZQUR6RSxTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUseUJBQXlCLEVBQUU7Ozs2QkFFL0MsZUFBZSxTQUFDLHVCQUF1Qjs7OztJQUF4QyxrREFBc0c7O0FBSXhHLE1BQU0sT0FBTywyQkFBNEIsU0FBUSw0QkFBNEI7OztZQUQ1RSxTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsNkJBQTZCLEVBQUU7Ozs2QkFFbkQsZUFBZSxTQUFDLHVCQUF1Qjs7OztJQUF4QyxxREFBc0c7O0FBSXhHLE1BQU0sT0FBTyxnQ0FBaUMsU0FBUSw0QkFBNEI7OztZQURqRixTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsa0NBQWtDLEVBQUU7Ozs2QkFFeEQsZUFBZSxTQUFDLHVCQUF1Qjs7OztJQUF4QywwREFBc0ciLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgQ29udGVudENoaWxkcmVuLCBEaXJlY3RpdmUsIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDaGFuZ2VhYmxlSXRlbXNEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9mYWJyaWMvbGliL2NvbXBvbmVudHMvY29yZSc7XHJcbmltcG9ydCB7IGdldERhdGFBdHRyaWJ1dGVzIH0gZnJvbSAnQGFuZ3VsYXItcmVhY3QvZmFicmljL2xpYi91dGlscyc7XHJcblxyXG5pbXBvcnQgeyBJQ29tbWFuZEJhckl0ZW1PcHRpb25zIH0gZnJvbSAnLi4vY29tbWFuZC1iYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tbWFuZEJhckl0ZW1EaXJlY3RpdmUgfSBmcm9tICcuL2NvbW1hbmQtYmFyLWl0ZW0uZGlyZWN0aXZlcyc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ29tbWFuZEJhckl0ZW1zRGlyZWN0aXZlQmFzZSBleHRlbmRzIENoYW5nZWFibGVJdGVtc0RpcmVjdGl2ZTxJQ29tbWFuZEJhckl0ZW1PcHRpb25zPiB7XHJcbiAgYWJzdHJhY3QgcmVhZG9ubHkgZGlyZWN0aXZlSXRlbXM6IFF1ZXJ5TGlzdDxDb21tYW5kQmFySXRlbURpcmVjdGl2ZT47XHJcblxyXG4gIGdldCBpdGVtcygpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRoaXMuZGlyZWN0aXZlSXRlbXMgJiZcclxuICAgICAgdGhpcy5kaXJlY3RpdmVJdGVtcy5tYXA8SUNvbW1hbmRCYXJJdGVtT3B0aW9ucz4oKGRpcmVjdGl2ZUl0ZW06IENvbW1hbmRCYXJJdGVtRGlyZWN0aXZlKSA9PiAoe1xyXG4gICAgICAgIC4uLmRpcmVjdGl2ZUl0ZW0sXHJcbiAgICAgICAgLi4uZ2V0RGF0YUF0dHJpYnV0ZXMoZGlyZWN0aXZlSXRlbS5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRydWUpLFxyXG4gICAgICAgIG9uQ2xpY2s6IChldiwgaXRlbSkgPT4ge1xyXG4gICAgICAgICAgZGlyZWN0aXZlSXRlbS5jbGljay5lbWl0KHtcclxuICAgICAgICAgICAgZXY6IGV2ICYmIGV2Lm5hdGl2ZUV2ZW50LFxyXG4gICAgICAgICAgICBpdGVtOiBpdGVtLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSkpXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnZmFiLWNvbW1hbmQtYmFyID4gaXRlbXMnIH0pXHJcbmV4cG9ydCBjbGFzcyBDb21tYW5kQmFySXRlbXNEaXJlY3RpdmUgZXh0ZW5kcyBDb21tYW5kQmFySXRlbXNEaXJlY3RpdmVCYXNlIHtcclxuICBAQ29udGVudENoaWxkcmVuKENvbW1hbmRCYXJJdGVtRGlyZWN0aXZlKSByZWFkb25seSBkaXJlY3RpdmVJdGVtczogUXVlcnlMaXN0PENvbW1hbmRCYXJJdGVtRGlyZWN0aXZlPjtcclxufVxyXG5cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnZmFiLWNvbW1hbmQtYmFyID4gZmFyLWl0ZW1zJyB9KVxyXG5leHBvcnQgY2xhc3MgQ29tbWFuZEJhckZhckl0ZW1zRGlyZWN0aXZlIGV4dGVuZHMgQ29tbWFuZEJhckl0ZW1zRGlyZWN0aXZlQmFzZSB7XHJcbiAgQENvbnRlbnRDaGlsZHJlbihDb21tYW5kQmFySXRlbURpcmVjdGl2ZSkgcmVhZG9ubHkgZGlyZWN0aXZlSXRlbXM6IFF1ZXJ5TGlzdDxDb21tYW5kQmFySXRlbURpcmVjdGl2ZT47XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ2ZhYi1jb21tYW5kLWJhciA+IG92ZXJmbG93LWl0ZW1zJyB9KVxyXG5leHBvcnQgY2xhc3MgQ29tbWFuZEJhck92ZXJmbG93SXRlbXNEaXJlY3RpdmUgZXh0ZW5kcyBDb21tYW5kQmFySXRlbXNEaXJlY3RpdmVCYXNlIHtcclxuICBAQ29udGVudENoaWxkcmVuKENvbW1hbmRCYXJJdGVtRGlyZWN0aXZlKSByZWFkb25seSBkaXJlY3RpdmVJdGVtczogUXVlcnlMaXN0PENvbW1hbmRCYXJJdGVtRGlyZWN0aXZlPjtcclxufVxyXG4iXX0=