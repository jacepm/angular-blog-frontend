import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-main-footer",
  templateUrl: "./main-footer.component.html",
  styleUrls: ["./main-footer.component.scss"],
})
export class MainFooterComponent implements OnInit {
  currentDate = new Date();

  constructor() {}

  ngOnInit() {}
}
