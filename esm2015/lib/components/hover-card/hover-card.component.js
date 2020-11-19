/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, NgZone, Output, Renderer2, ViewChild, } from '@angular/core';
import { omit } from '@angular-react/fabric/lib/utils';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG92ZXItY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9ob3Zlci1jYXJkL2hvdmVyLWNhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBOEIscUJBQXFCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQXFDdkQsTUFBTSxPQUFPLHFCQUFzQixTQUFRLHFCQUFzQzs7Ozs7OztJQXFEL0UsWUFBWSxVQUFzQixFQUFFLGlCQUFvQyxFQUFFLFFBQW1CLEVBQUUsTUFBYztRQUMzRyxLQUFLLENBQUMsVUFBVSxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFYMUMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQ3pDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQ3RDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQVUzRCxDQUFDOzs7OztJQW5DRCxJQUNJLG9CQUFvQixDQUFDLEtBQTRCO1FBQ25ELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUM7UUFDbkMsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsNkJBQTZCLEdBQUcsSUFBSSxDQUFDLHFDQUFxQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3hGO0lBQ0gsQ0FBQzs7OztJQUVELElBQUksb0JBQW9CO1FBQ3RCLE9BQU8sSUFB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RTs7SUFDcEUsdUNBQTRDOztJQUM1Qyx1Q0FBNEM7O0lBQzVDLG9EQUFzRTs7SUFDdEUsMENBQWtEOztJQUNsRCxxREFBOEM7O0lBQzlDLGdEQUE4RDs7SUFDOUQsMkNBQW9EOztJQXdCcEQsOENBQTREOztJQUM1RCwyQ0FBeUQ7O0lBQ3pELDZDQUEyRDs7SUFFM0QsOERBQW1EOzs7OztJQUNuRCxzREFBcUQ7O0lBRXJELDBEQUEyQzs7Ozs7SUFDM0Msa0RBQTZDOzs7Ozs7QUE2Qy9DLDJDQUlDOzs7SUFGQyxrREFBMEY7O0lBQzFGLG1EQUEyRjs7Ozs7QUFHN0YsdUNBRUM7OztJQURDLDRDQUFvRjs7Ozs7O0FBR3RGLHVDQUVDOzs7SUFEQyxpQ0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgSW5wdXRSZW5kZXJlck9wdGlvbnMsIE9taXQsIFJlYWN0V3JhcHBlckNvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3Q2hpbGQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElFeHBhbmRpbmdDYXJkUHJvcHMsIElIb3ZlckNhcmRQcm9wcywgSVBsYWluQ2FyZFByb3BzIH0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvSG92ZXJDYXJkJztcclxuaW1wb3J0IHsgb21pdCB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy9saWIvdXRpbHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmYWItaG92ZXItY2FyZCcsXHJcbiAgZXhwb3J0QXM6ICdmYWJIb3ZlckNhcmQnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8SG92ZXJDYXJkXHJcbiAgICAgICNyZWFjdE5vZGVcclxuICAgICAgW2NvbXBvbmVudFJlZl09XCJjb21wb25lbnRSZWZcIlxyXG4gICAgICBbY2xhc3NOYW1lXT1cImNsYXNzTmFtZVwiXHJcbiAgICAgIFt0aGVtZV09XCJ0aGVtZVwiXHJcbiAgICAgIFt0eXBlXT1cInR5cGVcIlxyXG4gICAgICBbZXhwYW5kaW5nQ2FyZFByb3BzXT1cInRyYW5zZm9ybWVkRXhwYW5kaW5nQ2FyZFByb3BzXCJcclxuICAgICAgW3BsYWluQ2FyZFByb3BzXT1cInRyYW5zZm9ybWVkUGxhaW5DYXJkUHJvcHNcIlxyXG4gICAgICBbc2V0QXJpYURlc2NyaWJlZEJ5XT1cInNldEFyaWFEZXNjcmliZWRCeVwiXHJcbiAgICAgIFtjYXJkT3BlbkRlbGF5XT1cImNhcmRPcGVuRGVsYXlcIlxyXG4gICAgICBbY2FyZERpc21pc3NEZWxheV09XCJjYXJkRGlzbWlzc0RlbGF5XCJcclxuICAgICAgW2V4cGFuZGVkQ2FyZE9wZW5EZWxheV09XCJleHBhbmRlZENhcmRPcGVuRGVsYXlcIlxyXG4gICAgICBbc3RpY2t5XT1cInN0aWNreVwiXHJcbiAgICAgIFtpbnN0YW50T3Blbk9uQ2xpY2tdPVwiaW5zdGFudE9wZW5PbkNsaWNrXCJcclxuICAgICAgW3N0eWxlc109XCJzdHlsZXNcIlxyXG4gICAgICBbdGFyZ2V0XT1cInRhcmdldFwiXHJcbiAgICAgIFtldmVudExpc3RlbmVyVGFyZ2V0XT1cImV2ZW50TGlzdGVuZXJUYXJnZXRcIlxyXG4gICAgICBbdHJhcEZvY3VzXT1cInRyYXBGb2N1c1wiXHJcbiAgICAgIFtzaG91bGRCbG9ja0hvdmVyQ2FyZF09XCJzaG91bGRCbG9ja0hvdmVyQ2FyZFwiXHJcbiAgICAgIFtzZXRJbml0aWFsRm9jdXNdPVwic2V0SW5pdGlhbEZvY3VzXCJcclxuICAgICAgW29wZW5Ib3RLZXldPVwib3BlbkhvdEtleVwiXHJcbiAgICAgIChvbkNhcmRWaXNpYmxlKT1cIm9uQ2FyZFZpc2libGUuZW1pdCgpXCJcclxuICAgICAgKG9uQ2FyZEhpZGUpPVwib25DYXJkSGlkZS5lbWl0KClcIlxyXG4gICAgICAob25DYXJkRXhwYW5kKT1cIm9uQ2FyZEV4cGFuZC5lbWl0KClcIlxyXG4gICAgPlxyXG4gICAgICA8UmVhY3RDb250ZW50PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L1JlYWN0Q29udGVudD5cclxuICAgIDwvSG92ZXJDYXJkPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbJ3JlYWN0LXJlbmRlcmVyJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYWJIb3ZlckNhcmRDb21wb25lbnQgZXh0ZW5kcyBSZWFjdFdyYXBwZXJDb21wb25lbnQ8SUhvdmVyQ2FyZFByb3BzPiB7XHJcbiAgQFZpZXdDaGlsZCgncmVhY3ROb2RlJywgeyBzdGF0aWM6IHRydWUgfSkgcHJvdGVjdGVkIHJlYWN0Tm9kZVJlZjogRWxlbWVudFJlZjtcclxuXHJcbiAgQElucHV0KCkgY29tcG9uZW50UmVmPzogSUhvdmVyQ2FyZFByb3BzWydjb21wb25lbnRSZWYnXTtcclxuICBASW5wdXQoKSBjbGFzc05hbWU/OiBJSG92ZXJDYXJkUHJvcHNbJ2NsYXNzTmFtZSddO1xyXG4gIEBJbnB1dCgpIHRoZW1lPzogSUhvdmVyQ2FyZFByb3BzWyd0aGVtZSddO1xyXG4gIEBJbnB1dCgpIHR5cGU/OiBJSG92ZXJDYXJkUHJvcHNbJ3R5cGUnXTtcclxuICBASW5wdXQoKSBzZXRBcmlhRGVzY3JpYmVkQnk/OiBJSG92ZXJDYXJkUHJvcHNbJ3NldEFyaWFEZXNjcmliZWRCeSddO1xyXG4gIEBJbnB1dCgpIGNhcmRPcGVuRGVsYXk/OiBJSG92ZXJDYXJkUHJvcHNbJ2NhcmRPcGVuRGVsYXknXTtcclxuICBASW5wdXQoKSBjYXJkRGlzbWlzc0RlbGF5PzogSUhvdmVyQ2FyZFByb3BzWydjYXJkRGlzbWlzc0RlbGF5J107XHJcbiAgQElucHV0KCkgZXhwYW5kZWRDYXJkT3BlbkRlbGF5PzogSUhvdmVyQ2FyZFByb3BzWydleHBhbmRlZENhcmRPcGVuRGVsYXknXTtcclxuICBASW5wdXQoKSBzdGlja3k/OiBJSG92ZXJDYXJkUHJvcHNbJ3N0aWNreSddO1xyXG4gIEBJbnB1dCgpIGluc3RhbnRPcGVuT25DbGljaz86IElIb3ZlckNhcmRQcm9wc1snaW5zdGFudE9wZW5PbkNsaWNrJ107XHJcbiAgQElucHV0KCkgc3R5bGVzPzogSUhvdmVyQ2FyZFByb3BzWydzdHlsZXMnXTtcclxuICBASW5wdXQoKSB0YXJnZXQ/OiBJSG92ZXJDYXJkUHJvcHNbJ3RhcmdldCddO1xyXG4gIEBJbnB1dCgpIGV2ZW50TGlzdGVuZXJUYXJnZXQ/OiBJSG92ZXJDYXJkUHJvcHNbJ2V2ZW50TGlzdGVuZXJUYXJnZXQnXTtcclxuICBASW5wdXQoKSB0cmFwRm9jdXM/OiBJSG92ZXJDYXJkUHJvcHNbJ3RyYXBGb2N1cyddO1xyXG4gIEBJbnB1dCgpIHNob3VsZEJsb2NrSG92ZXJDYXJkPzogKCkgPT4gYm9vbGVhbjsgLy8gV29ya2Fyb3VuZCBmb3IgYnVnIGluIHRoZSBGYWJyaWMgUmVhY3QgdHlwZXMgKCgpID0+IHZvaWQpXHJcbiAgQElucHV0KCkgc2V0SW5pdGlhbEZvY3VzPzogSUhvdmVyQ2FyZFByb3BzWydzZXRJbml0aWFsRm9jdXMnXTtcclxuICBASW5wdXQoKSBvcGVuSG90S2V5PzogSUhvdmVyQ2FyZFByb3BzWydvcGVuSG90S2V5J107XHJcbiAgQElucHV0KClcclxuICBzZXQgZXhwYW5kaW5nQ2FyZE9wdGlvbnModmFsdWU6IElFeHBhbmRpbmdDYXJkT3B0aW9ucykge1xyXG4gICAgdGhpcy5fZXhwYW5kaW5nQ2FyZE9wdGlvbnMgPSB2YWx1ZTtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybWVkRXhwYW5kaW5nQ2FyZFByb3BzID0gdGhpcy5fdHJhbnNmb3JtRXhwYW5kaW5nQ2FyZE9wdGlvbnNUb1Byb3BzKHZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBleHBhbmRpbmdDYXJkT3B0aW9ucygpOiBJRXhwYW5kaW5nQ2FyZE9wdGlvbnMge1xyXG4gICAgcmV0dXJuIHRoaXMuX2V4cGFuZGluZ0NhcmRPcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgc2V0IHBsYWluQ2FyZE9wdGlvbnModmFsdWU6IElQbGFpbkNhcmRPcHRpb25zKSB7XHJcbiAgICB0aGlzLl9wbGFpbkNhcmRPcHRpb25zID0gdmFsdWU7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgdGhpcy50cmFuc2Zvcm1lZFBsYWluQ2FyZFByb3BzID0gdGhpcy5fdHJhbnNmb3JtUGxhaW5DYXJkT3B0aW9uc1RvUHJvcHModmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHBsYWluQ2FyZE9wdGlvbnMoKTogSVBsYWluQ2FyZE9wdGlvbnMge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BsYWluQ2FyZE9wdGlvbnM7XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25DYXJkVmlzaWJsZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25DYXJkSGlkZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25DYXJkRXhwYW5kID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICB0cmFuc2Zvcm1lZEV4cGFuZGluZ0NhcmRQcm9wczogSUV4cGFuZGluZ0NhcmRQcm9wcztcclxuICBwcml2YXRlIF9leHBhbmRpbmdDYXJkT3B0aW9uczogSUV4cGFuZGluZ0NhcmRPcHRpb25zO1xyXG5cclxuICB0cmFuc2Zvcm1lZFBsYWluQ2FyZFByb3BzOiBJUGxhaW5DYXJkUHJvcHM7XHJcbiAgcHJpdmF0ZSBfcGxhaW5DYXJkT3B0aW9uczogSVBsYWluQ2FyZE9wdGlvbnM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmdab25lOiBOZ1pvbmUpIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlciwgeyBuZ1pvbmUgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF90cmFuc2Zvcm1FeHBhbmRpbmdDYXJkT3B0aW9uc1RvUHJvcHMob3B0aW9uczogSUV4cGFuZGluZ0NhcmRPcHRpb25zKTogSUV4cGFuZGluZ0NhcmRQcm9wcyB7XHJcbiAgICBjb25zdCBzaGFyZWRQcm9wZXJ0aWVzID0gb21pdChvcHRpb25zLCAncmVuZGVyQ29tcGFjdENhcmQnLCAncmVuZGVyRXhwYW5kZWRDYXJkJyk7XHJcblxyXG4gICAgY29uc3QgY29tcGFjdENhcmRSZW5kZXJlciA9IHRoaXMuY3JlYXRlSW5wdXRKc3hSZW5kZXJlcihvcHRpb25zLnJlbmRlckNvbXBhY3RDYXJkKTtcclxuICAgIGNvbnN0IGV4cGFuZGVkQ2FyZFJlbmRlcmVyID0gdGhpcy5jcmVhdGVJbnB1dEpzeFJlbmRlcmVyKG9wdGlvbnMucmVuZGVyRXhwYW5kZWRDYXJkKTtcclxuXHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihcclxuICAgICAge30sXHJcbiAgICAgIHNoYXJlZFByb3BlcnRpZXMsXHJcbiAgICAgIGNvbXBhY3RDYXJkUmVuZGVyZXIgJiZcclxuICAgICAgKHsgb25SZW5kZXJDb21wYWN0Q2FyZDogZGF0YSA9PiBjb21wYWN0Q2FyZFJlbmRlcmVyKHsgZGF0YSB9KSB9IGFzIFBpY2s8XHJcbiAgICAgICAgSUV4cGFuZGluZ0NhcmRQcm9wcyxcclxuICAgICAgICAnb25SZW5kZXJDb21wYWN0Q2FyZCdcclxuICAgICAgPiksXHJcbiAgICAgIGV4cGFuZGVkQ2FyZFJlbmRlcmVyICYmXHJcbiAgICAgICh7IG9uUmVuZGVyRXhwYW5kZWRDYXJkOiBkYXRhID0+IGV4cGFuZGVkQ2FyZFJlbmRlcmVyKHsgZGF0YSB9KSB9IGFzIFBpY2s8XHJcbiAgICAgICAgSUV4cGFuZGluZ0NhcmRQcm9wcyxcclxuICAgICAgICAnb25SZW5kZXJFeHBhbmRlZENhcmQnXHJcbiAgICAgID4pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfdHJhbnNmb3JtUGxhaW5DYXJkT3B0aW9uc1RvUHJvcHMob3B0aW9uczogSVBsYWluQ2FyZE9wdGlvbnMpOiBJUGxhaW5DYXJkUHJvcHMge1xyXG4gICAgY29uc3Qgc2hhcmVkUHJvcGVydGllcyA9IG9taXQob3B0aW9ucywgJ3JlbmRlclBsYWluQ2FyZCcpO1xyXG5cclxuICAgIGNvbnN0IHBsYWluQ2FyZFJlbmRlcmVyID0gdGhpcy5jcmVhdGVJbnB1dEpzeFJlbmRlcmVyKG9wdGlvbnMucmVuZGVyUGxhaW5DYXJkKTtcclxuXHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihcclxuICAgICAge30sXHJcbiAgICAgIHNoYXJlZFByb3BlcnRpZXMsXHJcbiAgICAgIHBsYWluQ2FyZFJlbmRlcmVyICYmXHJcbiAgICAgICh7IG9uUmVuZGVyUGxhaW5DYXJkOiBkYXRhID0+IHBsYWluQ2FyZFJlbmRlcmVyKHsgZGF0YSB9KSB9IGFzIFBpY2s8SVBsYWluQ2FyZFByb3BzLCAnb25SZW5kZXJQbGFpbkNhcmQnPilcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ291bnRlcnBhcnQgb2YgYElFeHBhbmRpbmdDYXJkUHJvcHNgLCB3aXRoIEFuZ3VsYXIgYWRqdXN0bWVudHMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElFeHBhbmRpbmdDYXJkT3B0aW9uc1xyXG4gIGV4dGVuZHMgT21pdDxJRXhwYW5kaW5nQ2FyZFByb3BzLCAnb25SZW5kZXJDb21wYWN0Q2FyZCcgfCAnb25SZW5kZXJFeHBhbmRlZENhcmQnPiB7XHJcbiAgcmVhZG9ubHkgcmVuZGVyQ29tcGFjdENhcmQ/OiBJbnB1dFJlbmRlcmVyT3B0aW9uczxSZW5kZXJDYXJkQ29udGV4dDxJRXhwYW5kaW5nQ2FyZFByb3BzPj47XHJcbiAgcmVhZG9ubHkgcmVuZGVyRXhwYW5kZWRDYXJkPzogSW5wdXRSZW5kZXJlck9wdGlvbnM8UmVuZGVyQ2FyZENvbnRleHQ8SUV4cGFuZGluZ0NhcmRQcm9wcz4+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElQbGFpbkNhcmRPcHRpb25zIGV4dGVuZHMgT21pdDxJUGxhaW5DYXJkUHJvcHMsICdvblJlbmRlclBsYWluQ2FyZCc+IHtcclxuICByZWFkb25seSByZW5kZXJQbGFpbkNhcmQ/OiBJbnB1dFJlbmRlcmVyT3B0aW9uczxSZW5kZXJDYXJkQ29udGV4dDxJUGxhaW5DYXJkUHJvcHM+PjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZW5kZXJDYXJkQ29udGV4dDxUID0gYW55PiB7XHJcbiAgcmVhZG9ubHkgZGF0YTogVDtcclxufVxyXG4iXX0=