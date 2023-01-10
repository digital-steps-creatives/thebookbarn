<?php

namespace App\Enums;

use MyCLabs\Enum\Enum;
/**
 * @method static NotificationType INFO()
 * @method static NotificationType WARNING()
 * @method static NotificationType SUCCESS()
 * @method static NotificationType DANGER()
 */
class NotificationType extends Enum
{
    private const INFO    = 'info';
    private const WARNING = 'warning';
    private const SUCCESS = 'success';
    private const DANGER  = 'danger';
}