/**
 * NehPal AI Service Layer
 * A unified interface for interacting with multiple LLM providers.
 */

export type AIProvider = 'openai' | 'google' | 'anthropic' | 'deepseek' | 'mistral';

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface AIResponse {
  content: string;
  model: string;
  usage?: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

export class AIService {
  private static instance: AIService;
  
  private constructor() {}

  public static getInstance(): AIService {
    if (!AIService.instance) {
      AIService.instance = new AIService();
    }
    return AIService.instance;
  }

  /**
   * Generates a response using the selected model.
   * This is a robust mock that simulates API behavior.
   */
  public async chat(messages: ChatMessage[], modelId: string): Promise<AIResponse> {
    // Simulate API Latency
    await new Promise(resolve => setTimeout(resolve, 1500));

    const lastMessage = messages[messages.length - 1].content;
    const query = lastMessage.toLowerCase().trim();

    // Custom Query Handlers
    if (query.includes('what is ai') || query === 'ai' || query.includes('what is artificial intelligence')) {
      return {
        content: `### What is Artificial Intelligence (AI)?\n\n**Artificial Intelligence (AI)** is a branch of computer science dedicated to building systems capable of performing tasks that would typically require human intelligence. These tasks include:\n\n* 🧠 **Learning & Reasoning**: Recognizing patterns, generalizing from experiences, and making decisions based on data.\n* 🗣️ **Natural Language Processing (NLP)**: Understanding and responding to human speech and text (exactly like I am doing right now!).\n* 👁️ **Computer Vision**: Perceiving and analyzing visual information from the world (e.g., facial recognition, self-driving cars).\n* 🛠️ **Problem Solving**: Solving complex mathematical, scientific, and logical challenges efficiently.\n\n#### How It Works\nModern AI is primarily powered by **Machine Learning (ML)** and **Deep Learning (Neural Networks)**. Instead of being explicitly programmed with rigid rules, AI systems are trained on massive datasets to learn the underlying rules and patterns themselves.`,
        model: modelId,
        usage: { prompt_tokens: 15, completion_tokens: 180, total_tokens: 195 }
      };
    }

    if (query.includes('weather') || query.includes('what is the weather')) {
      return {
        content: `### 🌤️ Current Weather Forecast\n\nHere is the current weather update for your location:\n\n* 📍 **Location**: Delhi, India (Default)\n* 🌡️ **Temperature**: **32°C** (Feels like 35°C)\n* 💧 **Humidity**: **62%**\n* 🌬️ **Wind**: **12 km/h** North-East\n* 📋 **Conditions**: **Partly Cloudy** with a gentle breeze. \n\n*💡 **Tip**: It's a great day for outdoor activities, but keep an umbrella handy just in case of light local showers!*`,
        model: modelId,
        usage: { prompt_tokens: 12, completion_tokens: 110, total_tokens: 122 }
      };
    }
    
    // Simulate different provider logic
    if (modelId.includes('gpt')) {
      return {
        content: `Refined GPT analysis for: "${lastMessage}"\n\nI have evaluated the request and suggest the following approach...`,
        model: modelId,
        usage: { prompt_tokens: 120, completion_tokens: 50, total_tokens: 170 }
      };
    }

    if (modelId.includes('gemini')) {
      return {
        content: `Gemini Pro Insight: Based on current data, the most efficient solution involves...`,
        model: modelId,
      };
    }

    return {
      content: `NehPal Assistant (${modelId}): I've processed your input. How else can I help?`,
      model: modelId,
    };
  }

  /**
   * Simulated Image Generation
   */
  public async generateImage(prompt: string, style: string): Promise<string> {
    await new Promise(resolve => setTimeout(resolve, 3000));
    return `https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop`; // Placeholder
  }
}

export const aiService = AIService.getInstance();
