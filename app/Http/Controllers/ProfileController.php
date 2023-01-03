<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use App\Http\Requests\ImageStoreRequest;

class ProfileController extends Controller
{
    public function __construct(){
        return $this->middleware('auth');
    }
    /**
     * Display the user's profile form.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Inertia\Response
     */
    public function edit(Request $request)
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     *
     * @param  \App\Http\Requests\ProfileUpdateRequest  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(ProfileUpdateRequest $request)
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Request $request)
    {
        $request->validate([
            'password' => ['required', 'current-password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }

    public function imageStore(ImageStoreRequest $request){
        $validatedData = $request->validated();
        $validatedData['image'] = $request->file('image')->store('image');

        $user = Auth::user();
        $data = $user->update([
            'image' => $validatedData
        ]);
        if($data){
            return response()->json([
                'message' => 'success',
                'user' => $user
            ], 200);
        }else{
             return response()->json([$data, status => 400, error =>'Image failed']);
        }
    }

    public function updatebio(Request $request){
        if(Auth::check()){
            $request->validate([
                'bio' => ['required', 'string'],
            ]);
    
            $user = Auth::user();
            $user->update([
                'bio' => $request->all()
            ]);
            return response()->json([
                'message' => 'success',
                'user' => $user
            ], 200);
        }else{
            return response()->json([
                'error' => 'not logged in'], 401);
        }
        
    }

    public function updateusername(Request $request){
        if(Auth::check()){
            $request->validate([
                'username' => 'required|string|max:255|unique:users|regex:/^\S*$/u'
            ]);
            
            $user = Auth::user();

            $user->update([
                'username' => $request->all()
            ]);
            return response()->json([
                'message' => 'success',
                'user' => $user
            ], 200);
        }else{
            return response()->json([
                'error' => 'not logged in'], 401);
        }
        
    }

    public function updatephone(Request $request){
        if(Auth::check()){
            $request->validate([
                'password' => 'required',
            ]);
    
            $user = Auth::user();
            $user->update([
                'bio' => $request->all()
            ]);
            return response()->json([
                'message' => 'success',
                'user' => $user
            ], 200);
        }else{
            return response()->json([
                'error' => 'not logged in'], 401);
        }
        
    }
}
