import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
  ],
  server: {
  	host: 'localhost',
  	port: 4000,
  	open: true,
  	https: false,
  	proxy: {
  		"/": {
  			"target": "https://ybmini.oripetlife.com",
  			"changeOrigin": true,
  			"secure": false
  		}
  	}
  },
})