<?php


namespace App\Http\Controllers;

use Auth;
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


    public function getGames(Request $request): \Illuminate\Http\JsonResponse
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
            'X-Pagination-Per-Page' => '10',
        ];
        $requestParams = [
            'X-Pagination-Per-Page' => '1',
        ];

        $response = Http::pool(function ($pool) use ($headers, $requestParams) {
            foreach (range(1, 133) as $i) { //  133 is the last page
                $pool->withHeaders(array_merge($headers, ['X-Sign' => $this->getSign($headers, array_merge($requestParams, ['page' => $i]))]))->get($this->apiurl . '/games/?' . http_build_query(array_merge($requestParams, ['page' => $i])));
            }
        });
        $all_response = [];
        foreach ($response as $res) {
            $all_response[] = $res->json();
        }
        return response()->json(['responses' => $all_response]);
    }

    public function initGame($name, Request $request): \Illuminate\Http\JsonResponse
    {
        $sesion = $request->bearerToken();
        if (!$sesion) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        $user = Auth::user();
        $ids = ['crash' => 'b30a43429d083579f525b6621e1de4a067a3764d', 'limbo' => '755d9fcf086a46fabe7896f742b0be00', 'double' => '3f66db6b18c245f09318c1a1cc016529'];
        $game_uuid = $ids[$name];
        $merchantId = $this->merchantId;
        $nonce = md5(uniqid(mt_rand(), true));
        $time = time();
        $headers = [
            'X-Merchant-Id' => $merchantId,
            'X-Timestamp' => $time,
            'X-Nonce' => $nonce,
        ];
        $requestParams = [
            'game_uuid' => $game_uuid,
            'currency' => 'EUR',
            'player_id' => strval($user->id),
            'player_name' => $user->username,
            // 'session_id' => $sesion,
            'session_id'  => '123456789',
            // 'return_url' => 'https://www.google.com',
            'email' => $user->email,

        ];
        $sign = $this->getSign($headers, $requestParams);
        $headers['X-Sign'] = $sign;
        $url = $this->apiurl . '/games/init/?' . http_build_query($requestParams);
        // dd($headers, $requestParams, $sign);
        $response = Http::withHeaders($headers)->post($url);
        return response()->json($response->json());
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


//  {
//                     "uuid": "b30a43429d083579f525b6621e1de4a067a3764d",
//                     "name": "Comet crash",
//                     "image": "https://stage.gis-static.com/games/b30a43429d083579f525b6621e1de4a067a3764d.jpeg",
//                     "type": "slots",
//                     "provider": "Jetgames",
//                     "technology": "HTML5",
//                     "has_lobby": 0,
//                     "is_mobile": 1,
//                     "has_freespins": 0,
//                     "has_tables": 0,
//                     "freespin_valid_until_full_day": 0
//                 },



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