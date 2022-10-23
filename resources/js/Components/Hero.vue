<script>
export default {
    data() {
        return {
            isCameraOpen: false,
            isPhotoTaken: false,
            isShotPhoto: false,
            isLoading: false,
            link: '#'
        }
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
    
    downloadImage() {
      const download = document.getElementById("downloadPhoto");
      const canvas = document.getElementById("photoTaken").toDataURL("image/jpeg")
    .replace("image/jpeg", "image/octet-stream");
      download.setAttribute("href", canvas);
    }
    },
}
</script>
<template>
    <section  class="my-8 container">
        <div class="mx-auto px-12 sm:px-6 lg:px-8 rounded-lg p-5" style="background:#D7D2F2;">
            <div class="row">
                <div class="col-sm-8">
                    <h4 class="text-primary font-medium mb-4 text-lg font-sans text-center sm:text-left">Back to School</h4>
                    <h2 class="font-bold text-3xl font-sans text-center sm:text-left">Special Discount <br><span>for new Customers</span></h2>
                    <p class="text-center sm:text-left">Start here by taking a photo of your Book list</p>
                    <div class="upload__takephoto_section mt-5">
                        <div class="border-dashed border-2 border-gray-400 rounded bg-gray-100 p-4">
                            <div id="cameraview" class="visible sm:hidden">
                                <div class="camera-button">
                                    <button type="button" class="block text-center  rounded  text-white p-2.5" :class="{ 'bg-green-400 hover:bg-red-600' : !isCameraOpen, 'bg-red-600 hover:bg-green-400' : isCameraOpen}" @click="toggleCamera">
                                        <span v-if="!isCameraOpen">Take a photo</span>
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
                                    
                                    <video v-show="!isPhotoTaken" ref="camera" :width="450" :height="337.5" autoplay></video>
                                    
                                    <canvas v-show="isPhotoTaken" id="photoTaken" ref="canvas" :width="450" :height="337.5"></canvas>
                                </div>
                                
                                <div v-if="isCameraOpen && !isLoading" class="camera-shoot">
                                    <button type="button" class="button" @click="takePhoto">
                                    <img src="https://img.icons8.com/material-outlined/50/000000/camera--v2.png">
                                    </button>
                                </div>
                                
                                <div v-if="isPhotoTaken && isCameraOpen" class="camera-download">
                                    <a id="downloadPhoto" download="my-photo.jpg" class="button" role="button" @click="downloadImage">
                                    Download
                                    </a>
                                </div>
                            </div>
                            <div class="hidden sm:block">
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="file_input">Upload file</label>
<input class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 hidden sm:block">
                    <img src="/images/bbk.png" alt="">
                </div>
            </div>
        </div>
    </section>
</template>
