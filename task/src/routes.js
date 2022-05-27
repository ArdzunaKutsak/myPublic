import User from "./pages/User"
import UserList from "./pages/UserList"
import Post from "./pages/Post"
import PostList from "./pages/PostList"
import { USER_ROUTE,  USER_LIST_ROUTE, POST_ROUTE, POST_LIST_ROUT } from "./utils/consts"

export const routes = [
    {
        path: USER_ROUTE,
        Component: User,
    },
    {
        path: USER_LIST_ROUTE,
        Component: UserList,
    },
    {
        path: POST_ROUTE,
        Component: Post,
    },
    {
        path: POST_LIST_ROUT,
        Component: PostList,
    },
]