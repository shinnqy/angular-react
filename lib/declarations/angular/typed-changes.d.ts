import * as AngularCore from '@angular/core';
export interface TypedChange<T> extends AngularCore.SimpleChange {
    readonly previousValue: T;
    readonly currentValue: T;
}
/**
 * Known Angular keys that components often have
 */
export declare type AngularLifeCycleKeys = keyof AngularCore.AfterContentChecked | keyof AngularCore.AfterContentInit | keyof AngularCore.AfterViewChecked | keyof AngularCore.AfterViewInit | keyof AngularCore.DoCheck | keyof AngularCore.OnChanges | keyof AngularCore.OnDestroy | keyof AngularCore.OnInit;
export declare type InputKeys<TComponent> = Exclude<keyof TComponent & string, AngularLifeCycleKeys>;
export declare type TypedChanges<TComponent> = Partial<{
    [P in InputKeys<TComponent>]: TypedChange<TComponent[P]>;
}>;
export interface OnChanges<TComponent> extends AngularCore.OnChanges {
    ngOnChanges(changes: TypedChanges<TComponent>): void;
}
