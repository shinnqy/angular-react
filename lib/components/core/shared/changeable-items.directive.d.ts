import { AfterContentInit, EventEmitter, OnDestroy, QueryList } from '@angular/core';
import { ItemChangedPayload } from '../declarative/item-changed.payload';
import { IChangeableItemsContainer } from './changeable-helper';
import { ChangeableItemDirective } from './changeable-item.directive';
/**
 * Parent class for wrapper directive for multiple ChangeableItemDirectives
 */
export declare abstract class ChangeableItemsDirective<TItem> implements AfterContentInit, IChangeableItemsContainer<TItem>, OnDestroy {
    readonly directiveItems: QueryList<ChangeableItemDirective<TItem>>;
    readonly onChildItemChanged: EventEmitter<ItemChangedPayload<string, TItem>>;
    readonly onItemsChanged: EventEmitter<QueryList<ChangeableItemDirective<TItem>>>;
    private changeableItemsHelper;
    abstract readonly items: TItem[];
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
}
