import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
// import * as sampleData from "../../assets/Data.json";

@Injectable({
  providedIn: "root"
})
export class BoardService {
  constructor(private http: HttpClient) {}

  public getBoardData(): Observable<any> {
    return this.http.get("../../assets/Data.json");
  }
}
