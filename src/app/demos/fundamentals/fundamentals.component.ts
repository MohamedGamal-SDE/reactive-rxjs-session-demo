import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fundamentals',
  standalone: true,
  imports: [],
  templateUrl: './fundamentals.component.html',
  styleUrl: './fundamentals.component.scss',
})
export class FundamentalsComponent {
  // Observables Example
/*
// Creating an observable that emits values 1, 2, and 3 over time
const myObservable = new Observable(observer => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
});

// Subscribing to the observable to listen for emitted values
myObservable.subscribe(value => console.log('Value:', value));
*/

// Observer Example
/*
// Simulating an observable emitting values over time
const observable = new Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  //subscriber.error('Something went wrong'); // Simulating an error
  subscriber.next(3);
  subscriber.complete(); // Indicating completion
});

// Observer object ( it usually not used separate like that )
// This is just for demo
const observer = {
  next: value => console.log('Received value:', value),
  error: err => console.error('Error:', err),
  complete: () => console.log('Observation complete')
};

// Subscribing to the observable with the observer
observable.subscribe(observer);
*/

// Subscription Example
/*
// Create an observable that emits numbers every second
const observable = new Observable(observer => {
  let count = 0;
  const intervalId = setInterval(() => {
    observer.next(count++);
  }, 1000);

  // Cleanup function to stop emitting values when unsubscribed
  return () => {
    clearInterval(intervalId);
  };
});

// Subscribe to the observable
const subscription = observable.subscribe({
  next: value => console.log('Received value:', value),
  error: error => console.error('Received error:', error),
  complete: () => console.log('Observable completed')
});

// After 5 seconds, unsubscribe from the subscription
setTimeout(() => {
  subscription.unsubscribe();
  console.log('Unsubscribed from the observable');
}, 5000);
*/

// Unsubscription Example
/*
// Create an observable that emits numbers every second
const observable = new Observable(observer => {
  let count = 0;
  const intervalId = setInterval(() => {
    observer.next(count++);
  }, 1000);

  // Cleanup function to stop emitting values when unsubscribed
  return () => {
    clearInterval(intervalId);
  };
});

// Subscribe to the observable
const subscription = observable.subscribe({
  next: value => console.log('Received value:', value),
  error: error => console.error('Received error:', error),
  complete: () => console.log('Observable completed')
});

// After 5 seconds, unsubscribe from the subscription
setTimeout(() => {
  subscription.unsubscribe();
  console.log('Unsubscribed from the observable');
}, 5000);
*/
}
