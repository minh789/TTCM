const sytle= theme =>({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
      },
    size:{
        fontSize: 20,
    },
    tittle:{
        fontWeight: 'bold',
        fontSize: 20,
        color:'blue'
    },
    menuLink:{
        textDecoration: 'none',
        color:  theme.color.defaultTextColor,
    },
    menuLinkActive:{
       '&>div':{
         backgroundColor: theme.color.hover
       } 
    },
    icon:{
        margin:10,
    },
    location:{
        marginTop: 10,
        fontSize: 20,
    },
    telephone:{
        marginTop: 10,
        fontSize: 20,
    },
    email:{
        marginTop: 10,
        fontSize: 20,
    },    
});
export default sytle;