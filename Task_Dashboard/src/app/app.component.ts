import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddEditTaskComponent } from './add-edit-task/add-edit-task.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';

interface Task {
  title: string;
  description?: string;
  priority: 'Low' | 'Medium' | 'High';
  status: 'Pending' | 'In Progress' | 'Completed';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Task_Dashboard';
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  statusOptions = ['Pending', 'In Progress', 'Completed'];
  selectedStatus: string = '';
  taskForm: FormGroup;
  isAddEditDialogOpen = false;
  isDeleteDialogOpen = false;
  isEditMode = false;
  taskIndex: number | null = null;
  displayedColumns: string[] = ['title', 'description', 'priority', 'status', 'actions'];

  constructor(private fb: FormBuilder, private dialog: MatDialog) {
    this.taskForm = this.fb.group({
      title: [''],
      description: [''],
      priority: ['Low'],
      status: ['Pending']
    });
  }

  ngOnInit(): void {
    this.filterTasks();
  }

  filterTasks() {
    this.filteredTasks = this.tasks.filter(task => !this.selectedStatus || task.status === this.selectedStatus);
  }

  openAddEditTaskDialog(task?: Task, index?: number): void {
    this.isEditMode = !!task;
    this.taskIndex = index !== undefined ? index : null;

    const dialogRef = this.dialog.open(AddEditTaskComponent, {
      width: '400px',
      data: { task: task || { title: '', description: '', priority: 'Low', status: 'Pending' } }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (this.isEditMode && this.taskIndex !== null) {
          this.tasks[this.taskIndex] = result;
        } else {
          this.tasks.push(result);
        }
        this.filterTasks();
      }
    });
  }

  openDeleteConfirmationDialog(index: number): void {
    const dialogRef = this.dialog.open(DeleteTaskComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.tasks.splice(index, 1);
        this.filterTasks();
      }
    });
  }
}
