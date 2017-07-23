import Home from './components/Home/Home.vue'
import Like from './components/Like/Like.vue'
import Post from './components/Post/Post.vue'
import Profile from './components/Profile/Profile.vue'
import Search from './components/Search/Search.vue'


export const routes = [
    {path: "/home", component: Home},
    {path: "/like", component: Like},
    {path: "/post", component: Post},
    {path: "/profile", component: Profile},
    {path: "/search", component: Search}
]