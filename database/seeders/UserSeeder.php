<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Wallet;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
       $user1 =  User::create([
            'name' => 'Admin',
            'email' => 'admin@bcboom.com',
            'password' => bcrypt('password'),
            'phone' => '123456',
            'admin' => 1,
            'player' => 0,
            'username' => 'admin',
        ]);

       $user2 = User::create([
            'name' => 'Second Admin',
            'email' => 'shw02227@gmail.com',
            'password' => bcrypt('password'),
            'phone' => '90587638',
            'admin' => 1,
            'player' => 0,
            'username' => 'shw02227',
        ]);

        Wallet::create(['user_id' => $user1->id]);
        Wallet::create(['user_id' => $user2->id]);
    }
}
