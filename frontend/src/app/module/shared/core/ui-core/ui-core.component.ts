import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({template: ''})
export abstract class UiCoreComponent implements OnDestroy {

  protected destroySubscribe$ = new Subject<void>();

  ngOnDestroy(): void {
    this.destroySubscribe$.next();
    this.destroySubscribe$.complete();
  }
}
