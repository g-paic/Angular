import { AfterViewInit, Component, ElementRef, OnInit, output, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  @ViewChild("form")
  private form?: ElementRef<HTMLFormElement>;
  
  // @Output() add = new EventEmitter<{ title: string; text: string; }>();
  
  enteredTitle = "";
  enteredText = "";
  add = output<{ title: string; text: string; }>();

  // private form = viewChild<ElementRef<HTMLFormElement>>("form");

  ngOnInit(): void {
    console.log("ON INIT - NewTicketComponent");
    console.log(this.form?.nativeElement);
  }

  ngAfterViewInit(): void {
    console.log("AFTER VIEW INIT - NewTicketComponent");
    console.log(this.form?.nativeElement);
  }
  
  onSubmit(title: string, ticketText: string) {
    this.add.emit({ title: title, text: ticketText });
    this.form?.nativeElement.reset();
    // this.form()?.nativeElement.reset();
  }
}
