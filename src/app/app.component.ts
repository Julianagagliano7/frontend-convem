import { Component } from '@angular/core';
import { Apiresponse } from './apiresponse';
import { ConvemService } from './convem.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Você quer se juntar ao time da Convem?';
  answer!: string;
  message!: string;
  response!: Apiresponse;

  constructor(private convemService: ConvemService) {}

  confirm() : any {
    this.convemService.enviarDadosParaAPI(this.answer).subscribe((result) => {
      this.response = result;
      this.message = this.response.message;
    });
  }
}
