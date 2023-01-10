<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Tymon\JWTAuth\Contracts\JWTSubject;
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
        'image',
        'bio',
        'address',
        'referrer_id',
        'phone',
        'vip',
        'referred_by'
    ];

    public function referrer()
{
    return $this->belongsTo(User::class, 'referrer_id', 'id');
}


// public function referrals()
// {
//     return $this->hasMany(User::class, 'referrer_id', 'id');
// }

    public function wallet()
    {
        return $this->hasOne(Wallet::class);
    }
    
    public function referrals(){
        return $this->hasMany(Referral::class);
    }

    public function makeVip(){
        $reffs = Referral::where('user_id', '=', $this->id)->get();
        
        if($reffs->count() == 6){
            $this->update([
                'vip' => 6
            ]);
        }else if($reffs->count() == 12){
            $this->update([
                'vip' => 12
            ]);
        }else if($reffs->count() == 24){
            $this->update([
                'vip' => 24
            ]); //
        }
        else{
            return false;
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
public function getReferralLinkAttribute()
{
    return $this->referral_link = route('registerapi', ['ref' => $this->username]);
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

