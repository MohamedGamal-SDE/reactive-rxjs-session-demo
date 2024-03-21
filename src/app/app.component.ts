import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SubjectsComponent } from './demos/subjects/subjects.component';
import { FundamentalsComponent } from "./demos/fundamentals/fundamentals.component";
import { CreationFunctionsComponent } from "./demos/creation-functions/creation-functions.component";
import { BasicOperatorsComponent } from "./demos/basic-operators/basic-operators.component";
import { CombineOperatorsComponent } from "./demos/combine-operators/combine-operators.component";
import { HighOrderMappingComponent } from "./demos/high-order-mapping/high-order-mapping.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, SubjectsComponent, FundamentalsComponent, CreationFunctionsComponent, BasicOperatorsComponent, CombineOperatorsComponent, HighOrderMappingComponent]
})
export class AppComponent {
  title = 'reactive-rxjs-demo';
}
