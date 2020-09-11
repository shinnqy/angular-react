import { __extends } from 'tslib';
import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, ViewChild, Input, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalDivider } from 'office-ui-fabric-react/lib/Divider';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabDividerComponent = /** @class */ (function (_super) {
    __extends(FabDividerComponent, _super);
    function FabDividerComponent(elementRef, changeDetectorRef, renderer) {
        return _super.call(this, elementRef, changeDetectorRef, renderer) || this;
    }
    FabDividerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-vertical-divider',
                    exportAs: 'fabVerticalDivider',
                    template: "\n    <VerticalDivider\n      #reactNode\n      [getClassNames]=\"getClassNames\"\n      [theme]=\"theme\"\n      [styles]=\"styles\"\n      [className]=\"className\"\n    >\n    </VerticalDivider>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabDividerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    FabDividerComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
        getClassNames: [{ type: Input }],
        theme: [{ type: Input }],
        styles: [{ type: Input }],
        className: [{ type: Input }]
    };
    return FabDividerComponent;
}(ReactWrapperComponent));
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabDividerComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabDividerComponent.prototype.getClassNames;
    /** @type {?} */
    FabDividerComponent.prototype.theme;
    /** @type {?} */
    FabDividerComponent.prototype.styles;
    /** @type {?} */
    FabDividerComponent.prototype.className;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var components = [FabDividerComponent];
var FabDividerModule = /** @class */ (function () {
    function FabDividerModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('VerticalDivider', (/**
         * @return {?}
         */
        function () { return VerticalDivider; }));
    }
    FabDividerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: components,
                    exports: components,
                    schemas: [NO_ERRORS_SCHEMA],
                },] }
    ];
    /** @nocollapse */
    FabDividerModule.ctorParameters = function () { return []; };
    return FabDividerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FabDividerComponent, FabDividerModule };
//# sourceMappingURL=angular-react-fabric-lib-components-divider.js.map
