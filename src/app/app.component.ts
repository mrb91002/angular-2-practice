import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 (clicked)="doIt()">Root Componenet</h1>
    <app-lifecycle *ngIf="!delete"[bindable] ="boundValue">
      <p #boundContent>{{test}}</p>
    </app-lifecycle>
    <button (click)="delete = true">Click to Delete</button>
    <button (click)="test = 'Changed value'">Click to Change Content</button>
    <button (click)="boundValue = 2000">Change Binding</button>

    <app-databinding (clicked1)="doIt()" *ngIf="!delete"></app-databinding>
  `,
  styles: [`
    h1 {
      color: red;
    }
  `]
})
export class AppComponent {
  delete = false;
  title = 'cool!';
  test = 'starting value';
  boundValue = 1000;

  doIt() {
    console.log('Catching the event in the highest component');
  }
}
