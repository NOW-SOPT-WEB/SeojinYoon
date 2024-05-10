import styled from 'styled-components';
import Router from './Router';

function App() {
  return (
    <DesktopWrapper>
      <Router />
    </DesktopWrapper>
  );
}

export default App;

const DesktopWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;
