<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\ImageStoreRequest;
use Inertia\Inertia;
use Illuminate\Support\Facades\URL;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Inertia\Response
     */

     public function __construct(){
        $this->middleware('auth');
     }

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

    public function imageStore(Request $request){
        $url = route('index');
  if(Auth::check()){
    $request->validate([
        'image' => 'required|image|mimes:jpg,png,jpeg,gif,svg|max:2048',
    ]);
        $user = Auth::user();
        $image = $request->image;
        
        $image_new_name = time() . $image->getClientOriginalName();
        $image->move('uploads/images', $image_new_name);

        $user->image = $url.'/uploads/images/'.$image_new_name;
        $user->save();
        return response()->json([
            'message' => 'success',
             'user' => $user
         ], 200);
    }
    
else{
    return response()->json([
        'message' => 'not logged in',
         'user' => null
     ], 400);
 }
    }
   
    public function updatebio(Request $request){
        dd(Auth::id());
        if(Auth::check()){
            $request->validate([
                'bio' => ['required', 'string'],
            ]);
    
            $user = Auth::user();

            if($user){
            $user->update([
                'bio' => $request->bio
            ]);
            return response()->json([
                'message' => 'success',
                'user' => $user
            ], 200);
        }else{
            return response()->json([
                'error' => 'not found.'], 401);
        }
        
    }else{
        return response()->json([
                   'message' => 'not logged in',
                    'user' => null
                ], 400);
            }

    }

    public function updateusername(Request $request){
        
        if(Auth::check()){
            $request->validate([
                'username' => 'required|string|max:255|unique:users|regex:/^\S*$/u'
            ]);
            
            $user = Auth::user();

            $user->update([
                'username' => $request->username
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
                'phone' => 'required',
            ]);
    
            $user = Auth::user();
            $user->update([
                'phone' => $request->phone
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

    public function updateProfile(Request $request){
        $user = Auth::user();
        $url = route('index');

        if($request->has('image')){
            $request->validate([
                'image' => 'required|image|mimes:jpg,png,jpeg,gif,svg|max:2048',
            ]);
                $user = Auth::user();
                $image = $request->image;
                
                $image_new_name = time() . $image->getClientOriginalName();
                $image->move('uploads/images', $image_new_name);
        
                $user->image = $url.'/uploads/images/'.$image_new_name;
                $user->save();
        } elseif($request->has('bio')){
            $user->update([
                'bio' => $request->bio
            ]);
        }
        
        elseif($request->has('username')){
            $user->update([
                'username' => $request->username 
            ]);
        }

        elseif($request->has('phone')){
            $user->update([
                'phone' => $request->phone
            ]);
        }
        elseif($request->has('phone')){
            $user->update([
                'phone' => $request->phone
            ]);
        }
        elseif($request->has('phone')){
            $user->update([
                'phone' => $request->phone
            ]);
            
        }
        elseif($request->has('phone')){
            $user->update([
                'phone' => $request->phone
            ]);
        }
        return response()->json([
            'message' => 'success',
            'user' => $user
        ], 200);
    }
}