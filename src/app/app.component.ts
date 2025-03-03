import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataStorage } from './interfaces/data-storage';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'providerExample';

    constructor(@Inject('DataStorage<string>') private dataStorage: DataStorage<string>) {} 

  onSave() {
    this.dataStorage.saveData('testing');
  }
}
