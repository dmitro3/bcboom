<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Withdraw extends Model
{
    use HasFactory;
    protected $fillable = [
        "amount",
        "orderno",
        "tx_orderno",
        "create_time",
        "username",
        "bankname",
        "bankcard",
        "trade_state",
        'user_id',
        "approved",
        "status",
    ];
    public function user(){
        return $this->belongsTo(User::class);
    }
}
