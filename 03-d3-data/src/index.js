import {json} from "d3-fetch"
import {max, min} from "d3-array"


Promise.all([
    json("https://jsonplaceholder.typicode.com/posts"),
    json("https://jsonplaceholder.typicode.com/users")
])

.then(([posts, users]) => {

    console.log("Posts" , posts)
    console.log("Users" , users)


    users.forEach(user => {
        
        let new_object = {
            nom_utilisateur: "",
            ville: "",
            nom_companie: "",
            titres_posts: [],
        }
    })

    posts.forEach(post => {
        if(post.userId === users.id){
            object.titres_posts.push(post.title)
        }
    })

    console.log(object)
})






