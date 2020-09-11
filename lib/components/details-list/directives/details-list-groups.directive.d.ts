import { QueryList } from '@angular/core';
import { IGroup } from 'office-ui-fabric-react/lib/DetailsList';
import { ChangeableItemsDirective } from 'angular-react-toolkit/core/shared/changeable-items.directive';
import { GroupItemDirective } from '../../group/directives/group-item.directive';
/**
 * Wrapper directive for creating multiple DetailsList Groups
 */
export declare class DetailsListGroupsDirective extends ChangeableItemsDirective<IGroup> {
    readonly directiveItems: QueryList<GroupItemDirective>;
    readonly items: GroupItemDirective[];
}
