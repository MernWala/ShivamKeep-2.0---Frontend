import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const InitialNotes = [
        {
            "_id": "64296086aa185ea5152584ff",
            "user": "642944f69d22fc8e5bb398f4",
            "title": "Title of note updated",
            "description": "destion of notes updated",
            "tags": "testing updated",
            "date": "2023-04-02T11:01:26.935Z",
            "__v": 0
        },
        {
            "_id": "6429610baa185ea515258502",
            "user": "642944f69d22fc8e5bb398f4",
            "title": "Title of note",
            "description": "destion of notes",
            "tags": "Genral",
            "date": "2023-04-02T11:03:39.372Z",
            "__v": 0
        },
        {
            "_id": "6429610baa185ea515258504",
            "user": "642944f69d22fc8e5bb398f4",
            "title": "Title of note",
            "description": "destion of notes",
            "tags": "Genral",
            "date": "2023-04-02T11:03:39.478Z",
            "__v": 0
        }
    ]

    const [Notes, setNotes] = useState(InitialNotes)

    return (
        <NoteContext.Provider value={{ Notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState;