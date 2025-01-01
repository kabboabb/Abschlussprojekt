<script>
    import "./styles.css";
    let { children } = $props();
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-black">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Elden Lord Wiki</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="/">Home</a>
        <a class="nav-link" href="/loreDescription">Lore & Item Descriptions</a>
        <a class="nav-link" href="/builds">Builds</a>
        <a class="nav-link" href="/compare">Compare</a>
        <a class="nav-link" href="/create">Create</a>
      </div>
    </div>
  </div>
</nav>

<div class="container">
{@render children()}
</div>

   