import { Component, OnInit } from '@angular/core';
import { of, from, fromEvent, interval, debounceTime, distinctUntilChanged, filter, map, take, takeUntil, tap, timer } from 'rxjs';

@Component({
  selector: 'app-basic-operators',
  standalone: true,
  imports: [],
  templateUrl: './basic-operators.component.html',
  styleUrl: './basic-operators.component.scss',
})
export class BasicOperatorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // // Map Operator Example

    // const sourceMap = of(1, 2, 3);
    // sourceMap.pipe(
    //   map(value => value * 2)
    // ).subscribe(result => console.log('Map:', result));


    // // Filter Operator Example
    
    // const sourceFilter = of(1, 2, 3, 4, 5);
    // sourceFilter.pipe(
    //   filter(value => value % 2 === 0) // Filter even numbers
    // ).subscribe(result => console.log('Filter:', result));
    

    // // Tap Operator Example
    
    // const sourceTap = of(1, 2, 3);
    // sourceTap.pipe(
    //   tap(value => console.log(`Tap: Processing value ${value}`))
    // ).subscribe(result => console.log('Tap:', result));
    

    // // DebounceTime Operator Example
    
    // const input = document.getElementById('search')!;
    // const search$ = fromEvent(input, 'input');
    // search$.pipe(
    //   debounceTime(300)
    // ).subscribe(event => console.log('Debounce:', (event.target as HTMLInputElement).value));
    

    // // DistinctUntilChanged Operator Example
    
    // const sourceDistinct = of(1, 1, 2, 2, 3, 1, 2, 3);
    // sourceDistinct.pipe(
    //   distinctUntilChanged()
    // ).subscribe(result => console.log('Distinct:', result));
    

    // // TakeUntil Operator Example
    
    // const sourceTakeUntil = interval(1000);
    // const timer$ = timer(5000); // Emit after 5 seconds
    // sourceTakeUntil.pipe(
    //   takeUntil(timer$)
    // ).subscribe(result => console.log('TakeUntil:', result));
    

    // // Take Operator Example

    // const sourceTake = interval(1000);
    // sourceTake.pipe(
    //   take(3)
    // ).subscribe(result => console.log('Take:', result));
    
  }
}