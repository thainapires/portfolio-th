import { styled } from ".."

export const Main = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
})

export const HomeSection = styled('section', {
    display: 'flex',
    alignItems: 'center',
    gap: '2.5rem',
    /*paddingTop: '6rem',
    paddingBottom: '6rem',*/
    minHeight: '90vh',
})

export const AboutMeText = styled('div', {
    h4: {
        fontWeight: 700,
        fontSize: 32,
    },
    h5: {
        fontWeight: 500,
        fontSize: 18
    }
})

export const AboutMeSection = styled('section', {
    display: 'flex',
    alignItems: 'center',
    gap: '2.5rem',
    paddingTop: '6rem',
    paddingBottom: '6rem',
})

export const ProjectsSection = styled('section', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    h4: {
        paddingBottom: '2rem',
        fontWeight: 700,
        fontSize: 32,
    },
})

export const ProjectsList = styled('section', {
    display: 'flex',
    gap: '1rem',
})


export const HomeTitle = styled('div', {
    h4: {
        fontWeight: 500,
        fontSize: 32,
    },

    h2: {
        fontWeight: 700,
        fontSize: 50,
    }

})