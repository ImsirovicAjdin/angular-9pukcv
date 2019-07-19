import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: [ './user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  //userSettings : UserSettings = {
    originalUserSettings : UserSettings = {
    name: 'Linus',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: 'Here are some notes...',
    password: 'abc',
    testing: '2019-07-05'
  }

  userSettings : UserSettings = { ...this.originalUserSettings};

  constructor() { }

  ngOnInit() { }

}