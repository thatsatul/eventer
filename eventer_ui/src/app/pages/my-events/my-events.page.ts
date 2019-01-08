import { HTTP } from '@ionic-native/http/ngx';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'my-events.page.html',
  styleUrls: ['my-events.page.scss'],
})
export class MyEventsPage {
  constructor(private http: HTTP, private router: Router) {
    this.http.get('http://192.168.0.101:3999/restapi/events', {}, {})
    .then(data => {

      console.log(data.status);
      console.log(data.data); // data received by server
      console.log(data.headers);

    })
    .catch(error => {

      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);

    });
  }
  getEvents(e) {
    console.log(e.target.value);
  }

  goToEventPage(eventId) {
    this.router.navigate(['event/'+eventId]);
  }
}
