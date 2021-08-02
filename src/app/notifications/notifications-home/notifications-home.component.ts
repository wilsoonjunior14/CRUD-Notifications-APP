import { Component, OnInit } from '@angular/core';
import { Notification } from '../notifications.model';
import { NotificationsService } from '../notifications.service';

@Component({
  selector: 'app-notifications-home',
  templateUrl: './notifications-home.component.html',
  styleUrls: ['./notifications-home.component.scss']
})
export class NotificationsHomeComponent {

  dataSource: Array<Notification> = [];

  filters: any = {
    page: 1,
    pageSize: 10,
    data: [],
    total: 0,
    totalPages: 0
  };

  notification: Notification = new Notification();

  constructor(private notificationService: NotificationsService){
    this.getAllNotifications();
  }

  private getAllNotifications() : void{
    this.notificationService.getAll(this.filters)
      .subscribe((data: Array<Notification>) => {
        this.dataSource = data["data"];
        this.filters.total = data["total"];
        this.filters.totalPages = 1 + Math.ceil(this.filters.page / this.filters.pageSize);
      });
  }

  public deleteNotification(notification: Notification) : void{
    this.notificationService.delete(notification)
      .subscribe((data: Notification) => {
        this.getAllNotifications();
      });
  }

  public setPage(value: number) : void {

    if (this.filters.page >= 1 && this.filters.page-1 < this.filters.totalPages){
      this.filters.page += value;
    }

    console.log(this.filters);

    this.getAllNotifications();
  }

}
