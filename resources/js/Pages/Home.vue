<script setup>
    import AppLayout from '@/Layouts/FrontLayout.vue';
    import Welcome from '@/Components/Welcome.vue';
    import Hero from '@/Components/Hero.vue';

    </script>
    
    <template>
        <AppLayout title="Dashboard">
            <template #header>
                <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            </template>
            <Hero></Hero>
        </AppLayout>
    </template>
    