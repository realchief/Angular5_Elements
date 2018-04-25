import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	templateUrl: './deposit-details.component.html'
})
export class DepositDetailsComponent implements OnInit {
	constructor(private route: ActivatedRoute) { }

	ngOnInit() {
		this.route.params.subscribe(params => {
			let depositId = params['depositId'];
			// TODO fetch data
		});
	}
}