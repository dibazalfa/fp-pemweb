<template>
    <div class="global-container">
        <nav class="navbar navbar-expand-lg" style="background-color: #c0ded9;" >
            <h1 class="navbar-brand" style="margin-left: 20px;">mungil.url</h1>
            <div class="btn-group">
                <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bi bi-person-circle"></i>         
                </button>
            <ul class="dropdown-menu">
                <!-- <li class="dropdown-item"><router-link to="/create">Shorten Link</router-link></li> -->
                <li><a class="dropdown-item" href="dashboard">Homepage</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="create">Shorten Link</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#" @click="App.Logout()">Logout</a></li>
            </ul>
            </div>
        </nav>
        <div class="taskslist">
            <table class="table">
                <thead class="table table-light">
                    <tr>
                        <th class="content">Long Link</th>
                        <th class="category">Short Link</th>
                        <th class="edit">Edit</th>
                        <th class="delete">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="link in App.links" :key="link.id">
                        <td>
                            {{link.long}}
                        </td>
                        <td>
                            {{link.short}}
                        </td>
                        <td>
                            <button class="btn btn-primary">Edit</button>
                        </td>
                        <td>
                            <button class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>    
        </div>
    </div>
    </template>
    
    <script>
    import {useApp} from '../stores/index';
    export default {
        setup() {
          const App = useApp();
          return {
            App,
          }
        },
        created() {
            this.App.getLinks();
        }
      }
    </script>
    
    <style scoped>
    .global-container {
        height: 745px;
    }
    
    </style>