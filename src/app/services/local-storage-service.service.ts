import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageServiceService {
  constructor() {}

  addToLocalStorage(key: string, value: string) {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(key, value);
    } else {
      console.error('Tarayıcı localStorage desteklemiyor.');
    }
  }

  getFromLocalStorage(key: string):string {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem(key);
    } else {
      console.error('Tarayıcı localStorage desteklemiyor.');
      return null;
    }
  }

  clearLocaleStorage() {
    if (typeof localStorage !== 'undefined') {
      localStorage.clear();
    } else {
      console.error('Tarayıcı localStorage desteklemiyor.');
    }
  }
}
