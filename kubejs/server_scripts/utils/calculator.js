const $GTUtil = Java.loadClass("com.gregtechceu.gtceu.utils.GTUtil");
const $GTRecipe = Java.loadClass("com.gregtechceu.gtceu.api.recipe.GTRecipe");
const $RecipeHelper = Java.loadClass(
  "com.gregtechceu.gtceu.api.recipe.RecipeHelper",
);
const $KubeJSReloadListener = Java.loadClass(
  "dev.latvian.mods.kubejs.server.KubeJSReloadListener",
);

const GTV = GTValues.VEX;

PlayerEvents.chat((event) => {
  /** @type {string} */
  let message = (message = ("" + event.message).trim());

  if (message.startsWith("=")) {
    message = ("" + message).replace(/^=\s*/, "");

    try {
      /** @type {Token[]} */
      let tokens = calculatorLex(message);
      /** @type {NodeExpr} */
      let ast = calculatorParse(tokens);
      /** @type {Value} */
      let resultValue = calculatorExec(ast);
      let result = resultValue.v;

      if (resultValue.t === "number") {
        result = numberToString(result);
      } else if (resultValue.t === "vec2") {
        result =
          "vec2(" +
          resultValue.v.map((v) => numberToString(v)).join(", ") +
          ")";
      } else if (resultValue.t === "vec3") {
        result =
          "vec3(" +
          resultValue.v.map((v) => numberToString(v)).join(", ") +
          ")";
      }

      event.player.tell(
        Text.join([
          Text.aqua(message),
          Text.of(" = "),
          Text.green(result),
          Text.gray(" [Click to Copy]"),
        ])
          .clickCopy(result)
          .hover(Text.of("Click to copy")),
      );
    } catch (e) {
      /** @type {string} */
      let error = e.message || e.toString();
      event.player.tell(
        Text.join([
          Text.red("Error evaluating "),
          Text.aqua(message),
          Text.red(": "),
          Text.gray(error),
        ]),
      );
    }
    event.cancel();
  }
});

let numberToString = (num) => {
  num = num
    .toFixed(5)
    .replace(/e([\-+])?(\d+)$/, (_, sign, digits) => {
      sign = sign === "-" ? "⁻" : "";
      digits = digits
        .split("")
        .map((c) => "⁰¹²³⁴⁵⁶⁷⁸⁹"[+c])
        .join("");
      return ` × 10${sign}${digits}`;
    })
    .replace(/\.?0+$/, "");
  if (num === "-0") num = "0";
  return num;
};

/** @typedef {{ t: "number", v: number }} ValueNumber */
/** @typedef {{ t: "string", v: string }} ValueString */
/** @typedef {{ t: "vec2", v: [number, number] }} ValueVec2 */
/** @typedef {{ t: "vec3", v: [number, number, number] }} ValueVec3 */
/** @typedef {ValueNumber | ValueString | ValueVec2 | ValueVec3} Value */

