import { useState } from 'react';
import DisplayTable from './DisplayTable';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
const ShortenURL = () => {

    const [url, setUrl] = useState(null);
    const [shortUrlData, setShortUrlData] = useState([]);

    const formsubmit = () => {
        if (url === null) {
            alert('No value');
        }
        else {
            fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    setShortUrlData([...shortUrlData, data]);
                });
        }
    }

    return (
        <>
            <Form style={{margin: '25px'}}>
                <Container>
                    <Row>
                        <Col sm={8}><Form.Control size="lg" type="text" id="OriginalURL" name="OriginalURL" placeholder="Insert link" onChange={(e) => setUrl(e.target.value)} />
                        </Col>
                        <Col sm={4}><Button variant="primary" value="Shorten My URL" onClick={formsubmit}>Shorten My URL</Button>{' '}
                        </Col>
                    </Row>

                </Container>
            </Form>
            {shortUrlData && <DisplayTable data={shortUrlData} />}
        </>

    )

}

export default ShortenURL;