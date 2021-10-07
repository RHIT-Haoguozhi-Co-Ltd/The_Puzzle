import sha256 from "sha256";

/**
 * use this file to generate a new sha256 hased string for your answer(s)
 */

function main() {
  const args = process.argv.slice(2)
  if (args.length < 1) {
    // console.log("ERROR: no parameter");
    return;
  }
  console.log(`The encrypted string is: ${sha256.x2(args[0])}`);
}

main();
