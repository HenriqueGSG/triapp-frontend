import { Component, Input, OnInit } from '@angular/core';
import { CaledarService } from 'src/app/home/services/caledar.service';

@Component({
  selector: 'app-unregister-day',
  templateUrl: './unregister-day.component.html',
  styleUrls: ['./unregister-day.component.css']
})
export class UnregisterDayComponent implements OnInit {

  @Input() funciId: string;
  @Input() month: string;
  @Input() day: string;

  constructor(private calendarService: CaledarService) { }


  ngOnInit(): void {
  }


  // register(funciId:string) {
  //   console.log('click')

  // }
  unregister(funciId: string, day: string, month: string) {
    console.log('Unregister Day called');
    this.calendarService.unregisterDay(funciId, day, month).subscribe((value) => console.log(value))

  }


}
