import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ConvemService } from './convem.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    FormsModule
  ],
  providers: [
    HttpClientModule,
    ConvemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
