<?php

namespace App\Actions;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Lorisleiva\Actions\Concerns\AsAction;

class GetForecast
{
    use AsAction;

    public function __invoke(Request $request)
    {
        $city = $request->query('city', 'Denpasar');

        $response = Http::get('https://api.openweathermap.org/data/2.5/forecast', [
            'q' => $city,
            'appid' => env('OPENWEATHER_KEY'),
            'units' => 'metric',
        ]);

        if ($response->failed()) {
            return response()->json(['error' => 'Failed to fetch forecast data.'], 500);
        }

        return $response->json();
    }
}
