import { renderHook } from "@testing-library/react-hooks";
import { useApi } from "./index";
import axios from "axios";

jest.mock("axios");

axios.get = jest.fn(() => Promise.resolve({ data: [] }));

describe("useApi", () => {
  it("should return loading", () => {
    const { result } = renderHook(() => useApi("/testf"));

    expect(result.current.loading).toBe(true);
    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe(null);
  });

  it("should return data", async () => {
    const data = [1, 2, 3];

    axios.get.mockImplementation(() => {
      return Promise.resolve({ data });
    });

    const { result, waitForValueToChange } = renderHook(() => useApi("/test"));

    await waitForValueToChange(() => result.current.data);

    expect(result.current.error).toBe(null);
    expect(result.current.loading).toBe(false);
    expect(result.current.data).toStrictEqual(data);
  });

  it("should return error", async () => {
    const error = new Error("test error message");
    axios.get.mockImplementation(() => {
      return Promise.reject(error);
    });

    const { result, waitForValueToChange } = renderHook(() => useApi("/test"));
    await waitForValueToChange(() => result.current.error);

    expect(result.current.error).toBe(error);
  });
});
