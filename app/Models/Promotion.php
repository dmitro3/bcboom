<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Promotion extends Model
{
    use HasFactory;

    protected $table = 'promotions';

    protected $fillable = ['type', 'status', 'amount', 'percentage', 'title', 'eligibility'];

    public function users()
    {
        return $this->belongsToMany(User::class, 'promotion_user')->withTimestamps();
    }
}