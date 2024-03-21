import { Component, OnInit } from '@angular/core';
import { from, of, interval, timer, fromEvent } from 'rxjs';
import {
  map,
  filter,
  tap,
  debounceTime,
  distinctUntilChanged,
  takeUntil,
  take,
} from 'rxjs/operators';

@Component({
  selector: 'app-creation-functions',
  standalone: true,
  imports: [],
  templateUrl: './creation-functions.component.html',
  styleUrl: './creation-functions.component.scss',
})
export class CreationFunctionsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // /**
    //  * of() Operator Example
    //  */
    
    // const primitive = 4;
    // const obj = { keyA: 'valueA' };
    // const arr = [1, false, ''];

    // of(primitive)
    //   .subscribe(value => console.log(value)); // Output: 4

    // of(obj)
    //   .subscribe(value => console.log(value)); // Output: { keyA: 'valueA' }

    // of(arr)
    //   .subscribe(value => console.log(value)); // Output: [1, false, '']

    // const multiValues = of(1, 2, 3, 'hello', { key: 'value' });

    // multiValues.subscribe(value => console.log(value));

    // // Output:
    // // 1
    // // 2
    // // 3
    // // hello
    // // { key: 'value' }
    
    // /**
    //  * from() Operator Example
    //  */
    
    // const array = [1, 2, 3];
    // const source = from(array);

    // source.subscribe(value => console.log(value)); // Output: 1, 2, 3
    
    
    // // From Promise
    // const promise = new Promise(resolve => {
    //   setTimeout(() => {
    //     resolve('Promise Resolved');
    //   }, 2000);
    // });

    // const sourcePromise = from(promise);

    // sourcePromise.subscribe(value => console.log(value)); // Output: Promise Resolved

    // // From Iterable Object
    // const iterable = 'Hello';
    // const sourceIterable = from(iterable);

    // sourceIterable.subscribe(value => console.log(value)); // Output: H, e, l, l, o

    // /**
    //  * fromEvent() Operator Example
    //  */
    
    // const el = document.getElementById('my-element')!;

    // const mouseMoves = fromEvent<MouseEvent>(el, 'mousemove');

    // const subscription = mouseMoves.subscribe(evt => {
    //   console.log(`Coords: ${evt.clientX} X ${evt.clientY}`);

    //   if (evt.clientX < 40 && evt.clientY < 40) {
    //     subscription.unsubscribe();
    //   }
    // });
  

    // /**
    //  * interval() Operator Example
    //  */
    
    // const secondsCounter = interval(1000);

    // const intervalSubscription = secondsCounter.subscribe(n =>
    //   console.log(`It's been ${n + 1} seconds since subscribing!`));
    
  }
}
