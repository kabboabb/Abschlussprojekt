<script>
  let { builds } = $props();
</script>

<div class="builds-card">
  <div>
    <img class="img-fluid" src="/genericbuild.jpg" alt={builds.name} />
  </div>
  <div class="details">
    <div class="title">
      <h3>{builds.name}</h3>
    </div>
    <div class="equipment">
      <h4>Equipment</h4>
      <p>Helm: {builds.helm}</p>
      <p>Chest Armor: {builds.chestArmor}</p>
      <p>Gauntlets: {builds.gauntletArmor}</p>
      <p>Leg Armor: {builds.legArmor}</p>
      <p>Weapon: {builds.weaponName}</p>
        </div>
        <div class="stats">
      <p>Weight: {builds.weight}</p>
      <p>Physical: {builds.phy}</p>
      <p>Strike: {builds.strike}</p>
      <p>Slash: {builds.slash}</p>
      <p>Pierce: {builds.pierce}</p>
      <p>Magic: {builds.magic}</p>
      <p>Fire: {builds.fire}</p>
      <p>Light: {builds.light}</p>
      <p>Holy: {builds.holy}</p>
      <p>Immunity: {builds.immunity}</p>
      <p>Robustness: {builds.robustness}</p>
      <p>Focus: {builds.focus}</p>
      <p>Vitality: {builds.vitality}</p>
      <p>Poise: {builds.poise}</p>
        </div>
        <div class="weapon">
      <h4>Weapon</h4>
      <p>Physical: {builds.weapon.phy}</p>
      <p>Magic: {builds.weapon.mag}</p>
      <p>Fire: {builds.weapon.fire}</p>
      <p>Lightning: {builds.weapon.ligt}</p>
      <p>Holy: {builds.weapon.holy}</p>
      <p>Crit: {builds.weapon.crit}</p>
      <p>Scaling Strength: {builds.weapon.scalesStr}</p>
      <p>Scaling Dexterity: {builds.weapon.scalesDex}</p>
      <p>Scaling Intelligence: {builds.weapon.scalesInt}</p>
      <p>Scaling Faith: {builds.weapon.scalesFai}</p>
      <p>Scaling Arcane: {builds.weapon.scalesArc}</p>
    </div>
  </div>
</div>
<style>
  .armors-card {
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
