import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridFilterPipe } from '../grid-filter.pipe';


@NgModule({
  declarations: [GridFilterPipe],
  exports:[GridFilterPipe],
  imports: [
    CommonModule
  ]
})
export class GridCommanModuleModule { }
