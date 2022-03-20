import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAuditorComponent } from './login-auditor.component';

describe('LoginAuditorComponent', () => {
  let component: LoginAuditorComponent;
  let fixture: ComponentFixture<LoginAuditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginAuditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAuditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
