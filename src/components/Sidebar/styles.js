import styled from "styled-components"


export const Container = styled.div`
    position: fixed;
    top: 70px;
    bottom: 0;
    left: 0;
    width: 250px,
    padding-top: 26px;
`
export const MenuItem = styled.div`
    cursor:pointer;
    color: #161823;
    display: flex;
    justify-content: flex-start;
    align-items:center;
    padding: 0 12px;
    box-sizing: border-box;
    height: 60px;
    :hover{
        background: rgba(22, 24, 35, 0.03)
    }

    >span{
        font-weight: ${(props) => (props.active? "700" : "400")};
        margin-left: 13px;
        font-size: 24px;
        line-height: 60px;
        color: ${(props) => (props.active ? props.theme.colors.primary : "black")}
    }

    >img {
        width: 40px;
        height: 40px;
    }
`

export const Following = styled.div`
    width: 100%;
    padding: 20px 0;
    border-top: 0.5px solid rgba(22, 24, 35, 0.12);
    border-bottom: 0.5px solid rgba(22, 24, 35, 0.12);

`
export const FollowingHeader = styled.div`

`
export const InfoContainer = styled.div`

`
export const Links = styled.div`

`