import { AfterViewInit, Component, effect, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, AfterViewInit, OnDestroy {
  currentStatus = 'online';
  currentStatus_2 = signal<string>('online');
  private interval?: ReturnType<typeof setInterval>;
  // private destroyRef = inject(DestroyRef);

  constructor() {
    console.log(this.currentStatus_2());

    effect(() => {
      console.log(this.currentStatus_2());
    });
  }
  
  ngOnInit() {
    console.log("ON INIT");
    this.interval = setInterval(() => {
      const rnd = Math.random(); // 0 - 1
      
      if(rnd < 0.4) {
        this.currentStatus = "online";
        this.currentStatus_2.set("online");
      } else if(rnd > 0.6) {
        this.currentStatus = "offline";
        this.currentStatus_2.set("offline");
      } else {
        this.currentStatus = "unknown";
        this.currentStatus_2.set("unknown");
      }
    }, 5000);

    // this.destroyRef.onDestroy(() => { clearTimeout(this.interval); });
  }
  
  ngAfterViewInit(): void {
    console.log("AFTER VIEW INIT");
  }
  
  ngOnDestroy(): void {
    clearTimeout(this.interval);
  }
}
