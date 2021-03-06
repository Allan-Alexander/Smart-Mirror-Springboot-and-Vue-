import axios from 'axios'

const AXIOS = axios.create({
    timeout: 2000,
    headers: {
              
            }
});

export default{
    getAllSwitch(){
        return AXIOS.get('http://localhost:9000/api/switch/all');
    },
    deleteSwitch(id){
        return AXIOS.delete('http://localhost:9000/api/switch/delete/'+id);
    },
    getAllTodo(){
        return AXIOS.get('http://localhost:9000/api/todo/all');
    },
    deleteTodo(id){
        return AXIOS.delete('http://localhost:9000/api/todo/delete/'+id);
    },
    getNews(){
        return AXIOS.get('http://newsapi.org/v2/top-headlines?country=in&apiKey=c82c749536ea43a7ad66b6e6d027891d');
    },

}
