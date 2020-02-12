import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CortinaPage } from './cortina.page';

describe('CortinaPage', () => {
  let component: CortinaPage;
  let fixture: ComponentFixture<CortinaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CortinaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CortinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
