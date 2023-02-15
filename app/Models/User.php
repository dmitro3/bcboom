<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Tymon\JWTAuth\Contracts\JWTSubject;
use App\Models\Wallet;
use App\Models\Referral;

class User extends Authenticatable implements JWTSubject
{
    use HasApiTokens, HasFactory, Notifiable;
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'username',
        'admin',
        'referral_token',
        'image',
        'bio',
        'address',
        'referrer_id',
        'player',
        'referral_count',
        'withdrawal_limit',
        'phone',
        'vip',
        'referred_by',
        'first_100_deposit_bonus',
        'second_100_deposit_bonus',
        'third_50_deposit_bonus',
        'fourth_30_deposit_bonus',
        'fifth_20_deposit_bonus',
        'status'
    ];
    public function emails()
    {
        return $this->hasMany(Email::class);
    }

    public function depos()
    {
        return $this->hasMany(Depo::class);
    }

    public function referrer()
    {
        return $this->belongsTo(User::class, 'referrer_id', 'id');
    }


    public function referrals()
    {
        return $this->hasMany(User::class, 'referrer_id', 'id');
    }

    public function wallet()
    {
        return $this->hasOne(Wallet::class);
    }

    // public function referrals(){
    //     return $this->hasMany(Referral::class);
    // }

    public function grantBonus()
    {
        // $wallet = Wallet::where('user_id', '=', $this->id)->first();
        // $referrals = Referral::where('user_id', '=', $wallet->user_id)->get();

        $refs = $this->referrals->count();

        // $walletBonus = 0;
        // if ($wallet) {
        $referral_promotion = [
            'type' => 'Refferral Bonus',
            'status' => 'pending',
            'percentage' => '0',
            'user' => $this->id,
            'username' => $this->username,
        ];
        if ($refs > 0) {
            Promotion::create(array_merge($referral_promotion, ['amount' => 9]));
            //     $walletBonus = $wallet->bonus + 9;

            //     $w = Wallet::updateOrCreate(
            //         ['user_id' => $this->id],
            //         ['bonus' => $walletBonus],
            //         ['withdrawable_balance' => $wallet->withdrawable_balance + $walletBonus]
            //     );
        } else if ($refs > 999) {
            Promotion::create(array_merge($referral_promotion, ['amount' => 10]));
            //     $walletBonus = $wallet->bonus + 10;
            //     $w = Wallet::updateOrCreate(
            //         ['user_id' => $this->id],
            //         ['bonus' => $walletBonus],
            //         ['withdrawable_balance' => $wallet->withdrawable_balance + $walletBonus]
            // );
        } else if ($refs > 1000) {
            Promotion::create(array_merge($referral_promotion, ['amount' => 10]));
            //     $walletBonus = $wallet->bonus + 10;
            //     $w = Wallet::updateOrCreate(
            //         ['user_id' => $this->id],
            //         ['bonus' => $walletBonus],
            // ['withdrawable_balance' => $wallet->withdrawable_balance + $walletBonus]
            //     );
        } else if ($refs > 2999) {
            Promotion::create(array_merge($referral_promotion, ['amount' => 12]));
            //     $walletBonus = $wallet->bonus + 12;
            //     $w = Wallet::updateOrCreate(
            //         ['user_id' => $this->id],
            //         ['bonus' => $walletBonus],
            //         ['withdrawable_balance' => $wallet->withdrawable_balance + $walletBonus]
            //     );
        } else if ($refs > 4999) {
            Promotion::create(array_merge($referral_promotion, ['amount' => 15]));
            //     $walletBonus = $wallet->bonus + 15;
            //     $w = Wallet::updateOrCreate(
            //         ['user_id' => $this->id],
            //         ['bonus' => $walletBonus],
            //         ['withdrawable_balance' => $wallet->withdrawable_balance + $walletBonus]
            //     );
        }

        // } else {

        //     $w = Wallet::create([
        //         'user_id' => $this->id,
        //         'bonus' => 9,
        //         'withdrawable_balance' => $wallet->withdrawable_balance + $walletBonus
        //     ]);

        // }

    }

    public function sumWallet($increase, $decrease, $amount)
    {

        $deposits = $this->wallet->deposit;
        $bets = $this->wallet->bet;
        $bonus = $this->wallet->bonus;
        $totals = $this->wallet->withdrawable_balance;

        if ($totals == 0) {
            $sum = $deposits + $bets + $bonus;
            $this->wallet->update([
                'withdrawable_balance' => $sum
            ]);

        } else {
            if ($increase) {
                $sum = $totals + $amount;
                $this->wallet->update([
                    'withdrawable_balance' => $sum
                ]);
            } elseif ($decrease) {
                $minus = $totals - $amount;
                $this->wallet->update([
                    'withdrawable_balance' => $minus
                ]);
            }
        }
    }

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected $appends = ['referral_link'];

    /**
     * Get the user's referral link.
     *
     * @return string
     */

    public function promoteLevel()
    {
        $wallet = Wallet::where('user_id', $this->id)->first();

        if ($wallet->deposit > 100) {
            $vip = $this->update([
                'vip' => 1
            ]);
            return $vip;
        } elseif ($wallet->deposit > 499) {
            $vip = $this->update([
                'vip' => 2
            ]);
            return $vip;
        } elseif ($wallet->deposit > 1999) {
            $vip = $this->update([
                'vip' => 3
            ]);
            return $vip;
        } elseif ($wallet->deposit > 9999) {
            $vip = $this->update([
                'vip' => 4
            ]);
            return $vip;
        } elseif ($wallet->deposit > 49999) {
            $vip = $this->update([
                'vip' => 5
            ]);
            return $vip;
        } else if ($wallet->deposit > 199999) {
            $vip = $this->update([
                'vip' => 6
            ]);
            return $vip;
        } else if ($wallet->deposit > 199999) {
            $vip = $this->update([
                'vip' => 6
            ]);
            return $vip;
        } else if ($wallet->deposit > 499999) {
            $vip = $this->update([
                'vip' => 7
            ]);
            return $vip;
        } else if ($wallet->deposit > 1499999) {
            $vip = $this->update([
                'vip' => 8
            ]);
            return $vip;
        } else if ($wallet->deposit > 4499999) {
            $vip = $this->update([
                'vip' => 9
            ]);
            return $vip;
        }

        return $this->vip;
    }

    public function getReferralLinkAttribute()
    {
        return $this->referral_link = route('register', ['referral' => $this->username]);
    }

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }
    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }
}