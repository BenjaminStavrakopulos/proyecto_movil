import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BossesPage } from './bosses.page';

describe('BossesPage', () => {
  let component: BossesPage;
  let fixture: ComponentFixture<BossesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BossesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
