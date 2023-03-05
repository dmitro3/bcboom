<?php


namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class SlotApiController extends Controller
{


    private string $merchantKey = 'd19116479868ffad12c7b63ec2410591a9afe410';
    private string $merchantId = '53a16e61885907f266293d9fa3773700';
    // protected static  object $headers = [
    //     'X-Merchant-Id' => '53a16e61885907f266293d9fa3773700',
    //     'X-Timestamp' => time(),
    //     'X-Nonce' => md5(uniqid(mt_rand(), true)),
    // // ];
    // private $requestParams = [
    //     'game_uuid' => 'abcd12345',
    //     'currency' => 'USD',
    // ];

    private string $apiurl = 'https://staging.slotegrator.com/api/index.php/v1';
    // private  $mergedParams = array_merge($requestParams, $headers);

    // private object $hashString = http_build_query(ksort($mergedParams));
    // private object $XSign = hash_hmac('sha1', $hashString, $merchantKey);

    /**
     * Create a new controller instance.
     *
     * @return void
     */


    public function getGames(Request $request)
    {
        $page = $request->input('page', 1);
        // $provider = $request->input('provider', 1);
        $merchantId = $this->merchantId;
        $nonce = md5(uniqid(mt_rand(), true));
        $time = time();
        $headers = [
            'X-Merchant-Id' => $merchantId,
            'X-Timestamp' => $time,
            'X-Nonce' => $nonce,
        ];
        $requestParams = [
            // 'game_uuid' => 'abcd12345',
            // 'currency' => 'USD',
            'page' => $page,
            'name' => 'Crash',
            'provider' => 'Jetgames',
        ];

        // dd(http_build_query($requestParams));
        $sign = $this->getSign($headers, $requestParams);
        // dd($sign);
        $response = Http::withHeaders(array_merge($headers, ['X-Sign' => $sign]))->get($this->apiurl . '/games/?
        ' . http_build_query($requestParams));
        return $response->json();
    }

    private function getSign($headers, $requestParams)
    {
        $merchantKey = $this->merchantKey;
        $mergedParams = array_merge($headers, $requestParams);
        ksort($mergedParams);
        $hashString = http_build_query($mergedParams);
        $XSign = hash_hmac('sha1', $hashString, $merchantKey);
        return $XSign;
    }

}


// "href": "https://staging.slotegrator.com/api/index.php/v1/games/index?name=crash&page=1"
//     },
//     "first": {
//         "href": "https://staging.slotegrator.com/api/index.php/v1/games/index?name=crash&page=1"
//     },
//     "last": {
//         "href": "https://staging.slotegrator.com/api/index.php/v1/games/index?name=crash&page=133"
//     },
//     "next": {
//         "href": "https://staging.slotegrator.com/api/index.php/v1/games/index?name=crash&page=2"