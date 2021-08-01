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

  notification: Notification = new Notification();

  constructor(private notificationService: NotificationsService){
    this.getAllNotifications();
  }

  private getAllNotifications() : void{
    this.notificationService.getAll()
      .subscribe((data: Array<Notification>) => {
        this.dataSource = data;
      });
  }

  public deleteNotification(notification: Notification) : void{
    this.notificationService.delete(notification)
      .subscribe((data: Notification) => {
        this.getAllNotifications();
      });
  }

}
