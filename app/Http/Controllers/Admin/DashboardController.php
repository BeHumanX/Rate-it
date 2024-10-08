<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Teacher;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function teachers(): JsonResponse{
        $teachers = Teacher::all();
        return response()->json($teachers);
    }
}
