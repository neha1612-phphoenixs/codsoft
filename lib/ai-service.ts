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
