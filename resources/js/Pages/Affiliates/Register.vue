<script setup>
import { Head, Link, useForm } from '@inertiajs/inertia-vue3';
import AuthenticationCard from '@/Layouts/FrontLayout.vue';
import AuthenticationCardLogo from '@/Components/AuthenticationCardLogo.vue';
import Checkbox from '@/Components/Checkbox.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { ref } from '@vue/runtime-core';

const form = useForm({
    name: '',
    contact_name:'',
    role:'',
    address:'',
    email: '',
    password: '',
    password_confirmation: '',
    terms: false,
});
const showModal = ref(false);
const termsAgreed = ref(false);

const submit = () => {
    form.post(route('affiliates.post.signup'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
const acceptTerms = () => {
	termsAgreed.value= true;
    form.terms = true;
    showModal.value= false;
};
const rejectTerms = () => {
	termsAgreed.value = false;
	showModal.value= false;
    form.terms = false;
};
</script>

<template>
    <Head title="Register" />

    <AuthenticationCard>
        <div class="container my-5">
            <div class="row">
                <div class="col-sm-5">
                    <div class="bg-white p-5 shadow rounded">
                        <h4 class="text-red-600 mb-3"> The Book Barn | Affiliates Registration</h4>
                        <hr>
                        <form @submit.prevent="submit">
                            <div>
                                <InputLabel for="name" value="Name" />
                                <TextInput
                                    id="name"
                                    v-model="form.name"
                                    type="text"
                                    class="mt-1 block w-full"
                                    required
                                    autofocus
                                    autocomplete="name"
                                />
                                <InputError class="mt-2" :message="form.errors.name" />
                            </div>

                            <div class="mt-4">
                                <InputLabel for="email" value="Email" />
                                <TextInput
                                    id="email"
                                    v-model="form.email"
                                    type="email"
                                    class="mt-1 block w-full"
                                    required
                                />
                                <InputError class="mt-2" :message="form.errors.email" />
                            </div>
                            <div class="mt-4">
                                <InputLabel for="contact_name" value="Mpesa cellphone" />
                                <TextInput
                                    id="contact_name"
                                    v-model="form.contact_name"
                                    type="text"
                                    class="mt-1 block w-full"
                                    required
                                    autofocus
                                    autocomplete="contact_name"
                                />
                                <InputError class="mt-2" :message="form.errors.contact_name" />
                            </div>
                            <div class="mt-4">
                                <InputLabel for="address" value="Address" />
                                <TextInput
                                    id="address"
                                    v-model="form.address"
                                    type="text"
                                    class="mt-1 block w-full"
                                    required
                                    autofocus
                                    autocomplete="address"
                                />
                                <InputError class="mt-2" :message="form.errors.address" />
                            </div>

                            <div class="mt-4">
                                <label for="" class="block font-medium text-sm text-gray-700 mb-2">
                                    <span>Choose type of Account</span>
                                </label>
                                <ul class="grid gap-6 w-full md:grid-cols-2" style="padding-left:0;">
                                    <li>
                                        <input type="radio" id="role__teacher" name="role" value="teacher" v-model="form.role" class="hidden peer" required>
                                        <label for="role__teacher" class="inline-flex justify-between items-center border-2 p-3 w-full text-gray-500 rounded-lg border-gray-200 cursor-pointer  peer-checked:border-green-600 peer-checked:text-green-600 hover:text-gray-600 hover:bg-gray-200 ring-green-600">                           
                                            <div class="block">
                                                <div class="w-full text-sm font-semibold">Teacher</div>
                                                
                                            </div>
                                            <svg aria-hidden="true" class="ml-3 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="radio" id="role__other" name="role" value="other" v-model="form.role" class="hidden peer">
                                        <label for="role__other" class="inline-flex justify-between items-center border-2 p-3 w-full text-gray-500 rounded-lg  border-gray-200 cursor-pointer  peer-checked:border-green-600 peer-checked:text-green-600 hover:text-gray-600 hover:bg-gray-100">
                                            <div class="block">
                                                <div class="w-full text-sm font-semibold">Other</div>
                                                
                                            </div>
                                            <svg aria-hidden="true" class="ml-3 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        </label>
                                    </li>
                                </ul>
                               
                            </div>

                            <div class="mt-4">
                                <InputLabel for="password" value="Password" />
                                <TextInput
                                    id="password"
                                    v-model="form.password"
                                    type="password"
                                    class="mt-1 block w-full"
                                    required
                                    autocomplete="new-password"
                                />
                                <InputError class="mt-2" :message="form.errors.password" />
                            </div>

                            <div class="mt-4">
                                <InputLabel for="password_confirmation" value="Confirm Password" />
                                <TextInput
                                    id="password_confirmation"
                                    v-model="form.password_confirmation"
                                    type="password"
                                    class="mt-1 block w-full"
                                    required
                                    autocomplete="new-password"
                                />
                                <InputError class="mt-2" :message="form.errors.password_confirmation" />
                            </div>

                            <div v-if="$page.props.jetstream.hasTermsAndPrivacyPolicyFeature" class="mt-4">
                                <InputLabel for="terms">
                                    <div class="flex items-center">
                                        <Checkbox id="terms" v-model:checked="form.terms" name="terms" required />

                                        <div class="ml-2">
                                            I agree to the <a target="_blank" :href="route('terms.show')" class="underline text-sm text-gray-600 hover:text-gray-900">Terms of Service</a> and <a target="_blank" :href="route('policy.show')" class="underline text-sm text-gray-600 hover:text-gray-900">Privacy Policy</a>
                                        </div>
                                    </div>
                                    <InputError class="mt-2" :message="form.errors.terms" />
                                </InputLabel>
                            </div>
                            <div class="flex items-center mt-4">
                                <input id="termsconditions" type="checkbox" v-model="form.terms" @change="showModal = true" class="w-4 h-4 text-green-600 bg-gray-100 rounded border-gray-300 focus:ring-green-500 focus:ring-2 dark:bg-gray-700">
                                <label for="termsconditions" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree to the <a href="#" class="text-green-600 hover:underline dark:text-green-500">terms and conditions</a>.</label>
                            </div>
                            <div class="flex items-center justify-end mt-4">
                                <Link :href="route('affiliates.landing')" class="underline text-sm text-gray-600 hover:text-gray-900">
                                    Already have an account?
                                </Link>

                                <PrimaryButton class="ml-4" :class="{ 'opacity-25':  form.processing }" :disabled="form.processing || !termsAgreed">
                                    Register
                                </PrimaryButton>
                            </div>
                        </form>
                        </div>
                </div>
                <div class="col-sm-7">
                    <img src="/images/illustration.svg" alt="" class="flex mx-auto">
                </div>
            </div>
            <div class="container">
                <div v-if="showModal" id="defaultModal" tabindex="-1" class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
                    <div class="relative p-4 w-full max-w-2xl h-full md:h-auto mx-auto">
                        <!-- Modal content -->
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <!-- Modal header -->
                            <div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                    Terms of Service
                                </h3>
                                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    <span class="sr-only">Close modal</span>
                                </button>
                            </div>
                            <!-- Modal body -->
                            <div class="p-6 space-y-6">
                                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                                </p>
                                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                                </p>
                            </div>
                            <!-- Modal footer -->
                            <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                                <button @click="acceptTerms" type="button" id="accept__terms" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">I accept</button>
                                <button @click="rejectTerms" type="button" id="reject__terms" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
        <section class="bg-green-100 py-5">
            <div class="container ">
                <div class="row">
                    <h2 class="text-center mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-green-600 font-bold leading-tight">FAQs</h2>
                    <div class="col-12">
                        <div class="row mb-4">
                            <div class="col-sm-4">
                                <h4>What's the affiliate program?</h4>
                            </div>
                            <div class="col-sm-8">
                                <p>We offer commission for each qualified referral who signs up and makes a purchase of any of our products through their affiliate link.</p>
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-sm-4">
                                <h4>How much will I get paid?</h4>
                            </div>
                            <div class="col-sm-8">
                                <p>It's a 10% commission for every order purchase and paid for using your unique link. For qualifications, check out our terms of service.</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-4">
                                <h4>How will I get paid?</h4>
                            </div>
                            <div class="col-sm-8">
                                <p>We pay commissions through Mpesa instant when we receive a payment from your referral.</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    </AuthenticationCard>
</template>
