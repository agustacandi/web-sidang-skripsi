<script lang="ts">
	import { page } from '$app/state';
	import { getUser } from '$lib/get-user';
	let queryParam: string | null;
	queryParam = page.url.searchParams.get('aezakmi');
	const user = getUser(queryParam);
</script>
<div class="lg:w-150 w-full h-screen mx-auto relative flex flex-col justify-center items-center lg:overflow-visible overflow-hidden">
	<img class="absolute -top-75 -left-30 -rotate-30" src="/black-paper.png" alt="Black Paper">
	<img class="absolute top-10 lg:right-0 right-0 lg:w-50 w-35" src="/paper-amazing.png" alt="Paper Amazing">
	<img class="absolute bottom-0 left-0 lg:w-80 w-60" src="/castle-cut-out.webp" alt="Castle Cut-Out">
	<img class="absolute -bottom-5 lg:right-0 right-0 lg:w-80 w-60" src="/museum-cut-out.png" alt="Museum Cut-Out">
	<img class="absolute top-35 lg:-right-20 -right-30 lg:w-50 w-40" src="/dots.webp" alt="Dots">
	<img class="absolute lg:bottom-50 bottom-35 lg:-left-40 -left-30 lg:w-50 w-40" src="/dots.webp" alt="Dots">
	<div class="text-center mb-30 lg:mb-40 lg:mx-0 mx-10">
		<h1 class="dynalight-regular text-6xl">Congratulations</h1>
		<h2 class="dm-serif-text-regular text-4xl mb-5">Unofficially</h2>
		<div class="bg-white w-full h-80 p-8 mb-5 shadow-lg">
			<img class="w-full h-60 object-cover" src="{user?.image}" alt="{user?.name} Image">
		</div>
		<h3 class="text-2xl font-black">{user?.name}, S.Tr.Kom</h3>
		<p class="mb-5">Semangat revisian, perjalanan masih panjang!</p>
		<p class="font-mono">From: Candi Agusta</p>
	</div>
</div>

<style lang="postcss">
    @reference "tailwindcss/theme";
    :global(html) {
        background-image: url("/background.jpg");
				background-size: cover;
				background-repeat: no-repeat;
				background-position: center center;
    }

    :global(body) {
        width: 100%;
        height: 100%;
    }

    .dynalight-regular {
        font-family: "Dynalight", cursive;
        font-weight: 400;
        font-style: normal;
    }

    .dm-serif-text-regular {
        font-family: "DM Serif Text", serif;
        font-weight: 400;
        font-style: normal;
    }


</style>