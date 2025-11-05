<a href="https://flotiq.com/">
    <img src="https://editor.flotiq.com/fonts/fq-logo.svg" alt="Flotiq logo" title="Flotiq" align="right" height="60" />
</a>

Next.js demo for portfolio with Flotiq source
===========================

This is a modern, fully-featured portfolio website built with Next.js and powered by Flotiq headless CMS. It showcases how to create a professional portfolio website with dynamic content management, internationalization, and modern web development best practices.

Check our live demo: [https://demo-app.flotiq.com/](https://demo-app.flotiq.com/) 

## Key Features

**🌐 Internationalization**
- Multi-language support (English and Polish included)
- Automatic language detection and switching
- Localized content management through Flotiq

**🎨 Modern UI/UX**
- Built with Tailwind CSS for responsive design
- Dark/light theme toggle with next-themes
- Shadcn/ui components for consistent design system
- Smooth animations and transitions

**📝 Content Management**
- **Projects**: Showcase your work with image galleries, descriptions, and tags
- **About Page**: Company/personal story, mission, team members, and journey timeline
- **Contact**: Contact information and forms
- **Real-time content editing** with Flotiq's live preview

**⚡ Performance & Developer Experience**
- Next.js with App Router and Turbopack
- TypeScript for type safety
- Flotiq SDK with auto-generated types
- ESLint and Prettier for code quality
- Optimized images with Next.js Image component

**🔧 Technical Features**
- Server-side rendering (SSR) and static generation
- SEO-friendly with proper meta tags
- Responsive design for all screen sizes
- Git-based content versioning through Flotiq

## Getting Started

### Environment variables

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

If you want to read more about our flotiq-nextjs-setup CLI, refer to our [Flotiq NextJS docs](https://flotiq.com/docs/Universe/nextjs/nextjs-setup/).

### Importing data to the Flotiq

Import data to your space:
```bash
npx flotiq-cli import .flotiq [flotiqApiKey]
```

_Note: You need to put your Read and write API key as the `flotiqApiKey` for import to work, You don't need any content types in your account._

## Content Types

The project includes pre-configured Flotiq content types:
- **Project**: Portfolio items with galleries, descriptions, and tags
- **About**: Company/personal information with team and journey sections
- **Contact**: Contact information and form handling
- **Media**: Image and file management

### Development

Install dependencies:

```bash
yarn
```

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Flotiq codegen - install SDK

This project usses [Flotiq API SDK](https://www.npmjs.com/package/@flotiq/flotiq-api-sdk) library for types safety and IDE autocompletion of user data types.

If you make any changes (additions or deletions) to the `content type definitions` in your Flotiq account, you need to run:

```
yarn exec flotiq-api-typegen
```

### Code format and lint

Enable eslint and prettier in the IDE when making changes to the code.

For ensuring correct formatting:

```
yarn lint
yarn format
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

If you want to learn more about Flotiq, take a look at the Flotiq documentation:

- [Flotiq Documentation](https://flotiq.com/docs/)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Collaborating

If you wish to talk with us about this project, feel free to hop on our [![Discord Chat](https://img.shields.io/discord/682699728454025410.svg)](https://discord.gg/FwXcHnX).

If you found a bug, please report it in [issues](https://github.com/flotiq/flotiq-demo-portfolio-nextjs/issues).