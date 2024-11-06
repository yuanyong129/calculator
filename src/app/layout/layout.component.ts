import { Component, ViewChild } from "@angular/core";
import { MatDrawerContainer, MatDrawer, MatDrawerContent } from "@angular/material/sidenav";
import { MatToolbar } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterOutlet, Router } from "@angular/router";

@Component({
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  imports: [
    MatDrawerContainer,
    MatDrawer,
    MatDrawerContent,
    RouterOutlet,
    MatToolbar,
    MatButtonModule,
    MatIconModule,
    MatListModule,
  ],
  providers: []
})
export class LayoutComponent {
  constructor(
    private router: Router,
  ) {}

  @ViewChild('drawer')
  drawer!: MatDrawer;

  title = '标准';

  url() {
    return this.router.url;
  }

  goto(url: string) {
    this.router.navigateByUrl(url);
    this.drawer.toggle();
  }
}
