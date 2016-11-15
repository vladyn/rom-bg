import {MyComponent} from './myComponent';
import {TestBed, async} from '@angular/core/testing';

describe('myComponent component', () => {
  beforeEach(async(function () {
    TestBed.configureTestingModule({declarations: [myComponent]});
    TestBed.compileComponents();
  }));

  it('should render...', function () {
    const fixture = TestBed.createComponent(myComponent);
    fixture.detectChanges();
  });
});
