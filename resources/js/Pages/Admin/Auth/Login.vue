<script setup>
import { Head, Link, useForm } from '@inertiajs/inertia-vue3';
import AuthenticationCard from '@/Layouts/AdminFrontLayout.vue';
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
    })).post(route('admin.post.login'), {
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
        <div>
            <form @submit.prevent="submit" class="p-8 space-y-8 bg-white/50 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-2xl relative filament-breezy-auth-card">
                <div class="w-full flex justify-center">
                    <div class="filament-brand text-xl font-bold tracking-tight">
                        The Book Barn
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