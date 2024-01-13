import { query } from '../../utils/axios-query';
import priceUpdater, { PriceFeed, PriceHistory } from '../price-updater';

 interface CandleData {
  time: number;
  close: number;
  open: number;
  high: number;
  low: number;
  volume: number;
}

interface CandleApiResponse {
  bars: CandleData[];
}

class XeggexApi implements PriceFeed {
  public name: string = 'Xeggex';
  public currencies: string[] = ['BIT_USDT'];

  public url: string = 'https://api.xeggex.com/api/v2/market/getbysymbol/';
  public urlHist: string = 'https://api.gemini.com/v2/candles/BTC{CURRENCY}/{GRANULARITY}';

  constructor() {
  }

  public async $fetchPrice(currency): Promise<number> {
    const response = await query(this.url + encodeURIComponent(currency));
//    if (response && response['last']) {
    if (response && response['lastPrice']) {
//      return parseInt(response['last'], 10);
      return parseFloat(response['lastPrice']);
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
  
      const resolution = type === 'hour' ? '15' : '1440'; // '15' for 15 minutes and '1440' for 1 day
      const symbol = encodeURIComponent(currency);
      const countBack = 15;
      const firstDataRequest = 1;
  
      const url = `https://api.xeggex.com/api/v2/market/candles?symbol=${symbol}&resolution=${resolution}&countBack=${countBack}&firstDataRequest=${firstDataRequest}`;
      const response = await query(url) as CandleApiResponse;

      if (response && response.bars) {
        for (const bar of response.bars) {
          const time = Math.round(bar.time / 1000);
          if (priceHistory[time] === undefined) {
            priceHistory[time] = priceUpdater.getEmptyPricesObj();
          }
          priceHistory[time][currency] = bar.close; // Using the 'close' price
        }
      }
    }
  
    return priceHistory;
  }
}

export default XeggexApi;
