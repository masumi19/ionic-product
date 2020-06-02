import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SaidmPage } from './saidm.page';

describe('SaidmPage', () => {
  let component: SaidmPage;
  let fixture: ComponentFixture<SaidmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaidmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SaidmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
