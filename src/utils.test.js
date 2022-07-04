import { hexToRGB, timeAgo } from "./utils";

describe("hexToRGB fn", () => {
  test("hexToRGB fn should return a css rgba function", () => {
    const alpha = 0.5;
    const answer = hexToRGB("#000000", alpha);
    expect(answer).toBe(`rgba(0, 0, 0, ${alpha})`);
  });

  test("hexToRGB fn should return a css rgb function", () => {
    const answer = hexToRGB("#000000");
    expect(answer).toBe(`rgb(0, 0, 0)`);
  });
});

describe("time ago function", () => {
  test("should return seconds ago", () => {
    const now = new Date();
    const twentySecondsAgo = now.getTime() - 20 * 1000;
    const answer = timeAgo(new Date(twentySecondsAgo));
    expect(answer).toBe("20 seconds ago");
  });

  test("should return minutes ago", () => {
    const now = new Date();
    const threeMinutesAgo = now.getTime() - 3 * 60 * 1000;
    const answer = timeAgo(new Date(threeMinutesAgo));
    expect(answer).toBe("3 minutes ago");
  });

  test("should return hours ago", () => {
    const now = new Date();
    const threeMinutesAgo = now.getTime() - 4 * 60 * 60 * 1000;
    const answer = timeAgo(new Date(threeMinutesAgo));
    expect(answer).toBe("4 hours ago");
  });

  test("should return days ago", () => {
    const now = new Date();
    const threeMinutesAgo = now.getTime() - 2 * 24 * 60 * 60 * 1000;
    const answer = timeAgo(new Date(threeMinutesAgo));
    expect(answer).toBe("2 days ago");
  });

  test.todo("should return months ago");

  test.todo("should return years ago");
});
