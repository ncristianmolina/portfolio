import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { ViewportScroller } from '@angular/common';
import { PortfolioViewportScroller } from './portfolio-viewport-scroller';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withInMemoryScrolling({
    anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled',
  })), { provide: ViewportScroller, useClass: PortfolioViewportScroller }],
};
