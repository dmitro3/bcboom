<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;
    protected $table = 'payments';

    protected $fillable = [
        "amount",
        "pay_amount",
        "order_no",
        "create_time",
        "link",
        "customer",
        "email",
        "mobile",
       "pay_info",
        "tx_order_no",
        "trade_state",
        "pay_type",
        "status",
        "remark",
        "pay_time",
        "user_id"
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
}
