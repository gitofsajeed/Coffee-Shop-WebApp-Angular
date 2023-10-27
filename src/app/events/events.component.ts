import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; 
import dayGridPlugin from '@fullcalendar/daygrid';



@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {

  events: any[] = [
    { title: 'Music Band', date: '2023-10-29', time: '7:00 pm' },
    { title: 'ShortFilm Audio Launch', date: '2023-10-27', time : '5:00pm' },
    
  ];

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    events: this.events,
    
    
  };

  
  
  

}
