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
        Schema::create('promotion_user', function (Blueprint $table) {
            $table->id();
            // $table->primary(['user_id','promotion_id']);
            $table->bigInteger('user_id')->unsigned();
            $table->bigInteger('promotion_id')->unsigned();
            $table->foreign('user_id')
                ->references('id')
                ->on('users');
             $table->foreign('promotion_id')
                ->references('id')
                ->on('promotions');
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
        Schema::dropIfExists('promotion_user');
    }
};
