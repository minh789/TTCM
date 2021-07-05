const style = theme => ({
    drawerPaper:{
        width:240,
        maxWidth: 240,
        zIndex: 10,
        minHeight: '100vh',
        position: 'relative',
        backgroundColor:'aqua',
    },
    menuLink:{
        textDecoration: 'none',
        color:  theme.color.defaultTextColor,
        fontSize: 20,
    },
    menuLinkActive:{
       '&>div':{
         backgroundColor: theme.color.hover
       } 
    }

});

export default style;