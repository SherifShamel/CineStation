import { Component, Inject, inject, PLATFORM_ID, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { FlowbiteService } from './core/services/flowbite.service';
import { ThemeService } from './core/services/theme.service';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('cine-station');
  private readonly _ThemeService = inject(ThemeService);
  constructor(
    private flowbiteService: FlowbiteService,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}

  theme = this._ThemeService.theme;
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.theme.update((theme) => {
        return (theme = localStorage.getItem('theme')!);
      });

      this.flowbiteService.loadFlowbite((flowbite) => {
        initFlowbite();
      });
    }
  }
}
