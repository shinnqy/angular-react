import { QueryList } from '@angular/core';
import { DropdownOptionDirective } from './dropdown-option.directive';
import { IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
/**
 * Wrapper directive for creating multiple DropdownOptions
 * Note that if you use this, it will override the imperative [options] binding.
 */
export declare class DropdownOptionsDirective {
    readonly directiveItems: QueryList<DropdownOptionDirective>;
    readonly items: IDropdownOption[];
}
