/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ContentChildren, EventEmitter, Output, QueryList } from '@angular/core';
import { ChangeableItemsHelper } from './changeable-helper';
import { ChangeableItemDirective } from './changeable-item.directive';
/**
 * Parent class for wrapper directive for multiple ChangeableItemDirectives
 * @abstract
 * @template TItem
 */
var ChangeableItemsDirective = /** @class */ (function () {
    function ChangeableItemsDirective() {
    }
    Object.defineProperty(ChangeableItemsDirective.prototype, "onChildItemChanged", {
        get: /**
         * @return {?}
         */
        function () {
            return this.changeableItemsHelper && this.changeableItemsHelper.onChildItemChanged;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChangeableItemsDirective.prototype, "onItemsChanged", {
        get: /**
         * @return {?}
         */
        function () {
            return this.changeableItemsHelper && this.changeableItemsHelper.onItemsChanged;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ChangeableItemsDirective.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.changeableItemsHelper = new ChangeableItemsHelper(this.directiveItems);
    };
    /**
     * @return {?}
     */
    ChangeableItemsDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.changeableItemsHelper.destroy();
    };
    ChangeableItemsDirective.propDecorators = {
        directiveItems: [{ type: ContentChildren, args: [ChangeableItemDirective,] }],
        onChildItemChanged: [{ type: Output }],
        onItemsChanged: [{ type: Output }]
    };
    return ChangeableItemsDirective;
}());
export { ChangeableItemsDirective };
if (false) {
    /** @type {?} */
    ChangeableItemsDirective.prototype.directiveItems;
    /**
     * @type {?}
     * @private
     */
    ChangeableItemsDirective.prototype.changeableItemsHelper;
    /**
     * @abstract
     * @return {?}
     */
    ChangeableItemsDirective.prototype.items = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlYWJsZS1pdGVtcy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvbGliL2NvbXBvbmVudHMvY29yZS8iLCJzb3VyY2VzIjpbInNoYXJlZC9jaGFuZ2VhYmxlLWl0ZW1zLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQSxPQUFPLEVBQW9CLGVBQWUsRUFBRSxZQUFZLEVBQWEsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUc5RyxPQUFPLEVBQUUscUJBQXFCLEVBQTZCLE1BQU0scUJBQXFCLENBQUM7QUFDdkYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7OztBQUt0RTtJQUFBO0lBd0JBLENBQUM7SUFwQkMsc0JBQ0ksd0RBQWtCOzs7O1FBRHRCO1lBRUUsT0FBTyxJQUFJLENBQUMscUJBQXFCLElBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDLGtCQUFrQixDQUFDO1FBQ3JGLENBQUM7OztPQUFBO0lBQ0Qsc0JBQ0ksb0RBQWM7Ozs7UUFEbEI7WUFFRSxPQUFPLElBQUksQ0FBQyxxQkFBcUIsSUFBSSxJQUFJLENBQUMscUJBQXFCLENBQUMsY0FBYyxDQUFDO1FBQ2pGLENBQUM7OztPQUFBOzs7O0lBTUQscURBQWtCOzs7SUFBbEI7UUFDRSxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDOUUsQ0FBQzs7OztJQUVELDhDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN2QyxDQUFDOztpQ0FyQkEsZUFBZSxTQUFDLHVCQUF1QjtxQ0FFdkMsTUFBTTtpQ0FJTixNQUFNOztJQWdCVCwrQkFBQztDQUFBLEFBeEJELElBd0JDO1NBeEJxQix3QkFBd0I7OztJQUU1QyxrREFBNkc7Ozs7O0lBVzdHLHlEQUE0RDs7Ozs7SUFFNUQsMkRBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIENvbnRlbnRDaGlsZHJlbiwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3ksIE91dHB1dCwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBJdGVtQ2hhbmdlZFBheWxvYWQgfSBmcm9tICcuLi9kZWNsYXJhdGl2ZS9pdGVtLWNoYW5nZWQucGF5bG9hZCc7XHJcbmltcG9ydCB7IENoYW5nZWFibGVJdGVtc0hlbHBlciwgSUNoYW5nZWFibGVJdGVtc0NvbnRhaW5lciB9IGZyb20gJy4vY2hhbmdlYWJsZS1oZWxwZXInO1xyXG5pbXBvcnQgeyBDaGFuZ2VhYmxlSXRlbURpcmVjdGl2ZSB9IGZyb20gJy4vY2hhbmdlYWJsZS1pdGVtLmRpcmVjdGl2ZSc7XHJcblxyXG4vKipcclxuICogUGFyZW50IGNsYXNzIGZvciB3cmFwcGVyIGRpcmVjdGl2ZSBmb3IgbXVsdGlwbGUgQ2hhbmdlYWJsZUl0ZW1EaXJlY3RpdmVzXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2hhbmdlYWJsZUl0ZW1zRGlyZWN0aXZlPFRJdGVtPlxyXG4gIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgSUNoYW5nZWFibGVJdGVtc0NvbnRhaW5lcjxUSXRlbT4sIE9uRGVzdHJveSB7XHJcbiAgQENvbnRlbnRDaGlsZHJlbihDaGFuZ2VhYmxlSXRlbURpcmVjdGl2ZSkgcmVhZG9ubHkgZGlyZWN0aXZlSXRlbXM6IFF1ZXJ5TGlzdDxDaGFuZ2VhYmxlSXRlbURpcmVjdGl2ZTxUSXRlbT4+O1xyXG5cclxuICBAT3V0cHV0KClcclxuICBnZXQgb25DaGlsZEl0ZW1DaGFuZ2VkKCk6IEV2ZW50RW1pdHRlcjxJdGVtQ2hhbmdlZFBheWxvYWQ8c3RyaW5nLCBUSXRlbT4+IHtcclxuICAgIHJldHVybiB0aGlzLmNoYW5nZWFibGVJdGVtc0hlbHBlciAmJiB0aGlzLmNoYW5nZWFibGVJdGVtc0hlbHBlci5vbkNoaWxkSXRlbUNoYW5nZWQ7XHJcbiAgfVxyXG4gIEBPdXRwdXQoKVxyXG4gIGdldCBvbkl0ZW1zQ2hhbmdlZCgpOiBFdmVudEVtaXR0ZXI8UXVlcnlMaXN0PENoYW5nZWFibGVJdGVtRGlyZWN0aXZlPFRJdGVtPj4+IHtcclxuICAgIHJldHVybiB0aGlzLmNoYW5nZWFibGVJdGVtc0hlbHBlciAmJiB0aGlzLmNoYW5nZWFibGVJdGVtc0hlbHBlci5vbkl0ZW1zQ2hhbmdlZDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hhbmdlYWJsZUl0ZW1zSGVscGVyOiBDaGFuZ2VhYmxlSXRlbXNIZWxwZXI8VEl0ZW0+O1xyXG5cclxuICBhYnN0cmFjdCBnZXQgaXRlbXMoKTogVEl0ZW1bXTtcclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgdGhpcy5jaGFuZ2VhYmxlSXRlbXNIZWxwZXIgPSBuZXcgQ2hhbmdlYWJsZUl0ZW1zSGVscGVyKHRoaXMuZGlyZWN0aXZlSXRlbXMpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmNoYW5nZWFibGVJdGVtc0hlbHBlci5kZXN0cm95KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==