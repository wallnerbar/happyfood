import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeSiteComponent } from './recipe-site.component';

describe('RecipeSiteComponent', () => {
  let component: RecipeSiteComponent;
  let fixture: ComponentFixture<RecipeSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
