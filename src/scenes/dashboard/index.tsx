import { Box, useMediaQuery } from "@mui/material";
import { gridTemplateLargeScreens, gridTemplateSmallScreens } from "@/contants";
import Row1 from "@/scenes/dashboard/Row1";
import Row2 from "@/scenes/dashboard/Row2";
import Row3 from "@/scenes/dashboard/Row3";

const Dashboard = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1200px)");
  return (
    <Box
      width="100%"
      display="grid"
      gap="1.5rem"
      mb="1rem"
      sx={
        isAboveMediumScreens
          ? {
              gridTemplateColumns: "repeat(3,minmax(370px,1fr))",
              gridTemplateRows: "repeat(10,minmax(60px,1fr))",
              gridTemplateAreas: gridTemplateLargeScreens,
            }
          : {
              gridAutoColumns: "1fr",
              gridAutoRows: "80px",
              gridTemplateAreas: gridTemplateSmallScreens,
            }
      }
    >
      <Row1 />
      <Row2 />
      <Row3 />
    </Box>
  );
};

export default Dashboard;
