import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaveFoodDailyComponent } from './pages/save-food-daily/save-food-daily.component';

const routes: Routes = [
  { path: '', component: SaveFoodDailyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyRoutingModule { }
