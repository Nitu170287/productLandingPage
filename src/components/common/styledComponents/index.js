import styled  from "styled-components";




const Container = styled.div`
width:95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
 
  @media only screen and (max-width: 820px)   { 
display: flex;
flex-direction: column;
align-items: center;
}
`

const Topdiv = styled.div`
 width: 100%;
  height:30vh;
  display: flex;
  justify-content: center;`

  const Content = styled.div`
  display: flex;
  flex-direction:column;
  align-items: left;
  `

const Bottom = styled.div`
display: flex;
flex-direction: row;
  align-items: center;
  height:30vh;
  `


export {  Container, Topdiv,Bottom, Content};
