import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShellComponent} from "./shell.component";

@NgModule({
  imports: [CommonModule],
  declarations: [ShellComponent],
  exports: [ShellComponent]
})
export class UiShellModule {}
