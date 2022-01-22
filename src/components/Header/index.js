import {Container, Content, LogoContainer, LogoIcon, OptionsContainer, Logo, Avatar, Icon} from "./styles"

function Header () {
    return(
        <Container>
            <Content>
                <LogoContainer>
                    <LogoIcon src="/images/logoIcon.svg">

                    </LogoIcon>
                    <Logo src="/images/logo.svg">

                    </Logo>
                </LogoContainer>
                <OptionsContainer>
                    <Icon src="/images/uploadIcon.svg"></Icon>
                    <Avatar>
                        <img src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tiktok-obj/1683370820454401.jpeg?x-expires=1642946400&x-signature=C1hxRIO9rEN8JbNO75YNaTTllKk%3D" />
                    </Avatar>
                </OptionsContainer>
            </Content>
        </Container>

    )
}


export default Header