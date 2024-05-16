import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, TablePagination, Button } from '@mui/material';

const doctors = [
  {
    name: 'Dr. John Doe',
    chamber: 'Alpha Hospital',
    timings: '10:00 AM - 2:00 PM',
    fees: '₹500', // Example fee in rupees
  },
  {
    name: 'Dr. Jane Smith',
    chamber: 'Beta Clinic',
    timings: '9:00 AM - 1:00 PM',
    fees: '₹600', // Example fee in rupees
  },
  // Add 10 more doctors
  {
    name: 'Dr. Alex Johnson',
    chamber: 'Gamma Clinic',
    timings: '11:00 AM - 3:00 PM',
    fees: '₹550',
  },
  {
    name: 'Dr. Sarah Lee',
    chamber: 'Delta Hospital',
    timings: '10:30 AM - 2:30 PM',
    fees: '₹700',
  },
  {
    name: 'Dr. Michael Brown',
    chamber: 'Epsilon Clinic',
    timings: '8:30 AM - 12:30 PM',
    fees: '₹800',
  },
  {
    name: 'Dr. Emily Taylor',
    chamber: 'Zeta Hospital',
    timings: '9:30 AM - 1:30 PM',
    fees: '₹750',
  },
  {
    name: 'Dr. William Clark',
    chamber: 'Eta Clinic',
    timings: '10:00 AM - 2:00 PM',
    fees: '₹600',
  },
  {
    name: 'Dr. Olivia Garcia',
    chamber: 'Theta Clinic',
    timings: '9:00 AM - 1:00 PM',
    fees: '₹650',
  },
  {
    name: 'Dr. Ethan Martinez',
    chamber: 'Iota Hospital',
    timings: '11:30 AM - 3:30 PM',
    fees: '₹700',
  },
  {
    name: 'Dr. Mia Rodriguez',
    chamber: 'Kappa Clinic',
    timings: '8:00 AM - 12:00 PM',
    fees: '₹600',
  },
  {
    name: 'Dr. Noah Wilson',
    chamber: 'Lambda Clinic',
    timings: '10:00 AM - 2:00 PM',
    fees: '₹550',
  },
  {
    name: 'Dr. John Doe',
    chamber: 'Alpha Hospital',
    timings: '10:00 AM - 2:00 PM',
    fees: '₹500', // Example fee in rupees
  },
  {
    name: 'Dr. Jane Smith',
    chamber: 'Beta Clinic',
    timings: '9:00 AM - 1:00 PM',
    fees: '₹600', // Example fee in rupees
  },
  // Add 10 more doctors
  {
    name: 'Dr. Alex Johnson',
    chamber: 'Gamma Clinic',
    timings: '11:00 AM - 3:00 PM',
    fees: '₹550',
  },
  {
    name: 'Dr. Sarah Lee',
    chamber: 'Delta Hospital',
    timings: '10:30 AM - 2:30 PM',
    fees: '₹700',
  },
  {
    name: 'Dr. Michael Brown',
    chamber: 'Epsilon Clinic',
    timings: '8:30 AM - 12:30 PM',
    fees: '₹800',
  },
  {
    name: 'Dr. Emily Taylor',
    chamber: 'Zeta Hospital',
    timings: '9:30 AM - 1:30 PM',
    fees: '₹750',
  },
  {
    name: 'Dr. William Clark',
    chamber: 'Eta Clinic',
    timings: '10:00 AM - 2:00 PM',
    fees: '₹600',
  },
  {
    name: 'Dr. Olivia Garcia',
    chamber: 'Theta Clinic',
    timings: '9:00 AM - 1:00 PM',
    fees: '₹650',
  },
  {
    name: 'Dr. Ethan Martinez',
    chamber: 'Iota Hospital',
    timings: '11:30 AM - 3:30 PM',
    fees: '₹700',
  },
  {
    name: 'Dr. Mia Rodriguez',
    chamber: 'Kappa Clinic',
    timings: '8:00 AM - 12:00 PM',
    fees: '₹600',
  },
  {
    name: 'Dr. Noah Wilson',
    chamber: 'Lambda Clinic',
    timings: '10:00 AM - 2:00 PM',
    fees: '₹550',
  },
];

function DoctorList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10); // Change the number of rows per page as needed

  const handleClick = (doctor) => {
    // Handle click event, you can navigate to another page or show more details
    console.log(`Clicked on ${doctor.name}`);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleAppoint = (doctor) => {
    console.log(`${doctor.name}`);
  }

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Doctor List
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="doctor table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Chamber</TableCell>
              <TableCell>Timings</TableCell>
              <TableCell>Fees (₹)</TableCell> {/* Display fees in rupees */}
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {doctors.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((doctor, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row"  onClick={() => handleClick(doctor)} style={{ cursor: 'pointer' }}>
                  {doctor.name}
                </TableCell>
                <TableCell>{doctor.chamber}</TableCell>
                <TableCell>{doctor.timings}</TableCell>
                <TableCell>{doctor.fees}</TableCell>
                <TableCell><Button size='small' key={index} onClick={() => handleAppoint(doctor)}>Consult</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10,15, 25]} // Customize the options as needed
        component="div"
        count={doctors.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}

export default DoctorList;
