<script>
  let { data } = $props();
  import ArmorCard from "$lib/components/ArmorCard.svelte";
  import WeaponCard from "$lib/components/WeaponCard.svelte";
</script>

<p><i>Daten und Bilder generiert mit ChatGPT und DALL-E</i></p>
<a
  style="margin-bottom: 20px;"
  class="btn btn-primary"
  href="movies/create"
  role="button">Add New Movie</a
>
<div class="row">
  {#each data.armor as armor}
    <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
      <ArmorCard {armor}></ArmorCard>
    </div>
  {/each}

  {#each data.weapons as weapons}
  <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
    <WeaponCard {weapons}></WeaponCard>
  </div>
{/each}

</div>
