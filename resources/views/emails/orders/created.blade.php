@component('mail::message')
# Order Created

Your Quotation number {{$invoice_no}}, has been created and Vendors/Bookshops notified successfully!

@component('mail::button', ['url' => route('view.order.status', $orderId)])
View Order
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
