<script>
    let { data } = $props();
</script>

<a href="/loreDescription">Back</a>
{#if data.weapons}
    <div>
        <h1>{data.weapons.name}</h1>
    </div>
{:else if data.armors}
    <div>
        <h1>{data.armors.name}</h1>
    </div>
{:else if data.npcs}
    <div>
        <h1>{data.npcs.name}</h1>
    </div>
{/if}
