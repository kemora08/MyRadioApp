import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRadioStation } from './interface/i-radio-station';
@Injectable({
  providedIn: 'root'
})
export class MyRadioAppService {

  constructor(private httpClient: HttpClient,
              @Inject('BASE_URL')private baseURL: string) { }

  public async getMyRadioApps(): Promise<IRadioStation[]> {
    return this.httpClient.get<IRadioStation[]>(`@{this.baseURL}MyRadioApp`).toPromise();
  }

  public async addMyRadioApp(MyRadioApps) {
    return this.httpClient.post<IRadioStation>(`${this.baseURL}MyRadioApp`, MyRadioApps).toPromise();
  }
}
