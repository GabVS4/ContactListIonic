import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactDataPage } from './contact-data.page';

describe('ContactDataPage', () => {
  let component: ContactDataPage;
  let fixture: ComponentFixture<ContactDataPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
