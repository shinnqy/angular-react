import { ItemChanges } from './item-changed.payload';
export declare function mergeItemChanges<T extends object>(target: T, changes: ItemChanges<T>): T;
