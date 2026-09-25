import { DOCUMENT, ViewportScroller } from '@angular/common';
import { inject, Injectable } from '@angular/core';

@Injectable()
export class PortfolioViewportScroller extends ViewportScroller {
  private readonly document = inject(DOCUMENT);
  private offset: () => [number, number] = () => [0, 100];

  override setOffset(offset: [number, number] | (() => [number, number])): void {
    this.offset = typeof offset === 'function' ? offset : () => offset;
  }

  override getScrollPosition(): [number, number] {
    const view = this.document.defaultView;
    return [view?.scrollX ?? 0, view?.scrollY ?? 0];
  }

  override scrollToPosition([left, top]: [number, number]): void {
    this.document.defaultView?.scrollTo({ left, top, behavior: 'instant' });
  }

  override scrollToAnchor(anchor: string): void {
    const target = this.document.getElementById(anchor);
    const view = this.document.defaultView;
    if (!target || !view) return;
    const [offsetX, offsetY] = this.offset();
    const bounds = target.getBoundingClientRect();
    const left = bounds.left + view.scrollX - offsetX;
    const top = bounds.top + view.scrollY - offsetY;
    // Keep keyboard focus on the destination without starting a second scroll.
    target.focus({ preventScroll: true });
    view.scrollTo({
      left, top,
      behavior: view.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    });
  }

  override setHistoryScrollRestoration(restoration: 'auto' | 'manual'): void {
    const view = this.document.defaultView;
    if (view) view.history.scrollRestoration = restoration;
  }
}
