<script>
    let { form } = $props();
</script>

<a href="../">Back</a>
<form method="Post" action="?/create">
    <div class="container my-5">
        <h1 class="text-center mb-4">Do You Want To Expand The Wiki?</h1>
        <h4 class="text-center mb-5">Contact Us</h4>
        <div class="row">
            <div class="col-md-6">
                <div class="mb-3">
                    <label for="inputName" class="form-label">Weapon Name</label>
                    <input
                        name="name"
                        type="text"
                        id="inputName"
                        class="form-control"
                        placeholder="Enter your name"
                    />
                </div>
            </div>
            <div class="col-md-6">
                <div class="mb-3">
                    <label for="imageUpload" class="form-label"
                        >Choose an Image</label
                    >
                    <input
                        name="image"
                        class="form-control"
                        type="file"
                        id="imageUpload"
                        accept="image/*"
                        required
                    />
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="mb-3">
                    <label for="inputDescription" class="form-label"
                        >Description</label
                    >
                    <textarea
                        name="description"
                        type="text"
                        class="form-control"
                        id="inputDescription"
                        rows="4"
                        placeholder="Provide a description of the item or additional information"
                    ></textarea>
                </div>
            </div>
            <div class="col-md-6">
                <div class="mb-3">
                    <label for="selectCategory" class="form-label"
                        >Item Category</label
                    >
                    <select id="selectCategory" name="category" class="form-select">
                        <option>Weapon</option>
                        <option>Armor</option>
                        <option>Boss</option>
                        <option>NPC</option>
                        <option>Item</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="mb-3">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-center">
                <button type="submit" class="btn btn-primary btn-lg"
                    >Submit Item</button
                >
            </div>
        </div>
    </div>
</form>

{#if form?.sucsess}
    <p style="color: green;">Artist created</p>
{/if}
