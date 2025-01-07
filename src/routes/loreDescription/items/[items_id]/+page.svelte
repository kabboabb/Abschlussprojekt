  <script>
      let { data } = $props();
      let items = data.items;
  </script>
  
  <div class="card">
      <div class="card-header">
          <h3>{items.name}</h3>
      </div>
      <div class="card-body">
          <div class="text-center">
              <img class="img" src={items.image} alt={items.name} />
          </div>
          <ul class="list-group list-group-flush">
              <li class="list-group-item"><strong>Description:</strong> {items.description}</li>
              <li class="list-group-item"><strong>Type:</strong> {items.type}</li>
              <li class="list-group-item"><strong>Effect:</strong> {items.effect}</li>
          </ul>
      </div>
  </div>
  <a href="/loreDescription" class="btn btn-primary">Back</a>

