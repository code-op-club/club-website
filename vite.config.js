import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'

// The original vitejs.dev setup
// https://vitejs.dev/config/
//export default defineConfig({
//  plugins: [react()]
//})

// This is needed for auth0, since we need
// to run https for that to work, and we
// don't have an SSL cert yet.  This will work
// on localhost, but isn't enough for c2w.tech.
export default defineConfig({
   server: { https: true },
   plugins: [ mkcert(), react() ]
})
