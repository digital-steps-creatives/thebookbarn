<script>
import axios from 'axios';
import { ref } from 'vue';
import { Inertia } from '@inertiajs/inertia';
import { Link, useForm } from '@inertiajs/inertia-vue3';

export default {
    data() {
        return {
            isCameraOpen: false,
            isPhotoTaken: false,
            isShotPhoto: false,
            isLoading: false,
            link: '#',
            form: useForm({
                photoInput: ref(null),
                customer_id:this.$page.props?.user?.id
            }),
            excel: useForm({
                customerExcel:null
            })
            
        }
    },
    components:{
        Link
    },
    methods: {
        toggleCamera() {
        if(this.isCameraOpen) {
            this.isCameraOpen = false;
            this.isPhotoTaken = false;
            this.isShotPhoto = false;
            this.stopCameraStream();
        } else {
            this.isCameraOpen = true;
            this.createCameraElement();
        }
    },
    
    createCameraElement() {
      this.isLoading = true;
      
      const constraints = (window.constraints = {
				audio: false,
				video: true
			});


			navigator.mediaDevices
				.getUserMedia(constraints)
				.then(stream => {
          this.isLoading = false;
					this.$refs.camera.srcObject = stream;
				})
				.catch(error => {
          this.isLoading = false;
					alert("May the browser didn't support or there is some errors.");
				});
    },
    
    stopCameraStream() {
      let tracks = this.$refs.camera.srcObject.getTracks();

			tracks.forEach(track => {
				track.stop();
			});
    },
    
    takePhoto() {
      if(!this.isPhotoTaken) {
        this.isShotPhoto = true;

        const FLASH_TIMEOUT = 50;

        setTimeout(() => {
          this.isShotPhoto = false;
        }, FLASH_TIMEOUT);
      }
      
      this.isPhotoTaken = !this.isPhotoTaken;
      
      const context = this.$refs.canvas.getContext('2d');
      context.drawImage(this.$refs.camera, 0, 0, 450, 337.5);
    },
    async sendExcelQuote(){
        this.isLoading = true;
        if(!this.$page.props?.user?.id){
            this.$swal('Hold on you need to login!');
            window.location.href = route('login');
        }
        try {
            await axios.get('/sanctum/csrf-cookie')
                .then((res) => {
                    if(res) {
                        this.excel.post(route('store.excel.quote'), {
                                onSuccess: () => {
                                this.$swal('Order request created successfully!');
                                //store.dispatch("cart/resetCart");
                                //localStorage.setItem('OrderId', JSON.stringify(response.data));
                                window.location.href = route('myorders');
                                this.isLoading = false;
                            }
                        })
                        
                    }
                })
			} catch (error) {
				console.log(error);
			}
    },
    async sendQuoteRequest() {

      this.isLoading = true;
      this.form.photoInput = document.getElementById("photoTaken").toDataURL("image/jpeg");
            if(!this.$page.props?.user?.id){
                this.$swal('Hold on you need to login!');
                window.location.href = route('login');
            }
			try {
            await axios.get('/sanctum/csrf-cookie')
                .then((res) => {
                    if(res) {
                        this.form.post(route('store.image.quote'), {
                                onSuccess: () => {
                                this.$swal('Order request created successfully!');
                                //store.dispatch("cart/resetCart");
                                //localStorage.setItem('OrderId', JSON.stringify(response.data));
                                window.location.href = route('myorders');
                                this.isLoading = false;
                            }
                        })
                        
                    }
                })
			} catch (error) {
				console.log(error);
			}
      
      
      }
    },
}
</script>
<template>
    <section>
        <div class="container mx-auto items-center py-2 sm:py-4">
            <div class="my-8 relative rounded-lg bg-green-700 container mx-auto flex flex-col items-center pt-12 sm:pt-24 pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64">
                <img class="mr-2 lg:mr-12 mt-2 lg:mt-12 absolute right-0 top-0"  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg2.svg" alt="bg"/>
                <img class="ml-2 lg:ml-12 mb-2 lg:mb-12 absolute bottom-0 left-0" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg3.svg" alt="bg"/>
                <div class="row justify-content-center">
                    <div class="col-sm-8">
                        <div class="">
                            <h4 class="text-primary font-medium mb-4 text-lg font-sans sm:text-2xl text-center">Sign up offer!</h4>
                            <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-bold leading-tight">Special Discount to all new Customers</h1>
                            <p class=" text-center visible sm:hidden text-white">Start here by taking a photo of your Book list</p>
                        </div>
                        
                    
                        <div class="upload__takephoto_section mt-5">
                            <div class="border-dashed border-2 border-gray-400 rounded bg-green-100 p-5">
                                <div id="cameraview" class="visible sm:hidden">
                                    <div class="camera-button">
                                        <button type="button" class="block text-center  rounded  text-white p-2.5" :class="{ 'bg-green-400 hover:bg-red-600' : !isCameraOpen, 'bg-red-600 hover:bg-green-400' : isCameraOpen}" @click="toggleCamera">
                                            <span v-if="!isCameraOpen" class="w-full block">Take a photo 
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-flex">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                                                </svg>
                                            </span>
                                            <span v-else>Close Camera</span>
                                        </button>
                                    </div>
                                    
                                    <div v-show="isCameraOpen && isLoading" class="camera-loading">
                                        <ul class="loader-circle">
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        </ul>
                                    </div>
                                    
                                    <div v-if="isCameraOpen" v-show="!isLoading" class="camera-box" :class="{ 'flash' : isShotPhoto }">
                                        
                                        <div class="camera-shutter" :class="{'flash' : isShotPhoto}"></div>
                                        
                                        <video v-show="!isPhotoTaken" ref="camera" :width="350" :height="337.5" autoplay></video>
                                        
                                        <canvas v-show="isPhotoTaken" id="photoTaken" ref="canvas" :width="350" :height="337.5"></canvas>
                                    </div>
                                    
                                    <div v-if="isCameraOpen && !isLoading" class="camera-shoot">
                                        <button type="button" class="button" @click="takePhoto">
                                        <img src="https://img.icons8.com/material-outlined/50/000000/camera--v2.png">
                                        </button>
                                    </div>
                                    
                                    <div v-if="isPhotoTaken && isCameraOpen" class="camera-download">
                                        <a id="downloadPhoto" download="my-photo.jpg" class="button text-decoration-none" role="button" @click="sendQuoteRequest">
                                        Send Book list
                                        </a>
                                    </div>
                                </div>
                                <div class="hidden sm:block">
                                    <h4 class="text-green-700 text-center mb-4">Get started by submitting to us a list of books</h4>
                                    <div class="flex items-end">
                                        <input name="customerExcel" class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none mr-3" id="customerExcel" type="file" @input="excel.customerExcel = $event.target.files[0]">
                                        <div>
                                            <button class="cursor-pointer text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit" @click="sendExcelQuote" id="sendExcelQuote">
                                                <div v-if="isLoading" class="flex">
                                                        <div class="spinner-border" role="status"></div>
                                                        <span class="ml-2">Please wait, Loading...</span>
                                                </div>
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                    <div class="mt-8">
                                            <a href="/images/Bookbarn_list.xlsx"  class="bg-green-400 p-3 hover:bg-green-800 rounded text-white mt-4 text-decoration-none" download>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2 inline-flex">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
                                                </svg> Download our template to use
                                            </a>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
