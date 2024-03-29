import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatNativeDateModule } from '@angular/material/core';

import { TemplateComponent } from './components/template/template.component';
import { HeaderComponent } from './components/template/header/header.component';
import { AlertDialogComponent } from './components/material/dialogs/alert-dialog/alert-dialog.component';

@NgModule({
  exports: [
    MaterialModule,
    TemplateComponent,
    FlexLayoutModule,
    MatNativeDateModule
  ],
  declarations: [
    TemplateComponent,
    HeaderComponent,
    AlertDialogComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    MatNativeDateModule,
  ]
})
export class SharedModule { }
