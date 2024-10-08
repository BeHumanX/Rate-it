<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Teacher extends Model
{
    use HasFactory;
    public $table = 'teachers';
    protected $fillable = [
        'id','name','field','mapel','rating','total_ratings','sum_ratings'
    ];
}
