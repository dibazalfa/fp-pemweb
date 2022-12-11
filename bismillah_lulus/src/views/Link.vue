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
                <thead class="table">
                    <tr style="font-size: 20px;">
                        <th class="content" >Long Link</th>
                        <th class="category">Short Link</th>
                        <th class="edit">Edit</th>
                        <th class="delete">Delete</th>
                        <th class="count">Click Count</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="link in App.links" :key="link.id">
                        <td>
                            {{link.long}}
                        </td>
                        <td>
                            <!-- <router-link to="">http://localhost:5173/{{link.short}}</router-link> -->
                            <!-- {{App.createdLink}} -->
                            <span @click="App.redirect(link.short)">mungil.url/{{link.short}}</span>
                        </td>
                        <td>
                            <button v-if="link.edit == false" class="btn btn-primary" @click="link.edit = true">Edit</button>
                            <div v-if="link.edit == true">
                                    <input class="form-control" v-model="link.long">
                                    <input class="form-control" v-model="link.short">
                                    <button class="btn btn-success" @click="App.editLink(link.id), link.edit = false">Save</button>
                            </div>
                        </td>
                        <!-- wait gatau -->
                        <td>
                            <!-- <button class="btn btn-danger" @click.prevent="App.deleteShort(short.id)">Delete </button> -->
                            <button class="btn btn-danger" @click.prevent="App.deleteShort(link.id)" type="button">Delete </button>
                        </td>
                        <td class="text-center">
                            <span>{{link.count}}</span>
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
        data() {
        return {
            show: false,
        }
        },
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

    .taskslist {
        padding: 20px;
    }
    
    </style>