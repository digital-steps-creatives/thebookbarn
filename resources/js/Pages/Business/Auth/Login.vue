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
    })).post(route('signin.vendor'), {
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
    <Head title="Log in" />

    <AuthenticationCard>
        <div class="container my-5">
            <div class="row">
                <div class="col-sm-5">
                    <div class="bg-white p-5 shadow rounded">
                        <h4 class="text-red-600">Welcome back! Login to continue!</h4>
                        
                        <hr>
                        <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
                            {{ status }}
                        </div>
                        <form @submit.prevent="submit">
                            <div>
                                <InputLabel for="email" value="Email" />
                                <TextInput
                                    id="email"
                                    v-model="form.email"
                                    type="email"
                                    class="mt-1 block w-full"
                                    required
                                    autofocus
                                />
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
                                <Link :href="route('password.request')" class="underline text-sm text-gray-600 hover:text-gray-900">
                                    Forgot your password?
                                </Link>
                            </div>
                           
                            
                            <div class="flex items-center justify-end mt-4">
                                <Link :href="route('register.vendor')" class="underline text-sm text-gray-600 hover:text-gray-900">
                                    Don't have an account?
                                </Link>

                                <PrimaryButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                                    Log in
                                </PrimaryButton>
                            </div>
                            
                            <div class="flex justify-content-center">
                                <Link v-if="canResetPassword" :href="route('register')" class="underline text-sm text-gray-600 hover:text-gray-900">
                                   Dont have an Account? Register
                                </Link>
                            </div>
                        </form>
                       

                    </div>
                </div>
                <div class="col-sm-7">
                    <img src="/images/illustration.svg" alt="" class="flex mx-auto">
                </div>
            </div>
        </div>
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