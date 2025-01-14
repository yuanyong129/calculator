import { Component, OnInit, ViewChild } from "@angular/core";
import { MatListModule, MatSelectionList } from "@angular/material/list";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";

@Component({
  imports: [MatListModule, MatExpansionModule, MatIconModule],
  standalone: true,
  template: `
    <mat-list>
      <mat-list-item>
        <div matListItemTitle>外观</div>
      </mat-list-item>
      <mat-accordion>
        <mat-expansion-panel>
          <mat-expansion-panel-header>
            <mat-list-item>
              <mat-icon matListItemIcon>palette-outline</mat-icon>
              <div matListItemTitle>
                应用程序主题
              </div>
              <div matListItemLine>选择要显示的应用主题</div>
            </mat-list-item>
          </mat-expansion-panel-header>
          <mat-selection-list #theme [multiple]="false">
            <mat-list-option>浅色</mat-list-option>
            <mat-list-option>深色</mat-list-option>
            <mat-list-option>跟随系统</mat-list-option>
          </mat-selection-list>
        </mat-expansion-panel>
      </mat-accordion>
      <mat-list-item>关于</mat-list-item>
      <mat-accordion>
        <mat-expansion-panel>
          <mat-expansion-panel-header>
            <mat-list-item>
              <mat-icon matListItemIcon>palette-outline</mat-icon>
              <div matListItemTitle>
                应用程序主题
              </div>
              <div matListItemLine>选择要显示的应用主题</div>
            </mat-list-item>
          </mat-expansion-panel-header>
          <mat-selection-list #theme [multiple]="false">
            <mat-list-option>浅色</mat-list-option>
            <mat-list-option>深色</mat-list-option>
            <mat-list-option>跟随系统</mat-list-option>
          </mat-selection-list>
        </mat-expansion-panel>
      </mat-accordion>
    </mat-list>
  `,
  styles: `
    mat-list {
      padding: 20px 30px;
      box-sizing: border-box;
    }
    mat-expansion-panel-header {
      height: 64px;
    }
  `
})
export class SettingsComponent implements OnInit {

  theme: string = '';
  @ViewChild('theme') themeList!: MatSelectionList;

  ngOnInit(): void {
      this.theme = 'light';
  }
}
