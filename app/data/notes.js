import fs from 'fs/promises';

export async function getStoedNotes(){
    const rawFileContent = await fs.readFile('notes.json', {encoding: 'utf-8'});
    const data = JSON.parse(rawFileContent);
    const storedNotes = data.notes ?? [];
    return storedNotes;
}

export function storedNotes(notes){
    return fs.writeFile('note.json', JSON.stringify({notes: notes || [] }))
}