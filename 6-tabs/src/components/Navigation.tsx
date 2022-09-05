import { useState } from "react";
import { Grid, Tabs, Tab, Typography, Box } from "@mui/material";
import { TabsProps } from "./Types";

type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};
const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const Navigation = ({ data }: { data: TabsProps[] }) => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  console.log(data);
  return (
    <Grid container width="100%">
      <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
        <Tabs
          value={value}
          onChange={handleChange}
          orientation="vertical"
          TabIndicatorProps={{
            style: {
              background: "#2caeba",
              right: "unset",
            },
          }}
        >
          <Tab
            label="TOMMY"
            {...a11yProps(0)}
            disableRipple
            sx={{
              color: "black",
              fontSize: "1.2rem",
              letterSpacing: "0.3rem",
              padding: "0rem",
            }}
          />
          <Tab
            label="BIGDROP"
            {...a11yProps(1)}
            sx={{
              color: "black",
              fontSize: "1.5rem",
              letterSpacing: "0.3rem",
              padding: "0rem",
            }}
            disableRipple
          />
          <Tab
            label="CUKER"
            {...a11yProps(2)}
            sx={{
              color: "black",
              fontSize: "1.5rem",
              letterSpacing: "0.3rem",
              padding: "0rem",
            }}
            disableRipple
          />
        </Tabs>
      </Grid>

      <Grid item xs={12} md={3} sx={{ display: { xs: "block", md: "none" } }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="TOMMY" {...a11yProps(0)} />
          <Tab label="BIGDROP" {...a11yProps(1)} />
          <Tab label="CUKER" {...a11yProps(2)} />
        </Tabs>
      </Grid>

      <Grid item xs={12} md={9} width="100%">
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Grid>
    </Grid>
  );
};

export default Navigation;
