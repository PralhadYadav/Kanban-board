import { Component, OnInit, Input } from "@angular/core";
import { BoardService } from "../services/board-service.service";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent implements OnInit {
  @Input() cardData: any;
  @Input() color: any;
  constructor(private boardSrc: BoardService) {}

  ngOnInit() {
    console.log(this.cardData);
  }
}
