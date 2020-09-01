// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { registerElement } from '@angular-react/core';
import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/components/Pivot';
import { FabPivotComponent, FabPivotItemComponent } from './pivot.component';

const components = [FabPivotComponent, FabPivotItemComponent];

@NgModule({
  imports: [CommonModule],
  declarations: components,
  exports: components,
  schemas: [NO_ERRORS_SCHEMA],
})
export class FabPivotModule {
  constructor() {
    // Add any React elements to the registry (used by the renderer).
    registerElement('Pivot', () => Pivot);
    registerElement('PivotItem', () => PivotItem);
  }
}
