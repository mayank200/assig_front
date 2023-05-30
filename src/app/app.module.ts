import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule} from 'ngx-pagination';
// import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule,HTTP_INTERCEPTORS  } from '@angular/common/http';
import { httpInterceptor } from '../shared/interceptors/httpInterceptor';
import { CallApiService } from 'src/shared/services/call-api.service';
import { BnNgIdleService } from 'bn-ng-idle';
// import { NgxDocViewerModule } from 'ngx-doc-viewer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule, // required animations module
    // NgSelectModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      maxOpened:1,
      autoDismiss:true,
      progressBar:true,
      timeOut:3000,
      positionClass:'toast-top-right'
    })

  ],
  providers: [
    CallApiService,
    {provide: HTTP_INTERCEPTORS, useClass: httpInterceptor, multi: true},
    BnNgIdleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
