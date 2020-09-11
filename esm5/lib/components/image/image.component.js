/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild, } from '@angular/core';
var FabImageComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabImageComponent, _super);
    function FabImageComponent(elementRef, changeDetectorRef, renderer) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer) || this;
        _this.onLoadingStateChange = new EventEmitter();
        return _this;
    }
    FabImageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-image',
                    exportAs: 'fabImage',
                    template: "\n    <!-- prettier-ignore -->\n    <Image\n      #reactNode\n      [alt]=\"alt\"\n      [crossOrigin]=\"crossOrigin\"\n      [height]=\"height\"\n      [sizes]=\"sizes\"\n      [src]=\"src\"\n      [srcSet]=\"srcSet\"\n      [useMap]=\"useMap\"\n      [width]=\"width\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [className]=\"className\"\n      [shouldFadeIn]=\"shouldFadeIn\"\n      [shouldStartVisible]=\"shouldStartVisible\"\n      [imageFit]=\"imageFit\"\n      [errorSrc]=\"errorSrc\"\n      [maximizeFrame]=\"maximizeFrame\"\n      (onLoadingStateChange)=\"onLoadingStateChange.emit($event)\"\n      [coverStyle]=\"coverStyle\"\n    >\n    </Image>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabImageComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    FabImageComponent.propDecorators = {
        alt: [{ type: Input }],
        crossOrigin: [{ type: Input }],
        height: [{ type: Input }],
        sizes: [{ type: Input }],
        src: [{ type: Input }],
        srcSet: [{ type: Input }],
        useMap: [{ type: Input }],
        width: [{ type: Input }],
        styles: [{ type: Input }],
        theme: [{ type: Input }],
        className: [{ type: Input }],
        shouldFadeIn: [{ type: Input }],
        shouldStartVisible: [{ type: Input }],
        imageFit: [{ type: Input }],
        errorSrc: [{ type: Input }],
        maximizeFrame: [{ type: Input }],
        coverStyle: [{ type: Input }],
        onLoadingStateChange: [{ type: Output }],
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
    };
    return FabImageComponent;
}(ReactWrapperComponent));
export { FabImageComponent };
if (false) {
    /** @type {?} */
    FabImageComponent.prototype.alt;
    /** @type {?} */
    FabImageComponent.prototype.crossOrigin;
    /** @type {?} */
    FabImageComponent.prototype.height;
    /** @type {?} */
    FabImageComponent.prototype.sizes;
    /** @type {?} */
    FabImageComponent.prototype.src;
    /** @type {?} */
    FabImageComponent.prototype.srcSet;
    /** @type {?} */
    FabImageComponent.prototype.useMap;
    /** @type {?} */
    FabImageComponent.prototype.width;
    /** @type {?} */
    FabImageComponent.prototype.styles;
    /** @type {?} */
    FabImageComponent.prototype.theme;
    /** @type {?} */
    FabImageComponent.prototype.className;
    /** @type {?} */
    FabImageComponent.prototype.shouldFadeIn;
    /** @type {?} */
    FabImageComponent.prototype.shouldStartVisible;
    /** @type {?} */
    FabImageComponent.prototype.imageFit;
    /** @type {?} */
    FabImageComponent.prototype.errorSrc;
    /** @type {?} */
    FabImageComponent.prototype.maximizeFrame;
    /** @type {?} */
    FabImageComponent.prototype.coverStyle;
    /** @type {?} */
    FabImageComponent.prototype.onLoadingStateChange;
    /**
     * @type {?}
     * @protected
     */
    FabImageComponent.prototype.reactNodeRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljL2xpYi9jb21wb25lbnRzL2ltYWdlLyIsInNvdXJjZXMiOlsiaW1hZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM1RCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFHdkI7SUErQnVDLDZDQUFrQztJQXdCdkUsMkJBQVksVUFBc0IsRUFBRSxpQkFBb0MsRUFBRSxRQUFtQjtRQUE3RixZQUNFLGtCQUFNLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLENBQUMsU0FDL0M7UUFOa0IsMEJBQW9CLEdBQUcsSUFBSSxZQUFZLEVBQWtCLENBQUM7O0lBTTdFLENBQUM7O2dCQXpERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFFBQVEsRUFBRSxVQUFVO29CQUNwQixRQUFRLEVBQUUsc3FCQXdCVDtvQkFFRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs2QkFEdEMsZ0JBQWdCO2lCQUUxQjs7OztnQkF2Q0MsVUFBVTtnQkFGVixpQkFBaUI7Z0JBTWpCLFNBQVM7OztzQkFxQ1IsS0FBSzs4QkFDTCxLQUFLO3lCQUNMLEtBQUs7d0JBQ0wsS0FBSztzQkFDTCxLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3lCQUVMLEtBQUs7d0JBQ0wsS0FBSzs0QkFDTCxLQUFLOytCQUNMLEtBQUs7cUNBQ0wsS0FBSzsyQkFDTCxLQUFLOzJCQUNMLEtBQUs7Z0NBQ0wsS0FBSzs2QkFDTCxLQUFLO3VDQUVMLE1BQU07K0JBRU4sU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O0lBSzFDLHdCQUFDO0NBQUEsQUExREQsQ0ErQnVDLHFCQUFxQixHQTJCM0Q7U0EzQlksaUJBQWlCOzs7SUFDNUIsZ0NBQWtDOztJQUNsQyx3Q0FBa0Q7O0lBQ2xELG1DQUF3Qzs7SUFDeEMsa0NBQXNDOztJQUN0QyxnQ0FBa0M7O0lBQ2xDLG1DQUF3Qzs7SUFDeEMsbUNBQXdDOztJQUN4QyxrQ0FBc0M7O0lBRXRDLG1DQUF3Qzs7SUFDeEMsa0NBQXNDOztJQUN0QyxzQ0FBOEM7O0lBQzlDLHlDQUFvRDs7SUFDcEQsK0NBQWdFOztJQUNoRSxxQ0FBNEM7O0lBQzVDLHFDQUE0Qzs7SUFDNUMsMENBQXNEOztJQUN0RCx1Q0FBZ0Q7O0lBRWhELGlEQUE2RTs7Ozs7SUFFN0UseUNBQTZFIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IFJlYWN0V3JhcHBlckNvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFZpZXdDaGlsZCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSUltYWdlUHJvcHMsIEltYWdlTG9hZFN0YXRlIH0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvSW1hZ2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmYWItaW1hZ2UnLFxyXG4gIGV4cG9ydEFzOiAnZmFiSW1hZ2UnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8IS0tIHByZXR0aWVyLWlnbm9yZSAtLT5cclxuICAgIDxJbWFnZVxyXG4gICAgICAjcmVhY3ROb2RlXHJcbiAgICAgIFthbHRdPVwiYWx0XCJcclxuICAgICAgW2Nyb3NzT3JpZ2luXT1cImNyb3NzT3JpZ2luXCJcclxuICAgICAgW2hlaWdodF09XCJoZWlnaHRcIlxyXG4gICAgICBbc2l6ZXNdPVwic2l6ZXNcIlxyXG4gICAgICBbc3JjXT1cInNyY1wiXHJcbiAgICAgIFtzcmNTZXRdPVwic3JjU2V0XCJcclxuICAgICAgW3VzZU1hcF09XCJ1c2VNYXBcIlxyXG4gICAgICBbd2lkdGhdPVwid2lkdGhcIlxyXG4gICAgICBbc3R5bGVzXT1cInN0eWxlc1wiXHJcbiAgICAgIFt0aGVtZV09XCJ0aGVtZVwiXHJcbiAgICAgIFtjbGFzc05hbWVdPVwiY2xhc3NOYW1lXCJcclxuICAgICAgW3Nob3VsZEZhZGVJbl09XCJzaG91bGRGYWRlSW5cIlxyXG4gICAgICBbc2hvdWxkU3RhcnRWaXNpYmxlXT1cInNob3VsZFN0YXJ0VmlzaWJsZVwiXHJcbiAgICAgIFtpbWFnZUZpdF09XCJpbWFnZUZpdFwiXHJcbiAgICAgIFtlcnJvclNyY109XCJlcnJvclNyY1wiXHJcbiAgICAgIFttYXhpbWl6ZUZyYW1lXT1cIm1heGltaXplRnJhbWVcIlxyXG4gICAgICAob25Mb2FkaW5nU3RhdGVDaGFuZ2UpPVwib25Mb2FkaW5nU3RhdGVDaGFuZ2UuZW1pdCgkZXZlbnQpXCJcclxuICAgICAgW2NvdmVyU3R5bGVdPVwiY292ZXJTdHlsZVwiXHJcbiAgICA+XHJcbiAgICA8L0ltYWdlPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbJ3JlYWN0LXJlbmRlcmVyJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYWJJbWFnZUNvbXBvbmVudCBleHRlbmRzIFJlYWN0V3JhcHBlckNvbXBvbmVudDxJSW1hZ2VQcm9wcz4ge1xyXG4gIEBJbnB1dCgpIGFsdD86IElJbWFnZVByb3BzWydhbHQnXTtcclxuICBASW5wdXQoKSBjcm9zc09yaWdpbj86IElJbWFnZVByb3BzWydjcm9zc09yaWdpbiddO1xyXG4gIEBJbnB1dCgpIGhlaWdodD86IElJbWFnZVByb3BzWydoZWlnaHQnXTtcclxuICBASW5wdXQoKSBzaXplcz86IElJbWFnZVByb3BzWydzaXplcyddO1xyXG4gIEBJbnB1dCgpIHNyYz86IElJbWFnZVByb3BzWydzcmMnXTtcclxuICBASW5wdXQoKSBzcmNTZXQ/OiBJSW1hZ2VQcm9wc1snc3JjU2V0J107XHJcbiAgQElucHV0KCkgdXNlTWFwPzogSUltYWdlUHJvcHNbJ3VzZU1hcCddO1xyXG4gIEBJbnB1dCgpIHdpZHRoPzogSUltYWdlUHJvcHNbJ3dpZHRoJ107XHJcblxyXG4gIEBJbnB1dCgpIHN0eWxlcz86IElJbWFnZVByb3BzWydzdHlsZXMnXTtcclxuICBASW5wdXQoKSB0aGVtZT86IElJbWFnZVByb3BzWyd0aGVtZSddO1xyXG4gIEBJbnB1dCgpIGNsYXNzTmFtZT86IElJbWFnZVByb3BzWydjbGFzc05hbWUnXTtcclxuICBASW5wdXQoKSBzaG91bGRGYWRlSW4/OiBJSW1hZ2VQcm9wc1snc2hvdWxkRmFkZUluJ107XHJcbiAgQElucHV0KCkgc2hvdWxkU3RhcnRWaXNpYmxlPzogSUltYWdlUHJvcHNbJ3Nob3VsZFN0YXJ0VmlzaWJsZSddO1xyXG4gIEBJbnB1dCgpIGltYWdlRml0PzogSUltYWdlUHJvcHNbJ2ltYWdlRml0J107XHJcbiAgQElucHV0KCkgZXJyb3JTcmM/OiBJSW1hZ2VQcm9wc1snZXJyb3JTcmMnXTtcclxuICBASW5wdXQoKSBtYXhpbWl6ZUZyYW1lPzogSUltYWdlUHJvcHNbJ21heGltaXplRnJhbWUnXTtcclxuICBASW5wdXQoKSBjb3ZlclN0eWxlPzogSUltYWdlUHJvcHNbJ2NvdmVyU3R5bGUnXTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uTG9hZGluZ1N0YXRlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxJbWFnZUxvYWRTdGF0ZT4oKTtcclxuXHJcbiAgQFZpZXdDaGlsZCgncmVhY3ROb2RlJywgeyBzdGF0aWM6IHRydWUgfSkgcHJvdGVjdGVkIHJlYWN0Tm9kZVJlZjogRWxlbWVudFJlZjtcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcbiAgICBzdXBlcihlbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXIpO1xyXG4gIH1cclxufVxyXG4iXX0=