import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SinglebookPage } from './singlebook.page';

describe('SinglebookPage', () => {
  let component: SinglebookPage;
  let fixture: ComponentFixture<SinglebookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglebookPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SinglebookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
