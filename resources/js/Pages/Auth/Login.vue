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
    })).post(route('login'), {
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
            <div class="row justify-content-center">
                <div class="col-sm-5">
                    <div class="bg-white p-5 shadow rounded">
                        <h4 class="text-primary">Welcome back <br>Login</h4>
                        <hr>
                        <div class="mb-4">
                            <button @click="socialLogingoogle" class="social__auths px-6 py-3 mb-4 mx-auto rounded-md text-decoration-none">
                                <img src="/images/google-logo.png" alt="Log in with Google" width="28" height="28" class="">
                                <span class="text-secondary ml-3 mb-4 text-base font-medium">Log in with Google</span>
                            </button>
                            <button @click="socialLoginfacebook" class="social__auths px-6 py-3 rounded-md text-decoration-none">
                                <img src="/images/facebook-logo.png" alt="Log in with Facebook" width="28" height="28" class="">
                                <span class="text-secondary ml-3 mb-4 text-base font-medium">Log in with Facebook</span>
                            </button>
                        </div>
                        <hr>
                        <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
                            {{ status }}
                        </div>
                        <h5 class="my-4 text-center">or</h5>
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
                                <Link v-if="canResetPassword" :href="route('password.request')" class="underline text-sm text-gray-600 hover:text-gray-900">
                                    Forgot your password?
                                </Link>
                            </div>
                           
                            <div class="flex items-center justify-end mt-4">

                                <PrimaryButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                                    Log in
                                </PrimaryButton>
                            </div>
                            <hr>
                            <div class="flex justify-content-center">
                                <Link v-if="canResetPassword" :href="route('register')" class="underline text-sm text-gray-600 hover:text-gray-900">
                                   Dont have an Account? Register
                                </Link>
                            </div>
                        </form>
                       

                    </div>
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