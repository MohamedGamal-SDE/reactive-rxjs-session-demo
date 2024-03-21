import { Component, OnInit } from '@angular/core';
import {
  Subject,
  BehaviorSubject,
  ReplaySubject,
  Observable,
  AsyncSubject,
  of,
} from 'rxjs';

@Component({
  selector: 'app-subjects',
  standalone: true,
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss'],
})
export class SubjectsComponent implements OnInit {
  ngOnInit(): void {
    // this.subjectAsObservableExample();
    // this.subjectAsObserverExample();
    // this.subjectExample();
    // this.behaviorSubjectExample();
    // this.replaySubjectExample();
    // this.asyncSubjectExample();
    // this.unicastObservableExample();
    // this.multicastObservableExample();
    // this.coldObservableExample();
    // this.hotObservableExample();
  }

  // Subject as Observable Example
  subjectAsObservableExample(): void {
    // Creating a Subject
    const subject = new Subject<number>();

    // Subscribing to the Subject
    subject.subscribe((value) => console.log('Observer A:', value));

    // Emitting values
    subject.next(1);
    subject.next(2);
    subject.next(3);
  }

  // Subject as Observer Example
  subjectAsObserverExample(): void {
    // Assume this is a service that receives messages from the server
    const messageService = {
      // Simulate receiving messages
      receiveMessage: (): Observable<string> => {
        // Simulating message reception from the server
        return new Observable<string>((observer) => {
          // Emitting a sample message after a delay
          setTimeout(() => {
            observer.next('Hello, world!');
          }, 1000);
        });
      },
    };

    // Creating a Subject to act as an Observer
    const messageSubject = new Subject<string>();

    // Subscribe the Subject to the message service
    messageService.receiveMessage().subscribe(messageSubject);

    // Subscribing to the Subject to display messages
    messageSubject.subscribe((message) =>
      console.log('Displaying message:', message)
    );
  }

  // Subject Example
  subjectExample(): void {
    // Create a new Subject
    const subject = new Subject<number>();

    // Subscribe to the Subject
    subject.subscribe((value) => console.log('Subscriber 1:', value));

    // Emit values to the Subject
    subject.next(1);
    subject.next(2);

    // Another subscriber
    subject.subscribe((value) => console.log('Subscriber 2:', value));

    // Emit another value
    subject.next(3);
  }

  // BehaviorSubject Example
  behaviorSubjectExample(): void {
    // Create a new BehaviorSubject with an initial value
    const behaviorSubject = new BehaviorSubject<number>(0);

    // Subscribe to the BehaviorSubject
    behaviorSubject.subscribe((value) => console.log('Subscriber 1:', value));

    // Emit values to the BehaviorSubject
    behaviorSubject.next(1);
    behaviorSubject.next(2);

    // Another subscriber
    behaviorSubject.subscribe((value) => console.log('Subscriber 2:', value));

    // Emit another value
    behaviorSubject.next(3);
  }

  // ReplaySubject Example
  replaySubjectExample(): void {
    // Create a new ReplaySubject with a buffer size of 2
    const replaySubject = new ReplaySubject<number>(2);

    // Subscribe to the ReplaySubject
    replaySubject.subscribe((value) => console.log('Subscriber 1:', value));

    // Emit values to the ReplaySubject
    replaySubject.next(1);
    replaySubject.next(2);
    replaySubject.next(3);

    // Another subscriber
    replaySubject.subscribe((value) => console.log('Subscriber 2:', value));
  }

  // AsyncSubject Example
  asyncSubjectExample(): void {
    // Create a new AsyncSubject
    const asyncSubject = new AsyncSubject<number>();

    // Subscribe to the AsyncSubject
    asyncSubject.subscribe(
      (value) => console.log('Subscriber 1:', value),
      (error) => console.error('Subscriber 1 Error:', error),
      () => console.log('Subscriber 1 Completed')
    );

    // Emit values to the AsyncSubject
    asyncSubject.next(1);
    asyncSubject.next(2);

    // Complete the AsyncSubject
    asyncSubject.complete();

    // Another subscriber
    asyncSubject.subscribe(
      (value) => console.log('Subscriber 2:', value),
      (error) => console.error('Subscriber 2 Error:', error),
      () => console.log('Subscriber 2 Completed')
    );
  }

  // Cold Observable Example
  coldObservableExample(): void {
    // Creating a cold observable using the 'of' operator
    const coldObservable = of(1, 2, 3);

    // Subscribing to the observable
    coldObservable.subscribe((value) => console.log('Subscriber 1:', value));

    // Another subscription after some time
    setTimeout(() => {
      coldObservable.subscribe((value) => console.log('Subscriber 2:', value));
    }, 2000);
  }

  // Hot Observable Example
  hotObservableExample(): void {
    // Creating a Subject to act as a hot observable
    const hotSubject = new Subject<number>();

    // Emitting values to the Subject
    hotSubject.next(1);
    hotSubject.next(2);
    hotSubject.next(3);

    // Subscribing to the observable
    hotSubject.subscribe((value) => console.log('Subscriber 1:', value));

    // Another subscription after some time
    setTimeout(() => {
      hotSubject.subscribe((value) => console.log('Subscriber 2:', value));
    }, 2000);
  }

  // Unicast Observable Example
  unicastObservableExample(): void {
    // Creating a cold observable using the 'of' operator
    const unicastObservable = of(1, 2, 3);

    // Subscribing to the observable
    unicastObservable.subscribe((value) => console.log('Subscriber 1:', value));

    // Another subscription after some time
    setTimeout(() => {
      unicastObservable.subscribe((value) =>
        console.log('Subscriber 2:', value)
      );
    }, 2000);
  }

  // Multicast Observable Example
  multicastObservableExample(): void {
    // Creating a Subject to multicast values
    const multicastSubject = new Subject<number>();

    // Subscribing to the subject
    multicastSubject.subscribe((value) => console.log('Subscriber 1:', value));

    // Another subscription after some time
    setTimeout(() => {
      multicastSubject.subscribe((value) =>
        console.log('Subscriber 2:', value)
      );
    }, 2000);

    // Emitting values
    multicastSubject.next(1);
    multicastSubject.next(2);
    multicastSubject.next(3);
  }
}
