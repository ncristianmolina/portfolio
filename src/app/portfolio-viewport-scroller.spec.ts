import { DOCUMENT } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { PortfolioViewportScroller } from './portfolio-viewport-scroller';

describe('PortfolioViewportScroller', () => {
  let scroller: PortfolioViewportScroller;
  let target: { focus: jasmine.Spy; getBoundingClientRect: () => { left: number; top: number } };
  let view: { scrollX: number; scrollY: number; scrollTo: jasmine.Spy; matchMedia: jasmine.Spy; history: { scrollRestoration: string } };

  beforeEach(() => {
    target = { focus: jasmine.createSpy('focus'), getBoundingClientRect: () => ({ left: 20, top: 500 }) };
    view = {
      scrollX: 0, scrollY: 200, scrollTo: jasmine.createSpy('scrollTo'),
      matchMedia: jasmine.createSpy('matchMedia').and.returnValue({ matches: false }),
      history: { scrollRestoration: 'auto' },
    };
    TestBed.configureTestingModule({
      providers: [PortfolioViewportScroller, {
        provide: DOCUMENT,
        useValue: { defaultView: view, getElementById: (id: string) => id === 'projects' ? target : null },
      }],
    });
    scroller = TestBed.inject(PortfolioViewportScroller);
  });

  it('focuses without a competing scroll and animates below the fixed header', () => {
    scroller.scrollToAnchor('projects');
    expect(target.focus).toHaveBeenCalledWith({ preventScroll: true });
    expect(view.scrollTo).toHaveBeenCalledWith({ left: 20, top: 600, behavior: 'smooth' });
  });

  it('respects reduced motion and ignores missing destinations', () => {
    view.matchMedia.and.returnValue({ matches: true });
    scroller.scrollToAnchor('projects');
    expect(view.scrollTo).toHaveBeenCalledWith({ left: 20, top: 600, behavior: 'instant' });
    view.scrollTo.calls.reset();
    scroller.scrollToAnchor('missing');
    expect(view.scrollTo).not.toHaveBeenCalled();
  });

  it('restores the saved position without animation', () => {
    scroller.scrollToPosition([0, 850]);
    expect(view.scrollTo).toHaveBeenCalledWith({ left: 0, top: 850, behavior: 'instant' });
    expect(scroller.getScrollPosition()).toEqual([0, 200]);
  });
});
