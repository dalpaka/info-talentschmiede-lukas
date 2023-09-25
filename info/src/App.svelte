<script>
  export let input = "";

  import { HfInference } from '@huggingface/inference'

const Hf = new HfInference("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")

// Request the HuggingFace API for the response
async function start() {
  const response = await Hf.textGenerationStream({
    model: 'oasst-sft-4-pythia-12b-epoch-3.5',
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
</script>

<main>
  <input type="text" bind:value={input} />
  
</main>

<style>
  
</style>
