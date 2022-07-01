import { hexToRGB, timeAgo } from "./utils";

describe("utils functions should work", () => {
  test("hexToRGB fn should return a css rgba function", () => {
    const alpha = 0.5;
    const answer = hexToRGB("#000000", alpha);
    expect(answer).toBe(`rgba(0, 0, 0, ${alpha})`);
  });

  test("hexToRGB fn should return a css rgb function", () => {
    const answer = hexToRGB("#000000");
    expect(answer).toBe(`rgb(0, 0, 0)`);
  });

  test("timeAgo fn should return seconds ago", () => {
    const now = new Date();
    const twentySecondsAgo = now.getTime() - 20 * 1000;
    const answer = timeAgo(new Date(twentySecondsAgo));
    expect(answer).toBe("20 seconds ago");
  });

  test("timeAgo fn should return minutes ago", () => {
    const now = new Date();
    const threeMinutesAgo = now.getTime() - 3 * 60 * 1000;
    const answer = timeAgo(new Date(threeMinutesAgo));
    expect(answer).toBe("3 minutes ago");
  });

  test.todo("timeAgo fn should return days ago");

  test.todo("timeAgo fn should return months ago");

  test.todo("timeAgo fn should return years ago");
});
