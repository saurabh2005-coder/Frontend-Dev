# Student Result Management (No Vite)

This is the same student project recreated **without Vite**. It uses React via CDN and Babel in the browser so no build tools are required.

## Run instructions

1. Install Node.js if not already installed.

2. Start JSON Server to serve `db.json`:
   ```
   npx json-server --watch db.json --port 3000
   ```
   Keep this terminal open.

3. Serve the static files. Options:
   - Using `npx http-server`:
     ```
     npx http-server -c-1
     ```
     Then open `http://127.0.0.1:8080/` (default) or the URL printed.
   - Or open `public/index.html` in VS Code with Live Server extension.
   - Opening the HTML directly in the browser file:// may work but using a local static server is recommended.

4. Open the site (example): `http://127.0.0.1:8080/` and click **Load Students**.

## Notes
- JSON Server runs on `http://localhost:3000/students`.
- The app makes fetch requests to this URL, so ensure JSON Server is running.
- This setup is intentionally simple for student use (no bundler). Babel compiles JSX in the browser — fine for demos, not for production.

