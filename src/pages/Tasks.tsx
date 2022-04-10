import { Col, Divider, Grid, Tabs } from "@mantine/core";
import React from "react";
import Task from "../components/Task";
import Layout from "../layout/Layout";

const Tasks = () => {
  return (
    <Layout>
      <Tabs color="violet" variant="default" tabPadding="xl">
        <Tabs.Tab label="Current">
          <Grid>
            <Col span={12}>
              <Task />
            </Col>
          </Grid>
        </Tabs.Tab>
        <Tabs.Tab label="Completed">Messages tab content</Tabs.Tab>
        <Tabs.Tab label="Hold">Settings tab content</Tabs.Tab>
      </Tabs>
    </Layout>
  );
};

export default Tasks;
