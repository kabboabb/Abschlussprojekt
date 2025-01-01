<script>
  let { weapons } = $props();
</script>

<div class="weapons-card">
  <div>
    <img class="img-fluid" src={weapons.image} alt={weapons.name} />
  </div>
  <div class="details">
    <div class="title">
      <a href={"/weapons/" + weapons._id}>{weapons.name}</a>
    </div>
    <div>
      Description: {weapons.description}
    </div>
    <div>
      Category: {weapons.category}
    </div>
    <div>
      Weight: {weapons.weight}
    </div>
    <div>
      Physical: {weapons.Phy}
    </div>
    <div>
      Strike: {weapons.Strike}
    </div>
    <div>
      Slash: {weapons.Slash}
    </div>
    <div>
      Pierce: {weapons.Pierce}
    </div>
    <div>
      Magic: {weapons.Magic}
    </div>
    <div>
      Fire: {weapons.Fire}
    </div>
    <div>
      Lightning: {weapons.Ligt}
    </div>
    <div>
      Holy: {weapons.Holy}
    </div>
    <div>
      Immunity: {weapons.Immunity}
    </div>
    <div>
      Robustness: {weapons.Robustness}
    </div>
    <div>
      Focus: {weapons.Focus}
    </div>
    <div>
      Vitality: {weapons.Vitality}
    </div>
    <div>
      Poise: {weapons.Poise}
    </div>
  </div>
</div>

<style>
  .weapons-card {
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
