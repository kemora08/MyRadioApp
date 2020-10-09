import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyRadioApp } from '../interfaces/MyRadioApp';
@Injectable({
  providedIn: 'root'
})
export class MyRadioAppService {

  constructor(private httpClient: HttpClient,
              @Inject('BASE_URL')private baseURL: string) { }

  public async getMyRadioApps(): Promise<MyRadioApp[]> {
    return this.httpClient.get<MyRadioApp[]>(`@{this.baseURL}MyRadioApp`).toPromise();
  }

  public async addMyRadioApp(MyRadioApps) {
    return this.httpClient.post<MyRadioApp>(`${this.baseURL}MyRadioApp`, MyRadioApp).toPromise();
  }
}
