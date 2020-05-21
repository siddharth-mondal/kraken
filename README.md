This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To run this project `npm install` then `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## TS Code is here
```typescript
import {
  Component,
  OnInit,
  HostListener,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { debounce } from "./debounce.decorator";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "office-test";
  database: any[];
  visibleData: any[];
  hunkOfData: any[];
  counter: number;
  totalRecords: number;
  rowsToBeFetched: number;

  @ViewChild("scrollContainer") tableScrollChecker: ElementRef;

  ngOnInit() {
    this.database = this.data;
    this.visibleData = [];
    this.hunkOfData = [];
    this.counter = 0;
    this.totalRecords = this.data.length;
    this.rowsToBeFetched = 10;

    // Adding data OnLoad
    this.addData(0, this.rowsToBeFetched);
  }

  addData(startIndex, endIndex) {
    this.hunkOfData = this.database.slice(startIndex, endIndex);
    this.visibleData.push(...this.hunkOfData);
    this.counter = this.counter + this.rowsToBeFetched;
  }

  @HostListener("window:scroll", ["$event"]) @debounce() lazyLoadData(event) {
    console.log(event);
    let element = this.tableScrollChecker.nativeElement;
    let atBottom =
      element.scrollHeight - element.scrollTop === element.clientHeight;

    if (atBottom) {
      console.log("You reached bottom!!");
      //Adding data when reached bottom
      this.addData(this.counter, this.counter + this.rowsToBeFetched);
    }
  }
  ```
  
  ## Decorator
  
  ```typescript
  export function debounce(delay: number = 250): MethodDecorator {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const timeoutKey = Symbol();

    const original = descriptor.value;

    descriptor.value = function (...args) {
      clearTimeout(this[timeoutKey]);
      this[timeoutKey] = setTimeout(() => original.apply(this, args), delay);
    };

    return descriptor;
  };
}
```

Open [this link] (https://stackoverflow.com/questions/44634992/debounce-hostlistener-event) for decorator stuff

