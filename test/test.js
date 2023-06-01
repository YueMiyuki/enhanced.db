const db = require("../index.js");

const options = {
  clearOnStart: true,
  filename: "test.sqlite",
};

db.options(options);
const table = new db.Table("myTable", options);

describe("Test function 'set()'", () => {
  it('Expected set("bar") to foo returns bar', () => {
    if (db.set("foo", "bar") !== "bar") {
      throw new Error("Result does not match");
    }
  });
});

describe("Test function '<table>.set()'", () => {
  it('Expected <table>.set("bar") to foo returns bar', () => {
    if (table.set("foo", "bar") !== "bar") {
      throw new Error("Result does not match");
    }
  });
});

describe("Test function 'get()'", () => {
  it('Expected <table>.get("foo") returns bar', () => {
    if (db.get("foo") !== "bar") {
      throw new Error("Result does not match");
    }
  });
});

describe("Test function '<table>.get()'", () => {
  it('Expected <table>.get("foo") returns bar', () => {
    if (table.get("foo") !== "bar") {
      throw new Error("Result does not match");
    }
  });
});

describe("Test function 'has()'", () => {
  it("Expected 'db.has(\"foo\")' return true", () => {
    if (db.has("foo") !== true) {
      throw new Error("Result does not match");
    }
  });
});

describe("Test function 'has()'", () => {
  it("Expected 'db.has(\"bar\")' return false", () => {
    if (db.has("bar") !== false) {
      throw new Error("Result does not match");
    }
  });
});

describe("Test function 'type()'", () => {
  it("Expected 'db.type(\"foo\")' return 'string'", () => {
    if (db.type("foo") !== "string") {
      throw new Error("Result does not match");
    }
  });
});

describe("Test function 'is()'", () => {
  it('Expected \'db.is("foo", "bar")\' return true', () => {
    if (db.is("foo", "bar") !== true) {
      throw new Error("Result does not match");
    }
  });
});

describe("Test function 'all()'", () => {
  it("Expected 'db.all()' return all data", () => {
    if (JSON.stringify(db.all()) !== '[{"key":"foo","value":"bar"}]') {
      throw new Error("Result does not match");
    }
  });
});

describe("Test function 'startWith()'", () => {
  it('Expected \'db.startWith("f")\' return data that key starts with "f"', () => {
    if (
      JSON.stringify(db.startsWith("f")) !== '[{"key":"foo","value":"bar"}]'
    ) {
      throw new Error("Result does not match");
    }
  });
});

describe("Test function 'add()'", () => {
  it("Expected 'db.add(\"foo\", 1)' will add 1 to the value", () => {
    db.set("foo", 0);
    if (db.add("foo", 1) !== 1) {
      throw new Error("Result does not match");
    }
  });
});

describe("Test function 'subtract()'", () => {
  it("Expected 'db.subtract(\"foo\", 1)' will minuss 1 to the value", () => {
    db.set("foo", 0);
    if (db.subtract("foo", 1) !== -1) {
      throw new Error("Result does not match");
    }
  });
});
