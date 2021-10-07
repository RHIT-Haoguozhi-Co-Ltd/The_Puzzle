import {verifyAnswerDoubleSha256} from "../../common/sha256.js";
import answers from './answers.js';

function main() {
  console.log(verifyAnswerDoubleSha256('ttt', answers.puzzle1));
  console.log(verifyAnswerDoubleSha256('test', answers.puzzle1));
}

main();
