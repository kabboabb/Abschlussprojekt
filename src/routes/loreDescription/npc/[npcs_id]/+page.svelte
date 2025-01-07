  <script>
      let { data } = $props();
      let npcs = data.npcs;
  </script>
  
  
  <div class="card">
      <div class="card-header">
          <h3>{npcs.name}</h3>
      </div>
      <div class="card-body">
          <div class="text-center">
              <img class="img" src={npcs.image} alt={npcs.name} />
          </div>
          <ul class="list-group list-group-flush">
              <li class="list-group-item"><strong>Location:</strong> {npcs.location}</li>
              <li class="list-group-item"><strong>Role:</strong> {npcs.role}</li>
          </ul>
      </div>
  </div>
  <a href="/loreDescription" class="btn btn-primary">Back</a>
