<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Promotion extends Model
{
    use HasFactory;

    protected $table = 'promotions';

    protected $fillable = ['type', 'status', 'user', 'amount', 'percentage', 'username'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}