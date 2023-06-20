import {json} from "d3-fetch"
import {max, min} from "d3-array"

Promise.all([
json("https://jsonplaceholder.typicode.com/posts"),
json("https://jsonplaceholder.typicode.com/users")
])
.then(([posts, users]) => {
    console.log("Posts", posts);
    console.log("Users", users);

    //Filtrer les users qui ont écrit des posts
   let object1 = users.forEach(usr => {
        let posts_filtered = posts.filter(post => post.userId === usr.id)

        console.log("Posts filtrés", posts_filtered);

        let new_object = {
            "nom_utilisateur" : usr.name,
            "ville" : usr.address.city,
            "nom_comganie" : usr.company.name,
            "titre_posts" : posts_filtered.map(post => post.title),
        }
            return new_object;
         });

         console.log("Nouvel Objet", object1);
});




