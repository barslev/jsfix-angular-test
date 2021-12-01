import { Component } from '@angular/core';
import _ from 'lodash';
import rxjs from 'rxjs';
import uuid from 'uuid';

@Component({
    selector: 'some-component',
    templateUrl: './some.component.html',
    styleUrls: ['./some.component.css'],
})
export class SomeComponent {
    _ = _;
    subject = new rxjs.Subject();
    uuid = uuid;
    constructor() {}

    private f() {
        _.pluck([1, 2, 3], (x) => x);
        this._.pluck([1, 2, 3], (x) => x);
        this.subject.filter((x) => true).map((x) => x);
    }
}
