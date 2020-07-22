import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { CountryStatus, Country } from './models';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedCountry: string;
  countryCasesChartOptions: any;
  cases: CountryStatus[] = [];

  countries$ = this.appService.getCountries$.pipe(tap(countries => {
    this.selectedCountry = countries[0].Slug;
    this.setOptions();
  }));


  constructor(private appService: AppService) {

  }


  onChangeCountry() {
    this.appService.getCasesByCountry(this.selectedCountry).subscribe(cases => {
      this.cases = cases;
      this.setOptions();
    });
  }

  setOptions() {
    this.countryCasesChartOptions = {

      title: {
        text: 'COVID-19 STATUS CHART',
      },
      legend: {
        data: ['Confirmed', 'Recovered', 'Deaths']
      },
      tooltip: {

      },
      xAxis: {
        data: this.cases.map(c => new Date(c.Date).toLocaleDateString()),
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        name: 'Confirmed',
        type: 'line',
        data: this.cases.map(c => c.Confirmed),
      },
      {
        name: 'Recovered',
        type: 'line',
        data: this.cases.map(c => c.Recovered),
      },
      {
        name: 'Deaths',
        type: 'line',
        data: this.cases.map(c => c.Deaths),
      },

      ]
    };

  }

}
