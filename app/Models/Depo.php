<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Depo extends Model
{
    use HasFactory;
    protected $fillable = ['user_id', 'deposit_amount', 'percentage_amount', 'final_amount'];

    public function user(){
        return $this->belongsTo(User::class);
    }


}
