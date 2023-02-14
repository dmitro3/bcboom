<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */

     protected $fillable = ['name', 'game_data', 'type'];

     protected $casts = ['game_data' => 'json'];
    
     public function user(){
        return $this->belongsTo(User::class);
    }
}
