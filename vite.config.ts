import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/taidalab/',
    build: {
        outDir: 'docs',
        emptyOutDir: true,
        rolldownOptions: {
            input: {
                main: 'index.html',
                404: '404.html'
            }
        }
    },
    clearScreen: false,
    server: {
        port: 8080,
        watch: {
            ignored: [
                "**/*.fs" // Don't watch F# files
            ]
        }
    }
})