import { Component, OnInit } from '@angular/core';
import { IRadioStation } from '../interface/i-radio-station';
import { MyRadioAppService} from '../my-radio-app.service';

@Component({
  selector: 'app-my-radio-app',
  templateUrl: './my-radio-app.component.html',
  styleUrls: ['./my-radio-app.component.css']
})
export class MyRadioAppComponent implements OnInit {
public newMyRadioApp: IRadioStation = {
  frequency: '',
  callSign: '',
  genre: '',
  rating: undefined,
  review: ''
};

  public MyRadioApps: IRadioStation[];
  constructor(private MyRadioAppservice: MyRadioAppService) { }

  async ngOnInit() {
    this.MyRadioApps = await this.MyRadioAppservice.getMyRadioApps();
  }

  async save() {
    await this.MyRadioAppservice.addMyRadioApp(this.newMyRadioApp);
    this.newMyRadioApp = { frequency: '', callSign: '', genre: '', rating: undefined, review: ''};
    this.MyRadioApps = await this.MyRadioAppservice.getMyRadioApps();
  }

}
