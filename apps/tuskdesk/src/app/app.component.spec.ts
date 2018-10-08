import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {UiShellModule} from "@myorg/ui-shell";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [UiShellModule]
    }).compileComponents();
  }));
});
