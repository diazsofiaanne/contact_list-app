import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  @Output() newUserEvent = new EventEmitter<{
    user: any;
    updateMode: boolean;
  }>();

  @Input() userData: any;

  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnChanges() {
    if (this.userData) {
      this.updateForm();
    }
  }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
    });
  }

  get formControls() {
    return this.userForm.controls;
  }

  onSubmit() {
    const newUser: any = {
      id: 0,
      name: this.userForm.value.name,
      email: this.userForm.value.email,
      phone: this.userForm.value.phone,
    };

    if (this.userData) {
      const updateMode: boolean = true;
      this.newUserEvent.emit({ user: newUser, updateMode });
    } else {
      this.newUserEvent.emit({ user: newUser, updateMode: false });
    }
    this.userForm.reset();
    this.userData = null;
  }
  updateForm() {
    this.userForm.patchValue({
      name: this.userData.name,
      email: this.userData.email,
      phone: this.userData.phone
    });
  }
}
