import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-home',
  templateUrl: './contact-home.component.html',
  styleUrls: ['./contact-home.component.css']
})
export class ContactHomeComponent implements OnInit {
  users: any;
  idUser: any;
  foundUser: any;
  deleteUser: any;

  constructor(private contactService: ContactService, private router: Router) {}

  ngOnInit(): void {
    if (this.contactService.passStatus()) {
      this.users = this.contactService.storeData();
    } else {
      this.fetchUser();
    }
  }

  fetchUser() {
    this.contactService.getPost().subscribe((data: any) => {
      this.users = data;

      this.copyUserData();
    });
  }

  postUser(newUser: any, updateStatus: boolean) {
    //Post and Update
    if (updateStatus) {
      if (this.idUser > 10) {
        const index = this.users.findIndex(
          (user: any) => user.id === this.idUser
        );
        if (index !== -1) {
          this.users[index] = { ...newUser, id: this.idUser };
        }
      } else {
        this.contactService
          .updatePost(this.idUser, newUser)
          .subscribe((updatedUser: any | null) => {
            if (updatedUser) {
              const index = this.users.findIndex(
                (user: any) => user.id === updatedUser.id
              );
              if (index !== -1) {
                this.users[index] = updatedUser;
              }
            }
          });
      }
    } else {
      this.contactService.createPost(newUser).subscribe((data: any) => {
        const lastId = this.users[this.users.length - 1]?.id || 0;
        const newData = { ...data, id: lastId + 1 };
        this.users.push(newData);
        this.copyUserData();
      });
    }
  }

  copyUserData() {
    this.contactService.copyUser(this.users);
  }
  getViewUserId(id: any) {
    this.idUser = id;

    this.router.navigate(['home/view', this.idUser]);
  }

  getUpdateUserId(id: number) {
    //find User Id
    this.idUser = id;
    const found = this.users.find((user: any) => user.id === id);
    this.foundUser = found;
  }

  getDeleteUserId(id: number) {
    //delete user
    this.idUser = id;
    const found = this.users.find((user: any) => user.id === id);
    this.deleteUser = found;
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this user?'
    );
    if (confirmDelete) {
      this.deleteUserData();
    }
  }

  deleteUserData() {
    this.contactService.deletePost(this.idUser).subscribe(() => {
      const index = this.users.findIndex(
        (user: any) => user.id === this.idUser
      );
      if (index !== -1) {
        this.users.splice(index, 1);
      }
    });
  }
}
