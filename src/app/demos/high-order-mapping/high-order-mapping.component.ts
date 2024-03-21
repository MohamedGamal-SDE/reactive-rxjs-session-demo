import { Component, OnInit } from '@angular/core';
import {
  from,
  mergeMap,
  of,
  delay,
  concatMap,
  switchMap,
  interval,
  take,
  exhaustMap,
  fromEvent,
  debounceTime,
  distinctUntilChanged,
  Observable,
} from 'rxjs';

@Component({
  selector: 'app-high-order-mapping',
  standalone: true,
  imports: [],
  templateUrl: './high-order-mapping.component.html',
  styleUrl: './high-order-mapping.component.scss',
})
export class HighOrderMappingComponent implements OnInit {
  ngOnInit(): void {
    // Uncomment the method calls you need to demonstrate
    // this.mergeMapExample();
    // this.mergeMapExampleR();
    // this.concatMapExample();
    // this.concatMapExampleR();
    // this.switchMapExample();
    // this.switchMapExampleR(); // Not functional
    // this.exhaustMapExample();
    // this.exhaustMapExampleR();
  }

  // MergeMap Example
  mergeMapExample(): void {
    // Create an observable stream emitting values
    const source$ = of(1, 2, 3);

    // Apply mergeMap to map each value to an inner observable
    const result$ = source$.pipe(
      mergeMap((value) => of(`Processed: ${value}`).pipe(delay(1000)))
    );

    // Subscribe to the resulting observable
    result$.subscribe((result) => console.log(result)); // Output: 'Processed: 1', 'Processed: 2', 'Processed: 3'
  }

  // MergeMap Example R
  mergeMapExampleR(): void {
    // Array of chat room IDs
    const roomIds = ['general', 'programming', 'design'];

    // Observable emitting chat room IDs
    const roomIds$ = from(roomIds);

    // Fetch latest messages for each room concurrently using mergeMap
    const messages$ = roomIds$.pipe(
      mergeMap((roomId) => getLatestMessagesByRoomId(roomId))
    );

    // Subscribe to the resulting observable
    messages$.subscribe((messages) => console.log(messages));
  }

  // ConcatMap Example
  concatMapExample(): void {
    // Create an observable stream emitting values
    const source$ = of(1, 2, 3);

    // Apply concatMap to map each value to an inner observable
    const result$ = source$.pipe(
      concatMap((value) => of(`Processed: ${value}`).pipe(delay(1000)))
    );

    // Subscribe to the resulting observable
    result$.subscribe((result) => console.log(result)); // Output: 'Processed: 1', 'Processed: 2', 'Processed: 3'
  }

  // ConcatMap Example R
  concatMapExampleR(): void {
    // Array of user IDs who subscribed
    const userIds = [101, 102, 103];

    // Observable emitting user IDs
    const userIds$ = from(userIds);

    // Send confirmation email and update subscription status sequentially using concatMap
    const confirmation$ = userIds$.pipe(
      concatMap((userId) =>
        sendEmail(userId).pipe(
          concatMap(() => updateSubscriptionStatus(userId))
        )
      )
    );

    // Subscribe to the resulting observable
    confirmation$.subscribe((result) => console.log(result));
  }

  // SwitchMap Example
  switchMapExample(): void {
    // Simulating click events
    const click$ = fromEvent(document, 'click');

    // Simulating an interval observable that emits values every second
    const interval$ = interval(1000);

    // Using switchMap to handle click events and interval emissions
    const result$ = click$.pipe(switchMap(() => interval$));

    // Subscribe to the resulting observable
    result$.subscribe((value) => console.log(value));
  }

  // SwitchMap Example R
  switchMapExampleR(): void {
    // Get reference to the search input element
    const searchInput = document.getElementById(
      'searchInput'
    ) as HTMLInputElement;

    // Observable emitting search input events
    const search$ = fromEvent(searchInput, 'input').pipe(
      debounceTime(300), // Wait for 300ms of inactivity
      distinctUntilChanged(), // Only emit if the search query has changed
      switchMap((event) =>
        searchProducts((event?.target as HTMLInputElement)?.value)
      ) // Fetch search results
    );

    // Subscribe to the resulting observable
    search$.subscribe((results) => console.log(results));
  }

  // ExhaustMap Example
  exhaustMapExample(): void {
    // Simulating click events
    const click$ = fromEvent(document, 'click');

    // Simulating an interval observable that emits values every second
    const interval$ = interval(1000);

    // Using exhaustMap to handle click events and interval emissions
    const result$ = click$.pipe(exhaustMap(() => interval$));

    // Subscribe to the resulting observable
    result$.subscribe((value) => console.log(value));
  }

  // ExhaustMap Example R
  exhaustMapExampleR(): void {
    // Get reference to the submit button
    const submitButton = document.getElementById(
      'submitButton'
    ) as HTMLButtonElement;

    // Observable emitting click events on the submit button
    const click$ = fromEvent(submitButton, 'click');

    // Send request to server upon click using exhaustMap
    const request$ = click$.pipe(exhaustMap(() => sendRequestToServer()));

    // Subscribe to the resulting observable
    request$.subscribe((response) => console.log(response));
  }
}

// Ignore bellow helper functions
// its just for demo to work
// Fake function to simulate sending a request to the server
function sendRequestToServer(): Observable<any> {
  console.log('Sending request to the server...');
  // Simulate server response after 1 second
  return new Observable((observer) => {
    setTimeout(() => {
      console.log('Received response from the server.');
      observer.next('Server response');
      observer.complete();
    }, 1000);
  });
}

// Fake function to simulate fetching latest messages by room ID
function getLatestMessagesByRoomId(roomId: string): Observable<any> {
  console.log(`Fetching latest messages for room ${roomId}...`);
  // Simulate fetching messages from server after 1 second
  return new Observable((observer) => {
    setTimeout(() => {
      console.log(`Received latest messages for room ${roomId}.`);
      observer.next(`Latest messages for room ${roomId}`);
      observer.complete();
    }, 1000);
  });
}

// Fake function to simulate sending an email
function sendEmail(userId: number): Observable<any> {
  console.log(`Sending confirmation email to user ${userId}...`);
  // Simulate sending email after 1 second
  return new Observable((observer) => {
    setTimeout(() => {
      console.log(`Confirmation email sent to user ${userId}.`);
      observer.next(`Email sent to user ${userId}`);
      observer.complete();
    }, 1000);
  });
}

// Fake function to simulate updating subscription status
function updateSubscriptionStatus(userId: number): Observable<any> {
  console.log(`Updating subscription status for user ${userId}...`);
  // Simulate updating status after 1 second
  return new Observable((observer) => {
    setTimeout(() => {
      console.log(`Subscription status updated for user ${userId}.`);
      observer.next(`Subscription status updated for user ${userId}`);
      observer.complete();
    }, 1000);
  });
}

// Fake function to simulate searching products
function searchProducts(query: string): Observable<any> {
  console.log(`Searching products for query: ${query}...`);
  // Simulate searching products after 1 second
  return new Observable((observer) => {
    setTimeout(() => {
      console.log(`Found products for query: ${query}.`);
      observer.next(`Products found for query: ${query}`);
      observer.complete();
    }, 1000);
  });
}
