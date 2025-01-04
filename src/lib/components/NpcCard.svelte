<script>
  let { npcs } = $props();
</script>

<div class="npcs-card">
  <div>
    <img class="img-fluid" src={npcs.image} alt={npcs.name} />
  </div>
  <div class="details">
    <div class="title">
      <a href={"/loreDescription/npc/" + npcs._id}>{npcs.name}</a>
    </div>
    <div>
      <div>
        <strong>Location: </strong> {npcs.location}
      </div>
      <div>
        <strong>Role: </strong> {npcs.role}
      </div>
    </div>
  </div>
</div>

<style>
  .npcs-card {
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
