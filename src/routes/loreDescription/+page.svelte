<script>
  let { data } = $props();
  import ArmorCard from "$lib/components/ArmorCard.svelte";
  import BossCard from "$lib/components/BossCard.svelte";
  import ItemCard from "$lib/components/ItemCard.svelte";
  import NpcCard from "$lib/components/NpcCard.svelte";
  import WeaponCard from "$lib/components/WeaponCard.svelte";

  let selectedFilter = $state('all');
  let searchQuery = $state('');

  function setFilter(filter) {
    selectedFilter = filter;
  }

  function filterData(array, query) {
    if (!query) {
      return array; 
    } else { 
      return array.filter(item =>
      Object.values(item).some(value =>
        String(value).toLowerCase().includes(query.toLowerCase())
      )
    );
    }
  }
</script>
<h1>Explore the Lore and get to know your Stuff</h1>
<p><i>Data and Images are from Kaggle, new Entry-Images are from ChatGPT</i></p>

<div style="margin-bottom: 20px;">
  <a class="btn btn-primary" href="../create" role="button">Add New Entry</a>
  <button onclick={() => setFilter('all')} class="btn btn-secondary {selectedFilter === 'all' ? 'btn-light' : ''}">Show All</button>
  <button onclick={() => setFilter('weapons')} class="btn btn-secondary {selectedFilter === 'weapons' ? 'btn-light' : ''}">Weapons</button>
  <button onclick={() => setFilter('armors')} class="btn btn-secondary {selectedFilter === 'armors' ? 'btn-light' : ''}">Armors</button>
  <button onclick={() => setFilter('bosses')} class="btn btn-secondary {selectedFilter === 'bosses' ? 'btn-light' : ''}">Bosses</button>
  <button onclick={() => setFilter('npcs')} class="btn btn-secondary {selectedFilter === 'npcs' ? 'btn-light' : ''}">NPCs</button>
  <button onclick={() => setFilter('items')} class="btn btn-secondary {selectedFilter === 'items' ? 'btn-light' : ''}">Items</button>
</div>

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
    <div class="col-sm-6 col-md-4 col-lg-3 mb-4 gx-4">
      <ArmorCard {armors}></ArmorCard>
      </div>
    {/each}
  {/if}

  {#if selectedFilter === 'all' || selectedFilter === 'weapons'}
    {#each filterData(data.weapons, searchQuery) as weapons}
    <div class="col-sm-6 col-md-4 col-lg-3 mb-4 gx-4">
      <WeaponCard {weapons}></WeaponCard>
      </div>
    {/each}
  {/if}

  {#if selectedFilter === 'all' || selectedFilter === 'bosses'}
    {#each filterData(data.bosses, searchQuery) as bosses}
    <div class="col-sm-6 col-md-4 col-lg-3 mb-4 gx-4">
      <BossCard {bosses}></BossCard>
      </div>
    {/each}
  {/if}

  {#if selectedFilter === 'all' || selectedFilter === 'npcs'}
    {#each filterData(data.npcs, searchQuery) as npcs}
    <div class="col-sm-6 col-md-4 col-lg-3 mb-4 gx-4">
      <NpcCard {npcs}></NpcCard>
      </div>
    {/each}
  {/if}

  {#if selectedFilter === 'all' || selectedFilter === 'items'}
    {#each filterData(data.items, searchQuery) as items}
    <div class="col-sm-6 col-md-4 col-lg-3 mb-4 gx-4">
      <ItemCard {items}></ItemCard>
      </div>
    {/each}
  {/if}
</div>
