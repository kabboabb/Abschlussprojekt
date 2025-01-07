<script>
  import BuildsCard from "$lib/components/BuildsCard .svelte";

  let { data } = $props();
</script>

<p><i> Bilder generiert mit ChatGPT und DALL-E</i></p>
<a
  style="margin-bottom: 20px;"
  class="btn btn-primary"
  href="../builds"
  role="button">Add New Build</a
>
<div class="row">
  {#each data.builds as builds}
    <div class="col-sm-6 col-md-4 col-lg-3 mb-4 gx-4">
      <BuildsCard {builds}></BuildsCard>
    </div>
  {/each}
</div>
