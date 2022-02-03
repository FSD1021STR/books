import React, {useState,useContext,createContext} from "react";

const BookForm = () => {

    console.log(process.env.REACT_APP_ENVIRONMENT)

    const environments = {
        'dev': {
            'api': 'http://localhost:8000',
            'limit': 3,
            'theme': 'dark',
            'debug': true,
            'payments': false,
        },
        'sandbox': {
            'api': 'https://test.myapp.com',
            'limit': 10,
            'theme': 'pink',
            'debug': true,
            'payments': false
        },
        'prod': {
            'api': 'https://www.myapp.com',
            'limit': 10,
            'theme': 'light',
            'debug': false,
            'payments': true
        }
    }

    const themes = {
        'light': {
            'text': 'black',
            'background': 'white'
        },
        'dark': {
            'text': 'white',
            'background': 'black'
        }
    }

    var EnvironmentContext = ""

    console.log("hola");

    if (process.env.REACT_APP_ENVIRONMENT === 'prod'){
        EnvironmentContext = createContext(environments.prod)
    }
        
    else if (process.env.REACT_APP_ENVIRONMENT === 'sandbox') {
        EnvironmentContext = createContext(environments.sandbox)
    }
    else {
        EnvironmentContext = createContext(environments.dev)
    }

    const environment = useContext(EnvironmentContext)
    

    console.log ('%%%%%%%%')
    console.info (environment.api)
    console.info (environment.limit)
    console.info (environment.theme)
    console.info (environment.debug)
    console.log ('%%%%%%%%')

    //const ThemeContext = createContext(themes.dark)
    //const theme = useContext(ThemeContext)

    const theme = themes.light

    console.log('text: '+theme.text)
    console.log('background: '+theme.background)

    console.log(themes.light)

    const [data,setData] = useState({
        'title':'',
        'editorial':'',
    })

    function handleSubmit(event) {
        event.preventDefault();
        console.log("submit");
        // TODO: validar campos
        
        

        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        }

        fetch(environment.api, requestOptions)
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
            <input type="text" name="title" onChange={(event) => setData({...data,'title':event.target.value})} />

            <label>editorial</label>
            <input type="text" name="editorial" onChange={(event) => setData({...data,'editorial':event.target.value})} />

            <button type="submit">Enviar</button>

        </form>
    )
}

export default BookForm;