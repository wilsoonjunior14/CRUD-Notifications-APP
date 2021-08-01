import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Notification } from '../notifications.model';
import { NotificationsService } from '../notifications.service';

@Component({
  selector: 'app-notifications-view',
  templateUrl: './notifications-view.component.html',
  styleUrls: ['./notifications-view.component.scss']
})
export class NotificationsViewComponent implements OnInit {

  notificationId: number = 0;

  notification: Notification = new Notification();

  constructor(private router: ActivatedRoute,
    private notificationsService: NotificationsService) {
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
      });
  }

}
