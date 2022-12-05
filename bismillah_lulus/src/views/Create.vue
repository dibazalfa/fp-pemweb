<template>
     <nav class="navbar navbar-expand-lg bg-success p-2 text-dark">
      <div class="container">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Links</a>
            </li>
          </ul>
        </div>
        <form class="d-flex">
          <img src="./images/user/user.jpg" alt="user" />
          <p>Your Account</p>
          <!-- <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button> -->
        </form>
      </div>
    
    <div class="addtask">
        <h3>Create new shorten link</h3>
        <br>
        <form @submit.prevent="addTask">
            <div class="form-group row">
               
                <label for="newTaskDescription" class="text-left">Destination</label>
                <input type="text" class="form-control" ref="desc" v-model="this.description" placeholder="Enter your long URL here..." required>
                <br>
                <!-- <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="newCampusTask" value="Campus Task" v-model="newTags">
                    <label class="form-check-label" for="Campus Task">Campus Task</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="newOrganizationDuty" value="Organization Duty" v-model="newTags">
                    <label class="form-check-label" for="Organization Duty">Organization Duty</label>
                </div> -->
             
                <label for="titleLink">Title (optional)</label>
                <input type="text" class="form-control" ref="desc"  placeholder="Enter your title link" required>
                
                <label for="titleLink">Costum link smol.ly/</label>
                <input type="text" class="form-control" ref="desc" placeholder="comstum-link" required>
                

               
    <!-- <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com">
    </div> -->
            </div>
            <br>
            <div class="shorten">
            <button type="submit" class="btn btn-success"><router-link :to="'/link/'">SHORTEN</router-link></button>
        </div>
        </form>
        <br>
    </div>
</nav>
</template>

<script>


</script>

<style>
/* .addtask {
    text-align: center;
} */
h3 {
    text-align: center;
}
.shorten {
    text-align: center;
}

</style>