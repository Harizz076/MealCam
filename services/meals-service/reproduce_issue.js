const { GoogleGenerativeAI } = require('@google/generative-ai');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
require('dotenv').config();

async function run() {
  console.log('Testing Gemini API with corrected model names...');
  
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('❌ GEMINI_API_KEY is missing!');
    return;
  }
  
  const genAI = new GoogleGenerativeAI(apiKey);
  
  try {
      console.log('Attempting to generate content with gemini-flash-latest...');
      const model = genAI.getGenerativeModel({ model: 'gemini-flash-latest' });
      const result = await model.generateContent('Hello');
      console.log('✅ Success with gemini-flash-latest! Response:', result.response.text());
  } catch(e) {
      console.error('❌ Failed gemini-flash-latest:', e.message);
  }

  try {
      console.log('\nAttempting to generate content with gemini-2.0-flash...');
      const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
      const result = await model.generateContent('Hello');
      console.log('✅ Success with gemini-2.0-flash! Response:', result.response.text());
  } catch(e) {
      console.error('❌ Failed gemini-2.0-flash:', e.message);
  }
}

run();
