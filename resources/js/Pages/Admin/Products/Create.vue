<script setup>
import AppLayout from '@/Layouts/AdminLayout.vue';
import Welcome from '@/Components/Welcome.vue';
import Checkbox from '@/Components/Checkbox.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/inertia-vue3';
import { Table } from "@protonemedia/inertiajs-tables-laravel-query-builder";
import { ref } from '@vue/runtime-core';

const props =defineProps({
    classes:Object,
    subjects:Object
})
const photoInput = ref(null);
const photoPreview = ref(null);
const form = useForm({
    name: null,
    subject_id:null,
    class_level_id:null,
    product_type:null,
    featured_image:'/images/dummy_product.png',
    availability:null,
    category:null,
    status:null,
    _method: 'POST',
})
const previewImage=(e)=> {
            const file = e.target.files[0];
            form.featured_image = URL.createObjectURL(file);
        }
const updatePhotoPreview = () => {
    const photo = photoInput.value.files[0];
    if (! photo) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        photoPreview.value = e.target.result;
    };
    reader.readAsDataURL(photo);
};
const selectNewPhoto = () => {
    photoInput.value.click();
};
const createProduct = () => {
    if (photoInput.value) {
        form.featured_image = photoInput.value.files[0];
    }
    form.post(route('admin.product.create'), {
        errorBag: 'createProroduct',
        preserveScroll: true,
        onSuccess: () => clearPhotoFileInput(),
    });
};
const clearPhotoFileInput = () => {
    if (photoInput.value?.value) {
        photoInput.value.value = null;
    }
};
</script>

<template>
    <AppLayout title="Manage / Products/ Add a Product">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Manage / Products/ Add a Product <br><Link :href="route('admin.manage.products')" class="text-secondary-600 text-decoration-none text-sm">Back to Products</Link>
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white p-8 sm:rounded-lg">
                    <div class="row justify-content-center">
                        <div class="col-sm-6">
                                <h4 class="mb-4">Product Information</h4>
                                <form id="basic__information" @submit.prevent="createProduct">
                                    <div>
                                        <FormKit 
                                        type="text" 
                                        label="Full Names" 
                                        validation="required"
                                        validation-visibility="live"
                                        help="Enter a product's name"
                                        v-model="form.name"/>
                                        <InputError class="mt-2" :message="form.errors.name" />
                                    </div>
                                    <div class="mb-3">
                                        <InputLabel for="product_type" value="Select Product type" class="formkit-label block mb-1 font-bold text-sm"/>
                                        <div class="flex">
                                            <div class="flex items-center mr-4">
                                                <input id="book"  v-model="form.product_type" type="radio" value="book" name="product_type" class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                                <label for="book" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Book</label>
                                            </div>
                                            <div class="flex items-center mr-4">
                                                <input id="stationary" v-model="form.product_type"  type="radio" value="stationary" name="product_type" class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                                <label for="stationary" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Stationary</label>
                                            </div>
                                            <div class="flex items-center mr-4">
                                                <input id="uniform" v-model="form.product_type"  type="radio" value="uniform" name="product_type" class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                                <label for="uniform" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Uniform</label>
                                            </div>
                                        </div>
                                        <InputError class="mt-2" :message="form.errors.product_type" />
                                    </div>
                                    <div class="mb-3" v-if="form.product_type ==='book'">
                                        <InputLabel for="subject" value="Select Subject" class="formkit-label block mb-1 font-bold text-sm"/>
                                        <select name="subject" id="subject" class="form-control" v-model="form.subject_id">
                                            <option :value="item.id" v-for="item in subjects" :key="item.id">{{item.name}}</option>
                                        </select>
                                        <InputError class="mt-2" :message="form.errors.subject_id" />
                                    </div>
                                    <div class="mb-3" v-if="form.product_type ==='book'">
                                        <InputLabel for="class_level" value="Assign Class/Level" class="formkit-label block mb-1 font-bold text-sm"/>
                                        <select name="class_level" id="class_level" class="form-control" v-model="form.class_level_id">
                                            <option :value="item.id" v-for="item in classes" :key="item.id">{{item.class}}</option>
                                        </select>
                                        <InputError class="mt-2" :message="form.errors.subject_id" />
                                    </div>
                                    <div>
                                        <FormKit 
                                        type="select" 
                                        label="Product Category" 
                                        validation="required"
                                        validation-visibility="live"
                                        v-model="form.category"
                                        :options="[
                                            'Pre-Primary & ECDE',
                                            'Competency Based Curriculum',
                                            'International Curriculum',
                                            'Primary School',
                                            'Secondary School',
                                            'Higher Education',
                                        ]"/>
                                        <InputError class="mt-2" :message="form.errors.category" />
                                    </div>
                                    <div>
                                        <label class="inline-flex relative items-center cursor-pointer">
                                        <input type="checkbox" class="sr-only peer" v-model="form.availability">
                                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                                        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Product Availability</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label class="inline-flex relative items-center cursor-pointer">
                                        <input type="checkbox" class="sr-only peer" v-model="form.status">
                                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                                        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Product Status</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Upload Product Image</label>
                                        <input
                                            ref="photoInput"
                                            type="file"
                                            class="hidden"
                                            @change="updatePhotoPreview"
                                        >

                                        <InputLabel for="photo" value="Featured Image" />

                                        <!-- Current Profile Photo -->
                                        <div v-show="! photoPreview" class="mt-2">
                                            <img :src="form.featured_image" :alt="form.name" class="rounded-md h-24 w-24 object-cover">
                                        </div>

                                        <!-- New Profile Photo Preview -->
                                        <div v-show="photoPreview" class="mt-2">
                                            <span
                                                class="block rounded-full w-20 h-20 bg-cover bg-no-repeat bg-center"
                                                :style="'background-image: url(\'' + photoPreview + '\');'"
                                            />
                                        </div>

                                        <SecondaryButton class="mt-2 mr-2" type="button" @click.prevent="selectNewPhoto">
                                            Select A New Photo
                                        </SecondaryButton>
                                    </div>
                                    <div>
                                        <PrimaryButton class="my-4" :class="{ 'opacity-25':  form.processing }" :disabled="form.processing">
                                            Update Product
                                        </PrimaryButton>
                                    </div>
                                </form>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
