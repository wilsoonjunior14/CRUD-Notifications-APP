import { Component, OnInit } from '@angular/core';
import { Notification } from '../notifications.model';
import { NotificationsService } from '../notifications.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notifications-update',
  templateUrl: './notifications-update.component.html',
  styleUrls: ['./notifications-update.component.scss']
})
export class NotificationsUpdateComponent implements OnInit {

  notification: Notification = new Notification();

  notificationId: number = 0;

  constructor(private router: ActivatedRoute,private notificationsService: NotificationsService) {
    this.router.params.subscribe((params) => {
      this.notificationId = params['id'];

      this.getNotificationById(this.notificationId);
    });
  }

  ngOnInit(): void {
  }

  private getNotificationById(id: number) : void{
    this.notificationsService.getById(id)
      .subscribe((data: Notification) => {
        this.notification = data;
        console.log(this.notification);

        this.notification.viewDate = "";
      });
  }

  public updateNotification() : void{
    if (!this.notification.title ||
      !this.notification.description ||
      !this.notification.postDate){
        return;
      }

    this.notificationsService.update(this.notification)
    .subscribe((data: Notification) => {
      this.getNotificationById(this.notificationId);
    });
  }

}
