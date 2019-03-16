import { Box, Anchor, Heading } from "grommet";

export default () => (
  <Box background="light-3">
    <Box direction="row" pad="small" width="xlarge" margin="auto">
      <Box basis="1/2">
        <Heading margin="none">Fabien Salles</Heading>
      </Box>
      <Box basis="1/2" direction="row" align="end" justify="end">
        <Anchor href="#" label="Articles" color="dark-2" margin="small"/>
        <Anchor href="#" label="About" color="dark-2" margin="small"/>
      </Box>
    </Box>
  </Box>

)
