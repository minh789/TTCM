const styles = theme => ({

    root: {
       height: '100vh',
     },
     image: {
       backgroundImage: 'url(https://cellphones.com.vn/sforum/wp-content/uploads/2020/05/ngay-ra-mat-iPhone-12-2.jpg)',
       backgroundRepeat: 'no-repeat',
       backgroundColor:
         theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
       backgroundSize: '100% 100%',
     },
     paper: {
       margin: theme.spacing(8, 4),
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center',
     },
     avatar: {
       margin: theme.spacing(1),
       backgroundColor: theme.palette.secondary.main,
     },
     form: {
       width: '100%', // Fix IE 11 issue.
       marginTop: theme.spacing(1),
     },
     submit: {
       margin: theme.spacing(3, 0, 2),
     },
   });
   export default styles