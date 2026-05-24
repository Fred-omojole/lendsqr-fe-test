import { getPageNumbers } from "@/lib/pagination";

describe(`getPageNumbers`, () => {
  it("should return all page numbers with no ellipsis if current page is less than or equal to 5", () => {
    expect(getPageNumbers(1, 5)).toEqual([1, 2, 3, 4, 5]);
  });

  it("should return correct page numbers with ellipsis when current page is near the start", () => {
    expect(getPageNumbers(2, 10)).toEqual([1, 2, 3, "...", 9, 10]);
  });

  it("should return correct page structure when the current page exceeds the total pages", () => {
    expect(getPageNumbers(60, 10)).toEqual([1, 2, "...", 8, 9, 10]);
  });
});
