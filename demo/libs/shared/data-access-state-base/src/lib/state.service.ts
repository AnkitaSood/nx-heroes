import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

/*
 * @class {StateService<T> StateService}
 */
export abstract class StateService<T> {
  private stateSubject$ = new BehaviorSubject<T>(null);

  /*
   * @property {Observable<T>} state$ - state observable
   */
  state$: Observable<T> = this.stateSubject$.asObservable();

  /*
   *  @function pluckStateProperty
   *  @description returns a property of the state object in an observable stream
   *  @param {K} propertyName
   *  @returns {Observable<T[K]>}
   */
  pluckStateProperty<K extends keyof T>(propertyName: K): Observable<T[K]> {
    return this.state$.pipe(
      filter((state) => !!state),
      map((state) => state[propertyName])
    );
  }

  /*
   *  @function setState
   *  @description Updates state
   *  @param {(T|Partial<T>)} state
   */
  protected setState(state: T | Partial<T>): void {
    const currentState = this.stateSubject$.value;
    const newState = { ...currentState, ...state };
    this.stateSubject$.next(newState);
  }

  /*
   *  @function getStateCopy
   *  @description immutably gets copy of current state value
   *  @returns {T}
   */
  protected getStateCopy(): T {
    return { ...this.stateSubject$.value };
  }

  /*
   *  @function resetState
   *  @description resets state to null
   */
  protected resetState(): void {
    this.stateSubject$.next(null);
  }

  protected endStateObservation(): void {
    this.stateSubject$.complete();
  }
}
