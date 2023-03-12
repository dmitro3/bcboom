<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class ActiveUserActivity
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        return $next($request);
        // if(auth()->check()) {
        //     $expiresAt = \Carbon\Carbon::now()->addMinutes(5);
        //     \Cache::put(
        //         ‘online-users-’ . auth()->user()->id, 
        //         auth()->user(), 
        //         $expiresAt
        //     );
        // }
        // return $next($request);
    }
}
