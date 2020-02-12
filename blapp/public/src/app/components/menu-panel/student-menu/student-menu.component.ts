import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-student-menu',
  templateUrl: './student-menu.component.html',
  styleUrls: ['./student-menu.component.scss'],
})
export class StudentMenuComponent implements OnInit {
  @Input() titulo: string;
  @Input() opcion1: string;
  @Input() opcion2: string;
  constructor( private navCtrl: NavController) { }

  ngOnInit() {}

  selectTheme(event: any) {
    this.navCtrl.navigateForward('/' + event.target.value);
  }

}
