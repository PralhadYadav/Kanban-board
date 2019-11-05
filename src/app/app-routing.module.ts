import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BoardcardsComponent } from "./boardcards/boardcards.component";

const routes: Routes = [
  {
    path: "",
    component: BoardcardsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
