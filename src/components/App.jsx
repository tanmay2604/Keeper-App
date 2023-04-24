import React,{useState} from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import Note from "./Note";
import Input from "./Input"



function App(){

    const[notes,setNotes]=useState([]);

    function addNote(inputText){
        setNotes(prevItem=>{
            return[...prevItem,inputText]
        });

    }

    function deleteNote(id){
        setNotes(prevItem=>{
            return prevItem.filter(
                (item,index)=>{
                    return index!==id;
                }
            )
        })
    }

   

    return (<div>

    <Heading/>
   <Input onAdd={addNote}/>
  { notes.map((noteItem,index)=>{
    return <Note
    key={index}
    id={index}
        title={noteItem.title}
        content={noteItem.content}
        onDelete={deleteNote}
    />
   })}
  
    <Footer/>
    </div>)
   
}

export default App;