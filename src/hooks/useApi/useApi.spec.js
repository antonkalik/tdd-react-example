import { renderHook, act } from "@testing-library/react-hooks";
import { useApi } from "./index";

jest.mock("axios", () => ({
  get: () => Promise.resolve({ data: "data" }),
}));

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
    const { result, waitForNextUpdate, waitForValueToChange } = renderHook(() =>
      useApi("/test")
    );

    await waitForValueToChange(() => result.current.data);

    expect(result.current.error).toBe(null);
    expect(result.current.loading).toBe(false);
    expect(result.current.data).toBe("data");
  });

  // it("should return error", () => {
  //   throw new Error("Test not implemented");
  // });
});
