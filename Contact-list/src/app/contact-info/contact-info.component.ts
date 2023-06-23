import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {
  users: any;
  foundData: any;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private routers: Router
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.users = this.contactService.storeData();
    this.getUserDetails();
  }

  getUserDetails(): void {
    const userId = Number(this.route.snapshot.paramMap.get('id'));
    const foundUser = this.users.find((user: any) => user.id === userId);
    this.foundData = foundUser;
  }

  goBack(): void {
    this.routers.navigate(['home'], { replaceUrl: true });
    const status: boolean = true;
    this.contactService.fetchStatus(status);
  }
}
