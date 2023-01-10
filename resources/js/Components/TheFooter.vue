<template>
    <footer style="background-color: #fff" class="pt-5">
        <div class="max-w-7xl mx-auto divide-y divide-slate-200 px-4 sm:px-6 md:px-8 dark:divide-slate-700">
            <!-- <div class="container">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="module__social">
                            <div class="module__social__content">
                                <img src="/images/logo.png" alt="The Book Barn" style="height:95px">
                            </div>
                        </div>
                        <div class="module">
                            <div class="module__content">
                                <h4>Follow us</h4>
                                <div class="social">
                                    <ul class="social__list">
                                        <li>
                                            <Link>
                                                <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8.9709 10.0201L9.46872 6.83493H6.35612V4.76796C6.35612 3.89655 6.79093 3.04715 8.18496 3.04715H9.6V0.335305C9.6 0.335305 8.31589 0.120117 7.08815 0.120117C4.52483 0.120117 2.84933 1.64568 2.84933 4.40737V6.83493H0V10.0201H2.84933V17.7201H6.35612V10.0201H8.9709Z" fill="#1E33E6"/>
                                                </svg>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <svg width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24.4776 2.93651C24.1901 1.82791 23.3429 0.95482 22.2673 0.658523C20.3177 0.120117 12.5 0.120117 12.5 0.120117C12.5 0.120117 4.68232 0.120117 2.73266 0.658523C1.65706 0.954867 0.80992 1.82791 0.522399 2.93651C0 4.9459 0 9.1383 0 9.1383C0 9.1383 0 13.3307 0.522399 15.3401C0.80992 16.4487 1.65706 17.2854 2.73266 17.5817C4.68232 18.1201 12.5 18.1201 12.5 18.1201C12.5 18.1201 20.3177 18.1201 22.2673 17.5817C23.3429 17.2854 24.1901 16.4487 24.4776 15.3401C25 13.3307 25 9.1383 25 9.1383C25 9.1383 25 4.9459 24.4776 2.93651ZM9.94316 12.9447V5.33191L16.4772 9.1384L9.94316 12.9447Z" fill="#E20000"/>
                                                </svg>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.7908 4.00932C15.802 4.17987 15.802 4.35046 15.802 4.52101C15.802 9.72301 12.1726 15.7169 5.53908 15.7169C3.49542 15.7169 1.59696 15.0712 0 13.9505C0.290366 13.987 0.569525 13.9992 0.871063 13.9992C2.55733 13.9992 4.10963 13.3779 5.34923 12.318C3.76344 12.2814 2.43451 11.1484 1.97663 9.58902C2.2 9.62555 2.42333 9.64992 2.65788 9.64992C2.98172 9.64992 3.3056 9.60117 3.60711 9.51593C1.95432 9.15042 0.714691 7.56669 0.714691 5.654V5.60528C1.19488 5.89767 1.7533 6.08041 2.34513 6.10475C1.37356 5.39813 0.737034 4.19206 0.737034 2.82758C0.737034 2.09663 0.915681 1.42658 1.22839 0.841809C3.00403 3.22962 5.67308 4.78898 8.66594 4.95957C8.61011 4.66718 8.5766 4.36265 8.5766 4.05807C8.5766 1.88952 10.1847 0.123047 12.1837 0.123047C13.2223 0.123047 14.1603 0.598172 14.8192 1.36568C15.6344 1.19513 16.4162 0.866185 17.1086 0.415434C16.8405 1.32916 16.271 2.09667 15.5228 2.58395C16.2487 2.49871 16.9522 2.27937 17.5999 1.97483C17.1086 2.7545 16.4944 3.44888 15.7908 4.00932Z" fill="#3CB5DB"/>
                                                </svg>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-8">

                    </div>
                </div>
            </div> -->
            
            <div class="container">
                <div class="row justify-content-center py-3">
                    <div class="col-sm-4 col-12">
                        <span>The Bookbarn | © 2022 All Rights Reserved</span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<script setup>
import { Head, Link } from '@inertiajs/inertia-vue3';
</script>
<style lang="scss">
    .social {
        .social__list{
            list-style: none;
            padding-left: 0;
            li {
                display: inline-flex;
                margin-right: 5px;
                a {
                    border: 1px solid #F0F0F0;
                    padding: 1rem;
                }
            }
        }
    }
</style>