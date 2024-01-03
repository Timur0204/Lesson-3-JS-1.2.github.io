  function calc() {
      let term = document.querySelector('#term').value - 0;
      let sum = document.querySelector('#sum').value - 0;
      let rate = document.querySelector('#rate').value - 0;
      let result = document.querySelector('#result');

      if (isNaN(term) || isNaN(sum) || isNaN(rate) || term == '' || sum == '' || rate == '') {
        result.innerHTML = `<h1 style="color: red; margin-top: 15px">Нужно ввести числа</h1>`;
        return;
      }

      let mRate = rate / 100 / 12;
      let totalPayment = 0;

      for (let i = 0; i < term; i++) {
        let monthlyPaymentCalc = (sum * mRate * (1 + mRate)) / ((1 + mRate) ** term - 1);
        totalPayment += monthlyPaymentCalc;
      }

      result.innerHTML = `<h1 style="color: green; margin-top: 15px">Общая сумма выплат: ${totalPayment.toFixed(2)} грн</h1>`;
  }