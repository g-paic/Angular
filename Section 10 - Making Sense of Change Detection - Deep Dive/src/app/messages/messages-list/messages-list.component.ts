import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  // imports: [AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessagesListComponent {
  // messages = input.required<string[]>();
  private messagesService = inject(MessagesService);
  public messages = this.messagesService.allMessages;
  
  // private cdRef = inject(ChangeDetectorRef);
  
  // private destroyRef = inject(DestroyRef);
  
  /*get messages() {
    return this.messagesService.allMessages;
  }*/

  // messages: string[] = [];

  // messages$ = this.messagesService.messages$;

  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
  
  /*ngOnInit(): void {
    const subscription = this.messagesService.messages$.subscribe((messages) => {
      this.messages = messages;
      this.cdRef.markForCheck();
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }*/
}
