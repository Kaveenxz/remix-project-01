import { LinksFunction } from '@remix-run/node'
import newNoteCss from './NewNote.css'
import { Form, useNavigation } from '@remix-run/react'

export default function NewNote(){
    const navigation = useNavigation();
    const isSubmiting = navigation.state === 'submitting'
    return(
        <div className="form">
            <Form action="" method="post" id="note-form" className='note-form'>
            <p>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" required/>
            </p>
            <p>
                <label htmlFor="content">Content</label>
                <textarea name="content" id="content" rows={5} required />
            </p>
            <div className="form-actions">
                <button disabled={isSubmiting}>{isSubmiting ? 'Adding...' : 'Add Note'}</button>
            </div>
        </Form>
        </div>
    )
}

export const links : LinksFunction = ()=>[
    {rel:'stylesheet', href: newNoteCss}
]