import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SListPage } from './slist.page';

describe('SListPage', () => {
  let component: SListPage;
  let fixture: ComponentFixture<SListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
