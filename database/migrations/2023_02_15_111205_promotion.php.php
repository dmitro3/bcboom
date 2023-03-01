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
            $table->string('eligibility');
            $table->string('type')->nullable();
            $table->string('status')->default('active');
            $table->decimal('amount')->default(0);
            $table->decimal('percentage')->default(0);
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