import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIdoComponent } from './what-ido.component';

describe('WhatIdoComponent', () => {
  let component: WhatIdoComponent;
  let fixture: ComponentFixture<WhatIdoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhatIdoComponent]
    });
    fixture = TestBed.createComponent(WhatIdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
