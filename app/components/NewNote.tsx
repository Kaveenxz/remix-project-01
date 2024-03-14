import { LinksFunction } from '@remix-run/node'
import newNoteCss from './NewNote.css'

export default function NewNote(){
    return(
        <form action="" method="post" id="note-form">
            <p>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" required/>
            </p>
            <p>
                <label htmlFor="content">Content</label>
                <textarea name="content" id="content" rows={5} required />
            </p>
            <div className="form-actions">
                <button>Add Note</button>
            </div>
        </form>
    )
}

export const links : LinksFunction = ()=>[
    {rel:'stylesheet', href: newNoteCss}
]