## Getting Started nextjs V- 14.0.3
### npm create next-app

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Run the production server
npm run build
npm start

public folder data build in next app but new upcomming images will not store in public because code has aalready build, new to push images to any cloud service provider. ex s3

### Note

within app folder create any directory and file name should page.js in this case url looks like this : baseURL+directory (page.js have ther own component that will load on browser)
By default Next JS component will load on server side, If you have using any client side methods/hooks please use "use client" at the top of file.
