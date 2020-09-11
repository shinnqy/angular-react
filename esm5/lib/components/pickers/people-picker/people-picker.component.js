/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone, Renderer2, ViewChild, } from '@angular/core';
import { FabBasePickerComponent } from '../base-picker/base-picker.component';
var FabPeoplePickerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabPeoplePickerComponent, _super);
    function FabPeoplePickerComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        return _super.call(this, elementRef, changeDetectorRef, renderer, ngZone) || this;
    }
    FabPeoplePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-people-picker',
                    exportAs: 'fabPeoplePicker',
                    template: "\n      <PeoplePicker\n        #reactNode\n        [componentRef]=\"componentRef\"\n        [resolveDelay]=\"resolveDelay\"\n        [defaultSelectedItems]=\"defaultSelectedItems\"\n        [getTextFromItem]=\"getTextFromItem\"\n        [className]=\"className\"\n        [pickerCalloutProps]=\"pickerCalloutProps\"\n        [searchingText]=\"searchingText\"\n        [disabled]=\"disabled\"\n        [itemLimit]=\"itemLimit\"\n        [createGenericItem]=\"createGenericItem\"\n        [removeButtonAriaLabel]=\"removeButtonAriaLabel\"\n        [selectedItems]=\"selectedItems\"\n        [enableSelectedSuggestionAlert]=\"enableSelectedSuggestionAlert\"\n        [inputProps]=\"inputProps\"\n        [pickerSuggestionsProps]=\"pickerSuggestionsProps\"\n        [ItemSelected]=\"onItemSelected\"\n        [InputChange]=\"onInputChange\"\n        [EmptyInputFocus]=\"onEmptyInputFocus\"\n        [ResolveSuggestions]=\"onResolveSuggestions\"\n        [GetMoreResults]=\"onGetMoreResults\"\n        [ValidateInput]=\"onValidateInput\"\n        [RenderItem]=\"renderItem && onRenderItem\"\n        [RenderSuggestionsItem]=\"renderSuggestionsItem && onRenderSuggestionsItem\"\n        [Change]=\"onChangeHandler\"\n        [Focus]=\"onFocusHandler\"\n        [Blur]=\"onBlurHandler\"\n        [Dismiss]=\"onDismissHandler\"\n        [RemoveSuggestion]=\"onRemoveSuggestionHandler\"\n      >\n      </PeoplePicker>\n    ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabPeoplePickerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    FabPeoplePickerComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
    };
    return FabPeoplePickerComponent;
}(FabBasePickerComponent));
export { FabPeoplePickerComponent };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabPeoplePickerComponent.prototype.reactNodeRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVvcGxlLXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvbGliL2NvbXBvbmVudHMvcGlja2Vycy8iLCJzb3VyY2VzIjpbInBlb3BsZS1waWNrZXIvcGVvcGxlLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBLE9BQU8sRUFDSCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEdBR1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFJOUU7SUF3QzhDLG9EQUF5RDtJQUdyRyxrQ0FBWSxVQUFzQixFQUFFLGlCQUFvQyxFQUFFLFFBQW1CLEVBQUUsTUFBYztlQUMzRyxrQkFBTSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQztJQUN4RCxDQUFDOztnQkE3Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSx5NENBaUNUO29CQUVELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzZCQUR0QyxnQkFBZ0I7aUJBRTFCOzs7O2dCQWxEQyxVQUFVO2dCQUZWLGlCQUFpQjtnQkFJakIsU0FBUztnQkFEVCxNQUFNOzs7K0JBbURMLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztJQUsxQywrQkFBQztDQUFBLEFBOUNELENBd0M4QyxzQkFBc0IsR0FNbkU7U0FOWSx3QkFBd0I7Ozs7OztJQUNuQyxnREFBNkUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHtcclxuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgTmdab25lLFxyXG4gICAgUmVuZGVyZXIyLFxyXG4gICAgVmlld0NoaWxkLFxyXG4gICAgT3V0cHV0LFxyXG4gICAgRXZlbnRFbWl0dGVyLFxyXG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbiAgaW1wb3J0IHsgRmFiQmFzZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4uL2Jhc2UtcGlja2VyL2Jhc2UtcGlja2VyLmNvbXBvbmVudCc7XHJcbiAgaW1wb3J0IHsgSVBlb3BsZVBpY2tlclByb3BzLCBCYXNlQXV0b0ZpbGwgfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9QaWNrZXJzJztcclxuICBpbXBvcnQgeyBJUGVyc29uYVByb3BzIH0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvUGVyc29uYSc7XHJcblxyXG4gIEBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdmYWItcGVvcGxlLXBpY2tlcicsXHJcbiAgICBleHBvcnRBczogJ2ZhYlBlb3BsZVBpY2tlcicsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICA8UGVvcGxlUGlja2VyXHJcbiAgICAgICAgI3JlYWN0Tm9kZVxyXG4gICAgICAgIFtjb21wb25lbnRSZWZdPVwiY29tcG9uZW50UmVmXCJcclxuICAgICAgICBbcmVzb2x2ZURlbGF5XT1cInJlc29sdmVEZWxheVwiXHJcbiAgICAgICAgW2RlZmF1bHRTZWxlY3RlZEl0ZW1zXT1cImRlZmF1bHRTZWxlY3RlZEl0ZW1zXCJcclxuICAgICAgICBbZ2V0VGV4dEZyb21JdGVtXT1cImdldFRleHRGcm9tSXRlbVwiXHJcbiAgICAgICAgW2NsYXNzTmFtZV09XCJjbGFzc05hbWVcIlxyXG4gICAgICAgIFtwaWNrZXJDYWxsb3V0UHJvcHNdPVwicGlja2VyQ2FsbG91dFByb3BzXCJcclxuICAgICAgICBbc2VhcmNoaW5nVGV4dF09XCJzZWFyY2hpbmdUZXh0XCJcclxuICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgIFtpdGVtTGltaXRdPVwiaXRlbUxpbWl0XCJcclxuICAgICAgICBbY3JlYXRlR2VuZXJpY0l0ZW1dPVwiY3JlYXRlR2VuZXJpY0l0ZW1cIlxyXG4gICAgICAgIFtyZW1vdmVCdXR0b25BcmlhTGFiZWxdPVwicmVtb3ZlQnV0dG9uQXJpYUxhYmVsXCJcclxuICAgICAgICBbc2VsZWN0ZWRJdGVtc109XCJzZWxlY3RlZEl0ZW1zXCJcclxuICAgICAgICBbZW5hYmxlU2VsZWN0ZWRTdWdnZXN0aW9uQWxlcnRdPVwiZW5hYmxlU2VsZWN0ZWRTdWdnZXN0aW9uQWxlcnRcIlxyXG4gICAgICAgIFtpbnB1dFByb3BzXT1cImlucHV0UHJvcHNcIlxyXG4gICAgICAgIFtwaWNrZXJTdWdnZXN0aW9uc1Byb3BzXT1cInBpY2tlclN1Z2dlc3Rpb25zUHJvcHNcIlxyXG4gICAgICAgIFtJdGVtU2VsZWN0ZWRdPVwib25JdGVtU2VsZWN0ZWRcIlxyXG4gICAgICAgIFtJbnB1dENoYW5nZV09XCJvbklucHV0Q2hhbmdlXCJcclxuICAgICAgICBbRW1wdHlJbnB1dEZvY3VzXT1cIm9uRW1wdHlJbnB1dEZvY3VzXCJcclxuICAgICAgICBbUmVzb2x2ZVN1Z2dlc3Rpb25zXT1cIm9uUmVzb2x2ZVN1Z2dlc3Rpb25zXCJcclxuICAgICAgICBbR2V0TW9yZVJlc3VsdHNdPVwib25HZXRNb3JlUmVzdWx0c1wiXHJcbiAgICAgICAgW1ZhbGlkYXRlSW5wdXRdPVwib25WYWxpZGF0ZUlucHV0XCJcclxuICAgICAgICBbUmVuZGVySXRlbV09XCJyZW5kZXJJdGVtICYmIG9uUmVuZGVySXRlbVwiXHJcbiAgICAgICAgW1JlbmRlclN1Z2dlc3Rpb25zSXRlbV09XCJyZW5kZXJTdWdnZXN0aW9uc0l0ZW0gJiYgb25SZW5kZXJTdWdnZXN0aW9uc0l0ZW1cIlxyXG4gICAgICAgIFtDaGFuZ2VdPVwib25DaGFuZ2VIYW5kbGVyXCJcclxuICAgICAgICBbRm9jdXNdPVwib25Gb2N1c0hhbmRsZXJcIlxyXG4gICAgICAgIFtCbHVyXT1cIm9uQmx1ckhhbmRsZXJcIlxyXG4gICAgICAgIFtEaXNtaXNzXT1cIm9uRGlzbWlzc0hhbmRsZXJcIlxyXG4gICAgICAgIFtSZW1vdmVTdWdnZXN0aW9uXT1cIm9uUmVtb3ZlU3VnZ2VzdGlvbkhhbmRsZXJcIlxyXG4gICAgICA+XHJcbiAgICAgIDwvUGVvcGxlUGlja2VyPlxyXG4gICAgYCxcclxuICAgIHN0eWxlczogWydyZWFjdC1yZW5kZXJlciddLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgfSlcclxuICBleHBvcnQgY2xhc3MgRmFiUGVvcGxlUGlja2VyQ29tcG9uZW50IGV4dGVuZHMgRmFiQmFzZVBpY2tlckNvbXBvbmVudDxJUGVyc29uYVByb3BzLCBJUGVvcGxlUGlja2VyUHJvcHM+IHtcclxuICAgIEBWaWV3Q2hpbGQoJ3JlYWN0Tm9kZScsIHsgc3RhdGljOiB0cnVlIH0pIHByb3RlY3RlZCByZWFjdE5vZGVSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCBuZ1pvbmU6IE5nWm9uZSkge1xyXG4gICAgICBzdXBlcihlbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXIsIG5nWm9uZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=