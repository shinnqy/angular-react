import { IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
/**
 * Wrapper directive for creating a DropdownOption
 * @paramName optionKey Binds to React 'key' property.
 *                      Name change necessary because key is a reserved attribute in the wrapper component.
 */
export declare class DropdownOptionDirective {
    optionKey: IDropdownOption['key'];
    text: IDropdownOption['text'];
    title?: IDropdownOption['title'];
    itemType?: IDropdownOption['itemType'];
    index?: IDropdownOption['index'];
    ariaLabel?: IDropdownOption['ariaLabel'];
    selected?: IDropdownOption['selected'];
    disabled?: IDropdownOption['disabled'];
    hidden?: IDropdownOption['hidden'];
    data?: IDropdownOption['data'];
}