let calculatorExec = (() => {
  /** @typedef {{ arguments?: Value["t"][], fn: (...args: Value[]) => Value }} CalculatorFunction */

  /** @type {(fn: (value: number) => number) => CalculatorFunction[]} */
  let componentsOverloads = (fn) => {
    return [
      { arguments: ["number"], fn: (v) => ({ t: "number", v: fn(v.v) }) },
      { arguments: ["vec2"], fn: (v) => ({ t: "vec2", v: v.v.map(fn) }) },
      { arguments: ["vec3"], fn: (v) => ({ t: "vec3", v: v.v.map(fn) }) },
    ];
  };
  /** @type {(fn: (a: number, b: number) => number) => CalculatorFunction[]} */
  let componentsOverloads2 = (fn) => {
    return [
      {
        arguments: ["number", "number"],
        fn: (a, b) => ({ t: "number", v: fn(a.v, b.v) }),
      },
      {
        arguments: ["vec2", "vec2"],
        fn: (a, b) => ({ t: "vec2", v: a.v.map((ax, i) => fn(ax, b.v[i])) }),
      },
      {
        arguments: ["vec3", "vec3"],
        fn: (a, b) => ({ t: "vec3", v: a.v.map((ax, i) => fn(ax, b.v[i])) }),
      },
    ];
  };

  /** @type {Record<string, CalculatorFunction | CalculatorFunction[]>} */
  let functions = {
    vec2: [
      { arguments: [], fn: () => ({ t: "vec2", v: [0, 0] }) },
      { arguments: ["number"], fn: (x) => ({ t: "vec2", v: [x.v, x.v] }) },
      {
        arguments: ["number", "number"],
        fn: (x, y) => ({ t: "vec2", v: [x.v, y.v] }),
      },
    ],
    vec3: [
      { arguments: [], fn: () => ({ t: "vec3", v: [0, 0, 0] }) },
      { arguments: ["number"], fn: (x) => ({ t: "vec3", v: [x.v, x.v, x.v] }) },
      {
        arguments: ["vec2", "number"],
        fn: (xy, z) => ({ t: "vec3", v: [xy.v[0], xy.v[1], z.v] }),
      },
      {
        arguments: ["number", "number", "number"],
        fn: (x, y, z) => ({ t: "vec3", v: [x.v, y.v, z.v] }),
      },
    ],
    dot: [
      {
        arguments: ["vec2", "vec2"],
        fn: (a, b) => ({ t: "number", v: a.v[0] * b.v[0] + a.v[1] * b.v[1] }),
      },
      {
        arguments: ["vec3", "vec3"],
        fn: (a, b) => ({
          t: "number",
          v: a.v[0] * b.v[0] + a.v[1] * b.v[1] + a.v[2] * b.v[2],
        }),
      },
    ],
    sqrt: componentsOverloads(Math.sqrt),
    floor: componentsOverloads(Math.floor),
    ceil: componentsOverloads(Math.ceil),
    sin: componentsOverloads(Math.sin),
    cos: componentsOverloads(Math.cos),
    tan: componentsOverloads(Math.tan),
    acos: componentsOverloads(Math.acos),
    asin: componentsOverloads(Math.asin),
    atan: componentsOverloads(Math.atan),
    atan2: [
      {
        arguments: ["number", "number"],
        fn: (y, x) => ({ t: "number", v: Math.atan2(y.v, x.v) }),
      },
    ],
    sinh: componentsOverloads(Math.sinh),
    cosh: componentsOverloads(Math.cosh),
    tanh: componentsOverloads(Math.tanh),
    acosh: componentsOverloads(Math.acosh),
    asinh: componentsOverloads(Math.asinh),
    atanh: componentsOverloads(Math.atanh),
    ln: componentsOverloads(JavaMath.log),
    log: [
      {
        arguments: ["number", "number"],
        fn: (base, v) => ({
          t: "number",
          v: fn(JavaMath.log(v.v) / JavaMath.log(base.v)),
        }),
      },
      {
        arguments: ["number", "vec2"],
        fn: (base, v) => ({
          t: "vec2",
          v: v.v.map((v) => JavaMath.log(v) / JavaMath.log(base.v)),
        }),
      },
      {
        arguments: ["number", "vec3"],
        fn: (base, v) => ({
          t: "vec3",
          v: v.v.map((v) => JavaMath.log(v) / JavaMath.log(base.v)),
        }),
      },
    ],
    log2: componentsOverloads((v) => JavaMath.log(v) / JavaMath.log(2)),
    log2: componentsOverloads(JavaMath.log10),
    min: [
      {
        fn: function () {
          /** @type {Value[]} */
          let args = Array.from(arguments);
          if (args.length === 0) {
            throw new Error(
              "wrong argument count for max: expected 1 or more, got 0",
            );
          }
          if (!args.some((arg) => arg.t !== "number")) {
            throw new Error(
              "wrong argument types for max: expected all numbers",
            );
          }
          return {
            t: "number",
            v: Math.min.apply(
              null,
              args.map((arg) => arg.v),
            ),
          };
        },
      },
    ],
    max: {
      fn: function () {
        let args = Array.from(arguments);
        if (args.length === 0) {
          throw new Error(
            "wrong argument count for max: expected 1 or more, got 0",
          );
        }
        if (args.some((arg) => arg.t !== "number")) {
          throw new Error("wrong argument types for max: expected all numbers");
        }
        return {
          t: "number",
          v: Math.max.apply(
            null,
            args.map((arg) => arg.v),
          ),
        };
      },
    },
    oc: {
      arguments: ["number", "number"],
      fn: (duration, steps) => {
        if (steps.v <= 0)
          throw new Error(
            "wrong argument 'steps' for function oc: must be greater than 0",
          );
        return {
          t: "number",
          v: Math.max(Math.floor(duration.v / (2 << (steps.v - 1))), 1),
        };
      },
    },
    poc: {
      arguments: ["number", "number"],
      fn: (duration, steps) => {
        if (steps.v <= 0)
          throw new Error(
            "wrong argument 'steps' for function poc: must be greater than 0",
          );
        return {
          t: "number",
          v: Math.max(Math.floor(duration.v / (4 << (steps.v - 1))), 1),
        };
      },
    },
    formatSeconds: {
      arguments: ["number"],
      fn: (duration) => ({ t: "number", v: duration.v / 20 }),
    },
    formatTier: {
      arguments: ["number"],
      fn: (tier) => {
        if (!(0 <= tier.v && tier.v < GTValues.VNF.length))
          throw new Error("invalid tier");
        return { t: "string", v: GTValues.VNF[tier.v] + "§r" };
      },
    },
    formatEUt: {
      arguments: ["number"],
      fn: (eut) => {
        let tierIndex = $GTUtil.getFloorTierByVoltage(eut.v) + 1;
        let perc = eut.v / GTV[tierIndex];
        return {
          t: "string",
          v: numberToString(perc) + "A of " + GTValues.VNF[tierIndex] + "§r",
        };
      },
    },
    formatAmps: {
      arguments: ["number"],
      fn: (eut) => {
        let tierIndex = $GTUtil.getFloorTierByVoltage(eut.v);
        let perc = eut.v / GTV[tierIndex];
        return {
          t: "string",
          v: numberToString(perc) + "A of " + GTValues.VNF[tierIndex] + "§r",
        };
      },
    },
    voltage: {
      arguments: ["number"],
      fn: (tier) => {
        if (!(0 <= tier.v && tier.v < GTV.length))
          throw new Error("invalid tier");
        return { t: "number", v: GTV[tier.v] };
      },
    },
    V: {
      arguments: ["number"],
      fn: (eut) => {
        return { t: "number", v: $GTUtil.getFloorTierByVoltage(eut.v) + 1 };
      },
    },
    parallels: [
      {
        arguments: ["number", "number"],
        fn: (eut, ocTier) => {
          let recipeTier = $GTUtil.getFloorTierByVoltage(eut.v) + 1;
          let numOfOc = ocTier.v - recipeTier;
          if (numOfOc <= 0)
            throw new Error(
              "wrong arguments for function 'parallels': ocTier 2 smol",
            );

          let cap = Math.floor(
            (GTV[recipeTier] / eut.v) * Math.pow(4, numOfOc),
          );
          return { t: "number", v: cap };
        },
      },
      {
        arguments: ["vec2", "number"],
        fn: (recipeInfo, ocTier) => {
          let recipeTier = $GTUtil.getFloorTierByVoltage(recipeInfo.v[0]) + 1;
          let numOfOc = ocTier.v - recipeTier;
          if (numOfOc <= 0)
            throw new Error(
              "wrong arguments for function 'parallels': ocTier 2 smol",
            );

          let cap = Math.floor(
            (GTV[recipeTier] / recipeInfo.v[0]) * Math.pow(4, numOfOc),
          );
          let ocDuration = Math.max(
            Math.floor(recipeInfo.v[1] / (2 << (numOfOc - 1))),
            1,
          );
          let duration = ocDuration * Math.pow(2, numOfOc);
          return { t: "vec2", v: [cap, duration] };
        },
      },
    ],
    recipe: {
      arguments: ["string"],
      fn: (recipeId) => {
        let recipeManager = $KubeJSReloadListener.resources.getRecipeManager();
        let recipeOptional = recipeManager.byKey(recipeId.v);
        if (!recipeOptional.isPresent())
          throw new Error(
            "wrong arguments for function 'recipe': no recipe found",
          );
        let recipe = recipeOptional.get();
        if (!(recipe instanceof $GTRecipe))
          throw new Error(
            "wrong arguments for function 'recipe': not a GTRecipe",
          );
        return {
          t: "vec2",
          v: [$RecipeHelper.getRealEUt(recipe), recipe.duration],
        };
      },
    },
  };

  let operators = {
    "unOp+": componentsOverloads((v) => +v),
    "unOp-": componentsOverloads((v) => -v),
    "binOp+": componentsOverloads2((a, b) => a + b),
    "binOp-": componentsOverloads2((a, b) => a - b),
    "binOp*": componentsOverloads2((a, b) => a * b).concat(
      {
        arguments: ["number", "vec2"],
        fn: (a, b) => ({ t: "vec2", v: [a.v * b.v[0], a.v * b.v[1]] }),
      },
      {
        arguments: ["vec2", "number"],
        fn: (a, b) => ({ t: "vec2", v: [a.v[0] * b.v, a.v[1] * b.v] }),
      },
      {
        arguments: ["number", "vec3"],
        fn: (a, b) => ({
          t: "vec3",
          v: [a.v * b.v[0], a.v * b.v[1], a.v * b.v[2]],
        }),
      },
      {
        arguments: ["vec3", "number"],
        fn: (a, b) => ({
          t: "vec3",
          v: [a.v[0] * b.v, a.v[1] * b.v, a.v[2] * b.v],
        }),
      },
    ),
    "binOp/": componentsOverloads2((a, b) => a / b),
    "binOp//": componentsOverloads2((a, b) => Math.floor(a / b)),
    "binOp%": componentsOverloads2((a, b) => a % b),
    "binOp^": componentsOverloads2((a, b) => Math.pow(a, b)),
  };

  /** @type {Record<string, Value>} */
  let constants = {
    e: { t: "number", v: JavaMath.E },
    pi: { t: "number", v: JavaMath.PI },
    ULV: { t: "number", v: GTValues.ULV },
    LV: { t: "number", v: GTValues.LV },
    MV: { t: "number", v: GTValues.MV },
    HV: { t: "number", v: GTValues.HV },
    EV: { t: "number", v: GTValues.EV },
    IV: { t: "number", v: GTValues.IV },
    LuV: { t: "number", v: GTValues.LuV },
    ZPM: { t: "number", v: GTValues.ZPM },
    UV: { t: "number", v: GTValues.UV },
    UHV: { t: "number", v: GTValues.UHV },
    UEV: { t: "number", v: GTValues.UEV },
    UIV: { t: "number", v: GTValues.UIV },
    UXV: { t: "number", v: GTValues.UXV },
    OpV: { t: "number", v: GTValues.OpV },
    MAX: { t: "number", v: GTValues.MAX },
  };

  /**
   *
   * @param {CalculatorFunction[]} options
   * @param {Value[]} args
   */
  function execOverloaded(options, args, error) {
    for (let option of options) {
      if (option.arguments) {
        if (args.every((arg, i) => option.arguments[i] === arg.t)) {
          return option.fn.apply(null, args);
        }
      } else {
        return option.fn.apply(null, args);
      }
    }
    throw new Error(
      "No matching overload for " +
        error +
        " and arguments (" +
        args.map((a) => a.t).join(", ") +
        "). Options are:\n" +
        options
          .map((o) => {
            if (o.arguments.length === 0) return "- no arguments";
            return "- " + o.arguments.join(", ");
          })
          .join("\n"),
    );
  }

  /**
   * Validate first!
   *
   * @param {ValueVec2 | ValueVec3} value
   * @param {string} identifier
   * @returns {ValueNumber | ValueVec2 | ValueVec3}
   */
  function vecAccessors(value, identifier) {
    let v = Array.from(identifier).map((accessor) => {
      switch (accessor) {
        case "x":
          return value.v[0];
        case "y":
          return value.v[1];
        case "z":
          return value.v[2];
      }
    });
    return {
      t: ["", "number", "vec2", "vec3"][identifier.length],
      v: v.length === 1 ? v[0] : v,
    };
  }

  /**
   * @param {NodeExpr} node
   * @returns {Value}
   */
  function calculate(node) {
    switch (node.type) {
      case "unOp": {
        let value = calculate(node.value);
        let matched = operators["unOp" + node.operator];
        switch (node.operator) {
          case "+":
            return execOverloaded(matched, [value], "Unary Plus");
          case "-":
            return execOverloaded(matched, [value], "Negation");
        }
      }
      case "binOp": {
        let left = calculate(node.left);
        let right = calculate(node.right);
        let matched = operators["binOp" + node.operator];
        switch (node.operator) {
          case "+":
            return execOverloaded(matched, [left, right], "Addition");
          case "-":
            return execOverloaded(matched, [left, right], "Subtraction");
          case "*":
            return execOverloaded(matched, [left, right], "Multiplication");
          case "/":
            return execOverloaded(matched, [left, right], "Division");
          case "//":
            return execOverloaded(matched, [left, right], "Floor Division");
          case "%":
            return execOverloaded(matched, [left, right], "Modulo");
          case "^":
            return execOverloaded(matched, [left, right], "Exponentiation");
        }
      }
      case "call": {
        if (node.value.type !== "identifier") {
          throw new Error("expression is not callable");
        }
        let fnName = node.value.identifier;
        let fn = functions[fnName];
        if (!fn) {
          throw new Error("unknown identifier '" + fnName + "'");
        }
        let args = node.arguments.map((arg) => calculate(arg));
        return execOverloaded(
          Array.isArray(fn) ? fn : [fn],
          args,
          "function '" + fnName + "'",
        );
      }
      case "member": {
        let value = calculate(node.value);
        if (
          value.t === "vec2" &&
          1 <= node.identifier.length &&
          node.identifier.length <= 3 &&
          node.identifier.match(/^[xy]+$/)
        ) {
          return vecAccessors(value, node.identifier);
        }
        if (
          value.t === "vec3" &&
          1 <= node.identifier.length &&
          node.identifier.length <= 3 &&
          node.identifier.match(/^[xyz]+$/)
        ) {
          return vecAccessors(value, node.identifier);
        }
        throw new Error(
          "non-existing member " + node.identifier + " for type " + value.t,
        );
      }
      case "number": {
        return { t: "number", v: node.value };
      }
      case "string": {
        return { t: "string", v: node.value };
      }
      case "identifier": {
        let constant = constants[node.identifier];
        if (!constant) {
          throw new Error("unknown identifier " + node.identifier);
        }
        return constant;
      }
      default: {
        throw new Error("unknown node type " + node.type);
      }
    }
  }

  return calculate;
})();

