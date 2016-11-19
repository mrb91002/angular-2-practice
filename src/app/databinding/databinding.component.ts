import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
 stringIinterpolation = 'This is string interpolation!';
 numberInterpolation = 2;

 onTest() {
   return true;
 }

 @Output() clicked1 = new EventEmitter();

 onClicked(value: string) {
  alert(value);
  this.clicked1.emit()
 }
}
