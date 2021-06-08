import styled from 'styled-components'

export const MainContainer = styled.div`
  transform: translateX(-100%);
  -webkit-transform: translateX(-100%);
`

export const Image = styled.img`
  height: auto;
  width: 100%;
  overflow: hidden;
  border-top: 8px solid rgba(245, 245, 245, 0.685);
  border-bottom: 8px solid rgba(245, 245, 245, 0.685);
  box-shadow: 2px;
`
export const Banner = styled.div`
  width: 100%;
  height: 500px;
  
  border-top: 8px solid rgba(245, 245, 245, 0.685);
  border-bottom: 8px solid rgba(245, 245, 245, 0.685);
  box-shadow: 2px;
  background-image: url("https://res.cloudinary.com/davik/image/upload/v1623193254/react-portfolio/background2_js5ygh.png");
  background-size: cover;
`
