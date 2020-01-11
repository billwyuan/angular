import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-pray',
  templateUrl: './pray.component.html',
  styleUrls: ['./pray.component.scss']
})
export class PrayComponent implements OnInit {
    huangdi: string;
    shizu:string;
    benzhiId:string
    yeye:string;
    fubei:string;
    pinbei:string;
    xiaobei:string;
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.huangdi=this.route.snapshot.paramMap.get('benzhiId');
    this.shizu=this.route.snapshot.paramMap.get('shizu');
    this.benzhiId=this.route.snapshot.paramMap.get('benzhiId');
    this.yeye=this.route.snapshot.paramMap.get('yeye');
    this.fubei=this.route.snapshot.paramMap.get('fubei');
    this.pinbei=this.route.snapshot.paramMap.get('pinbei');
    this.xiaobei=this.route.snapshot.paramMap.get('xiaobei');
  }
}
