<?php

namespace App\Http\Controllers;

use App\Models\Teacher;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TeacherController extends Controller
{
    public function store(Request $request):JsonResponse{
        $validator = Validator::make($request->all(),[
            'name' => 'required|string|max:255',
            'field' => 'required|string|in:normatif,produktif',
            'mapel' => 'required|string'
        ]);
        if($validator->fails()){
            return response()->json(
                $validator->errors()
            );
        }
        $teacher = Teacher::create([
            'name' => $request->name,
            'field' => $request->field,
            'mapel' => $request->mapel
        ]);
        return response()->json($teacher,201);
    }
}
