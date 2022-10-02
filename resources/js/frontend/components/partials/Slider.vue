<template>
    <div class="container mx-auto">
        <div class="my-3">
          <img class="max-w-full h-auto rounded-lg w-full" src="images/banners/2.jpg" alt="image description" />
        </div>
    </div>
</template>
<script>

    export default {
      name: "Slider",
      data() {
        return {
          images: [
            "images/banners/1.jpg",
            "images/banners/2.jpg",
            "images/banners/3.jpg"
          ],
          timer: null,
          currentIndex: 0
        };
      },

      computed: {
        currentImg: function() {
          return this.images[Math.abs(this.currentIndex) % this.images.length];
        }
      }
    };
    </script>
    <style lang="scss"></style>
