import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.tableOneClicked();
  }

  tableOneClicked() {
    this.router.navigate(["flightTable"], { relativeTo: this.route });
  }

  tableTwoClicked() {
    this.router.navigate(["sortDestinationTable"], { relativeTo: this.route });
  }
}
