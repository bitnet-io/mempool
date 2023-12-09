import { query } from '../../utils/axios-query';
import priceUpdater, { PriceFeed, PriceHistory } from '../price-updater';

class XeggexApi implements PriceFeed {
  public name: string = 'Xeggex';
  public currencies: string[] = ['USDT'];

  public url: string = 'https://api.xeggex.com/api/v2/market/getbysymbol/';
  public urlHist: string = 'https://api.gemini.com/v2/candles/BTC{CURRENCY}/{GRANULARITY}';

  constructor() {
  }

  public async $fetchPrice(currency): Promise<number> {
    const response = await query(this.url + currency);
//    if (response && response['last']) {
    if (response && response['lastPrice']) {
//      return parseInt(response['last'], 10);
      return parseInt(response['lastPrice'], 10);
    } else {
      return -1;
    }
  }

  public async $fetchRecentPrice(currencies: string[], type: 'hour' | 'day'): Promise<PriceHistory> {
    const priceHistory: PriceHistory = {};

    for (const currency of currencies) {
      if (this.currencies.includes(currency) === false) {
        continue;
      }

      const response = await query(this.urlHist.replace('{GRANULARITY}', type === 'hour' ? '1hr' : '1day').replace('{CURRENCY}', currency));
      const pricesRaw = response ? response : [];



for (const price of pricesRaw as any[]) {
        const time = Math.round(price[0] / 1000);
        if (priceHistory[time] === undefined) {
          priceHistory[time] = priceUpdater.getEmptyPricesObj();
        }
        priceHistory[time][currency] = price[4];
      }
    }

    return priceHistory;
  }
}

export default XeggexApi;
