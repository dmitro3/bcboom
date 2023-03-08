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
            $table->double('amount')->default(0);
            $table->double('pay_amount')->default(0);
            $table->double('percentage_amount')->default(0);
            $table->string('pay_time')->nullable();
            $table->string('order_no')->nullable();
            $table->string('create_time')->nullable();
            $table->string('customer')->nullable();
            $table->string('mobile')->nullable();
            $table->integer('user_id');
            $table->string('email')->nullable();
            $table->double('final_amount')->nullable();
            $table->boolean('rejected')->default(0);
            $table->boolean('approved')->default('0');
            $table->string('sign')->nullable();
            $table->string('link')->nullable();
            $table->string('status')->default('UNDER REVIEW');
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
