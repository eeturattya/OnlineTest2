import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the Tabs2Page tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs2',
  templateUrl: 'tabs2.html'
})
export class Tabs2Page {

  page1Root = 'Page1Page'
  page2Root = 'Page2Page'
  page3Root = 'Page3Page'
  page4Root = 'Page4Page'


  constructor(public navCtrl: NavController) {}

}
