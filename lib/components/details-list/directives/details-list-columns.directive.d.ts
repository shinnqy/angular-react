import { QueryList } from '@angular/core';
import { ChangeableItemsDirective } from '@angular-react/fabric/lib/components/core';
import { DetailsListColumnDirective, IDetailsListColumnOptions } from './details-list-column.directive';
/**
 * Wrapper directive for creating multiple DetailsListColumns
 */
export declare class DetailsListColumnsDirective extends ChangeableItemsDirective<IDetailsListColumnOptions> {
    readonly directiveItems: QueryList<DetailsListColumnDirective>;
    readonly items: IDetailsListColumnOptions<any>[];
}
