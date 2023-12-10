import { Component, Input, OnInit } from '@angular/core';
import { CaledarService } from 'src/app/home/services/caledar.service';

@Component({
  selector: 'app-register-day',
  templateUrl: './register-day.component.html',
  styleUrls: ['./register-day.component.css']
})
export class RegisterDayComponent implements OnInit {

  @Input() funciId: string;
  @Input() month: string;
  @Input() day: string;

  constructor(private calendarService: CaledarService) { }


  ngOnInit(): void {

  }


  // register(funciId:string) {
  //   console.log('click')

  // }
  register(funciId: string, day: string, month: string) {
    this.calendarService.registerDay(funciId, day, month).subscribe()

  }




}
