import { Component, OnInit, OnDestroy } from '@angular/core';
import { ClientBankOrder } from '../../../shared/models/client-bank-order-model';
import { ApiService } from '../../../shared/api.service';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators';

@Component({
	templateUrl: './deposits-list.component.html'
})

export class DepositsListComponent implements OnInit, OnDestroy {
	orders: ClientBankOrder[] = [];
	private ngUnsub = new Subject();

	constructor(private apiService: ApiService) { }

	ngOnInit() {
		this.apiService.get('fiat/order/list')
		.pipe(takeUntil(this.ngUnsub))
		.subscribe(response => {
			this.orders = response;
			console.log(this.orders);
		});
	}

	ngOnDestroy(): void {
		this.ngUnsub.next();
		this.ngUnsub.complete();
	  }
}