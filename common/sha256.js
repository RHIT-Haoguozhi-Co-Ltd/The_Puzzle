import sha256 from "sha256";

export const verifyAnswerDoubleSha256 = (answer, hashedCorrectAnswer) => {
  return sha256.x2(answer) === hashedCorrectAnswer;
}


