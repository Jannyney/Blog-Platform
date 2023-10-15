<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>
{ #if data.post}
    <h1>{data?.post.title}</h1>
    <div>{ data?.post.content}</div>
    <img src="{data.post.image}" alt="">
{/if}