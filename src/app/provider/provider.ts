import { Provider } from '@angular/core';
import { RestApiService } from '../services/rest-api.service';
import { LocalStorageService } from '../services/local-storage.service';
import { DataStorage } from '../interfaces/data-storage';

/**
 * set value here !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 */
const useApi = false; // Change this to false to use LocalStorage

export function storageFactory(
  apiService: RestApiService,
  localStorageService: LocalStorageService
): DataStorage<string> {
  return useApi ? apiService : localStorageService;
}

export const STORAGE_PROVIDER: Provider = {
  provide: 'DataStorage<string>',
  useFactory: storageFactory,
  deps: [RestApiService, LocalStorageService]
};
