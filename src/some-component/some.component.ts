import { filter, map, reduce } from 'rxjs/operators';
import { Component } from '@angular/core';
import _ from 'lodash';
import * as rxjs from 'rxjs';
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
    filter = filter;
    map = map;
    reduce = reduce;
    constructor() {}

    private f() {
        _.pluck([1, 2, 3], (x) => x);
        this._.pluck([1, 2, 3], (x) => x);
        this.subject.pipe(filter((x) => true), map((x) => x));
    }
}
