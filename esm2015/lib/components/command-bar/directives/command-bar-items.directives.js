/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ContentChildren, Directive, QueryList } from '@angular/core';
import { ChangeableItemsDirective } from 'angular-react-toolkit/core/shared/changeable-items.directive';
import { getDataAttributes } from 'angular-react-toolkit/utils/get-data-attributes';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC1iYXItaXRlbXMuZGlyZWN0aXZlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NvbW1hbmQtYmFyL2RpcmVjdGl2ZXMvY29tbWFuZC1iYXItaXRlbXMuZGlyZWN0aXZlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQSxPQUFPLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDeEcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFHcEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7QUFFeEUsTUFBTSxPQUFnQiw0QkFBNkIsU0FBUSx3QkFBZ0Q7Ozs7SUFHekcsSUFBSSxLQUFLO1FBQ1AsT0FBTyxDQUNMLElBQUksQ0FBQyxjQUFjO1lBQ25CLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRzs7OztZQUF5QixDQUFDLGFBQXNDLEVBQUUsRUFBRSxDQUFDLG1CQUN2RixhQUFhLEVBQ2IsaUJBQWlCLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLElBQ2xFLE9BQU87Ozs7O2dCQUFFLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFO29CQUNwQixhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQzt3QkFDdkIsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsV0FBVzt3QkFDeEIsSUFBSSxFQUFFLElBQUk7cUJBQ1gsQ0FBQyxDQUFDO2dCQUNMLENBQUMsS0FDRCxFQUFDLENBQ0osQ0FBQztJQUNKLENBQUM7Q0FDRjs7O0lBakJDLHNEQUFxRTs7QUFvQnZFLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSw0QkFBNEI7OztZQUR6RSxTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUseUJBQXlCLEVBQUU7Ozs2QkFFL0MsZUFBZSxTQUFDLHVCQUF1Qjs7OztJQUF4QyxrREFBc0c7O0FBSXhHLE1BQU0sT0FBTywyQkFBNEIsU0FBUSw0QkFBNEI7OztZQUQ1RSxTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsNkJBQTZCLEVBQUU7Ozs2QkFFbkQsZUFBZSxTQUFDLHVCQUF1Qjs7OztJQUF4QyxxREFBc0c7O0FBSXhHLE1BQU0sT0FBTyxnQ0FBaUMsU0FBUSw0QkFBNEI7OztZQURqRixTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsa0NBQWtDLEVBQUU7Ozs2QkFFeEQsZUFBZSxTQUFDLHVCQUF1Qjs7OztJQUF4QywwREFBc0ciLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgQ29udGVudENoaWxkcmVuLCBEaXJlY3RpdmUsIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDaGFuZ2VhYmxlSXRlbXNEaXJlY3RpdmUgfSBmcm9tICdhbmd1bGFyLXJlYWN0LXRvb2xraXQvY29yZS9zaGFyZWQvY2hhbmdlYWJsZS1pdGVtcy5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBnZXREYXRhQXR0cmlidXRlcyB9IGZyb20gJ2FuZ3VsYXItcmVhY3QtdG9vbGtpdC91dGlscy9nZXQtZGF0YS1hdHRyaWJ1dGVzJztcclxuXHJcbmltcG9ydCB7IElDb21tYW5kQmFySXRlbU9wdGlvbnMgfSBmcm9tICcuLi9jb21tYW5kLWJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21tYW5kQmFySXRlbURpcmVjdGl2ZSB9IGZyb20gJy4vY29tbWFuZC1iYXItaXRlbS5kaXJlY3RpdmVzJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb21tYW5kQmFySXRlbXNEaXJlY3RpdmVCYXNlIGV4dGVuZHMgQ2hhbmdlYWJsZUl0ZW1zRGlyZWN0aXZlPElDb21tYW5kQmFySXRlbU9wdGlvbnM+IHtcclxuICBhYnN0cmFjdCByZWFkb25seSBkaXJlY3RpdmVJdGVtczogUXVlcnlMaXN0PENvbW1hbmRCYXJJdGVtRGlyZWN0aXZlPjtcclxuXHJcbiAgZ2V0IGl0ZW1zKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy5kaXJlY3RpdmVJdGVtcyAmJlxyXG4gICAgICB0aGlzLmRpcmVjdGl2ZUl0ZW1zLm1hcDxJQ29tbWFuZEJhckl0ZW1PcHRpb25zPigoZGlyZWN0aXZlSXRlbTogQ29tbWFuZEJhckl0ZW1EaXJlY3RpdmUpID0+ICh7XHJcbiAgICAgICAgLi4uZGlyZWN0aXZlSXRlbSxcclxuICAgICAgICAuLi5nZXREYXRhQXR0cmlidXRlcyhkaXJlY3RpdmVJdGVtLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdHJ1ZSksXHJcbiAgICAgICAgb25DbGljazogKGV2LCBpdGVtKSA9PiB7XHJcbiAgICAgICAgICBkaXJlY3RpdmVJdGVtLmNsaWNrLmVtaXQoe1xyXG4gICAgICAgICAgICBldjogZXYgJiYgZXYubmF0aXZlRXZlbnQsXHJcbiAgICAgICAgICAgIGl0ZW06IGl0ZW0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICB9KSlcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdmYWItY29tbWFuZC1iYXIgPiBpdGVtcycgfSlcclxuZXhwb3J0IGNsYXNzIENvbW1hbmRCYXJJdGVtc0RpcmVjdGl2ZSBleHRlbmRzIENvbW1hbmRCYXJJdGVtc0RpcmVjdGl2ZUJhc2Uge1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oQ29tbWFuZEJhckl0ZW1EaXJlY3RpdmUpIHJlYWRvbmx5IGRpcmVjdGl2ZUl0ZW1zOiBRdWVyeUxpc3Q8Q29tbWFuZEJhckl0ZW1EaXJlY3RpdmU+O1xyXG59XHJcblxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdmYWItY29tbWFuZC1iYXIgPiBmYXItaXRlbXMnIH0pXHJcbmV4cG9ydCBjbGFzcyBDb21tYW5kQmFyRmFySXRlbXNEaXJlY3RpdmUgZXh0ZW5kcyBDb21tYW5kQmFySXRlbXNEaXJlY3RpdmVCYXNlIHtcclxuICBAQ29udGVudENoaWxkcmVuKENvbW1hbmRCYXJJdGVtRGlyZWN0aXZlKSByZWFkb25seSBkaXJlY3RpdmVJdGVtczogUXVlcnlMaXN0PENvbW1hbmRCYXJJdGVtRGlyZWN0aXZlPjtcclxufVxyXG5cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnZmFiLWNvbW1hbmQtYmFyID4gb3ZlcmZsb3ctaXRlbXMnIH0pXHJcbmV4cG9ydCBjbGFzcyBDb21tYW5kQmFyT3ZlcmZsb3dJdGVtc0RpcmVjdGl2ZSBleHRlbmRzIENvbW1hbmRCYXJJdGVtc0RpcmVjdGl2ZUJhc2Uge1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oQ29tbWFuZEJhckl0ZW1EaXJlY3RpdmUpIHJlYWRvbmx5IGRpcmVjdGl2ZUl0ZW1zOiBRdWVyeUxpc3Q8Q29tbWFuZEJhckl0ZW1EaXJlY3RpdmU+O1xyXG59XHJcbiJdfQ==