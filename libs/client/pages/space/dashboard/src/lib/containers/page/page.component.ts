import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'klassroom-space-dashboard-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent implements OnInit {

  username = '';

  constructor(private readonly keycloakService: KeycloakService) { }

  ngOnInit(): void {
    this.keycloakService.loadUserProfile().then(() => {
      this.username = this.keycloakService.getUsername();
    });
  }
}
