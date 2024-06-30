import { styled } from ".."

export const ProjectCard = styled('div', {
    width: '400px',
    height: '180px',
    borderColor: '#6A267B',
    borderStyle: 'solid',
    borderRadius: '35px',

    padding: '20px',
    display: 'flex',
    alignItems: 'center',
})

export const ProjectInfo = styled('div', {
    h5: {
        fontSize: '16px',
        paddingBottom: '0.5rem',
    },

    p: {
        fontWeight: 400,
        fontSize: '12px',
        paddingBottom: '0.5rem',
    }
})

export const Tags = styled('div', {
    display: 'flex',
    gap: '0.2rem',

    paddingBottom: '1rem',

    span: {
        fontSize: '11px',
        backgroundColor: '#6A267B',
        borderRadius: '5px',
        padding: '3px 8px 3px 8px',
    }
})

export const Links = styled('div', {
    display: 'flex',
    gap: '1.5rem',
    paddingLeft: '0.1rem',

    a: {
        fontSize: '11px',
        textDecoration: 'none',
        color: '$white',
    }
})