/**
 * @typedef {{ t: "(" }} TokenLParen
 * @typedef {{ t: ")" }} TokenRParen
 * @typedef {{ t: "*" }} TokenTimes
 * @typedef {{ t: "/" }} TokenSlash
 * @typedef {{ t: "//" }} TokenDSlash
 * @typedef {{ t: "%" }} TokenMod
 * @typedef {{ t: "+" }} TokenPlus
 * @typedef {{ t: "-" }} TokenDash
 * @typedef {{ t: "," }} TokenComma
 * @typedef {{ t: "." }} TokenDot
 * @typedef {{ t: "eof" }} TokenEof
 * @typedef {{ t: "^", v: "^" | "**" }} TokenExp
 * @typedef {{ t: "ident", v: string }} TokenIdent
 * @typedef {{ t: "number", v: number, s?: string }} TokenNumber
 * @typedef {{ t: "string", v: string }} TokenString
 * @typedef {TokenLParen | TokenRParen | TokenTimes | TokenSlash | TokenDSlash | TokenMod | TokenPlus | TokenDash | TokenComma | TokenDot | TokenEof | TokenExp | TokenIdent | TokenNumber | TokenString} Token
 */

/**
 * @param {string} input the source text
 * @returns {Token[]} an array of tokens
 */
function calculatorLex(input) {
  /** @type {Token[]} */
  let tokens = [];
  let index = 0;

  while (true) {
    let token = lexToken();
    if (!token) break;
    tokens.push(token);
  }
  tokens.push({ t: "eof" });
  return tokens;

  /** @returns {string | null} */
  function next() {
    if (index > input.length) {
      return null;
    }
    let ch = input.substring(index, index + 1) || null;
    index += 1;
    return ch;
  }

  function prev() {
    index -= 1;
  }

  /** @returns {Token | null} */
  function lexToken() {
    let ch = next();
    if (!ch) {
      return null;
    }

    while (ch === " " || ch === "\t" || ch === "\n" || ch === "\r") {
      ch = next();
    }
    if (ch.match(/^[a-zA-Z_]$/)) {
      return lexIdent();
    }
    if (ch.match(/^[0-9]$/)) {
      return lexNumber();
    }
    switch (ch) {
      case "(":
        return { t: "(" };
      case ")":
        return { t: ")" };
      case "+":
        return { t: "+" };
      case "-":
        return { t: "-" };
      case "*":
        ch = next();
        if (ch == "*") {
          return { t: "^", v: "**" };
        }
        prev();
        return { t: "*" };
      case "/":
        ch = next();
        if (ch == "/") {
          return { t: "//" };
        }
        prev();
        return { t: "/" };
      case "%":
        return { t: "%" };
      case "^":
        return { t: "^", v: "^" };
      case ",":
        return { t: "," };
      case ".":
        return { t: "." };
      case '"':
      case "'":
        return lexString(ch === "'");
      default:
        throw new Error("unexpected token: '" + ch + "'");
    }
  }

  /** @returns {Token | null} */
  function lexIdent() {
    let pos = index - 1;
    let ch;
    while ((ch = next()) && ch.match(/^[a-zA-Z0-9_]$/));
    prev();
    let text = input.substring(pos, index);
    return { t: "ident", v: text };
  }

  /** @returns {Token | null} */
  function lexNumber() {
    let pos = index - 1;
    let ch;
    while ((ch = next()) && ch.match(/^[0-9]$/));
    if (ch === ".") {
      while ((ch = next()) && ch.match(/^[0-9]$/));
    }
    prev();

    let text = input.substring(pos, index);
    pos = index;

    while ((ch = next()) && ch.match(/^[a-zA-Z0-9_]$/));
    prev();

    if (index > pos) {
      return {
        t: "number",
        v: parseFloat(text),
        s: input.substring(pos, index),
      };
    }
    return { t: "number", v: parseFloat(text) };
  }

  /**
   * @param {boolean} single
   * @returns {Token | null}
   */
  function lexString(single) {
    let endCh = single ? "'" : '"';
    let pos = index;
    let ch;
    while ((ch = next()) && ch != endCh);
    let string = input.substring(pos, index - 1);
    return { t: "string", v: string };
  }
}

