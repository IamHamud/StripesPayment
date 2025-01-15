"use client";
import { TextGenerateEffect } from "./text-generate-effect"; // Corrected path

const words = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
