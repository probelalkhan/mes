import { BaggageComponent } from './baggage/baggage.component';
import { SortDestinationTableComponent } from "./business-components/sort-destination-table/sort-destination-table.component";
import { FlightTableComponent } from "./business-components/flight-table/flight-table.component";
import { HomeComponent } from "./business-components/home/home.component";
import { MesNavBarComponent } from "./business-components/mes-nav-bar/mes-nav-bar.component";
import { LoginComponent } from "./business-components/login/login.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./shared/components";

const routes: Routes = [
  {
    path: "",
    component: BaggageComponent,
  },
  {
    path: "home",
    component: HomeComponent,
    children: [
      {
        path: "flightTable",
        component: FlightTableComponent,
      },
      {
        path: "sortDestinationTable",
        component: SortDestinationTableComponent,
      },
    ],
  },

  {
    path: "**",
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
