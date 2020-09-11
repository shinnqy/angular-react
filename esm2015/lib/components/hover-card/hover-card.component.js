/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, NgZone, Output, Renderer2, ViewChild, } from '@angular/core';
import { omit } from 'angular-react-toolkit/utils/omit';
export class FabHoverCardComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, { ngZone });
        this.onCardVisible = new EventEmitter();
        this.onCardHide = new EventEmitter();
        this.onCardExpand = new EventEmitter();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set expandingCardOptions(value) {
        this._expandingCardOptions = value;
        if (value) {
            this.transformedExpandingCardProps = this._transformExpandingCardOptionsToProps(value);
        }
    }
    /**
     * @return {?}
     */
    get expandingCardOptions() {
        return this._expandingCardOptions;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set plainCardOptions(value) {
        this._plainCardOptions = value;
        if (value) {
            this.transformedPlainCardProps = this._transformPlainCardOptionsToProps(value);
        }
    }
    /**
     * @return {?}
     */
    get plainCardOptions() {
        return this._plainCardOptions;
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    _transformExpandingCardOptionsToProps(options) {
        /** @type {?} */
        const sharedProperties = omit(options, 'renderCompactCard', 'renderExpandedCard');
        /** @type {?} */
        const compactCardRenderer = this.createInputJsxRenderer(options.renderCompactCard);
        /** @type {?} */
        const expandedCardRenderer = this.createInputJsxRenderer(options.renderExpandedCard);
        return Object.assign({}, sharedProperties, compactCardRenderer &&
            ((/** @type {?} */ ({ onRenderCompactCard: (/**
                 * @param {?} data
                 * @return {?}
                 */
                data => compactCardRenderer({ data })) }))), expandedCardRenderer &&
            ((/** @type {?} */ ({ onRenderExpandedCard: (/**
                 * @param {?} data
                 * @return {?}
                 */
                data => expandedCardRenderer({ data })) }))));
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    _transformPlainCardOptionsToProps(options) {
        /** @type {?} */
        const sharedProperties = omit(options, 'renderPlainCard');
        /** @type {?} */
        const plainCardRenderer = this.createInputJsxRenderer(options.renderPlainCard);
        return Object.assign({}, sharedProperties, plainCardRenderer &&
            ((/** @type {?} */ ({ onRenderPlainCard: (/**
                 * @param {?} data
                 * @return {?}
                 */
                data => plainCardRenderer({ data })) }))));
    }
}
FabHoverCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-hover-card',
                exportAs: 'fabHoverCard',
                template: `
    <HoverCard
      #reactNode
      [componentRef]="componentRef"
      [className]="className"
      [theme]="theme"
      [type]="type"
      [expandingCardProps]="transformedExpandingCardProps"
      [plainCardProps]="transformedPlainCardProps"
      [setAriaDescribedBy]="setAriaDescribedBy"
      [cardOpenDelay]="cardOpenDelay"
      [cardDismissDelay]="cardDismissDelay"
      [expandedCardOpenDelay]="expandedCardOpenDelay"
      [sticky]="sticky"
      [instantOpenOnClick]="instantOpenOnClick"
      [styles]="styles"
      [target]="target"
      [eventListenerTarget]="eventListenerTarget"
      [trapFocus]="trapFocus"
      [shouldBlockHoverCard]="shouldBlockHoverCard"
      [setInitialFocus]="setInitialFocus"
      [openHotKey]="openHotKey"
      (onCardVisible)="onCardVisible.emit()"
      (onCardHide)="onCardHide.emit()"
      (onCardExpand)="onCardExpand.emit()"
    >
      <ReactContent><ng-content></ng-content></ReactContent>
    </HoverCard>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabHoverCardComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabHoverCardComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    componentRef: [{ type: Input }],
    className: [{ type: Input }],
    theme: [{ type: Input }],
    type: [{ type: Input }],
    setAriaDescribedBy: [{ type: Input }],
    cardOpenDelay: [{ type: Input }],
    cardDismissDelay: [{ type: Input }],
    expandedCardOpenDelay: [{ type: Input }],
    sticky: [{ type: Input }],
    instantOpenOnClick: [{ type: Input }],
    styles: [{ type: Input }],
    target: [{ type: Input }],
    eventListenerTarget: [{ type: Input }],
    trapFocus: [{ type: Input }],
    shouldBlockHoverCard: [{ type: Input }],
    setInitialFocus: [{ type: Input }],
    openHotKey: [{ type: Input }],
    expandingCardOptions: [{ type: Input }],
    plainCardOptions: [{ type: Input }],
    onCardVisible: [{ type: Output }],
    onCardHide: [{ type: Output }],
    onCardExpand: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabHoverCardComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabHoverCardComponent.prototype.componentRef;
    /** @type {?} */
    FabHoverCardComponent.prototype.className;
    /** @type {?} */
    FabHoverCardComponent.prototype.theme;
    /** @type {?} */
    FabHoverCardComponent.prototype.type;
    /** @type {?} */
    FabHoverCardComponent.prototype.setAriaDescribedBy;
    /** @type {?} */
    FabHoverCardComponent.prototype.cardOpenDelay;
    /** @type {?} */
    FabHoverCardComponent.prototype.cardDismissDelay;
    /** @type {?} */
    FabHoverCardComponent.prototype.expandedCardOpenDelay;
    /** @type {?} */
    FabHoverCardComponent.prototype.sticky;
    /** @type {?} */
    FabHoverCardComponent.prototype.instantOpenOnClick;
    /** @type {?} */
    FabHoverCardComponent.prototype.styles;
    /** @type {?} */
    FabHoverCardComponent.prototype.target;
    /** @type {?} */
    FabHoverCardComponent.prototype.eventListenerTarget;
    /** @type {?} */
    FabHoverCardComponent.prototype.trapFocus;
    /** @type {?} */
    FabHoverCardComponent.prototype.shouldBlockHoverCard;
    /** @type {?} */
    FabHoverCardComponent.prototype.setInitialFocus;
    /** @type {?} */
    FabHoverCardComponent.prototype.openHotKey;
    /** @type {?} */
    FabHoverCardComponent.prototype.onCardVisible;
    /** @type {?} */
    FabHoverCardComponent.prototype.onCardHide;
    /** @type {?} */
    FabHoverCardComponent.prototype.onCardExpand;
    /** @type {?} */
    FabHoverCardComponent.prototype.transformedExpandingCardProps;
    /**
     * @type {?}
     * @private
     */
    FabHoverCardComponent.prototype._expandingCardOptions;
    /** @type {?} */
    FabHoverCardComponent.prototype.transformedPlainCardProps;
    /**
     * @type {?}
     * @private
     */
    FabHoverCardComponent.prototype._plainCardOptions;
}
/**
 * Counterpart of `IExpandingCardProps`, with Angular adjustments.
 * @record
 */
export function IExpandingCardOptions() { }
if (false) {
    /** @type {?|undefined} */
    IExpandingCardOptions.prototype.renderCompactCard;
    /** @type {?|undefined} */
    IExpandingCardOptions.prototype.renderExpandedCard;
}
/**
 * @record
 */
export function IPlainCardOptions() { }
if (false) {
    /** @type {?|undefined} */
    IPlainCardOptions.prototype.renderPlainCard;
}
/**
 * @record
 * @template T
 */
export function RenderCardContext() { }
if (false) {
    /** @type {?} */
    RenderCardContext.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG92ZXItY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvbGliL2NvbXBvbmVudHMvaG92ZXItY2FyZC8iLCJzb3VyY2VzIjpbImhvdmVyLWNhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBOEIscUJBQXFCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQXFDeEQsTUFBTSxPQUFPLHFCQUFzQixTQUFRLHFCQUFzQzs7Ozs7OztJQXFEL0UsWUFBWSxVQUFzQixFQUFFLGlCQUFvQyxFQUFFLFFBQW1CLEVBQUUsTUFBYztRQUMzRyxLQUFLLENBQUMsVUFBVSxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFYMUMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQ3pDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQ3RDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQVUzRCxDQUFDOzs7OztJQW5DRCxJQUNJLG9CQUFvQixDQUFDLEtBQTRCO1FBQ25ELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUM7UUFDbkMsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsNkJBQTZCLEdBQUcsSUFBSSxDQUFDLHFDQUFxQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3hGO0lBQ0gsQ0FBQzs7OztJQUVELElBQUksb0JBQW9CO1FBQ3RCLE9BQU8sSUFB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RTs7SUFDcEUsdUNBQTRDOztJQUM1Qyx1Q0FBNEM7O0lBQzVDLG9EQUFzRTs7SUFDdEUsMENBQWtEOztJQUNsRCxxREFBOEM7O0lBQzlDLGdEQUE4RDs7SUFDOUQsMkNBQW9EOztJQXdCcEQsOENBQTREOztJQUM1RCwyQ0FBeUQ7O0lBQ3pELDZDQUEyRDs7SUFFM0QsOERBQW1EOzs7OztJQUNuRCxzREFBcUQ7O0lBRXJELDBEQUEyQzs7Ozs7SUFDM0Msa0RBQTZDOzs7Ozs7QUE2Qy9DLDJDQUlDOzs7SUFGQyxrREFBMEY7O0lBQzFGLG1EQUEyRjs7Ozs7QUFHN0YsdUNBRUM7OztJQURDLDRDQUFvRjs7Ozs7O0FBR3RGLHVDQUVDOzs7SUFEQyxpQ0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgSW5wdXRSZW5kZXJlck9wdGlvbnMsIE9taXQsIFJlYWN0V3JhcHBlckNvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3Q2hpbGQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElFeHBhbmRpbmdDYXJkUHJvcHMsIElIb3ZlckNhcmRQcm9wcywgSVBsYWluQ2FyZFByb3BzIH0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvSG92ZXJDYXJkJztcclxuaW1wb3J0IHsgb21pdCB9IGZyb20gJ2FuZ3VsYXItcmVhY3QtdG9vbGtpdC91dGlscy9vbWl0JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZmFiLWhvdmVyLWNhcmQnLFxyXG4gIGV4cG9ydEFzOiAnZmFiSG92ZXJDYXJkJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPEhvdmVyQ2FyZFxyXG4gICAgICAjcmVhY3ROb2RlXHJcbiAgICAgIFtjb21wb25lbnRSZWZdPVwiY29tcG9uZW50UmVmXCJcclxuICAgICAgW2NsYXNzTmFtZV09XCJjbGFzc05hbWVcIlxyXG4gICAgICBbdGhlbWVdPVwidGhlbWVcIlxyXG4gICAgICBbdHlwZV09XCJ0eXBlXCJcclxuICAgICAgW2V4cGFuZGluZ0NhcmRQcm9wc109XCJ0cmFuc2Zvcm1lZEV4cGFuZGluZ0NhcmRQcm9wc1wiXHJcbiAgICAgIFtwbGFpbkNhcmRQcm9wc109XCJ0cmFuc2Zvcm1lZFBsYWluQ2FyZFByb3BzXCJcclxuICAgICAgW3NldEFyaWFEZXNjcmliZWRCeV09XCJzZXRBcmlhRGVzY3JpYmVkQnlcIlxyXG4gICAgICBbY2FyZE9wZW5EZWxheV09XCJjYXJkT3BlbkRlbGF5XCJcclxuICAgICAgW2NhcmREaXNtaXNzRGVsYXldPVwiY2FyZERpc21pc3NEZWxheVwiXHJcbiAgICAgIFtleHBhbmRlZENhcmRPcGVuRGVsYXldPVwiZXhwYW5kZWRDYXJkT3BlbkRlbGF5XCJcclxuICAgICAgW3N0aWNreV09XCJzdGlja3lcIlxyXG4gICAgICBbaW5zdGFudE9wZW5PbkNsaWNrXT1cImluc3RhbnRPcGVuT25DbGlja1wiXHJcbiAgICAgIFtzdHlsZXNdPVwic3R5bGVzXCJcclxuICAgICAgW3RhcmdldF09XCJ0YXJnZXRcIlxyXG4gICAgICBbZXZlbnRMaXN0ZW5lclRhcmdldF09XCJldmVudExpc3RlbmVyVGFyZ2V0XCJcclxuICAgICAgW3RyYXBGb2N1c109XCJ0cmFwRm9jdXNcIlxyXG4gICAgICBbc2hvdWxkQmxvY2tIb3ZlckNhcmRdPVwic2hvdWxkQmxvY2tIb3ZlckNhcmRcIlxyXG4gICAgICBbc2V0SW5pdGlhbEZvY3VzXT1cInNldEluaXRpYWxGb2N1c1wiXHJcbiAgICAgIFtvcGVuSG90S2V5XT1cIm9wZW5Ib3RLZXlcIlxyXG4gICAgICAob25DYXJkVmlzaWJsZSk9XCJvbkNhcmRWaXNpYmxlLmVtaXQoKVwiXHJcbiAgICAgIChvbkNhcmRIaWRlKT1cIm9uQ2FyZEhpZGUuZW1pdCgpXCJcclxuICAgICAgKG9uQ2FyZEV4cGFuZCk9XCJvbkNhcmRFeHBhbmQuZW1pdCgpXCJcclxuICAgID5cclxuICAgICAgPFJlYWN0Q29udGVudD48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9SZWFjdENvbnRlbnQ+XHJcbiAgICA8L0hvdmVyQ2FyZD5cclxuICBgLFxyXG4gIHN0eWxlczogWydyZWFjdC1yZW5kZXJlciddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmFiSG92ZXJDYXJkQ29tcG9uZW50IGV4dGVuZHMgUmVhY3RXcmFwcGVyQ29tcG9uZW50PElIb3ZlckNhcmRQcm9wcz4ge1xyXG4gIEBWaWV3Q2hpbGQoJ3JlYWN0Tm9kZScsIHsgc3RhdGljOiB0cnVlIH0pIHByb3RlY3RlZCByZWFjdE5vZGVSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBJbnB1dCgpIGNvbXBvbmVudFJlZj86IElIb3ZlckNhcmRQcm9wc1snY29tcG9uZW50UmVmJ107XHJcbiAgQElucHV0KCkgY2xhc3NOYW1lPzogSUhvdmVyQ2FyZFByb3BzWydjbGFzc05hbWUnXTtcclxuICBASW5wdXQoKSB0aGVtZT86IElIb3ZlckNhcmRQcm9wc1sndGhlbWUnXTtcclxuICBASW5wdXQoKSB0eXBlPzogSUhvdmVyQ2FyZFByb3BzWyd0eXBlJ107XHJcbiAgQElucHV0KCkgc2V0QXJpYURlc2NyaWJlZEJ5PzogSUhvdmVyQ2FyZFByb3BzWydzZXRBcmlhRGVzY3JpYmVkQnknXTtcclxuICBASW5wdXQoKSBjYXJkT3BlbkRlbGF5PzogSUhvdmVyQ2FyZFByb3BzWydjYXJkT3BlbkRlbGF5J107XHJcbiAgQElucHV0KCkgY2FyZERpc21pc3NEZWxheT86IElIb3ZlckNhcmRQcm9wc1snY2FyZERpc21pc3NEZWxheSddO1xyXG4gIEBJbnB1dCgpIGV4cGFuZGVkQ2FyZE9wZW5EZWxheT86IElIb3ZlckNhcmRQcm9wc1snZXhwYW5kZWRDYXJkT3BlbkRlbGF5J107XHJcbiAgQElucHV0KCkgc3RpY2t5PzogSUhvdmVyQ2FyZFByb3BzWydzdGlja3knXTtcclxuICBASW5wdXQoKSBpbnN0YW50T3Blbk9uQ2xpY2s/OiBJSG92ZXJDYXJkUHJvcHNbJ2luc3RhbnRPcGVuT25DbGljayddO1xyXG4gIEBJbnB1dCgpIHN0eWxlcz86IElIb3ZlckNhcmRQcm9wc1snc3R5bGVzJ107XHJcbiAgQElucHV0KCkgdGFyZ2V0PzogSUhvdmVyQ2FyZFByb3BzWyd0YXJnZXQnXTtcclxuICBASW5wdXQoKSBldmVudExpc3RlbmVyVGFyZ2V0PzogSUhvdmVyQ2FyZFByb3BzWydldmVudExpc3RlbmVyVGFyZ2V0J107XHJcbiAgQElucHV0KCkgdHJhcEZvY3VzPzogSUhvdmVyQ2FyZFByb3BzWyd0cmFwRm9jdXMnXTtcclxuICBASW5wdXQoKSBzaG91bGRCbG9ja0hvdmVyQ2FyZD86ICgpID0+IGJvb2xlYW47IC8vIFdvcmthcm91bmQgZm9yIGJ1ZyBpbiB0aGUgRmFicmljIFJlYWN0IHR5cGVzICgoKSA9PiB2b2lkKVxyXG4gIEBJbnB1dCgpIHNldEluaXRpYWxGb2N1cz86IElIb3ZlckNhcmRQcm9wc1snc2V0SW5pdGlhbEZvY3VzJ107XHJcbiAgQElucHV0KCkgb3BlbkhvdEtleT86IElIb3ZlckNhcmRQcm9wc1snb3BlbkhvdEtleSddO1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGV4cGFuZGluZ0NhcmRPcHRpb25zKHZhbHVlOiBJRXhwYW5kaW5nQ2FyZE9wdGlvbnMpIHtcclxuICAgIHRoaXMuX2V4cGFuZGluZ0NhcmRPcHRpb25zID0gdmFsdWU7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgdGhpcy50cmFuc2Zvcm1lZEV4cGFuZGluZ0NhcmRQcm9wcyA9IHRoaXMuX3RyYW5zZm9ybUV4cGFuZGluZ0NhcmRPcHRpb25zVG9Qcm9wcyh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgZXhwYW5kaW5nQ2FyZE9wdGlvbnMoKTogSUV4cGFuZGluZ0NhcmRPcHRpb25zIHtcclxuICAgIHJldHVybiB0aGlzLl9leHBhbmRpbmdDYXJkT3B0aW9ucztcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIHNldCBwbGFpbkNhcmRPcHRpb25zKHZhbHVlOiBJUGxhaW5DYXJkT3B0aW9ucykge1xyXG4gICAgdGhpcy5fcGxhaW5DYXJkT3B0aW9ucyA9IHZhbHVlO1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtZWRQbGFpbkNhcmRQcm9wcyA9IHRoaXMuX3RyYW5zZm9ybVBsYWluQ2FyZE9wdGlvbnNUb1Byb3BzKHZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBwbGFpbkNhcmRPcHRpb25zKCk6IElQbGFpbkNhcmRPcHRpb25zIHtcclxuICAgIHJldHVybiB0aGlzLl9wbGFpbkNhcmRPcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uQ2FyZFZpc2libGUgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uQ2FyZEhpZGUgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uQ2FyZEV4cGFuZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgdHJhbnNmb3JtZWRFeHBhbmRpbmdDYXJkUHJvcHM6IElFeHBhbmRpbmdDYXJkUHJvcHM7XHJcbiAgcHJpdmF0ZSBfZXhwYW5kaW5nQ2FyZE9wdGlvbnM6IElFeHBhbmRpbmdDYXJkT3B0aW9ucztcclxuXHJcbiAgdHJhbnNmb3JtZWRQbGFpbkNhcmRQcm9wczogSVBsYWluQ2FyZFByb3BzO1xyXG4gIHByaXZhdGUgX3BsYWluQ2FyZE9wdGlvbnM6IElQbGFpbkNhcmRPcHRpb25zO1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG5nWm9uZTogTmdab25lKSB7XHJcbiAgICBzdXBlcihlbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXIsIHsgbmdab25lIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfdHJhbnNmb3JtRXhwYW5kaW5nQ2FyZE9wdGlvbnNUb1Byb3BzKG9wdGlvbnM6IElFeHBhbmRpbmdDYXJkT3B0aW9ucyk6IElFeHBhbmRpbmdDYXJkUHJvcHMge1xyXG4gICAgY29uc3Qgc2hhcmVkUHJvcGVydGllcyA9IG9taXQob3B0aW9ucywgJ3JlbmRlckNvbXBhY3RDYXJkJywgJ3JlbmRlckV4cGFuZGVkQ2FyZCcpO1xyXG5cclxuICAgIGNvbnN0IGNvbXBhY3RDYXJkUmVuZGVyZXIgPSB0aGlzLmNyZWF0ZUlucHV0SnN4UmVuZGVyZXIob3B0aW9ucy5yZW5kZXJDb21wYWN0Q2FyZCk7XHJcbiAgICBjb25zdCBleHBhbmRlZENhcmRSZW5kZXJlciA9IHRoaXMuY3JlYXRlSW5wdXRKc3hSZW5kZXJlcihvcHRpb25zLnJlbmRlckV4cGFuZGVkQ2FyZCk7XHJcblxyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXHJcbiAgICAgIHt9LFxyXG4gICAgICBzaGFyZWRQcm9wZXJ0aWVzLFxyXG4gICAgICBjb21wYWN0Q2FyZFJlbmRlcmVyICYmXHJcbiAgICAgICh7IG9uUmVuZGVyQ29tcGFjdENhcmQ6IGRhdGEgPT4gY29tcGFjdENhcmRSZW5kZXJlcih7IGRhdGEgfSkgfSBhcyBQaWNrPFxyXG4gICAgICAgIElFeHBhbmRpbmdDYXJkUHJvcHMsXHJcbiAgICAgICAgJ29uUmVuZGVyQ29tcGFjdENhcmQnXHJcbiAgICAgID4pLFxyXG4gICAgICBleHBhbmRlZENhcmRSZW5kZXJlciAmJlxyXG4gICAgICAoeyBvblJlbmRlckV4cGFuZGVkQ2FyZDogZGF0YSA9PiBleHBhbmRlZENhcmRSZW5kZXJlcih7IGRhdGEgfSkgfSBhcyBQaWNrPFxyXG4gICAgICAgIElFeHBhbmRpbmdDYXJkUHJvcHMsXHJcbiAgICAgICAgJ29uUmVuZGVyRXhwYW5kZWRDYXJkJ1xyXG4gICAgICA+KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3RyYW5zZm9ybVBsYWluQ2FyZE9wdGlvbnNUb1Byb3BzKG9wdGlvbnM6IElQbGFpbkNhcmRPcHRpb25zKTogSVBsYWluQ2FyZFByb3BzIHtcclxuICAgIGNvbnN0IHNoYXJlZFByb3BlcnRpZXMgPSBvbWl0KG9wdGlvbnMsICdyZW5kZXJQbGFpbkNhcmQnKTtcclxuXHJcbiAgICBjb25zdCBwbGFpbkNhcmRSZW5kZXJlciA9IHRoaXMuY3JlYXRlSW5wdXRKc3hSZW5kZXJlcihvcHRpb25zLnJlbmRlclBsYWluQ2FyZCk7XHJcblxyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXHJcbiAgICAgIHt9LFxyXG4gICAgICBzaGFyZWRQcm9wZXJ0aWVzLFxyXG4gICAgICBwbGFpbkNhcmRSZW5kZXJlciAmJlxyXG4gICAgICAoeyBvblJlbmRlclBsYWluQ2FyZDogZGF0YSA9PiBwbGFpbkNhcmRSZW5kZXJlcih7IGRhdGEgfSkgfSBhcyBQaWNrPElQbGFpbkNhcmRQcm9wcywgJ29uUmVuZGVyUGxhaW5DYXJkJz4pXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENvdW50ZXJwYXJ0IG9mIGBJRXhwYW5kaW5nQ2FyZFByb3BzYCwgd2l0aCBBbmd1bGFyIGFkanVzdG1lbnRzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRXhwYW5kaW5nQ2FyZE9wdGlvbnNcclxuICBleHRlbmRzIE9taXQ8SUV4cGFuZGluZ0NhcmRQcm9wcywgJ29uUmVuZGVyQ29tcGFjdENhcmQnIHwgJ29uUmVuZGVyRXhwYW5kZWRDYXJkJz4ge1xyXG4gIHJlYWRvbmx5IHJlbmRlckNvbXBhY3RDYXJkPzogSW5wdXRSZW5kZXJlck9wdGlvbnM8UmVuZGVyQ2FyZENvbnRleHQ8SUV4cGFuZGluZ0NhcmRQcm9wcz4+O1xyXG4gIHJlYWRvbmx5IHJlbmRlckV4cGFuZGVkQ2FyZD86IElucHV0UmVuZGVyZXJPcHRpb25zPFJlbmRlckNhcmRDb250ZXh0PElFeHBhbmRpbmdDYXJkUHJvcHM+PjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUGxhaW5DYXJkT3B0aW9ucyBleHRlbmRzIE9taXQ8SVBsYWluQ2FyZFByb3BzLCAnb25SZW5kZXJQbGFpbkNhcmQnPiB7XHJcbiAgcmVhZG9ubHkgcmVuZGVyUGxhaW5DYXJkPzogSW5wdXRSZW5kZXJlck9wdGlvbnM8UmVuZGVyQ2FyZENvbnRleHQ8SVBsYWluQ2FyZFByb3BzPj47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVuZGVyQ2FyZENvbnRleHQ8VCA9IGFueT4ge1xyXG4gIHJlYWRvbmx5IGRhdGE6IFQ7XHJcbn1cclxuIl19