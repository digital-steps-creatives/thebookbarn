<script setup>
import { Head, Link, useForm } from '@inertiajs/inertia-vue3';
import AuthenticationCard from '@/Layouts/FrontLayout.vue';
import AuthenticationCardLogo from '@/Components/AuthenticationCardLogo.vue';
import Checkbox from '@/Components/Checkbox.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';

defineProps({
    canResetPassword: Boolean,
    status: String,
});

const form = useForm({
    email: '',
    password: '',
    remember_token: false,
});

const submit = () => {
    form.transform(data => ({
        ...data,
        remember_token: form.remember_token ? 'on' : '',
    })).post(route('affiliates.post.signin'), {
        onFinish: () => form.reset('password'),
    });
};
const socialLogingoogle = () => {
    window.location.href = route('google.redirect');
};
const socialLoginfacebook = () => {
    window.location.href = route('facebook.redirect');
};
</script>

<template>
    <Head title="Affiliates Login" />

    <AuthenticationCard>
        <div class="container my-12 py-8">
            <div class="row g-5 align-center">
                <div class="col-sm-5">
                    <form @submit.prevent="submit" class="p-5 bg-white/50 space-y-8 backdrop-blur-xl border border-gray-200 shadow rounded">
                        <div class="w-full">
                            <div class="filament-brand text-xl font-bold tracking-tight">
                               Affiliates Login
                            </div>
                        </div>
                        <div v-if="status" class="my-4 font-medium text-sm text-green-600">
                            {{ status }}
                        </div>
                        <div>
                            <InputLabel for="email" value="Email" />
                            <TextInput id="email" v-model="form.email" type="email" class="mt-1 block w-full" required/>
                            <InputError class="mt-2" :message="form.errors.email" />
                        </div>

                        <div class="mt-4">
                            <InputLabel for="password" value="Password" />
                            <TextInput
                                            id="password"
                                            v-model="form.password"
                                            type="password"
                                            class="mt-1 block w-full"
                                            required
                                            autocomplete="current-password"
                                        />
                            <InputError class="mt-2" :message="form.errors.password" />
                        </div>

                                    <div class="flex items-center justify-between mt-4">
                                        <label class="">
                                            <Checkbox v-model:checked="form.remember_token" name="remember" />
                                            <span class="ml-2 text-sm text-gray-600">Remember me</span>
                                        </label>
                                    
                                    </div>
                                    <div class="flex items-center mt-4">
                                        <PrimaryButton class="w-full text-center block-must" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                                            Sign in
                                        </PrimaryButton>
                                    </div>
                                    <div class="flex items-center mt-4">
                                        <Link :href="route('password.request')" class="text-primary-600 text-center text-decoration-none hover:text-primary-700">
                                            Forgot your password?
                                        </Link>
                                    </div>
                    </form>
                </div>
                <div class="col-sm-7">
                    <img src="/images/illustration.svg" alt="" class="flex mx-auto" />
                    
                </div>
            </div>
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
                                <p>It's a 10% commission on the administration cost for every order purchase and paid for using your unique link/code. For qualifications, check out our terms of service.</p>
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
        <section class="bg-gray-50 py-9">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-6">
                        <p>BECOME AN AFFILIATE</p>
                    <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-green-500 font-bold leading-tight">Sign up fast, for free.</h2>
                    <p>In just a few minutes, you'll have a unique tracking code.</p>
                    <p>Send your unique code to your referrals, once they purchase any item, you earn</p>
                        <Link class="btn btn-primary text-white w-full" :href="route('affiliates.register')">Create an account</Link>
                    </div>
                </div>
            </div>
        </section>
    </AuthenticationCard>
</template>
<style lang="scss" scoped>
.social__auths{
        background: #EDEEF0;
        border-radius: 6px;
        display: block;
        width: 100%;
        &:hover {
            background-color:#35B520;
            span {
                color: #fff !important;
            }
        }
    }
    .social__auths img {
            display: inline;
    }
</style>