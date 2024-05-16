<?php

namespace App\Http\Controllers;

use App\Models\Code;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class CodeController extends Controller
{
    //
   public function promotion(Request $request)
{
    try {
        // Verificar si el usuario ya tiene el código para esta oferta
        $existingCode = Code::where('user_id', $request->user_id)
                            ->where('offer_id', $request->offer_id)
                            ->first();

        if ($existingCode) {
            // El usuario ya tiene este código, no permitir obtener la oferta nuevamente
            return response()->json(['message' => 'User already has this offer'], 409);
        }

        // Crear el código
        $code = Code::create([
            'code' => $request->code,
            'user_id' => $request->user_id,
            'offer_id' => $request->offer_id,
            'redeemed' => false,
        ]);

        return response()->json(['message' => 'Code created successfully', 'code' => $code], 201);
    } catch (ValidationException $e) {
        return response()->json(['message' => 'Validation error', 'errors' => $e->errors()], 422);
    } catch (\Exception $e) {
        return response()->json(['message' => 'Error creating code', 'error' => $e->getMessage()], 500);
    }
}

    public function list (Request $request){

        $user = Auth::user();

        // Obtener solo los códigos del usuario autenticado
        $codes = Code::where('user_id', $user->id)->get();

        // Devolver los códigos en formato JSON
        return response()->json($codes);
  }

  public function redeem(Request $request, $codeId)
  {
    $code = Code::find($codeId);

        if (!$code) {
            return response()->json(['error' => 'Code not found'], 404);
        }

        if (!$code->redeemed) {
            // Actualiza el estado a true solo si actualmente está en false
            $code->update(['redeemed' => true]);
            return response()->json(['message' => 'Code redeemed successfully'], 200);
        } else {
            return response()->json(['message' => 'Code has already been redeemed'], 200);
        }
  }

  public function getCodeRedeemedStatus($codeId)
{
    try {
        $code = Code::findOrFail($codeId);
        return response()->json(['redeemed' => $code->redeemed], 200);
    } catch (\Exception $e) {
        return response()->json(['error' => 'Code not found'], 404);
    }
}


}
