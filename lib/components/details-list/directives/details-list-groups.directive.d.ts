import { QueryList } from '@angular/core';
import { IGroup } from 'office-ui-fabric-react/lib/DetailsList';
import { ChangeableItemsDirective } from '@angular-react/fabric/lib/components/core';
import { GroupItemDirective } from '@angular-react/fabric/lib/components/group';
/**
 * Wrapper directive for creating multiple DetailsList Groups
 */
export declare class DetailsListGroupsDirective extends ChangeableItemsDirective<IGroup> {
    readonly directiveItems: QueryList<GroupItemDirective>;
    readonly items: GroupItemDirective[];
}
