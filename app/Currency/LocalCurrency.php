<?php
namespace App\Currency;

use App\Currency\Currency;
use Illuminate\Support\Facades\Cache;

/**
 * Not a cryptocurrency, used alongside with a Aggregator to process payments
 * @package App\Currency\Local
 */
class LocalCurrency
{

    public function tokenPrice()
    {
        if (!Cache::has('exchangeRates'))
            Cache::put('exchangeRates', file_get_contents("https://api.currencyapi.com/v3/latest?apikey=ykWBC7bbO513OGnxq2W8xe4nVhdpZzx8Pi4RZpUR"), now()->addHours(5));

        return json_decode(Cache::get('exchangeRates'), true)['data']['BRL']['value'];
    }

    public function convertFiatToToken(float $usdAmount)
    {
        return $this->tokenPrice() * $usdAmount;
    }

    public function convertTokenToFiat(float $tokenAmount)
    {
        return $tokenAmount / $this->tokenPrice();
    }

}