import { Component, OnInit } from "@angular/core";
import { BoardService } from "../services/board-service.service";

@Component({
  selector: "app-boardcards",
  templateUrl: "./boardcards.component.html",
  styleUrls: ["./boardcards.component.css"]
})
export class BoardcardsComponent implements OnInit {
  boardData: any;
  constructor(private boardSrc: BoardService) {}

  ngOnInit() {
    this.getBoardData();
  }

  getBoardData() {
    this.boardSrc.getBoardData().subscribe(data => {
      this.boardData = data.smapleData;
      // console.log(this.boardData);
    });
  }

  addCard(event) {
    let newCard = this.boardData.find(data => data.cardTitle == event);
    newCard.cards.push("");
  }
}
