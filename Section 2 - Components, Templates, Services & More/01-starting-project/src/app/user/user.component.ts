import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { User } from './model/user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true })
  user!: User;
  
  @Input()
  selected!: boolean;
  
  @Output()
  select = new EventEmitter();
  
  // select = output<string>();
  
  /*avatar = input.required<string>();
  name = input<string>();
  
  imagePath = computed(() => {
    return 'assets/users/' + this.avatar();
  });*/
  
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
