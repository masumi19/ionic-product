import { Component, OnInit } from '@angular/core';
import { ActionSheetController,AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ViewerPage } from '../viewer/viewer.page'


@Component({
  selector: 'app-slist',
  templateUrl: './slist.page.html',
  styleUrls: ['./slist.page.scss'],
})

export class SListPage implements OnInit {
  slist:{ name: string } [] =[];
  startDateInput =null;


  constructor(
    public actionSheetController: ActionSheetController,
    public alertController: AlertController,
    public modalController: ModalController,
  ) { }
  
  ngOnInit() { }

  async ionViewWillEnter(){
    console.log(localStorage);
    if (localStorage.hasOwnProperty('slist')) {
      this.slist = JSON.parse(localStorage.slist);
    }
  }

  async changeTask(index: number) {
    const actionSheet = await this.actionSheetController.create({      
      header: '一覧',

      buttons: [
        {
          text:'開く',
          icon: 'paw',
          handler:async () => {
            const modal = await this.modalController.create({
              component: ViewerPage,
              componentProps: {
                data: this.slist[index]
              }
            });
            modal.present();
          }
          
        },{
          text: '変更',
          icon: 'create',
          handler: () => {
            this._renameTask(index);}
        },{
          text: '削除',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.slist.splice(index,1)
            localStorage.slist = JSON.stringify(this.slist);}
        },{
          text: '閉じる',
          role: 'cansel',
          icon: 'close',
          handler: () => {
            console.log('Cansel clicked')},
          }
      ]
    });
    actionSheet.present();
  }

  async _renameTask(index: number) {
    const prompt = await this.alertController.create({
      header: '変更後のファイル名',
      inputs: [
        {
          name: 'task',
          placeholder:'null',
          value:this.slist[index].name
        },
      ],
      buttons: [
        {
          text: '閉じる'
        },
        {
          text: '保存',
          handler: data => {
            this.slist[index] = { name: data.task };
            localStorage.slist =JSON.stringify(this.slist);
          }
        }
      ]
    });
    prompt.present();
  }
}
