<script>
  let { bosses } = $props();
</script>

<div class="bosses-card">
  <div>
    <img class="img-fluid" src={bosses.image} alt={bosses.name} />
  </div>
  <div class="details">
    <div class="title">
      <a href={"/loreDescription/" + bosses._id}>{bosses.name}</a>
    </div>
    <div>
      <div>
        <strong>Region: </strong> {bosses.region}
      </div>
      <div>
        <strong>Description: </strong> {bosses.description}
      </div>
      <div>
        <strong>Location: </strong> {bosses.location}
      </div>
      <div>
        <strong>Drops: </strong> {bosses.drops}
      </div>
      <div>
        <strong>Health Points: </strong> {bosses.healthPoints}
      </div>
    </div>
  </div>
</div>

<style>
  .bosses-card {
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
