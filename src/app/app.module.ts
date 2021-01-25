import { JwtInterceptor } from "./api-interface/api-config/JwtInterceptor";
import { JwtTokenService } from "./core-services/security/utils/JwtTokenService";
import { LocalStorageService } from "./core-services/core-utility/LocalStorageService";
import { LoginService } from "./business-components/login/login.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { ElectronCoreModule } from "./electron-core/electron-core.module";
import { SharedModule } from "./shared/shared.module";
import { MatRadioModule } from "@angular/material/radio";
import { MatSliderModule } from "@angular/material/slider";
import { MatTableModule } from "@angular/material/table";
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  NoopAnimationsModule,
  BrowserAnimationsModule,
} from "@angular/platform-browser/animations";

// NG Translate
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

//Modules
import { AppRoutingModule } from "./app-routing.module";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

//Components
import { AppComponent } from "./app.component";
import { MesNavBarComponent } from "./business-components/mes-nav-bar/mes-nav-bar.component";
import { LoginComponent } from "./business-components/login/login.component";

//Angular material components
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatTabsModule } from "@angular/material/tabs";

//AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

import { MatKeyboardModule } from "angular-onscreen-material-keyboard";
import { FlightTableComponent } from "./business-components/flight-table/flight-table.component";
import { HomeComponent } from "./business-components/home/home.component";
import { MatSortModule } from "@angular/material/sort";
import { MatPaginatorModule } from "@angular/material/paginator";
import { SortDestinationTableComponent } from './business-components/sort-destination-table/sort-destination-table.component';
import { BaggageComponent } from './baggage/baggage.component';

@NgModule({
  declarations: [
    AppComponent,
    MesNavBarComponent,
    LoginComponent,
    FlightTableComponent,
    HomeComponent,
    SortDestinationTableComponent,
    BaggageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTabsModule,
    NoopAnimationsModule,
    MatCheckboxModule,
    MatSliderModule,
    BrowserAnimationsModule,
    ElectronCoreModule,
    MatCardModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatKeyboardModule,
    MatButtonModule,
    MatSortModule,
    MatPaginatorModule,
    FlexLayoutModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    LoginService,
    LocalStorageService,
    JwtTokenService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
