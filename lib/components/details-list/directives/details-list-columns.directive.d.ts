import { QueryList } from '@angular/core';
import { ChangeableItemsDirective } from 'angular-react-toolkit/core/shared/changeable-items.directive';
import { DetailsListColumnDirective, IDetailsListColumnOptions } from './details-list-column.directive';
/**
 * Wrapper directive for creating multiple DetailsListColumns
 */
export declare class DetailsListColumnsDirective extends ChangeableItemsDirective<IDetailsListColumnOptions> {
    readonly directiveItems: QueryList<DetailsListColumnDirective>;
    readonly items: IDetailsListColumnOptions<any>[];
}
