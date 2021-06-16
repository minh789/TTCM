const sytle= theme =>({
    root: {
        width: 280,
        margin: 20,
      },
      media: {
        height: 200,
        width: 200,
      },
      star: {
        display: 'flex',
        flexDirection: 'column',
        '& > * + *': {
          marginTop: theme.spacing(1),
        },
      },
});
export default sytle;