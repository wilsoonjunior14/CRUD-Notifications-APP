import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notification } from './notifications.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  private ENDPOINT = "http://localhost:8081/notifications";

  constructor(private httpClient: HttpClient) { }

  public getAll(data: any) : Observable<Object> {
    return this.httpClient
      .post(this.ENDPOINT + "/search", data);
  }

  public getById(id: number) : Observable<Object> {
    return this.httpClient
      .get(this.ENDPOINT + "/" + id);
  }

  public create(notification: Notification) : Observable<Object> {
    return this.httpClient
      .post(this.ENDPOINT, notification);
  }

  public update(notification: Notification) : Observable<Object> {
    return this.httpClient
      .put(this.ENDPOINT, notification);
  }

  public delete(notification: Notification) : Observable<Object> {
    return this.httpClient
      .delete(this.ENDPOINT + "/" + notification.id);
  }
}
