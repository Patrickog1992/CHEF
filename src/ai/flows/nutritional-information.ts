'use server';

/**
 * @fileOverview A nutritional information AI agent.
 *
 * - getNutritionalInformation - A function that handles the nutritional information retrieval process.
 * - NutritionalInformationInput - The input type for the getNutritionalInformation function.
 * - NutritionalInformationOutput - The return type for the getNutritionalInformation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const NutritionalInformationInputSchema = z.object({
  recipeName: z.string().describe('The name of the recipe.'),
  ingredients: z.string().describe('A list of ingredients and their quantities used in the recipe.'),
});
export type NutritionalInformationInput = z.infer<typeof NutritionalInformationInputSchema>;

const NutritionalInformationOutputSchema = z.object({
  calories: z.number().describe('The total number of calories in the recipe.'),
  protein: z.number().describe('The total amount of protein in grams in the recipe.'),
  carbs: z.number().describe('The total amount of carbohydrates in grams in the recipe.'),
  fats: z.number().describe('The total amount of fat in grams in the recipe.'),
});
export type NutritionalInformationOutput = z.infer<typeof NutritionalInformationOutputSchema>;

export async function getNutritionalInformation(input: NutritionalInformationInput): Promise<NutritionalInformationOutput> {
  return nutritionalInformationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'nutritionalInformationPrompt',
  input: {schema: NutritionalInformationInputSchema},
  output: {schema: NutritionalInformationOutputSchema},
  prompt: `You are a nutritional expert. Given a recipe name and its ingredients with quantities, you will determine the nutritional information for the recipe.

Recipe Name: {{{recipeName}}}
Ingredients: {{{ingredients}}}

Provide the following nutritional information:
- Calories (total number of calories)
- Protein (total grams of protein)
- Carbs (total grams of carbohydrates)
- Fats (total grams of fat)

Ensure that the nutritional information is as accurate as possible based on the provided ingredients and quantities.`,
});

const nutritionalInformationFlow = ai.defineFlow(
  {
    name: 'nutritionalInformationFlow',
    inputSchema: NutritionalInformationInputSchema,
    outputSchema: NutritionalInformationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
