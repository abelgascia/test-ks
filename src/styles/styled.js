import styled from 'styled-components'

export const Header = styled.header`
    position: relative;
    background: #181D4F;
    height: 25vh;
    border-bottom-left-radius: 50% 75%;
    border-bottom-right-radius: 50% 75%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
`
export const Section = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

// START OF TABLE STYLED COMPONENTS //

export const TableButton = styled.button`
    padding: 5px 10px;
    margin: 0px 5px;
    background-color: ${props => props.color === 'green' ? 'hsl(145, 63%, 42%)' : 'hsl(6, 78%, 57%)'};
    color: #fff;
    border-radius: 6px;
    transition: transform 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease;
    box-shadow: 0 4px 6px rgba(40, 127, 184, .11), 0 1px 3px rgba(40, 127, 184, .08);
    border: none;

    &:hover {
    transform: translate3d(0px,-3px,0px);
    box-shadow: 0 7px 14px rgba(40, 127, 184, .1), 0 3px 6px rgba(40, 127, 184, .08);
    }

    & > svg {
        max-width: 18px;
    }
`
// END OF TABLE STYLED COMPONENTS //

// START OF FORM STYLED COMPONENTS //

export const FormTitle = styled.h1`
    font-size: 2em;
    font-weight: bold;
    margin-top: 40px;
    margin-bottom: 10px;
`
export const FormButton = styled.button`
    padding: 12px 24px;
    background-color: hsl(204, 64%, 44%);
    color: #fff;
    border-radius: 6px;
    transition: transform 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease;
    box-shadow: 0 4px 6px rgba(40, 127, 184, .11), 0 1px 3px rgba(40, 127, 184, .08);
    border: none;

    &:hover {
    transform: translate3d(0px,-1px,0px);
    background-color: hsl(204, 70%, 53%);
    box-shadow: 0 7px 14px rgba(40, 127, 184, .1), 0 3px 6px rgba(40, 127, 184, .08);
    }
`

// END OF FORM STYLED COMPONENTS //