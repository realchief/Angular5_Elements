
export class SymbolService {
    symbol = "BTC";

    setSymbol(data: string) {
      this.symbol = data;
    }

    getSymbol(): any {
        return this.symbol;
    }
  }
