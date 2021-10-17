import {NgModule} from '@angular/core';
import {DropOnlyShipsComponent} from "../drop-only-ships/drop-only-ships.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', component: DropOnlyShipsComponent},
  {path: 'drop-only-ships', component: DropOnlyShipsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
