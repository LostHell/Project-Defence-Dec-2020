import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

const MaterialModules = [
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...MaterialModules],
  exports: MaterialModules,
})
export class MaterialModule {}
