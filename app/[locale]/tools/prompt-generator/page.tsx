"use client";

import { useState } from "react";

export default function PromptGeneratorPage() {
  const [goal, setGoal] = useState("");
  const [platform, setPlatform] = useState("ChatGPT");
  const [tone, setTone] = useState("Professional");
  const [result, setResult] = useState("");

  function generatePrompt() {
    const prompt = `
You are an expert ${platform} user.

Goal:
${goal}

Tone:
${tone}

Instructions:
- Provide clear structured output
- Use step-by-step reasoning
- Optimize for best quality results

Final Answer:
`;

    setResult(prompt.trim());
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-6">
        AI Prompt Generator
      </h1>

      <p className="text-gray-600 mb-8">
        Create powerful prompts for ChatGPT, Midjourney, Claude and more.
      </p>

      <div className="space-y-4">

        <textarea
          placeholder="What do you want to create?"
          className="w-full border rounded-lg p-3"
          rows={4}
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />

        <select
          className="w-full border rounded-lg p-3"
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
        >
          <option>ChatGPT</option>
          <option>Claude</option>
          <option>Midjourney</option>
          <option>Stable Diffusion</option>
        </select>

        <select
          className="w-full border rounded-lg p-3"
          value={tone}
          onChange={(e) => setTone(e.target.value)}
        >
          <option>Professional</option>
          <option>Friendly</option>
          <option>Creative</option>
          <option>Technical</option>
        </select>

        <button
          onClick={generatePrompt}
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          Generate Prompt
        </button>

        {result && (
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Result:</h3>
            <pre className="bg-gray-100 p-4 rounded-lg whitespace-pre-wrap">
              {result}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
