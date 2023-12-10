import {
  ChangeDetectorRef,
  Component,
  NgZone,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Observable, Subscription, switchMap, tap } from 'rxjs';
import { CaledarService } from 'src/app/home/services/caledar.service';
import { Calendar } from 'src/app/interfaces/calendar';
import { currentMonth } from 'src/app/utils/utils';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  private eventSubscription: Subscription;

  calendarData: Calendar;
  valorDoCampo: any;
  meses = [
    // { nome: 'Janeiro', valor: '01' },
    // { nome: 'Fevereiro', valor: '02' },
    // { nome: 'Março', valor: '03' },
    // { nome: 'Abril', valor: '04' },
    // { nome: 'Maio', valor: '05' },
    // { nome: 'Junho', valor: '06' },
    // { nome: 'Julho', valor: '07' },
    // { nome: 'Agosto', valor: '08' },
    // { nome: 'Setembro', valor: '09' },
    { nome: 'Outubro', valor: '10' },
    { nome: 'Novembro', valor: '11' },
    { nome: 'Dezembro', valor: '12' },
  ];
  constructor(
    private calendarService: CaledarService,
    private cdr: ChangeDetectorRef,
    private zone: NgZone
  ) { }

  ngOnInit(): void {

    this.calendarService.getMonth(currentMonth()).subscribe((value) => this.calendarData = value)


  }

  getWeekdayLabels(startingDay: string): string[] {
    const weekdays = [
      'Domingo',
      'Segunda',
      'Terça',
      'Quarta',
      'Quinta',
      'Sexta',
      'Sábado',
    ];
    const startIndex = weekdays.indexOf(startingDay);

    // Rotate the array to start with the correct day
    const rotatedWeekdays = [
      ...weekdays.slice(startIndex),
      ...weekdays.slice(0, startIndex),
    ];

    return rotatedWeekdays.map((weekday) => weekday.slice(0, 3));
  }


  submit() {
    // this.calendarService
    //   .getMonth(this.valorDoCampo)
    //   .subscribe(
    //     (response) => (
    //       (this.calendarData = response), console.log(this.calendarData)
    //     )
    //   );
  }

  refetchData(): void {
    // console.log('refetchData called');
    // this.calendarService.getMonth(currentMonth()).subscribe(
    //   (response) => {
    //     this.calendarData = { ...response };
    //   }
    // );
  }
}
