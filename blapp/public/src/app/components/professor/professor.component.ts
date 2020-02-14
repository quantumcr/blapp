import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.scss'],
})
export class ProfessorComponent implements OnInit {
  public visibleForm = true;
  public visibleList = false;
  constructor() { }

  ngOnInit() {}

  selectPanel(value: string) {
    console.log(value);
    this.setVisible(value);
  }

  setVisible( value) {
    if ( value === 'registro') {
      this.visibleForm = true;
      this.visibleList = false;
    } else {
      this.visibleForm = false;
      this.visibleList = false;
    }

  }

}
