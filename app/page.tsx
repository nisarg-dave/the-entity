"use client";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <main className="">
      <TypeAnimation
        sequence={[
          "Good morning, Mr Hunt.",
          1000,
          "The Entity has grown stronger and smarter since your last encounter with it.",
          1000,
          "It has infiltrated more intelligence networks causing chaos and havoc.",
          1000,
          "Your mission, should you choose to accept it, involves travelling to the Sevastapol's location where you'll find the original source code of the Entity.",
          1000,
          "Destroy it by all means neccessary.",
          1000,
          "As always, should you or any of your IMF members be caught or killed, the Secretary will disavow any knowledge of your actions. This tape/disc will self-destruct in five seconds. Good luck, Ethan",
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: "2em", display: "inline-block" }}
        repeat={Infinity}
      />
    </main>
  );
}
