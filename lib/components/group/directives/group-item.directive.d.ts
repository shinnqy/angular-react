import { AfterContentInit, EventEmitter, OnDestroy, QueryList } from '@angular/core';
import { IGroup } from 'office-ui-fabric-react/lib/GroupedList';
import { ItemChangedPayload, IChangeableItemsContainer, ChangeableItemDirective } from '@angular-react/fabric/lib/components/core';
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
