import {
  AfterContentInit,
  afterNextRender,
  afterRender,
  Component,
  ContentChild,
  ElementRef,
  inject,
  Input,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: "control",
    '(click)': 'onClick()'
  }
})
export class ControlComponent implements OnInit, AfterContentInit {
  // @HostBinding("class") className = "control";
  
  @Input()
  label!: string;
  
  @ContentChild("input")
  private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;

  // private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>("input");
  
  private el = inject(ElementRef);

  constructor() {
    afterRender(() => {
      console.log("afterRender");
    });
    
    afterNextRender(() => {
      console.log("afterNextRender");
    });
  }

  ngOnInit(): void {
    console.log("ON INIT - ControlComponent");
    console.log(this.control);
  }

  ngAfterContentInit(): void {
    console.log("AFTER VIEW INIT - ControlComponent");
    console.log(this.control);
  }

  // @HostListener("click")
  onClick() {
    console.log("Clicked!");
    console.log(this.el);
    console.log(this.control);
    // console.log(this.control());
  }
}
