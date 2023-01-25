<?php namespace App\Paym\Aggregate;

use App\Models\Wallet;
use App\Models\Payment;
use Illuminate\Http\Request;

abstract class Aggregate {

    abstract function wallet(Wallet $wallet): string;

    abstract function payment(Payment $payment): string;

    abstract function status(Request $request): string;

    abstract function validate(Request $request): bool;

    abstract function id(): string;

    abstract function name(): string;

    abstract function supports(): array;

    public static function list(): array {
        return [
            new HpayOneAggregator()
        ];
    }
}