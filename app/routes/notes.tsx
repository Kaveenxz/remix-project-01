import { LinksFunction, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import NewNote, {links as newNoteCss} from "~/components/NewNote";
import NoteList, {links as noteListCss}  from "~/components/NoteList";
import {getStoedNotes, storeNotes } from '~/data/notes'

export default function NotesPage(){
    const notes = useLoaderData()
    return(
        <div>
            <NewNote/>
            <NoteList notes={notes} />
        </div>
    )
}
export async function loader() {
    const notes = await getStoedNotes();
    return notes;
}

export async function action({request}:any){
    const formData = await request.formData();
    const noteData = Object.fromEntries(formData);

    if(noteData.title.trim().length < 5){
        return {message: 'Invalid title -must be at least 5 characters long.'}
    }

    const existingNotes = await getStoedNotes()
    noteData.id = new Date().toISOString();
    const updatedNotes = existingNotes.concat(noteData);
    await storeNotes(updatedNotes)
    return redirect('/notes')
}

export const links: LinksFunction = () =>[
    ...newNoteCss(), ...noteListCss()
]