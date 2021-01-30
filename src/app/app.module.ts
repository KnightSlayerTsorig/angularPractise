import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([{
      path: 'posts', loadChildren: () => import('./post/post.module').then(m => m.PostModule)
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
