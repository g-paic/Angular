import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from './model/new-task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input()
  userId!: string;
  
  @Output()
  close = new EventEmitter<void>();
  
  enteredTitle = "";
  enteredSummary = "";
  enteredDate = "";

  private tasksService = inject(TasksService); // alternative to the constructor-based approach
  
  onCancel() {
    this.close.emit();
  }
  
  onSubmit() {
    let taskData: NewTaskData = {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    }
    
    this.tasksService.addTask(taskData, this.userId);
    this.close.emit();
  }
}
