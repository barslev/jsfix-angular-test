import { Component } from '@angular/core';
import _ from 'lodash';
import rxjs from 'rxjs'

@Component({
    selector: 'some-component',
    templateUrl: './some.component.html',
    styleUrls: ['./some.component.css'],
})
export class SomeComponent {
    _ = _;
    subject = new rxjs.Subject();
    constructor() {}

    private f() {
        this._.map([1, 2, 3], x => x);
        this.subject.filter(x => true).map(x => x);
    }
}
