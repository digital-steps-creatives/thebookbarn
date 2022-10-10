<?php

namespace App\Enums;

use MyCLabs\Enum\Enum;

/**
 * @method static OrderStatus PENDING()
 * @method static OrderStatus APPROVED()
 * @method static OrderStatus PROCESSING()
 * @method static OrderStatus SHIPPED()
 * @method static OrderStatus DELIVERED()
 * @method static OrderStatus CANCELED()
 */
class OrderStatus extends Enum
{
    public const PENDINGPAYMENT    = 'pending payment';
    public const WAITINGQUOTATIONS = 'waiting quotations from vendors';
    public const APPROVED   = 'approved';
    public const PENDINGCUSTOMER = 'pending acceptance';
    public const PROCESSING = 'processing';
    public const SHIPPED    = 'shipped';
    public const DELIVERED  = 'delivered';
    public const REJECTED   = 'rejected';
    public const CANCELED   = 'canceled';
}
