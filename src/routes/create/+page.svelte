<script>
    let { form } = $props();
    let selectedcategory = $state(null);
  
    function updateSelectedCategory(categoryName) {
      selectedcategory = categoryName;
    }
  </script>

<h1>Create A New Entry</h1>

  <form method="POST" action="?/create">
    <div class="row g-3">
      <div class="col">
        <label for="entryType" class="form-label">Entry Type</label>
        <select
          id="entryType"
          name="entryType"
          class="form-control"
          onchange={e => updateSelectedCategory(e.target.value)}
        >
          <option value="" disabled selected>Select Entry Type</option>
          <option value="armor">Armor</option>
          <option value="weapon">Weapon</option>
          <option value="boss">Boss</option>
          <option value="npc">NPC</option>
          <option value="item">Item</option>
        </select>
      </div>
    </div>
  
    {#if selectedcategory === 'armor'}
    <div class="row g-3">
        <div class="col">
            <label for="inputName" class="form-label">Armor Name</label>
            <input name="name" type="text" class="form-control" placeholder="Enter name">
        </div>
        <div class="col">
            <label for="inputDescription" class="form-label">Description</label>
            <textarea name="description" class="form-control" placeholder="Enter description"></textarea>
        </div>
    </div>
    <div class="row g-3">
        <div class="col">
            <label for="inputCategory" class="form-label">Category</label>
            <select name="category" class="form-control">
                <option value="leg armor">Leg Armor</option>
                <option value="chest armor">Chest Armor</option>
                <option value="gauntlets">Gauntlets</option>
                <option value="helm">Helm</option>
            </select>
        </div>
    </div>
    <div class="row g-3">
        <div class="col">
            <label for="inputWeight" class="form-label">Weight</label>
            <input name="weight" type="number" class="form-control" value="0">
        </div>
        <div class="col">
            <label for="inputPhy" class="form-label">Physical Resistance</label>
            <input name="phy" type="number" class="form-control" value="0">
        </div>
        <div class="col">
            <label for="inputStrike" class="form-label">Strike Resistance</label>
            <input name="strike" type="number" class="form-control" value="0">
        </div>
        <div class="col">
            <label for="inputSlash" class="form-label">Slash Resistance</label>
            <input name="slash" type="number" class="form-control" value="0">
        </div>
        <div class="col">
            <label for="inputPierce" class="form-label">Pierce Resistance</label>
            <input name="pierce" type="number" class="form-control" value="0">
        </div>

        <div class="col">
            <label for="inputMagic" class="form-label">Magic Resistance</label>
            <input name="magic" type="number" class="form-control" value="0">
        </div>
        <div class="col">
            <label for="inputFire" class="form-label">Fire Resistance</label>
            <input name="fire" type="number" class="form-control" value="0">
        </div>
    </div>
    <div class="row g-3">
        <div class="col">
            <label for="inputLight" class="form-label">Ligt Resistance</label>
            <input name="ligt" type="number" class="form-control" value="0">
        </div>
        <div class="col">
            <label for="inputHoly" class="form-label">Holy Resistance</label>
            <input name="holy" type="number" class="form-control" value="0">
        </div>
        <div class="col">
            <label for="inputImmunity" class="form-label">Immunity</label>
            <input name="immunity" type="number" class="form-control" value="0">
        </div>
        <div class="col">
            <label for="inputRobustness" class="form-label">Robustness</label>
            <input name="robustness" type="number" class="form-control" value="0">
        </div>
        <div class="col">
            <label for="inputFocus" class="form-label">Focus</label>
            <input name="focus" type="number" class="form-control" value="0">
        </div>
        <div class="col">
            <label for="inputVitality" class="form-label">Vitality</label>
            <input name="vitality" type="number" class="form-control" value="0">
        </div>
        <div class="col">
            <label for="inputPoise" class="form-label">Poise</label>
            <input name="poise" type="number" class="form-control" value="0">
        </div>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    {:else if selectedcategory === 'weapon'}
    <div class="row g-3">
        <div class="col">
            <label for="inputName" class="form-label">Weapon Name</label>
            <input name="name" type="text" class="form-control" placeholder="Enter weapon name">
        </div>
        <div class="col">
            <label for="inputDescription" class="form-label">Description</label>
            <textarea name="description" class="form-control" placeholder="Enter description"></textarea>
        </div>
    </div>
    <div class="row g-3">
        <div class="col">
            <label for="inputCategory" class="form-label">Category</label>
            <input name="category" type="text" class="form-control" placeholder="Enter category">
        </div>
        <div class="col">
            <label for="inputWeight" class="form-label">Weight</label>
            <input name="weight" type="number" step="0.1" class="form-control" value="0">
        </div>
    </div>
    <div class="row g-3">
        <div class="col">
            <label for="inputPhy" class="form-label">Physical Damage</label>
            <input name="phy" type="number" class="form-control" value="0">
        </div>
        <div class="col">
            <label for="inputMag" class="form-label">Magic Damage</label>
            <input name="mag" type="number" class="form-control" value="0">
        </div>
        <div class="col">
            <label for="inputFire" class="form-label">Fire Damage</label>
            <input name="fire" type="number" class="form-control" value="0">
        </div>
        <div class="col">
            <label for="inputLight" class="form-label">Ligt Damage</label>
            <input name="ligt" type="number" class="form-control" value="0">
        </div>
        <div class="col">
            <label for="inputHoly" class="form-label">Holy Damage</label>
            <input name="holy" type="number" class="form-control" value="0">
        </div>
        <div class="col">
            <label for="inputCrit" class="form-label">Critical Damage</label>
            <input name="crit" type="number" class="form-control" value="0">
        </div>
    </div>
    <div class="row g-3">
        <div class="col">
            <label for="inputDefPhy" class="form-label">Physical Defense</label>
            <input name="defencePhy" type="number" class="form-control" value="0">
        </div>
        <div class="col">
            <label for="inputDefMag" class="form-label">Magic Defense</label>
            <input name="defenceMag" type="number" class="form-control" value="0">
        </div>
        <div class="col">
            <label for="inputDefFire" class="form-label">Fire Defense</label>
            <input name="defenceFire" type="number" class="form-control" value="0">
        </div>
        <div class="col">
            <label for="inputDefLigt" class="form-label">Ligt Defense</label>
            <input name="defenceLigt" type="number" class="form-control" value="0">
        </div>
        <div class="col">
            <label for="inputDefHoly" class="form-label">Holy Defense</label>
            <input name="defenceHoly" type="number" class="form-control" value="0">
        </div>
        <div class="col">
            <label for="inputDefCrit" class="form-label">Critical Defense</label>
            <input name="defenceCrit" type="number" class="form-control" value="0">
        </div>
    </div>
    <div class="row g-3">
        <div class="col">
            <label for="inputScaleStr" class="form-label">Strength Scaling</label>
            <input name="scalesStr" type="text" class="form-control" placeholder="Enter scaling (e.g., D)">
        </div>
        <div class="col">
            <label for="inputScaleDex" class="form-label">Dexterity Scaling</label>
            <input name="scalesDex" type="text" class="form-control" placeholder="Enter scaling (e.g., D)">
        </div>
        <div class="col">
            <label for="inputScaleInt" class="form-label">Intelligence Scaling</label>
            <input name="scalesInt" type="text" class="form-control" placeholder="Enter scaling (e.g., D)">
        </div>
        <div class="col">
            <label for="inputScaleArc" class="form-label">Arcane Scaling</label>
            <input name="scalesArc" type="text" class="form-control" placeholder="Enter scaling (e.g., D)">
        </div>
        <div class="col">
            <label for="inputScaleFai" class="form-label">Faith Scaling</label>
            <input name="scalesFai" type="text" class="form-control" placeholder="Enter scaling (e.g., D)">
        </div>
        <div class="col">
            
        </div>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    {:else if  selectedcategory === 'boss'}
    <div class="row g-3">
        <div class="col">
            <label for="inputName" class="form-label">Boss Name</label>
            <input name="name" type="text" class="form-control" placeholder="Enter boss name">
        </div>
        <div class="col">
            <label for="inputRegion" class="form-label">Region</label>
            <input name="region" type="text" class="form-control" placeholder="Enter region">
        </div>
    </div>
    <div class="row g-3">
        <div class="col">
            <label for="inputDescription" class="form-label">Description</label>
            <textarea name="description" class="form-control" placeholder="Enter description"></textarea>
        </div>
    </div>
    <div class="row g-3">
        <div class="col">
            <label for="inputLocation" class="form-label">Location</label>
            <input name="location" type="text" class="form-control" placeholder="Enter location">
        </div>
        <div class="col">
            <label for="inputDrops" class="form-label">Drops</label>
            <input name="drops" type="text" class="form-control" placeholder="Enter drops">
        </div>
        <div class="col">
            <label for="inputHealthPoints" class="form-label">Health Points</label>
            <input name="healthPoints" type="text" class="form-control" placeholder="Enter health points">
        </div>
    </div>    
    <button type="submit" class="btn btn-primary">Submit</button>
    {:else if  selectedcategory === 'npc'}
    <div class="row g-3">
        <div class="col">
            <label for="inputName" class="form-label">NPC Name</label>
            <input name="name" type="text" class="form-control" placeholder="Enter NPC name">
        </div>
    </div>
    <div class="row g-3">
        <div class="col">
            <label for="inputLocation" class="form-label">Location</label>
            <input name="location" type="text" class="form-control" placeholder="Enter location">
        </div>
        <div class="col">
            <label for="inputRole" class="form-label">Role</label>
            <input name="role" type="text" class="form-control" placeholder="Enter role">
        </div>
    </div>    
    <button type="submit" class="btn btn-primary">Submit</button>
    {:else if selectedcategory === 'item'}
    <div class="row g-3">
        <div class="col">
            <label for="inputName" class="form-label">Item Name</label>
            <input name="name" type="text" class="form-control" placeholder="Enter item name">
        </div>
        <div class="col">
            <label for="inputDescription" class="form-label">Description</label>
            <textarea name="description" class="form-control" placeholder="Enter description"></textarea>
        </div>
    </div>
    <div class="row g-3">
        <div class="col">
            <label for="inputType" class="form-label">Type</label>
            <input name="type" type="text" class="form-control" placeholder="Enter type">
        </div>
        <div class="col">
            <label for="inputEffect" class="form-label">Effect</label>
            <textarea name="effect" class="form-control" placeholder="Enter effect"></textarea>
        </div>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>    
    {/if}
  </form>
  

{#if form?.success}
  <div class="alert alert-success" role="alert">
    Entry successfully created!
  </div>
{:else if form?.error}
  <div class="alert alert-danger" role="alert">
    {form.error.message}
  </div>
{/if}