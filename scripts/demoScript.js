/*
const { Configuration, OpenAIApi } = require("openai");


const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const chatCompletion = await openai.createChatCompletion({
  model: "gpt-3.5-turbo",
  messages: [{role: "user", content: "Hello world"}],
});
console.log(chatCompletion.data.choices[0].message);

*/




const response = document.querySelector(".response");
const typedReply = document.querySelector(".Typewriter_wrapper")

const typewriter = new Typewriter(response, {
  delay: 0, // Delay between each character typing (in milliseconds)
});

const demoGrid = document.querySelector(".fourGrid")

demoGrid.addEventListener('mouseup', function() {
    var selectedText = window.getSelection().toString();
    
    if (selectedText !== '') {
      // Do something with the selected text
      // contact chat gpt api
      //console.log('Selected Text: ' + selectedText);
    typewriter.deleteAll({ delay: 0 }).typeString(`Hi, I am EarningsVisionGPT. `).start();
    }
  });

  







//just some styles for rotating circle text
  const text = document.querySelector(".text p");
  text.innerHTML = text.innerText
      .split("")
      .map(
          (char, i) => `<span style="transform:rotate(${i * 10}deg)">${char}</span>`
      )
      .join("");
      







