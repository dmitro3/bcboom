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
        'referred_by'
    ];
public function emails(){
    return $this->hasMany(Email::class);
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

    public function grantBonus(){
        $wallet = Wallet::where('user_id', '=', $this->id)->first();
        // $referrals = Referral::where('user_id', '=', $wallet->user_id)->get();

        $refs = $this->referrals->count();
        
       
        if($wallet){
            if($refs > 0){
            $walletBonus = $wallet->bonus + 9;
            
            $w = Wallet::updateOrCreate(
                ['user_id' =>  $this->id],
                ['bonus' => $walletBonus],
                ['total' => $wallet->total + $walletBonus]
            );
        }

        else if($refs > 999){
            $walletBonus = $wallet->bonus + 10;
            $w = Wallet::updateOrCreate(
                ['user_id' =>  $this->id],
                ['bonus' => $walletBonus],
                ['total' => $wallet->total + $walletBonus]
            );
        }

        else if($refs > 1000){
            $walletBonus = $wallet->bonus + 10;
            $w = Wallet::updateOrCreate(
                ['user_id' =>  $this->id],
                ['bonus' => $walletBonus],
                ['total' => $wallet->total + $walletBonus]
            );
        }

        else if($refs > 2999){
            $walletBonus = $wallet->bonus + 12;
            $w = Wallet::updateOrCreate(
                ['user_id' =>  $this->id],
                ['bonus' => $walletBonus],
                ['total' => $wallet->total + $walletBonus]
            );
        }

        else if($refs > 4999){
            $walletBonus = $wallet->bonus + 15;
            $w = Wallet::updateOrCreate(
                ['user_id' =>  $this->id],
                ['bonus' => $walletBonus],
                ['total' => $wallet->total + $walletBonus]
            );
        }

        }

    else
    {

        $w = Wallet::create([
            'user_id' =>  $this->id,
            'bonus' => 9,
            'total' => $wallet->total + $walletBonus
            ]);

    }
        
    }

    public function sumWallet($increase, $decrease, $amount){
    
        $deposits = $this->wallet->deposit;
        $bets = $this->wallet->bet;
        $bonus = $this->wallet->bonus;
        $totals = $this->wallet->total;
        
        if($totals == 0){
            $sum = $deposits + $bets + $bonus;
            $user->wallet->update([
                'total' => $sum
            ]);

        }else{
            if($increase)
            {
                 $sum = $total + $amount;
                 $user->wallet->update([
                    'total' => $sum
                 ]);
            }elseif($decrease)
            {
                $minus = $total - $amount;
                $user->wallet->update([
                    'total' => $minus
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

 public function promoteLevel(){
    $wallet = Wallet::where('user_id', $this->id)->first();

    if($wallet->deposit > 999){
     $vip =  $this->update([
            'vip' => 1
        ]);
        return $vip; 
    }
    elseif($wallet->deposit > 1999){
     $vip =  $this->update([
        'vip' => 2    
        ]);
        return $vip;
    }
    elseif($wallet->deposit > 2999){
      $vip = $this->update([
        'vip' => 3 
        ]);
        return $vip;
    }
    elseif($wallet->deposit > 3999){
      $vip = $this->update([
            'vip' => 4
        ]);
        return $vip;
    }
    elseif($wallet->deposit > 4999){
      $vip = $this->update([
            'vip' => 5
        ]);
        return $vip;
    }
    else{
      $vip = $this->update([
            'vip' => 6
        ]);
        return $vip;
    }

    return $this->vip;
 }

public function getReferralLinkAttribute()
{
    return $this->referral_link = route('register', ['referral' => $this->username]);
}

    public function getJWTIdentifier() {
        return $this->getKey();
    }
    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims() {
        return [];
    }    
}

