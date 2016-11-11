import {SomeComponent} from './some';
import {TestBed, async} from '@angular/core/testing';

describe('some component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SomeComponent
      ]
    });
    TestBed.compileComponents();
  }));

  it('should render SomeComponent', () => {
    const fixture = TestBed.createComponent(SomeComponent);
    fixture.detectChanges();
    const some = fixture.nativeElement;
    expect(some.querySelector('h1').textContent.trim()).toBe('Holla molaa!');
  });
});
