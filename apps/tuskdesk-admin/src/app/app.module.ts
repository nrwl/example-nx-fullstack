import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { UiShellModule } from '@myorg/ui-shell';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NxModule.forRoot(), UiShellModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
