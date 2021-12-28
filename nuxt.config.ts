import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    buildModules: [
        'nuxt-windicss',
    ],
    publicRuntimeConfig: {
        WEBSITE_NAME: 'xin's blog'
    },
    privateRuntimeConfig: {
        CLIENT_ID: 14454d53-0c1d-4ce6-ad80-06f9b386970e,
        CLIENT_SECRET: zDd7Q~risFWZDoj3ZTFYjdMuafWqUu.uiqLYZ,
        REDIRECT_URI: 'http://localhost:3000',
        REFRESH_TOKEN: M.R3_BAY.c33a0914-ec48-4670-9252-ea618319cd30,
        ROOT_PATH: '/Blog',
        ONEDRIVE_URI: 'https://graph.microsoft.com/v1.0/me/drive',
        OAUTH_URL: 'https://login.microsoftonline.com/common/oauth2/v2.0/token'
    }
})
