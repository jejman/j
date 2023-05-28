

class Calculator {
    constructor(previousOperationTextElement, currentOperationTextElement) {
      this.previousOperationTextElement = previousOperationTextElement;
      this.currentOperationTextElement = currentOperationTextElement;
      this.clear();
    }
  
    clear() {
      this.currentOperand = "";
      this.previousOperand = "";
      this.operation = undefined;
    }
  
    delete() {
      // Implement the delete method here
      this.currentOperand=this.currentOperand.toString().slice(0,-1)
    }
  
    appendNumber(number) {
        if(number === "." && this.currentOperand.includes(".")) return;
         this.currentOperand = this.currentOperand.toString() + number.toString()
        
    }
  
    chooseOperation(operation) {
      // Implement the chooseOperation method here
      if(this.currentOperand === "") return
      if(this.previousOperand !== ""){
        this.compute()
      }

      this.operation=operation
      this.previousOperand=this.currentOperand
      this.currentOperand=""

      
    }
  
    compute() {
      // Implement the compute method here

      let computation
      const prev=parseFloat(this.previousOperand)
      const current=parseFloat(this.currentOperand)
      if(isNaN(prev) || isNaN(current)) return
      switch (this.operation){
        case "+":
            computation = prev + current
            break
       case "*":
            computation =prev * current
            break
        case "/":
             computation =prev / current
             break
        case "-":
            computation =prev - current
            break
            
            default:
                return 


      }
      this.currentOperand=computation
      this.operation=undefined
      this.previousOperand=""
    }


    getdisplaynumber(){
        const floatnumber=parseFloat(number)
        if(isNaN(floatnumber)) return " "
        return floatnumbernumber.toLocaleString("en")
    }
  
    updateDisplay() {
      this.currentOperationTextElement.innerText = this.currentOperand;
        this.previousOperationTextElement.innerText=this.previousOperand
        this.getdisplaynumber(this.currentOperand)

        if(this.operation !== null){
            this.previousOperationTextElement.innerText=
            `${this.previousOperand} ${this.operation}`
        }
    }
  }
  
  const numberButtons = document.querySelectorAll("[data-number]");
  const operationButtons = document.querySelectorAll("[data-operation]");
  const equalsButton = document.querySelector("[data-equals]");
  const deleteButton = document.querySelector("[data-delete]");
  const allClearButton = document.querySelector("[data-all-clear]");
  const previousOperationTextElement = document.querySelector("[data-previous-operand]");
  const currentOperationTextElement = document.querySelector("[data-current-operand]");
  
  const calculator = new Calculator(previousOperationTextElement, currentOperationTextElement);
  
  numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
      calculator.appendNumber(button.innerText);
      calculator.updateDisplay();
    });
  });
  
  operationButtons.forEach((button) => {
    button.addEventListener("click", () => {
      calculator.chooseOperation(button.innerText);
      calculator.updateDisplay();
    });
  });


  equalsButton.addEventListener("click",() =>{
    calculator.compute()
    calculator.updateDisplay()
 })


 allClearButton.addEventListener("click", ()=>{
    calculator.clear()
    calculator.updateDisplay()
 })

 
deleteButton.addEventListener("click", ()=>{
    calculator.delete()
    calculator.updateDisplay()
 })