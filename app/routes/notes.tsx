import { LinksFunction } from "@remix-run/node";
import NewNote, {links as newNoteCss} from "~/components/NewNote";


export default function NotesPage(){
    return(
        <div>
            <NewNote/>
        </div>
    )
}

export const links: LinksFunction = () =>[
    ...newNoteCss()
]