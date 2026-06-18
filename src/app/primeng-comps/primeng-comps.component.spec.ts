import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengCompsComponent } from './primeng-comps.component';

describe('PrimengCompsComponent', () => {
  let component: PrimengCompsComponent;
  let fixture: ComponentFixture<PrimengCompsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimengCompsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimengCompsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
