<script>
  let { builds } = $props();
</script>

<div class="builds-card">
  <div>
    <img class="img-fluid" src={builds.image} alt={builds.name} />
  </div>
  <div class="details">
    <div class="title">
      <a href={"/myBuilds/" + builds._id}>{builds.name}</a>
    </div>
    <div class="equipment">
      <h4>Equipment</h4>
      <p>Helm: {builds.helm}</p>
      <p>Chest Armor: {builds.chestArmor}</p>
      <p>Gauntlets: {builds.gauntletArmor}</p>
      <p>Leg Armor: {builds.legArmor}</p>
      <p>Weapon: {builds.weaponName}</p>
  </div>
  </div>
  <form method="post" action="?/delete">
    <input type="hidden" name="id" value={builds._id} />
    <button class="btn btn-danger">Delete</button>
  </form>
</div>


<style>
  .builds-card {
    border: 1px solid #555;
    height: 100%;
    background-color: #444;
    color: white;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .img-fluid {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  .details {
    padding: 1em;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .title {
    font-weight: bold;
    font-size: 1.2em;
    margin-bottom: 0.5em;
  }
  .title a {
    color: #f8d210;
    text-decoration: none;
  }
  .title a:hover {
    text-decoration: underline;
  }
  div {
    margin-bottom: 0.5em;
  }
</style>
