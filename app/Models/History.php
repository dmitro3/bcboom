<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class History extends Model
{
    use HasFactory;
    protected $fillable = ['game_id', 'user_id', 'score', 'last_played', 'type'];
    

    public function user(){
        return $this->belongsTo(User::class);
    }
    
    public function game(){
        return $this->belongsTo(Game::class);
    }
}
