"use client";

import { useState } from "react";

export default function AskSwiftComponent() {
  const [response, setResponse] = useState(null);

  const askQuestion = async () => {
    const res = await fetch("/api/askSwift", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        index: "scuba_index",
        collection_name: "scuba",
        user_id: "4bdbe19e-ecfd-4a30-87a1-65280acd60de",
        model_id: "openai-gpt-4o",
        question: "tell me about swiftb2b?",
        max_tokens: 250,
        offensive_topics: [
          "Politics",
          "Religion",
          "Abusive Content",
          "Sensitive Social Issues",
          "Violence and Crime",
          "Financial Advice",
          "Personal Gossip",
          "Conspiracy Theories",
          "Sexual Content",
          "Graphic Content",
          "Illegal Activities",
          "Drug Use",
          "Sensationalism",
          "Radical Opinions",
          "Personal Attacks",
          "Rumors and Misinformation",
          "Sensitive Historical Issues",
        ],
        generic_topics: [
          "Sports",
          "Food and Nutrition",
          "Weather",
          "Health and Wellness",
          "Technology",
          "Travel",
          "Music and Movies",
          "Books and Literature",
          "Hobbies",
          "Animals and Pets",
          "Fitness",
          "Environment",
          "Local Events",
          "Education",
          "Career Advice",
          "DIY Projects",
          "Science and Discovery",
          "History",
          "Art and Culture",
          "Gardening",
          "Mindfulness and Meditation",
          "Fashion",
          "Gaming",
          "Photography",
        ],
      }),
    });

    const data = await res.json();
    setResponse(data);
  };

  return (
    <div>
      <button onClick={askQuestion}>Ask SwiftB2B</button>
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
    </div>
  );
}
