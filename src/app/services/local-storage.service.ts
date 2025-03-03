import { Injectable } from '@angular/core';
import { DataStorage } from '../interfaces/data-storage';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService implements DataStorage<string> {
  private storageKey = 'appData';

  saveData(data: any): void {
    console.debug('%cSaving from LocalStorageService:', 'background-color:blue;color:white;', data);
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }
}
