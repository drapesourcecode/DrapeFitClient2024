import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Grid } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard } from '@fortawesome/free-solid-svg-icons';

import Table from 'ui-component/Table';
import { useDispatch, useSelector } from 'react-redux';
import { getBatchProcessSubscription } from 'actions/admin/report';
import { DateType } from 'constant/function';

const columns = [
  { accessorKey: 'email', header: 'Client Email' },
  { accessorKey: 'subject', header: 'client Subject' },
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'kidName', header: 'Kid Name' },
  { accessorKey: 'status', header: 'Client Status' },
  { accessorKey: 'support_email', header: 'Support Email' },
  { accessorKey: 'support_subject', header: 'Support Subject' },
  { accessorKey: 'date', header: 'Sending date and time' },
  { accessorKey: 'support_status', header: 'Support Status' },
  { accessorKey: 'process', header: 'Process' },
  { accessorKey: 'day', header: 'Day' }
];

const BatchProcessSubscription = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBatchProcessSubscription());
  }, [dispatch]);

  const { batchProcessSubscriptionList } = useSelector((state) => state.report);
  let updateData = batchProcessSubscriptionList.map((item) => {
    return {
      ...item,
      date: DateType(item?.sending_datetime),
      kidName: item.kids_detail?.kids_first_name
    };
  });
  console.log(batchProcessSubscriptionList);

  return (
    <>
      <Box className="admin-page-title-part">
        <Typography className="page-title">Subscription Batch process status</Typography>
        <Link to="/dfadmin/dashboard" className="home-link">
          <FontAwesomeIcon icon={faDashboard} /> Home
        </Link>
      </Box>
      <Box className="table-border container">
        <Grid container>
          <Grid item xs={12}>
            <Table data={updateData} columns={columns} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default BatchProcessSubscription;
