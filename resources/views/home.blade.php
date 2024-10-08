@extends('layouts.app')

@section('content')
    <div class="container">

        @if (Auth::user()->role === 'admin')
            <div id="admin-main"></div>
        @elseif(Auth::user()->role === 'user')
            <div id="main"></div>
        @else
            Unauthorized
        @endif
    </div>
@endsection