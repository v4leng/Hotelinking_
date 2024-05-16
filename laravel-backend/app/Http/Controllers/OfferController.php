<?php

namespace App\Http\Controllers;

use App\Models\Offer;
use Illuminate\Http\Request;

class OfferController extends Controller
{
    //
    public function List (Request $request){

        // Obtener todas las ofertas de la base de datos
        $offers = Offer::all();

        return response()->json($offers, 200);
  }
}