/**
 * @typedef {"*" | "/" | "+" | "-" | "^" | "%" | "//"} BinaryOperator
 * @typedef {"+" | "-"} UnaryOperator
 * @typedef {{ type: "binOp", operator: BinaryOperator, left: NodeExpr, right: NodeExpr }} NodeExprBinary
 * @typedef {{ type: "unOp", operator: UnaryOperator, value: NodeExpr }} NodeExprUnary
 * @typedef {{ type: "call", value: NodeExpr, arguments: NodeExpr[] }} NodeExprCall
 * @typedef {{ type: "member", value: NodeExpr, identifier: string }} NodeMember
 * @typedef {{ type: "identifier", identifier: string }} NodeIdentifier
 * @typedef {{ type: "string", value: string }} NodeLiteralString
 * @typedef {{ type: "number", value: number }} NodeLiteralNumber
 * @typedef {NodeExprBinary | NodeExprUnary | NodeExprCall | NodeMember | NodeIdentifier | NodeLiteralString | NodeLiteralNumber} NodeExpr
 */

/**
 * @param {Token[]} tokens lexed tokens
 * @returns {NodeExpr}
 */
function calculatorParse(tokens) {
  /** @type {Record<"*" | "/" | "+" | "-" | "^", { prec: number, assoc: "left" | "right" }>} */
  let operators = {
    "*": { prec: 3, assoc: "left" },
    "/": { prec: 3, assoc: "left" },
    "//": { prec: 3, assoc: "left" },
    "%": { prec: 3, assoc: "left" },
    "+": { prec: 2, assoc: "left" },
    "-": { prec: 2, assoc: "left" },
    "^": { prec: 4, assoc: "right" },
  };

  let index = 0;

  /** @type {NodeExpr} */
  let result = parseExpression();
  expect("eof");
  return result;

  /**
   * @param {Token} token
   * @returns {string}
   */
  function prettyToken(token) {
    switch (token.t) {
      case "(":
        return "'('";
      case ")":
        return "')'";
      case "+":
        return "'+'";
      case "-":
        return "'-'";
      case "*":
        return "'*'";
      case "/":
        return "'/'";
      case "//":
        return "'//'";
      case "%":
        return "'%'";
      case "^":
        return "'" + token.v + "'";
      case ",":
        return "','";
      case "number":
        if (token.s) return "number ('" + token.v + "', '" + token.s + "')";
        return "number ('" + token.v + "')";
      case "ident":
        return "indentifier ('" + token.v + "')";
      case "eof":
        return "eof";
    }
  }

  /** @returns {Token} */
  function current() {
    return tokens[index - 1];
  }

  /** @returns {Token} */
  function next() {
    if (index >= tokens.length) {
      throw new Error("eof");
    }
    return tokens[index];
  }

  /**
   * @param {Token["t"]} token
   * @returns {boolean}
   */
  function peek(token) {
    return next().t === token;
  }

  /**
   * @param {Token["t"]} token
   * @returns {boolean}
   */
  function accept(token) {
    if (peek(token)) {
      index += 1;
      return true;
    }
    return false;
  }

  /**
   * @param {Token["t"]} token
   * @returns {void}
   */
  function expect(token) {
    if (!accept(token)) {
      throw new Error(
        "expected " + token + " got " + prettyToken(next()) + " instead",
      );
    }
  }

  /** @returns {NodeExpr} */
  function parseExpression() {
    return parseBinOp(0);
  }

  /**
   * @param {Token["t"]} token
   * @returns {token is BinaryOperator}
   */
  function isBinaryOperator(token) {
    return !!operators[token];
  }

  /**
   * @param {number} prec
   * @returns {NodeExpr}
   */
  function parseBinOp(prec) {
    let left = parseUnOp();
    /** @type {Token["t"]} */
    let op;
    while (
      (op = next().t) &&
      isBinaryOperator(op) &&
      operators[op].prec > prec
    ) {
      accept(op);
      let tprec = operators[op].prec;
      if (operators[op].assoc === "right") tprec -= 1;
      let right = parseBinOp(tprec);
      left = { type: "binOp", operator: op, left: left, right: right };
    }

    return left;
  }

  /** @returns {NodeExpr} */
  function parseUnOp() {
    /** @type {Token["t"]} */
    let op;
    switch ((op = next().t)) {
      case "+":
      case "-":
        accept(op);
        return { type: "unOp", operator: op, value: parseUnOp() };
    }
    return parsePrimaryExpr();
  }

  /** @returns {NodeExpr[]} */
  function parseArgList() {
    let args = [];
    expect("(");
    while (true) {
      if (accept(")")) {
        return args;
      }
      args.push(parseExpression());
      if (accept(",")) {
        continue;
      }
      expect(")");
      break;
    }
    return args;
  }

  /** @returns {NodeExpr} */
  function parsePrimaryExpr() {
    let term = parseTerm();
    while (true) {
      if (accept(".")) {
        expect("ident");
        let ident = /** @type {TokenIdent} */ (current()).v;
        term = { type: "member", value: term, identifier: ident };
        continue;
      }
      if (peek("(")) {
        let args = parseArgList();
        term = { type: "call", value: term, arguments: args };
        continue;
      }
      break;
    }
    return term;
  }

  /** @returns {NodeExpr} */
  function parseTerm() {
    if (accept("(")) {
      let expr = parseExpression();
      expect(")");
      return expr;
    }

    if (accept("ident")) {
      // prettier-ignore
      let ident = (/** @type {TokenIdent} */ (current())).v;
      return { type: "identifier", identifier: ident };
    }

    if (accept("string")) {
      // prettier-ignore
      let value = (/** @type {TokenString} */ (current())).v;
      return { type: "string", value: value };
    }

    if (accept("number")) {
      // prettier-ignore
      let number = (/** @type {TokenNumber} */ (current())).v;
      let suffix = /** @type {TokenNumber} */ (current()).s;
      if (suffix) {
        if (suffix.startsWith("_")) suffix = suffix.substring(1);
        switch (suffix) {
          case "t":
          case "tick":
          case "ticks":
            return { type: "number", value: number };
          case "s":
          case "sec":
          case "secs":
            return { type: "number", value: number * 20 };
          case "ULV":
            return { type: "number", value: number * GTV[GTValues.ULV] };
          case "LV":
            return { type: "number", value: number * GTV[GTValues.LV] };
          case "MV":
            return { type: "number", value: number * GTV[GTValues.MV] };
          case "HV":
            return { type: "number", value: number * GTV[GTValues.HV] };
          case "EV":
            return { type: "number", value: number * GTV[GTValues.EV] };
          case "IV":
            return { type: "number", value: number * GTV[GTValues.IV] };
          case "LuV":
            return { type: "number", value: number * GTV[GTValues.LuV] };
          case "ZPM":
            return { type: "number", value: number * GTV[GTValues.ZPM] };
          case "UV":
            return { type: "number", value: number * GTV[GTValues.UV] };
          case "UHV":
            return { type: "number", value: number * GTV[GTValues.UHV] };
          case "UEV":
            return { type: "number", value: number * GTV[GTValues.UEV] };
          case "UIV":
            return { type: "number", value: number * GTV[GTValues.UIV] };
          case "UXV":
            return { type: "number", value: number * GTV[GTValues.UXV] };
          case "OpV":
            return { type: "number", value: number * GTV[GTValues.OpV] };
          case "MAX":
            return { type: "number", value: number * GTV[GTValues.MAX] };
          default:
            throw new Error("invalid number suffix '" + suffix + "'");
        }
      }
      return { type: "number", value: number };
    }

    throw new Error("expected (, identifier or number");
  }
}
