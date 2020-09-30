/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { EventEmitter, Input, Output } from '@angular/core';
;
import { ChangeableItemHelper } from './changeable-helper';
/**
 * Parent class for wrapper directive for single item with OnChanges
 * @abstract
 * @template TItem
 */
export class ChangeableItemDirective {
    /**
     * @return {?}
     */
    get onItemChanged() {
        return this.changeableItemHelper && this.changeableItemHelper.onItemChanged;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.changeableItemHelper = new ChangeableItemHelper(this.key);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.changeableItemHelper) {
            this.changeableItemHelper.emitChanges(changes);
        }
    }
}
ChangeableItemDirective.propDecorators = {
    key: [{ type: Input }],
    onItemChanged: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ChangeableItemDirective.prototype.key;
    /**
     * @type {?}
     * @private
     */
    ChangeableItemDirective.prototype.changeableItemHelper;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlYWJsZS1pdGVtLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy9saWIvY29tcG9uZW50cy9jb3JlLyIsInNvdXJjZXMiOlsic2hhcmVkL2NoYW5nZWFibGUtaXRlbS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0EsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRUQsQ0FBQztBQUVwRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7O0FBSzNELE1BQU0sT0FBZ0IsdUJBQXVCOzs7O0lBRzNDLElBQ0ksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUM7SUFDOUUsQ0FBQzs7OztJQUlELFFBQVE7UUFDTixJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakUsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBMkI7UUFDckMsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDN0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNoRDtJQUNILENBQUM7OztrQkFqQkEsS0FBSzs0QkFFTCxNQUFNOzs7O0lBRlAsc0NBQXFCOzs7OztJQU9yQix1REFBMEQiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy9saWIvZGVjbGFyYXRpb25zJzs7XHJcbmltcG9ydCB7IEl0ZW1DaGFuZ2VkUGF5bG9hZCwgSXRlbUNoYW5nZXMgfSBmcm9tICcuLi9kZWNsYXJhdGl2ZS9pdGVtLWNoYW5nZWQucGF5bG9hZCc7XHJcbmltcG9ydCB7IENoYW5nZWFibGVJdGVtSGVscGVyIH0gZnJvbSAnLi9jaGFuZ2VhYmxlLWhlbHBlcic7XHJcblxyXG4vKipcclxuICogUGFyZW50IGNsYXNzIGZvciB3cmFwcGVyIGRpcmVjdGl2ZSBmb3Igc2luZ2xlIGl0ZW0gd2l0aCBPbkNoYW5nZXNcclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDaGFuZ2VhYmxlSXRlbURpcmVjdGl2ZTxUSXRlbT4gaW1wbGVtZW50cyBPbkNoYW5nZXM8Q2hhbmdlYWJsZUl0ZW1EaXJlY3RpdmU8VEl0ZW0+PiwgT25Jbml0IHtcclxuICBASW5wdXQoKSBrZXk6IHN0cmluZztcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgZ2V0IG9uSXRlbUNoYW5nZWQoKTogRXZlbnRFbWl0dGVyPEl0ZW1DaGFuZ2VkUGF5bG9hZDxzdHJpbmcsIFRJdGVtPj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlYWJsZUl0ZW1IZWxwZXIgJiYgdGhpcy5jaGFuZ2VhYmxlSXRlbUhlbHBlci5vbkl0ZW1DaGFuZ2VkO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGFuZ2VhYmxlSXRlbUhlbHBlcjogQ2hhbmdlYWJsZUl0ZW1IZWxwZXI8VEl0ZW0+O1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuY2hhbmdlYWJsZUl0ZW1IZWxwZXIgPSBuZXcgQ2hhbmdlYWJsZUl0ZW1IZWxwZXIodGhpcy5rZXkpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogSXRlbUNoYW5nZXM8VEl0ZW0+KSB7XHJcbiAgICBpZiAodGhpcy5jaGFuZ2VhYmxlSXRlbUhlbHBlcikge1xyXG4gICAgICB0aGlzLmNoYW5nZWFibGVJdGVtSGVscGVyLmVtaXRDaGFuZ2VzKGNoYW5nZXMpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=