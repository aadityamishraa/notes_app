import NoteForm from "./NoteForm"


type Note ={
  data: String
};

type NewNote={
  title: string,
  markdown: string
};
const NewNote = () => {
  return (
    <>
        <h1 className="mb-4">New Note</h1>
        <NoteForm></NoteForm>
    </>
  )
}

export default NewNote
