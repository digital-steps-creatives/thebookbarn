<template>
	<footer class="footer">
		<div class="container mx-auto">
			<div class="py-10 grid md:grid-cols-2 lg:grid-cols-6 gap-7">
				<!-- column 1 -->
				<div class="order-1 lg:col-span-2">
					<!-- logo -->
					<div class="flex items-center">
						<white-logo></white-logo>
					</div>


				</div>
				<!-- column 2 -->
				<div class="order-2 md:order-3 lg:order-2 lg:col-span-1 md:mt-1">
					<h4 class="font-bold text-lg text-white">Company</h4>
					<ul class="mt-1" style="list-style-type:none !important">
						<li class=" text-sm pt-3 text-white">
							<a href="https://jubileeinsurance.com/ke/about-us/">About</a>
						</li>
						<li class=" text-sm pt-3 text-white">
							<a href="https://jubileeinsurance.com/ke/contact/">Contact Us</a>
						</li>
						<li class=" text-sm pt-3 text-white">
							<Link to="/policy">
								Privacy Policy
							</Link>
						</li>
					</ul>
				</div>
				<!-- column 3 -->
				<div class="order-3 md:order-4 lg:order-3 lg:col-span-1 md:mt-1">
					<h4 class="font-bold text-lg text-white">Account</h4>
					<ul class="mt-1" style="list-style-type:none !important">
						<li class=" text-sm pt-3 text-white">
							<Link to="/customer/orders">Orders</Link>
						</li>
						<li class=" text-sm pt-3 text-white">
							<Link to="/customer">Personal info</Link>
						</li>
					</ul>
				</div>
				<!-- column 4 -->
				<div class="order-4 md:order-2 lg:order-4 lg:col-span-2 md:mt-1">
					<h4 class="text-bld text-white">Jubilee Life</h4>
<p class="footer-contact text-white">
                                    Jubilee Insurance Centre, Wabera Street<br>
P.O. Box 30376 - 00100 GPO, Nairobi, Kenya.<br>
Tel: +254 20 328 1000<br>
Call Centre: +254 709 949 000<br>
Fax: +254 20 325 1150<br>
Talk2uspension@jubileekenya.com<br>
Talk2uslife@jubileekenya.com                                </p>
					</div>
			</div>

		</div>
			<div class="copyright border-t border-slate-100 border-solid">
                <div class="container mx-auto">
                    <div class="flex justify-between">
                                        <div class="left text-sm text-white py-3">
                                            <p>© 2022 Jubilee Insurance. All rights reserved</p>
                                        </div>
                                        <div class="right text-sm text-white py-3">
                                            <p>A Product from www.jubileeinsurance.com</p>
                                        </div>
                    </div>
                </div>
			</div>
	</footer>
</template>

<script>
    import WhiteLogo from './WhiteLogo.vue';
    import { Link } from '@inertiajs/inertia-vue3';
export default {
    components:{
        WhiteLogo
    }
};
</script>

<style lang="scss" scoped>
.footer-info-item:hover {
	svg {
		color:#fff
	}
	.footer-info-icon {
		color:#ba0c2f
	}
}

.footer-info-icon {
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 6px 0px;
}
</style>
