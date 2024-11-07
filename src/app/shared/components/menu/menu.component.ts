import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  public menuItems: MenuItem[] = [];

  constructor(private router: Router) {}
  ngOnInit() {
    this.menuItems = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y fecha',
            icon: 'pi pi-align-left',
            command: () => {
              this.router.navigate(['/']);
            },
          },
          { label: 'Números', icon: 'pi pi-dollar',  command: () => {
            this.router.navigate(['/numbers']);
          },},
          { label: 'No comunes', icon: 'pi pi-globe', command: () => {
            this.router.navigate(['/uncommon']);
          }, },
        ],
      },
      {
        label: 'Pipes Personalizados',
        icon: 'pi pi-cog',
        items: [{ label: 'Otro Elemento', icon: 'pi pi-cog' }],
      },
    ];
  }
}
