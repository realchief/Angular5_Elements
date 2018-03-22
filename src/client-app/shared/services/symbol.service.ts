import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

export class SymbolService {
    symbol: string = 'BTC';
  
    setSymbol(data:string) {
      this.symbol = data;
    }

    getSymbol(): any {
        return this.symbol;
    }
  }