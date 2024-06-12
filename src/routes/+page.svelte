<script>

	import Origin from "$lib/components/Origin.svelte";
    export let data;

</script>
<div class="py-4 font-narrator">
    <Origin chapters={data.chapters}></Origin>
</div>