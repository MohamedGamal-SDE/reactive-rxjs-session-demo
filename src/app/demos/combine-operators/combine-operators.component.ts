import { Component, OnInit } from '@angular/core';
import {
  interval,
  map,
  merge,
  of,
  concat,
  scan,
  combineLatest,
  forkJoin,
  withLatestFrom,
} from 'rxjs';

@Component({
  selector: 'app-combine-operators',
  standalone: true,
  imports: [],
  templateUrl: './combine-operators.component.html',
  styleUrl: './combine-operators.component.scss',
})
export class CombineOperatorsComponent implements OnInit {
  ngOnInit(): void {
    // this.mergeExample();
    // this.concatExample();
    // this.scanExample();
    // this.combineLatestExample();
    // this.forkJoinExample();
    // this.withLatestFromExample();
  }

  // Merge Example
  mergeExample(): void {
    const source1$ = interval(1000); // Emits 0, 1, 2, 3...
    const source2$ = interval(1500).pipe(map((val) => val * 10)); // Emits 0, 10, 20, 30...

    merge(source1$, source2$).subscribe((value) => console.log(value));
  }

  // Concat Example
  concatExample(): void {
    const source1$ = of(1, 2, 3);
    const source2$ = of(4, 5, 6);

    concat(source1$, source2$).subscribe((value) => console.log(value));
  }

  // Scan Example
  scanExample(): void {
    const source$ = interval(1000);

    source$
      .pipe(scan((acc, curr) => acc + curr, 0))
      .subscribe((value) => console.log(value));
  }

  // Combine Latest Example
  combineLatestExample(): void {
    const source1$ = interval(1000); // Emits 0, 1, 2, 3...
    const source2$ = interval(1500).pipe(map((val) => val * 10)); // Emits 0, 10, 20, 30...

    combineLatest([source1$, source2$]).subscribe((values) =>
      console.log(values)
    );
  }

  // Fork Join Example
  forkJoinExample(): void {
    const source1$ = of(1, 2, 3);
    const source2$ = of('A', 'B', 'C');

    forkJoin([source1$, source2$]).subscribe((results) => console.log(results));
  }

  // With Latest From Example
  withLatestFromExample(): void {
    const source1$ = interval(1000); // Emits 0, 1, 2, 3...
    const source2$ = interval(2000).pipe(map((val) => val * 10)); // Emits 0, 10, 20, 30...

    source1$
      .pipe(withLatestFrom(source2$))
      .subscribe((values) => console.log(values));
  }
}
