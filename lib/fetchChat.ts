const apiUrl =
  "https://llm.swiftant.com/mongo_atlas_memory_dynamic_streamed_ask";

const fetchData = async (updateResponse: any) => {
  const requestBody = {
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
  };

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();

  let done = false;
  while (!done) {
    const { value, done: readerDone } = await reader.read();
    const text = decoder.decode(value);

    // Process each line of the response
    const lines = text.split("\n");
    lines.forEach((line) => {
      if (line.trim()) {
        const jsonResponse = JSON.parse(line);
        updateResponse(jsonResponse);

        if (jsonResponse.done) {
          done = true;
        }
      }
    });

    if (readerDone) {
      break;
    }
  }
};

export default fetchData;
