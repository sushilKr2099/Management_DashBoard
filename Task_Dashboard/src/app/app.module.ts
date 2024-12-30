import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { AddEditTaskComponent } from './add-edit-task/add-edit-task.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';

@NgModule({ declarations: [ AppComponent, AddEditTaskComponent, DeleteTaskComponent ], imports: [ BrowserModule, BrowserAnimationsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatTableModule, MatDialogModule, MatCardModule ], 
 providers: [], bootstrap: [AppComponent] }) export class AppModule { }