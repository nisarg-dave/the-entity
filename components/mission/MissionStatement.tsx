"use client";
import { TypeAnimation } from "react-type-animation";

function MissionStatement() {
  return (
    <TypeAnimation
      sequence={[
        "Good evening, Mr Hunt.",
        1000,
        "The Entity has grown stronger and smarter since your last encounter with it.",
        2000,
        "Your mission, should you choose to accept it, is to locate and infiltrate the Sevastopol which sank under the ice caps of the Bering Sea.",
        2000,
        "Located within its cold metal heart lies the Entity's source code, the very essence of its existence.",
        2000,
        "Your objective: eradicate it. But this is no brute force operation. The code is locked inside a chamber, which will only open by the keys you gained on the Orient Express.",
        3000,
        "Once within, the Entity itself will stand as your final obstacle. It has prepared a series of cryptic riddles, testing your intellect and resolve. Fail to answer, and the world plunges into chaos. Success means silencing the Entity forever, freeing humanity from its digital shadow.",
        3000,
        "Tread carefully, Ethan. You have but one chance to prove your worth and end this cyber nightmare.",
        2000,
        "As always, if you or any members of your IMF team are caught or killed, the Secretary will disavow any knowledge of your actions. Good luck, Ethan. This tape will self-destruct in five seconds. ",
        5000,
        "",
      ]}
      wrapper="span"
      speed={30}
      style={{ fontSize: "2em", display: "inline-block" }}
      repeat={0}
    />
  );
}

export default MissionStatement;
