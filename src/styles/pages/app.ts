import { styled } from ".."

export const Container = styled('div', {
    /*display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    minHeight: '100vh',*/
})

export const Header = styled('header', {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '2rem 0 0 0',
    backgroundColor: '$darkBlue',

    //position: 'fixed',

    /*padding: '2rem 0',
    width: '100%',
    maxWidth: 1180,
    margin: '0 auto',*/
})

export const Menu = styled('div', {

    display: 'flex',
    gap: '1rem',
    
    a: {
        fontFamily: 'Raleway',
        fontWeight: 500,
        color: 'white',
        textDecoration: 'none',
    },
})