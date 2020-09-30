import { EventEmitter, QueryList } from '@angular/core';
import { ItemChangedPayload, ItemChanges } from '../declarative/item-changed.payload';
import { ChangeableItemDirective } from './changeable-item.directive';
/**
 * Helper class for single changeable item
 */
export declare class ChangeableItemHelper<TItem> {
    private readonly key;
    readonly onItemChanged: EventEmitter<ItemChangedPayload<string, TItem>>;
    constructor(key: string);
    /**
     * Action to be called by user of class when change is detected
     * (Typically called in ngOnChanges)
     * @param changes TypedChanges that are to be emitted
     */
    emitChanges(changes: ItemChanges<TItem>): void;
}
/**
 * Parent class for wrapper directive for multiple ChangeableItemDirectives
 */
export declare class ChangeableItemsHelper<TItem> {
    private directiveItems;
    private self?;
    private nonSelfHandler?;
    readonly onChildItemChanged: EventEmitter<ItemChangedPayload<string, TItem>>;
    readonly onItemsChanged: EventEmitter<QueryList<ChangeableItemDirective<TItem>>>;
    private readonly _subscriptionsMap;
    private _changeSubscription;
    /**
     * Initialize subscriptions to watch for changes to children ChangeableItemDirectives
     * (Typically called in ngAfterContentInit after @ContentChildren are initialized)
     * @param directiveItems List of children to watch for
     * @param self Reference to component using this helper. This component gets filtered out in case
     *  it appears in the list of children (i.e. when a component has children of its own type)
     * @param nonSelfHandler Callback to handle filtered list of children when updated
     */
    constructor(directiveItems: QueryList<ChangeableItemDirective<TItem>>, self?: IChangeableItemsContainer<TItem>, nonSelfHandler?: (nonSelfDirectives: ChangeableItemDirective<TItem>[]) => void);
    /**
     * Action to be called by user of class when directive/component is destroyed
     * (Typically called in ngOnDestroy)
     */
    destroy(): void;
    private _subscribeNewDirectives;
    private _handleNonSelfDirectives;
}
/**
 * Interface for directives that contain changeable items
 */
export interface IChangeableItemsContainer<TItem> {
    onChildItemChanged: EventEmitter<ItemChangedPayload<string, TItem>>;
    onItemChanged?: EventEmitter<ItemChangedPayload<string, TItem>>;
    onItemsChanged: EventEmitter<QueryList<ChangeableItemDirective<TItem>>>;
}
