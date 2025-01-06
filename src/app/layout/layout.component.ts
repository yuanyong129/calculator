import { Component, ViewChild } from "@angular/core";
import { MatDrawerContainer, MatDrawer, MatDrawerContent } from "@angular/material/sidenav";
import { MatToolbar } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterOutlet, Router } from "@angular/router";

@Component({
  standalone: true,
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
  providers: [],
  template: `
    <mat-drawer-container>
      <mat-drawer #drawer mode="over">
        <div style="display: flex; flex-direction: column; height: 100%; padding: 12px; box-sizing: border-box;">
          <div style="flex: 1; overflow: auto;">
            <button mat-icon-button color="accent" (click)="drawer.toggle()">
              <mat-icon>menu</mat-icon>
            </button>
            <mat-nav-list>
              <div mat-subheader>计算器</div>
              <mat-list-item [activated]="url() === '/standard'" (click)="goto('/standard')">
                标准
              </mat-list-item>
              <div mat-subheader>转换器</div>
              <mat-list-item [activated]="url() === '/length'" (click)="goto('/length')">
                长度
              </mat-list-item>
            </mat-nav-list>
          </div>
          <mat-divider></mat-divider>
          <div>
            <mat-nav-list>
              <mat-list-item mat-list-item [activated]="url() === '/settings'" (click)="goto('/settings')">
                设置
              </mat-list-item>
            </mat-nav-list>
          </div>
        </div>
      </mat-drawer>
      <mat-drawer-content>
        <mat-toolbar>
          <button mat-icon-button color="accent" (click)="drawer.toggle()">
            <mat-icon>menu</mat-icon>
          </button>
          <div style="margin-left: 16px;"> {{ title }} </div>
        </mat-toolbar>
        <router-outlet />
      </mat-drawer-content>
    </mat-drawer-container>
  `,
  styles: `
    .mat-drawer-container {
      width: 100vw;
      height: 100vh;
    }

    .mat-divider {
      margin: 12px 0;
    }
  `,
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
