import { Component } from '@angular/core'; import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.css']
})
export class DeleteTaskComponent {
  constructor(private dialogRef: MatDialogRef<DeleteTaskComponent>) { } onConfirm(): void { this.dialogRef.close(true); } onCancel(): void { this.dialogRef.close(false); } }