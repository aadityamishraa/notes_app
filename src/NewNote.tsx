import NoteForm from "./NoteForm"

export type Note ={
   id: string
} & NoteData

export type NoteData ={
  title: string
  markdown: string
  tags: Tags[]
}

export type Tags ={
  id: string
  label: string
}


const NewNote = () => {
  return (
    <>
        <h1 className="mb-4">New Note</h1>
        <NoteForm onSubmit={(NoteData)=>NoteData}></NoteForm>
    </>
  )
}

export default NewNote
