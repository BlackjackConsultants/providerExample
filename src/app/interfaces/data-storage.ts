
export interface DataStorage<T> {
    saveData(data: T): void;
  }