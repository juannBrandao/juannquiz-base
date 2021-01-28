import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/widget'
import Foother from '../src/components/Foother'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;
const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;


export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg} >
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Fortinit </h1>
          </Widget.Header>
          <Widget.Content>
            <p>foother</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quizez da galera </h1>

            <p>foother</p>
          </Widget.Content>
        </Widget>
        <Foother/>
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/juannBrandao" />
    </QuizBackground>
  );
}
