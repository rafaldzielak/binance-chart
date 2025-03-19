import { describe, expect, test, vi } from "vitest";
import { render } from "@testing-library/react";
import TransactionChart from "../components/TransactionChart";

vi.mock("@tanstack/react-query", async (importOriginal) => {
  return {
    ...(await importOriginal<typeof import("@tanstack/react-query")>()),
    useQuery: () => ({
      data: [],
      isLoading: false,
      error: undefined,
    }),
  };
});

describe("TransactionChart", () => {
  test("renders the chart correctly", () => {
    const { container } = render(<TransactionChart />);
    expect(container.querySelector(".echarts-for-react")).toBeTruthy();
  });
});
