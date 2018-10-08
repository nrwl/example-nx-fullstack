import { async, TestBed } from '@angular/core/testing';
import { UiShellModule } from './ui-shell.module';

describe('UiShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiShellModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiShellModule).toBeDefined();
  });
});
