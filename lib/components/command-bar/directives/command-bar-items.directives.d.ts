import { QueryList } from '@angular/core';
import { ChangeableItemsDirective } from '@angular-react/fabric/lib/components/core';
import { ICommandBarItemOptions } from '../command-bar.component';
import { CommandBarItemDirective } from './command-bar-item.directives';
export declare abstract class CommandBarItemsDirectiveBase extends ChangeableItemsDirective<ICommandBarItemOptions> {
    abstract readonly directiveItems: QueryList<CommandBarItemDirective>;
    readonly items: ICommandBarItemOptions<any>[];
}
export declare class CommandBarItemsDirective extends CommandBarItemsDirectiveBase {
    readonly directiveItems: QueryList<CommandBarItemDirective>;
}
export declare class CommandBarFarItemsDirective extends CommandBarItemsDirectiveBase {
    readonly directiveItems: QueryList<CommandBarItemDirective>;
}
export declare class CommandBarOverflowItemsDirective extends CommandBarItemsDirectiveBase {
    readonly directiveItems: QueryList<CommandBarItemDirective>;
}
