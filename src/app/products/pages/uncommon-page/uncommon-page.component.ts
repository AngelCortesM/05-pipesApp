import { Component } from '@angular/core';
import { rejects } from 'node:assert';
import { resolve } from 'node:path';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
  //i18n Select
  public name: string = 'Fernando';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };
  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  //i18n Plural
  public clients: string[] = [
    'Maria',
    'Pedro',
    'Fernando',
    'Hernando',
    'Eduardo',
    'Melissa',
    'Natalia',
  ];
  public clientMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos personas esperando',
    other: 'tenemos # clientes esperando',
  };
  deleteClient(): void {
    this.clients.shift();
  }

  public person = {
    name: 'fernand',
    age: 36,
    address: 'Ottawa, Canada',
  };

  public miObservableTimer: Observable<number> = interval(2000).pipe(
    tap((value) => console.log('tap:', value)),
  );
  public promiseValue: Promise<string> = new Promise((resolve, rejects) => {
    setTimeout(() => {
      resolve('Tenemos data en la Promesa.');
      console.log('Tenemos la promesa');
      this.person.name = 'otro nombre'
    }, 3500);
  });
}
