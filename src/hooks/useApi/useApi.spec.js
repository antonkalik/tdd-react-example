import { renderHook, act } from "@testing-library/react-hooks";
import { useApi } from "./index";
import axios from "axios";

jest.mock("axios");

axios.get = jest.fn(() => Promise.resolve({ data: [] }));

describe("useApi", () => {
  // afterEach(() => {
  //   jest.clearAllMocks();
  // });

  // it("should return loading", () => {
  //   const { result } = renderHook(() => useApi("/testf"));
  //
  //   expect(result.current.loading).toBe(true);
  //   expect(result.current.data).toBe(null);
  //   expect(result.current.error).toBe(null);
  // });

  it("should return data", async () => {
    const data = [1, 2, 3]

    axios.get.mockImplementation(() => {
      return Promise.resolve({ data });
    });

    const { result, waitForNextUpdate, waitForValueToChange } = renderHook(() =>
      useApi("/test")
    );

    await waitForValueToChange(() => result.current.data);

    expect(result.current.error).toBe(null);
    expect(result.current.loading).toBe(false);
    expect(result.current.data).toStrictEqual(data);
  });

  // it("should return error", () => {
  //   throw new Error("Test not implemented");
  // });
});
