import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import MainNavigation from "./components/MainNavigation";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import mainStyle from '~/styles/main.css'
export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <MainNavigation></MainNavigation>
        </header>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export const links: LinksFunction = ()=>[
  {rel:"stylesheet", href:mainStyle}
]

export function ErrorBoundary() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <title>Error</title>
      </head>
      <body>
        <header>
          <MainNavigation></MainNavigation>
        </header>
        <main className="error-body">
        <div className="error-container">
            <div className="error-box">
              <h1>An error has occurred</h1>
              <p>Something went wrong!</p>          
              <p>Back to <Link to="/">safety</Link> !</p>
            </div>
          </div>
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
