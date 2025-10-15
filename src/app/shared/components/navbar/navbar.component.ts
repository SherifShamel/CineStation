import { Component, inject, input, InputSignal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  private readonly _ThemeService = inject(ThemeService);
  theme = this._ThemeService.theme;
  changeTheme() {
    if (this.theme() == 'light') {
      this.theme.update((oldValue) => {
        return (oldValue = 'dark');
      });
    } else {
      this.theme.update((oldValue) => {
        return (oldValue = 'light');
      });
    }
    console.log(this.theme());
  }
}
