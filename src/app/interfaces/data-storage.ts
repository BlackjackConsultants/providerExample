import { InjectionToken } from "@angular/core";

export interface DataStorage<T> {
    saveData(data: T): void;
  }