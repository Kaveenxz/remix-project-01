import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import mainStyle from '~/styles/home.css'
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main id="content">
      <h1>A better way of keeping track of your notes </h1>
      <p>Try out early beta and never loose track of your notes again!</p>
      <p id="cta">
        <Link to="/notes">Add Note</Link>
      </p>
    </main>
  );
}

export const links : LinksFunction = () =>[
  {rel:'stylesheet', href:mainStyle}
]