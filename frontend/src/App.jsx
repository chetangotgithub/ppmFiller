import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Button,
  Typography,
} from '@mui/material';
import fileDownload from 'js-file-download';

function App() {
  const [finalobj, setfinalobj] = useState([]);
  const [obj, setobj] = useState({
    project: '',
    action: '',
    reason: '',
    hours: null,
  });
  const handelSubmit = (e) => {
    e.preventDefault();
    setfinalobj(finalobj.concat(obj));
    console.log(finalobj); // Corrected this line
  };
  const handleEmailPromptAndDownload = () => {
    // Here you can add email validation if needed
    const jsonData = JSON.stringify(finalobj, null, 2); // Pretty format the JSON file
    fileDownload(jsonData, 'finalobj.json');
    alert(`JSON file generated and downloaded.`);
  };

  return (
    <>
      <div>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            width: '300px',
            margin: '0 auto',
          }}
          onSubmit={handelSubmit}
        >
          <label htmlFor="project">Project : </label>
          <select
            name="project"
            id="project"
            value={obj.project}
            onChange={(e) => {
              setobj({ ...obj, project: e.target.value });
            }}
            style={{
              padding: '0.5rem',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
          >
            <option value="" disabled>
              Select an Project
            </option>
            <option value="Project A">Project A</option>
            <option value="Project B">Project B</option>
            <option value="Project C">Project C</option>
            <option value="Project D">Project D</option>
            <option value="Project E">Project E</option>
          </select>
          <label htmlFor="action">Action : </label>
          <select
            name="action"
            id="action"
            value={obj.action}
            onChange={(e) => {
              setobj({ ...obj, action: e.target.value });
            }}
            style={{
              padding: '0.5rem',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
          >
            <option value="" disabled>
              Select an action
            </option>
            <option value="meet">meet</option>
            <option value="ES devlopment">ES devlopment</option>
            <option value="Config">Config</option>
            <option value="Data Loding">Data Loding</option>
            <option value="Batchjob">Batchjob</option>
          </select>
          <label htmlFor="reason">Reason : </label>
          <input
            type="text"
            name="reason"
            id="reason"
            value={obj.reason}
            onChange={(e) => {
              setobj({ ...obj, reason: e.target.value });
            }}
            style={{
              padding: '0.5rem',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
          />

          <label htmlFor="hours">Hours : </label>
          <input
            type="number"
            name="hours"
            id="hours"
            value={obj.hours}
            onChange={(e) => {
              setobj({ ...obj, hours: e.target.value });
            }}
            style={{
              padding: '0.5rem',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
            step="0.01"
          />
          <button
            style={{
              padding: '0.5rem',
              borderRadius: '4px',
              border: 'none',
              backgroundColor: '#007bff',
              color: 'white',
              cursor: 'pointer',
            }}
          >
            Submit
          </button>
        </form>
      </div>
      <div
        style={{
          maxWidth: '80%',
          margin: '0 auto', // Centers the div horizontally

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <TableContainer component={Paper} elevation={3}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Project</strong>
                </TableCell>
                <TableCell>
                  <strong>Action</strong>
                </TableCell>
                <TableCell>
                  <strong>Reason</strong>
                </TableCell>
                <TableCell>
                  <strong>Hours</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {finalobj.map((obj) => {
                return (
                  <>
                    <TableRow>
                      <TableCell>{obj.project}</TableCell>
                      <TableCell>{obj.action}</TableCell>
                      <TableCell>{obj.reason}</TableCell>
                      <TableCell>{obj.hours}</TableCell>
                    </TableRow>
                  </>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <Button
          variant="contained"
          color="primary"
          onClick={handleEmailPromptAndDownload}
          style={{ marginTop: '1rem' }}
        >
          Send as JSON File
        </Button>
      </div>
    </>
  );
}

export default App;
