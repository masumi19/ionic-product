import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss'],
})

export class ListPage {
  title = '理想体型リスト';
  list: { name: string} [] = [];
  height2 = null;
  old = null;
  BodyTemperature = null;
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


  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
