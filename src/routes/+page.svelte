<script>

	import Origin from "$lib/components/Origin.svelte";
    export let data;

</script>
<div class="py-4 font-narrator">
    {#if data.chapters.length > 0}
    <Origin chapters={data.chapters}></Origin>        
    {/if}
    {#if data.chapters.length === 0}
    <p>Fetching data...</p>
    {/if}
</div>