import { Component, OnInit } from '@angular/core';

import { AlertService } from '../_services/index';

@Component({
    moduleId: module.id.toString(),
    selector: 'my-alert',
    templateUrl: 'alert.component.html'
})

export class AlertComponent {
    message: any;

    constructor(private alertService: AlertService) { }

    ngOnInit() {
        this.alertService.getMessage().subscribe(msg => { this.message = msg; });
    }
}