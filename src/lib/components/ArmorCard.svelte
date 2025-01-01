<script>
  let { armor } = $props();
</script>

<div class="armor-card">
  <div>
    <img class="img-fluid" src={armor.image} alt={armor.name} />
  </div>
  <div class="details">
    <div class="title">
      <a href={"/armor/" + armor._id}>{armor.name}</a>
    </div>
    <div>
      Description:{armor.description}
    </div>
    <div>
      Category: {armor.category}
    </div>
    <div>
      Pthysical: {armor.Phy}
    </div>
    <div>
      Strike: {armor.Strike}
    </div>
    <div>
      Slash: {armor.Slash}
    </div>
  </div>
</div>

<style>
  .armor-card {
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
