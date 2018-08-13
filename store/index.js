import Vuex from 'vuex'
import axios from 'axios'
import Cookie from 'js-cookie'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPost: {},
            loadedPosts: [],
            token: null
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts
            },
            addPost(state, post) {
                state.loadedPosts.push(post)
            },
            editPost(state, editedPost) {
                const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id)
                state.loadedPosts[postIndex] = editedPost
            },
            setToken(state, token) {
                state.token = token;
            },
            clearToken(state) {
                state.token = null;
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {   
                return axios.get('https://nuxt-blog-19273.firebaseio.com/posts.json')
                .then(res => {
                    const posts = []
                    for(const key in res.data) {
                        posts.push({...res.data[key], id: key})
                    }
                    vuexContext.commit('setPosts', posts)
                })
                .catch(e => context.error(e));
            },
            addPost(vuexContext, postData) {
                const createdPost = {
                    ...postData,
                    updatedDate: new Date()
                }
                return axios.post(`https://nuxt-blog-19273.firebaseio.com/posts.json?auth=${vuexContext.state.token}`, createdPost)
                .then((response) => {
                    vuexContext.commit('addPost', {
                        ...createdPost,
                        id: response.data.name
                    })
                })
                .catch((error) => {
                    console.log(error)
                });
            },
            editPost(vuexContext, editedPost) {
                return axios.put(`https://nuxt-blog-19273.firebaseio.com/posts/${editedPost.id}.json?auth=${vuexContext.state.token}`, editedPost)
                .then( response => {
                    vuexContext.commit('editPost', editedPost)
                })
                .catch( error => {
                    console.log(error)
                }) 
            },
            authenticateUser(vuexContext, authData) {
                let url = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${process.env.fbApiKey}`
                if(authData.isLogin) {
                    url = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${process.env.fbApiKey}`
                }
                
                return axios.post(url, {
                    email: authData.email,
                    password: authData.password,
                    returnSecureToken: true
                })
                .then(response => {
                    vuexContext.commit('setToken', response.data.idToken)
                    localStorage.setItem('token', response.data.idToken)
                    localStorage.setItem('tokenExpiration', new Date().getTime() + +response.data.expiresIn * 1000)
                    Cookie.set('jwt', response.data.idToken)
                    Cookie.set('expirationDate', new Date().getTime() + +response.data.expiresIn * 1000);
                }).catch(error => {
                    console.log(error)
                })
            },
            initAuth(vuexContext, req) {
                let token;
                let expirationDate
                if(req) {
                    if(!req.headers.cookie ) {
                        return;
                    }
                    const jwtCookie = req.headers.cookie
                    .split(';')
                    .find(c => c.trim().startsWith('jwt='))
                    if(!jwtCookie) {
                        return;
                    }
                    token = jwtCookie.split('=')[1];
                    expirationDate = req.headers.cookie
                    .split(';')
                    .find(c => c.trim().startsWith('expirationDate='))
                    .split('=')[1]
                } else {
                    token = localStorage.token;
                    expirationDate = +localStorage.tokenExpiration;               
                }
                if(new Date().getTime() > expirationDate || !token) {
                    vuexContext.dispatch('logout')
                    return;
                }                     
                vuexContext.commit('setToken', token);
            },
            logout(vueContext) {
                vueContext.commit('clearToken');
                Cookie.remove('jwt')
                Cookie.remove('expirationDate')
                if(process.client) {
                    localStorage.token = '';
                    localStorage.tokenExpiration = '';
                }
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts;
            },
            isAuthenticated(state) {
                return state.token != null;
            }            
        }
    })
}

export default createStore