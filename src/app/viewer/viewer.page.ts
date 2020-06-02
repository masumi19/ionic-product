import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.page.html',
  styleUrls: ['./viewer.page.scss'],
})
export class ViewerPage implements OnInit {
  public data;
  constructor(
    public modalController: ModalController,
  ) { }

  ngOnInit() {
    console.log(this.data);
  }

}
