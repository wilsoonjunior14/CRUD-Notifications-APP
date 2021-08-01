import { Component, OnInit } from '@angular/core';
import { Notification } from '../notifications.model';
import { NotificationsService } from '../notifications.service';

@Component({
  selector: 'app-notifications-create',
  templateUrl: './notifications-create.component.html',
  styleUrls: ['./notifications-create.component.scss']
})
export class NotificationsCreateComponent implements OnInit {

  notification: Notification = new Notification();

  constructor(private notificationService: NotificationsService) { }

  ngOnInit(): void {
  }

  public createNotification() : void{

    if (!this.notification.title ||
      !this.notification.description ||
      !this.notification.postDate){
        return;
      }

    this.notificationService.create(this.notification)
    .subscribe((data: Notification) => {
      this.notification = new Notification();
    });
  }

}
