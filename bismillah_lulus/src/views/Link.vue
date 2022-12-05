<template>
    <div class="taskslist">
         
            <table class="table">
                <thead class="table table-light">
                    <tr>
                        <th class="content">Link title</th>
                        <th class="category">Date</th>
                        <th class="edit">Edit</th>
                        <!-- <th class="status">Status</th> -->
                        <th class="delete">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(task,i) in tasks" :key="i">
                        <td class="description" v-bind:class="{completed: task.completed}" @click="toggleTask(task.id, task.completed)">
                        {{task.description}}</td>
                        <td class="tags" >
                            <!-- <p v-for="(data,index) in task.tags" :key="index">
                                {{data}}
                            </p>     -->
                           
                        </td>
                        <td>
                            <router-link :to="{'name' : 'update', 'params': {'id':task.id}}" class="btn btn-primary">Edit</router-link>
                        </td>
                        <!-- <td>
                            <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="">
                        </td> -->
                        <td><button class="btn btn-danger" @click="deleteTask(task.id)">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>    
        </div>
    </template>
    
    <script>

    
    
    
    </script>
    
    <style>
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