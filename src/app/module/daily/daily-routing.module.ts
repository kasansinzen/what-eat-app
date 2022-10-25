import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDailyComponent } from './pages/home-daily/home-daily.component';
import { SaveFoodDailyComponent } from './pages/save-food-daily/save-food-daily.component';

const routes: Routes = [
  { path: '', component: HomeDailyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyRoutingModule { }
