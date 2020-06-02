import { Component } from '@angular/core';
import { NavController, IonItem } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { NumberSymbol, TitleCasePipe } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage{
  title = '身体測定';

  public item: {
    startDateInput: string;
    height: number;
    weight: number;
    BustSize: number;
    UnderBust: number;
    Waist: number;
    WaistCircumference: null;
    Hip: number;
    leftUpperArm: number;
    rightUpperArm: number;
    leftForearm:number;
    rightForearm:number;
    leftThigh: number;
    rightThigh: number;
    leftCalf:number;
    rightCalf:number;
    leftAnkle:number;
    rightAnkle:number;
    memo:number;
  } = {
    startDateInput: null,
    height: null,
    weight:null,
    BustSize: null,
    UnderBust: null,
    Waist: null,
    WaistCircumference:null,
    Hip: null,
    leftUpperArm:null,
    rightUpperArm:null,
    leftForearm:null,
    rightForearm:null,
    leftThigh:null,
    rightThigh:null,
    leftCalf:null,
    rightCalf:null,
    leftAnkle:null,
    rightAnkle:null,
    memo:null,
  }

  slist: {
    startDateInput: string;
    height: number;
    weight: number;
    BustSize: number;
    UnderBust: number;
    Waist: number;
    WaistCircumference: null;
    Hip: number;
    leftUpperArm: number;
    rightUpperArm: number;
    leftForearm:number;
    rightForearm:number;
    leftThigh: number;
    rightThigh: number;
    leftCalf:number;
    rightCalf:number;
    leftAnkle:number;
    rightAnkle:number;
    memo:number;
  }[] = [];
  
  constructor() { }
  
  ionViewWillEnter() {
    if ('slist' in localStorage) {
      this.slist = JSON.parse(localStorage.slist);
    }
  }

  addTask() {}
  
  saveItem() {
    this.slist.push(this.item);
    localStorage.slist = JSON.stringify(this.slist);
  }
}