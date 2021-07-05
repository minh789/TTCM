const style = theme =>
({
    wrapper:{
        display: 'flex',
        flexDirection: 'row',
        height:'100%'
    },
    wrapperContent:{
        width: '100%',
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        // padding: 10
    },
    shiftLeft: {
        marginLeft: -240,
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
});

export default style;