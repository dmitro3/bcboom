<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
<<<<<<< HEAD
            $table->string('username')->unique();
            $table->string('phone')->nullable();
            $table-text('bio')->nullable();
            $table->string('address')->nullable();
            $table->string('image')->nullable();
            $table->boolean('admin')->default(0);
            $table->string('password');
            $table->rememberToken();
            $table->timestamp('email_verified_at')->nullable();
=======
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
