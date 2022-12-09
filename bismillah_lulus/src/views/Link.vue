<template>
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
    
    <style>
    /* tr {
        background-color: #3b3a30;
    } */
    /* .taskslist table th.edit,
    .taskslist table th.delete {
        width: 100px;
    }
    .taskslist tbody td.description {
        cursor: pointer
    }
    
    .completed {
        text-decoration: line-through;
    } */
    
    </style>