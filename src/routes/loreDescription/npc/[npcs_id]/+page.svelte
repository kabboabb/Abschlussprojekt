<script>
    let { data } = $props();
    let npcs = data.npcs;
</script>

<a href="/loreDescription">Back</a>
<div>
    <img class="img-fluid" src={npcs.image} alt={npcs.name} />
  </div>
<div>
    <strong>Location: </strong> {npcs.location}
  </div>
  <div>
    <strong>Role: </strong> {npcs.role}
  </div>
