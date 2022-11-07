import { test, expect, describe } from "vitest";
import { arithmeticCalculation } from "../utils";

describe("Test", () => {
  describe("Addition", () => {
    describe("Invalid Inputs", () => {
      test("should return undefined if no numbers are provided", () => {
        expect(arithmeticCalculation("addition", [])).toBe(undefined);
      });

      test("should return undefined if any of the numbers is not a number", () => {
        expect(arithmeticCalculation("addition", ["1", "2", "3", "a"])).toBe(
          undefined
        );
      });
    });

    describe("Positive numbers", () => {
      test("should return 5 if 2 and 3 are provided", () => {
        expect(arithmeticCalculation("addition", ["2", "3"])).toBe(5);
      });

      test("should return 10 if 2, 3 and 5 are provided", () => {
        expect(arithmeticCalculation("addition", ["2", "3", "5"])).toBe(10);
      });
    });

    describe("Negative numbers", () => {
      test("should return -5 if -2 and -3 are provided", () => {
        expect(arithmeticCalculation("addition", ["-2", "-3"])).toBe(-5);
      });

      test("should return -10 if -2, -3 and -5 are provided", () => {
        expect(arithmeticCalculation("addition", ["-2", "-3", "-5"])).toBe(-10);
      });
    });
  });

  describe("Subtraction", () => {
    describe("Invalid Inputs", () => {
      test("should return undefined if no numbers are provided", () => {
        expect(arithmeticCalculation("subtraction", [])).toBe(undefined);
      });

      test("should return undefined if any of the numbers is not a number", () => {
        expect(arithmeticCalculation("subtraction", ["1", "2", "3", "a"])).toBe(
          undefined
        );
      });
    });

    describe("Positive numbers", () => {
      test("should return 1 if 2 and 1 are provided", () => {
        expect(arithmeticCalculation("subtraction", ["2", "1"])).toBe(1);
      });

      test("should return 3 if 5, 2 and 1 are provided", () => {
        expect(arithmeticCalculation("subtraction", ["5", "2", "1"])).toBe(2);
      });
    });

    describe("Negative numbers", () => {
      test("should return -1 if -2 and -1 are provided", () => {
        expect(arithmeticCalculation("subtraction", ["-2", "-1"])).toBe(-1);
      });

      test("should return -3 if -5, -2 and -1 are provided", () => {
        expect(arithmeticCalculation("subtraction", ["-5", "-2", "-1"])).toBe(
          -2
        );
      });
    });
  });

  describe("Multiplication", () => {
    describe("Invalid Inputs", () => {
      test("should return undefined if no numbers are provided", () => {
        expect(arithmeticCalculation("multiplication", [])).toBe(undefined);
      });

      test("should return undefined if any of the numbers is not a number", () => {
        expect(
          arithmeticCalculation("multiplication", ["1", "2", "3", "a"])
        ).toBe(undefined);
      });
    });

    describe("Positive numbers", () => {
      test("should return 2 if 2 and 1 are provided", () => {
        expect(arithmeticCalculation("multiplication", ["2", "1"])).toBe(2);
      });

      test("should return 10 if 5, 2 and 1 are provided", () => {
        expect(arithmeticCalculation("multiplication", ["5", "2", "1"])).toBe(
          10
        );
      });
    });

    describe("Negative numbers", () => {
      test("should return 2 if -2 and -1 are provided", () => {
        expect(arithmeticCalculation("multiplication", ["-2", "-1"])).toBe(2);
      });

      test("should return 10 if -5, -2 and -1 are provided", () => {
        expect(
          arithmeticCalculation("multiplication", ["-5", "-2", "-1"])
        ).toBe(-10);
      });
    });
  });

  describe("Division", () => {
    describe("Invalid Inputs", () => {
      test("should return undefined if no numbers are provided", () => {
        expect(arithmeticCalculation("division", [])).toBe(undefined);
      });

      test("should return undefined if any of the numbers is not a number", () => {
        expect(arithmeticCalculation("division", ["1", "2", "3", "a"])).toBe(
          undefined
        );
      });
    });

    describe("Positive numbers", () => {
      test("should return 2 if 2 and 1 are provided", () => {
        expect(arithmeticCalculation("division", ["2", "1"])).toBe(2);
      });

      test("should return 5 if 10, 2 and 1 are provided", () => {
        expect(arithmeticCalculation("division", ["10", "2", "1"])).toBe(5);
      });
    });

    describe("Negative numbers", () => {
      test("should return 2 if -2 and -1 are provided", () => {
        expect(arithmeticCalculation("division", ["-2", "-1"])).toBe(2);
      });

      test("should return 5 if -10, -2 and -1 are provided", () => {
        expect(arithmeticCalculation("division", ["-10", "-2", "-1"])).toBe(-5);
      });
    });
  });
});
