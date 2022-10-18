<script setup>
import AppLayout from '@/Layouts/VendorsLayout.vue';
import Welcome from '@/Components/Welcome.vue';
import { Head, Link, useForm } from '@inertiajs/inertia-vue3';
import { reactive, computed, ref } from 'vue'
import axios from 'axios';
import moment from 'moment'
const props = defineProps({
    order:Object
})
const loading = ref(false);
const quotation = useForm({
    name: props.order?.invoice_no,
    contact: '',
    client: props.order?.customer.name,
    currency:'KES',
    discountRate:0,
    invoiceDate: new moment(props.order.created_date).format('DD-MM-YYYY'),
    taxRate:16,
    items: props.order?.order_items,
    invoiceCurrency: {
        symbol: "KES",
        name: "Kenya Shilling",
        symbol_native: "KES",
        decimal_digits: 2,
        rounding: 0,
        code: "KES",
        name_plural: "Kenya Shillings"
    },
});
const addNewItem = () => {
   quotation.items.push(
        { description: 'Item name', quantity: 0, amount: 0 }
    )
}
const deleteItem = (index) => {
   quotation.items.splice(index, 1)
}
const decimalDigits = (value) => {
    return quotation.invoiceCurrency.symbol + ' ' + Number(value).toFixed(quotation.invoiceCurrency.decimal_digits);
}
const printInvoice = () =>{
    window.print();
}
const adjustTextAreaHeight = (event) => {
    var el = event.target;
    el.style.height = "1px";
     el.style.height = (25+el.scrollHeight)+"px";
}
const subTotal = computed(() => {
    var total =quotation.items.reduce(function(accumulator, item) {
        return accumulator + (item.amount * item.quantity);
    }, 0)
    return total;
})
const discountTotal = computed(() => {
    var total = subTotal.value * (quotation.discountRate / 100);
    return total;
})
const taxTotal = computed(() => {
    var total = (subTotal.value - discountTotal.value) * (quotation.taxRate / 100);
    return total;
})
const grandTotal = computed(() => {
    var total = (subTotal.value - discountTotal.value) + taxTotal.value;
    return total;
})
const acceptQuote = () => {
    loading.value = true;
    let payload = {
        sub_total: subTotal.value,
        grand_total: grandTotal.value,
        total_discount: discountTotal.value,
        order: props.order.id,
        items: props.order.order_items,
    }
    axios.post(route('accept.order.final', payload))
    .then((res) => {
        if(res.data.status ===200)
            {
               localStorage.setItem('orderItemready', JSON.stringify(res.data.order.id))
            }
        loading.value = false;
        window.location.href = route('checkout.order.final')
    });
    
}

</script>

<template>
    <AppLayout :title="order.invoice_no">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Order # {{order.invoice_no}}
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <div id="invoice-app">
                        <div class="header">
                            <div>
                                <h1>Quotation</h1>
                                <p>Created on:  {{quotation.invoiceDate}}</p>
                            </div>
                            <div>
                                <div class="section-spacer">
                                    <p>Quotation #: {{quotation.name}}</p>
                                    <p>Currency: {{quotation.currency}}</p>
                                </div>
                                
                            </div>
                        </div>
                      <hr>
                        <table class="responsive-table">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Book/Item</th>
                                    <th>Price/unite</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tr v-for="(item, index) in quotation.items" :key="index">
                                <td data-label="No">{{ index + 1 }}</td>
                                <td data-label="Item"><input type="text" v-model="item.product.name" /></td>
                                <td data-label="Price/unite"><div class="cell-with-input"><span class="pt-2">{{ quotation.invoiceCurrency.symbol }}</span> <input type="number" min="0" v-model="item.amount" disabled /></div></td>
                                <td data-label="Quantity"><input type="number" min="0" v-model="item.quantity" /></td>
                                <td data-label="Total">{{ decimalDigits(item.amount  * item.quantity) }}</td>
                                <td class="text-right"><button class="btn btn-danger btn-sm" v-on:click="deleteItem(index)">Delete item</button></td>
                            </tr>
                        </table>
                       
                        <table>
                            <tr>
                                <td>Sub Total</td>
                                <td>{{ decimalDigits(subTotal) }}</td>
                            </tr>
                            <tr>
                                <td><div class="cell-with-input">Discount <input class="text-right" type="number" min="0" max="100" v-model="quotation.discountRate" />%</div></td>
                                <td>{{ decimalDigits(discountTotal) }}</td>
                            </tr>
                            <tr>
                                <td><div class="cell-with-input">Tax <input class="text-right" type="number" min="0" max="100" v-model="quotation.taxRate" />%</div></td>
                                <td>{{ decimalDigits(taxTotal) }}</td>
                            </tr>
                            <tr class="text-bold">
                                <td><strong>Grand Total</strong></td>
                                <td>{{ decimalDigits(grandTotal) }}</td>
                            </tr>
                        </table>
                       <hr>
                        
                       <div class="flex w-full justify-end">
                        <button @click="acceptQuote" class="text-decoration-none px-6 py-3 hover:bg-green-400 font-semibold rounded-md bg-gray-600 text-white">
                            <div class="spinner-border" role="status" v-if="loading">
                                <span class="visually-hidden">Please wait, Loading...</span>
                            </div>
						    <span v-else>Accept Quotation</span>	
                        </button>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
