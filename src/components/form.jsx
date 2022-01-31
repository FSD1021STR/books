import React, {useState} from "react";

const BookForm = () => {

    
        /*
        const data = {
            "titulo": "test",
            "editorial": "hgwaiuehw",
            "precio": "31"
        }

        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        }

        fetch("http://localhost:8000", requestOptions)
            .then((response) => response.json())
            .then((json) => setTypes(json.results))
        */
    

    const [title,setTitle] = useState()
    const [editorial,setEditorial] = useState()

    function handleSubmit(event) {
        event.preventDefault();
        console.log("submit");
        // TODO: validar campos
        
        const data = {
            "titulo": "test",
            "editorial": "hgwaiuehw",
            "precio": "31"
        }

        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        }

        fetch("http://localhost:8000", requestOptions)
            .then((response) => response.json())
            .then((json) => console.log(json.results))
            .catch((error) => {
                console.error('Error: ', error)
            })
    }

    return (
        <form
            style = {{
                marginTop: "50px"
            }
        }

        action="https://www.nuclio.school"

        onSubmit={handleSubmit}
        >
            <label>title</label>
            <input type="text" name="title" onChange={(event) => setTitle(event.target.value)} />

            <label>editorial</label>
            <input type="text" name="editorial" onChange={(event) => setEditorial(event.target.value)} />

            <button type="submit">Enviar</button>

        </form>
    )
}

export default BookForm;