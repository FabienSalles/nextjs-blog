import { Box } from "grommet";

export default () => {
  const now = new Date();

  return (
    <Box background="light-3">
      <Box width="xlarge" margin="auto" align="center">
        <p> &copy; Fabien Salles {now.getFullYear()} </p>
      </Box>
    </Box>
  )
}
