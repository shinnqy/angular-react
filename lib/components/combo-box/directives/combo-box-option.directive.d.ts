import { IComboBoxOption } from 'office-ui-fabric-react/lib/ComboBox';
/**
 * Wrapper directive for creating a ComboBoxOption
 * @paramName optionKey Binds to React 'key' property.
 *                      Name change necessary because key is a reserved attribute in the wrapper component.
 */
export declare class ComboBoxOptionDirective {
    optionKey: IComboBoxOption['key'];
    text: IComboBoxOption['text'];
    title?: IComboBoxOption['title'];
    itemType?: IComboBoxOption['itemType'];
    index?: IComboBoxOption['index'];
    ariaLabel?: IComboBoxOption['ariaLabel'];
    selected?: IComboBoxOption['selected'];
    disabled?: IComboBoxOption['disabled'];
    data?: IComboBoxOption['data'];
    styles?: IComboBoxOption['styles'];
    useAriaLabelAsText?: IComboBoxOption['useAriaLabelAsText'];
}
