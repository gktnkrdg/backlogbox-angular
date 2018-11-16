import { Component, ViewEncapsulation } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private items: MenuItem[];

  ngOnInit() {
    this.items = [
        {label: 'Movie', icon: 'pi pi-fw pi-plus' , url:"#/Movies"},
        {label: 'Todo', icon: 'pi pi-fw pi-download',url:"#/Todo"},
  
    ];
}
}
