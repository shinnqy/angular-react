import { QueryList } from '@angular/core';
import { IComboBoxOption } from 'office-ui-fabric-react/lib/ComboBox';
import { ComboBoxOptionDirective } from "./combo-box-option.directive";
/**
 * Wrapper directive for creating multiple ComboBoxOptions
 * Note that if you use this, it will override the imperative [options] binding.
 */
export declare class ComboBoxOptionsDirective {
    readonly directiveItems: QueryList<ComboBoxOptionDirective>;
    readonly items: IComboBoxOption[];
}
