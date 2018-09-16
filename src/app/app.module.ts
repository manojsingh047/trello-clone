import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { BoardComponent } from './board/board.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { fakeBackendProvider } from './service/fake-backend.service';
import { BoardService } from './service/board.service';
import { LocalStorageService } from './service/local-storage.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    BoardService,
    LocalStorageService,
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
