import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";
import Button from "./Button";


export default function NewProject({onAdd, onCancel}) {

    const modal = useRef();

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave(){
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const entereddueDate = dueDate.current.value;

        if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || entereddueDate.trim() === ''){
            // Show error modal
            modal.current.open();
            return;

        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: entereddueDate
        })
    }

    return (
        <>
        <Modal ref={modal} buttonCaption="Okay">
            <h2 className="text-xl font-bold text-stone-500 mt-4 my-4">Invalid Input</h2>
            <p className='text-stone-400 mb-4'>OOps ... Looks like you forget to enter a value</p>
            <p className='text-stone-600 mb-4'>Please Make sure you provide a valid value for every input</p>
             </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><Button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</Button></li>
                <li><button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></li>
            </menu>
            <div>
                <Input ref={title} label="Title"/>
                <Input ref={description} label="Decsription" textarea/>
                <Input type="date" ref={dueDate} label="Due Date" />
            </div>
        </div>
        </>
    )
}