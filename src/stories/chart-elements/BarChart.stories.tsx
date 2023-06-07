import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { BarChart, Card, Title } from "components";
import { simpleBaseChartData as data } from "./helpers/testData";
import { valueFormatter } from "stories/chart-elements/helpers/utils";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof BarChart> = {
  title: "Tremor/ChartElements/BarChart",
  component: BarChart,
  args: { categories: ["Sales", "Successful Payments"], index: "month", data },
  decorators: [
    (Story) => (
      <>
        <Title className="mt-5">Desktop</Title>
        <Card>
          <Story />
        </Card>
        <Title>Mobile</Title>
        <div className="w-64">
          <Card>
            <Story />
          </Card>
        </div>
      </>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof BarChart>;

export const DefaultResponsive: Story = {
  args: {},
};

export const WithStacked: Story = {
  args: { stack: true },
};

export const WithRelative: Story = {
  args: { relative: true },
};

export const WithLayoutVerticak: Story = {
  args: { layout: "vertical" },
};

export const WithAutoMinValueAndLayoutVertical: Story = {
  args: { layout: "vertical", autoMinValue: true },
};

export const WithValueFormatter: Story = {
  args: { valueFormatter: valueFormatter, colors: ["red", "green"], yAxisWidth: 60 },
};

export const WithAutoMinValue: Story = {
  args: { autoMinValue: true },
};

export const WithMinValueAndMaxValue: Story = {
  args: { minValue: -1000, maxValue: 5000 },
};

export const WithCustomColors: Story = {
  args: { colors: ["rose", "purple"] },
};

export const WithChangedCategoriesOrder: Story = {
  args: { categories: ["Successful Payments", "Sales"] },
};

export const WithLessColorsThanCategories: Story = {
  args: { colors: ["green"] },
};

export const WithLongValues: Story = {
  args: { categories: ["This is an edge case"], valueFormatter: valueFormatter },
};

export const WithMultipleCategories: Story = {
  args: {
    categories: ["Sales", "Successful Payments", "This is an edge case", "Test"],
    valueFormatter: valueFormatter,
  },
};

export const WithNoData: Story = {
  args: { data: [] },
};

export const WithWithNoDataTextLessColorsThanCategories: Story = {
  args: { data: [], noDataText: "No data, try again later." },
};

export const WithNoCategories: Story = {
  args: { categories: undefined },
};

export const WithNoIndex: Story = {
  args: { index: undefined },
};

export const WithNoAnimation: Story = {
  args: { showAnimation: false },
};

export const WithDefaultAnimationDuration: Story = {
  args: {},
};

export const WithLongAnimationDuration: Story = {
  args: { animationDuration: 5000 },
};

export const WithShortAnimationDuration: Story = {
  args: { animationDuration: 100 },
};
