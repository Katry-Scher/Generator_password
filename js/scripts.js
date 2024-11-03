// Funções
const getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  };
  
  const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  };
  
  const getNumber = () => {
    return Math.floor(Math.random() * 10).toString();
  };
  
  const getSymbol = () => {
    const symbols = "(){}[]=<>/,.!@#$%&*+-";
    return symbols[Math.floor(Math.random() * symbols.length)];
  };
  
  // Seleção de elementos
  const generatePasswordButton = document.querySelector("#generate-passaword");
  const generatedPasswordElement = document.querySelector("#generated-password");
  const passwordLength = 10; // Defina o comprimento da senha
  const generators = [getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol];
  
  const generatePassword = () => {
    let password = "";
  
    for (let i = 0; i < passwordLength; i++) {
      const randomValue =
        generators[Math.floor(Math.random() * generators.length)]();
      password += randomValue;
    }
  
    generatedPasswordElement.style.display = "block";
    generatedPasswordElement.querySelector("h4").innerText = password;
  };
  
  // Eventos
  generatePasswordButton.addEventListener("click", generatePassword);
  

  