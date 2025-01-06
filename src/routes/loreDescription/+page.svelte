<script>
  let { data } = $props();
  import ArmorCard from "$lib/components/ArmorCard.svelte";
  import BossCard from "$lib/components/BossCard.svelte";
  import ItemCard from "$lib/components/ItemCard.svelte";
  import NpcCard from "$lib/components/NpcCard.svelte";
  import WeaponCard from "$lib/components/WeaponCard.svelte";

  // State for the selected filter and search term
  let selectedFilter = $state('all');
  let searchQuery = $state('');

  // Function to set the filter
  function setFilter(filter) {
    selectedFilter = filter;
  }

  // Function to filter items based on the search query
  function filterData(array, query) {
    if (!query) {
      return array; // If no query, return the full array
    } else { 
      return array.filter(item =>
      Object.values(item).some(value =>
        String(value).toLowerCase().includes(query.toLowerCase())
      )
    );
    }
  }
</script>

<p><i>Data and Images from Kaggle</i></p>

<!-- Filter Options -->
<div style="margin-bottom: 20px;">
  <a class="btn btn-primary" href="../create" role="button">Add New Item</a>
  <button onclick={() => setFilter('all')} class="btn btn-secondary">Show All</button>
  <button onclick={() => setFilter('weapons')} class="btn btn-secondary">Weapons</button>
  <button onclick={() => setFilter('armors')} class="btn btn-secondary">Armors</button>
  <button onclick={() => setFilter('bosses')} class="btn btn-secondary">Bosses</button>
  <button onclick={() => setFilter('npcs')} class="btn btn-secondary">NPCs</button>
  <button onclick={() => setFilter('items')} class="btn btn-secondary">Items</button>
</div>

<!-- Search Bar -->
<div style="margin-bottom: 20px;">
  <input
    type="text"
    class="form-control"
    placeholder="Search..."
    bind:value={searchQuery}
  />
</div>

<div class="row">
  {#if selectedFilter === 'all' || selectedFilter === 'armors'}
    {#each filterData(data.armors, searchQuery) as armors}
      <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
        <ArmorCard {armors}></ArmorCard>
      </div>
    {/each}
  {/if}

  {#if selectedFilter === 'all' || selectedFilter === 'weapons'}
    {#each filterData(data.weapons, searchQuery) as weapons}
      <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
        <WeaponCard {weapons}></WeaponCard>
      </div>
    {/each}
  {/if}

  {#if selectedFilter === 'all' || selectedFilter === 'bosses'}
    {#each filterData(data.bosses, searchQuery) as bosses}
      <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
        <BossCard {bosses}></BossCard>
      </div>
    {/each}
  {/if}

  {#if selectedFilter === 'all' || selectedFilter === 'npcs'}
    {#each filterData(data.npcs, searchQuery) as npcs}
      <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
        <NpcCard {npcs}></NpcCard>
      </div>
    {/each}
  {/if}

  {#if selectedFilter === 'all' || selectedFilter === 'items'}
    {#each filterData(data.items, searchQuery) as items}
      <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
        <ItemCard {items}></ItemCard>
      </div>
    {/each}
  {/if}
</div>
