import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Rectangle } from './rect.model';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css'
})
export class RectComponent {
  // Todo: Implement custom two-way binding
  @Input()
  size!: Rectangle;
  
  @Output()
  sizeChange = new EventEmitter<Rectangle>();

  // size_2 = model<Rectangle>();
  
  onReset() {
    this.sizeChange.emit({
      width: "200",
      height: "100"
    });
    
    /*this.size_2.set({
      width: "200",
      height: "100"
    });*/
  }
}
