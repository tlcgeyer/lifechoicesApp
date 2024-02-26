<template>
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div class="container-fluid">
            <router-link to="/">
             <!--the pic of my logo for the portfolio-->
            <img src="https://i.ibb.co/cQpLV6G/logoo.png" alt="logo">
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-end d-flex w-100">
            <ul class="navbar-nav">
            <li class="nav-item">
                    <router-link to ="/" class="nav-link">Home<!--insert icon--></router-link> 
            </li>  
            <li class="nav-item">
                 <router-link to ="/about" class="nav-link">About<!--insert icon--></router-link>
            </li>
            <li class="nav-item">
                <router-link to ="/projects" class="nav-link">Projects<!--insert icon--></router-link>
            </li>    
            <li class="nav-item">
                <router-link to ="/admin" class="nav-link">Admin<!--insert icon--></router-link>
            </li>    
            <li class="nav-item">
                 <router-link to ="/contact" class="nav-link">Contact Me<!--insert icon--></router-link>
            </li>
            </ul>  
          </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'NavBar'
    }
</script>

<style scoped>
img[alt="logo"] {
    width: 90px;
}

.navbar-nav li {
        margin-inline: .2rem;
    }
</style>