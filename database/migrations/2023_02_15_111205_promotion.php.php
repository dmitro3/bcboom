<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('promotions', function (Blueprint $table) {
            Schema::dropIfExists('promotions');
            $table->id();
            $table->string('title');
            $table->string('eligibility')->nullable();
            $table->string('type')->nullable();
            $table->string('status')->default('active');
            $table->float('amount')->default(0);
            $table->double('percentage')->default(0);
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
        //
        Schema::dropIfExists('promotions');
    }
};