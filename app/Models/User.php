<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use App\Models\Game;
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
        'eligibility',
        'new_user',
        'other_bonus',
        'vip',
        'first_withdrawal_bonus',
        'other_withdrawal_bonus',
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
    public function promotions()
    {
        return $this->belongsToMany(Promotion::class, 'promotion_user')->withTimestamps();
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

                $promotion = Promotion::where('type', 'referral_bonus')
                ->orderBy('created_at', 'desc')->first();
        
                // Promotion::create(array_merge($referral_promotion, ['amount' => 9]));
        
                if($promotion){
        if($promotion->status == 'active'){
        if ($refs > 0) {
                

                $walletBonus = $wallet->bonus + $promotion->amount;
                
                $w = Wallet::updateOrCreate(
                    ['user_id' => $this->id],
                    ['bonus' => $walletBonus],
                    ['withdrawable_balance' => $wallet->withdrawable_balance + $walletBonus]
                );

        } else if ($refs > 999) {
            $walletBonus = $wallet->bonus + 10;
                
                $w = Wallet::updateOrCreate(
                    ['user_id' => $this->id],
                    ['bonus' => $walletBonus],
                    ['withdrawable_balance' => $wallet->withdrawable_balance + $walletBonus]
                );

            
        } else if ($refs > 2999) {
            // Promotion::create(array_merge($referral_promotion, ['amount' => 12]));
            // //     $walletBonus = $wallet->bonus + 12;
            // //     $w = Wallet::updateOrCreate(
            // //         ['user_id' => $this->id],
            // //         ['bonus' => $walletBonus],
            // //         ['withdrawable_balance' => $wallet->withdrawable_balance + $walletBonus]
            // //     );

            $walletBonus = $wallet->bonus + 12;
                
                $w = Wallet::updateOrCreate(
                    ['user_id' => $this->id],
                    ['bonus' => $walletBonus],
                    ['withdrawable_balance' => $wallet->withdrawable_balance + $walletBonus]
                );


        } else if ($refs > 4999) {
            // Promotion::create(array_merge($referral_promotion, ['amount' => 15]));
            // //     $walletBonus = $wallet->bonus + 15;
            // //     $w = Wallet::updateOrCreate(
            // //         ['user_id' => $this->id],
            // //         ['bonus' => $walletBonus],
            // //         ['withdrawable_balance' => $wallet->withdrawable_balance + $walletBonus]
            // //     );

            $walletBonus = $wallet->bonus + 15;
                
                $w = Wallet::updateOrCreate(
                    ['user_id' => $this->id],
                    ['bonus' => $walletBonus],
                    ['withdrawable_balance' => $wallet->withdrawable_balance + $walletBonus]
                );

            }
        
        }

    }
    else{
        return response()->json([
            'message' => 'Promotion Paused'
        ]);
    }
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

        //Pluck also be used to go further to get the specific field: bet_amount;

        if ($wallet->deposit > 99 && $wallet->bet > 799) {
            $vip = $this->update([
                'vip' => 1
            ]);
            return $vip;
        } elseif ($wallet->deposit > 499 && $wallet->bet > 3999) {
            $vip = $this->update([
                'vip' => 2
            ]);
            return $vip;
        } elseif ($wallet->deposit > 1999 && $wallet->bet > 15999) {
            $vip = $this->update([
                'vip' => 3
            ]);
            return $vip;
        } elseif ($wallet->deposit > 9999 && $wallet->bet > 79999) {
            $vip = $this->update([
                'vip' => 4
            ]);
            return $vip;
        } elseif ($wallet->deposit > 49999 && $wallet->bet > 399999) {
            $vip = $this->update([
                'vip' => 5
            ]);
            return $vip;
        } else if ($wallet->deposit > 199999 && $wallet->bet > 1199999) {
            $vip = $this->update([
                'vip' => 6
            ]);
            return $vip;
        } else if ($wallet->deposit > 199999 && $wallet->bet > 2999999) {
            $vip = $this->update([
                'vip' => 6
            ]);
            return $vip;
        } else if ($wallet->deposit > 499999 && $wallet->bet > 5999999) {
            $vip = $this->update([
                'vip' => 7
            ]);
            return $vip;
        } else if ($wallet->deposit > 1499999 && $wallet->bet > 19999999) {
            $vip = $this->update([
                'vip' => 8
            ]);
            return $vip;
        } else if ($wallet->deposit > 4499999 && $wallet->bet > 39999999) {
            $vip = $this->update([
                'vip' => 9
            ]);
            return $vip;
        }

        return $this->vip;
    }

    public function run_promotions($amount)
    {
        $user = $this;
        // $deposit_counts = Payment::where('user_id', $user->id)->count();
        
        $user_promos = $this->promotions;

        $getIds = $user_promos->pluck('id');
        
       $promotion = Promotion::whereNotIn('id', $getIds)
       ->where('eligibility', 'new_user')
       ->first();
        
        if($promotion->status == 'active'){
        
            $percentage = $promotion->percentage/100 * $amount;
            
            $wallet = $this->wallet;

            $wallet->update([
                'bonus' => $wallet->bonus + $percentage,
                'withdrawable_balance' => $wallet->withdrawable_balance + $percentage
            ]);

            $user->promotions()->attach($promotion->id);
            $user->update([
                'new_user' => 0,
                'eligibility' => 'first_100_deposit_bonus'
            ]);
        
    }
        
        if ($user->first_100_deposit_bonus == 0 && $amount >= 500 && $amount <= 50000) {
            
            $promotion = Promotion::whereNotIn('id', $getIds)
       ->where('type', 'deposit')
       ->where('eligibility','first_100_deposit_bonus')
       ->first();

        if($promotion->status == 'active'){
            
           $percentage = $promotion->percentage / 100 * $amount;
            
            $wallet = $user->wallet;

                $wallet->update([
                    'bonus' => $wallet->bonus + $percentage,
                    'withdrawable_balance' => $wallet->withdrawable_balance + $percentage
                ]);
            
                $user->promotions()->attach($promotion->id);

            $user->update([
                'first_100_deposit_bonus' => 1,
                'eligibility' => 'second_100_deposit_bonus'
            ]);
        }

        } else if ($user->second_100_deposit_bonus === 0 && $amount >= 500 && $amount <= 40000) {
            
            $promotion = Promotion::whereNotIn('id', $getIds)
            ->where('type', 'deposit')
            ->where('eligibility', 'second_100_deposit_bonus')
            ->first();
    
            if($promotion->status == 'active'){
            
                $percentage = $promotion->percentage / 100 * $amount;
                 
                 $wallet = $user->wallet;
     
                     $wallet->update([
                         'bonus' => $wallet->bonus + $percentage,
                         'withdrawable_balance' => $wallet->withdrawable_balance + $percentage
                     ]);
                 $user->promotions()->attach($promotion->id);
                 $user->update([
                     'second_100_deposit_bonus' => 1,
                     'eligibility' => 'third_50_deposit_bonus'
                 ]);
             }
     
            
        } else if ($user->third_50_deposit_bonus === 0 && $amount >= 1000 && $amount <= 30000) {
            $promotion = Promotion::whereNotIn('id', $getIds)
            ->where('type', 'deposit')
            ->where('eligibility', $this->eligibility)
            ->orWhere('eligibility', 'third_50_deposit_bonus')
            ->first();
    
            if($promotion->status == 'active'){
            
                $percentage = $promotion->percentage / 100 * $amount;
                 
                 $wallet = $user->wallet;
     
                     $wallet->update([
                         'bonus' => $wallet->bonus + $percentage,
                         'withdrawable_balance' => $wallet->withdrawable_balance + $percentage
                     ]);
                 
                     $user->promotions()->attach($promotion->id);

                 $user->update([
                     'third_50_deposit_bonus' => 1,
                     'eligibility' => 'fourth_30_deposit_bonus'
                 ]);
             }
     
        } else if ($user->fourth_30_deposit_bonus === 0 && $amount >= 2000 && $amount <= 20000) {
            $promotion = Promotion::whereNotIn('id', $getIds)
            ->where('type', 'deposit')
            ->where('eligibility', $this->eligibility)
            ->orWhere('eligibility', 'fourth_30_deposit_bonus')
            ->first();
    
            if($promotion->status == 'active'){
            
                $percentage = $promotion->percentage / 100 * $amount;
                 
                 $wallet = $user->wallet;
     
                     $wallet->update([
                         'bonus' => $wallet->bonus + $percentage,
                         'withdrawable_balance' => $wallet->withdrawable_balance + $percentage
                     ]);
                 
                 $user->update([
                     'fourth_30_deposit_bonus' => 1,
                     'eligibility' => 'fifth_20_deposit_bonus'
                 ]);
             }

        } else if ($user->fifth_20_deposit_bonus === 0 && $amount >= 3000 && $amount <= 10000) {
            $promotion = Promotion::whereNotIn('id', $getIds)
            ->where('type', 'deposit')
            ->where('eligibility', $this->eligibility)
            ->orWhere('eligibility', 'fifth_20_deposit_bonus')
            ->first();
    
            if($promotion->status == 'active'){
            
                $percentage = $promotion->percentage / 100 * $amount;
                 
                 $wallet = $user->wallet;
     
                     $wallet->update([
                         'bonus' => $wallet->bonus + $percentage,
                         'withdrawable_balance' => $wallet->withdrawable_balance + $percentage
                     ]);
                 $user->promotions()->attach($promotion->id);
                 $user->update([
                     'fifth_20_deposit_bonus' => 1,
                     'eligibility' => 'other_bonus'
                 ]);
             }

        }

        else if ($user->other_bonus === 0 && $amount >= 10000) {
            $promotion = Promotion::whereNotIn('id', $getIds)
            ->where('type', 'deposit')
            ->where('eligibility', $this->eligibility)
            ->orWhere('eligibility', 'other_bonus')
            ->first();
    
            if($promotion->status == 'active'){
            
                $percentage = $promotion->percentage / 100 * $amount;
                 
                 $wallet = $user->wallet;
     
                     $wallet->update([
                         'bonus' => $wallet->bonus + $percentage,
                         'withdrawable_balance' => $wallet->withdrawable_balance + $percentage
                     ]);
                 $user->promotions()->attach($promotion->id);
                 $user->update([
                     'other_bonus' => 1,
                     'eligibility' => 'other_bonus'
                 ]);
             }

        }
    
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