import { __extends, __spread } from 'tslib';
import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, NgZone, ViewChild, Input, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { MarqueeSelection } from 'office-ui-fabric-react/lib/MarqueeSelection';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabMarqueeSelectionComponent = /** @class */ (function (_super) {
    __extends(FabMarqueeSelectionComponent, _super);
    function FabMarqueeSelectionComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        return _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone, setHostDisplay: true }) || this;
    }
    FabMarqueeSelectionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-marquee-selection',
                    exportAs: 'fabMarqueeSelection',
                    template: "\n    <MarqueeSelection\n      #reactNode\n      [selection]=\"selection\"\n      [className]=\"className\"\n      [componentRef]=\"componentRef\"\n      [isDraggingConstrainedToRoot]=\"isDraggingConstrainedToRoot\"\n      [isEnabled]=\"isEnabled\"\n      [rootProps]=\"rootProps\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [ShouldStartSelection]=\"onShouldStartSelection\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </MarqueeSelection>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabMarqueeSelectionComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    FabMarqueeSelectionComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
        componentRef: [{ type: Input }],
        selection: [{ type: Input }],
        rootProps: [{ type: Input }],
        onShouldStartSelection: [{ type: Input }],
        isEnabled: [{ type: Input }],
        isDraggingConstrainedToRoot: [{ type: Input }],
        className: [{ type: Input }],
        theme: [{ type: Input }],
        styles: [{ type: Input }]
    };
    return FabMarqueeSelectionComponent;
}(ReactWrapperComponent));
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabMarqueeSelectionComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabMarqueeSelectionComponent.prototype.componentRef;
    /** @type {?} */
    FabMarqueeSelectionComponent.prototype.selection;
    /** @type {?} */
    FabMarqueeSelectionComponent.prototype.rootProps;
    /** @type {?} */
    FabMarqueeSelectionComponent.prototype.onShouldStartSelection;
    /** @type {?} */
    FabMarqueeSelectionComponent.prototype.isEnabled;
    /** @type {?} */
    FabMarqueeSelectionComponent.prototype.isDraggingConstrainedToRoot;
    /** @type {?} */
    FabMarqueeSelectionComponent.prototype.className;
    /** @type {?} */
    FabMarqueeSelectionComponent.prototype.theme;
    /** @type {?} */
    FabMarqueeSelectionComponent.prototype.styles;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var components = [FabMarqueeSelectionComponent];
var FabMarqueeSelectionModule = /** @class */ (function () {
    function FabMarqueeSelectionModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('MarqueeSelection', (/**
         * @return {?}
         */
        function () { return MarqueeSelection; }));
    }
    FabMarqueeSelectionModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: components,
                    exports: __spread(components),
                    schemas: [NO_ERRORS_SCHEMA],
                },] }
    ];
    /** @nocollapse */
    FabMarqueeSelectionModule.ctorParameters = function () { return []; };
    return FabMarqueeSelectionModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FabMarqueeSelectionModule, FabMarqueeSelectionComponent as ɵa };
//# sourceMappingURL=angular-react-fabric-lib-components-marquee-selection.js.map
