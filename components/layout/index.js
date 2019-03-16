import { Grommet, Box } from 'grommet';
import { grommet } from "grommet/themes";
import Header from './header';
import Main from './main';
import Footer from './footer';

export default ({ content }) => (
    <Grommet theme={grommet}>
      <Header/>
    </Grommet>
)
