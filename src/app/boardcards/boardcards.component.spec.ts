import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { BoardcardsComponent } from "./boardcards.component";
import { By } from "@angular/platform-browser";
import { BoardService } from "../services/board-service.service";

describe("BoardcardsComponent", () => {
  let component: BoardcardsComponent;
  let fixture: ComponentFixture<BoardcardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BoardcardsComponent],
      providers: [BoardService],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have card title", () => {
    let header = fixture.debugElement.nativeElement.querySelector("#h4");
    console.log(header);
  });
});
