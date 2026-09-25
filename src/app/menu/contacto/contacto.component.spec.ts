import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ContactoComponent } from './contacto.component';

describe('ContactoComponent', () => {
  let component: ContactoComponent;
  let fixture: ComponentFixture<ContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter([])],
      imports: [ContactoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
