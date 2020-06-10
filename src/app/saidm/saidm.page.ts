import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saidm',
  templateUrl: './saidm.page.html',
  styleUrls: ['./saidm.page.scss'],
})

export class SaidmPage {
  title = '理想体型リスト';
  list: { name: string} [] = [];
  height3 = null;
  old1 = null;
  BodyTemperature1 = null;
  task: string;

  
  constructor(){}
    
    addTask(){
      this.list.push({
        name: this.task
      });
      localStorage.list = JSON.stringify(this.list);
      this.task = '';
    }
  }

