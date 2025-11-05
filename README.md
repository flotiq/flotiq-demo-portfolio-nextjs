## Getting Started

Import data to your space:
```bash
npx flotiq-cli import .flotiq [flotiqApiKey]
```

Prepare .env.local file (data and plugins):
```
FLOTIQ_API_KEY=RO_KEY
FLOTIQ_EDITOR_KEY=KEY_FROM_PREVIEW_PLUGIN
PUBLIC_URL=http://localhost:3000
```

or use flotiq-setup:
```bash
npx flotiq-setup --nextjs
```

Run the development server:

```bash
yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Enable eslint and prettier in the IDE when making changes to the code.

For ensuring correct formatting:

```
yarn lint
yarn format
```

If there was changed to types in Flotiq run:

```
yarn exec flotiq-api-typegen
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
