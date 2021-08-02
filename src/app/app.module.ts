import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { NotificationsCreateComponent } from './notifications/notifications-create/notifications-create.component';
import { NotificationsViewComponent } from './notifications/notifications-view/notifications-view.component';
import { NotificationsHomeComponent } from './notifications/notifications-home/notifications-home.component';
import { NotificationsUpdateComponent } from './notifications/notifications-update/notifications-update.component';

@NgModule({
  declarations: [
    AppComponent,
    NotificationsCreateComponent,
    NotificationsViewComponent,
    NotificationsHomeComponent,
    NotificationsUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
