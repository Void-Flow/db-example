// import del pacchetto per stilizzare direttamente da javascript
import styled from 'styled-components';

// import funzioni client-friendly di Next
import Link from 'next/link';

// import funzioni di react
import { useState, useEffect } from 'react';


// stilizzazione della pagina
const Container = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    background-color: #f5f5f5;
    text-align: center;
    padding: 40px;
`
const Header = styled.div`
    color: #666;
    width: 100%;
    padding: 0;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
`
const Title = styled.h1`
    font-size: 3rem;
    padding: 10vh 0 0 0;
`
const Subtitle = styled.h2`
    font-size: 0.6rem;
`
const CustomLink = styled.a`
    color: #5c95ff;
    cursor: pointer;
`
const Button = styled.p`
    background-color: #5c95ff;
    color: #fff;
    border-radius: 10px;
    width: auto;
    padding: 7px 10px;
    width: 120px;
    margin: 0 auto;
    transition: all 0.3s ease;

    &:hover{
        background-color: #3565d0;
        cursor: pointer;
    }
`

// stilizzazione della tabella senza usare il tag html <table />
const TableContainer = styled.div`
    display: table;
    width: auto;     
    padding: 0;
    margin: 5vh 0 2vh 0;
    border-radius: 5px;
    border: 1px solid #ccc;
`
const Row = styled.div`
    display: table-row;
    color: #666;

    &:first-child {
        color: #fff;
        background-color: #5c95ff;
        border: 1px solid #5c95ff;
        border-bottom: 1px solid #000;
        pointer-events: none;
    }

    &:not(:first-child) {
        &:hover {
            background-color: #b9e6ff;
            cursor: pointer;
        }
    }
`
const Col = styled.div`
    display: table-cell; 
    padding: 5px 40px;
`

function Table({ data = [] }){
    return (
        <div style={{ width: "100%", display: "flex", flexFirection: "row", justifyContent: "center" }} >
            <TableContainer>
                <Row>
                    <Col>
                        Id
                    </Col>
                    <Col>
                        Nome
                    </Col>
                    <Col>
                        Email
                    </Col>
                    <Col>
                        Password
                    </Col>
                </Row>
                {
                    data.map((user, index) => {
                        return <Row>
                            <Col>{user.id}</Col>
                            <Col>{user.name}</Col>
                            <Col>{user.email}</Col>
                            <Col>{user.password}</Col>
                        </Row>
                    })
                }
            </TableContainer>
        </div>
    )
}


// funzione client side
// http://localhost:3000/
export default function Home() {

    // variabili di stato
    const [ data, setData ] = useState([]);
    
    // funzione per prendere i dati dalle API
    const fetchData = async (setter) => {
        const response = await fetch('http://localhost:3000/api/db/fetch');
        const result = await response.json();
        console.log(result);
        setter(result.data);
    }

    // funzione che viene eseguita solo quando viene visualizzata la pagina e/o caricato il componente
    useEffect(() => {
        fetchData(setData);
    }, []) // viene eseguita solo una volta

    // struttura della pagina
    return (
        <Container>
            <Header>
                <Title>Esempio SQL</Title>
                <Subtitle>Codice disponile su <Link href='https://github.com/Void-Flow/db-example'><CustomLink>GitHub</CustomLink></Link></Subtitle>
            </Header>
            <Table data={data}/>
            <Button onClick={() => fetchData(setData)}>
                Prendi dati
            </Button>
        </Container>
    )
}
