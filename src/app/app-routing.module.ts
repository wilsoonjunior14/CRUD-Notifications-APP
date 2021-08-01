import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotificationsCreateComponent } from './notifications/notifications-create/notifications-create.component';
import { NotificationsViewComponent } from './notifications/notifications-view/notifications-view.component';
import { NotificationsHomeComponent } from './notifications/notifications-home/notifications-home.component';
import { NotificationsUpdateComponent } from './notifications/notifications-update/notifications-update.component';

const routes: Routes = [
  {path: '', component: NotificationsHomeComponent},
  {path: 'create', component: NotificationsCreateComponent},
  {path: 'view/:id', component: NotificationsViewComponent},
  {path: 'edit/:id', component: NotificationsUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
