import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponentComponent } from './DataBindingComponent/DataBindingComponent.component';
import { DirectivesComponentComponent } from './DirectivesComponent/DirectivesComponent.component';
import { StyleBindingComponentComponent } from './StyleBindingComponent/StyleBindingComponent.component';

@NgModule({
  declarations: [			
    AppComponent,
      DataBindingComponentComponent,
      DirectivesComponentComponent,
      StyleBindingComponentComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
