import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'klassroom-layouts-default-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  username = '';

  constructor(private store: Store, private readonly keycloakService: KeycloakService) { }

  ngOnInit(): void {
    this.keycloakService.loadUserProfile().then(() => {
      this.username = this.keycloakService.getUsername();
    });
  }
}
