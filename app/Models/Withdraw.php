<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Withdraw extends Model
{
    use HasFactory;
    protected $fillable = [
        "initial_amount",
        "final_amount",
        "withdrawal_fee",
        "amount",
        "orderno",
        "tx_orderno",
        "create_time",
        "username",
        "bankname",
        "bankcard",
        "trade_state",
        "approved",
        "rejected",
        'user_id',
        'taxi',
        'pixkey',
        'pixtype',
        'taxi',
        'cpf',
        "whatsapp",
        "approved",
        "status",
        'withdrawal_fee'
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}