<style lang="scss">
$red: #ff5f6d;
$yellow: #ffc371;
$green: #81cf71;
$white: #fff;
$grey:  darken($white, 10%);
#invoice-app {
    background-color: $white;
    padding: 2rem;
    border-radius: 0.5rem;
}

.header {
    @media (min-width: 761px) {
        display: flex;
    }

    > div {
        &:nth-child(-n+1){
            @media (min-width: 761px) {
                order: 1;
                flex: 1;
                text-align: right;
                padding-left: 1rem;
            }
        }
    }
}

.section-spacer {
    margin: 1rem 0;
}

input, select, textarea {
    background-color: #f1f1f1;
    border: 2px solid #ddd;
    display: inline-block;
    transition: background-color 0.3s ease-in-out;
    width: 100%;
    border-radius: 0.5rem !important;
    &:focus {
        outline-color: $yellow;
        background-color: transparentize($color: white, $amount: 0.4);
    }

    &:hover {
        background-color: transparentize($color: white, $amount: 0.5);
    }

    @media print {
        background-color: transparent;
    }

    @media only screen and (min-width: 761px) {
        width: auto;
    }
}

textarea {
    width: 100%;
    min-height: 80px;
}

select {
    @media 
    only screen and (max-width: 760px) {
        width: 100%;
    }

    @media print {
        appearance: none;
    }
}

.company-name {
    font-size: 2rem;
}

table{
    width: auto; 
    border-collapse: collapse; 
    margin: 2rem 0;
    
    thead{
        th {
            padding: 0.5rem 1rem;

            &:nth-child(-n+1){
                padding-left: 0;
            }
            &:nth-last-child(-n+1){
                padding-right: 0;
            }
        }
    }
    
    tr { 
        border-bottom: 1px solid $grey;

        td {
            padding: 0.5rem 1rem;

            &:nth-child(-n+1){
                padding-left: 0;
            }
            &:nth-last-child(-n+1){
                padding-right: 0;
            }

            input {
                width: 100%;
                border-radius: 0.5rem;
            }

            .cell-with-input {
                display: flex;

                input {
                    margin: 0 0.2rem;
                    border-radius: 0.5rem;
                }
            }
        }
    }
}

.responsive-table {
    width: 100%;
    @media 
    only screen and (max-width: 760px) {

        table, thead, tbody, th, td, tr { 
            display: block; 
        }

        thead tr { 
            position: absolute;
            top: -9999px;
            left: -9999px;
        }

        tr {
            padding: 2rem 0;
        }

        
        td[data-label] {
            position: relative;
            padding-left: 40%; 
            display: flex;
            align-items: center;

            &:before { 
                content: attr(data-label);
                position: absolute;
                top: 0.5rem;
                left: 0;
                width: 35%; 
                padding-right: 10px; 
                white-space: nowrap;
                font-weight: bold;
            }
        }
    }
}

.text-right {
    text-align: right;
}

</style>