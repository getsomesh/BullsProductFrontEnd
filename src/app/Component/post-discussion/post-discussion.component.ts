import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-post-discussion',
  templateUrl: './post-discussion.component.html',
  styleUrls: ['./post-discussion.component.css']
})
export class PostDiscussionComponent {
  DiscussionHeader: string = '';
  DiscussionPoints: string = '';
  SelectedTopic: string = '';
  topic = [
    'Design', 'Ask me anything', 'Artificial Intelligence', 'Development', 'Marketing'
  ];

  formgroup: FormGroup;
  constructor(private formBuilder: FormBuilder,public dialog: MatDialog, public dialogRef: MatDialogRef<PostDiscussionComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any) {
    this.formgroup = this.formBuilder.group({
      DiscussionHeader: ['', Validators.required],
      DiscussionPoints: [''],
      SelectedTopic:  [''],
    })
  }


  SubmitClick() { }

  close(value: any) {
    this.dialogRef.close(value);
  }
}
