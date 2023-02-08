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
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->double('amount')->nullable();
            $table->double('pay_amount')->nullable();
            $table->double('percentage_amount')->nullable();
            $table->string('pay_time')->nullable();
            $table->string('order_no')->nullable();
            $table->string('create_time')->nullable();
            $table->string('customer')->nullable();
            $table->string('mobile')->nullable();
            $table->integer('user_id');
            $table->string('email')->nullable();
            $table->double('percentage_amount')->nullable();
            $table->double('final_amount')->nullable();
            $table->string('sign')->nullable();
            $table->string('link')->nullable();
            $table->string('status')->nullable();
            $table->boolean('called')->default(0);
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
        Schema::dropIfExists('payments');
    }
};
