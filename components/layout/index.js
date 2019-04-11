import { Grommet, Box } from 'grommet';
import { grommet } from "grommet/themes";
import Header from './header';
import Main from './main';
import Footer from './footer';

export default ({ children }) => (
  <Grommet full theme={grommet}>
    <Box fill="vertical">
      <Header/>
      <Main content={children}>
      </Main>
      <Footer/>
    </Box>
  </Grommet>
)
