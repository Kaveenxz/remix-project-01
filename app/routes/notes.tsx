import { LinksFunction, redirect } from "@remix-run/node";
import NewNote, {links as newNoteCss} from "~/components/NewNote";
import NoteList, {links as noteListCss}  from "~/components/NoteList";
import {getStoedNotes, storeNotes } from '~/data/notes'

export default function NotesPage(){
    return(
        <div>
            <NewNote/>
        </div>
    )
}

export async function action({request}:any){
    const formData = await request.formData();
    const noteData = Object.fromEntries(formData);

    const existingNotes = await getStoedNotes()
    noteData.id = new Date().toISOString();
    const updatedNotes = existingNotes.concat(noteData);
    await storeNotes(updatedNotes)
    return redirect('/notes')
}

export const links: LinksFunction = () =>[
    ...newNoteCss(), ...noteListCss()
]