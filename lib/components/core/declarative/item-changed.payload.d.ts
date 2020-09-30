export interface PropertyChange<TValue> {
    readonly currentValue: TValue;
}
export declare type ItemChanges<TItem> = {
    readonly [P in keyof TItem]?: PropertyChange<TItem[P]>;
};
export interface ItemChangedPayload<TKey extends string, TItem> {
    readonly key: TKey;
    readonly changes: ItemChanges<TItem>;
}
