<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('vehicles', function (Blueprint $table) {
            $table->id();
            $table->string('marca');
            $table->string('modelo');
            $table->string('patente')->unique(); //patentes únicas
            $table->integer('anio');
            $table->integer('precio'); //moneda chilena
            //dueño actual, verifica que exista un dueño válido y elimina en cascada si se borra el usuario
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade'); 
            $table->softDeletes(); //función delete 
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vehicles');
    }
};
