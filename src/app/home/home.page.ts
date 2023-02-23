import { Component, OnInit } from '@angular/core';
import { BatteryStatus } from '@ionic-native/battery-status/ngx/index'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  photoStatus= '';
  batteryPercentage = '';

  constructor(private batteryStatus: BatteryStatus) {}

  ngOnInit(){
    this.batteryStatus.onChange().subscribe((res) => {
      this.photoStatus = (res.isPlugged === true)?'Charging' : 'On Battery';
      this.batteryPercentage = res.level+ '%';
    })
  }

}
