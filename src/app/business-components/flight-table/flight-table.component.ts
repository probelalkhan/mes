import { SortModel } from "./../../api-interface/data-model/flights/SortModel";
import { FlightService } from "./flight.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { FlightModel } from "../../api-interface/data-model/flights/FlightModel";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";

@Component({
  selector: "app-flight-table",
  templateUrl: "./flight-table.component.html",
  styleUrls: ["./flight-table.component.scss"],
})
export class FlightTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private flightService: FlightService) {}

  sortModels = Array<SortModel>();

  displayedColumns: string[] = [
    "carrier",
    "flight",
    "std",
    "destination",
    "onw1",
    "onw2",
    "flightClass",
    "sortDestination",
  ];
  dataSource = new MatTableDataSource<FlightModel>();

  ngOnInit(): void {
    //Getting the flight data
    this.flightService.getAllFlights().subscribe(
      (response) => {
        console.log(JSON.stringify(response));
        this.dataSource.data = response.data.flightTableList;
      },
      (error) => {
        //Some error occurred, showing error
        alert("Not able to fetch flight data");
        console.log(error);
      }
    );
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    this.dataSource.paginator = this.paginator;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  updateSortModels(key: String) {
    let updatedSortModels = Array<SortModel>();

    let keyFound = false;

    this.sortModels.forEach((item) => {
      if (item.key === key) {
        //Key found
        if (item.value > 0) {
          //Value was 1, making it -1
          item.value = -1;
          updatedSortModels.push(item);
        }

        //Value was -1, removing the item by not inserting
        keyFound = true;
      } else {
        //Another item, just adding as is
        updatedSortModels.push(item);
      }
    });

    if (!keyFound) {
      //Key was not at all found, inserting a new model
      updatedSortModels.push(new SortModel(key, 1));
    }

    this.sortModels = updatedSortModels;
    this.updateTable();
  }

  updateTable() {
    console.log(JSON.stringify(this.sortModels));

    this.flightService.getAllFlightsCondditionally(this.sortModels).subscribe(
      (response) => {
        console.log(JSON.stringify(response));
        this.dataSource.data = response.data.flightTableList;
      },
      (error) => {
        //Some error occurred, showing error
        alert("Not able to fetch flight data");
        console.log(error);
      }
    );
  }

  showIcon(header: String) {
    console.log("Show header icon called");

    this.sortModels.forEach((element) => {
      if (element.key == header) {
        console.log("returning value " + element.value);
        return element.value;
      }
    });
  }
}
