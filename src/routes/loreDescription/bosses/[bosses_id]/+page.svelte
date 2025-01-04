<script>
    let { data } = $props();
    let bosses = data.bosses;
</script>

<a href="/loreDescription">Back</a>
<div>
    <img class="img-fluid" src={bosses.image} alt={bosses.name} />
  </div>
<div>
    <div>
        <strong>Region: </strong>
        {bosses.region}
    </div>
    <div>
        <strong>Description: </strong>
        {bosses.description}
    </div>
    <div>
        <strong>Location: </strong>
        {bosses.location}
    </div>
    <div>
        <strong>Drops: </strong>
        {bosses.drops}
    </div>
    <div>
        <strong>Health Points: </strong>
        {bosses.healthPoints}
    </div>
</div>

