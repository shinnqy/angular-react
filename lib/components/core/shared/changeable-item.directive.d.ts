import { EventEmitter, OnInit } from '@angular/core';
import { OnChanges } from '@angular-react/fabric/lib/declarations';
import { ItemChangedPayload, ItemChanges } from '../declarative/item-changed.payload';
/**
 * Parent class for wrapper directive for single item with OnChanges
 */
export declare abstract class ChangeableItemDirective<TItem> implements OnChanges<ChangeableItemDirective<TItem>>, OnInit {
    key: string;
    readonly onItemChanged: EventEmitter<ItemChangedPayload<string, TItem>>;
    private changeableItemHelper;
    ngOnInit(): void;
    ngOnChanges(changes: ItemChanges<TItem>): void;
}
