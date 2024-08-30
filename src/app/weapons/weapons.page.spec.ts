import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeaponsPage } from './weapons.page';

describe('WeaponsPage', () => {
  let component: WeaponsPage;
  let fixture: ComponentFixture<WeaponsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
