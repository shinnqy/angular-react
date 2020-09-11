import { __extends } from 'tslib';
import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, ViewChild, Input, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Icon } from 'office-ui-fabric-react/lib/Icon';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabIconComponent = /** @class */ (function (_super) {
    __extends(FabIconComponent, _super);
    function FabIconComponent(elementRef, changeDetectorRef, renderer) {
        return _super.call(this, elementRef, changeDetectorRef, renderer, { setHostDisplay: true }) || this;
    }
    FabIconComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-icon',
                    exportAs: 'fabIcon',
                    template: "\n    <Icon\n      #reactNode\n      [iconName]=\"iconName\"\n      [ariaLabel]=\"ariaLabel\"\n      [iconType]=\"iconType\"\n      [imageProps]=\"imageProps\"\n      [imageErrorAs]=\"imageErrorAs\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n    >\n    </Icon>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabIconComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    FabIconComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
        componentRef: [{ type: Input }],
        iconName: [{ type: Input }],
        ariaLabel: [{ type: Input }],
        iconType: [{ type: Input }],
        imageProps: [{ type: Input }],
        imageErrorAs: [{ type: Input }],
        styles: [{ type: Input }],
        theme: [{ type: Input }]
    };
    return FabIconComponent;
}(ReactWrapperComponent));
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabIconComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabIconComponent.prototype.componentRef;
    /** @type {?} */
    FabIconComponent.prototype.iconName;
    /** @type {?} */
    FabIconComponent.prototype.ariaLabel;
    /** @type {?} */
    FabIconComponent.prototype.iconType;
    /** @type {?} */
    FabIconComponent.prototype.imageProps;
    /** @type {?} */
    FabIconComponent.prototype.imageErrorAs;
    /** @type {?} */
    FabIconComponent.prototype.styles;
    /** @type {?} */
    FabIconComponent.prototype.theme;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var components = [FabIconComponent];
var FabIconModule = /** @class */ (function () {
    function FabIconModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Icon', (/**
         * @return {?}
         */
        function () { return Icon; }));
    }
    FabIconModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: components,
                    exports: components,
                    schemas: [NO_ERRORS_SCHEMA],
                },] }
    ];
    /** @nocollapse */
    FabIconModule.ctorParameters = function () { return []; };
    return FabIconModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FabIconComponent, FabIconModule };
//# sourceMappingURL=angular-react-fabric-lib-components-icon.js.map
