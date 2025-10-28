import {
  Component,
  HostListener,
  inject,
  OnInit,
  signal,
  Signal,
  ViewChild,
  WritableSignal,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../../core/services/theme.service';
import { FlowbiteService } from '../../../core/services/flowbite.service';
import { initFlowbite } from 'flowbite';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, SearchComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  private readonly _ThemeService = inject(ThemeService);
  theme = this._ThemeService.theme;
  ifDark!: boolean;
  userScroll: boolean = false;
  search: WritableSignal<boolean> = signal(false);

  constructor(private flowbiteService: FlowbiteService) {}

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
  }

  searchOpened() {
    this.search.set(!this.search());
  }

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

    localStorage.setItem('theme', this.theme());
  }

  @HostListener('window:scroll')
  scrolled() {
    this.userScroll = window.scrollY > 5;
  }
}
