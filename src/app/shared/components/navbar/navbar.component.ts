import { Component, HostListener, inject } from '@angular/core';
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
  ifDark!: boolean;
  userScroll: boolean = false;
  changeTheme() {
    if (this.theme() == 'light') {
      this.theme.update((oldValue) => {
        this.ifDark = true;
        return (oldValue = 'dark');
      });
    } else {
      this.theme.update((oldValue) => {
        this.ifDark = false;
        return (oldValue = 'light');
      });
    }
    // console.log(this.theme());

    localStorage.setItem('theme', this.theme());
  }

  @HostListener('window:scroll')
  scrolled() {
    this.userScroll = window.scrollY > 5;
  }
}
