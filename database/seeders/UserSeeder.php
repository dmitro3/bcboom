<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        User::create([
            'name' => 'Admin',
            'email' => 'admin@bcboom.com',
            'password' => bcrypt('password'),
            'phone' => '123456',
            'admin' => 1,
            'player' => 0,
            'username' => 'admin',
        ]);
    }
}
