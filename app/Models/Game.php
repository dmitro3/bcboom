<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    use HasFactory;

    protected $table = 'games';

    protected $fillable = ['name', 'status', 'bet_amount', 'earning', 'loss', 'player',];


    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
