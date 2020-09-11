import { AfterContentInit, EventEmitter, OnDestroy, QueryList } from '@angular/core';
import { IGroup } from 'office-ui-fabric-react/lib/GroupedList';
import { ItemChangedPayload } from 'angular-react-toolkit/core/declarative/item-changed';
import { IChangeableItemsContainer } from 'angular-react-toolkit/core/shared/changeable-helper';
import { ChangeableItemDirective } from 'angular-react-toolkit/core/shared/changeable-item.directive';
export declare class GroupItemDirective extends ChangeableItemDirective<IGroup> implements AfterContentInit, IChangeableItemsContainer<IGroup>, IGroup, OnDestroy {
    readonly groupItemsDirectives: QueryList<GroupItemDirective>;
    name: IGroup['name'];
    startIndex: IGroup['startIndex'];
    count: IGroup['count'];
    children?: IGroup['children'];
    level?: IGroup['level'];
    isCollapsed?: IGroup['isCollapsed'];
    isShowingAll?: IGroup['isShowingAll'];
    isDropEnabled?: IGroup['isDropEnabled'];
    data?: IGroup['data'];
    ariaLabel?: IGroup['ariaLabel'];
    hasMoreData?: IGroup['hasMoreData'];
    readonly onChildItemChanged: EventEmitter<ItemChangedPayload<string, IGroup>>;
    readonly onItemsChanged: EventEmitter<QueryList<ChangeableItemDirective<IGroup>>>;
    private changeableItemsHelper;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
}
