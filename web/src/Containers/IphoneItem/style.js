const sytle= theme =>({
    root: {
        width: 250,
        margin: 20,
      },
      media: {
        width: 200,
        height:200,
      },
      star: {
        display: 'flex',
        flexDirection: 'column',
        '& > * + *': {
          marginTop: theme.spacing(1),
        },
      },
      image: {
        position: 'relative',
        height: 250,
        width: 250,
        [theme.breakpoints.down('xs')]: {
          width: '100% !important', // Overrides inline-style
          height: 100,
        },
        '&:hover, &$focusVisible': {
          zIndex: 1,
          '& $imageBackdrop': {
            opacity: 0.15,
          },
          '& $imageMarked': {
            opacity: 0,
          },
          '& $imageTitle': {
            border: '5px solid currentColor',
          },
        },
      },
      focusVisible: {},
      imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
      },
      imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.5,
        transition: theme.transitions.create('opacity'),
      },
      imageTitle: {
        position: 'relative',
        // padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
      },
      imageMarked: {
        height: 3,
        width: 120,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 60px)',
        transition: theme.transitions.create('opacity'),
      },
      none :{
        textDecoration: 'none'
      },
      setIcon:{
        marginTop: 10
      }
});
export default sytle;