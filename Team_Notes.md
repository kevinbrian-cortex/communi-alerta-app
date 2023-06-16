# Team Coding Convention - Project Contribution

## Concepts

- Every file in the `app` directory automatically becomes a route in the mobile navigation.

## Routing

- All routes must be created within the root `app` directory.
- File structure and naming conventions:
  - `app/home.js` matches `/home`.
  - `app/settings/index.js` matches `/settings`.
  - `app/[user].js` matches any unmatched path like `/evanbacon` or `/expo`.

## Pages

- Pages are defined by exporting a React component as the default value from a file in the `app` directory.
- Files named `index.js` add no path segment to the URL. For example, `app/index.js` matches `/`.

## Dynamic Routes

Dynamic routes match any unmatched path at a given segment level.

- `app/blog/[slug].js` matches `/blog/123` in the app and in the browser.
- `app/blog/[...rest].js` matches `/blog/123/settings` in the app and in the browser.

## Layout

Layouts are used to share elements like headers and tabs to persist between pages.

To create a layout route for a directory, follow these guidelines:

- Create a file named `_layout.[ts.js]` in the directory.
- Export a React component as the default value.

Example:

- `app/home/_layout.js`

## Guidelines

- Ensure code consistency by following the existing code style and formatting patterns.
- Write clear and concise code comments to improve code understandability.
- Document any significant code changes or additions in the project's documentation.
- Follow best practices for error handling, input validation, and data sanitization.
- Write meaningful commit messages and use descriptive branch names to provide clear context during code reviews.
- Keep the codebase clean by removing unused code, commented-out sections, and debugging statements before submitting changes.

- Respect and adhere to any additional project-specific guidelines or conventions provided by the team.

By adhering to this coding convention, we can ensure consistent and maintainable code across the project. If you have any questions or need further clarification, don't hesitate to reach out to the team. Happy coding!
