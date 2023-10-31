const Email = "akhtar.com";

if (Email) {
  console.log("Email is available");
}

// Falsy Values
false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy Values
"0", "false", " ", [], {}, function () {};
