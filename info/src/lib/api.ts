import { HfInference } from '@huggingface/inference'

const Hf = new HfInference("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")

export const input: string = ""

// Request the HuggingFace API for the response
async function start() {
  const response = await Hf.textGenerationStream({
    model: 'gpt-neox-20b',
    inputs: `${input}`,
    parameters: {
      max_new_tokens: 200,
      temperature: 0.5,
      top_p: 0.95,
      top_k: 4,
      repetition_penalty: 1.03,
      truncate: 1000,
    },
  })

  const completion = response.generated_text
  console.log(completion)
}

start()