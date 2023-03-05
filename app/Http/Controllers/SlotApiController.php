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

    private string $apiurl = 'https://staging.slotegrator.com/api/index.php/v1/games?page=2';
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
        $merchantId = $this->merchantId;
        $merchantKey = $this->merchantKey;
        $nonce = md5(uniqid(mt_rand(), true));
        $time = time();
        $headers = [
            'X-Merchant-Id' => $merchantId,
            'X-Timestamp' => $time,
            'X-Nonce' => $nonce,
        ];
        $requestParams = [
            // 'page' => $page,
        ];
        $sign = $this->getSign($headers, $requestParams);

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $this->apiurl);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);
        curl_setopt(
            $ch,
            CURLOPT_HTTPHEADER,
            array(
                'X-Merchant-Id: ' . $merchantId,
                'X-Timestamp: ' . $time,
                'X-Nonce: ' . $nonce,
                'X-Sign: ' . $sign,
                'Accept: application/json',
                'Enctype: application/x-www-form-urlencoded',
            )
        );
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $result = curl_exec($ch);
        var_dump($result);
    }

    private function getSign($headers, $requestParams)
    {
        $merchantKey = $this->merchantKey;
        $mergedParams = array_merge($requestParams, $headers);
        ksort($mergedParams);
        $hashString = http_build_query($mergedParams);
        $XSign = hash_hmac('sha1', $hashString, $merchantKey);
        return $XSign;
    }

}


//curl_setopt($ch, CURLOPT_POST, 1);
// curl_setopt(
//     $ch,
//     CURLOPT_HTTPHEADER,
//     array(
//         'X-Merchant-Id: ' . $merchantId,
//         'X-Timestamp: ' . $time,
//         'X-Nonce: ' . $nonce,
//         'X-Sign: ' . $XSign,
//         'Accept: application/json',
//         'Enctype: application/x-www-form-urlencoded',
//     )
// );

// var_dump($result);