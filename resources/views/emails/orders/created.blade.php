@component('mail::message')
# Order Created

Your Quotation number {{$invoice_no}}, has been created and sent successfully!

@component('mail::button', ['url' => $url='#'])
View Order
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
