import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
  @Input() userData: any;
  @Output() userViewId: EventEmitter<any> = new EventEmitter<any>();
  @Output() userUpdateId: EventEmitter<any> = new EventEmitter<any>();
  @Output() userDeleteId: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  viewUserDetail(id: number) {
    this.userViewId.emit(id);
  }
  updateUserDetail(id: number) {
    this.userUpdateId.emit(id);
  }

  deleteUserDetail(id: number) {
    this.userDeleteId.emit(id);
  }
}
