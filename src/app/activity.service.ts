import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from './types';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private _httpClient: HttpClient) {}

  getAllActivities(){
    // eslint-disable-next-line no-underscore-dangle
    return this._httpClient.get<Activity[]>(API);
  }

  getActivity(activityID: string): Observable<Activity>{
    // eslint-disable-next-line no-underscore-dangle
    return this._httpClient.get<Activity>(API + '/id/' + activityID);
  }
}

const API = 'https://orangevalleycaa.org/api/videos';
