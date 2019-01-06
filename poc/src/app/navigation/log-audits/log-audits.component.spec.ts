import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogAuditsComponent } from './log-audits.component';

describe('LogAuditsComponent', () => {
  let component: LogAuditsComponent;
  let fixture: ComponentFixture<LogAuditsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogAuditsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogAuditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
