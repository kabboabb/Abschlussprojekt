<script>
    let { data } = $props();
    let items = data.items;
</script>

<a href="/loreDescription">Back</a>
<div>
    <img class="img-fluid" src={items.image} alt={items.name} />
  </div>
<div>
    <strong>Description: </strong> {items.description}
  </div>
  <div>
    <strong>Type: </strong> {items.type}
  </div>
  <div>
    <strong>Effect: </strong> {items.effect}
  </div>