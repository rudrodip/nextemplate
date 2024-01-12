# NexTemplate

Hey there, welcome to NexTemplate – my personal indie project! This collection brings together custom templates and components crafted with Next.JS, shadcn/ui, and TailwindCSS. It's a space where I share pieces of code that might make your web development journey a bit smoother.

## Features

1. **Diverse Collection**: NexTemplate offers a bunch of reusable templates and components that I've put together. They're not perfect, but they've been useful for me, and I hope you find them helpful too.

2. **Search Functionality**: Need something specific? Use the search feature to quickly find the components you're looking for.

3. **Live Demos**: See the components in action with live demos. The demos include code snippets in TypeScript, CSS, and Tailwind for your convenience.

4. **Code Organization**: I've tried to organize the components into different files, following some good practices for clarity. It's not perfect, but it gets the job done.

5. **Easy Copy-Paste Integration**: Feel free to copy and paste the code snippets directly into your project. It's a quick and straightforward way to integrate these components.

6. **Fully Open Sourced**: NexTemplate is fully open source. Dive into the code, make changes, and use it as you see fit. Just remember, it's not perfect, and I'm always open to improvements.

## Getting Started

To get started with NexTemplate, visit the [NexTemplate](https://nextemplate.vercel.app). The project isn't flawless, but it's a work in progress.

## Contributing

Contributions to NexTemplate are welcome and encouraged! If you have suggestions, feature requests, or you found a bug, feel free to open an issue. If you'd like to contribute code, follow these steps:

1. **Fork the repository**: Click the "Fork" button in the upper right corner of this repository to create your copy.

2. **Clone your fork**: Clone your forked repository to your local machine using the following command:

   ```bash
   git clone https://github.com/rudrodip/nextemplate
   ```

3. **Create a branch**: Create a new branch for your contribution:

   ```bash
   git checkout -b feature-or-fix-name
   ```

4. **Make changes**: Make your changes or additions to the codebase. Ensure your code follows the project's coding guidelines.

5. **Test your changes**: Run the development server locally to test your changes:

```bash
npm run dev
# or
yarn dev
# or
pnpm run dev
# or
bun run dev
```

6. **Commit your changes**: Commit your changes with a meaningful commit message:

```bash
git add .
git commit -m "Add feature or fix"
```

7. **Push changes**: Push your changes to your forked repository:

```bash
git push origin feature-or-fix-name
```

8. **Create a Pull Request (PR)**: Open a Pull Request on GitHub against the dev branch. Provide a clear title and description of your changes.
   **Make sure to target the dev branch, not the main branch.**

9. **Review and Merge**: Maintainers will review your contribution. Once approved, your changes will be merged into the main branch.

## Adding a New Component

If you'd like to contribute a new component to NexTemplate, please follow these guidelines:

1. **Component Location**: Place the new component in the `src/components/templates/<component_folder>` directory.

2. **Mandatory Files**: Each component folder must include the following two files:

   - `component-details.json`: Contains metadata about the component.
   - `main.tsx`: Should export the component as the default export.

3. **Component Details Metadata**:

   - The `component-details.json` file must export an object of type `ComponentDetails`.
   - Example of `ComponentDetails` type:
     ```
     export type ComponentDetails = {
       title: string;
       desc: string;
       tags: string[];
       published: boolean;
       date: string; // Format: "2024-01-12T17:20:00.000Z"
     };
     ```
   - Ensure that the `date` string follows the specified JavaScript format.

4. **File Structure**: There can be multiple files within the component folder, but subdirectories are not allowed.

## Deployment

To deploy NexTemplate, you can use your preferred hosting platform. Here's a general guide:

1. **Build your app**:

```bash
npm run build
# or
yarn build
# or
pnpm run build
# or
bun run build
```

2. **Deploy to your platform of choice**:

   - If using Vercel, connect your GitHub repository, and Vercel will handle the deployment seamlessly.
   - For other platforms, upload the contents of the `out/` directory generated after the build to your server.

3. **Visit your deployed site**: Open your browser and visit your deployed site to ensure everything is working as expected.

## Support

If you encounter any issues, have questions, or just want to chat, knock me on [Discord](https://discordapp.com/users/841126921886498817) / [Twitter](https://twitter.com/rds_agi) or open an issue on GitHub. Your feedback is valuable, and we appreciate your contribution!

Thank you for being a part of the NexTemplate community!
