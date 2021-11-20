import { Table } from 'react-bootstrap';

const DisplayTable = ({ data }) => {


    function copyToClipboard(texttocopy) {        
        navigator.clipboard.writeText(texttocopy);
        alert('Copied');
      };

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Original URL</th>
                    <th>Short URL</th>
                    <th>Copy Link</th>
                </tr>
            </thead>
            <tbody>
                {data.map(row =>
                    <tr>
                        <td>{row.result.original_link}</td>
                        <td>{row.result.short_link}</td>
                        <td><input type="button" value="Copy Link" onClick={() => copyToClipboard(row.result.short_link)}/></td>
                    </tr>
                )}
            </tbody>
        </Table>
    );
}

export default DisplayTable;